import { UsersController } from "./usersController";
import { Request, Response } from "express";
import { makeMockResponse } from "../mocks/mockResponse";
describe("users controler", () => {
  const usersController = new UsersController();

  const mockResquest = {} as Request;
  const mockResponse = makeMockResponse();
  it("deve listar usuarios", () => {
    usersController.listarUsers(mockResquest, mockResponse);
    expect(mockResponse.state.status).toBe(200);
    expect(mockResponse.state.json).toEqual([]);
  });

  it("deve criar usuario", () => {
    mockResquest.body = {
      name: "Novo usuário",
    };

    usersController.criarUser(mockResquest, mockResponse);
    expect(mockResponse.state.status).toBe(201);
    expect(mockResponse.state.json).toEqual({
      msg: "Novo usuário created successfully",
    });
  });

  it("deve retornar erro ao criar usuario vazio", () => {
    mockResquest.body = {
      name: "",
    };

    usersController.criarUser(mockResquest, mockResponse);
    expect(mockResponse.state.status).toBe(403);
    expect(mockResponse.state.json).toEqual({
      msg: "nao é possivel criar usuario vazio",
    });
  });
});
