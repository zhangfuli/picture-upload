<template>
  <div class="hello">
    <PictureUpload v-on:imgInfo = 'getInfo()'></PictureUpload>
  </div>
</template>

<script>
  import PictureUpload from './PictureUpload.vue'
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
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
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
