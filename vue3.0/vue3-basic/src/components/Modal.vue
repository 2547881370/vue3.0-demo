<template>
  <!-- teleport是vue3.0的一个全局组件, 别名瞬移组件,可以将组件放置在根节外部,防止过度嵌套子组件内部,造成css混乱 -->
  <!-- html文件中有一个id为modal的元素,将会挂载到上面 -->
  <teleport to="#modal">
    <div class="modal" v-if="isOpen">
      <h1>全局弹框</h1>
      <slot />
      <button @click="onClose">Close</button>
    </div>
  </teleport>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Modal",
  props: {
    isOpen: Boolean,
  },
  // emits可以限制组件的派发事件名称和参数
  // 1. 限制参数时, 使用函数,返回值是true作为验证成功,如果校验失败,会警告,不会阻塞流程
  // 2. 也可以不限制参数,直接为null
  emits: {
    // 限制参数 type 必须为close
    "close-modal": (payload: any) => {
      return payload.type === "close";
    },
    // 不限制参数
    "close-test": null,
  },
  setup(_, context) {
    const onClose = () => {
      context.emit("close-modal", {
        type: "close",
      });
    };
    return {
      onClose,
    };
  },
});
</script>

<style scoped>
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-radius: 10px;
  z-index: 9999;
  background: chocolate;
}
</style>>
