<template>
  <div class="swiper-container">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <img :src="slide" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
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
export default class Nav extends Vue {
  swiperOption = {
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    lazy: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  }
  swiperSlides = [
    require('@/assets/imgs/img0.jpeg'),
    require('@/assets/imgs/img1.jpeg'),
  ]
}
</script>
<style lang="scss" scoped>
.swiper-container {
  overflow: hidden;
  height: 210px;
}
</style>
