// Initializes the `peopledb` service on path `/peopledb`
const createService = require('feathers-sequelize');
const createModel = require('../../models/peopledb.model');
const hooks = require('./peopledb.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/peopledb', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('peopledb');

  service.hooks(hooks);
};
