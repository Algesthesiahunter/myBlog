<template>
  <div class="tool-container">
    <div
      :class="{ 'lang cu-p us-n': true, 'lang-bg': lang === 'ZH' }"
      title="Switch language"
      @click="switchLang"
    ></div>
    <div
      :class="{ 'theme cu-p de': true, 'theme-bg': theme === 'dark' }"
      title="Switch language"
      @click="changeToRed(theme)"
    >
      <svg-icon icon-class="theme"></svg-icon>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ToolBox extends Vue {
  theme = 'default'
  changeToRed() {
    document.body.classList.remove(this.theme)
    if (this.theme === 'default') {
      this.theme = 'dark'
    } else {
      this.theme = 'default'
    }
    document.body.classList.add(this.theme)
    localStorage.theme = this.theme
  }
  get navList() {
    return this.$t('nav')
  }
  get navListKey() {
    return this.$t('nav')
  }
  get lang() {
    return this.$t('languages')
  }
  mounted() {
    if (localStorage.theme) {
      this.theme = localStorage.theme
    }
    document.body.classList.add(this.theme)
  }
  switchLang() {
    if (this.lang === 'EN') {
      this.$i18n.locale = 'zh'
    } else {
      this.$i18n.locale = 'en'
    }
    localStorage.lang = this.$i18n.locale
  }
}
</script>

<style scoped lang="scss">
.tool-container {
  &:hover {
    .theme,
    .lang {
      animation: none;
    }
  }
  position: fixed;
  left: 0;
  top: 50%;
  @keyframes tool-left {
    0% {
      transform: translateX(-35px);
    }
    50% {
      transform: translateX(-10px);
    }
    100% {
      transform: translateX(-35px);
    }
  }
  .lang {
    width: 40px;
    height: 25px;
    color: var(--text-reversal);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: transform 0.25s cubic-bezier(0.25, 0.8, 0.5, 1);
    animation: tool-left 1s infinite;
    font-size: 13px;
    font-weight: bold;
    &:hover {
      transform: translateX(0px) !important;
      animation: none;
      &:before {
        content: 'LANG';
        background: linear-gradient(to bottom left, rgb(2, 6, 255), #f3000c);
      }
    }
    &:before {
      transition: opacity 0.25s;
      width: 40px;
      height: 25px;
      line-height: 25px;
      text-align: center;
      content: 'EN';
      background: linear-gradient(rgb(59, 62, 248), rgb(2, 6, 255));
    }
  }
  .lang-bg {
    &:before {
      content: 'ZH';
      background: linear-gradient(#f3000c, #ff3741);
    }
    &:hover {
      &:before {
        background: linear-gradient(to bottom left, #f3000c, rgb(2, 6, 255));
      }
    }
  }
  .theme {
    width: 40px;
    height: 25px;
    color: var(--text-reversal);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.25s cubic-bezier(0.25, 0.8, 0.5, 1);
    animation: tool-left 1s 0.5s infinite;
    font-size: 16px;
    font-weight: bold;
    color: $primary;
    background-color: var(--module-bg);
    &:hover {
      transform: translateX(0px) !important;
      animation: none;
      &:before {
        background: linear-gradient(to bottom left, rgb(2, 6, 255), #f3000c);
      }
    }
  }
  .theme-bg {
    &:before {
      background: linear-gradient(#f3000c, #ff3741);
    }
    &:hover {
    }
  }
}
</style>
