import { Router, Response, Request, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
const router = Router();
import { user, User } from '../models/userModel';
import { UserErrors } from './errors';
router.post('/signup', async (req: Request, res: Response) => {
    const { username, password } = req.body;
    try {
        const user1 = await user.findOne({ username })
        if (user1) {
            return res.status(400).json({ type: UserErrors.exists })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await user.create({ username, password: hashedPassword });
        await newUser.save();
        res.json({ message: "success", newUser });
    } catch (error) {
        return res.status(500).json({ message: error })
    }

})
router.post('/login', async (req: Request, res: Response) => {
    const { username, password } = req.body;
    try {
        const user1: User = await user.findOne({ username })
        if (!user1) {
            return res.status(400).json({ type: UserErrors.user_not_found })
        }
        const isPasswordValid = await bcrypt.compare(password, user1.password);
        if (!isPasswordValid) {
            return res.status(400).json({ type: UserErrors.wrong_credentials })
        }
        const token = jwt.sign({ id: user1.userId }, "secret");
        return res.json({ token, userId: user1.userId })

    } catch (error) {
        return res.status(500).json({ message: error })
    }

})
export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        jwt.verify(authHeader, 'secret', (err) => {
            if (err) {
                return res.sendStatus(403);
            }
            next();
        })
    }
    return res.sendStatus(401);
}
export { router as UserRouter }