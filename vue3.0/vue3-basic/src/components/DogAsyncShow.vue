<template>
  <div class="DogAsyncShow">
    <img :src="result && result.message" width="200" height="200" />
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  name: "DogAsyncShow",
  async setup() {
    const newVlaue = await axios.get("https://dog.ceo/api/breeds/image/random");
    return {
      result: newVlaue.data,
    };
  },
});
</script>

<style  scoped>
</style>