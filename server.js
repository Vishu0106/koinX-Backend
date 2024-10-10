import app from './app.js';
import connectDB from './config/dbConnection.js';

const PORT = process.env.PORT || 3000;

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 ,()=>{
        console.log(`server is running at port:${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGO db connection failed !!! ", err);
})
