import app from "./app.js"
import { connectToDatabase } from "./models/connection.js"

const PORT = process.env.PORT || 5000;
//connection and listners

connectToDatabase().then(()=>{
  app.listen(PORT, ()=>{
    console.log('server started')
  })
}).catch((err)=>{
  console.log(err)
})

