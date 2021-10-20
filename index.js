const express = require('express')
const app = express()
const port = 4000;
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello from node js.I am exploring node js.New to node js? please listen to me now.')
})
const users = [
    { name: 'moyen', age: 21, id: 0, adress: 'abudia' },
    { name: 'moyen', age: 21, id: 1, adress: 'abudia' },
    { name: 'moyen', age: 21, id: 2, adress: 'abudia' },
    { name: 'moyen', age: 21, id: 3, adress: 'abudia' },
    { name: 'moyen', age: 21, id: 4, adress: 'abudia' },
    { name: 'moyen', age: 21, id: 5, adress: 'abudia' }
]
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult)
    }
    else {
        res.send(users)
    }
})
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log(req.body)
    res.send('new to post method')
    res.json(newUser)
})
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})
app.listen(port, () => {
    console.log('This is port number', port)
})