<style scoped>
    *{
        padding: 0;
        margin: 0;
        background-color: #EEE;
    }
    .actionBar{
        position: fixed;
        height: 56px;
        /*background-color: #d4237a;*/
        background-color: #303F9F;
        z-index: 2;
        -webkit-box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        -moz-box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }
    .about{
        cursor: pointer;
        position: absolute;
        right: 16px;
        top: 0;
        color: #FFF;
        background-color: #303F9F;
        height: 56px;
        line-height: 56px;
        font-size: 16px;
        font-weight: 400;
    }
    .home{
        cursor: pointer;
        position: absolute;
        right: 66px;
        top: 0;
        color: #FFF;
        background-color: #303F9F;
        height: 56px;
        line-height: 56px;
        font-size: 16px;
        font-weight: 400;
    }
    .navigation{
        width: auto;
        height: 30px;
        margin-top: 13px;
        margin-left: 16px;
        line-height: 30px;
        text-align: left;
        background-color: #303F9F;
        color: #EEE;
        font-size: 18px;
        font-weight: 600;
    }
    .navigation img{
        width: 30px;
        height: 30px;
        border-radius: 15px;
        vertical-align: middle;
    }

    .header{
        width: 100%;
    }
    .float_menus{
        z-index: 1;
        border-radius: 5px;
        background-color: #FFF;
        -webkit-box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        -moz-box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }
    .menu_item{
        float: left;
        width: 33%;
        background-color: #FFF;
        height: auto;
        text-align: center;
    }
    .menu_item img{
        background-color: #FFF;
        cursor: pointer;
        margin-top: 12px;
        width: 26px;
        height: 26px;
    }

    .layout-copy{
        background: #5b6270;
        width: 100%;
        text-align: center;
        padding: 20px;
        color: #9ea7b4;
    }
    .top{
        padding: 10px;
        /*background: rgba(0, 153, 229, .7);*/
        background-color: #d4237a;
        color: #fff;
        text-align: center;
        border-radius: 2px;
    }

    @media screen and (min-width: 320px){
        .actionBar{
            width: 100%;
        }
        .header{
            height: 150px;
            background-image: url("../res/drawable/header_bg.png");
            background-size: 100% 100%;
            color: #FFF;
            font-weight: 600;
            font-size: 20px;
            text-align: center;
            line-height: 175px;
        }
        .float_menus{
            position: absolute;
            top: 125px;
            width: 80%;
            height: 50px;
            left: 10%;
        }
        .demo-spin-container{
            display: inline-block;
            width: 100%;
            height: 100px;
            margin-top: 50px;
            position: relative;
        }
        .topline{
            width: 100%;
            height: 50px;
            background-color: white;
        }
        .content{
            position: relative;
            width: 90%;
            margin-top: 50px;
            margin-left: 5%;
            padding-bottom: 30px;
            min-height: 500px;
            background-color: #FFF;

        }


    }
    @media screen and (min-width: 720px){
        .actionBar{
            width: 80%;
            left: 10%;
        }
        .header{
            height: 200px;
            background-image: url("../res/drawable/header_bg.png");
            background-size: 100% 100%;
            color: #FFF;
            font-weight: 600;
            font-size: 25px;
            text-align: center;
            line-height: 230px;
        }
        .float_menus{
            position: absolute;
            top: 175px;
            width: 40%;
            height: 50px;
            left: 30%;
        }
        .demo-spin-container{
            display: inline-block;
            width: 100%;
            height: 175px;
            margin-top: 50px;
            position: relative;
        }
        .content{
            position: relative;
            width: 80%;
            margin-top: 60px;
            margin-left: 10%;
            padding-bottom: 30px;
            font-size: 16px;
            min-height: 500px;
            background-color: #FFF;

        }
    }
    @media screen and (min-width: 1080px){
        .actionBar{
            width: 70%;
            left: 15%;
        }
        .header{
            height: 220px;
            background-image: url("../res/drawable/header_bg.png");
            background-size: 100% 100%;
            color: #FFF;
            font-weight: 600;
            font-size: 30px;
            text-align: center;
            line-height: 250px;
        }
        .float_menus{
            position: absolute;
            top: 195px;
            width: 30%;
            height: 50px;
            left: 35%;
        }
        .demo-spin-container{
            display: inline-block;
            width: 100%;
            height: 220px;
            margin-top: 50px;
            position: relative;
        }

    }
    .index{
        background-color: #FFF;
    }

