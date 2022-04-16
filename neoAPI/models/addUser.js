const mongoose = require('mongoose');

const addSchema = new mongoose.Schema({
    robloxName: {
        type: String,
        required: true
    },
    robloxId: {
        type: String,
        required: true
    },
    discordId: {
        type: String,
        required: true
    },
});

// Export the model

module.exports = mongoose.model('addUser', addSchema);