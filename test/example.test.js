'use strict'

const client = {
  apiSettings: require('../src/settings/api_settings.json'),
  engine: {}
}

beforeAll(async () => {
  /* Get our functionality engine */
  require('../src/library/engine.js')(client)

}, 10000) // 10 second timeout connecting to db

/* Begin unit testing */
test('test function returns true', () => {
  expect(true).toBe(true)
})