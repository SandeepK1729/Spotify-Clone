const mongoose = require('mongoose');
const joi = require('joi');

const ObjectId = mongoose.Schema.Types.ObjectId;

const playlistSchema = new mongoose.Schema({
    name: { type: String, requied: true},
    user: { type: ObjectId, ref: "user", requied: true},
    desc: { type: String },
    songs: { type: [String], default: []},
    duration: { type: Number, requied: true},
    img: { type: String }
});


const validate = (playlist) => {
    const schema = joi.object({
        name: joi.string().requied(),
        user: joi.string().requied(),
        desc: joi.string().allow(""),
        songs: joi.array().items(joi.string()),
        img: joi.string().allow(""),
    });
    return schema.validate(playlist);
}

const Playlist = mongoose.model("Spotify_playlist", playlist);

module.exports = {Playlist, validate};