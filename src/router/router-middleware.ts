import i18n from '../lang'
import VueRouter from 'vue-router'
import dayjs from 'dayjs'

let middleware = (router: VueRouter) => {
  router.beforeEach((to, from, next) => {
    const name = `nav.${to.name}`
    let title = `${i18n.t(name)}  |  `.toUpperCase()

    let str = `时光旅行到站，${dayjs().format('YYYY')} 年 ${dayjs().format(
      'MM'
    )} 月 ${dayjs().format(
      'DD'
    )} 日，欢迎回家！又是元气满满的一天，干巴得、奥利给！`

    document.title = title + str
    next()
  })
  router.afterEach(() => {})
}

export default middleware
