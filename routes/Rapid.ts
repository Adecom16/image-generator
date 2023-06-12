import express from "express"
import { generateimage } from "../controller/RapidApiKey"
const router = express.Router();

router.post('/generateimage', generateimage)

export default router