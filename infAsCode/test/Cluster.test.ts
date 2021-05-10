const cluster = require('../Cluster');

it('adds 1 + 2 to equal 3', () => {
  expect(cluster.name).toBe('gradle-ci-cd');
});