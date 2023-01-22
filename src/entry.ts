/** @format */
// 组件库出口，所有组件都会被导出
import { App } from 'vue'
import SButton from './button/Button'

export { SButton }
export default {
  install(app: App) {
    app.component(SButton.name, SButton)
  }
}
