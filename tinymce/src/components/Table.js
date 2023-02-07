import {reactive} from "vue";
class AntTable{
    constructor() {
        this.loading = false // 表加载状态
        this.width = null; // 表宽
        this.height = null; // 表高
        this.columns = []; // 表头
        this.data = []; // 表数据
        this.log = '回调函数'
    }

    /**
     * 初始化Antd表
     * @param columns 表头
     * @param data 数据
     * @param width 表宽
     * @param height 表高
     */
/*    init(columns,data=[],width=1000,height=500){

    }*/

    /**
     * 打印
     * @function callback
     */
    print(callback){
        callback.call(this)
    }
}
export default reactive(new AntTable())