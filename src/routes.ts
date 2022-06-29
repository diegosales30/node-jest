import { Router } from "express";
import { UsersController } from "./controllers/usersController";

const routes = Router();
const usersController = new UsersController(); //quando é classe, precisa instanciar

routes.get("/users", usersController.listarUsers);

routes.post("/users", usersController.criarUser);

export { routes };
