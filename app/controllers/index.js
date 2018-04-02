import Controller from '@ember/controller';

export default Controller.extend({
  todoInput: '',
  actions: {
    addTodo (text) {
      console.log(text)
    }
  }
});
