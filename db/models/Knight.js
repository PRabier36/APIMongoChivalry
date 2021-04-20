const mongoose = require('mongoose');
const kclasse = require('./Kclass');

const Schema = mongoose.Schema;
if (mongoose.connection.readyState === 0)
    mongoose.connect(require('../connection-config.js'))
        .catch(err => {
            console.error('mongoose Error', err)
        });

        

const Kstats = new Schema({
    health: {type :Number, default: 0},
    level: {type :Number, default: 0},
    xp: {type :Number, default: 0},
    contitution: {type :Number, default: 0},
    force: {type :Number, default: 0},
    agility: {type :Number, default: 0},
    endurance: {type :Number, default: 0},
    mana: {type :Number, default: 0}
})

const SDKClass = new mongoose.Schema({    
    label: {type: String, default: "Ecu"},
    spéciality: {type: String, default: "Attack"},
    atkModifier: {type: Number, default: 0},
    defModifier: {type: Number, default: 0},
    spéModifier: {type: Number, default: 0}
    
})

let KnightSchema = new Schema({

    name: String,
    stats: [Kstats],
    Kclass: [SDKClass]

});

KnightSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

KnightSchema.pre('update', function () {
    this.constructor.update({_id: this._id}, { $set: { updatedAt: Date.now() } });
});

KnightSchema.pre('findOneAndUpdate', function () {
    this.constructor.update({_id: this._id}, { $set: { updatedAt: Date.now() } });
});



/** @name db.Knight */
module.exports = mongoose.model('Knight', KnightSchema);
