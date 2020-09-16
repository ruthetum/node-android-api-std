import express from "express";
import {
    register,
    login
} from "./controller";

export const router = express.Router();

router.get('/register', register); //post로 해야됨
router.get('/login', login);       //post로 해야됨