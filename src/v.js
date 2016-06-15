/**
 * Created by ning on 2015/2/6.
 */
var list_data = require("./js/goods.json");

require("./js/component.js");
require("./js/filter.js");
var components = require("./app.vue");

var vm = new Vue({
    el:'#app',
    components:{
        app:components
    },
    data: {
        sortparam:'',
        order:1,
        curPage:1,
        maxLen:4,
        goods:list_data.goods
    },
    methods:{
        remove: function (good) {
            this.goods.$remove(good);
        },
        sort: function (param) {
            this.order = this.order * -1;
            this.sortparam = param;
        },
        pageGo: function (page) {
            this.curPage = page;
        }
    },
    computed:{
        pageLen: function () {
            var pageNum = Math.ceil(this.goods.length/this.maxLen);
            var array = [];
            for (var i = 0; i < pageNum; i++) {
                array.push(i+1);
            }
            return array;
        }
    }
});