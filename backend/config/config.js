import mongoose from 'mongoose';

const connect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology: true,
            useNewUrlParser:true,
            useCreateIndex:true
        })
        console.log(`\u{1F3E6} Mongodb connected to: ${conn.connection.host}`.cyan)

    } catch (error) {
        console.error(`ERROR: ${error.message}`.red.underline.bold)
        process.exit(1);

    }
}

export default connect