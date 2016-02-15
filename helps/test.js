/**
 * Created by Administrator on 2016/2/15.
 */
var hbs = require('hbs');
hbs.registerHelper('helper_name', function(a,b,c) {
    console.log(a,b,c);
    return 'abc'
});

