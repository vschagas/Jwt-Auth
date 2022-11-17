import { Router } from "express";
import authRouter from "./authRouter"



const router = Router();

router.use('/login', authRouter);


export default  router;