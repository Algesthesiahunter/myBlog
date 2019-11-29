<template>
  <footer class="footer-container">
    <span>{{ $t('footer.day') }} &nbsp;</span>
    <span class="gb">|</span>
    <span>{{ $t('footer.powered') }} &nbsp;</span>
    <span>{{ $t('footer.library') }} &nbsp;</span>
    <span>{{ $t('footer.drive') }}&nbsp;</span>
    <span class="gb">|</span>
    <span>{{ $t('footer.me') }}</span>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Header extends Vue {
  seach(a: string) {
    console.log(a)
  }
}
</script>

<style scoped lang="scss">
.footer-container {
  background-color: var(--module-bg);
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  .gb {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 19px;
  }
}
</style>
