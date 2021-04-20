const mongoose = require('mongoose');
const Schema = mongoose.Schema;
if (mongoose.connection.readyState === 0)
    mongoose.connect(require('../connection-config.js'))
        .catch(err => {
            console.error('mongoose Error', err)
        });



let MonstreSchema = new Schema({

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

MonstreSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

MonstreSchema.pre('update', function () {
    this.constructor.update({_id: this._id}, { $set: { updatedAt: Date.now() } });
});

MonstreSchema.pre('findOneAndUpdate', function () {
    this.constructor.update({_id: this._id}, { $set: { updatedAt: Date.now() } });
});



/** @name db.Monstre */
module.exports = mongoose.model('Monstre', MonstreSchema);
