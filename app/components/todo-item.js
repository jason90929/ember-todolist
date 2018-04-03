import Component from '@ember/component';

export default Component.extend({
  isEditing: false,
  editingText: '',

  actions: {
    toggleComplete (todo) {
      this.set('todo.isCompleted', !this.get('todo.isCompleted'))
    },

    showEdit () {
      this.set('isEditing', true)
      this.set('editingText', this.get('todo.text'))
    },

    closeEdit () {
      this.set('isEditing', false)
      this.set('editingText', '')
    },

    onkeydown (e) {
      if (e.keyCode === 13) {
        this.send('saveEdit')
      }
    },

    saveEdit () {
      this.set('isEditing', false)
      this.set('todo.text', this.get('editingText'))
      this.set('editingText', '')
    },

    editing (e) {
      this.set('editingText', e.target.value)
    }
  }
});
