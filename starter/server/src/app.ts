import express, { Request, Response} from 'express';
import mongoose from 'mongoose'
import cors from 'cors'
import router from './routes/index'

const app = express();
const PORT = 8000

const {
    MONGODB_ATLAS_USERNAME,
    MONGODB_ATLAS_PASSWORD,
    MONGODB_ATLAS_DBNAME
} = process.env

const uri = `mongodb+srv://wegodev1:hashtag@cluster0.6m065.mongodb.net/?retryWrites=true&w=majority`

const options = { useNewUrlParser: true, useUnifiedTopology: true}

app.use(cors())

// app.get('/', (req: Request, res: Response) => {
//     res.send("Hello World!");
// })

// app.get('/about', (req: Request, res: Response) => {
//     res.send("Routing to about page");
// })

app.use(router)


mongoose.set('useFindAndModify', true)
mongoose.connect(uri, options)
    .then(() => {
        app.listen(PORT, () => {
            console.info(`App listening on port ${PORT}`);
        })
    })
    .catch((error) => {
        throw error
    })

    



