const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAt) => dateFormat(createdAt)
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

function dateFormat(createdAt) {
    return createdAt.toISOString();
}

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
