const head = [
    ['link',{rel:'icon',href:'./images/logo.png'}]
]
// 头部导航
import topNav from "./topNav";
// 主题配置
const themeConfig = {
    nav:topNav
}
export default {
    title: '网站标题',
    description: 'meta标签 我是网站描述.',
    base:'/base/',
    head,
    themeConfig
}
