import { con } from "./connection.js";

export async function login(email, senha) {
    const command = 
    `SELECT id_usuario 	id,
            nm_usuario	nome,
            ds_email	email
     FROM   tb_usuario
     WHERE  ds_email    = ?
     AND    ds_senha	= ?;
    `;
    
    const [r] = await con.query(command, [email, senha]);
    return r[0];
};