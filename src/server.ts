import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// http://localhost:3333/users
// http://localhost:3333/contacts

// metodos
// GET: Buscar ou listar uma informação
// POST: Criar alguma nova informaçao
// PUT: Atualizar uma informaçao existente
// DELETE: Deleta uma informaçao existente

// Corpo (Request Body); Dados para criação ou atualizção de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar
// Query Params: Paginação, filtros, ordenação 

//localhost:3333/users
app.listen(3333);