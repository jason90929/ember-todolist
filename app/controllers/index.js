import Controller from '@ember/controller';
// import Ember from 'ember';

export default Controller.extend({
  todoInput: '',
  // todos: Ember.computed('todo', function () {
  //   console.log(this)
  //   console.log(this.get('model'))
  //   return this.get('model')
  // }),
  actions: {
    addTodo (text) {
      const payload = {
        text
      }
      const todo = this.get('store').createRecord('todo', payload)
      todo.save()
    }
  }
});
