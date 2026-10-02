async function carregarProdutos() {

    const container = document.getElementById("container-produtos");

    try {

        const resposta = await fetch("/produtos");

        if (!resposta.ok) {
            throw new Error("Erro ao buscar produtos.");
        }

        const produtos = await resposta.json();

        container.innerHTML = "";

        produtos.forEach(produto => {

            const card = document.createElement("div");

            card.classList.add("card");

            card.innerHTML = `
                <img src="${produto.img}" alt="${produto.nome}">

                <h3>${produto.nome}</h3>

                <p>${produto.descricao}</p>

                <strong>
                    R$ ${Number(produto.preco).toFixed(2).replace(".", ",")}
                </strong>
            `;

            container.appendChild(card);

        });

    } catch (erro) {

        console.error(erro);

        container.innerHTML = `
            <p>Não foi possível carregar os produtos.</p>
        `;
    }
}

carregarProdutos();