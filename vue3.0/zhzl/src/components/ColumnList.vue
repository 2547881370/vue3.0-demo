<template>
  <div class="ColumnList">
    <div v-for='item in list' :key='item.id'>
      <img :src="item.avatar" >
      <h3>{{item.title}}</h3>
      <p>{{item.description}}</p>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from "vue";
export interface ColumnProps {
  id: number;
  title: string;
  avatar: string;
  description: string;
}
export default defineComponent({
  name: "ColumnList",
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true,
    },
  },
});
</script>

<style>
</style>