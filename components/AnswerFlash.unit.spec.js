/* eslint-disable import/no-named-as-default-member */
import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import Vue from 'vue'
import AnswerFlash from '@/components/AnswerFlash.vue'
import { state, mutations } from '@/store/flash.js'

describe('AnswerFlash', () => {
  const mountAnswerFlash = () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    const store = new Vuex.Store({
      modules: {
        flash: {
          state,
          mutations,
          namespaced: true,
        },
      },
    })
    store.commit('flash/SET_SECOND_MULTIPLIER')
    store.commit('flash/SET_MULTIPLIER')
    store.commit('flash/SET_RESULT')
    store.commit('flash/SET_ANSWER')
    const wrapper = mount(AnswerFlash, {
      mocks: {
        $store: store,
      },
      localVue,
    })
    Vue.nextTick()
    return { store, wrapper }
  }
  it('should mount of the component', () => {
    const { wrapper } = mountAnswerFlash()
    expect(wrapper.vm).toBeDefined()
  })

  it('should show multiplier and secondMultiplier', () => {
    const { wrapper } = mountAnswerFlash()
    const answer = wrapper.findAll('[data-testid="answer"]')
    expect(answer).toHaveLength(6)
  })
  it('should check the value when the check is clicked', async () => {
    const { wrapper, store } = mountAnswerFlash()
    const check = wrapper.find('[data-testid="answer"]')
    await check.trigger('click')
    expect(store.state.flash.isCorrect).not.toBeNull()
  })
})
