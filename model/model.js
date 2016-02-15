/**
 * Created by Administrator on 2016/2/15.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log("connect success");
});
var Blog = require('./Blog');
module.exports.Blog = Blog;
