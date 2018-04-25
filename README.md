# vue-multipage

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build // 打包全部模块到一个资源包下面，每个模块的入口是module.html文件，静态资源都在static目录中，这种方式可以复用重复的资源
npm run build moduleName1,moduleName2,... // 打包指定模块到一个资源包下面,每个模块的入口是module.html文件，静态资源都在static目录中，这种方式可以复用重复的资源
npm run build-all // 打包所有模块，然后每个模块彼此独立，有几个模块，就产生几个静态资源包，这种方式不会复用重复的资源

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
