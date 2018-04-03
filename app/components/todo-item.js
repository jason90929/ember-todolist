import Component from '@ember/component';

export default Component.extend({
  actions: {
    toggleComplete (todo) {
      console.log('todo.isCompleted', this.get('todo.isCompleted'))
      this.set('todo.isCompleted', !this.get('todo.isCompleted'))
    }
  }
});
