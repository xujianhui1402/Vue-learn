<template>
  <div class="header_body">
    <div class="header_title">
      Demo首页
    </div>
    <div class="header_menu">
      button
    </div>
    <div class="header_btn">
      button
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderCom"
}
</script>

<style scoped>
.header_body{
  width: 100%;
  display: grid;
  grid-template-columns: 5fr 20fr 10fr;
}
.header_title{
  color: #00c6c9;
}
.header_menu{
  color: #ffffff;
}
.header_btn{
  color: #ffffff;
}
</style>