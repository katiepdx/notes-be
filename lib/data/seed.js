// bring in seed.js and run seed before each test
const Note = require("../model/notes-model")

module.exports = async ({ notesCount = 20 } = {}) => {
  // Make an array
  const seedNotes = [...Array(notesCount)]
    .map((_, index) => ({
      topic: `Topic ${index + 1}`,
      note: `Topic ${index + 1} notes.`
    }))

  // Add to database
  await Promise.all(seedNotes.map(note => (Note.createNote(note))))
}
