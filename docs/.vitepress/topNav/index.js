export default [
    {
        text: "前端网聚",
        items: [
            { text: "VitePress", link: "/note/frontEnd/vitePress/01-vitePress安装" },
            { text: "前端综合", link: "/site/page" },
            { text: "HTML/CSS", link: "/site/html-css" },
            { text: "框架组件", link: "/site/framework" },
        ],
        activeMatch: '^/note/frontEnd' //当前页面位于匹配路径下时，导航菜单项将突出显示
    },
    {
        text: '提效工具',
        items: [
            {
                text: '软件推荐与配置',
                items: [
                    { text: '多平台软件', link: '/efficiency/software/cross-platform' },
                    { text: 'Mac 平台', link: '/efficiency/software/mac' },
                    { text: 'Windows 平台', link: '/efficiency/software/windows' },
                ]
            },
            { text: '在线工具', link: '/efficiency/online-tools' },
            { text: '书签脚本', link: '/efficiency/bookmark-scripts' }
        ],
        activeMatch: '^/efficiency'
    },
    {
        text: "关于我们",
        link: "/about/me",
    },
    { text: "更新日志", link: "" },
];