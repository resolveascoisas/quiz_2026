const arquivosSemanais = [
        if (!agrupado[item.escola]) {

            agrupado[item.escola] = {
                soma: 0,
                qtd: 0,
                presenca: 0
            }
        }

        agrupado[item.escola].soma += item.pontos
        agrupado[item.escola].qtd += 1
        agrupado[item.escola].presenca += item.presenca
    })

    const ranking = Object.entries(agrupado)
        .map(([escola, dados]) => ({
            escola,
            media: dados.soma / dados.qtd,
            presenca: dados.presenca / dados.qtd,
            qtd: dados.qtd
        }))
        .sort((a,b) => b.media - a.media)

    ranking.forEach((item, index) => {

        tbody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${item.escola}</td>
                <td>${item.media.toFixed(2)}</td>
                <td>${item.presenca.toFixed(1)}%</td>
                <td>${item.qtd}</td>
            </tr>
        `
    })
}

function gerarTabelaTurmas() {

    const tbody = document.querySelector(
        '#tabelaTurmas tbody'
    )

    tbody.innerHTML = ''

    const ranking = [...dadosGerais]
        .sort((a,b) => b.pontos - a.pontos)

    ranking.forEach((item, index) => {

        tbod
