<template>
    <div class="bs_block">
        <p class="h2">数据绑定</p>
        <div>{{message}}</div>
        <input type="text" v-model="message">
        <p>特性</p>
        <p>lazy:change事件触发</p>
        <p>number:转化为number</p>
        <p>debounce:设置同步限时（毫秒）</p>
    </div>
</template>

<script>
    module.exports = {
        data:{
            message:'hello vue.js.'
        }
    }
</script>