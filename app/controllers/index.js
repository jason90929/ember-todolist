import Controller from '@ember/controller'
import { computed } from '@ember/object';

export default Controller.extend({
  todoInput: '',
  filterType: 'all',
  filterTypes: [{
    name: 'all',
    onclick () {
      this.set('filterType', 'all')
    }
  }, {
    name: 'completed',
    onclick () {
      this.set('filterType', 'completed')
    }
  }, {
    name: 'uncompleted',
    onclick () {
      this.set('filterType', 'uncompleted')
    }
  }],
  filterComputed: computed('model', 'filterType', function () {
    return this.get('model').filter(item => {
      console.log('this.get(\'filterType\')', this.get('filterType'))
      switch (this.get('filterType')) {
        case 'all':
          return item
        case 'completed':
          return item.get('isCompleted') === true
        case 'uncompleted':
          return item.get('isCompleted') === false
      }
    })
  }),
  actions: {
    addTodo (text) {
      const todoInput = this.get('todoInput').trim()
      if (!todoInput) {
        return
      }
      const payload = {
        text
      }
      const todo = this.get('store').createRecord('todo', payload)
      todo.save()
      this.set('todoInput', '')
    }
  }
})
