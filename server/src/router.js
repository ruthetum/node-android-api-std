import express from "express";
import {
    home
} from "./controller";

export const router = express.Router();

router.get('/', home);
