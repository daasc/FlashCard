export const state = () => ({
  result: 0,
  multiplier: 0,
  secondMultiplier: 0,
  answer: [],
  isCorrect: null,
})

export const mutations = {
  SET_MULTIPLIER: (state) => {
    state.multiplier = Math.floor(Math.random() * 100) + 1
  },
  SET_SECOND_MULTIPLIER: (state) => {
    state.secondMultiplier = Math.floor(Math.random() * 100) + 1
  },
  SET_RESULT: (state) => {
    state.result = state.multiplier * state.secondMultiplier
  },
  SET_ANSWER: (state) => {
    state.answer = []
    state.answer.push(
      state.multiplier * state.secondMultiplier + state.multiplier
    )
    state.answer.push(
      state.multiplier * state.secondMultiplier + state.secondMultiplier
    )
    state.answer.push(
      state.multiplier * state.secondMultiplier - Math.floor(Math.random() * 5)
    )
    state.answer.push(
      state.multiplier * state.secondMultiplier + Math.floor(Math.random() * 5)
    )
    state.answer.push(state.multiplier * state.secondMultiplier + 6)
    state.answer.splice(Math.random() * 5, 0, state.result)
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
