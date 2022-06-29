"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const usersController_1 = require("./controllers/usersController");
const routes = (0, express_1.Router)();
exports.routes = routes;
const usersController = new usersController_1.UsersController(); //quando é classe, precisa instanciar
routes.get("/users", usersController.listarUsers);
routes.post("/users", usersController.criarUser);
