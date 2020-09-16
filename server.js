const express = require('express');
const expressGraphQL = require('express-graphql');
const app = express();

// app.use('/graphql',(req, res, next)=>{
//     console.log('graphQL in here ');
//     res.send("GraphQL is here. Hurray!!")
//     next();
// })
app.use('/graphql',(req,res,next)=>{next()
    expressGraphQL({
        graphiql: true
    })
})
app.listen(5000,()=> console.log("server running"));
