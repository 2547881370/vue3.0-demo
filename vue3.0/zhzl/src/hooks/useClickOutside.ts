import { ref, Ref, onMounted, onUnmounted } from "vue"

/**
 * @summary 元素点击事件,是否点击到元素外部
 * @param element 响应式的dom节点对象
 */
function useClickOutside(element: Ref<null | HTMLElement>) {
    const isClickOutside = ref(false)
    const handler = (e: MouseEvent) => {
        if (element.value) {
            const eTarget = e.target
            if (eTarget) {
                isClickOutside.value = !(element.value.contains(eTarget as HTMLElement))
            }
        }
    }
    onMounted(() => {
        document.addEventListener("click", handler)
    })
    onUnmounted(() => {
        document.removeEventListener("click", handler)
    })
    return {
        isClickOutside
    }
}

export default useClickOutside