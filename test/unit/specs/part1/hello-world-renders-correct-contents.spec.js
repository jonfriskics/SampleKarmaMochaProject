import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld';
const assert = require('chai').assert;

describe('HelloWorld.vue', () => {
  it('should render correct contents @hello-world-renders-correct-contents', () => {
    const Constructor = Vue.extend(HelloWorld);
    const vm = new Constructor().$mount();
    assert(vm.$el.querySelector('.hello h1'), 'The h1 was not found under the hello div in HelloWorld.vue');
    assert(vm.$el.querySelector('.hello h1').textContent === 'Welcome to Your Vue.js App', 'Not rendering the correct copy inside of the h1 on HelloWorld.vue');
  });
});
