<template>
    <moo></moo>
    <zujian></zujian>
    <my-table></my-table>
</template>

<script>
    var moo = require("./components/model.vue");
    var zujian = require("./components/zujian.vue");
    var table = require("./components/table.vue");

    module.exports = {
        components:{
            "moo":moo,
            "zujian":zujian,
            "myTable":table
        }
    }
</script>

<style>

</style>