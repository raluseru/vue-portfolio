import { reactive } from 'vue'

export const store = reactive({
  activeTabIndex: 0,
  changeActiveTab (newIndex:number) {
    this.activeTabIndex = newIndex
  }
})