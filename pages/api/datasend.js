import admin from 'firebase-admin';
import credentials from "./serviceAccountKey.json"

if (!admin.apps.length) {
    try {
      admin.initializeApp({
        credential: admin.credential.cert(credentials)
      });
    } catch (error) {
      console.log('Firebase admin initialization error', error.stack);
    }
}

const db = admin.firestore();

export default async function dataSend(req, res){
    if(req.method === "POST"){
        try{
        const reqData = req?.body;
        
        console.log("request" , reqData);

        const studRef = db.collection("students")
        await studRef.where("adduemail","==",req.body.Email).get().then(async snapshot=>{
        if(snapshot.empty){
            const atenean={
                fullName: req.body.Name,
                adduemail: req.body.Email
            }
            const response = await db.collection("students").add(atenean)
            res.send(response)
            console.log(response.id)
        }
        else{
        snapshot.docs.forEach(document =>{
            if(document.exists){
                console.log("Data Exists")
                res.send("Data exists")
            }
            else{
                console.log("---PLACEHOLDER---")
            }
        })
        }
       }) 
        }
        catch(err){
            console.log(err)
            res.send(err)
        }
    }
    else{
        return res.status(500).json({
            msg: "Must be a post req"
    })}
}