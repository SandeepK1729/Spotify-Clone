const mongoose = require('mongoose');
const joi = require('joi');

const songSchema = new mongoose.Schema({
    name: { type: String, requied: true},
    artist: { type: String, requied: true},
    song: { type: String, requied: true},
    img: { type: String, requied: true},
    duration: { type: Number, requied: true},
});

const validate = (song) => {
    const schema = joi.object({
        name: joi.string().requied(),
        artist: joi.string().requied(),
        song: joi.string().requied(),
        img: joi.string().requied(),
        name: joi.number().requied(),
    });
    return schema.validate(song);
}
const Song = mongoose.model("Spotify_song", songSchema);

module.exports = {Song, validate};