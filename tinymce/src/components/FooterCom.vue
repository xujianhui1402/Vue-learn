<template>
    <div class="footer_body">
      <div>
        logo
      </div>
      <div>
        相关协议
      </div>
      <div>
        站内导航
      </div>
      <div>
        快速链接
      </div>
    </div>
  <div class="footer_text">
        Demo网站首页©xjh
  </div>
</template>

<script>

export default {
  name: "FooterCom",
}
</script>

<style scoped>
.footer_body{
  font-size: 1rem;
  color: #eff1f1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.footer_text{
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 1rem;
  color: #eff1f1;
}
</style>