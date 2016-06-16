/**
 * Created by 15031493 on 2016/6/14.
 */
require("./css/style.css");
require("./js/filter.js");

var components = require("./app.vue");

var vm = new Vue({
    el:'#app',
    components:{
        app:components
    },
    data: {
    }
});