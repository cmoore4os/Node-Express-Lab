const express = require('express');
const bodyParser = require('body-parser');

// globals
const server = express();
const STATUS_USER_ERROR = 422;

// give each post a id number
let idNum = 0;
// post = {title: "Post Title", contents: "Post Contents" id: idNum}
const posts = [];

// Use
// to enable parsing of json bodies for post requests
server.use(bodyParser.json());

// TODO: your code to handle requests

// Get
server.get('/api/posts', (req, res) => {
  console.log(req.query);
  res.status(200).json(posts);
});

server.get('/api/posts/:id', (req, res) => {
  const post = posts.find(f => f.id === req.params.id);
  res.status(200).json(post);
});
// Post
server.post('/api/posts', (req, res) => {
  console.log(req.body);
  const post = req.body;
  post.id = idNum++;
  posts.push(post);
  res.status(201).json(posts);
});
// Put

// Delete

// server.listen(port, () => console.log(`Server running  port ${port}`));

module.exports = { posts, server };
