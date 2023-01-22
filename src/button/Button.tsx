/** @format */

import { defineComponent, type PropType } from 'vue'
import 'uno.css'
export type IColor = 'black' | 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink'
export type IIcons = 'search' | 'edit' | 'check' | 'message' | 'star-off' | 'delete' | 'add' | 'share'
export const props = {
  color: {
    type: String as PropType<IColor>,
    default: 'green' // 设定默认颜色
  },
  icon: {
    type: String as PropType<IIcons>,
    require: false
  }
}
export default defineComponent({
  name: 'SButton',
  props,
  setup(props, { slots }) {
    return () => (
      <button
        class={`
        py-2
        px-4
        font-semibold
        rounded-lg
        shadow-md
        text-white
        bg-${props.color}-500
        hover:bg-${props.color}-700
        border-none
        cursor-pointer
        m-1
      `}
      >
        {props.icon ? <i class={`i-ic-baseline-${props.icon} p-3`}></i> : ''}
        {slots.default ? slots.default() : ''}
      </button>
    )
  }
})
