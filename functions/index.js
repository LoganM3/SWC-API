
 import functions from "firebase-functions";
import  express  from "express";
import cors from "cors";
import { getCrew, addCrew,getVideos, addVideo } from './src/Tasks.js';
import { Login } from "./src/login.js";
//import functions (get, post, update)

const app = express();
app.use(cors())
app.use(express.json())

//functions go here
 app.get('/crew',getCrew)
 app.post('/crew',addCrew)
//  app.delete('/crew', deleteCrew)
 app.get('/videos',getVideos)
 app.post('/videos', addVideo)

 app.post('/admin',Login)


// app.listen(4000,()=>{
//     console.log('listening')
// })


  export const api = functions.https.onRequest(app)
