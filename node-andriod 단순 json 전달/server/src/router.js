import express from "express";
import {
    home,
    whoami,
    me
} from "./controller";

export const router = express.Router();

router.get('/', home);

router.get('/whoami', whoami);

router.post('/me', me);