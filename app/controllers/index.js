import Controller from '@ember/controller'

export default Controller.extend({
  todoInput: '',
  actions: {
    addTodo (text) {
      const payload = {
        text
      }
      const todo = this.get('store').createRecord('todo', payload)
      todo.save()
    }
  }
})
