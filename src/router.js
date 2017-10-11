const routers = [{
    path: '/',
    meta: {
        title: '博客'
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/content',
        meta: {
            title: '内容'
        },
        component: (resolve) => require(['./views/content.vue'], resolve)
    }
];
export default routers;