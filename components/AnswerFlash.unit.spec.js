/* eslint-disable import/no-named-as-default-member */
import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import Vue from 'vue'
import AnswerFlash from '@/components/AnswerFlash.vue'

describe('AnswerFlash', () => {
  const mountAnswerFlash = () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    const store = new Vuex.Store({
      modules: {
        flash: {
          state: {
            answer: [10, 10, 10, 10, 10, 10],
          },
          namespaced: true,
        },
      },
    })
    const wrapper = mount(AnswerFlash, {
      mocks: {
        $store: store,
      },
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
})
