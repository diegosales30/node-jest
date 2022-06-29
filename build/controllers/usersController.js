"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const database_1 = require("./database");
class UsersController {
    criarUser(request, response) {
        const { name } = request.body;
        if (name.length < 1) {
            return response
                .status(403)
                .json({ msg: "nao é possivel criar usuario vazio" });
        }
        database_1.database.push(name);
        return response.status(201).json({ msg: `${name} created successfully` });
    }
    listarUsers(request, response) {
        return response.status(200).json(database_1.database);
    }
}
exports.UsersController = UsersController;
