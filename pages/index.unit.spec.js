/* eslint-disable import/no-named-as-default-member */
import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import { state, mutations } from '@/store/flash.js'
import CardFlash from '@/components/CardFlash.vue'
import index from '@/pages/index.vue'

describe('Index', () => {
  const mountIndex = () => {
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
    const wrapper = mount(index, {
      mocks: {
        $store: store,
      },
      localVue,
    })
    return { store, wrapper }
  }
  it('should mount of the component', () => {
    const { wrapper } = mountIndex()
    expect(wrapper.vm).toBeDefined()
  })

  it('should mount of the CardFlash component', () => {
    const { wrapper } = mountIndex()
    const card = wrapper.findComponent(CardFlash)
    expect(card.vm).toBeDefined()
  })
})
