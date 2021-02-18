<template>
  <div class="container">
    <ColumnList :list='list'></ColumnList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "bootstrap/dist/css/bootstrap.min.css"
import ColumnList, { ColumnProps } from "./components/ColumnList.vue";
const columnList: ColumnProps[] = [
  {
    id: 1,
    title: "test1",
    avatar: "https://pic.cnblogs.com/avatar/1833768/20191023180526.png",
    description: "内容",
  },
  {
    id: 2,
    title: "test2",
    avatar: "https://pic.cnblogs.com/avatar/1833768/20191023180526.png",
    description: "内容",
  },
  {
    id: 3,
    title: "test3",
    avatar: "https://pic.cnblogs.com/avatar/1833768/20191023180526.png",
    description: "内容",
  },
  {
    id: 4,
    title: "test4",
    avatar: "https://pic.cnblogs.com/avatar/1833768/20191023180526.png",
    description: "内容",
  },
];
export default defineComponent({
  name: "App",
  components: {
    ColumnList,
  },
  setup(){
    return {
      list : columnList
    }
  }
});
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
