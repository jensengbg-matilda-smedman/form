import { shallowMount } from '@vue/test-utils';

import Home from '../../src/views/Home.vue'


describe('Home.vue', () => {
it('should display all elements, h1, p and button', async () => {
    const wrapper = shallowMount(Home);
    
    const buttonExists = wrapper.find('button').exists();
    const pExists = wrapper.find('p').exists();
    const hExists = wrapper.find('h1').exists();

    expect(buttonExists).toBeTruthy();
    expect(pExists).toBeTruthy();
    expect(hExists).toBeTruthy();
  })
  
}) 