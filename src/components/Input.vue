<template>
  <form @submit="onSubmit">
    <input type="search" v-model="text" placeholder="Enter word" />
  </form>
</template>

<script>
export default {
  name: "Input",
  props: {
    word: String,
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      this.$emit("submitWord", this.text);
      this.text = "";
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
input[type="search"] {
  -webkit-appearance: searchfield;
}
input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: searchfield-cancel-button;
}
input[type="search"] {
  text-align: center;
  outline: 0;
  border-width: 0 0 1px;
  border-color: #333;
  line-height: 2rem;
  font-size: 1.2rem;
  transition: 0.5s background;
  background-color: #e8e8e8;
}
input[type="search"]:focus {
  background-color: #f7f7f7;
}
</style>
