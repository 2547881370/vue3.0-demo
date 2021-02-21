<template>
  <div class="container">
    <GobalHeader :user="currentUser"></GobalHeader>
    <ColumnList :list="list"></ColumnList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import ColumnList, { ColumnProps } from "./components/ColumnList.vue";
import GobalHeader, { UserProps } from "./components/GobalHeader.vue";
const currentUser: UserProps = {
  isLogin: true,
  name: "许昊",
};
const columnList: ColumnProps[] = [
  {
    id: 1,
    title: "test1",
    avatar:
      "https://i.ytimg.com/vi/sGOTCCVDLtQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDaNXm5ZHh66b6R2uNZ-NFxJK5NuA",
    description: "内容",
  },
  {
    id: 2,
    title: "test2",
    avatar:
      "https://i.ytimg.com/vi/sGOTCCVDLtQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDaNXm5ZHh66b6R2uNZ-NFxJK5NuA",
    description: "内容",
  },
  {
    id: 3,
    title: "test3",
    avatar:
      "https://i.ytimg.com/vi/sGOTCCVDLtQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDaNXm5ZHh66b6R2uNZ-NFxJK5NuA",
    description: "内容",
  },
  {
    id: 4,
    title: "test4",
    avatar:
      "https://i.ytimg.com/vi/sGOTCCVDLtQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDaNXm5ZHh66b6R2uNZ-NFxJK5NuA",
    description: "内容",
  },
];

export default defineComponent({
  name: "App",
  components: {
    ColumnList,
    GobalHeader,
  },
  setup() {
    return {
      list: columnList,
      currentUser,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
