// const PostController = require('./app/controllers/PostController.js')

import database from './app/middleware.js'
import { update } from './app/view/home.js'

import { PostController } from './app/controllers/PostController.js'

update()

export function init() {

    for(let i=0;i<Object.keys(PostController.getAll()).length;i++){
        if(document.getElementsByClassName('id')[i]) {
            document.getElementsByClassName('id')[i].addEventListener('click',function(e){
                let id = e.currentTarget.innerText.split('').splice(4).join('')
                let data = PostController.getPost(id)
                document.getElementById('id').value = id
                document.getElementById('updt-title').value = data.title
                document.getElementById('updt-author').value = data.author 
                document.getElementById('updt-post-body').value = data.body 
                document.getElementById('del-id').value = id
            })
        }
    }

    document.getElementById('updt-submitter').addEventListener('click', function(e){
        e.preventDefault();
        let id = document.getElementById('id').value 
        PostController.updatePost(id, {
            title: document.getElementById('updt-title').value,
            author: document.getElementById('updt-author').value,
            body: document.getElementById('updt-post-body').value
        })
        update()
    })

    document.getElementById('del-submitter').addEventListener('click', function(e){
        e.preventDefault();
        let id = document.getElementById('del-id').value
        PostController.deletePost(id)
    })
}

// window.onload = function() {
//     console.log('loaded')
//     init()
// }