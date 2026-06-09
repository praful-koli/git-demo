import expres from 'express'
import {createServer} from 'http'
import {Server} from 'socket.io'
import cors from 'cors'

const app = expres()
const port = 3000
const server = createServer(app)

app.use(cors({
origin : "http://locahost:5173",
    credentials : true
}))
const io = new Server(server , {
    cors : {
        origin : 'http://localhost:5173',
        credentials : true
    }
})

io.on('connection' , (socket) => {
     console.log("User connected",socket.id)
  

    socket.on('message' , (data)=> {
        console.log('message ' , data)
       io.emit(data)
    })

     socket.on('disconnect' , ()=> {
        console.log(`User Disconected ${socket.id}`)
     })
  
})


server.listen(Number(port), ()=> {
   console.log(`Server runing on port ${Number(port)}`)
})