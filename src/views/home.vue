<template>
  <div class="home-container">
    <Swiper></Swiper>
    <Announcement class="announcement"></Announcement>
  </div>
</template>

<script lang="ts">
import Swiper from '@/components/common/swiper.vue'
import Announcement from '@/components/common/announcement.vue'
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'Home',
  components: {
    Swiper,
    Announcement,
  },
})
export default class Home extends Vue {
  mounted() {}
}
</script>
<style lang="scss" scoped>
.home-container {
  .announcement {
    margin-top: 15px;
    margin-bottom: 15px;
  }
}
</style>
