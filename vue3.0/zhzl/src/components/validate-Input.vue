<template>
  <div class="form-group">
    <input
      class="form-control"
      :class="{ 'is-invalid': inputRef.error }"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      :value="inputRef.val"
      @blur="validateInput"
      @input="updateValue"
      v-bind="$attrs"
    />
    <div
      id="validationServer03Feedback"
      v-if="inputRef.error"
      :class="{ 'invalid-feedback': inputRef.error }"
    >
      {{ inputRef.message }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, onMounted } from "vue";
import emitter from "../utils/mitt";
interface RuleProp {
  type: "required" | "email";
  message: string;
}
export type RulesProp = RuleProp[];
const regEmail = /^([a-zA-Z]|[0-9])(\w)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
export default defineComponent({
  props: {
    rules: {
      type: Array as PropType<RulesProp>,
    },
    modelValue: String,
  },
  setup(props, context) {
    const inputRef = reactive({
      val: props.modelValue || "",
      error: false,
      message: "",
    });
    const validateInput = () => {
      if (props.rules) {
        const arrPassed = props.rules.every((rule) => {
          let passed = true;
          inputRef.message = rule.message;
          switch (rule.type) {
            case "required":
              passed = inputRef.val.trim() !== "";
              break;
            case "email":
              passed = regEmail.test(inputRef.val);
              break;
            default:
              break;
          }
          return passed;
        });
        inputRef.error = !arrPassed;
        return arrPassed;
      } else {
        return true;
      }
    };
    const updateValue = (e: KeyboardEvent) => {
      if (e.target) {
        const targetValue = (e.target as HTMLInputElement).value;
        inputRef.val = targetValue;
        context.emit("update:modelValue", targetValue);
      }
    };
    onMounted(() => {
      emitter.emit("form-item-create", validateInput);
    });
    return {
      inputRef,
      validateInput,
      updateValue,
    };
  },
});
</script>

<style>
</style>