import { login } from "../repository/usuarioRepository.js";

import { Router } from "express";
const server = Router();

server.post('/user/login', async (req, res) => {
    try {
        const {email, senha} = req.body;
        const response = await login(email, senha);
        res.send(response)
    } catch(error) {
        res.status(404).send({
            erro: "An error ocurred..."
        });   
    }
});

export default server;