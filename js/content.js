
var mWidth = window.innerWidth;
var mGroup = $('.group');
var groupTop = parseInt(mGroup.css('top').split("p")[0]);
var isFixed = false;
var isAbsolute = false;
//获取界面显示的高度
var mHeight = window.innerHeight;
//设置页面的高度
$('#app').css('height',mHeight+'px');
var mHeight_Header = parseInt($('.header').css('height').split('p')[0]);
$('.body').css('height',(mHeight-mHeight_Header)+'px');

var vue = new Vue({
    el:"#app",
    data:{
        spinShow: true,
        data: ""
    },
    methods:{
        goIndex: function () {
            location.href = "index.html"
        },
        about: function () {
            about();
        },
        github: function () {
            location.href = "https://github.com/ws520/";
        },
        csdn: function () {
            location.href = "http://blog.csdn.net/qq_16070781";
        },
        me: function () {
            location.href = "https://www.baidu.com";
        }


    }
});

marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
});


//添加自定义指令
//添加自定义指令
Vue.directive('highlight',function (el) {
    var blocks = el.querySelectorAll('pre code');
    blocks.forEach(function(block){
        hljs.highlightBlock(block)
    });
});


//数据初始化
var api = getQueryString("api");
if(api === undefined || api === null||api.length === 0){
    //TODO:去404界面
    toast("出错了");
}else {
    log(Base.decode(api));
    fatchData(Base.decode(api));
}
//页面滚动事件监听
window.onscroll = function() {

    if (mWidth < 720 ){
        showTop(100);
        if (window.scrollY <=100){
            $('.goTop').attr('hidden',true);
        }else {
            $('.goTop').attr('hidden',false);
        }
        if(window.scrollY >= 100){
            fixedGroup();
            isFixed = true;
            isAbsolute = false;
        }else {
            absoluteGroup();
            isFixed = false;
            isAbsolute = true;
        }
    } else if (mWidth <1080){
        showTop(150);
        if(window.scrollY >= 150){
            fixedGroup();
            isFixed = true;
            isAbsolute = false;
        }else {
            absoluteGroup();
            isFixed = false;
            isAbsolute = true;
        }
    }else {
        showTop(200);
        if(window.scrollY >= 200){
            fixedGroup();
            isFixed = true;
            isAbsolute = false;
        }else {
            absoluteGroup();
            isFixed = false;
            isAbsolute = true;
        }
    }
};

/**
 * 固定组
 */
function fixedGroup() {
    if (isFixed)return;
    console.log("固定高度");
    mGroup.css('position','fixed');
    var nTop = groupTop - 100;
    mGroup.css('top',20+'px');
    mGroup.css('background-color','#2D6CF0');
    mGroup.css('color','#FFFFFF');
    $('.group_github').attr('src','img/github_w.png');
    $('.group_csdn').attr('src','img/CSDN_w.png');
    $('.group_me').attr('src','img/me_w.png');
}

/**
 * 不固定组
 */
function absoluteGroup() {
    if (isAbsolute)return;
    console.log("释放高度");
    mGroup.css('position','absolute');
    mGroup.css('top',groupTop+'px');
    mGroup.css('background-color','#FFFFFF');
    mGroup.css('color','#666666');
    $('.group_github').attr('src','img/github.png');
    $('.group_csdn').attr('src','img/CSDN.png');
    $('.group_me').attr('src','img/me.png');
}

function showTop(value) {
    if (window.scrollY <= value){
        $('.goTop').attr('hidden',true);
    }else {
        $('.goTop').attr('hidden',false);
    }
}

/**
 * 返回顶部
 */
function goTop() {
    window.scrollTo(0,0);
}

/**
 * 显示toast
 * @param msg 要显示的信息
 */
function toast(msg) {
    vue.$Message.info(msg);
}


/**
 * 关于
 */
function about() {
    vue.$Notice.open({
        title: '鸣谢',
        desc: desc,
        duration: 0
    });

}

/**
 * 鸣谢
 * @type {string}
 */
const desc = "欢迎您的到来，阅读后有什么建议请联系我。我的邮箱是523928638@qq.com 博客使用开源库iView、Vue、Markdown.Converter和axios感谢他们的开源。";


/**
 * 获取文本数据
 * @param api
 * https://gitee.com/null_398_2981/blog_api/raw/master/test.md
 */
function fatchData(api) {
    log("开始获取数据:  https://gitee.com/"+api);
    new HttpClient().setBaseUrl("https://gitee.com/")
        .build()
        .doGet(api,
            function (response) {
                log("结果：");
                toast("加载完成");
                const data = response.data;
                document.getElementsByClassName('content')[0].removeAttribute('hidden');
                vue.spinShow = false;
                // if (data.code === 100){
                //     toast("加载成功");
                //
                //     vue.data = data.data;
                // }else {
                //     toast("加载失败");
                //     //TODO:去404页面
                // }

            },function (e) {
                document.getElementsByClassName('content')[0].removeAttribute('hidden');
                vue.spinShow = false;
                toast("加载失败");
                log("出错");
                vue.data = "貌似出错了！"
                //TODO:去404页面
            });

}

/**
 * 获取url参数
 * @param name
 * @returns {null}
 */
function getQueryString(name) {
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!== null)return  unescape(r[2]); return null;
}