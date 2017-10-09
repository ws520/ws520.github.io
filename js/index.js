
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
        jump: function (url) {
            location.href = "content.html?api="+Base.encode(url);
            log(url);
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
//数据初始化
init();
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
 * //数据在码云上存储
 * 获取数据
 */
function init() {
    httpClient.setBaseUrl("https://gitee.com/")
        .build()
        .doGet("null_398_2981/blog_api/raw/master/data.json",
            function (response) {
                const data = response.data;
                if (data.code === 100){
                    toast("加载成功");
                    document.getElementsByClassName('content')[0].removeAttribute('hidden');
                    vue.spinShow = false;
                    vue.data = data.data;
                }else {
                    toast("加载失败");
                    //TODO:去404页面
                }

            },function (e) {
                toast("加载失败");
                document.getElementsByClassName('content')[0].removeAttribute('hidden');
                vue.spinShow = false;
                //TODO:去404页面
            });
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