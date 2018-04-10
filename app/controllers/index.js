import Controller from '@ember/controller'
import { computed } from '@ember/object'

export default Controller.extend({
  todoInput: '',
  filterType: 'all',
  filterTypes: [
    'all',
    'completed',
    'uncompleted'
  ],
  filterComputed: computed('model.@each.isCompleted', 'filterType', function () {
    return this.get('model').filter(item => {
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
    },
    setFilterType (type) {
      this.set('filterType', type)
    }
  }
})
