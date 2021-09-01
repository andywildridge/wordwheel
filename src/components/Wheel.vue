<template>
  <div id="container">
    <svg ref="wheel" height="300" viewBox="0 0 300 300">
      <path
        d="M298.00,150.00A148,148,0,0,1,252.81,256.46L193.76,195.32A63,63,0,0,0,213.00,150.00Z"
      ></path>
      <path
        d="M254.65,254.65A148,148,0,0,1,147.42,297.98L148.90,212.99A63,63,0,0,0,194.55,194.55Z"
      ></path>
      <path
        d="M150.00,298.00A148,148,0,0,1,43.538,252.81L104.68,193.76A63,63,0,0,0,150.00,213.00Z"
      ></path>
      <path
        d="M45.348,254.65A148,148,0,0,1,2.0225,147.42L87.010,148.90A63,63,0,0,0,105.45,194.55Z"
      ></path>
      <path
        d="M2.0000,150.00A148,148,0,0,1,47.191,43.538L106.24,104.68A63,63,0,0,0,87.000,150.00Z"
      ></path>
      <path
        d="M45.348,45.348A148,148,0,0,1,152.58,2.0225L151.10,87.010A63,63,0,0,0,105.45,105.45Z"
      ></path>
      <path
        d="M150.00,2.0000A148,148,0,0,1,256.46,47.191L195.32,106.24A63,63,0,0,0,150.00,87.000Z"
      ></path>
      <path
        d="M254.65,45.348A148,148,0,0,1,297.98,152.58L212.99,151.10A63,63,0,0,0,194.55,105.45Z"
      ></path>
      <circle cx="150" cy="150" r="65" />
      <text x="110" y="73" font-size="56" text-anchor="middle">
        {{ currentWord[0] }}
      </text>
      <text x="190" y="73" font-size="56" text-anchor="middle">
        {{ currentWord[1] }}
      </text>
      <text x="250" y="132" font-size="56" text-anchor="middle">
        {{ currentWord[2] }}
      </text>
      <text x="250" y="217" font-size="56" text-anchor="middle">
        {{ currentWord[3] }}
      </text>
      <text x="190" y="273" font-size="56" text-anchor="middle">
        {{ currentWord[4] }}
      </text>
      <text x="110" y="273" font-size="56" text-anchor="middle">
        {{ currentWord[5] }}
      </text>
      <text x="50" y="132" font-size="56" text-anchor="middle">
        {{ currentWord[6] }}
      </text>
      <text x="50" y="217" font-size="56" text-anchor="middle">
        {{ currentWord[7] }}
      </text>
      <text x="150" y="180" font-size="80" text-anchor="middle">
        {{ currentWord[8] }}
      </text>
    </svg>
  </div>
</template>

<script>
function prepareWord(word) {
  return word
    .toUpperCase()
    .split("")
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value.toUpperCase())
    .join("");
}
export default {
  name: "Wheel",
  props: {
    word: String,
  },
  data() {
    return {
      currentWord: prepareWord(this.word),
    };
  },
  methods: {
    spin(word) {
      this.currentWord = prepareWord(word);
      this.$refs.wheel.animate([{ transform: `rotate(720deg)` }], {
        duration: 1000,
        easing: "ease-out",
        iterations: 1,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  text-align: center;
  background: cornsilk;
  font-family: Arial, Helvetica, sans-serif;
}
path,
circle {
  stroke: black;
  stroke-width: 2;
  fill: white;
}
circle {
  fill: #ddd;
}
text {
  font-family: arial;
}
#container {
  position: relative;
  width: 300px;
  height: 300px;
  margin: 40px auto;
}
label {
  display: block;
  visibility: hidden;
}
input {
  text-align: center;
}
svg {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  filter: drop-shadow(0px 2px 3px #333);
}
#mic {
  width: 20px;
  height: 20px;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  margin: 10px auto;
}
path,
circle,
text {
  cursor: pointer;
}
</style>
