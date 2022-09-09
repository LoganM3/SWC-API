import dbConnect from "./dbconnect.js";
import jwt from "jsonwebtoken";
import { secretKey } from "../credentials.js";

export async function Login(req,res){
    const{username,password} = req.body;
    console.log(username)
    const db = dbConnect();
    const collection = await db.collection('user')
    .where('username', '==', username )
    .where('password', '==', password)
    .get()
    .catch(err => res.status(500).send(err));
    console.log("hello",collection.docs)
    const user =  collection.docs.map(doc => {
        let user = doc.data();
            user.id = doc.id;
        return user;
    })[0];
    console.log(user)
    const token = jwt.sign({username: user.username, id: user.id}, secretKey)
    res.send({ token })

}