import expressAsyncHandler from "express-async-handler";
import dotenv from "dotenv"
import axios from "axios";

dotenv.configDotenv()

const getWeather = expressAsyncHandler(async (req, res) => {
    const API_KEY = process.env.API_KEY
    const API_URL = process.env.API_URL

    const city = req.query.city

    try {
        const response = await axios.get(API_URL, {
            params: {
                key: API_KEY, q: city
            }
        })
        console.log(response.data)
        res.status(200).json(response.data)
    } catch (e) {
        res.status(404).json({e: "location not found"})
    }

})

export {getWeather}