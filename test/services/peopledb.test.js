const assert = require('assert');
const app = require('../../src/app');

describe('\'peopledb\' service', () => {
  it('registered the service', () => {
    const service = app.service('peopledb');

    assert.ok(service, 'Registered the service');
  });
});
