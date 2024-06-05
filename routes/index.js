import {Router} from "express";
import {getWeather} from "../controller/index.js"
const router = Router();

router.get("/v1/api/", getWeather)


export default router