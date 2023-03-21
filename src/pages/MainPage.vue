<template>
  <SiteMenu></SiteMenu>
  <div class="content">
  <h1>Main</h1>
  </div>
  <div class="SiteFooter">
    <SiteFooter></SiteFooter>
  </div>

</template>

<script>
import SiteMenu from "@/components/SiteMenu.vue";
import SiteFooter from "@/components/SiteFooter.vue";
export default {
  name: "MainPage",
  components:{
    SiteMenu,
    SiteFooter
  }
}
</script>

<style>
div.SiteFooter :deep(.footer) {
  position: absolute;
  left: 0;
  bottom: 0;
}
</style>