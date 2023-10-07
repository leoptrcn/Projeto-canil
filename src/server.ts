import express,{Request, Response} from 'express';
import dotenv from 'dotenv'
import mustache from 'mustache-express'
import path from 'path'
import mainRoute from './routes/index'

dotenv.config()

const app = express()

app.set('view engine','mustache')
app.set('views', path.join(__dirname, 'views'))
app.engine('mustache', mustache())

app.use(express.static(path.join(__dirname, '../public')))

app.use(mainRoute)

app.use((req: Request, res: Response)=>{
    res.send('pagina nao encontrada')
})

app.listen(process.env.PORT)