<template>
  <button @click="onClick()" :style="{ background: color }" class="btn">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "MagicBtn",
  props: {
    text: String,
    color: String,
  },
  methods: {
    onClick() {
      this.$emit("mb", 7);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn {
  color: white;
}
</style>
