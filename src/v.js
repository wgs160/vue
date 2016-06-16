/**
 * Created by ning on 2015/2/6.
 */

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
