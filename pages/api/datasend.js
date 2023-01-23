export default function dataSend(req, res){
    if(req.method === "POST"){
        const reqData = req?.body;
        
        console.log("request" , reqData);
        
      return  res.json({msg: reqData});
    }
    return res.status(500).json({
        msg: "Must be a post req"
    })
}