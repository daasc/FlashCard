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
  </div>
</template>
<script>
export default {
  name: 'CardFlash',
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
  background: #ffebbe;
  border-radius: 15px;
  display: block;
  float: left;
  margin: 10px 1%;
  max-width: 320px;
  padding-bottom: 25px;
  width: 98%;
  -webkit-box-shadow: 2px 2px 2px 2px rgb(0 0 0 / 20%);
  box-shadow: 2px 2px 2px 2px rgb(0 0 0 / 20%);
  display: flex;
  flex-direction: column;
  text-align: center;
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
    background-color: black;
    width: 80%;
    border-radius: 10px;
    margin: 0px auto;
    padding: 0px;
  }
}
</style>
