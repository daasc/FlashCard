<template>
  <div class="alert">
    <span
      data-testid="message"
      class="message"
      :class="{ correct: correct === 'Correct', error: correct === 'Wrong' }"
    >
      {{ correct }}</span
    >
    <div v-if="correct !== 'Correct'" class="choose">Choose Your Answer</div>
    <button
      v-if="correct === 'Correct'"
      class="button-19"
      role="button"
      data-testid="start"
      @click="start()"
    >
      Play Again?
    </button>
  </div>
</template>
<script>
export default {
  name: 'AlertFlash',
  computed: {
    correct() {
      if (this.$store.state.flash.isCorrect === false) {
        return 'Wrong'
      } else if (this.$store.state.flash.isCorrect === true) {
        return 'Correct'
      }
      return ''
    },
  },
  methods: {
    start() {
      this.$store.commit('flash/START')
    },
  },
}
</script>
<style lang="scss" scoped>
.alert {
  display: flex;
  flex-direction: column;
  align-items: center;
  .choose {
    font-size: 18px;
  }
  .correct {
    color: #1899d6;
  }
  .error {
    color: #e70d0d;
  }
  .message {
    font-size: 17px;
    margin-bottom: 5px;
  }
  .button-19 {
    appearance: button;
    background-color: #1899d6;
    border: solid transparent;
    border-radius: 16px;
    border-width: 0 0 4px;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    font-family: din-round, sans-serif;
    font-weight: 700;
    letter-spacing: 0.8px;
    line-height: 20px;
    margin: 0;
    outline: none;
    overflow: visible;
    padding: 13px 16px;
    text-align: center;
    text-transform: uppercase;
    touch-action: manipulation;
    transform: translateZ(0);
    transition: filter 0.2s;
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    width: 40%;
    height: 45px;
    &after {
      background-clip: padding-box;
      background-color: #1cb0f6;
      border: solid transparent;
      border-radius: 16px;
      border-width: 0 0 4px;
      bottom: -4px;
      content: '';
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      z-index: -1;
    }
    &main,
    &:focus {
      user-select: auto;
    }
    &:hover:not(:disabled) {
      filter: brightness(1.1);
    }

    &:disabled {
      cursor: auto;
    }
  }
}
</style>
