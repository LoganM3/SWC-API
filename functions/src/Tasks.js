import jwt from "jsonwebtoken";
import { secretKey } from "../credentials.js"
import dbConnect  from "./dbconnect.js"



export async function getCrew(req,res){
    const db = dbConnect()
    const collection= await db.collection('crew').get()
    .catch(err => res.status(500).send(err));
    const crew = collection.docs.map(doc => {
        let name = doc.data()
        name.id = doc.id
        return name

      
    })
    res.send(crew)
}

export async function addCrew(req,res){
    const newMember = req.body;
   const token = req.headers.authorization;
   console.log(token)
     // const user = jwt.verify(token,secretKey);
     // if(!user) {
       // res.status(401).send("must be an admin to post")
       // return
    //  }
   
     // newMember.userId = user.id;
    const db = dbConnect();
    console.log(newMember)
    await db.collection('crew').add(newMember)
      .catch(err => res.status(500).send(err));
    res.status(201);
    getCrew(req,res); // send back the full list of tasks...
}


export async function getVideos(req,res){
    const db = dbConnect()
    const collection= await db.collection('videos').get()
    .catch(err => res.status(500).send(err));
    const videos = collection.docs.map(doc => {
        let url = doc.data()
        url.id = doc.id
        return url
    })
    res.send(videos)
}

    export async function addVideo(req,res){
    const newVideo = req.body;
    if (!newVideo || !newVideo.videos) {
      res.status(400).send({ success: false, message: 'Invalid request' });
      return;
    }
    const db = dbConnect();
    await db.collection('videos').add(newVideo)
      .catch(err => res.status(500).send(err));
    res.status(201);
    getVideos(req, res); // send back the full list of tasks...
}