// seed db
const pool = require('../utils/pool')
const fs = require('fs')
const seed = require('./seed.js')

// Run setup sql before each test
beforeEach(() => {
  return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'))
})

// Run seed
beforeEach(() => {
  return seed()
})
