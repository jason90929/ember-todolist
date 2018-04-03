import Controller from '@ember/controller'

export default Controller.extend({
  todoInput: '',
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
