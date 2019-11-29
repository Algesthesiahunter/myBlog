<template>
  <div class="aside-container">
    <div ref="hotRef"><hot></hot></div>
    <calendar class="calendar" />
    <category :categoryFixed="categoryFixed"></category>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator'
import hot from './hot.vue'
import category from './category.vue'
import calendar from '@/components/common/calendar.vue'
@Component({
  name: 'Aside',
  components: {
    hot,
    category,
    calendar,
  },
})
export default class Aside extends Vue {
  @Ref('hotRef') readonly hotRef!: HTMLElement
  categoryFixed: boolean = true
  mounted() {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '230px 0px 0px 0px',
    }
    let io = new IntersectionObserver(this.callback, options)
    io.observe(this.hotRef)
  }
  callback(v: IntersectionObserverEntry[]) {
    this.categoryFixed = v[0].isIntersecting
  }
}
</script>

<style scoped lang="scss">
.aside-container {
  margin-left: 20px;
  width: 268px;
  height: auto;
  user-select: none;
  display: flex;
  flex-direction: column;
  .calendar {
    padding: 12px;
    margin-top: 15px;
    margin-bottom: 15px;
    background-color: $module-bg;
  }
}
</style>
