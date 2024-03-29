const express = require('express')
const app = express()

const {products} = require('./data.js')

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
})

app.get('/api/products/:ID', (req, res) => {
    //console.log(req.params)
    const {ID} = req.params
    const singleProduct = products.find(product => product.id === Number(ID))
    if(!singleProduct){res.status(404).send('Product does not exist')}
    res.json(singleProduct)
})

app.get('/api/products/:ID/reviews/:reviewID', (req, res) => {
    console.log(req.params)
    console.log('Hello World')
})

app.get('/api/v1/query', (req, res) => {
    console.log(req.query)
    const {search, limit} = req.query
    let sortedProducts = [...products]
    if(search){
        sortedProducts = sortedProducts.filter((product) =>  {
            return product.name.startsWith(search)
        })
    }
    if(limit){
        return sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if(sortedProducts.length < 1){
        return res.status(200).json({success:true, data: []})
    }
    return res.status(200).json(sortedProducts)
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const {id, name, image} = product
        return {id, name, image}
    })
    res.json(newProducts)
})

app.listen((5000),() => {
    console.log('Server is listening on port 5000...')
})