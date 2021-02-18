<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>{{ count }}</h1>
    <h1>{{ double }}</h1>
    <button @click="increase">+1</button>
    <button @click="updateGreetings">修改标题</button>
    <h1>x : {{ x }}</h1>
    <h1>y : {{ y }}</h1>
    <h1 v-if="loading">加载中...</h1>
    <!-- <h1 v-if="loaded"><img :src="result.message" /></h1> -->
    <h1 v-if="loaded"><img width="100" height="100" :src="result[0].url" /></h1>
    <button @click="openModal">打开全局弹框</button>
    <Modal :isOpen="isOpen" @closeModal="closeModal">
      <span style="color: #123412">我是自定义内容</span>
    </Modal>
    <div v-if="errMsg">{{errMsg}}</div>
    <Suspense v-else>
      <template #default>
        <!-- <async-show /> -->
        <dog-async-show />
      </template>
      <template #fallback>
        <div>正在拼了命的加载…</div>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
// // vue2.0 写法
// import { defineComponent } from "vue";
// export default defineComponent({
//   name: "App",
//   data() {
//     return {
//       count: 0,
//     };
//   },
//   methods: {
//     increase() {
//       this.count++;
//     },
//   },
// });

// vue3.0写法 ref
// import { ref, computed } from "vue";
// export default {
//   name: "App",
//   setup() {
//     const count = ref(0);
//     const double = computed(() => {
//       return count.value * 2;
//     });
//     const increase = () => {
//       count.value++;
//     };
//     return {
//       count,
//       double,
//       increase,
//     };
//   },
// };

// // vue3.0 写法 reactive
// import { computed, reactive, toRefs } from "vue";
// interface IrefData {
//   count: number;
//   double: number;
//   increase: () => void;
// }
// export default {
//   name: "App",
//   setup() {
//     const data: IrefData = reactive({
//       count: 0,
//       double: computed(() => data.count * 2),
//       increase: () => {
//         data.count++;
//       },
//     });
//     // 通过reactive创建的响应式对象,如果使用解构的方法暴露出去,必须是呀toRefs方法转化
//     // 如果不使用toRefs方法,则不能使用解构暴露,直接暴露data即可,然后模板中使用值需要通过 .
//     // toRefs的作用是将所有值都转换成响应式对象,模板只能追踪到可响应的数据
//     const refData = toRefs(data);
//     return {
//       ...refData,
//     };
//   },
// };

import {
  ref,
  computed,
  reactive,
  toRefs,
  onMounted,
  onUpdated,
  watch,
  onErrorCaptured,
} from "vue";
import useMousePosition from "./hooks/useMousePosition";
import useURLLoader from "./hooks/useURLLoader";
import Modal from "./components/Modal.vue";
import AsyncShow from "./components/AsyncShow.vue";
import DogAsyncShow from "./components/DogAsyncShow.vue";
interface IrefData {
  count: number;
  double: number;
  increase: () => void;
}

interface IDogData {
  message: string;
  status: string;
}

interface IThecat {
  id: string;
  url: string;
  width: string;
  height: string;
}

export default {
  name: "App",
  components: {
    Modal,
    AsyncShow,
    DogAsyncShow,
  },
  setup() {
    onMounted(() => {
      console.log("onMounted");
    });

    onUpdated(() => {
      console.log("onUpdated");
    });

    const data: IrefData = reactive({
      count: 0,
      double: computed(() => data.count * 2),
      increase: () => {
        data.count++;
      },
    });

    const greetings = ref("");
    const updateGreetings = () => {
      greetings.value += "Hello";
    };
    // watch 监听
    // watch(greetings, (newValue, oldValue) => {
    //   console.log("new", "新数据", newValue);
    //   console.log("old", "旧数据", oldValue);
    //   document.title = "updated" + greetings.value;
    // });

    // 监听多个数据 , 这里面打印的数据是一个数组,第二个值是一个proxy
    // watch([greetings, data], (newValue, oldValue) => {
    //   console.log("new", "新数据", newValue);
    //   console.log("old", "旧数据", oldValue);
    //   document.title = "updated" + greetings.value;
    // });

    // 监听多个数据, 监听data中特定的值, 可以通过函数返回的形式监听
    watch([greetings, () => data.count], (newValue, oldValue) => {
      console.log("new", "新数据", newValue);
      console.log("old", "旧数据", oldValue);
      document.title = "updated" + greetings.value;
    });

    const refData = toRefs(data);

    // vue2.0 mixin模块化缺点,属性不知从何而来;变量名称冲突
    // 接下来演示 vue3.0模块化,解决以上两个问题
    const { x, y } = useMousePosition();

    // const { result, loading, loaded } = useURLLoader<IDogData>(
    //   "https://dog.ceo/api/breeds/image/random"
    // );
    const { result, loading, loaded } = useURLLoader<IThecat[]>(
      "https://api.thecatapi.com/v1/images/search?limit=1&page=1&order=Desc"
    );

    watch(result, (newValue, oldValue) => {
      console.log(newValue, oldValue);
      if (result.value) {
        console.log(result.value[0].url);
      }
    });

    const isOpen = ref(false);
    const openModal = () => {
      isOpen.value = true;
    };
    const closeModal = () => {
      isOpen.value = false;
    };

    const errMsg = ref<string | null>(null);
    onErrorCaptured((e) => {
      errMsg.value = "呃，出了点问题！";
      return true;
    });

    return {
      ...refData,
      updateGreetings,
      x,
      y,
      result,
      loading,
      loaded,
      isOpen,
      openModal,
      closeModal,
      errMsg,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
