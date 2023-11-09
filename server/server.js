import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { PostController } from './src/controllers/Post.js';
import { PostRoutes } from './src/routes/post.js'
import { MemberController } from './src/controllers/Member.js'
import { MemberRoutes } from './src/routes/member.js'

dotenv.config()
const port = process.env.PORT;

const corsOptions = {
    origin: (origin, callback) => {
      const allowedOrigins = "https://meal-master.vercel.app";
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      } 
    },
  }; 

const server = express()
server.use(express.json())
server.use(cors(corsOptions))

const PostControllers = new PostController();
const MemberControllers = new MemberController();

server.get('/', (req,res) =>{
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;"> Whippin in the Kitchen API</h1>')
})

//server for members
server.get(MemberRoutes.getAllMembers, (req, res) => {
  MemberControllers.getAllMembers(req, res)
});

server.get(MemberRoutes.getMemberById, (req, res) => {
  MemberControllers.getMembersById(req, res)
});

server.post(MemberRoutes.createMember, (req, res) => {
  MemberControllers.createMember(req, res)
});

server.put(MemberRoutes.updateMemberById, (req, res) => {
  MemberControllers.updateMemberById(req, res)
});

server.delete(MemberRoutes.deleteMemberById, (req, res) => {
  MemberControllers.deleteMemberById(req, res)
});

//server for posts
server.get(PostRoutes.getAllPosts, (req, res) => {
    PostControllers.getAllPosts(req, res)
});

server.get(PostRoutes.getPostById, (req, res) => {
    PostControllers.getPostById(req, res)
});

server.post(PostRoutes.createPost, (req, res) => {
    const data = req.body
    PostControllers.createPost(req, res, data)
});

server.put(PostRoutes.updatePostById, (req ,res) => {
    const data = req.params
    const id = req.params.id
    PostControllers.updatePostById(req, res, data, id)
})

server.delete(PostRoutes.deletePostById, (req, res) => {
    const id = req.params.id
    PostControllers.deletePostById(req, res, id)
})



server.listen(port, () => {
    console.log(`server running on http://localhost:${port}`)
})