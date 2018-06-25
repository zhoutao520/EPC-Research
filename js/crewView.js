var vm = new Vue({
    el:'#app',
    data:{
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
        emailF : true,
        flow_num :'',
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
        /* 设备信息 */
        projectInfo : {
            show : true,
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
            state :0,
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
            state :0,
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
            state :0,
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
            state :0,
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
            state :0,
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

    },
    methods : {
        showMachine (index,machine,flag) {
            flag ? machine.state = index : machine.state = -1;
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
        getBasic () {
            this.$indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
            let params = new URLSearchParams();
            params.append('flow_num', this.flow_num);
            params.append('time', new Date().getTime());
            axios.get(baseURL+'BasicInfo/',{
                params : params
            })
            .then(res => {
                console.log(res)
                this.basic.data = res.data.data[0];
                this.projectInfo.show = false;
                this.basic.show = true;  
                this.$indicator.close();
            })
            .catch(error => {
                this.$indicator.close();
                let instance = this.$toast('查询失败');
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
            this.crew.show = false;
            this.projectInfo.show = true;
            this.crew.options = [];
        },
        /* 机组信息 */
        projectInfoClick (item,name) {
            this.crew.title = name;
            let params = new URLSearchParams();
            params.append('flow_num', this.flow_num);
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
        /* 机器信息 */
        crewClick (name,status) {
            if(status == '未填写'){
                let instance = this.$toast(name+'还未填写信息');
                setTimeout(() => {
                    instance.close();
                }, 2000);
                return false;
            }
            this.$indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
            let params = new URLSearchParams();
            params.append('flow_num', this.flow_num+'_'+this.crew.id);
            params.append('time', new Date().getTime());
            switch (name) {
                case '楼宇自控系统' :
                    axios.get(baseURL+'BasicBuildControl/',{
                        params : params
                    })
                    .then(res => {
                        this.building.data = res.data.data[0];
                        this.crew.show = false;
                        this.building.show = true;  
                        this.$indicator.close();
                    })
                    .catch(error => {
                        this.$indicator.close();
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
                        this.endSystem.data = res.data.data[0];
                        this.$indicator.close();
                        this.crew.show = false;
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
                        this.endMachine.data = res.data.data;
                        this.$indicator.close();
                        this.crew.show = false;
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
                        this.coolMethod.data = res.data.data[0];
                        this.$indicator.close();
                        this.crew.show = false;
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
                        this.coolMachine.data = res.data.data;
                        this.$indicator.close();
                        this.crew.show = false;
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
                        this.windCoolMachine.data = res.data.data;
                        this.$indicator.close();
                        this.crew.show = false;
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
                        this.earthCoolMachine.data = res.data.data;
                        this.$indicator.close();
                        this.crew.show = false;
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
                        this.loopPump.data = res.data.data;
                        this.$indicator.close();
                        this.crew.show = false;
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
                        this.tower.data = res.data.data;
                        this.$indicator.close();
                        this.crew.show = false;
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
                        this.ice.data = res.data.data;
                        this.$indicator.close();
                        this.crew.show = false;
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
                        this.hotMethod.data = res.data.data[0];
                        this.$indicator.close();
                        this.crew.show = false;
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
                        this.boilerMachine.data = res.data.data;
                        this.$indicator.close();
                        this.crew.show = false;
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
                        this.liMachine.data = res.data.data;
                        this.$indicator.close();
                        this.crew.show = false;
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
                        this.coalMachine.data = res.data.data;
                        this.$indicator.close();
                        this.crew.show = false;
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
                        this.govMachine.data = res.data.data;
                        this.$indicator.close();
                        this.crew.show = false;
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
                        this.stationMachine.data = res.data.data;
                        this.$indicator.close();
                        this.crew.show = false;
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
                        this.eBoilerMachine.data = res.data.data;
                        this.$indicator.close();
                        this.crew.show = false;
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
                        this.bhMachine.data = res.data.data;
                        this.$indicator.close();
                        this.crew.show = false;
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
                        this.VRV.data = res.data.data;
                        this.$indicator.close();
                        this.crew.show = false;
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
        //获取URL地址的参数的方法
        getQueryString(name,url){
            url = url || window.location.search.substr(1);
            var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
            var r = url.match(reg);
            if(r!=null)return decodeURI(r[2]); return '';
        }
    },
    created () {
        
    },
    mounted () {
        if(this.getQueryString('flow_num')!=''){
            this.flow_num = this.getQueryString('flow_num');
            this.emailF = false;
        }else{
            this.flow_num = localStorage.getItem('flow_num');
        }
        let params = new URLSearchParams();
        params.append('flow_num', this.flow_num);
        axios.get(baseURL+'BasicHistory/',{
            params:params
        })
        .then(res => {
            if(res.data.status == 200){
                this.projectInfo.options.id = eval("(" + res.data.data + ")");
                this.optionTrans(this.projectInfo.options.id);
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
