const express = require('express')
const session = require('express-session')
const cors=require('cors')
const cookieParser = require("cookie-parser");


const mongoose = require("mongoose");

const usersRoute=require('./routes/users')
const postsRoute=require('./routes/posts')

const PORT=4000;
const app = express();

app.use(express.json())

const corsOptions = {
    // origin: "https://studio.apollographql.com",
    origin: " http://localhost:3000",
    credentials: true,
}


const uri = "mongodb://localhost:27017/newmango";
const db = mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((response) => {
    console.log('Connected to the database...');
    return response;
});


  app.use(cors(corsOptions))
  app.use(cookieParser());
  
app.use(session({
    name:'deeznuts',
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { 
      name:"bussin",
      maxAge:1000*60*60*24*365*10,
    },
  }))




// const oneDay = 1000 * 60 * 60 * 24;
// app.use(session({
//     secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
//     saveUninitialized:true,
//     cookie: { maxAge: oneDay },
//     resave: false,
//     name:"ggbois"
// }));
  
app.get("/", (req, res) => {
    req.session.saltynuts="it works"
     res.json({
       data: "API is working...",
     });
   });
  app.get("/rest", (req, res) => {
   req.session.saltynuts="it works"
res.send("rest")
  });
app.use('/users',usersRoute)
app.use('/posts',postsRoute)

  
  app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
  });
