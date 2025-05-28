const { default:mongoose } = require('mongoose');

const connection = {}

export const connectToDb = async () => {
    try{
        if(connection.isConnected){
            console.log("use existing connection");
            return;
        }
        const db = await mongoose.connect(process.env.MONGO);
        connection.isConnected= db.connections[0].readyState
    }catch(err){
        console.log(err)
    }
}