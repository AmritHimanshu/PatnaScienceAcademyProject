import express from 'express';
import  { submit }  from '../controllers/user-controller.js';
const UserRouter = express.Router();

UserRouter.post('/submit',submit);
export default UserRouter;