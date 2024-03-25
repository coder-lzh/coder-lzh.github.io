
<template>
    <div class="ui-home">
        <h2 class="ui-title">前端开源项目推荐</h2>

        <el-button type="primary" @click="alert2">按钮</el-button>

        <div class="main1">
            <p>111111</p>
        </div>

        <h2 id="xx">谢谢谢谢谢
            <a class="header-anchor" :href="`#xx`" aria-hidden="true"></a>
        </h2>
    </div>
</template>
<script setup>
    import { ElButton  } from 'element-plus'
    import { defineProps,defineEmits  } from 'vue'
    const props = defineProps({
        data2: {
            default: [],
            type: Array,
        },
    });
    console.log(props.data2)
    // 使用defineEmits创建名称，接受一个数组
    const emit = defineEmits()
    function alert2() {
        console.log("alert2")
        //传递给父组件
        let param={
            content:'b'
        }
        emit('clickChild',param,"cccc")
    }
</script>

<style src="./nav/index.scss"></style>