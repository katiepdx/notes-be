// notes model - createNote, getAllNotes, getNoteById, updateNoteById, deleteNoteById

const pool = require('../utils/pool')

module.exports = class Note {
  id;
  topic;
  note;

  constructor(note) {
    this.id = note.id;
    this.topic = note.topic;
    this.note = note.note
  }

  // Create/Post - createNote
  static async createNote(note) {
    const { rows } = await pool.query(
      `INSERT INTO notes
      (topic, note)
      VALUES ($1, $2)
      RETURNING *`,
      [note.topic, note.note]
    )

    return new Note(rows[0])
  }
}
