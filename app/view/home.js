import { PostController } from '../controllers/PostController.js'
import { init } from '../../index.js';

function updatePostView() {
    const cont = document.getElementById('post-view')
    cont.innerHTML = ""
    const data = PostController.getAll()
    for(let post in data) {
        const div = document.createElement('div')
        const title = document.createElement('h3')
        const author = document.createElement('h5')
        const body = document.createElement('p')
        const identifier = document.createElement('h4')
        const hr = document.createElement('hr')

        if(data[post]) {
            title.innerHTML = data[post].title 
            author.innerHTML = 'By ' + data[post].author 
            body.innerHTML = data[post].body 
            identifier.innerHTML = 'id: ' + data[post].id
            identifier.className = "id"
            div.appendChild(title)
            div.appendChild(author)
            div.appendChild(body)
            div.appendChild(identifier)
            div.appendChild(hr)
            cont.appendChild(div)
        }
    }
    init()
}

function submit(e) {
    e.preventDefault()
    PostController.createPost({
        title: document.getElementById('title').value,
        body: document.getElementById('post-body').value,
        author: document.getElementById('author').value
    })
    updatePostView()
}

document.getElementById('submitter').addEventListener('click', submit, false)

updatePostView()

export function update() {
    console.log('Updating view...')
    updatePostView()
}