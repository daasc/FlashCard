/* eslint-disable import/no-named-as-default-member */
import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import { state } from '@/store/flash.js'
import CardFlash from '@/components/CardFlash.vue'
import AlertFlash from '@/components/AlertFlash.vue'
import AnswerFlash from '@/components/AnswerFlash.vue'

describe('CardFlash', () => {
  const mountCardFlash = () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    const store = new Vuex.Store({
      modules: {
        flash: {
          state,
          namespaced: true,
        },
      },
    })
    const wrapper = mount(CardFlash, {
      mocks: {
        $store: store,
      },
      localVue,
    })
    return { store, wrapper }
  }
  it('should mount of the component', () => {
    const { wrapper } = mountCardFlash()
    expect(wrapper.vm).toBeDefined()
  })

  it('should mount of the AlertFlash component', () => {
    const { wrapper } = mountCardFlash()
    const alert = wrapper.findComponent(AlertFlash)
    expect(alert.vm).toBeDefined()
  })

  it('should mount of the AnswerFlash component', () => {
    const { wrapper } = mountCardFlash()
    const answer = wrapper.findComponent(AnswerFlash)
    expect(answer.vm).toBeDefined()
  })

  it('should show multiplier and secondMultiplier', () => {
    const { wrapper } = mountCardFlash()
    const multiplier = wrapper.find('[data-testid="multiplier"]')
    const secondMultiplier = wrapper.find('[data-testid="secondMultiplier"]')
    expect(multiplier.text()).toContain('0')
    expect(secondMultiplier.text()).toContain('0')
  })
})
