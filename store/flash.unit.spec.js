/* eslint-disable import/no-named-as-default-member */
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { state, mutations, getters, actions } from '@/store/flash.js'

const storeConfig = {
  state,
  mutations,
  getters,
  actions,
  namespaced: true,
}
describe('Flash', () => {
  const createStore = () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    const store = new Vuex.Store(storeConfig)
    return { store }
  }
  it('should return the value of the result ', () => {
    const { store } = createStore()
    expect(store.state.result).toEqual(0)
  })
  it('should return the value of the isCorrect ', () => {
    const { store } = createStore()
    expect(store.state.isCorrect).toEqual(null)
  })
  it('should return the value of the multiplier', () => {
    const { store } = createStore()
    expect(store.state.multiplier).toEqual(0)
  })
  it('should return the value of the secondMultiplier', () => {
    const { store } = createStore()
    expect(store.state.secondMultiplier).toEqual(0)
  })
  it('should return the value of the answer', () => {
    const { store } = createStore()
    expect(store.state.answer).toEqual([])
  })
  it('should save the new value of the multiplier when SET_MULTIPLIER is called', () => {
    const { store } = createStore()
    store.commit('SET_MULTIPLIER')
    expect(store.state.multiplier).toEqual(store.state.multiplier)
  })
  it('should save the new value of the isCorrect when CHECK_RESULT is called', () => {
    const { store } = createStore()
    store.commit('CHECK_RESULT', 3)
    expect(store.state.isCorrect).toEqual(false)
  })
  it('should save the new value of the secondMultiplier when SET_SECOND_MULTIPLIER is called', () => {
    const { store } = createStore()
    store.commit('SET_SECOND_MULTIPLIER')
    expect(store.state.secondMultiplier).toEqual(store.state.secondMultiplier)
  })
  it('should save the new value of the result when SET_RESULT is called', () => {
    const { store } = createStore()
    store.commit('SET_SECOND_MULTIPLIER')
    store.commit('SET_MULTIPLIER')
    const result = store.state.multiplier * store.state.secondMultiplier
    store.commit('SET_RESULT')
    expect(store.state.result).toEqual(result)
  })

  it('should save the new value of the answer when SET_ANSWER is called', () => {
    const { store } = createStore()
    store.commit('SET_SECOND_MULTIPLIER')
    store.commit('SET_MULTIPLIER')
    store.commit('SET_RESULT')
    store.commit('SET_ANSWER')
    const answer =
      store.state.multiplier * store.state.secondMultiplier +
      store.state.multiplier
    expect(store.state.answer).toContain(answer)
    expect(store.state.answer).toContain(store.state.result)
  })

  it('should check if the selected result is correct when CHECK_RESULT is called', () => {
    const { store } = createStore()
    store.commit('SET_SECOND_MULTIPLIER')
    store.commit('SET_MULTIPLIER')
    store.commit('SET_RESULT')
    const result = store.state.multiplier * store.state.secondMultiplier
    store.commit('CHECK_RESULT', result)
    expect(store.state.isCorrect).toBe(true)
  })

  it('should save isCorrect value as false when passed value is wrong', () => {
    const { store } = createStore()
    store.commit('SET_SECOND_MULTIPLIER')
    store.commit('SET_MULTIPLIER')
    store.commit('SET_RESULT')
    const result = store.state.multiplier * store.state.secondMultiplier + 1
    store.commit('CHECK_RESULT', result)
    expect(store.state.isCorrect).toBe(false)
  })
  it('should set new multipliers, result, isCorrect and answer values when AGAIN is called', () => {
    const { store } = createStore()
    store.commit('AGAIN')
    expect(store.state.multiplier).toBe(store.state.multiplier)
    expect(store.state.secondMultiplier).toBe(store.state.secondMultiplier)
    expect(store.state.isCorrect).toBe(null)
  })
})
