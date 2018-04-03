import Component from '@ember/component'

export default Component.extend({
  isEditing: false,
  editingText: '',

  actions: {
    toggleComplete (todo) {
      this.set('todo.isCompleted', !this.get('todo.isCompleted'))
    },

    handleClickText () {
      this.send('showEdit')
      let el = this.$()
      if (!(el && el[0])) {
        return
      }
      Ember.run.schedule('afterRender', () => {
        const input = el[0].querySelector('input')
        if (!input) {
          return
        }
        input.focus()
      })
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
      const editingText = this.get('editingText').trim()
      if (editingText) {
        this.set('todo.text', editingText)
      }
      this.set('isEditing', false)
      this.set('editingText', '')
    },

    editing (e) {
      this.set('editingText', e.target.value)
    }
  }
})
