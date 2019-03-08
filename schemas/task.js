exports.task = new mongoose.Schema({
    title: {
        type: String,
        length: 180
    },
    createdAt: Date,
    status: {
        type: String,
        enum: ['pending', 'ongoing', 'completed'],
        default: 'pending'
    }
});
