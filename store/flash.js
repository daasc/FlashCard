export const state = () => ({
  result: 0,
  multiplier: 0,
  secondMultiplier: 0,
  answer: [],
  isCorrect: null,
})

export const mutations = {
  SET_MULTIPLIER: (state) => {
    state.multiplier = Math.floor(Math.random() * 15) + 1
  },
  SET_SECOND_MULTIPLIER: (state) => {
    state.secondMultiplier = Math.floor(Math.random() * 15) + 1
  },
  SET_RESULT: (state) => {
    state.result = state.multiplier * state.secondMultiplier
  },
  SET_ANSWER: (state) => {
    state.answer = []
    state.answer.push(
      state.multiplier * state.secondMultiplier + state.multiplier
    )
    /* istanbul ignore next */
    if (
      !state.answer.includes(
        state.multiplier * state.secondMultiplier + state.multiplier
      )
    ) {
      /* istanbul ignore next */
      state.answer.push(
        state.multiplier * state.secondMultiplier + state.multiplier
      )
    } else {
      const min = Math.min(...state.answer)
      state.answer.push(min - 1)
    }
    const number =
      state.multiplier * state.secondMultiplier - Math.floor(Math.random() * 5)
    if (!state.answer.includes(number)) {
      state.answer.push(number)
    } else {
      /* istanbul ignore next */
      const min = Math.min(...state.answer)
      state.answer.push(min - 1)
    }
    const number2 =
      state.multiplier * state.secondMultiplier + Math.floor(Math.random() * 5)
    if (!state.answer.includes(number2)) {
      state.answer.push(number2)
    } else {
      /* istanbul ignore next */
      const max = Math.max(...state.answer)
      state.answer.push(max + 1)
    }
    const number3 =
      state.multiplier * state.secondMultiplier + Math.floor(Math.random() * 10)
    if (!state.answer.includes(number3)) {
      state.answer.push(number3)
    } else {
      const max = Math.max(...state.answer)
      state.answer.push(max + 1)
    }
    if (!state.answer.includes(state.result)) {
      state.answer.splice(Math.random() * 5, 0, state.result)
    } else {
      state.answer.splice(state.answer.indexOf(state.result), 1)
      const max = Math.max(...state.answer)
      state.answer.push(max + 1)
      state.answer.splice(Math.random() * 5, 0, state.result)
    }
  },
  CHECK_RESULT: (state, payload) => {
    if (state.result === payload) {
      state.isCorrect = true
    } else {
      state.isCorrect = false
    }
  },
  START: (state) => {
    mutations.SET_MULTIPLIER(state)
    mutations.SET_SECOND_MULTIPLIER(state)
    mutations.SET_RESULT(state)
    mutations.SET_ANSWER(state)
    state.isCorrect = null
  },
}

export const getters = {}

export const actions = {}
