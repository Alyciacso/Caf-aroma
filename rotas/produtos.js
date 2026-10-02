import express from "express";

import produtos from "../data/produtos.js";

const router = express.Router();

// GET - listar produtos
router.get("/", (req, res) => {
    res.json(produtos);
});

// POST - adicionar produto
router.post("/", (req, res) => {

    const novoProduto = req.body;

    produtos.push(novoProduto);

    res.status(201).json({
        mensagem: "Produto adicionado com sucesso!",
        produto: novoProduto
    });
});

// PUT - atualizar produto
router.put("/:id", (req, res) => {

    const id = Number(req.params.id);

    const indice = produtos.findIndex(produto => produto.id === id);

    if (indice === -1) {
        return res.status(404).json({
            mensagem: "Produto não encontrado."
        });
    }

    produtos[indice] = {
        ...produtos[indice],
        ...req.body,
        id: id
    };

    res.json({
        mensagem: "Produto atualizado com sucesso!",
        produto: produtos[indice]
    });
});

// DELETE - deletar produto
router.delete("/:id", (req, res) => {

    const id = Number(req.params.id);

    const indice = produtos.findIndex(produto => produto.id === id);

    if (indice === -1) {
        return res.status(404).json({
            mensagem: "Produto não encontrado."
        });
    }

    const produtoRemovido = produtos.splice(indice, 1);

    res.json({
        mensagem: "Produto deletado com sucesso!",
        produto: produtoRemovido[0]
    });
});

export default router;