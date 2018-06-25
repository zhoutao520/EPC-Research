var vm = new Vue({
    el:'#app',
    data:{
        /* 用户 */
        user : {
            userId : '',
            username : '',
            password : '',
            name : '',
            phone : '',
            is_active : true,
            email : '',
        },
        index : {
            show : true,
            data : []
        },
        curPage : 1,
        allPage : 0,
        loading : false
    },
    watch: {

    },
    methods : {
        exit() {
            this.$messagebox.confirm('确认退出登录？').then(action => {
                localStorage.removeItem('userId');
                location.href='login.html';
            }).catch(e => {
                return false;
            });
        },
        loadMore () {
            this.loading = true;
            if(this.curPage == Math.ceil(this.allPage)){
                this.loading = false;
                let instance = this.$toast('已全部加载完数据');
                setTimeout(() => {
                    instance.close();
                }, 1000);
                return false;
            }
            let params = new URLSearchParams();
            params.append('allPage', this.allPage);
            params.append('curPage', this.curPage);
            axios.get(baseURL+'ec_AdminSelect/',{
                params : params
            })
            .then(res => {
                if(res.data.status == 200){
                    this.curPage++;
                    this.index.data.push.apply(this.index.data,res.data.data);
                    this.loading = false;
                }else{
                    this.loading = false;
                    let instance = this.$toast('获取项目信息失败');
                    setTimeout(() => {
                        instance.close();
                    }, 2000);
                }
            })
            .catch(error => {
                this.loading = false;
                let instance = this.$toast('获取项目信息失败');
                setTimeout(() => {
                    instance.close();
                }, 2000);
            })
        },
        indexClick (item) {
            localStorage.setItem('flow_num',item.flow_num);
            location.href = 'crewView.html';
        }
    },
    created () {
        
    },
    mounted () {
        axios.get(baseURL+'ec_AdminSelect/')
        .then(res => {
            console.log(res);
            if(res.data.status == 200){
                this.curPage = res.data.curPage;
                this.allPage = res.data.allPage;
                this.index.data = res.data.data;
                document.getElementById("load").style.display="none";
            }else{
                let instance = this.$toast('获取项目信息失败');
                setTimeout(() => {
                    instance.close();
                }, 2000);
            }
        })
        .catch(error => {
            let instance = this.$toast('获取项目信息失败');
            setTimeout(() => {
                instance.close();
            }, 2000);
        })
    }
});
