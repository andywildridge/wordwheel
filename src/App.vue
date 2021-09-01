<template>
  <SpinButton @spin="spin" />
  <Wheel ref="wheel" :word="word" />
  <!-- <div class="spoiler">{{ word }}</div> -->
  <p class="score">Score: {{ score }}</p>
  <div v-if="errorMsg">{{ errorMsg }}</div>
  <Input @submitWord="submitWord" />
  <WordList v-show="showHide" :words="wordList" />
  <!--<SpeechRecog @toggleSpeech="toggleSpeech" :speechOn="speechOn" />
  {{ speechOn ? "On" : "Off" }}-->
</template>

<script>
import spellcheck from "./utils/spellcheck";
import Wheel from "./components/Wheel.vue";
import SpinButton from "./components/SpinButton.vue";
import Input from "./components/Input.vue";
import WordList from "./components/WordList.vue";
// import SpeechRecog from "./components/SpeechRecog.vue";
import getWord from "./assets/nines";

function isInWord(fullWord, partialWord) {
  console.log("iiw:", fullWord, partialWord);
  const letters = [...fullWord].reduce((letterFrequency, letter) => {
    if (!letterFrequency[letter]) {
      letterFrequency[letter] = 0;
    }
    letterFrequency[letter]++;
    return letterFrequency;
  }, {});
  // TODO memoise letters
  return [...partialWord.trim()].every((letter) => {
    if (letters[letter] && letters[letter] >= 1) {
      letters[letter]--;
      return true;
    }
    return false;
  });
}

export default {
  name: "App",
  components: {
    Wheel,
    SpinButton,
    Input,
    WordList,
    // SpeechRecog,
  },
  methods: {
    toggleSpeech() {
      this.speechOn = !this.speechOn;
      if (this.speechOn) {
        const speech = new window.webkitSpeechRecognition();
        // let words = {};
        speech.continuous = true;
        speech.interimResults = true;
        speech.start();
        speech.onresult = (event) => {
          const transcript = event.results[event.resultIndex][0].transcript;
          const confidence = event.results[event.resultIndex][0].confidence;
          console.log(transcript, confidence);
          if (confidence > 0.7) {
            this.submitWord(transcript.toLowerCase());
          }
          /*transcript.split("").forEach((word) => {
            words[word] = Math.floor(confidence * 1000);
          });
          let allwords = "";
          Object.keys(words).forEach((word) => {
            if (words[word] > 100) {
              // && test(word, puzzle)) {
              allwords += " " + word;
            }
          });
          // wordList.innerHTML = allwords;
          console.log(allwords, event.results[event.resultIndex][0]); */
        };
        speech.onend = (event) => {
          console.log("the end!", event);
          this.speechOn = false;
        };
      }
    },
    async submitWord(word) {
      console.log(word, this.word);
      if (!isInWord(this.word, word)) {
        this.errorMsg = `${word} does not fit in the wheel`;
        return false;
      }
      const result = await spellcheck(word);
      if (!result) {
        this.errorMsg = `${word} is not a valid word`;
        return false;
      } else {
        this.errorMsg = null;
        if (this.wordList.includes(word)) {
          this.errorMsg = `${word} already`;
          return false;
        }
        this.score += word.length;
        this.wordList = [...this.wordList, word];
      }
    },
    spin() {
      this.word = getWord();
      this.$refs.wheel.spin(this.word);
      this.wordList = [];
    },
  },
  mounted() {},
  data() {
    return {
      showHide: true,
      speechOn: false,
      wordList: [],
      started: false,
      word: getWord(),
      errorMsg: null,
      score: 0,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.spoiler {
  opacity: 0.2;
}
</style>
