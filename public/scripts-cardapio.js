const containerCards = document.querySelector("#container-cards");

async function carregarCardapio() {

        const container = document.getElementById("container-cards");

        try {

            const resposta = await fetch("http://localhost:3000/api/cardapio");

            const cardapio = await resposta.json();

            container.innerHTML = "";

            cardapio.forEach(item => {

                const card = document.createElement("div");

                card.classList.add("card");

                card.innerHTML = `
                    <img src="${item.imagem}" alt="${item.nome}">

                    <h3>${item.nome}</h3>

                    <p>${item.descricao}</p>
                `;

                container.appendChild(card);

            });

        } catch (erro) {

            console.error("Erro:", erro);

            container.innerHTML = `
                <p>Não foi possível carregar o cardápio.</p>
            `;

        }

    }

    carregarCardapio();

carregarCardapio();