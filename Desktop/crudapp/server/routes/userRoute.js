import express from "express"
import { create ,getAll, getOne, update, userdelete } from "../controller/UserController.js";


const route  = express.Router()

route.post("/create" , create)

route.get("/getall",getAll)

route.get("/getone/:id",getOne)

route.put("/update/:id",update)

route.delete("/userdelete/:id",userdelete)
export default route;