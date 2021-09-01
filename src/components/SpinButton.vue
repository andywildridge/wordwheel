<template>
  <button @click="onClick()">New word</button>
</template>

<script>
export default {
  name: "SpinButton",
  props: {},
  methods: {
    onClick() {
      this.$emit("spin");
    },
  },
  data() {
    return {
      text: "",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.word {
  color: red;
}
</style>
