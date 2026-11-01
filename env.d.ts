/// <reference types="vite/client" /> 

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // 泛型参数：Props, Emits, Slots
  const component: DefineComponent<{}, {}, any>
  export default component
}