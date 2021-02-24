<template>
  <form>
    <slot></slot>
    <div class="submit-area my-3" @click.prevent="submitForm">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";
import emitter from "../utils/mitt";
type ValidateArrFn = () => boolean;
export default defineComponent({
  emits: ["form-submit"],
  setup(props, context) {
    let validateArrFn: ValidateArrFn[] = [];
    const submitForm = () => {
      const isValid = validateArrFn.map((b) => b()).every((b) => b);
      context.emit("form-submit", isValid);
    };
    const callback = (func: ValidateArrFn) => {
      console.log(func)

      validateArrFn.push(func);
    };
    emitter.on("form-item-create", callback);
    onUnmounted(() => {
      emitter.off("form-item-create", callback);
      validateArrFn = [];
    });
    return {
      submitForm,
    };
  },
});
</script>

<style>
</style>