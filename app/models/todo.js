import DS from 'ember-data'

const Todo = DS.Model.extend({
  text: DS.attr('string'),
  isCompleted: DS.attr('boolean', { defaultValue: false })
})

Todo.reopenClass({
  FIXTURES: [
    {
      id: '1',
      text: 'install ember-cli',
      isCompleted: true
    },
    {
      id: '2',
      text: 'install additional dependencies',
      isCompleted: true
    },
    {
      id: '3',
      text: 'develop amazing things',
      isCompleted: false
    }
  ]
})

export default Todo
