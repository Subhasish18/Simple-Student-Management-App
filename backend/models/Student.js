const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
        maxLength: 40,
    },
    age: {
        type: Number,
        required: true,
    },
    grade: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    }
});


module.exports = mongoose.model("Student", studentSchema);