#vue+webpack打包模块化组件实例，没用到babel和es6的版本

#目录结构

* build:打包后的文件
* src:源文件
    * components：组件
    * css：样式
    * data：json模拟数据包
    * js：全局的工具类，拦截器等..
    * app.vue：主组件的加载
    * entry.js：打包入口和主vue实例

#运行 (用这个)
webpack --progress --colors --watch

##热部署配合babel版本使用，在本版本下会打包失败
webpack-dev-server --inline --hot

#打印错误 
webpack --display-error-details

#新项目请使用vue脚手架,babel版本
地址:https://github.com/vuejs/vue-cli

$ vue init <template-name> <project-name>

Example:
$ vue init webpack my-project

webpack - A full-featured Webpack + vue-loader setup with hot reload, linting, testing & css extraction.

webpack-simple - A simple Webpack + vue-loader setup for quick prototyping.

