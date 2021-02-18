import { reactive, onMounted, onUnmounted, toRefs } from "vue"

interface IPosition {
    x: number
    y: number
}

function useMousePosition() {
    const position: IPosition = reactive({
        x: 0,
        y: 0
    })
    const updateMouse = (e: MouseEvent) => {
        position.x = e.pageX
        position.y = e.pageY
    }
    onMounted(() => {
        document.addEventListener("click", updateMouse)
    })
    onUnmounted(() => {
        document.removeEventListener("click", updateMouse)
    })
    const refPosition = toRefs(position)

    return {
        ...refPosition
    }
}

export default useMousePosition