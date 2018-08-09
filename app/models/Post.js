import database from '../middleware.js'

export default class Post {
    constructor() {
        this.title = ""
        this.body = ""
        this.id = randomstring({ length: 20 })
        this.author = ""
    }

    save(data) {
        this.id = randomstring()
        this.title = data.title 
        this.author = data.author 
        this.body = data.body

        return this
    }

    static find(id) {
        return database.posts[id]
    }

    static findAll() {
        return database.posts
    }

    static delete(id) {
        let data = database.posts[id]
        database.posts[id] = null
        return data
    }

    static update(id, data) {
        console.log(data)
        database.posts[id] = Object.assign(database.posts[id], data)
        console.log(id)
        console.log(database.posts[id])
        return database.posts[id]
    }
}