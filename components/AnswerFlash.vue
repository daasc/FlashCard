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
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  .answer {
    cursor: pointer;
    font-size: 3rem;
  }
}
</style>
