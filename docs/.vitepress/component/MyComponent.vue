<template>
    <VPDocAsideSponsors :data="data" />
</template>
<script setup >
    import { VPDocAsideSponsors } from 'vitepress/theme'
    import { defineProps } from 'vue'
    import { useRoute } from 'vitepress'
    const data = [
        {
            items: [{ img: 'https://cdn.jsdelivr.net/gh/coder-lzh/picture@main/sponsor/alipay.png' }]
        },
        {
            items: [{ img: 'https://cdn.jsdelivr.net/gh/coder-lzh/picture@main/sponsor/wxpay.png' }]
        },
    ]
    let props = defineProps({
        xx: String
    });
    const route = useRoute()
    console.log(route.path)
        // name: 'MyComponent',
        // data(){
        //     return {
        //         data:[]
        //     }
        // },
        // mounted() {
        //     // 在这里获取props数据
        //     this.getPageProps();
        // },
        // methods: {
        //     getPageProps() {
        //         const pageProps = this.$page.frontmatter;
        //         console.log('页面的props数据:', pageProps);
        //         // 你可以在这里根据pageProps进行相关操作
        //     }
        // }
</script>
<style>
    .vp-sponsor-grid.medium .vp-sponsor-grid-link{
        height: 155px !important;
    }
    .vp-sponsor-grid.medium .vp-sponsor-grid-image {
        max-height: 125px !important;
    }
</style>
