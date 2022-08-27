
// import functions from "firebase-functions";
import  express  from "express";
import cors from "cors";
import { getCrew, getVideos} from './src/Tasks.js';
//import functions (get, post, update)

const app = express();
app.use(cors())
app.use (express.json())

//functions go here
app.get('/crew',getCrew)
app.get('/videos',getVideos)
// app.post('/crew',addCrew)
// app.post('/videos', addVideo)


app.listen(4000,()=>{
    console.log('listening')
})


// export const api = functions.https.onRequest(app)
