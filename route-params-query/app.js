const express = require('express');
const app = express();
const { products } = require('./data'); // Ensure correct import

app.use(express.json()); // Recommended middleware

app.get('/', (req, res) => {
    res.send('<h1>HomePage</h1> <a href="/api/products">Products</a>');
});

app.get('/api/products', (req, res) => {
    console.log("Original product data:", products); // Fixed variable name
    const newProducts = products.map((product) => {
        const { id, stock, price } = product;
        return { id, stock, price };
    });
    res.json(newProducts); // Send the filtered products instead of full list
});

//route for single product
//app.get('/api/products/1',(req,res)=>{
  //  const singleProduct=products.find((product)=> product.id ===1)
    //res.json(singleProduct);
//})

//route params 
app.get('/api/products/:productID',(req,res)=>{
    const {productID}=req.params;
    console.log("Received params:", req.params); 
    const singleProduct=products.find((product)=> product.id ===Number(productID))
    if (!singleProduct) {
        return res.status(404).json({ message: "Product not found" });
    }
    res.json(singleProduct);
})

//query
app.get('/api/v1/query',(req,res)=>{
    //console.log(req.query)
    const {search,limit}=req.query;
    let sortedProducts=[...products]
    if(search){
        sortedProducts=sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    //http://localhost:5000/api/v1/query?search=W
    if(limit){
        sortedProducts=sortedProducts.slice(0,Number(limit))
    }
    //http://localhost:5000/api/v1/query?limit=2
    if(sortedProducts.length<1){
        res.status(200).json({success:true,data:[]})
    }
    res.status(200).json(sortedProducts)
    //http://localhost:5000/api/v1/query?search=a
    //res.send("Helloworld")
})


//http://localhost:5000/api/v1/query?id=34


//search and limit query
//http://localhost:5000/api/v1/query?search=a&limit=3


app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
