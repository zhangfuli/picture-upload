# picture-upload

> This is a component for picture uploaded by base64

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 使用组件

#### 通过 npm install picture-upload --save 安装到相应的项目下

#### 需要用到该组件时(下面是一个demo)
	
	<template>
  	<div class="demo">
    	<PictureUpload v-on:imgInfo = 'getInfo'></PictureUpload>
  	</div>
	</template>

	<script>
	  import PictureUpload from 'picture-upload'
	  import Css from 'picture-upload/dist/picture-upload.min.css'
	  export default {
	  name: 'demo',
	  data () {
	    return {
	
	    }
	  },
	  components:{
	    PictureUpload
	  },
	  methods:{
	    getInfo(imgInfo){
	      console.log(imgInfo)
	    }
	  }
	}
	</script>
	
	<!-- Add "scoped" attribute to limit CSS to this component only -->
	<style scoped>
	
	</style>

## demo讲解

#### getInfo方法的参数imginfo是一个json数组
#### 各参数如下
	'format': format,  //转化后的格式
    'base' : base,   //转化后的base码
    'fullInfo': fullInfo  //全部信息

#### 必要时可以在控制台打印出来看一下

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
