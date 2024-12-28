import { reactive } from 'vue'

export const store = reactive({
    activeTabIndex: 0,
    isDark: false,
    changeActiveTab(newIndex: number) {
        this.activeTabIndex = newIndex
    },
    changeTheme(newValue: boolean) {
        const root = document.body
        if (newValue) {
            root.classList.add('dark')
            root.classList.remove('light')
        } else {
            root.classList.add('light')
            root.classList.remove('dark')
        }
        root.style.colorScheme = `${newValue ? 'dark' : 'light'}`
        this.isDark = newValue
    },
})
