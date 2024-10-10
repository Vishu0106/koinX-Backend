import mongoose from "mongoose";

const cryptoSchema = new mongoose.Schema({
    coin:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    marketCap:{
        type: Number,
        required: true,
    },
    dayChange:{
        type: Number,
        required: true,
    }
},{timestamps:true});

export const Crypto = mongoose.model("Crypto",cryptoSchema);
