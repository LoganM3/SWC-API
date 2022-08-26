import functions from "firebase-functions";
import  express  from "express";
import cors from "cors";
//import functions (get, post, update)

const app = express();
app.use(cors())
app.use (express.json())

//functions go here
app.get('/',)
app.post('/',)





export const api = functions.https.onRequest(app)
