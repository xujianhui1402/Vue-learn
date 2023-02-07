<template>
  <div class="web">
    <div class="web_header">
      <header-com/>
    </div>
    <div class="web_content_pic">
    </div>
<!--    <div class="web_content_text" v-html="htmlData">
    </div>-->
    <div class="web_content_text">
      <editor/>
    </div>
    <div class="web_footer">
      <footer-com/>
    </div>
  </div>
</template>

<script>
import Editor from '@/components/Tinymce/editor'
import HeaderCom from "@/components/HeaderCom";
import FooterCom from "@/components/FooterCom";
export default {
  name: 'IndexCom',
  props: {
    msg: String
  },
  components:{
    HeaderCom, FooterCom, Editor
  },
  data(){
    return {
      htmlData: null,
    }
  },
  mounted(){
    this.htmlData =
        '      <p><span style="color: #e03e2d;"><strong><span style="font-size: 36pt;">这里是标题</span></strong></span></p>\n' +
        '      <p><em>1</em></p>\n'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.web{
  height: 100vh;
  width: 100%;
  display: grid;
  overflow-y: scroll;
  grid-template-rows: 3fr 15fr 15fr 15fr;
}
.web_header{
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #252525;
}
.web_content_pic{
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #252525;
}
.web_content_text{
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #eff1f1;
}
.web_footer{
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #252525;
}
</style>
