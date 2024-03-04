const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
    id: { type: String, required: true },
    type: { type: String, required: true },
    file_path: { type: String, required: true },

});

const Document = new mongoose.model('document', documentSchema);

module.exports = Document;