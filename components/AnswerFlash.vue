<template>
  <div class="answers">
    <div
      v-for="(item, index) in answer"
      :key="index"
      class="answer"
      data-testid="answer"
    >
      {{ item }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'AnswerFlash',
  computed: {
    answer() {
      return this.$store.state.flash.answer
    },
  },
}
</script>
<style lang="scss">
.answers {
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto-fill, 30px);
  grid-row-gap: 3.5em;
  grid-column-gap: 1em;
  .answer {
    cursor: pointer;
    font-size: 3rem;
  }
}
</style>
