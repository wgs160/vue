/**
 * Created by ning on 2015/2/6.
 */
var list_data = require("./goods.json");

var vm = new Vue({
    el:'#app',
    data: {
        message:'hello vue.js.',
        sortparam:'',
        order:1,
        curPage:1,
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
            var maxLen = 3;
            var pageNum = Math.ceil(this.goods.length/maxLen);
            var array = [];
            for (var i = 0; i < pageNum; i++) {
                array.push(i+1);
            }
            return array;
        }
    }
});
