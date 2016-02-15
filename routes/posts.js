/**
 * Created by Administrator on 2016/2/15.
 */
var Blog = require('../model/model').Blog;
var marked = require('marked');

var express = require('express');
var router = express.Router();

/* GET posts listing. */
router.get('/', function(req, res) {
    findAllBlog(res);
});


router.get('/write-blog', function(req, res) {
    res.render('write-post');
});

router.get('/:id/edit', function(req, res) {
    var id = req.params.id;
    findBlog(id,function(blog){
        res.render('write-post', {blog: blog});
    });

});

router.post('/', function(req, res) {
    var blog = {};
    blog.title = req.body.title;
    blog.content = req.body.content;
    blog.html =marked(blog.content);

    saveBlog(blog,function(data){
        res.send({
            code: 200,
            message: 'success'
        });
    });
});


router.put('/:id', function(req, res) {
    var blog = {};
    blog.title = req.body.title;
    blog.content = req.body.content;
    blog.html =marked(blog.content);
    updateBlog(req.params.id,blog,function(data){
        res.send({
            code: 200,
            message: 'success',
            data: data
        });
    });
});

router.get('/:id', function(req, res) {
    var id = req.params.id;
    console.log('id' + id);
    findBlog(id, function(blog) {
        res.render('posts-detail', { blog: blog });
    });
});


router.delete('/:id', function(req, res) {
    var id = req.params.id;
    removeBlog( id, function(){
        res.send({
            code: 200,
            message: 'success'
        });
    });
});


function saveBlog(b, cb) {
    var blog = new Blog(b);
    blog.save(function (err, blog) {
        if (err) return console.error(err);
        console.log(blog);
        cb(blog);
    });

}

function findBlog(id, cb) {
    Blog.findOne({_id: id},function (err, blog) {
        if (err) return console.error(err);
        cb(blog);
    })
}

function findAllBlog(res,id) {
    Blog.find(function (err, blogs) {
        if (err) return console.error(err);
        res.render('posts', { blogs: blogs });
    })
}

function removeBlog(id, cb) {
    Blog.remove({_id: id}, function (err, blog) {
        cb();
    })
}

function updateBlog(id, blog, cb) {
    Blog.update({_id: id}, blog, function(err, raw) {
       cb(raw);
    });
}
module.exports = router;