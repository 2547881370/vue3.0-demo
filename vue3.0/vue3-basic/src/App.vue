<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>{{ count }}</h1>
    <h1>{{ double }}</h1>
    <button @click="increase">+1</button>
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

// vue3.0 写法 reactive
import { computed, reactive, toRefs } from "vue";
interface IrefData {
  count: number;
  double: number;
  increase: () => void;
}
export default {
  name: "App",
  setup() {
    const data: IrefData = reactive({
      count: 0,
      double: computed(() => data.count * 2),
      increase: () => {
        data.count++;
      },
    });
    // 通过reactive创建的响应式对象,如果使用解构的方法暴露出去,必须是呀toRefs方法转化
    // 如果不使用toRefs方法,则不能使用解构暴露,直接暴露data即可,然后模板中使用值需要通过 .
    // toRefs的作用是将所有值都转换成响应式对象,模板只能追踪到可响应的数据
    const refData = toRefs(data);
    return {
      ...refData,
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
