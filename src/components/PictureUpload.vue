<template>
  <div class='finish_room'>
    <div class='finish_room2'>
      <div v-for='(item ,index ) in imgs' class='room_img'>
        <img :src="item">
        <span @click='delete_img(index)'><img src="../../static/imgs/delete.png"></span>
      </div>

      <div class='room_add_img'>
        <span><img src="../../static/imgs/add_img.png"></span>
        <span>上传图片</span>
        <input @change='add_img'  type="file">
      </div>
<button @click = 'info()'>点击</button>
    </div>
  </div>
</template>

<script >

  export default {
    data:function(){
      return{
        imgs:[],
        imgInfo:[]
      }
    },
    methods:{
      delete_img(item){
        this.imgs.splice(item,1)
        this.imgInfo.splice(item,1)
      },
      add_img(event){
        var reader =new FileReader();
        var img1=event.target.files[0];
        reader.readAsDataURL(img1);
        console.log(reader.result)
        var self=this;
        reader.onloadend=function(){
          self.imgs.push(reader.result)
          let format = reader.result.toString().split("image/")[1].split(";")[0]
          let base = reader.result.toString().split("image/")[1].split(";")[1].split(",")[1]
          let fullInfo = reader.result
          let data = {
            'format': format,  //转化后的格式
            'base' : base,   //转化后的base码
            'fullInfo': fullInfo  //全部信息
          }
          self.imgInfo.push(data)
          self.$emit('imgInfo',self.imgInfo)
        }
      },
      info(){
        console.log(this.imgInfo)
      }
    }
  }

</script>
<style scoped >
  @import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
  .finish_room{
    width: 430px;
    height: auto;
  }

  .finish_room2{
    width: 100%;
    height: auto;
    padding-top: 15px;
    padding-bottom: 15px;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #e1e1e1;
  }

  .finish_room2 .room_img{
    width: 150px;
    height: 100px;
    margin-right: 10px;
    position: relative;
    overflow: hidden;
  }
  .finish_room2 .room_img img{

    width: 100%;
    height: 100%;
  }
  .finish_room2>.room_img span{
    position: absolute;
    width: auto;
    height: auto;
    right: 5px;
    bottom:3px;
  }



  .room_add_img{
    width: 148px;
    height: 98px;
    border:1px solid #e1e1e1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }
  .room_add_img >span:nth-child(1){
    margin-top: 20px;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }
  .room_add_img >span:nth-child(2){
    margin-bottom: 10px;
  }

  .room_add_img input{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 99999;
    opacity: 0;
  }




</style>
