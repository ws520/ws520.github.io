/**
 * 获取当前平台
 * @constructor
 */
function Platform() {
    /**
     * 获取到当前平台
     * @returns {string}
     */
    this.getPlatform =  function () {
        return window.navigator.userAgent;
    };

    /**
     * 判断当前平台是否是手机客户端
     * @returns {Array|{index: number, input: string}}
     */
    this.isPhone = function () {
        return (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i));
    };

}
const platform = new Platform();


