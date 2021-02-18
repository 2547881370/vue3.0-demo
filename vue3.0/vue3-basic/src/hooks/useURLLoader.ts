import { ref } from "vue"
import axios from "axios"

function useURLLoader<T>(url: string) {
    const result = ref<T | null>(null)
    // loading 状态
    const loading = ref(true)
    // 是否加载完毕
    const loaded = ref(false)
    const error = ref(null)

    axios.get(url).then(rawData => {
        loading.value = false
        loaded.value = true
        result.value = rawData.data
    }).catch(e => {
        error.value = e
        loading.value = false
    })

    return {
        result,
        loading,
        loaded,
        error
    }
}

export default useURLLoader