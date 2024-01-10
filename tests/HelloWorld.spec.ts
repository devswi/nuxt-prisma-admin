import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import HelloWorld from '../components/HelloWorld.vue'

describe('helloWorld.vue', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(HelloWorld)
    expect(wrapper.vm).toBeTruthy()
  })
})
