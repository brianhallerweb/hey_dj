var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var playlistSchema = mongoose.Schema({
  songs: [{ type: Schema.Types.ObjectId, required: false }],
  owner: { type: Schema.Types.ObjectId, required: true },
  musicSet: { type: Schema.Types.ObjectId, required: true },
  createdDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Playlist", playlistSchema);
