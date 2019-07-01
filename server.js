const express=require('express')
const app=express()

app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))

//post request
{
    app.post('/login',(req,res)=>{
       console.log(req.body)
       
       //User data
    })

    app.post('/signup',(req,res)=>{
        console.log(req.body)
    })
}

app.get('/',(req,res)=>{
    res.redirect('/login')
})

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/login/index.html')
})


app.get('/signup',(req,res)=>{
    res.sendFile(__dirname+'/signup/index.html')
})


app.use(express.static(__dirname+'/public'))
app.listen(3500,()=>{
    console.log("Listening at 3500")
})