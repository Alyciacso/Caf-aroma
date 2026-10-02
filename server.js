import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import cardapio from "./data/cardapio.js";
import produtosRouter from "./rotas/produtos.js";

const app = express();

const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(cors());
app.use(express.json());

// Arquivos públicos
app.use(express.static(path.join(__dirname, "public")));

// Imagens
app.use("/img", express.static(path.join(__dirname, "img")));

// API do cardápio
app.get("/api/cardapio", (req, res) => {
    res.json(cardapio);
});

// API dos produtos
app.use("/produtos", produtosRouter);

// Servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});