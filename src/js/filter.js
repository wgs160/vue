/**
 * Created by qiuguanning on 2016/6/15.
 * 自定义拦截器
 */
//分页显示行判断
Vue.filter('isShowLine', function (index,curPage,maxLen) {
    return index >= (curPage - 1) * maxLen && index < curPage * maxLen;
})