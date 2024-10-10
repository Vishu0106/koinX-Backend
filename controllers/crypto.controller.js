import { Crypto } from "../models/crypto.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";

const getStats = asyncHandler(async (req, res) => {
    const { coin } = req.query;
    if(!coin) {
        throw new ApiError(400, "Coin is required");
    }
    const data = await Crypto.findOne({ coin }).sort({ timestamp: -1 });
    if(!data) {
        throw new ApiError(404, "Coin not found");
    }

    const { price, marketCap, dayChange } = data;
    const response = {
        price:price,
        marketCap:marketCap.toFixed(0),
        "24hChange": dayChange.toFixed(1),
    };

    res
    .json(new ApiResponse(response));
});


const getDeviation = asyncHandler(async (req, res) => {
    const { coin } = req.query;
    if (!coin) {
        throw new ApiError(400, "Coin is required");
    }
    const records = await Crypto.find({ coin }).sort({ timestamp: -1 }).limit(100);
    if (records.length < 2) {
        throw new ApiError(400, "Not enough data for standard deviation calculation");
    }
    const prices = records.map((record) => record.price);

    const mean = prices.reduce((acc, price) => acc + price, 0) / prices.length;

    const variance = prices.reduce((acc, price) => acc + Math.pow(price - mean, 2), 0) / prices.length;

    let deviation = Math.sqrt(variance);
    deviation = deviation.toFixed(2);  // deviation is rounded to 2 decimal places
    
    const response = {
        deviation,
    }
    res
    .json(new ApiResponse(response));
});

export { getStats, getDeviation };