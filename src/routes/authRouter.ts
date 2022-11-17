import { Router } from "express";
import LoginController from '../controller/LoginController';

const router = Router();

const loginController = new LoginController();

router.post('/', (req, res) => loginController.loginAuthenticate(req, res));

export default router;