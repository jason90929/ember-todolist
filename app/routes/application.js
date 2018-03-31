import Route from '@ember/routing/route';

export default Route.extend({
  model () {
  },

  setupController(controller, models) {
    // controller.set('todos', models.todos);
    // or, more concisely:
    // controller.setProperties(models);
  }
});
