const peopledb = require('./peopledb/peopledb.service.js');
const people = require('./people/people.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(peopledb);
  app.configure(people);
};
