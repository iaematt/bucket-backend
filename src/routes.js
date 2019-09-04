const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

const Post = require('./models/Post');

routes.get('/posts', async(request, response) => {
    const { session } = request.headers;
    const posts = await Post.find({ session });

    return response.json(posts);
});

routes.get('/post/:id', async(request, response) => {
    const { id } = request.params;
    const post = await Post.findOne({ _id: id });

    return response.json(post);
});

routes.post('/posts', multer(multerConfig).single("file"), async (request, response) => {
    const { originalname: name, size, key, location: url = "" } = request.file;
    const { session } = request.headers;
   
    const post = await Post.create({
        name,
        size,
        key,
        url,
        session
    });

    return response.json(post);
});

routes.delete('/posts/:id', async(request, response) => {
    const post = await Post.findById(request.params.id);

    await post.remove();

    return response.send();
});

module.exports = routes;