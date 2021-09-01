<template>
  <div>
    <ul>
      <li
        v-for="word in sortedWords"
        :key="word"
        :style="`font-size: ${word.length / 3}em`"
      >
        {{ word }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "WordList",
  props: {
    words: Array,
  },
  /* data() {
    return {
      sortedWords: [...this.words]
        .sort((a, b) => a.length - b.length)
        .reverse(),
    };
  }, */
  computed: {
    sortedWords() {
      return [...this.words];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.words {
  color: blue;
}
li,
ul {
  list-style: none;
  margin: 0 auto;
  padding: 0;
  max-width: 400px;
}
li {
  display: inline-block;
  padding: 0.5rem 0.3rem 0;
  margin: 0;
  line-height: 1;
}
</style>
