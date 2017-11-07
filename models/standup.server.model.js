const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let memberNameValidator = [
    (val) => {
        return (val.length > 0 && val.toLocaleLowerCase() != 'none')
    },
    // Custome error text
    'Select a valid member name!'
];

let requireStringValidator = [
    (val) => {
        let testVal = val.trim();
        return (testVal.length > 0)
    },
    // Custom error text
    '{PATH} cannot be empty!'
];

let standupSchema = new Schema({
    memberName: {
        type: String,
        required: true,
        validate: memberNameValidator },
    project: {
        type: String,
        required: true,
        validate: requireStringValidator },
    workYesterday: {
        type: String,
        required: true,
        validate: requireStringValidator },
    workToday: {
        type: String,
        required: true,
        validate: requireStringValidator },
    impediment: {
        type: String,
        required: true,
        default: 'none' },
    createdOn: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Standup', standupSchema);