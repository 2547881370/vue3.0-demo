<template>
  <div class="AsyncShow">
    {{ value }}
  </div>
</template>

<script>
// 这是一个简易的异步组件,setup返回一个promise
import { defineComponent } from "vue";
export default defineComponent({
  name: "AsyncShow",
  setup() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          value: 24,
        });
      }, 3000);
    });
  },
});
</script>

<style  scoped>
</style>>