</style>
<template>
    <div class="index">
        <div class="actionBar">
            <div class="navigation">
                <img src="../res/drawable/icon.png"/>
                &nbsp;{{username}}
            </div>
            <h2 class="home" @click="goHome">首页</h2>
            <h2 class="about" @click="about">关于</h2>
        </div>
        <div class="header">
            努力做一名合格的程序员
        </div>
        <div class="float_menus">
            <div class="menu_item">
                <img src="../res/drawable/github.png" @click="goGitHub"/>
            </div>
            <div class="menu_item">
                <img src="../res/drawable/CSDN.png" @click="goCSDN"/>
            </div>
            <div class="menu_item">
                <img src="../res/drawable/me.png" @click="goMe"/>
            </div>
        </div>
        <div class="content" id="text">
            <div class="demo-spin-container" v-if="showloading">
                <Spin size="large" fix></Spin>
            </div>
            <div class="topline"></div>

        </div>
        <div class="layout-copy">
            Copyright &copy; 2017-2018 &nbsp; &nbsp; 陕ICP备17003857号
        </div>
        <BackTop :height="100" :bottom="100">
            <div class="top">返回顶端</div>
        </BackTop>

    </div>
</template>
<script>
    export default {

        created() {
            const rendererMD = new marked.Renderer();
            marked.setOptions({
                renderer: rendererMD,
                gfm: true,
                tables: true,
                breaks: false,
                pedantic: false,
                sanitize: false,
                smartLists: true,
                smartypants: false
            });
            this.$data.username = "Thanatos";
            console.log(this.$data.username);
            const api = Base.decode(this.getQueryString('api'));
            this.fatchData();
        },
        methods: {
            //获取md文本
            fatchData(api) {
                axios.create({baseURL: this.ajaxUrl}).get('/src/assets/stroll.md')
                    .then(response =>{
                        this.$data.showloading = false;
                        this.$data.content = response.data;
                        //转换md为html
                        document.getElementById('text').innerHTML =
                            marked(response.data);
                        this.codelight();

                    },e =>{
                        this.$data.showloading = false;
                        //TODO:404
                        console.log(e);
                    });
                //获取关于信息
                axios.create({baseURL: this.ajaxUrl}).get('/src/assets/aboutinfo.txt')
                    .then(response =>{
                        this.$data.showloading = false;
                        this.$data.aboutinfo = response.data;
                    },e =>{
                        this.$data.showloading = false;
                        //TODO:404
                        console.log(e);
                    });
            },
            goHome() {
                this.$router.push('/');
            },
            about() {
                this.$Modal.info({
                    title: '关于',
                    content: this.$data.aboutinfo
                });
            },
            goGitHub() {
                location.href = this.$data.githubUrl;
            },
            goCSDN() {
                location.href = this.$data.csdnUrl;
            },
            goMe() {
                location.href = this.$data.meUrl;
            },
            codelight() {
                //代码高亮
                const pres = $('pre');
                for(let i = 0 ; i<pres.length; i++){
                    hljs.highlightBlock(pres[i]);
                }
                const codes = $('code');
                for(let j = 0 ; j<codes.length; j++){
                    hljs.highlightBlock(codes[j]);
                    codes[j].setAttribute('class','lang-java hljs');
                }
            },
            getQueryString(name) {

                const reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
                const r = window.location.search.substr(1).match(reg);
                if(r !== null)return  unescape(r[2]); return null;
            }
        },
        data() {
            return{
                showloading: false,
                username: '码农',
                aboutinfo: '',
                githubUrl: 'https://github.com/ws520',
                csdnUrl: 'http://blog.csdn.net/qq_16070781',
                meUrl: 'https://www.baidu.com',
                content: ''
            }
        }
    }


</script>