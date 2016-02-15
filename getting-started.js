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

var Schema = mongoose.Schema;
var Cat = mongoose.model('Cat', {name: String});

var kitty = new Cat({name: 'liux'});
kitty.save(function(err) {
    if(err) {
        console.log('err' + err);
    }
    console.log('meow');
});