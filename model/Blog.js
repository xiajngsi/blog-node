/**
 * Created by Administrator on 2016/2/15.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
    title: String,
    author: String,
    body: String,
    text: String,
    content: String,
    html: String,
    comments: [{body: String, date: Date}],
    date: {type: Date, default: Date.now},
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
});

var Blog = mongoose.model('Blog', blogSchema);
console.log("blog schema");
module.exports = Blog;