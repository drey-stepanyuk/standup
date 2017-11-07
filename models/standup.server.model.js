const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let standupSchema = new Schema({
    memberName: String,
    project: String,
    workYesterday: String,
    workToday: String,
    impediment: String,
    createdOn: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Standup', standupSchema);