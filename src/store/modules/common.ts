import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
@Module({
  namespaced: true,
  stateFactory: true,
})
export default class Common extends VuexModule {
  public theme: string = 'default'
  @Mutation
  public UPDATE_THEME(params: string) {
    this.theme = params
  }
  @Action({ commit: 'UPDATE_THEME' })
  updateTheme(params: string) {
    return params
  }
}
