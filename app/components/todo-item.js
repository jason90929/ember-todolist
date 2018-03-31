import Component from '@ember/component';

export default Component.extend({
  actions: {
    toggleComplete (todo) {
      // console.log('todo', todo)
      // console.log('todo.id', todo.get('id'))
      // this.get('store').findRecord('todo.js', todo.get('id')).then(function(tyrion) {
      //   // ...after the record has loaded
      //   console.log(tyrion)
      //   tyrion.set('isCompleted', true);
      // });
    }
  }
});
