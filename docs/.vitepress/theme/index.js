import DefaultTheme from 'vitepress/theme'

import home from '../../home.vue'
// import ElementPlus from 'element-plus'
import { h } from 'vue'
import "element-plus/dist/index.css";
import MyComponent from '../component/MyComponent.vue'

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.component('Home', home)
        // app.use(ElementPlus)
    },
    Layout() {
        return h(DefaultTheme.Layout, {"xx":"xxx222"}, {
            'aside-bottom': () => h(MyComponent)
        })
    }
}