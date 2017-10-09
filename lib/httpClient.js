
// //配置网络请求
// var http = axios.create({
//     baseURL:"https://api.github.com/search/"
// });
// //网络请求api
// var path = 'issues?q=user:waws80+state:open&sort=created&order=asc';
//
// //网络获取数据
// http.get(path).then(function (response) {
//     vue.$Message.info('加载完成！');
//     //将获取的数据传递给vue
//     vue.content_data = response.data.items;
//     //隐藏家在动画
//     vue.spinShow = false;
//     //显示全局通知消息
//     vue.showNotice();
// }).catch(function () {
//     vue.$Message.info('网络罢工了！');
//     location.href = 'error.html'
// });

function HttpClient() {
    var mBaseUrl = "";

    var mHttp;

    this.setBaseUrl = function (baseUrl) {
         mBaseUrl = baseUrl;
         return this;
    };
    this.getBaseUrl = function () {
        return mBaseUrl;
    };

    this.build = function () {
        if (mBaseUrl.length === 0){
            log("请先设置 baseUrl");
            return;
        }
        mHttp = axios.create({baseURL: mBaseUrl});
        return this;
    };
    this.doGet = function (api,complate,failer) {
        mHttp.get(api).then(function (response) {
            complate(response);
        }).catch(function () {
            failer()
        });
        return this;
    };


}
const httpClient = new HttpClient();

/**
 * 打印日志
 * @param msg 日志信息
 */
function log(msg) {
   console.log(msg);
}