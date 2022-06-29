import { database } from "./database";
import { Request, Response } from "express";

export class UsersController {
  criarUser(request: Request, response: Response): Response {
    const { name } = request.body;

    if (name.length < 1) {
      return response
        .status(403)
        .json({ msg: "nao é possivel criar usuario vazio" });
    }
    database.push(name);
    return response.status(201).json({ msg: `${name} created successfully` });
  }

  listarUsers(request: Request, response: Response): Response {
    return response.status(200).json(database);
  }
}
