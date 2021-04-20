const mongoose = require('mongoose');
const Schema = mongoose.Schema;
if (mongoose.connection.readyState === 0)
    mongoose.connect(require('../connection-config.js'))
        .catch(err => {
            console.error('mongoose Error', err)
        });



let PlayerSchema = new Schema({

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

PlayerSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

PlayerSchema.pre('update', function () {
    this.constructor.update({_id: this._id}, { $set: { updatedAt: Date.now() } });
});

PlayerSchema.pre('findOneAndUpdate', function () {
    this.constructor.update({_id: this._id}, { $set: { updatedAt: Date.now() } });
});



/** @name db.Player */
module.exports = mongoose.model('Player', PlayerSchema);
