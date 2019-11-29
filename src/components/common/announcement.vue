<template>
  <div class="announcement-container">
    <transition name="module" mode="out-in">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
          <div class="main">
            <svg-icon icon-class="windmill" class="svg"></svg-icon>
            <span>{{ slide }}</span>
          </div>
        </swiper-slide>
      </swiper>
    </transition>
  </div>
</template>

<script lang="ts">
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'Swiper',
  components: {
    swiper,
    swiperSlide,
  },
})
export default class Announcement extends Vue {
  swiperOption = {
    direction: 'vertical',
    autoplay: {
      delay: 2500,
    },
  }
  swiperSlides = ['吹出去的牛逼能绕地球转三圈。', '遇强则弱，遇弱则强。']
}
</script>
<style lang="scss" scoped>
.announcement-container {
  overflow: hidden;
  height: 36px;
  .main {
    position: relative;
    height: 36px;
    display: flex;
    align-items: center;
    font-size: 13.3px;
    background-color: #b5b5b5;
    user-select: none;
    color: var(--text-reversal);
    .svg {
      width: 60px;
      font-size: 16px;
    }
    span {
    }
  }
}
</style>
