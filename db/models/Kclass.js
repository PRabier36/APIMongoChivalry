const mongoose = require('mongoose');
const Schema = mongoose.Schema;
if (mongoose.connection.readyState === 0)
    mongoose.connect(require('../connection-config.js'))
        .catch(err => {
            console.error('mongoose Error', err)
        });


        
let KclassSchema = new Schema({
    label: String,
    spéciality: String,
    atkModifier: Number,
    defModifier: Number,
    spéModifier: Number,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

KclassSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

KclassSchema.pre('update', function () {
    this.constructor.update({_id: this._id}, { $set: { updatedAt: Date.now() } });
});

KclassSchema.pre('findOneAndUpdate', function () {
    this.constructor.update({_id: this._id}, { $set: { updatedAt: Date.now() } });
});



/** @name db.Kclass */
module.exports = mongoose.model('Kclass', KclassSchema);
