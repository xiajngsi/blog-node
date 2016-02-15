/**
 * Created by Administrator on 2016/2/15.
 */
var Blog = require('../../model/model').Blog;
var marked = require('marked');

function saveBlog(blog) {
    var b = {
        title: '这是我的第一篇博客2',
        text: '# 我是标题2'
    };
    b.html =marked(b.text);
    console.log(b.html);
    var blog = new Blog(b);
    blog.save(function (err, blog) {
        if (err) return console.error(err);
        // blog.speak();
        console.log(blog);
    });
}
saveBlog();

function findAllBlog() {
    Blog.find(function (err, blogs) {
        if (err) return console.error(err);
        console.log(blogs);
    })
}

function removeBlog(id) {
    Blog.remove({_id: id}, function (err, blog) {
        console.log('remove success');
        findAllBlog();
    })
}
//removeBlog('56c15d534932cb1c11fe13c4'); //10s
