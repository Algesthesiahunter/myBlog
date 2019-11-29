<template>
  <main class="main-container">
    <Nav></Nav>
    <ToolBox></ToolBox>
    <router-view class="main" />
    <Aside></Aside>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Nav from './modules/nav.vue'
import ToolBox from './modules/toolBox.vue'
import Aside from './modules/aside.vue'
@Component({
  name: 'Main',
  components: {
    Nav,
    ToolBox,
    Aside,
  },
})
export default class Main extends Vue {}
</script>

<style scoped lang="scss">
.main-container {
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  height: 3000px;
  width: 1050px;
  margin: 0 auto;
  .main {
    width: 680px;
    position: relative;
    overflow: hidden;
    transition: none;
    flex: 1;
  }
}
</style>
