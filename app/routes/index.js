import Route from '@ember/routing/route';

export default Route.extend({
  model () {
    // const todos = this.get('store').findAll('todo')
    // return todos
  },

  actions: {
    addTodo (text) {
      console.log(text)
    }
  }
});
