import dbConnect  from "./dbconnect.js"



export async function getCrew(req,res){
    const db = dbConnect()
    const collection= await db.collection('crew').get()
    .catch(err => res.status(500).send(err));
    const tasks = collection.docs.map(doc => {
        let name = doc.data()
        name.id = doc.id
        return name
    })
    res.send('crew')
}

export async function getVideos(req,res){
    const db = dbConnect()
    const collection= await db.collection('videos').get()
    .catch(err => res.status(500).send(err));
    const tasks = collection.docs.map(doc => {
        let name = doc.data()
        name.id = doc.id
        return name
    })
    res.send('videos')
}