<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <a class="navbar-brand" href="#">Navbar</a>
    <ul v-if="!user.isLogin" class="list-inline mb-0">
      <li class="list-inline-item">
        <a href="#" class="btn btn-outline-light my-2">登录</a>
      </li>
      <li class="list-inline-item">
        <a href="#" class="btn btn-outline-light my-2">注册</a>
      </li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item">
        <Dropdown :title="user.name">
          <dropdown-item :disabled="true">
            <a class="dropdown-item" href="#">Something else here</a>
          </dropdown-item>
          <dropdown-item>
            <a class="dropdown-item" href="#">Something else here</a>
          </dropdown-item>
          <dropdown-item>
            <a class="dropdown-item" href="#">Something else here</a>
          </dropdown-item>
        </Dropdown>
      </li>
    </ul>
  </nav>
</template>

<script lang='ts'>
import { defineComponent, PropType } from "vue";
import Dropdown from "./Dropdown.vue";
import dropdownItem from "./dropdown-item.vue";

export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: string;
}
export default defineComponent({
  name: "GobalHeader",
  components: {
    Dropdown,
    dropdownItem,
  },
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true,
    },
  },
});
</script>

<style>
</style>