<template>
  <div @click="toggleSpeech()">Speech {{ speechOn ? "On" : "Off" }}</div>
</template>

<script>
export default {
  name: "SpeechRecog",
  props: {
    speechOn: Boolean,
  },
  methods: {
    toggleSpeech() {
      this.$emit("toggleSpeech");
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
