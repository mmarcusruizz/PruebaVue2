import { shallowMount } from '@vue/test-utils'
import ChildView from '@/components/ChildView.vue'
import ParentView from '@/components/ParentView.vue'

describe('Components', () => {
  describe('ChildView', () => {
    it('emits sendData event with correct data', () => {
      const wrapper = shallowMount(ChildView)
      wrapper.find('input').setValue('Hello')
      wrapper.find('button').trigger('click')
      expect(wrapper.emitted('sendData')[0][0]).toBe('Hello')
    })
  })

  describe('ParentView', () => {
    it('renders the received data', () => {
      const wrapper = shallowMount(ParentView)
      const child = wrapper.findComponent(ChildView)
      child.vm.$emit('sendData', 'Test data')
      wrapper.vm.$nextTick(() => {
        expect(wrapper.find('p').text()).toBe('Dato recibido: Test data')
      })
    })
  })
})