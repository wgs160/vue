/**
 * Created by qiuguanning on 2016/6/15.
 * 组件
 */
// 定义
var MyComponent = Vue.extend({
    template: '<div>A custom component!{{msg}}</div>',
    // 声明 props
    props: ['msg']
    // prop 可以用在模板内
    // 可以用 `this.msg` 设置
})

// 注册
Vue.component('my-component', MyComponent)
Vue.component('child', {
    props: ['myMessage'],
    template: '<p>{{myMessage}}</p>'
});