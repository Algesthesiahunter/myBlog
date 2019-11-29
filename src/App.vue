<template>
  <div id="app">
    <Header></Header>
    <div class="g-background-img">
      <div class="background-image"></div>
    </div>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from '@/components/layout/header.vue'
import Footer from '@/components/layout/footer.vue'
import Main from '@/components/layout/main/MainIndex.vue'
@Component({
  name: 'App',
  components: {
    Header,
    Main,
    Footer,
  },
})
export default class extends Vue {}
</script>
<style lang="scss" scoped>
.g-background-img {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: var(--body-bg);
  .background-image {
    opacity: 0.3;
    height: 100%;
    width: 100%;
    background: url('~assets/imgs/bg1.jpg') center center no-repeat;
    // background: url(https://cdn.surmon.me/images/background.png) top right
    // no-repeat;
    background-size: auto 100%;
  }
}
</style>
