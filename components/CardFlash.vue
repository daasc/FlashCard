<template>
  <div class="card">
    <div class="multiplier">
      <span data-testid="multiplier">{{ multiplier }}</span>
    </div>
    <div class="multiplier-symbol">
      <span class="symbol">X</span>
      <span class="multiplier" data-testid="secondMultiplier">{{
        secondMultiplier
      }}</span>
    </div>
    <hr class="divider" />
    <alert-flash></alert-flash>
    <answer-flash></answer-flash>
  </div>
</template>
<script>
import AlertFlash from './AlertFlash.vue'
import AnswerFlash from './AnswerFlash.vue'
export default {
  name: 'CardFlash',
  components: { AnswerFlash, AlertFlash },
  computed: {
    multiplier() {
      return this.$store.state.flash.multiplier
    },
    secondMultiplier() {
      return this.$store.state.flash.secondMultiplier
    },
  },
}
</script>
<style lang="scss">
.card {
  background: #262a27;
  border-radius: 15px;
  color: white;
  display: block;
  float: left;
  margin: 10px 1%;
  max-width: 320px;
  padding-bottom: 25px;
  width: 98%;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
    rgba(0, 0, 0, 0.05) 0px 5px 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-self: center;
  .multiplier {
    font-size: 8em;
  }
  .multiplier-symbol {
    .symbol {
      font-size: 4em;
      margin-right: 20px;
    }
  }
  .divider {
    height: 10px;
    background-color: white;
    width: 80%;
    border-radius: 10px;
    margin: 0px auto;
    padding: 0px;
    margin-bottom: 10px;
  }
}
</style>
