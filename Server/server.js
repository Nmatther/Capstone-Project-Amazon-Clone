const express = require('express')
const { FieldValue } = require('firebase-admin/firestore')
const app = express()
const port = 3001
const { db } = require('./firebase.js')

app.use(express.json())

app.get('/Products', async (req, res) => {
    const productRef = db.collection('Products')
    const snapshot = await productRef.get()
    const products = [];
    
    snapshot.forEach((doc) => products.push(doc.data()))
    console.log(products);

    res.status(200).send(products)
})


app.listen(port, () => console.log(`Server has started on port: ${port}`))