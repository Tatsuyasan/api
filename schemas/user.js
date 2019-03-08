require('mongoose-type-email');

exports.user = new mongoose.Schema({
    email: {
        type: mongoose.SchemaTypes.Email,
        unique: true
    },
    password: { type: String, length: 255 },
    createdAt: Date
});
