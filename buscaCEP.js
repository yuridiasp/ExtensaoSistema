/**
 * @param {string} cep - Código de Endereçamento Postal (CEP) fornecido como entrada no formato `00000000`.
 * 
 * @typedef {Object} Address
 * 
 * @property {string} cep - Código de Endereçamento Postal do endereço no formato `00000-000`.
 * @property {string} logradouro - Nome da rua, avenida, travessa ou via correspondente ao CEP.
 * @property {string} complemento - Informações adicionais do endereço, como bloco, apartamento, sala ou conjunto.
 * @property {string} unidade - Identificação da unidade do correio (quando aplicável).
 * @property {string} bairro - Bairro correspondente ao endereço.
 * @property {string} localidade - Município ou cidade do endereço.
 * @property {string} uf - Unidade Federativa (sigla do estado, ex: `SP`, `RJ`).
 * @property {string} estado - Nome completo do estado.
 * @property {string} regiao - Região do Brasil a que o estado pertence (ex: `Sudeste`, `Nordeste`).
 * @property {string} ibge - Código do município segundo o IBGE (Instituto Brasileiro de Geografia e Estatística).
 * @property {string} gia - Código GIA (Guia de Arrecadação) utilizado em São Paulo para fins fiscais.
 * @property {string} ddd - Código de Discagem Direta à Distância da região (ex: `11`, `21`).
 * @property {string} siafi - Código do município no Sistema Integrado de Administração Financeira do Governo Federal.
 * 
 * @returns {Promise<Address>} Objeto contendo todos os dados de endereço normalizados.
 */
async function buscaCEP (cep) {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)

    const result = JSON.parse(await response.text())

    return result
}