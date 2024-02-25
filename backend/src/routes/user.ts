import {Router, Response, Request} from 'express';
const router = Router();
import { User } from '../models/userModel';
router.post('/signup', async (req:Request, res:Response)=>{
    const {username, password} = req.body;
    
})
export {router as UserRouter}