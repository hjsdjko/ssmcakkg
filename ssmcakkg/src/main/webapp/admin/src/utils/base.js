const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmcakkg/",
            name: "ssmcakkg",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmcakkg/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "生鲜云订单零售系统小程序"
        } 
    }
}
export default base
