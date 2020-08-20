import express from "express";
import {
    home,
    whoami
} from "./controller";

export const router = express.Router();

router.get('/', home);

router.get('/whoami', whoami);