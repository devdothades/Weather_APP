import express from "express"
import cors from "cors"
import morgan from "morgan"
import dotenv from "dotenv"

import index from "./routes/index.js"

dotenv.configDotenv()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(morgan('tiny'))


try {
    app.listen(process.env.PORT, () => {
        console.log(`server running at ${process.env.PORT}`)
    })
} catch (err) {
    console.error(err)
    process.exit(1)
}

app.use("/", index)
