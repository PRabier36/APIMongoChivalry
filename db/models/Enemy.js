const mongoose = require('mongoose');
const Schema = mongoose.Schema;
if (mongoose.connection.readyState === 0)
    mongoose.connect(require('../connection-config.js'))
        .catch(err => {
            console.error('mongoose Error', err)
        });



let EnemySchema = new Schema({

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

EnemySchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

EnemySchema.pre('update', function () {
    this.constructor.update({_id: this._id}, { $set: { updatedAt: Date.now() } });
});

EnemySchema.pre('findOneAndUpdate', function () {
    this.constructor.update({_id: this._id}, { $set: { updatedAt: Date.now() } });
});



/** @name db.Enemy */
module.exports = mongoose.model('Enemy', EnemySchema);
