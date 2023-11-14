import express from 'express';
import cors from 'cors';
import { PostController } from './src/controllers/Post.js';
import { PostRoutes } from './src/routes/Post.js';
import { MemberController } from './src/controllers/Member.js';
import { MemberRoutes } from './src/routes/Member.js';
import { CategoryController } from './src/controllers/Category.js';
import { CategoryRoutes } from './src/routes/Category.js';
import { PasswordController } from './src/controllers/Password.js';
import { PasswordRoutes } from './src/routes/Password.js';
import dotenv from 'dotenv';
dotenv.config()
const port = process.env.PORT;

const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = process.env.CLIENT_URL;
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    } 
  }
}; 

const server = express();
server.use(express.json());
server.use(cors(corsOptions));

const PostControllers = new PostController();
const MemberControllers = new MemberController();
const CategoryControllers = new CategoryController();
const PasswordControllers = new PasswordController();

server.get('/', (req, res) =>{
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;"> Whippin in the Kitchen API</h1>');
});


// Requests for members

server.get(MemberRoutes.getAllMembers, (req, res) => {
  MemberControllers.getAllMembers(req, res);
});

server.get(MemberRoutes.getMemberById, (req, res) => {
  const id = req.params.id;
  MemberControllers.getMembersById(req, res, id);
});

server.post(MemberRoutes.createMember, (req, res) => {
  const data = req.body;
  MemberControllers.createMember(req, res, data);
});

server.put(MemberRoutes.updateMemberById, (req, res) => {
  const data = req.body;
  const id = req.params.id;
  MemberControllers.updateMemberById(req, res, data, id);
});

server.delete(MemberRoutes.deleteMemberById, (req, res) => {
  const id = req.params.id;
  MemberControllers.deleteMemberById(req, res, id);
});


// Requests for posts

server.get(PostRoutes.getAllPosts, (req, res) => {
    PostControllers.getAllPosts(req, res);
});

server.get(PostRoutes.getPostById, (req, res) => {
    PostControllers.getPostById(req, res);
});

server.get(PostRoutes.getPostsFromMember, (req, res) => {
  PostControllers.getPostsFromMember(req, res);
});

server.post(PostRoutes.createPost, (req, res) => {
    const data = req.body;
    PostControllers.createPost(req, res, data);
});

server.put(PostRoutes.updatePostById, (req, res) => {
    const data = req.body;
    const id = req.params.id;
    PostControllers.updatePostById(req, res, data, id);
});

server.delete(PostRoutes.deletePostById, (req, res) => {
    const id = req.params.id;
    PostControllers.deletePostById(req, res, id);
});


// Requests for categories

server.get(CategoryRoutes.getAllCategories, (req, res) => {
  CategoryControllers.getAllCategories(req,res);
});


// Requests for passwords

server.get(PasswordRoutes.checkPassword, (req, res) => {
  PasswordControllers.checkPassword(req, res);
});

server.post(PasswordRoutes.createPassword, (req, res,) => {
  PasswordControllers.createPassword(req, res);
});

server.put(PasswordRoutes.updatePassword, (req, res) => {
  PasswordControllers.updatePassword(req, res);
});

server.delete(PasswordRoutes.deletePassword, (req, res) => {
  PasswordControllers.deletePassword(req, res);
});


server.get("*", (req, res) => {
  res.status(404).json("Page not found");
});

server.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
});