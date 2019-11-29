import Vue from 'vue'
import Vuex, { ModuleTree } from 'vuex'

Vue.use(Vuex)
/**
 * @description: modules内js注入store 文件名横线 转换成 驼峰
 */
const files = require.context('./modules', false, /\.js$/)
const modules: ModuleTree<string> = {}
files.keys().forEach(key => {
  if (key === './index.js') {
    return
  }
  const k = key.replace(/(\.\/|\.js)/g, '')
  modules[k.replace(/-(\w)/g, (a, b) => b.toUpperCase())] = files(key).default
})

export default new Vuex.Store({
  modules,
})
