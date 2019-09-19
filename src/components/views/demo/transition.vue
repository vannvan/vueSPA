<template>
  <div class="spa-content-box">
    <!-- // 使用组件 -->
    <lottie :options="defaultOptions" :height="200" :width="200" v-on:animCreated="handleAnimation" />
  </div>
</template>

<script>
import emojiWink from "@/assets/json/43-emoji-wink.json";
export default {
  name:'Transition',
  components: {},
  props: {},
  data() {
    return {
      defaultOptions: { animationData: emojiWink },
      animationSpeed: 1,
      anim: {}
    }
  },
  filters: {

  },
  computed: {

  },
  created() {

  },
  mounted() {

  },
  methods: {
    handleAnimation: function(anim) {
       this.anim = anim;
       console.log(anim); //这里可以看到 lottie 对象的全部属性
   },
  },
}
</script>
<style lang="scss">

</style>
