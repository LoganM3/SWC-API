
// import {getStorage,ref} from 'firebase-admin/storage'
import { initializeApp,cert,getApps} from "firebase-admin/app";
import {getFirestore} from "firebase-admin/firestore"
import {credentials} from "../credentials.js"

export default function dbConnect(){ 
    if(!getApps().length){
        initializeApp({
            credential: cert(credentials),
            // storageBucket: 'sunday-wake-crew.appspot.com'
        })
    }
    return getFirestore()
}


 // const imgStorage = ref(storage, "gs://sunday-wake-crew.appspot.com")
// const videoStorage = ref(storage, "gs://crew-videos")
// const storage = getStorage()
// const storageRef = ref(storage);
//  const bucket = getStorage().bucket(sunday-wake-crew);
