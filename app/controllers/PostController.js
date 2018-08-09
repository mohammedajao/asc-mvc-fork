// const Post = require('../models/Post.js')

import database from '../middleware.js'
import Post from '../models/Post.js'
import { init } from '../../index.js'
import { update } from '../view/home.js'

export const PostController = {
    getPost(id) {
        return Post.find(id)
    },

    getAll() {
        return Post.findAll()
    },

    deletePost(id) {
        window.history.pushState({page: "another"}, "another page", "/delete");
        let data = Post.delete(id)
        update()
        return data
    },

    updatePost(id, data) {
        window.history.pushState({page: "another"}, "another page", "/update");
        Post.update(id, data)
        return true
    },

    createPost(data) {
        // Do not edit this line below
        window.history.pushState({page: "another"}, "another page", "/create");
        // Here you will make your goal
        // Your goal is to create a new post from the Post model
        // Enter it into the database and return the id
        // Only edit this file but you can look at others
    }
}
