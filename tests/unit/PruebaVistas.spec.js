import { shallowMount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'

describe('HomeView.vue', () => {
  it('renderiza el componente HomeView', () => {
    const wrapper = shallowMount(HomeView)
    expect(wrapper.find('h1').text()).toBe('Home')
  })
})

describe('AboutView.vue', () => {
    it('Renderiza el componente AboutView', () => {
      const wrapper = shallowMount(AboutView)
      expect(wrapper.find('h1').text()).toBe('About')
    })
  })