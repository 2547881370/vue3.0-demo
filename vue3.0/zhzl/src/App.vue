<template>
  <div class="container">
    <GobalHeader :user="currentUser"></GobalHeader>
    <ColumnList :list="list"></ColumnList>
    <validate-form @form-submit="onSubmitForm">
      <div class="form-group">
        <label for="exampleInputEmail1">账号</label>
        <validate-input
          :rules="emailRules"
          v-model="emailValue"
          type="text"
          placeholder="请输入账号"
        ></validate-input>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">密码</label>
        <validate-input
          :rules="passwordRules"
          v-model="passwordValue"
          type="password"
          placeholder="请输入密码"
        ></validate-input>
      </div>
      <template #submit>
        <button type="button" class="btn btn-danger">提交</button>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import ColumnList, { ColumnProps } from "./components/ColumnList.vue";
import GobalHeader, { UserProps } from "./components/GobalHeader.vue";
import validateInput, { RulesProp } from "./components/validate-Input.vue";
import validateForm from "./components/validate-form.vue";
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
    validateInput,
    validateForm,
  },
  setup() {
    const emailRules: RulesProp = [
      {
        type: "required",
        message: "输入不能为空,请输入邮箱",
      },
      {
        type: "email",
        message: "请输入正确邮箱格式",
      },
    ];
    const passwordRules: RulesProp = [
      {
        type: "required",
        message: "输入不能为空,请输入密码",
      },
    ];
    const emailValue = ref("2547881370@qq.com");
    const passwordValue = ref(null);
    const onSubmitForm = (isValid: boolean) => {
      if(isValid){
        console.log("验证通过")
      }else{
        console.log("验证失败")
      }
    };
    return {
      list: columnList,
      currentUser,
      emailRules,
      emailValue,
      passwordRules,
      passwordValue,
      onSubmitForm,
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
