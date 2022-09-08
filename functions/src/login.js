import dbConnect from "./dbconnect.js";
import jwt from "jsonwebtoken";
import { secretKey } from "../credentials.js";

export async function Login(req,res){
    const{username,password} = req.body;
    const db = dbConnect ();
    const collection = await db.collection('user')
    .where('username', '==', username )
    .where('password', '==', password)
    .get()
    .catch(err => res.status(500).send(err));
    const user =  collection.doc.map(doc => {
        let admin = doc.data();
        admin.id = doc.id;
        return admin;
    })[0];
    const token = jwt.sign({username: user.username, id: user.id}, secretKey)
    res.send({ token })

}