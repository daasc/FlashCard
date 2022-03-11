/* eslint-disable import/no-named-as-default-member */
import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import Vue from 'vue'
import AlertFlash from '@/components/AlertFlash.vue'
import { state, mutations } from '@/store/flash.js'

describe('AlertFlash', () => {
  const mountAlertFlash = ({ wrong }) => {
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
    if (!wrong) {
      store.commit('flash/CHECK_RESULT', 10000)
    } else {
      store.commit('flash/CHECK_RESULT', store.state.flash.result)
    }
    const wrapper = mount(AlertFlash, {
      mocks: {
        $store: store,
      },
      localVue,
    })
    Vue.nextTick()
    return { store, wrapper }
  }
  it('should mount of the component', () => {
    const { wrapper } = mountAlertFlash({})
    expect(wrapper.vm).toBeDefined()
  })
  it('should show message of the error when isCorrect is false', () => {
    const { wrapper } = mountAlertFlash({ wrong: false })
    const message = wrapper.find('[data-testid="message"]')
    expect(message.text()).toBe('Wrong')
  })
  it('should show message of the success when isCorrect is true', () => {
    const { wrapper } = mountAlertFlash({ wrong: true })
    const message = wrapper.find('[data-testid="message"]')
    expect(message.text()).toBe('Correct')
  })
  it('should check the value when the check is clicked', async () => {
    const { wrapper, store } = mountAlertFlash({ wrong: true })
    const start = wrapper.find('[data-testid="start"]')
    await start.trigger('click')
    expect(store.state.flash.isCorrect).toBeNull()
  })
})
