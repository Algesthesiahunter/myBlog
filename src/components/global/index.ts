import Vue from 'vue'
interface modules {
  [propName: string]: Vue
}
const files = require.context('./modules', false, /\.vue$/)
const modules: modules = {}
files.keys().forEach(key => {
  if (key === './index.js') {
    return
  }
  modules[<string>key.replace(/(\.\/|\.vue)/g, '')] = files(key).default
})

let Components = {
  install() {
    for (const key in modules) {
      Vue.component(key, modules[key])
    }
  },
}
Vue.use(Components)
