<template>
  <div>
    <ThreeDots
      theme="dark"
      variant="danger"
      :items="['qq', 'qqq']"
      @clicked="cc"
      @qq-clicked="ss"
    />
  </div>
</template>
<script>
import { ThreeDots } from "./main-production.js";
export default {
  components: { ThreeDots },
  methods: {
    cc(e) {
      console.log(e);
    },
    ss() {
      console.log("++");
    },
  },
};
</script>
<style scoped>
div {
  background-color: red;
}
</style>