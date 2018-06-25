var vm = new Vue({
    el:'#app',
    data:{
        options : [
            {
                label: '是',
                value: true
            },
            {
                label: '否',
                value: 'false'
            }
        ],
        option : [
            {
                label: '冷水机组',
                value: 'a'
            },
            {
                label: '风冷热泵',
                value: 'b'
            },
            {
                label: '地源热泵',
                value: 'c'
            },
            {
                label: '溴化锂机组',
                value: 'd'
            },
            {
                label: '燃气(油)锅炉',
                value: 'e'
            },
            {
                label: '燃煤锅炉',
                value: 'f'
            },
            {
                label: '电锅炉',
                value: 'g'
            },
            {
                label: '市政供热',
                value: 'h'
            },
            {
                label: '热力站供热',
                value: 'i'
            },
            {
                label: 'VRV多联机',
                value: 'j'
            },
            {
                label: '换热器',
                disabled: true,
                value: 'k'
            },
            {
                label: '楼宇自控系统',
                disabled: true,
                value: 'l'
            }
        ],
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
        crewState : 0,
        /* 流水单号 */
        flow_num : '',
        /* 首页 */
        index : {
            show : true,
            data : []
        },
        /* 选择用途 */
        choice : {
            show : false,
            other : false
        },
        /* 选择设备 */
        select : {
            show : false,
            options : []
        },
        /* 设备信息 */
        projectInfo : {
            show : false,
            options : {
                id :[],
                name : []
            }
        },
        /* 机组信息 */
        crew : {
            show : false,
            id : '',
            title : '',
            options : [],
            status : []
        },
        /* 基本信息 */
        basic : {
            show : false,
            type : 0,
            data : {
                pro_name : '',
                pro_used : '',
                pro_floor : '',
                pro_cover : '',
                pro_place : '',
                pro_createTime : '',
                pro_cost : '',
                pro_cool : '',
                pro_hot : '',
                pro_end : '',
                pro_rentCost : '',
                pro_electric_money : '',
                pro_electric_change : true,
                pro_gas_money : '',
                pro_manage : '',
                pro_outsource : false,
                pro_company : '',
                pro_pserson : ''
            }
        },
        /* 楼宇自控 */
        building : {
            show : false,
            data : {
                software_maker : '',
                software_type : '',
                control_maker : '',
                control_type : '',
                is_get_out_temp : true,
                is_get_in_temp : true,
                is_get_in_humidity : false,
                is_tempAndHumidity : 80,
                is_get_cool_status : true,
                is_get_cool_control : false,
                is_get_hot_status : true,
                is_get_hot_control : false,
                is_get_end_status : true,
                is_get_end_control : false,
                auto_control_time : 70
            }
        },
        /* 末端系统 */
        endSystem : {
            show : false,
            data : {
                tube_type : '双管',
                pump_type : '一次',
                ahu_type : '',
                is_buildingTempPoint : true,
                buildingTempPointNum : '',
                is_ahu_auto_control : true,
                is_ahu_electric_valve : true,
                summer_indoor_temp : '',
                summer_indoor_humi : '',
                winter_indoor_temp : '',
                winter_indoor_humi : '',
                is_computer_control : false,
                end_check_frequency : '',
                is_indoor_auto_control : false,
            }
        },
        /* 末端设备 */
        endMachine : {
            show : false,
            state :0,
            data : [{
                end_type : '',
                imgName : '',
                end_brand : '',
                end_model : '',
                end_num : '',
                send_wind : '',
                end_cool : '',
                end_power : '',
                end_humidity_power : '',
                is_change_start : false,
                is_long_control : true,
                is_new_air : true,
                new_air_percent : 100,
            }]
        },
        /* 制冷系统的负荷水平和运行策略 */
        coolMethod : {
            show : false,
            slots1 : [
                {
                  flex: 1,
                  defaultIndex : 0,
                  values: ['1月', '2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                  textAlign: 'center'
                }, {
                  flex: 1,
                  defaultIndex : 0,
                  values: ['1日', '2日','3日','4日','5日','6日','7日','8日','9日','10日','11日','12日','13日','14日','15日','16日','17日','18日','19日','20日','21日','22日','23日','24日','25日','26日','27日','28日','29日','30日','31日',],
                  textAlign: 'center'
                },{
                  divider: true,
                  content: '至',
                }, {
                  flex: 1,
                  defaultIndex : 0,
                  values: ['1月', '2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                  textAlign: 'center'
                }, {
                  flex: 1,
                  defaultIndex : 0,
                  values: ['1日', '2日','3日','4日','5日','6日','7日','8日','9日','10日','11日','12日','13日','14日','15日','16日','17日','18日','19日','20日','21日','22日','23日','24日','25日','26日','27日','28日','29日','30日','31日',],
                  textAlign: 'center'
                }
            ],
            slots2 : [
                {
                  flex: 1,
                  defaultIndex : 0,
                  values: ['周一', '周二','周三','周四','周五','周六','周日'],
                  textAlign: 'center'
                },{
                  divider: true,
                  content: '至',
                }, {
                  flex: 1,
                  defaultIndex : 0,
                  values: ['周一', '周二','周三','周四','周五','周六','周日'],
                  textAlign: 'center'
                },{
                  flex: 1,
                  values: ['1:00', '2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','24:00',],
                  textAlign: 'center'
                },{
                  divider: true,
                  content: '至',
                },{
                  flex: 1,
                  values: ['1:00', '2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','24:00',],
                  textAlign: 'center'
                }
            ],
            LtemRL:'',
            LtemAL:'',
            LtemRH:'',
            LtemAH:'',
            HtemRL:'',
            HtemAL:'',
            HtemRH:'',
            HtemAH:'',
            data : {
                cool_month : '',
                cool_workTime : '',
                cool_open_low : '',
                cool_open_high : '',
                cool_machine_start_menthod : '',
                ldWater_low_in_set : '',
                ldWater_low_in_actual : '',
                ldWater_low_return_actual : '',
                ldWater_high_in_set : '',
                ldWater_high_in_actual : '',
                ldWater_high_return_actual : '',
                lqWater_low_range : '',
                lqWater_low_actual : '',
                lqWater_high_range : '',
                lqWater_high_actual : ''
            }
        },
        /* 冷机 */
        coolMachine : {
            show : false,
            state : 0,
            data : [{
                machine_type : '离心式',
                imgName : '',
                unit : 'RT',
                machine_model : '',
                machine_vender : '',
                machine_count : '',
                machine_perPower : '',
                machine_perCool : '',
                machine_ld_outWaterTempLow : '',
                machine_ld_outWaterTempHigh : '',
                machine_card : '',
                is_has_hand_valve : true,
                is_hand_valve_used : true,
                is_has_auto_valve : true,
                is_auto_valve_used : true,
                machine_control : ''
            }]
        },
        /* 风冷热泵 */
        windCoolMachine : {
            show : false,
            state :0,
            data : [{
                machine_type : '离心式',
                imgName : '',
                machine_vender : '',
                machine_count : '',
                machine_perPower : '',
                machine_perCool : '',
                machine_card : '',
                machine_ld_outWaterTempLow : '',
                machine_ld_outWaterTempHigh : '',
                is_has_hand_valve : true,
                is_hand_valve_used : true,
                is_has_auto_valve : true,
                is_auto_valve_used : true,
                machine_control : ''
            }]
        },
        /* 地源热泵 */
        earthCoolMachine : {
            show : false,
            state :0,
            data : [{
                machine_type : '离心式',
                imgName : '',
                unit : 'RT',
                machine_vender : '',
                machine_count : '',
                machine_perPower : '',
                machine_perCool : '',
                machine_ld_outWaterTempLow : '',
                machine_ld_outWaterTempHigh : '',
                machine_hot_outWaterTempLow : '',
                machine_hot_outWaterTempHigh : '',
                machine_card : '',
                is_has_hand_valve : true,
                is_hand_valve_used : true,
                is_has_auto_valve : true,
                is_auto_valve_used : true,
                machine_control : ''
            }]
        },
        /* 循环水泵 */
        loopPump : {
            show : false,
            state :0,
            data : [{
                machine_used : '',
                imgName : '',
                machine_count : '',
                machine_power : '',
                machine_flow : '',
                machine_lift : '',
                machine_start_low : '',
                machine_start_high : '',
                machine_start_way : '变频',
                is_get_work_status : '',
                is_work_status : ''
            }]
        },
        /* 冷却塔 */
        tower : {
            show : false,
            state :0,
            indexT :0,
            sheetVisible : false,
            actions : [
                {
                    name : '逆流式冷却塔',
                    method : function (){
                        vm.tower.data[vm.tower.indexT].machine_used = this.name
                    }
                },
                {
                    name : '横流式冷却塔',
                    method : function (){
                        vm.tower.data[vm.tower.indexT].machine_used = this.name
                    }
                },
                {
                    name : '喷射式冷却塔',
                    method : function (){
                        vm.tower.data[vm.tower.indexT].machine_used = this.name
                    }
                },
                {
                    name : '开式冷却塔',
                    method : function (){
                        vm.tower.data[vm.tower.indexT].machine_used = this.name
                    }
                },
                {
                    name : '闭式冷却塔',
                    method : function (){
                        vm.tower.data[vm.tower.indexT].machine_used = this.name
                    }
                },
                {
                    name : '其他冷却塔',
                    method : function (){
                        vm.tower.data[vm.tower.indexT].machine_used = this.name
                    }
                },
            ],
            data : [{
                machine_used : '',
                machine_count : '',
                machine_power : '',
                machine_pump_power : '',
                machine_pump_count : '',
                is_change_windHz : false,
                is_change_pumpHz : false,
                machine_start_low : '',
                machine_start_high : '',
                is_hand_status : true,
                is_hand_status_used : true,
                is_auto_status : true,
                is_auto_status_used : true,
                is_get_work_status : true,
                is_work_status : false,
            }]
        },
        /* 蓄冰系统 */
        ice : {
            show : false,
            state :0,
            data : {
                machine_type : '',
                machine_capacity : '',
                machine_control : ''
            }
        },
        /* 供热系统的负荷水平和运行策略 */
        hotMethod : {
            show : false,
            slots1 : [
                {
                  flex: 1,
                  defaultIndex : 0,
                  values: ['1月', '2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                  textAlign: 'center'
                }, {
                  flex: 1,
                  defaultIndex : 0,
                  values: ['1日', '2日','3日','4日','5日','6日','7日','8日','9日','10日','11日','12日','13日','14日','15日','16日','17日','18日','19日','20日','21日','22日','23日','24日','25日','26日','27日','28日','29日','30日','31日',],
                  textAlign: 'center'
                },{
                  divider: true,
                  content: '至',
                }, {
                  flex: 1,
                  defaultIndex : 0,
                  values: ['1月', '2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                  textAlign: 'center'
                }, {
                  flex: 1,
                  defaultIndex : 0,
                  values: ['1日', '2日','3日','4日','5日','6日','7日','8日','9日','10日','11日','12日','13日','14日','15日','16日','17日','18日','19日','20日','21日','22日','23日','24日','25日','26日','27日','28日','29日','30日','31日',],
                  textAlign: 'center'
                }
            ],
            slots2 : [
                {
                  flex: 1,
                  defaultIndex : 0,
                  values: ['周一', '周二','周三','周四','周五','周六','周日'],
                  textAlign: 'center'
                },{
                  divider: true,
                  content: '至',
                }, {
                  flex: 1,
                  defaultIndex : 0,
                  values: ['周一', '周二','周三','周四','周五','周六','周日'],
                  textAlign: 'center'
                },{
                  flex: 1,
                  defaultIndex : 0,
                  values: ['1:00', '2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','24:00',],
                  textAlign: 'center'
                },{
                  divider: true,
                  content: '至',
                },{
                  flex: 1,
                  defaultIndex : 0,
                  values: ['1:00', '2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','24:00',],
                  textAlign: 'center'
                }
            ],
            data : {
                hot_month : '',
                hot_workTime : '',
                cool_open_low : '',
                cool_open_high : '',
                cool_machine_start_menthod : '',
                ldWater_low_in_set : '',
                ldWater_low_in_actual : '',
                ldWater_low_return_actual : '',
                ldWater_high_in_set : '',
                ldWater_high_in_actual : '',
                ldWater_high_return_actual : '',
            }
        },
        /* 锅炉 */
        boilerMachine : {
            show : false,
            state :0,
            data : [{
                bolier_brand : '',
                imgName : '',
                unit : 'MW',
                bolier_model : '',
                bolier_num : '',
                boiler_power : '',
                boiler_type : '',
                fuel_type : '',
                fuel_used : '',
                hot_water_out_low : '',
                hot_water_out_high : '',
                boiler_control : '',
            }]
        },
        /* 溴化锂机组 */
        liMachine : {
            show : false,
            state :0,
            data : [{
                unit : 'MW',
                imgName : '',
                li_brand : '',
                li_model : '',
                li_num : '',
                li_power : '',
                li_type : '',
                machine_type : '',
                high_hot : '',
                low_hot : '',
                machine_power : '',
                gas_used : '',
                hot_water_out_low : '',
                hot_water_out_high : '',
                boiler_control : '',
            }]
        },
        /* 换热器 */
        bhMachine : {
            show :false,
            state :0,
            data : [{
                bh_num : '',
                imgName : '',
                bh_type : '',
                is_hand_status : true,
                is_hand_used : true,
                is_auto_status : true,
                is_auto_used : true,
                is_work_status : false,
                is_water_in_temp : false,
                is_water_in_temp2 : true,
            }]
        },
        /* 燃煤锅炉 */
        coalMachine : {
            show : false,
            state :0,
            data : [{
                bolier_brand : '',
                imgName : '',
                unit : 'MW',
                bolier_model : '',
                bolier_num : '',
                boiler_power : '',
                boiler_type : '',
                boiler_press : '',
                boiler_ratio : '',
                boiler_coal : '',
                fuel_type : '',
                money_coal : '',
                hot_water_out_low : '',
                hot_water_out_high : '',
                boiler_control : '',
            }]
        },
        /* 市政供热 */
        govMachine : {
            show : false,
            state :0,
            data : [{
                hot_type : '',
                imgName : '',
                unit : 'MW',
                hot_content : '',
                hot_way : '',
                hot_moeny : '',
                hot_temp_out_low : '',
                hot_temp_out_high : '',
                hot_control : '',
            }]
        },
        /* 热力站供热 */
        stationMachine : {
            show : false,
            state :0,
            data : [{
                hot_type : '',
                imgName : '',
                unit : 'MW',
                hot_content : '',
                hot_way : '',
                hot_moeny : '',
                hot_temp_out_low : '',
                hot_temp_out_high : '',
                hot_control : '',
            }]
        },
        /* 电锅炉 */
        eBoilerMachine : {
            show : false,
            state :0,
            data : [{
                bolier_brand : '',
                imgName : '',
                boiler_model : '',
                boiler_num : '',
                boiler_power : '',
                boiler_type : '',
                hot_water_out_low : '',
                hot_water_out_high : '',
                boiler_control : '',
            }]
        },
        /* VRV多联机系统 */
        VRV : {
            show :false,
            state :0,
            indexD :0,
            data : [{
                machine_brand : '',
                imgName : '',
                machine_install : '',
                machine_outMachineCount : '',
                machine_outMachinePower : '',
                machine_outMachineCool : '',
                machine_inMachineCount : '',
                machine_inMachinePower : '',
                machine_MachineArea : '',
                is_machine_control : false
            }]
        }
    },
    watch: {
        'select.options' () {
            if(this.select.options.length == 2 && this.select.options[0] == ['k'] && this.select.options[1] == ['l']){
                this.select.options = [];
                this.option[10].disabled = true;
                this.option[11].disabled = true;
            }else if(this.select.options.length == 1 && this.select.options[0] == ['k'] || this.select.options[0] == ['l']){
                this.select.options = [];
                this.option[10].disabled = true;
                this.option[11].disabled = true;
            }else{
                this.option[10].disabled = false;
                this.option[11].disabled = false;
            }
        }
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
        projectOver () {
            this.$messagebox.confirm('确定已填写完项目信息?<br>上传后将无法修改，请慎重！').then(action => {
                let instance = this.$toast('正在上传中，请等待');
                let params = new URLSearchParams();
                params.append('flow_num', localStorage.getItem('flow_num'));
                axios.post(baseURL+'ec_BasicUpdateStatus/',params)
                .then(res => {
                    if(res.data.status == 200){
                        instance.close();
                        location.reload();
                    }
                })
                .catch(error => {
                    console.log(error);
                });
            }).catch(e => {
                return false;
            });
        },
        changeImage (e,machine) {
            var fId = this.crew.id;
            var fN = localStorage.getItem('flow_num');
            var file = e.target.files[0]
            var newfile = new File([file], fN+'_'+fId+'_'+new Date().getTime()+".jpg",{type:"image/jpeg"});
            var image = new FormData()
            image.append('img', newfile)
            image.append('name', 'a')
            image.append('userId', localStorage.getItem('userId'))
            image.append('flow_num', fN)
            axios.post(baseURL+'upload/', image, {
                headers: {
                "Content-Type": "multipart/form-data"
                }
            }).then(res => {
                machine.imgName = baseURL+res.data.data
            });
        },
        slots1Change(picker, values) {  
            this.coolMethod.data.cool_month = values[0]+values[1]+'至'+values[2]+values[3];
        },
        openPicker (index) {
            this.$refs.picker[index].open();
        },
        addMachine (machine) {
            if(!this.crewState){
                let instance = this.$toast('已上传，当前只能修改，无法添加设备！');
                setTimeout(() => {
                    instance.close();
                }, 2000);
                return false;
            }
            this.$messagebox.confirm('确定添加此设备?').then(action => {
                let add = JSON.stringify(machine.data[0]);
                machine.data.push(JSON.parse(add));
                machine.state = machine.data.length-1;
            }).catch(e => {
                return false;
            });
        },
        dateChange (d) {
            let index = 0;
            switch (d) {
                case '周一' :
                    index = 0;
                    break;
                case '周二' :
                    index = 1;
                    break;
                case '周三' :
                    index = 2;
                    break;
                case '周四' :
                    index = 3;
                    break;
                case '周五' :
                    index = 4;
                    break;
                case '周六' :
                    index = 5;
                    break;
                case '周日' :
                    index = 6;
                    break;
            }
            return index;
        },
        showMachine (index,machine,flag) {
            flag ? machine.state = index : machine.state = -1;
        },
        handleConfirm (val) {
            this.VRV.data[this.VRV.indexD].machine_install = val.toLocaleDateString();
        },
        slots2Change(picker, values) {  
            this.coolMethod.data.cool_workTime = values[0]+'至'+values[1]+' '+values[2]+'至'+values[3];
        },
        slots3Change(picker, values) {  
            this.hotMethod.data.hot_month = values[0]+values[1]+'至'+values[2]+values[3];
        },
        slots4Change(picker, values) {  
            this.hotMethod.data.hot_workTime = values[0]+'至'+values[1]+' '+values[2]+'至'+values[3];
        },
        booleanTrans (transData) {
            transData.forEach(e => {
                for (const key in e) {
                    if(e[key]=='false'){
                        e[key] = false;
                    }
                }
            })
        },
        optionTrans (optionData) {
            this.projectInfo.options.name = [];
            optionData.forEach( e => {
                switch (e) {
                    case 'a' :
                        this.projectInfo.options.name.push('冷水机组');
                        break;
                    case 'b' :
                        this.projectInfo.options.name.push('风冷热泵');
                        break;
                    case 'c' :
                        this.projectInfo.options.name.push('地源热泵');
                        break;
                    case 'd' :
                        this.projectInfo.options.name.push('溴化锂机组');
                        break;
                    case 'e' :
                        this.projectInfo.options.name.push('燃气(油)锅炉');
                        break;
                    case 'f' :
                        this.projectInfo.options.name.push('燃煤锅炉');
                        break;
                    case 'g' :
                        this.projectInfo.options.name.push('电锅炉');
                        break;
                    case 'h' :
                        this.projectInfo.options.name.push('市政供热');
                        break;
                    case 'i' :
                        this.projectInfo.options.name.push('热力站供热');
                        break;
                    case 'j' :
                        this.projectInfo.options.name.push('VRV多联机');
                        break;
                    case 'k' :
                        this.projectInfo.options.name.push('换热器');
                        break;
                    case 'l' :
                        this.projectInfo.options.name.push('楼宇自控系统');
                        break;
                    case 'm' :
                        this.projectInfo.options.name.push('末端设备');
                        break;
                    case 'n' :
                        this.projectInfo.options.name.push('末端系统');
                        break;
                }
            });
        },
        indexClick (item) {
            if(item.is_submit){
                localStorage.setItem('flow_num',item.flow_num);
                location.href = 'crewView.html';
            }
            let params = new URLSearchParams();
            params.append('flow_num', item.flow_num);
            axios.get(baseURL+'BasicHistory/',{
                params:params
            })
            .then(res => {
                if(res.data.status == 200){
                    this.projectInfo.options.id = eval("(" + res.data.data + ")");
                    this.optionTrans(this.projectInfo.options.id);
                    localStorage.setItem('flow_num',item.flow_num);
                    this.index.show = false;
                    this.projectInfo.show = true;
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
        },
        crewTrans (crew) {
            this.crew.options = [];
            crew.forEach( e => {
                switch (e) {
                    case '2' :
                        this.crew.options.push('楼宇自控系统');
                        break;
                    case '3' :
                        this.crew.options.push('末端系统');
                        break;
                    case '4' :
                        this.crew.options.push('末端设备');
                        break;
                    case '5' :
                        this.crew.options.push('制冷系统');
                        break;
                    case '6' :
                        this.crew.options.push('冷机');
                        break;
                    case '7' :
                        this.crew.options.push('风冷热泵');
                        break;
                    case '8' :
                        this.crew.options.push('地源热泵');
                        break;
                    case '9' :
                        this.crew.options.push('循环水泵');
                        break;
                    case '10' :
                        this.crew.options.push('冷却塔');
                        break;
                    case '11' :
                        this.crew.options.push('蓄冰系统');
                        break;
                    case '12' :
                        this.crew.options.push('供热系统');
                        break;
                    case '13' :
                        this.crew.options.push('锅炉');
                        break;
                    case '14' :
                        this.crew.options.push('溴化锂机组');
                        break;
                    case '15' :
                        this.crew.options.push('燃煤锅炉');
                        break;
                    case '16' :
                        this.crew.options.push('市政供热');
                        break;
                    case '17' :
                        this.crew.options.push('热力站供热');
                        break;
                    case '18' :
                        this.crew.options.push('电锅炉');
                        break;
                    case '19' :
                        this.crew.options.push('换热器');
                        break;
                    case '20' :
                        this.crew.options.push('VRV多联机');
                        break;
                }
            });
        },
        crewBack () {
            this.projectInfo.show = true;
            this.crew.show = false;
            this.crew.options = [];
        },
        choiceClick (type) {
            this.choice.show = false;
            this.basic.show = true;
            this.basic.data.pro_used = type;
        },
        selectClick () {
            if(this.select.options.length == 1 && this.select.options[0] == ['j']){
                this.$messagebox('警告', `本项目VRV系统节能空间很小，<br>自控系统存在以下方案：<br>
                末端集中控制系统，手机远程控制VRV末端设备启停、温度设置等功能`);
                return false;
            }
            this.select.options.push('m');
            this.select.options.push('n');
            let selectD  = JSON.stringify(this.select.options);
            let params = new URLSearchParams();
            params.append('flow_num', localStorage.getItem('flow_num'));
            params.append('userId',  localStorage.getItem('userId'));
            params.append('data', selectD);
            axios.post(baseURL+'Basic/',params)
            .then(res => {
                console.log(res)
                if(res.data.status == 200){
                    this.select.show = false;
                    this.projectInfo.show = true;
                    this.projectInfo.options.id = this.select.options;
                    this.optionTrans(this.projectInfo.options.id)
                }else{
                    let instance = this.$toast('选择失败');
                    setTimeout(() => {
                        instance.close();
                    }, 2000);
                }
            })
            .catch(error => {
                let instance = this.$toast('选择失败');
                setTimeout(() => {
                    instance.close();
                }, 2000);
            })
        },
        projectInfoClick (item,name) {
            this.crew.title = name;
            let params = new URLSearchParams();
            params.append('flow_num', localStorage.getItem('flow_num'));
            params.append('fatherId', item);
            params.append('timer', new Date().getTime());
            axios.get(baseURL+'queryChild/',{
                params : params
            })
            .then(res => {
                if(res.data.status == 200) {
                    this.crew.id = item;
                    this.crew.status = [];
                    let project = res.data.child_id.split(',');
                    let project2 = res.data.data.split(',');
                    let pArr = [];
                    project2.forEach( e => {
                        let project3 = '';
                        let reg = new RegExp(item);
                        if ( reg.test(e) ) {
                            pArr.push(e.slice(2));
                        }
                    })
                    for (i in project){
                        let flag = false;
                        pArr.forEach( e => {
                            if( project[i] == e ) {
                                this.crew.status.push('已填写');
                                flag = true;
                            }
                        })
                        flag ? '' : this.crew.status.push('未填写');
                    }
                    this.crewTrans(project);
                    this.projectInfo.show = false;
                    this.crew.show = true;
                }
            })
            .catch(error => {
                console.log(error);
            })
        }, 
        crewClick (name,status) {
            this.$indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
            this.crew.show = false;
            status == '未填写' ? this.crewState = 1 : this.crewState = 0;
            let params = new URLSearchParams();
            params.append('flow_num', localStorage.getItem('flow_num')+'_'+this.crew.id);
            params.append('time', new Date().getTime());
            switch (name) {
                case '楼宇自控系统' :
                    axios.get(baseURL+'BasicBuildControl/',{
                        params : params
                    })
                    .then(res => {
                        console.log(res)
                        if(res.data.status == 200) {
                            this.building.data = res.data.data[0];
                        }
                        this.$indicator.close();
                        this.building.show = true;  
                    })
                    .catch(error => {
                    let instance = this.$toast('查询失败');
                    setTimeout(() => {
                        instance.close();
                        }, 2000);
                    })
                    break;
                case '末端系统' :
                    axios.get(baseURL+'BasicEndSystem/',{
                        params : params
                    })
                    .then(res => {
                        if(res.data.status == 200) {
                            this.endSystem.data = res.data.data[0];
                        }
                        this.$indicator.close();
                        this.endSystem.show = true;
                    })
                    .catch(error => {
                        let instance = this.$toast('查询失败');
                        setTimeout(() => {
                            instance.close();
                        }, 2000);
                    })
                    break;
                case '末端设备' :
                    axios.get(baseURL+'BasicEndMachine/',{
                        params : params
                    })
                    .then(res => {
                        if(res.data.status == 200) {
                            this.endMachine.data = res.data.data;
                        }
                        this.$indicator.close();
                        this.endMachine.show = true;
                    })
                    .catch(error => {
                        let instance = this.$toast('查询失败');
                        setTimeout(() => {
                            instance.close();
                        }, 2000);
                    })
                    break;
                case '制冷系统' :
                    axios.get(baseURL+'BasicCoolMethod/',{
                        params : params
                    })
                    .then(res => {
                        console.log(res)
                        if(res.data.status == 200) {
                            this.coolMethod.data = res.data.data[0];
                            let month = this.coolMethod.data.cool_month;
                            let workTime = this.coolMethod.data.cool_workTime;
                            month = month.replace(/月/g,',').replace(/日/g,',').replace('至',',').split(",");
                            workTime = workTime.replace(/:00/g,'').replace(/至/g,',').replace(' ',',').split(",");
                            workTime[0] = this.dateChange(workTime[0]);
                            workTime[1] = this.dateChange(workTime[1]);
                            this.coolMethod.slots2[0].defaultIndex = workTime[0];
                            this.coolMethod.slots2[2].defaultIndex = workTime[1];
                            this.coolMethod.slots2[3].defaultIndex = workTime[2]-1;
                            this.coolMethod.slots2[5].defaultIndex = workTime[3]-1;
                            for (let key in this.coolMethod.slots1) {
                                this.coolMethod.slots1[key].defaultIndex = month[key]-1;
                            }
                            let LtemR = this.coolMethod.data.lqWater_low_range.replace('至',',').split(",");
                            let LtemA = this.coolMethod.data.lqWater_low_actual.replace('至',',').split(",");
                            let HtemR = this.coolMethod.data.lqWater_high_range.replace('至',',').split(",");
                            let HtemA = this.coolMethod.data.lqWater_high_actual.replace('至',',').split(",");
                            this.coolMethod.LtemRL = LtemR[0];
                            this.coolMethod.LtemRH = LtemR[1];
                            this.coolMethod.LtemAL = LtemA[0];
                            this.coolMethod.LtemAH = LtemA[1];
                            this.coolMethod.HtemRL = HtemR[0];
                            this.coolMethod.HtemRH = HtemR[1];
                            this.coolMethod.HtemAL = HtemA[0];
                            this.coolMethod.HtemAH = HtemA[1];
                        }
                        this.$indicator.close();
                        this.coolMethod.show = true;
                    })
                    .catch(error => {
                        let instance = this.$toast('查询失败');
                        setTimeout(() => {
                            instance.close();
                        }, 2000);
                    })
                    break;
                case '冷机' :
                    axios.get(baseURL+'BasicCoolMachine/',{
                        params : params
                    })
                    .then(res => {
                        if(res.data.status == 200) {
                            this.coolMachine.data = res.data.data;
                        }
                        this.$indicator.close();
                        this.coolMachine.show = true;
                    })
                    .catch(error => {
                        let instance = this.$toast('查询失败');
                        setTimeout(() => {
                            instance.close();
                        }, 2000);
                    })
                    break;
                case '风冷热泵' :
                    axios.get(baseURL+'BasicWindCoolMachine/',{
                        params : params
                    })
                    .then(res => {
                        if(res.data.status == 200) {
                            this.windCoolMachine.data = res.data.data;
                        }
                        this.$indicator.close();
                        this.windCoolMachine.show = true;
                    })
                    .catch(error => {
                        let instance = this.$toast('查询失败');
                        setTimeout(() => {
                            instance.close();
                        }, 2000);
                    })
                    break;
                case '地源热泵' :
                    axios.get(baseURL+'BasicEarthCoolMachine/',{
                        params : params
                    })
                    .then(res => {
                        if(res.data.status == 200) {
                            this.earthCoolMachine.data = res.data.data;
                        }
                        this.$indicator.close();
                        this.earthCoolMachine.show = true;
                    })
                    .catch(error => {
                        let instance = this.$toast('查询失败');
                        setTimeout(() => {
                            instance.close();
                        }, 2000);
                    })
                    break;
                case '循环水泵' :
                    axios.get(baseURL+'BasicLoopPump/',{
                        params : params
                    })
                    .then(res => {
                        if(res.data.status == 200) {
                            this.loopPump.data = res.data.data;
                        }
                        this.$indicator.close();
                        this.loopPump.show = true;
                    })
                    .catch(error => {
                        let instance = this.$toast('查询失败');
                        setTimeout(() => {
                            instance.close();
                        }, 2000);
                    })
                    break;
                case '冷却塔' :
                    axios.get(baseURL+'BasicTower/',{
                        params : params
                    })
                    .then(res => {
                        if(res.data.status == 200) {
                            this.tower.data = res.data.data;
                        }
                        this.$indicator.close();
                        this.tower.show = true;
                    })
                    .catch(error => {
                        let instance = this.$toast('查询失败');
                        setTimeout(() => {
                            instance.close();
                        }, 2000);
                    })
                    break;
                case '蓄冰系统' :
                    axios.get(baseURL+'BasicIce/',{
                        params : params
                    })
                    .then(res => {
                        if(res.data.status == 200) {
                            this.ice.data = res.data.data;
                        }
                        this.$indicator.close();
                        this.ice.show = true;
                    })
                    .catch(error => {
                        let instance = this.$toast('查询失败');
                        setTimeout(() => {
                            instance.close();
                        }, 2000);
                    })
                    break;
                case '供热系统' :
                    axios.get(baseURL+'BasicHotMethod/',{
                        params : params
                    })
                    .then(res => {
                        if(res.data.status == 200) {
                            this.hotMethod.data = res.data.data[0];
                            let month = this.hotMethod.data.cool_month;
                            let workTime = this.hotMethod.data.cool_workTime;
                            month = month.replace(/月/g,',').replace(/日/g,',').replace('至',',').split(",");
                            workTime = workTime.replace(/:00/g,'').replace(/至/g,',').replace(' ',',').split(",");
                            workTime[0] = this.dateChange(workTime[0]);
                            workTime[1] = this.dateChange(workTime[1]);
                            this.hotMethod.slots2[0].defaultIndex = workTime[0];
                            this.hotMethod.slots2[2].defaultIndex = workTime[1];
                            this.hotMethod.slots2[3].defaultIndex = workTime[2]-1;
                            this.hotMethod.slots2[5].defaultIndex = workTime[3]-1;
                            for (let key in this.hotMethod.slots1) {
                                this.hotMethod.slots1[key].defaultIndex = month[key]-1;
                            }
                        }
                        this.$indicator.close();
                        this.hotMethod.show = true;
                    })
                    .catch(error => {
                        let instance = this.$toast('查询失败');
                        setTimeout(() => {
                            instance.close();
                        }, 2000);
                    })
                    break;
                case '锅炉' :
                    axios.get(baseURL+'BasicBoilerMachine/',{
                        params : params
                    })
                    .then(res => {
                        if(res.data.status == 200) {
                            this.boilerMachine.data = res.data.data;
                        }
                        this.$indicator.close();
                        this.boilerMachine.show = true;
                    })
                    .catch(error => {
                        let instance = this.$toast('查询失败');
                        setTimeout(() => {
                            instance.close();
                        }, 2000);
                    })
                    break;
                case '溴化锂机组' :
                    axios.get(baseURL+'BasicLiMachine/',{
                        params : params
                    })
                    .then(res => {
                        if(res.data.status == 200) {
                            this.liMachine.data = res.data.data;
                        }
                        this.$indicator.close();
                        this.liMachine.show = true;
                    })
                    .catch(error => {
                        let instance = this.$toast('查询失败');
                        setTimeout(() => {
                            instance.close();
                        }, 2000);
                    })
                    break;
                case '燃煤锅炉' :
                    axios.get(baseURL+'BasicCoalMachine/',{
                        params : params
                    })
                    .then(res => {
                        if(res.data.status == 200) {
                            this.coalMachine.data = res.data.data;
                        }
                        this.$indicator.close();
                        this.coalMachine.show = true;
                    })
                    .catch(error => {
                        let instance = this.$toast('查询失败');
                        setTimeout(() => {
                            instance.close();
                        }, 2000);
                    })
                    break;
                case '市政供热' :
                    axios.get(baseURL+'BasicGovMachine/',{
                        params : params
                    })
                    .then(res => {
                        if(res.data.status == 200) {
                            this.govMachine.data = res.data.data;
                        }
                        this.$indicator.close();
                        this.govMachine.show = true;
                    })
                    .catch(error => {
                        let instance = this.$toast('查询失败');
                        setTimeout(() => {
                            instance.close();
                        }, 2000);
                    })
                    break;
                case '热力站供热' :
                    axios.get(baseURL+'BasicStationMachine/',{
                        params : params
                    })
                    .then(res => {
                        if(res.data.status == 200) {
                            this.stationMachine.data = res.data.data;
                        }
                        this.$indicator.close();
                        this.stationMachine.show = true;
                    })
                    .catch(error => {
                        let instance = this.$toast('查询失败');
                        setTimeout(() => {
                            instance.close();
                        }, 2000);
                    })
                    break;
                case '电锅炉' :
                    axios.get(baseURL+'BasicEBoilerMachine/',{
                        params : params
                    })
                    .then(res => {
                        if(res.data.status == 200) {
                            this.eBoilerMachine.data = res.data.data;
                        }
                        this.$indicator.close();
                        this.eBoilerMachine.show = true;
                    })
                    .catch(error => {
                        let instance = this.$toast('查询失败');
                        setTimeout(() => {
                            instance.close();
                        }, 2000);
                    })
                    break;
                case '换热器' :
                    axios.get(baseURL+'BasicBhMachine/',{
                        params : params
                    })
                    .then(res => {
                        if(res.data.status == 200) {
                            this.bhMachine.data = res.data.data;
                        }
                        this.$indicator.close();
                        this.bhMachine.show = true;
                    })
                    .catch(error => {
                        let instance = this.$toast('查询失败');
                        setTimeout(() => {
                            instance.close();
                        }, 2000);
                    })
                    break;
                case 'VRV多联机' :
                    axios.get(baseURL+'BasicVRV/',{
                        params : params
                    })
                    .then(res => {
                        if(res.data.status == 200) {
                            this.VRV.data = res.data.data;
                        }
                        this.$indicator.close();
                        this.VRV.show = true;
                    })
                    .catch(error => {
                        let instance = this.$toast('提交失败');
                        setTimeout(() => {
                            instance.close();
                        }, 2000);
                    })
                    break;
            }
        }, 
        /* 提交基本信息 */                            
        basicClick () {
            let basicD  = JSON.stringify(this.basic.data);
            let params = new URLSearchParams();
            params.append('data', basicD);
            params.append('userId', localStorage.getItem('userId'));
            axios.post(baseURL+'BasicInfo/',params)
            .then(res => {
                if(res.data.status == 200){
                    localStorage.setItem('flow_num',res.data.data);
                    this.basic.show = false;
                    this.select.show = true;
                }else{
                    let instance = this.$toast('提交失败');
                    setTimeout(() => {
                        instance.close();
                    }, 2000);
                }
            })
            .catch(error => {
                console.log(error);
            })
        },
        /* 提交楼宇自控系统 */
        buildingClick () {
            for (const key in this.building.data) {
                if(this.building.data[key]=='false'){
                    this.building.data[key] = false;
                }
            }
            let buildingD  = JSON.stringify(this.building.data);
            let params = new URLSearchParams();
            params.append('data', buildingD);
            params.append('flow_num', localStorage.getItem('flow_num'));
            params.append('userId', localStorage.getItem('userId'));
            params.append('fatherId', this.crew.id);
            params.append('is_add', this.crewState);
            axios.post(baseURL+'BasicBuildControl/',params)
            .then(res => {
                if(res.data.status == 200){
                    let instance = this.$toast('添加成功');
                    this.projectInfoClick(this.crew.id,this.crew.title)
                    setTimeout(() => {
                        instance.close();
                        this.building.show = false;
                        this.crew.show = true;
                    }, 1000);
                }else{
                        let instance = this.$toast('提交失败');
                    setTimeout(() => {
                        instance.close();
                    }, 2000);
                }
            })
            .catch(error => {
                let instance = this.$toast('提交失败');
                setTimeout(() => {
                    instance.close();
                }, 2000);
            })
        },
        /* 提交制冷系统 */
        coolMethodClick () {
            this.coolMethod.data.lqWater_low_range = this.coolMethod.LtemRL + '至' + this.coolMethod.LtemRH;
            this.coolMethod.data.lqWater_low_actual = this.coolMethod.LtemAL + '至' + this.coolMethod.LtemAH;
            this.coolMethod.data.lqWater_high_range = this.coolMethod.HtemRL + '至' + this.coolMethod.HtemRH;
            this.coolMethod.data.lqWater_high_actual = this.coolMethod.HtemAL + '至' + this.coolMethod.HtemAH;
            let coolMethodD  = JSON.stringify(this.coolMethod.data);
            let params = new URLSearchParams();
            params.append('data', coolMethodD);
            params.append('flow_num', localStorage.getItem('flow_num'));
            params.append('fatherId', this.crew.id);
            params.append('is_add', this.crewState);
            axios.post(baseURL+'BasicCoolMethod/',params)
            .then(res => {
                console.log(res)
                if(res.data.status == 200){
                    let instance = this.$toast('添加成功');
                    this.projectInfoClick(this.crew.id,this.crew.title);
                    setTimeout(() => {
                        instance.close();
                        this.coolMethod.show = false;
                        this.crew.show = true;
                    }, 1000);
                }else{
                    let instance = this.$toast('提交失败');
                    setTimeout(() => {
                        instance.close();
                    }, 2000);
                }
            })
            .catch(error => {
                let instance = this.$toast('提交失败');
                setTimeout(() => {
                    instance.close();
                }, 2000);
            })
        },
        /* 提交末端系统 */
        endSystemClick () {
            for (const key in this.endSystem.data) {
                if(this.endSystem.data[key]=='false'){
                    this.endSystem.data[key] = false;
                }
            }
            let endSystemD  = JSON.stringify(this.endSystem.data);
            let params = new URLSearchParams();
            params.append('data', endSystemD);
            params.append('flow_num', localStorage.getItem('flow_num'));
            params.append('fatherId', this.crew.id);
            params.append('is_add', this.crewState);
            axios.post(baseURL+'BasicEndSystem/',params)
            .then(res => {
                console.log(res)
                if(res.data.status == 200){
                    let instance = this.$toast('添加成功');
                    this.projectInfoClick(this.crew.id,this.crew.title);
                    setTimeout(() => {
                        instance.close();
                            this.endSystem.show = false;
                            this.crew.show = true;
                    }, 1000);
                }else{
                    let instance = this.$toast('提交失败');
                    setTimeout(() => {
                        instance.close();
                    }, 2000);
                }
            })
            .catch(error => {
                let instance = this.$toast('提交失败');
                setTimeout(() => {
                    instance.close();
                }, 2000);
            })
        },
        /* 提交末端设备 */
        endMachineClick () {
            this.booleanTrans(this.endMachine.data);
            let endMachineD  = JSON.stringify(this.endMachine.data);
            let params = new URLSearchParams();
            params.append('data', endMachineD);
            params.append('flow_num', localStorage.getItem('flow_num'));
            params.append('fatherId', this.crew.id);
            params.append('is_add', this.crewState);
            axios.post(baseURL+'BasicEndMachine/',params)
            .then(res => {
                if(res.data.status == 200){
                    let instance = this.$toast('添加成功');
                    this.projectInfoClick(this.crew.id,this.crew.title);
                    setTimeout(() => {
                        instance.close();
                            this.endMachine.show = false;
                            this.crew.show = true;
                    }, 1000);
                }else{
                    let instance = this.$toast('提交失败');
                    setTimeout(() => {
                        instance.close();
                    }, 2000);
                }
            })
            .catch(error => {
                let instance = this.$toast('提交失败');
                setTimeout(() => {
                    instance.close();
                }, 2000);
            })
        },
        /* 提交冷机 */
        coolMachineClick () {
            this.booleanTrans(this.coolMachine.data);
            let coolMachineD  = JSON.stringify(this.coolMachine.data);
            let params = new URLSearchParams();
            params.append('data', coolMachineD);
            params.append('flow_num', localStorage.getItem('flow_num'));
            params.append('fatherId', this.crew.id);
            params.append('is_add', this.crewState);
            axios.post(baseURL+'BasicCoolMachine/',params)
            .then(res => {
                if(res.data.status == 200){
                    let instance = this.$toast('添加成功');
                    this.projectInfoClick(this.crew.id,this.crew.title);
                    setTimeout(() => {
                        instance.close();
                            this.coolMachine.show = false;
                            this.crew.show = true;
                    }, 1000);
                }else{
                    let instance = this.$toast('提交失败');
                    setTimeout(() => {
                        instance.close();
                    }, 2000);
                }
            })
            .catch(error => {
                let instance = this.$toast('提交失败');
                setTimeout(() => {
                    instance.close();
                }, 2000);
            })
        },
        /* 提交风冷热泵 */
        windCoolMachineClick () {
            this.booleanTrans(this.windCoolMachine.data);
            let windCoolMachineD  = JSON.stringify(this.windCoolMachine.data);
            let params = new URLSearchParams();
            params.append('data', windCoolMachineD);
            params.append('flow_num', localStorage.getItem('flow_num'));
            params.append('fatherId', this.crew.id);
            params.append('is_add', this.crewState);
            axios.post(baseURL+'BasicWindCoolMachine/',params)
            .then(res => {
                console.log(res)
                if(res.data.status == 200){
                    let instance = this.$toast('添加成功');
                    this.projectInfoClick(this.crew.id,this.crew.title);
                    setTimeout(() => {
                        instance.close();
                            this.windCoolMachine.show = false;
                            this.crew.show = true;
                    }, 1000);
                }else{
                    let instance = this.$toast('提交失败');
                    setTimeout(() => {
                        instance.close();
                    }, 2000);
                }
            })
            .catch(error => {
                let instance = this.$toast('提交失败');
                setTimeout(() => {
                    instance.close();
                }, 2000);
            })
        },
        /* 提交地源热泵 */
        earthCoolMachineClick () {
            this.booleanTrans(this.earthCoolMachine.data);
            let earthCoolMachineD  = JSON.stringify(this.earthCoolMachine.data);
            let params = new URLSearchParams();
            params.append('data', earthCoolMachineD);
            params.append('flow_num', localStorage.getItem('flow_num'));
            params.append('fatherId', this.crew.id);
            params.append('is_add', this.crewState);
            axios.post(baseURL+'BasicEarthCoolMachine/',params)
            .then(res => {
                console.log(res)
                if(res.data.status == 200){
                    let instance = this.$toast('添加成功');
                    this.projectInfoClick(this.crew.id,this.crew.title);
                    setTimeout(() => {
                        instance.close();
                            this.earthCoolMachine.show = false;
                            this.crew.show = true;
                    }, 1000);
                }else{
                    let instance = this.$toast('提交失败');
                    setTimeout(() => {
                        instance.close();
                    }, 2000);
                }
            })
            .catch(error => {
                let instance = this.$toast('提交失败');
                setTimeout(() => {
                    instance.close();
                }, 2000);
            })
        },
        /* 提交循环水泵 */
        loopPumpClick () {
            this.booleanTrans(this.loopPump.data);
            let loopPumpD  = JSON.stringify(this.loopPump.data);
            let params = new URLSearchParams();
            params.append('data', loopPumpD);
            params.append('flow_num', localStorage.getItem('flow_num'));
            params.append('fatherId', this.crew.id);
            params.append('is_add', this.crewState);
            axios.post(baseURL+'BasicLoopPump/',params)
            .then(res => {
                console.log(res)
                if(res.data.status == 200){
                    let instance = this.$toast('添加成功');
                    this.projectInfoClick(this.crew.id,this.crew.title);
                    setTimeout(() => {
                        instance.close();
                            this.loopPump.show = false;
                            this.crew.show = true;
                    }, 1000);
                }else{
                    let instance = this.$toast('提交失败');
                    setTimeout(() => {
                        instance.close();
                    }, 2000);
                }
            })
            .catch(error => {
                let instance = this.$toast('提交失败');
                setTimeout(() => {
                    instance.close();
                }, 2000);
            })
        },
        /* 提交冷却塔 */
        towerClick () {
            this.booleanTrans(this.tower.data);
            let towerD  = JSON.stringify(this.tower.data);
            let params = new URLSearchParams();
            params.append('data', towerD);
            params.append('flow_num', localStorage.getItem('flow_num'));
            params.append('fatherId', this.crew.id);
            params.append('is_add', this.crewState);
            axios.post(baseURL+'BasicTower/',params)
            .then(res => {
                console.log(res)
                if(res.data.status == 200){
                    let instance = this.$toast('添加成功');
                    this.projectInfoClick(this.crew.id,this.crew.title);
                    setTimeout(() => {
                        instance.close();
                            this.tower.show = false;
                            this.crew.show = true;
                    }, 1000);
                }else{
                    let instance = this.$toast('提交失败');
                    setTimeout(() => {
                        instance.close();
                    }, 2000);
                }
            })
            .catch(error => {
                let instance = this.$toast('提交失败');
                setTimeout(() => {
                    instance.close();
                }, 2000);
            })
        },
        /* 提交供热系统 */
        hotMethodClick () {
            let hotMethodD  = JSON.stringify(this.hotMethod.data);
            let params = new URLSearchParams();
            params.append('data', hotMethodD);
            params.append('flow_num', localStorage.getItem('flow_num'));
            params.append('fatherId', this.crew.id);
            params.append('is_add', this.crewState);
            axios.post(baseURL+'BasicHotMethod/',params)
            .then(res => {
                console.log(res)
                if(res.data.status == 200){
                    let instance = this.$toast('添加成功');
                    this.projectInfoClick(this.crew.id,this.crew.title);
                    setTimeout(() => {
                        instance.close();
                            this.hotMethod.show = false;
                            this.crew.show = true;
                    }, 1000);
                }else{
                    let instance = this.$toast('提交失败');
                    setTimeout(() => {
                        instance.close();
                    }, 2000);
                }
            })
            .catch(error => {
                let instance = this.$toast('提交失败');
                setTimeout(() => {
                    instance.close();
                }, 2000);
            })
        },
        /* 提交锅炉 */
        boilerMachineClick () {
            this.booleanTrans(this.boilerMachine.data);
            let boilerMachineD  = JSON.stringify(this.boilerMachine.data);
            let params = new URLSearchParams();
            params.append('data', boilerMachineD);
            params.append('flow_num', localStorage.getItem('flow_num'));
            params.append('fatherId', this.crew.id);
            params.append('is_add', this.crewState);
            axios.post(baseURL+'BasicBoilerMachine/',params)
            .then(res => {
                console.log(res)
                if(res.data.status == 200){
                    let instance = this.$toast('添加成功');
                    this.projectInfoClick(this.crew.id,this.crew.title);
                    setTimeout(() => {
                        instance.close();
                            this.boilerMachine.show = false;
                            this.crew.show = true;
                    }, 1000);
                }else{
                    let instance = this.$toast('提交失败');
                    setTimeout(() => {
                        instance.close();
                    }, 2000);
                }
            })
            .catch(error => {
                let instance = this.$toast('提交失败');
                setTimeout(() => {
                    instance.close();
                }, 2000);
            })
        },
        /* 提交溴化锂机组 */
        liMachineClick () {
            this.booleanTrans(this.liMachine.data);
            let liMachineD  = JSON.stringify(this.liMachine.data);
            let params = new URLSearchParams();
            params.append('data', liMachineD);
            params.append('flow_num', localStorage.getItem('flow_num'));
            params.append('fatherId', this.crew.id);
            params.append('is_add', this.crewState);
            axios.post(baseURL+'BasicLiMachine/',params)
            .then(res => {
                console.log(res)
                if(res.data.status == 200){
                    let instance = this.$toast('添加成功');
                    this.projectInfoClick(this.crew.id,this.crew.title);
                    setTimeout(() => {
                        instance.close();
                            this.liMachine.show = false;
                            this.crew.show = true;
                    }, 1000);
                }else{
                    let instance = this.$toast('提交失败');
                    setTimeout(() => {
                        instance.close();
                    }, 2000);
                }
            })
            .catch(error => {
                let instance = this.$toast('提交失败');
                setTimeout(() => {
                    instance.close();
                }, 2000);
            })
        },
        /* 燃煤锅炉 */
        coalMachineClick () {
            this.booleanTrans(this.coalMachine.data);
            let coalMachineD  = JSON.stringify(this.coalMachine.data);
            let params = new URLSearchParams();
            params.append('data', coalMachineD);
            params.append('flow_num', localStorage.getItem('flow_num'));
            params.append('fatherId', this.crew.id);
            params.append('is_add', this.crewState);
            axios.post(baseURL+'BasicCoalMachine/',params)
            .then(res => {
                console.log(res)
                if(res.data.status == 200){
                    let instance = this.$toast('添加成功');
                    this.projectInfoClick(this.crew.id,this.crew.title);
                    setTimeout(() => {
                        instance.close();
                            this.coalMachine.show = false;
                            this.crew.show = true;
                    }, 1000);
                }else{
                    let instance = this.$toast('提交失败');
                    setTimeout(() => {
                        instance.close();
                    }, 2000);
                }
            })
            .catch(error => {
                let instance = this.$toast('提交失败');
                setTimeout(() => {
                    instance.close();
                }, 2000);
            })
        },
        /* 市政供热 */
        govMachineClick () {
            this.booleanTrans(this.govMachine.data);
            let govMachineD  = JSON.stringify(this.govMachine.data);
            let params = new URLSearchParams();
            params.append('data', govMachineD);
            params.append('flow_num', localStorage.getItem('flow_num'));
            params.append('fatherId', this.crew.id);
            params.append('is_add', this.crewState);
            axios.post(baseURL+'BasicGovMachine/',params)
            .then(res => {
                console.log(res)
                if(res.data.status == 200){
                    let instance = this.$toast('添加成功');
                    this.projectInfoClick(this.crew.id,this.crew.title);
                    setTimeout(() => {
                        instance.close();
                            this.govMachine.show = false;
                            this.crew.show = true;
                    }, 1000);
                }else{
                    let instance = this.$toast('提交失败');
                    setTimeout(() => {
                        instance.close();
                    }, 2000);
                }
            })
            .catch(error => {
                let instance = this.$toast('提交失败');
                setTimeout(() => {
                    instance.close();
                }, 2000);
            })
        },
        /* 热力站供热 */
        stationMachineClick () {
            this.booleanTrans(this.stationMachine.data);
            let stationMachineD  = JSON.stringify(this.stationMachine.data);
            let params = new URLSearchParams();
            params.append('data', stationMachineD);
            params.append('flow_num', localStorage.getItem('flow_num'));
            params.append('fatherId', this.crew.id);
            params.append('is_add', this.crewState);
            axios.post(baseURL+'BasicStationMachine/',params)
            .then(res => {
                console.log(res)
                if(res.data.status == 200){
                    let instance = this.$toast('添加成功');
                    this.projectInfoClick(this.crew.id,this.crew.title);
                    setTimeout(() => {
                        instance.close();
                            this.stationMachine.show = false;
                            this.crew.show = true;
                    }, 1000);
                }else{
                    let instance = this.$toast('提交失败');
                    setTimeout(() => {
                        instance.close();
                    }, 2000);
                }
            })
            .catch(error => {
                let instance = this.$toast('提交失败');
                setTimeout(() => {
                    instance.close();
                }, 2000);
            })
        },
        /* 电锅炉 */
        eBoilerMachineClick () {
            this.booleanTrans(this.eBoilerMachine.data);
            let eBoilerMachineD  = JSON.stringify(this.eBoilerMachine.data);
            let params = new URLSearchParams();
            params.append('data', eBoilerMachineD);
            params.append('flow_num', localStorage.getItem('flow_num'));
            params.append('fatherId', this.crew.id);
            params.append('is_add', this.crewState);
            axios.post(baseURL+'BasicEBoilerMachine/',params)
            .then(res => {
                console.log(res)
                if(res.data.status == 200){
                    let instance = this.$toast('添加成功');
                    this.projectInfoClick(this.crew.id,this.crew.title);
                    setTimeout(() => {
                        instance.close();
                            this.eBoilerMachine.show = false;
                            this.crew.show = true;
                    }, 1000);
                }else{
                    let instance = this.$toast('提交失败');
                    setTimeout(() => {
                        instance.close();
                    }, 2000);
                }
            })
            .catch(error => {
                let instance = this.$toast('提交失败');
                setTimeout(() => {
                    instance.close();
                }, 2000);
            })
        },
        /* 换热器 */
        bhMachineClick () {
            this.booleanTrans(this.bhMachine.data);
            let bhMachineD  = JSON.stringify(this.bhMachine.data);
            let params = new URLSearchParams();
            params.append('data', bhMachineD);
            params.append('flow_num', localStorage.getItem('flow_num'));
            params.append('fatherId', this.crew.id);
            params.append('is_add', this.crewState);
            axios.post(baseURL+'BasicBhMachine/',params)
            .then(res => {
                console.log(res)
                if(res.data.status == 200){
                    let instance = this.$toast('添加成功');
                    this.projectInfoClick(this.crew.id,this.crew.title);
                    setTimeout(() => {
                        instance.close();
                            this.bhMachine.show = false;
                            this.crew.show = true;
                    }, 1000);
                }else{
                    let instance = this.$toast('提交失败');
                    setTimeout(() => {
                        instance.close();
                    }, 2000);
                }
            })
            .catch(error => {
                let instance = this.$toast('提交失败');
                setTimeout(() => {
                    instance.close();
                }, 2000);
            })
        },
        /* VRV多联机 */
        VRVClick () {
            this.booleanTrans(this.VRV.data);
            let VRVD  = JSON.stringify(this.VRV.data);
            let params = new URLSearchParams();
            params.append('data', VRVD);
            params.append('flow_num', localStorage.getItem('flow_num'));
            params.append('fatherId', this.crew.id);
            params.append('is_add', this.crewState);
            axios.post(baseURL+'BasicVRV/',params)
            .then(res => {
                console.log(res)
                if(res.data.status == 200){
                    let instance = this.$toast('添加成功');
                    this.projectInfoClick(this.crew.id,this.crew.title);
                    setTimeout(() => {
                        instance.close();
                            this.VRV.show = false;
                            this.crew.show = true;
                    }, 1000);
                }else{
                    let instance = this.$toast('提交失败');
                    setTimeout(() => {
                        instance.close();
                    }, 2000);
                }
            })
            .catch(error => {
                let instance = this.$toast('提交失败');
                setTimeout(() => {
                    instance.close();
                }, 2000);
            })
        }
    },
    created () {
        
    },
    mounted () {
        let params = new URLSearchParams();
        params.append('userId', localStorage.getItem('userId'));
        axios.get(baseURL+'ec_BasicProList/',{
            params:params
        })
        .then(res => {
            console.log(res)
            if(res.data.status == 200){
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
