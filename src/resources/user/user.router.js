import { Router } from "express";
import { me } from "./user.controller.js";
import { updateMe } from "./user.controller.js";

const userRouter = Router();

userRouter.get("/", me);
userRouter.put("/", updateMe);

export default userRouter;
