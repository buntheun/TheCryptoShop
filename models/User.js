let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, {
    timestamps: { createdAt: 'created_at' }
    
});

let User = mongoose.model("User", UserSchema);
module.exports = User;