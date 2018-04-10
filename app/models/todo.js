import DS from 'ember-data'

const Todo = DS.Model.extend({
  text: DS.attr('string'),
  isCompleted: DS.attr('boolean', { defaultValue: false })
})

Todo.reopenClass({
  FIXTURES: [
    {
      id: '1',
      text: 'add ember',
      isCompleted: true
    },
    {
      id: '2',
      text: 'add some coding',
      isCompleted: true
    },
    {
      id: '3',
      text: 'complete todo list!',
      isCompleted: false
    }
  ]
})

export default Todo
