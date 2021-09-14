var mongoose = require('mongoose');

//schema
var bioSchema = mongoose.Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Phone: {
        type: String,
        required: true
    },
    Qualification: {
        type: String,
        required:true
    },
    PassOut : {
        type: String,
        required:true
    },
    Institute: {
        type: String,
        required:true
    },
    YearofExperience: {
        type: String,
        required: true
    },
    Technical: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

// Export Bio Model
var Bio = module.exports = mongoose.model('bio', bioSchema);

module.exports.get = function (callback, limit) {
   Bio.find(callback).limit(limit); 
}