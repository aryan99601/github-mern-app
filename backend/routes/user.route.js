import express from "express"
import { getUserProfileAndRepos } from "../controllers/user.controller.js";


const router=express.Router();

router.get("/profile/:username",getUserProfileAndRepos);
//todo=> likes(who like our profile )
//todo=>like a profile(post like)


export default router;