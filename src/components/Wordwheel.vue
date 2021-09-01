<template>
  <div class="word">
    <h1>{{ color }} {{ title }} {{ word }}</h1>
  </div>
</template>

<script>
export default {
  name: "Wordwheel",
  props: {
    color: String,
    title: String,
    word: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.word {
  color: red;
}
</style>
