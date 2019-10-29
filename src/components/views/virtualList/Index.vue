<template>
  <div class="spa-content-box">
    <List :listData="data" :itemSize="100"/>
  </div>
</template>

<script>
import List from "./List";
let d = [];
for (let i = 0; i < 1000; i++) {
  d.push({ id: i, value: i });
}

export default {
  data() {
    return {
      data: d
    };
  },
  components: {
    List
  },
  mounted() {
    //do something after mounting vue instance
  }
};
</script>

<style>

</style>
