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

  // Get - getAllNotes
  static async getAllNotes() {
    const { rows } = await pool.query(
      `SELECT * FROM notes`
    )

    return rows.map(note => new Note(note))
  }

  // Get - getNoteById
  static async getNoteById(id) {
    const { rows } = await pool.query(
      `SELECT * FROM notes
      WHERE id=$1`, [id]
    )

    return new Note(rows[0])
  }

  // Put - updateNoteById
  static async updateNoteById(id, updateNote) {
    const { rows } = await pool.query(
      `UPDATE notes
      SET topic=$1, note=$2
      WHERE id=$3
      RETURNING *`, [updateNote.topic, updateNote.note, id]
    )

    return new Note(rows[0])
  }

  // Delete - deleteNoteById
  static async deleteNoteById(id) {
    const { rows } = await pool.query(
      `DELETE from notes
      WHERE id=$1
      RETURNING *`, [id]
    )

    return new Note(rows[0])
  }

}
