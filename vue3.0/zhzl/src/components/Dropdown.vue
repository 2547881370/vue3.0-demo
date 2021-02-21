<template>
  <div class="dropdown" ref="dropdownRef">
    <button
      type="button"
      class="btn btn-outline-light dropdown-toggle"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
      @click.prevent="clickByOpen"
    >
      {{ title }}
    </button>
    <ul
      class="dropdown-menu"
      aria-labelledby="dropdownMenuButton"
      :style="{ display: 'block' }"
      v-if="isOpen"
    >
      <slot></slot>
    </ul>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, watch } from "vue";
import useClickOutside from "../hooks/useClickOutside";
export default defineComponent({
  name: "Dropdown",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    const isOpen = ref(false);
    // 因为最初开始的时候,dom没有加载完成,所有要使用联合类型
    const dropdownRef = ref<null | HTMLElement>(null);
    const clickByOpen = () => {
      isOpen.value = !isOpen.value;
    };
    const { isClickOutside } = useClickOutside(dropdownRef);
    watch(isClickOutside, (newValue) => {
      if (newValue && isOpen.value) {
        isOpen.value = false;
      }
    });
    return {
      isOpen,
      clickByOpen,
      dropdownRef,
    };
  },
});
</script>

<style>
</style>