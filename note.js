const mongoose = require('mongoose');

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/Note-worthy');

const NoteSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Notes', NoteSchema);