import Component from '@ember/component'
import { schedule } from '@ember/runloop'

export default Component.extend({
  tagName: 'li',
  classNames: 'todo-item',
  isEditing: false,
  editingText: '',

  actions: {
    toggleComplete () {
      this.set('todo.isCompleted', !this.get('todo.isCompleted'))
    },

    handleClickEdit () {
      this.send('showEdit')
      let el = this.$()
      console.log('el', el)
      if (!(el && el[0])) {
        return
      }
      schedule('afterRender', () => {
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
    },

    handleDelete () {
      this.get('todo').destroyRecord()
    }
  }
})
