import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Table from '@/components/Table'
import Select from '@/components/Select'
import AutoComplete from '@/components/AutoComplete'
import AutocompleteVue from 'autocomplete-vue';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/table',
      name: 'Table',
      component: Table
    },
    {
      path: '/select',
      name: 'Select',
      component: Select
    },
    {
      path: '/autocomplete',
      name: 'AutoComplete',
      component: {AutoComplete,AutocompleteVue}
    }
  ]
})
