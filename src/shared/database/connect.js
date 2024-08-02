import mongoose from "mongoose";

const URI =  "mongodb+srv://chandanraj:chandan123mongodb@chandan-raj-cluster.dnwcf1t.mongodb.net/netflixDB"

export const mongoDBConnection = async()=>{
   try {
    await mongoose.connect(URI)
    console.log("MongoDB Connected Successfully")
   } catch (error) {
    console.log('error in connection',error.message.toString());
   }
}