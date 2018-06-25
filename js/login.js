// var baseURL = 'http://192.168.0.39/';
// var baseURL = 'http://192.168.0.106/';
// var baseURL = 'http://192.168.0.3/';
var baseURL = 'http://surveyhd.epcifm.co/';
var vm = new Vue({
    el:'#wrapper',
    data:{
        login : true,
        username : '',
        psd : '',
        phoneR : '',
        nameR : '',
        emailR : '',
        psdR : '',
        repsdR : '',
        code : '',
        count : 60,
        codeT : true,
        is_phone : false,
        is_register : true,
        registerT : true
    },
    methods : {
        check : function () {
            if(!(/^1[0-9]{10}$/.test(this.phoneR))){
                var instance = this.$toast('手机号填写有误！');
                setTimeout(function () {
                instance.close();
                }, 2000);
                return false;
            }
            if(this.nameR == '' || this.nameR == ' ' || this.nameR == undefined){
                var instance = this.$toast('姓名不得为空！');
                setTimeout(function () {
                    instance.close();
                }, 2000);
                return false;
            }
            if(!(/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(this.emailR))){
                var instance = this.$toast('邮箱填写有误！');
                setTimeout(function () {
                instance.close();
                }, 2000);
                return false;
            }
            if(!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(this.psdR))){
                var instance = this.$toast('6~16位密码，包含字母和数字');
                setTimeout(function () {
                instance.close();
                }, 2000);
                return false;
            }
            if(this.repsdR == undefined || this.repsdR == '' || this.repsdR != this.psdR ){
                var instance = this.$toast('请重新输入密码');
                setTimeout(function () {
                instance.close();
                }, 2000);
                return false;
            }
            return true;
        },
        sendCode : function () {
            var _this = this;
            if(this.check() == false){
                return false;
            }
            var instance = this.$toast('正在发送验证码，请注意查收！');
            setTimeout(function () {
            instance.close();
            }, 2000);
            this.codeT = false;
            var timer = setInterval(function () {
                if(vm.count <= 0) {
                    clearInterval(timer);
                    _this.codeT = true;
                    vm.count = 60;
                }
                vm.count --;
            }, 1000);
            axios.post(baseURL+'emailServices/sendSMS/',{
                phone : this.phoneR
            }).then(function (res) {
                console.log(res);
            })
        },
        register : function () {
            var _this = this;
            if(this.check() == false){
                return false;
            }
            this.registerT = false;
            var data = JSON.stringify({
                name : this.nameR,
                phone : this.phoneR,
                email : this.emailR,
                password : this.psdR,
                code_check : this.code
            });
            if(this.is_register){
                var params = new URLSearchParams();
                params.append('data', data);
                axios.post(baseURL+'services/register/',params)
                .then(function (res) {
                    if (res.data.status == 200) {
                        var instance = _this.$toast('注册成功');
                        setTimeout(function () {
                            instance.close();
                            _this.login = true;
                        }, 1000);
                    }else{
                        _this.registerT = true;
                        var instance = _this.$toast('验证码不正确，注册失败');
                        setTimeout(function () {
                            instance.close();
                        }, 2000);
                    }
                })
            }
        },
        judge : function (name) {
            var _this = this;
            var data = JSON.stringify({
                register : name,
            });
            var params = new URLSearchParams();
            params.append('register', name);
            axios.get(baseURL+'services/register/',{
                params :params
            })
            .then(function (res) {
                if(res.data.status == 200){
                    var instance = _this.$toast(res.data.data);
                    setTimeout(function () {
                        _this.is_register = false;
                        instance.close();
                    }, 2000);
                }else{
                    _this.is_register = true;
                }
            })
        },
        toLogin : function () {
            var _this = this;
            if(this.username == undefined || this.username == '' || this.psd == undefined || this.psd == ''){
                var linstance = this.$toast('账号密码不得为空');
                setTimeout(function () {
                    linstance.close();
                }, 1000);
                return false;
            }
            var em = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
            var ph = /^1[0-9]{10}$/;
            if(!(em.test(this.username) || ph.test(this.username))){
                var linstance1 = this.$toast('账号格式错误');
                setTimeout(function () {
                    linstance1.close();
                }, 1000);
                return false;
            }
            var data = JSON.stringify({
                user : this.username,
                password : this.psd
            });
            var params = new URLSearchParams();
            params.append('data', data);
            axios.post(baseURL+'services/login/',params)
            .then( (res) => {
                console.log(res)
                switch (res.data.status) {
                    case 200 : 
                        localStorage.setItem('userId',res.data.userId);
                        if(!res.data.is_admin){
                            location.href = 'index.html'
                        }else{
                            this.$messagebox.confirm('',{
                                message: '请选择查看还是计算数据',
                                title: '',  
                                showConfirmButton:true,
                                showCancelButton:true,
                                confirmButtonText:'查看数据',
                                cancelButtonText:'计算数据'
                            }).then(action => {
                                location.href = 'projectView.html'
                            }).catch(e => {
                                location.href = 'list_pro.html'
                            });
                        }
                        break;
                    case 201 :
                        var instance3 = _this.$toast(res.data.data);
                        setTimeout(function () {
                            instance3.close();
                        }, 1000);
                        break;
                    default :
                        var linstance4 = _this.$toast('用户不存在或账户未激活');
                        localStorage.setItem('userId',res.data.userId);
                        setTimeout(function () {
                            linstance4.close();
                        }, 1000);
                        break;
                }
                
            })
            .catch(error => {
                if(error == "Error: Network Error"){
                    axios.post(baseURL+'services/login/')
                    .then( (res) => {
                        console.log(res)
                    })
                }
            })
        }
    },
    created : function () {
        
    },
    mounted : function () {
        
    }
});