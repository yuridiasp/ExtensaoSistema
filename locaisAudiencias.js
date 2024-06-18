const locaisAudiencias = {
    '1ª VARA FEDERAL': 'AV. DR. CARLOS RODRIGUES DA CRUZ, 1500 - CAPUCHO, ARACAJU - SE, 49081-083',
    '2ª VARA FEDERAL': 'AV. DR. CARLOS RODRIGUES DA CRUZ, 1500 - CAPUCHO, ARACAJU - SE, 49081-083',
    '3ª VARA FEDERAL': 'AV. DR. CARLOS RODRIGUES DA CRUZ, 1500 - CAPUCHO, ARACAJU - SE, 49081-083',
    '4ª VARA FEDERAL': 'AV. DR. CARLOS RODRIGUES DA CRUZ, 1500 - CAPUCHO, ARACAJU - SE, 49081-083',
    '5ª VARA FEDERAL': 'PRAÇA CAMERINO, 227 - CENTRO, ARACAJU - SE, 49015-060',
    '6ª VARA FEDERAL': 'RUA MARIA SOUZA CARVALHO, 01 - BAIRRO MARIANGA, ITABAIANA/SE - 49500-000',
    '7ª VARA FEDERAL': 'PRAÇA ENGENHEIRO JORGE - S/N, ESTÂNCIA - SE, 49200-000',
    '8ª VARA FEDERAL': 'PRAÇA RUI MENDES, 21 - CENTRO, LAGARTO - SE, 49400-970',
    '9ª VARA FEDERAL': 'AV JOÃO BARBOSA PORTO, Nº. 1600, BAIRRO BELA VISTA, PROPRIÁ/SE (MESMO RECINTO DA VARA DO TRABALHO)',
    '1ª VARA CÍVEL DE ARACAJU': 'FÓRUM GUMERSINDO BESSA - AV. PRES. TANCREDO NEVES, S/N - CAPUCHO, ARACAJU - SE, 49081-901',
    '2ª VARA CÍVEL DE ARACAJU': 'FÓRUM GUMERSINDO BESSA - AV. PRES. TANCREDO NEVES, S/N - CAPUCHO, ARACAJU - SE, 49081-901',
    '3ª VARA CÍVEL DE ARACAJU': 'FÓRUM GUMERSINDO BESSA - AV. PRES. TANCREDO NEVES, S/N - CAPUCHO, ARACAJU - SE, 49081-901',
    '4ª VARA CÍVEL DE ARACAJU': 'FÓRUM GUMERSINDO BESSA - AV. PRES. TANCREDO NEVES, S/N - CAPUCHO, ARACAJU - SE, 49081-901',
    '5ª VARA CÍVEL DE ARACAJU': 'FÓRUM GUMERSINDO BESSA - AV. PRES. TANCREDO NEVES, S/N - CAPUCHO, ARACAJU - SE, 49081-901',
    '6ª VARA CÍVEL DE ARACAJU': 'FÓRUM GUMERSINDO BESSA - AV. PRES. TANCREDO NEVES, S/N - CAPUCHO, ARACAJU - SE, 49081-901',
    '7ª VARA CÍVEL DE ARACAJU': 'FÓRUM GUMERSINDO BESSA - AV. PRES. TANCREDO NEVES, S/N - CAPUCHO, ARACAJU - SE, 49081-901',
    '8ª VARA CÍVEL DE ARACAJU': 'FÓRUM GUMERSINDO BESSA - AV. PRES. TANCREDO NEVES, S/N - CAPUCHO, ARACAJU - SE, 49081-901',
    '9ª VARA CÍVEL DE ARACAJU': 'FÓRUM GUMERSINDO BESSA - AV. PRES. TANCREDO NEVES, S/N - CAPUCHO, ARACAJU - SE, 49081-901',
    '10ª VARA CÍVEL DE ARACAJU': 'FÓRUM GUMERSINDO BESSA - AV. PRES. TANCREDO NEVES, S/N - CAPUCHO, ARACAJU - SE, 49081-901',
    '11ª VARA CÍVEL DE ARACAJU': 'FÓRUM GUMERSINDO BESSA - AV. PRES. TANCREDO NEVES, S/N - CAPUCHO, ARACAJU - SE, 49081-901',
    '12ª VARA CÍVEL DE ARACAJU': 'FÓRUM GUMERSINDO BESSA - AV. PRES. TANCREDO NEVES, S/N - CAPUCHO, ARACAJU - SE, 49081-901',
    '13ª VARA CÍVEL DE ARACAJU': 'FÓRUM GUMERSINDO BESSA - AV. PRES. TANCREDO NEVES, S/N - CAPUCHO, ARACAJU - SE, 49081-901',
    '14ª VARA CÍVEL DE ARACAJU': 'FÓRUM GUMERSINDO BESSA - AV. PRES. TANCREDO NEVES, S/N - CAPUCHO, ARACAJU - SE, 49081-901',
    '15ª VARA CÍVEL DE ARACAJU': 'FÓRUM GUMERSINDO BESSA - AV. PRES. TANCREDO NEVES, S/N - CAPUCHO, ARACAJU - SE, 49081-901',
    '17ª VARA CÍVEL DE ARACAJU': 'FÓRUM DES. LUIZ C. FONTES DE ALENCAR - AV. GENTIL TAVARES, 380, GETULIO VARGAS, ARACAJU/SE, 49055-260',
    '18ª VARA CÍVEL DE ARACAJU': 'FÓRUM GUMERSINDO BESSA - AV. PRES. TANCREDO NEVES, S/N - CAPUCHO, ARACAJU - SE, 49081-901',
    '19ª VARA CÍVEL DE ARACAJU': 'FÓRUNS INTEGRADOS II - AV. VISCONDE DE MARACAJU, S/N , DEZOITO DO FORTE, ARACAJU/SE, 49070-460',
    '20ª VARA CÍVEL DE ARACAJU': 'FÓRUM GUMERSINDO BESSA - AV. PRES. TANCREDO NEVES, S/N - CAPUCHO, ARACAJU - SE, 49081-901',
    '21ª VARA CÍVEL DE ARACAJU': 'FÓRUM GUMERSINDO BESSA - AV. PRES. TANCREDO NEVES, S/N - CAPUCHO, ARACAJU - SE, 49081-901',
    '22ª VARA CÍVEL DE ARACAJU': 'FÓRUM GUMERSINDO BESSA - AV. PRES. TANCREDO NEVES, S/N - CAPUCHO, ARACAJU - SE, 49081-901',
    '23ª VARA CÍVEL DE ARACAJU': 'FÓRUNS INTEGRADOS III - AV. PAULO HENRIQUE MACHADO PIMENTEL, Nº 170 - (DIA), INÁCIO BARBOSA, ARACAJU/SE, 49040-740',
    '24ª VARA CÍVEL DE ARACAJU': 'FÓRUNS INTEGRADOS II - AV. VISCONDE DE MARACAJU, S/N , DEZOITO DO FORTE, ARACAJU/SE, 49070-460',
    '25ª VARA CÍVEL DE ARACAJU': 'FÓRUNS INTEGRADOS III - AV. PAULO HENRIQUE MACHADO PIMENTEL, Nº 170 - (DIA), INÁCIO BARBOSA, ARACAJU/SE, 49040-740',
    '26ª VARA CÍVEL DE ARACAJU': 'FÓRUM GUMERSINDO BESSA - AV. PRES. TANCREDO NEVES, S/N - CAPUCHO, ARACAJU - SE, 49081-901',
    '27ª VARA CÍVEL DE ARACAJU': 'FÓRUM GUMERSINDO BESSA - AV. PRES. TANCREDO NEVES, S/N - CAPUCHO, ARACAJU - SE, 49081-901',
    '28ª VARA CÍVEL DE ARACAJU': 'FÓRUNS INTEGRADOS IV - RUA ALEXANDRE ALCINO, S/N, SANTA MARIA, ARACAJU/SE, 49044-090',
    '1º JUIZADO ESPECIAL DE ARACAJU': 'FÓRUNS INTEGRADOS II - AV. VISCONDE DE MARACAJU, S/N, DEZOITO DO FORTE, ARACAJU/SE, 49070-460',
    '2º JUIZADO ESPECIAL DE ARACAJU': 'FÓRUNS INTEGRADOS III - AV. PAULO HENRIQUE MACHADO PIMENTEL, Nº 170 - (DIA), INÁCIO BARBOSA, ARACAJU/SE, 49040-740',
    '3º JUIZADO ESPECIAL DE ARACAJU': 'FÓRUNS INTEGRADOS III - AV. PAULO HENRIQUE MACHADO PIMENTEL, Nº 170 - (DIA), INÁCIO BARBOSA, ARACAJU/SE, 49040-740',
    '4º JUIZADO ESPECIAL DE ARACAJU': 'FÓRUNS INTEGRADOS III - AV. PAULO HENRIQUE MACHADO PIMENTEL, Nº 170 - (DIA), INÁCIO BARBOSA, ARACAJU/SE, 49040-740',
    '5º JUIZADO ESPECIAL DE ARACAJU': 'FÓRUNS INTEGRADOS III - AV. PAULO HENRIQUE MACHADO PIMENTEL, Nº 170 - (DIA), INÁCIO BARBOSA, ARACAJU/SE, 49040-740',
    '7º JUIZADO ESPECIAL DE ARACAJU': 'FÓRUNS INTEGRADOS IV - RUA ALEXANDRE ALCINO, S/N, SANTA MARIA, ARACAJU/SE, 49044-090',
    '8º JUIZADO ESPECIAL DE ARACAJU': 'FÓRUNS INTEGRADOS II - AV. VISCONDE DE MARACAJU, S/N, DEZOITO DO FORTE, ARACAJU/SE, 49070-460',
    '9º JUIZADO ESPECIAL DE ARACAJU': 'FÓRUNS INTEGRADOS III - AV. PAULO HENRIQUE MACHADO PIMENTEL, Nº 170 - (DIA), INÁCIO BARBOSA, ARACAJU/SE, 49040-740',
    '10º JUIZADO ESPECIAL DE ARACAJU': 'FÓRUNS INTEGRADOS III - AV. PAULO HENRIQUE MACHADO PIMENTEL, Nº 170 - (DIA), INÁCIO BARBOSA, ARACAJU/SE, 49040-740',
    '19º JUIZADO ESPECIAL DE ARACAJU': 'FÓRUNS INTEGRADOS II - AV. VISCONDE DE MARACAJU, S/N, DEZOITO DO FORTE, ARACAJU/SE, 49070-460',
    '24º JUIZADO ESPECIAL DE ARACAJU': 'FÓRUNS INTEGRADOS II - AV. VISCONDE DE MARACAJU, S/N, DEZOITO DO FORTE, ARACAJU/SE, 49070-460',
    '28º JUIZADO ESPECIAL DE ARACAJU': 'RUA ALEXANDRE ALCINO, S/N, SANTA MARIA, ARACAJU/SE',
    '1º JUIZADO ESPECIAL DA FAZENDA PÚBLICA DE ARACAJU': 'FÓRUM GUMERSINDO BESSA - AV. PRES. TANCREDO NEVES, S/N - CAPUCHO, ARACAJU - SE, 49081-901',
    '2º JUIZADO ESPECIAL DA FAZENDA PÚBLICA DE ARACAJU': 'FÓRUM GUMERSINDO BESSA - AV. PRES. TANCREDO NEVES, S/N - CAPUCHO, ARACAJU - SE, 49081-901',
    'JUIZADO ESPECIAL CRIMINAL DE ARACAJU': 'FÓRUM GUMERSINDO BESSA - AV. PRES. TANCREDO NEVES, S/N - CAPUCHO, ARACAJU - SE, 49081-901',
    '1ª VARA CRIMINAL DE ARACAJU': 'FÓRUM GUMERSINDO BESSA - AV. TANCREDO NEVES, S/N, BAIRRO CAPUCHO - 1º PISO, CAPUCHO, ARACAJU/SE, 49081-901',
    '2ª VARA CRIMINAL DE ARACAJU': 'CENTRO ADMINISTRATIVO GOVERNADOR AUGUSTO FRANCO, CAPUCHO, ARACAJU/SE, 49081-901',
    '3ª VARA CRIMINAL DE ARACAJU': 'CENTRO ADMINISTRATIVO GOVERNADOR AUGUSTO FRANCO, CAPUCHO, ARACAJU/SE, 49081-901',
    '4ª VARA CRIMINAL DE ARACAJU': 'FÓRUM GUMERSINDO BESSA - AV. PRES. TANCREDO NEVES, S/N - CAPUCHO, ARACAJU - SE, 49081-901',
    '5ª VARA CRIMINAL DE ARACAJU': 'FÓRUM GUMERSINDO BESSA - AV. PRES. TANCREDO NEVES, S/N - CAPUCHO, ARACAJU - SE, 49081-901',
    '6ª VARA CRIMINAL DE ARACAJU': 'FÓRUM GUMERSINDO BESSA - AV. PRES. TANCREDO NEVES, S/N - CAPUCHO, ARACAJU - SE, 49081-901',
    '7ª VARA CRIMINAL DE ARACAJU': 'FÓRUM OLÍMPIO MENDONÇA - AV. CENTRAL-03, S/N CJ. ORLANDO DANTAS , SÃO CONRADO, ARACAJU/SE, 49092-230',
    '8ª VARA CRIMINAL DE ARACAJU': 'FÓRUM GUMERSINDO BESSA - AV. PRES. TANCREDO NEVES, S/N - CAPUCHO, ARACAJU - SE, 49081-901',
    '9ª VARA CRIMINAL DE ARACAJU': 'FÓRUM GUMERSINDO BESSA - AV. PRES. TANCREDO NEVES, S/N - CAPUCHO, ARACAJU - SE, 49081-901',
    '1º JUIZADO ESPECIAL DA FAZENDA PÚBLICA DE ARACAJU': 'FÓRUM GUMERSINDO BESSA - AV. PRES. TANCREDO NEVES, S/N, CAPUCHO, ARACAJU-SE, 49081901',
    '2º JUIZADO ESPECIAL DA FAZENDA PÚBLICA DE ARACAJU': 'FÓRUM GUMERSINDO BESSA - AV. PRES. TANCREDO NEVES, S/N, CAPUCHO, ARACAJU-SE, 49081901',
    'VARA DE ACIDENTES E DELITOS DE TRÂNSITO': 'FÓRUM GUMERSINDO BESSA - AV. PRES. TANCREDO NEVES, S/N - CAPUCHO, ARACAJU - SE, 49081-901',
    'VARA DE EXECUÇÃO DE MEDIDAS E PENAS ALTERNATIVAS': 'FÓRUM OLÍMPIO MENDONÇA - AV. CENTRAL 3, S/N - CONJ. ORLANDO DANTAS, SÃO CONRADO, ARACAJU/SE, 49092-230',
    'JUIZADO DE VIOLÊNCIA DOMÉSTICA E FAMILIAR CONTRA A MULHER': 'FÓRUM GUMERSINDO BESSA - AV. PRES. TANCREDO NEVES, S/N - CAPUCHO, ARACAJU - SE, 49081-901',
    'CENTRAL PLANTONISTA 1º GRAU - ARACAJU': 'FÓRUM GUMERSINDO BESSA - AV. PRES. TANCREDO NEVES, S/N - CAPUCHO, ARACAJU - SE, 49081-901',
    '16ª VARA PRIVATIVA DO JUIZADO DA INFÂNCIA E DA JUVENTUDE': 'FÓRUM DES. LUIZ C. FONTES - AV. GENTIL TAVARES, 380, GETULIO VARGAS, ARACAJU/SE, 49055-260',
    '1ª VARA DO TRABALHO': 'FÓRUM DANTAS PRADO (PRÉDIO VERMELHO - CENTRO ADMINISTRATIVO), 1º ANDAR - AV. CARLOS RODRIGUES DA CRUZ, S/N, CAPUCHO,ARACAJU/SE',
    '2ª VARA DO TRABALHO': 'FÓRUM DANTAS PRADO (PRÉDIO VERMELHO - CENTRO ADMINISTRATIVO), 1º ANDAR - AV. CARLOS RODRIGUES DA CRUZ, S/N, CAPUCHO,ARACAJU/SE',
    '3ª VARA DO TRABALHO': 'FÓRUM DANTAS PRADO (PRÉDIO VERMELHO - CENTRO ADMINISTRATIVO), 2º ANDAR - AV. CARLOS RODRIGUES DA CRUZ, S/N, CAPUCHO,ARACAJU/SE',
    '4ª VARA DO TRABALHO': 'FÓRUM DANTAS PRADO (PRÉDIO VERMELHO - CENTRO ADMINISTRATIVO), 2º ANDAR - AV. CARLOS RODRIGUES DA CRUZ, S/N, CAPUCHO,ARACAJU/SE',
    '5ª VARA DO TRABALHO': 'FÓRUM DANTAS PRADO (PRÉDIO VERMELHO - CENTRO ADMINISTRATIVO), 3º ANDAR - AV. CARLOS RODRIGUES DA CRUZ, S/N, CAPUCHO,ARACAJU/SE',
    '6ª VARA DO TRABALHO': 'FÓRUM DANTAS PRADO (PRÉDIO VERMELHO - CENTRO ADMINISTRATIVO), 3º ANDAR - AV. CARLOS RODRIGUES DA CRUZ, S/N, CAPUCHO,ARACAJU/SE',
    '7ª VARA DO TRABALHO': 'FÓRUM DANTAS PRADO (PRÉDIO VERMELHO - CENTRO ADMINISTRATIVO), 4º ANDAR - AV. CARLOS RODRIGUES DA CRUZ, S/N, CAPUCHO,ARACAJU/SE',
    '8ª VARA DO TRABALHO': 'FÓRUM DANTAS PRADO (PRÉDIO VERMELHO - CENTRO ADMINISTRATIVO), 4º ANDAR - AV. CARLOS RODRIGUES DA CRUZ, S/N, CAPUCHO,ARACAJU/SE',
    '9ª VARA DO TRABALHO': 'FÓRUM DANTAS PRADO (PRÉDIO VERMELHO - CENTRO ADMINISTRATIVO), TÉRREO - AV. CARLOS RODRIGUES DA CRUZ, S/N, CAPUCHO,ARACAJU/SE',
    'CEJUSC': 'FÓRUM GUMERSINDO BESSA - AV. PRES. TANCREDO NEVES, S/N - CAPUCHO, ARACAJU - SE, 49081-901',
    'CEJUSC TRABALHISTA': 'EDIFÍCIO SEDE (PRÉDIO ESPELHADO - CENTRO ADMINISTRATIVO) - AV. CARLOS RODRIGUES DA CRUZ, S/N, CAPUCHO, ARACAJU/SE, CEP 49080-190',
    'GABINETE DA PRESIDÊNCIA': 'EDIFÍCIO SEDE (PRÉDIO AMARELO - CENTRO ADMINISTRATIVO AUGUSTO FRANCO), 4º ANDAR - AV. CARLOS RODRIGUES DA CRUZ, S/N, CAPUCHO, ARACAJU/SE, 49080-190',
    'JAE': 'EDIFÍCIO SEDE (PRÉDIO AMARELO - CENTRO ADMINISTRATIVO AUGUSTO FRANCO), 4º ANDAR - AV. CARLOS RODRIGUES DA CRUZ, S/N, CAPUCHO, ARACAJU/SE, 49080-190',
    'VARA DO TRABALHO DE ESTÂNCIA': 'VARA DO TRABALHO DE ESTÂNCIA - PRAÇA CORONEL GONÇALO PRADO, S/N CEP 49200-000, SANTA CRUZ ESTÂNCIA/SE',
    '1ª VARA CÍVEL DE SOCORRO': 'FÓRUM DES. ARTUR OSCAR DE O. DÉDA - RUA MANOEL PASSOS, FÓRUM ARTHUR OCAR DE O. DEDA, CENTRO, N. SRA. DO SOCORRO/SE, 49160-000',
    '2ª VARA CÍVEL DE SOCORRO': 'FÓRUM DES. ARTUR OSCAR DE O. DÉDA - RUA MANOEL PASSOS, FÓRUM ARTHUR OCAR DE O. DEDA, CENTRO, N. SRA. DO SOCORRO/SE, 49160-000',
    '3ª VARA CÍVE DE SOCORRO': 'FÓRUM DES. PEDRO B. DE ANDRADE - AV. COLETORA C, S/N, FÓRUM DES. PEDRO BARRETO, MARCOS FREIRE II, N. SRA. DO SOCORRO/SE, 49160-000',
    '4ª VARA CÍVEL DE SOCORRO': 'FÓRUM BEL. LUIZ AUGUSTO BARRETO - RODOVIA BR 101, S/N, KM 92.5,PARQUE DOS FARÓIS, N. SRA. DO SOCORRO/SE, 49160-000',
    '1ª VARA CRIMINAL DE SOCORRO': 'FÓRUM BEL. LUIZ AUGUSTO BARRETO - RODOVIA BR 101, S/N, KM 92.5,PARQUE DOS FARÓIS, N. SRA. DO SOCORRO/SE, 49160-000',
    '2ª VARA CRIMINAL DE SOCORRO': 'FÓRUM BEL. LUIZ AUGUSTO BARRETO - RODOVIA BR 101, S/N, KM 92.5,PARQUE DOS FARÓIS, N. SRA. DO SOCORRO/SE, 49160-000',
    '3ª VARA CRIMINAL DE SOCORRO': 'FÓRUM BEL. LUIZ AUGUSTO BARRETO - RODOVIA BR 101, S/N, KM 92.5,PARQUE DOS FARÓIS, N. SRA. DO SOCORRO/SE, 49160-000',
    '1º JUIZADO ESPECIAL CÍVEL E CRIMINAL DE NOSSA SRA DO SOCORRO': 'FÓRUM DES. PEDRO B. DE ANDRADE - AV. COLETORA C, S/N, FÓRUM DES. PEDRO BARRETO, MARCOS FREIRE II, N. SRA. DO SOCORRO/SE, 49160-000',
    '2º JUIZADO ESPECIAL CÍVEL E CRIMINAL DE NOSSA SRA DO SOCORRO': 'FÓRUM DES. ARTUR OSCAR DE O. DÉDA - RUA MANOEL PASSOS, FÓRUM ARTHUR OCAR DE O. DEDA, CENTRO, N. SRA. DO SOCORRO/SE, 49160-000',
    'AQUIDABÃ': 'FÓRUM DE AQUIDABÃ - RUA EDUARDO CHAVES, Nº 93, CENTRO, AQUIDABÃ/SE, 49790-000',
    'GRACCHO CARDOSO': 'FÓRUM DE GRACCHO CARDOSO - RUA EDUARDO CHAVES, Nº 93, CENTRO, AQUIDABÃ/SE, 49790-000',
    'MURIBECA': 'FÓRUM DE MURIBECA - RUA EDUARDO CHAVES, CENTRO, AQUIDABÃ/SE, 49790-000',
    'ARAUÁ': 'FÓRUM DE ARAUÁ - RUA JOAQUIM COSTA NASCIMENTO S/N, CENTRO, ARAUA/SE, 49220-000',
    'PEDRINHAS': 'FÓRUM DE PEDRINHAS - RODOVIA BOQUIM-PEDRINHAS, S/N, BUENOS AIRES, PEDRINHAS/SE, 49350-000',
    '1ª VARA CÍVEL E CRIMINAL DA BARRA DOS COQUEIROS': 'FÓRUM DA BARRA DOS COQUEIROS - RODOVIA EDILSON TÁVORA, SN, CENTRO, BARRA DOS COQUEIROS/SE, 49140-000',
    '2ª VARA CÍVEL E CRIMINAL DA BARRA DOS COQUEIROS': 'FÓRUM DA BARRA DOS COQUEIROS - RODOVIA EDILSON TÁVORA, SN, CENTRO, BARRA DOS COQUEIROS/SE, 49140-000',
    'CEJUS BARRA DOS COQUEIROS': 'FÓRUM DA BARRA DOS COQUEIROS - RODOVIA EDILSON TÁVORA, SN, CENTRO, BARRA DOS COQUEIROS/SE, 49140-000',
    'BOQUIM': 'FÓRUM DE BOQUIM - PQ. CITRÍCOLA GOV. JOÃO ALVES FILHO, S/Nº, CENTRO, BOQUIM/SE, 49360-000',
    'CAMPO DO BRITO': 'FÓRUM DE CAMPO DO BRITO - RUA GABRIEL DE LIMA, S/N, CENTRO, CAMPO DO BRITO/SE, 49520-000',
    'CEJUSC CAMPO DO BRITO': 'FÓRUM DE CAMPO DO BRITO - RUA GABRIEL DE LIMA, S/N, CENTRO, CAMPO DO BRITO/SE, 49520-000',
    'MACAMBIRA': 'FÓRUM DE CAMPO DO BRITO - RUA GABRIEL DE LIMA, S/N, CENTRO, CAMPO DO BRITO/SE, 49520-000',
    'SÃO DOMINGOS': 'FÓRUM DE SÃO DOMINGOS - RUA JOSÉ JUNIOR FILHO S/N, CENTRO, SÃO DOMINGOS/SE, 49525-000',
    'CANINDÉ DE SÃO FRANCISCO': 'FÓRUM DE CANINDÉ DE SÃO FRANCISCO - PRAÇA PADRE CICERO, S/N, CENTRO, CANINDÉ DE SÃO FRANCISCO/SE, 49820-000',
    'CAPELA': 'FÓRUM DE CAPELA - RODOVIA MANOEL DANTAS, S/Nº, CENTRO, CAPELA/SE, 49700-000',
    'CARIRA': 'FÓRUM DE CARIRA - AV. AROALDO CHAGAS, S/N, CENTRO, CARIRA/SE, 49550-000',
    'CARMÓPOLIS': 'FÓRUM DE CARMÓPOLIS - RUA JOSÉ AMADO ALVES, 420, TRAPIÁ I, CARMÓPOLIS/SE, 49740-000',
    'CEJUSC CARMÓPOLIS': 'FÓRUM DE CARMÓPOLIS - RUA JOSÉ AMADO ALVES, 420, TRAPIÁ I, CARMÓPOLIS/SE, 49740-000',
    'GENERAL MAYNARD': 'FÓRUM DE CARMÓPOLIS - RUA JOSÉ AMADO ALVES, 420, TRAPIÁ I, CARMÓPOLIS/SE, 49740-000',
    'ROSÁRIO DO CATETE': 'FÓRUM DE CARMÓPOLIS - RUA JOSÉ AMADO ALVES, 420, TRAPIÁ I, CARMÓPOLIS/SE, 49740-000',
    'CEDRO DE SÃO JOÃO': 'FÓRUM DE CEDRO DE SÃO JOÃO - RUA ANTÔNIO BATISTA, Nº105, CENTRO, CEDRO DE SÃO JOÃO/SE, 49930-000',
    'CEJUSC CEDRO DE SÃO JOÃO': 'FÓRUM DE CEDRO DE SÃO JOÃO - RUA ANTÔNIO BATISTA, Nº105, CENTRO, CEDRO DE SÃO JOÃO/SE, 49930-000',
    'AMPARO DO SÃO FRANCISCO': 'FÓRUM DE CEDRO DE SÃO JOÃO - RUA ANTÔNIO BATISTA, Nº105, CENTRO, CEDRO DE SÃO JOÃO/SE, 49930-000',
    'MALHADA DOS BOIS': 'FÓRUM DE CEDRO DE SÃO JOÃO - RUA ANTÔNIO BATISTA, Nº105, CENTRO, CEDRO DE SÃO JOÃO/SE, 49930-000',
    'SÃO FRANCISCO': 'FÓRUM DE CEDRO DE SÃO JOÃO - RUA ANTÔNIO BATISTA, Nº105, CENTRO, CEDRO DE SÃO JOÃO/SE, 49930-000',
    'TELHA': 'FÓRUM DE CEDRO DE SÃO JOÃO - RUA ANTÔNIO BATISTA, Nº105, CENTRO, CEDRO DE SÃO JOÃO/SE, 49930-000',
    'CRISTINÁPOLIS': 'FÓRUM DE CRISTINÁPOLIS - PRAÇA DA BANDEIRA, Nº 245, CENTRO, CRISTINÁPOLIS/SE, 49270-000',
    'TOMAR DO GERU': 'FÓRUM DE CRISTINÁPOLIS - PRAÇA DA BANDEIRA, Nº 245, CENTRO, CRISTINÁPOLIS/SE, 49270-000',
    '1ª VARA CIVEL DE ESTÂNCIA': 'FÓRUM MINISTRO HEITOR DE SOUZA - AV. TENENTE ELOY, Nº 470, CENTRO, ESTÂNCIA/SE, 49200-000',
    '2ª VARA CIVEL DE ESTÂNCIA': 'FÓRUM MINISTRO HEITOR DE SOUZA - AV. TENENTE ELOY, Nº 470, CENTRO, ESTÂNCIA/SE, 49200-000',
    'CEJUSC DE ESTÂNCIA': 'FÓRUM MINISTRO HEITOR DE SOUZA - AV. TENENTE ELOY, Nº 470, CENTRO, ESTÂNCIA/SE, 49200-000',
    'VARA CRIMINAL DE ESTÂNCIA': 'FÓRUM MINISTRO HEITOR DE SOUZA - AV. TENENTE ELOY, Nº 470, CENTRO, ESTÂNCIA/SE, 49200-000',
    'JUIZADO ESPECIAL CÍVEL E CRIMINAL DE ESTÂNCIA': 'FÓRUM MINISTRO HEITOR DE SOUZA - AV. TENENTE ELOY, Nº 470, CENTRO, ESTÂNCIA/SE, 49200-000',
    'NUSESP - 3º NÚCLEO': 'FÓRUM MINISTRO HEITOR DE SOUZA - AV. TENENTE ELOY, Nº 470, CENTRO, ESTÂNCIA/SE, 49200-000',
    'FREI PAULO': 'FÓRUM DE FREI PAULO - TRAVESSA CORONEL CASSIMIRO, 79, CENTRO, FREI PAULO/SE, 49514-000',
    'PEDRA MOLE': 'FÓRUM DE FREI PAULO - TRAVESSA CORONEL CASSIMIRO, 79, CENTRO, FREI PAULO/SE, 49514-000',
    'PINHÃO': 'FÓRUM DE FREI PAULO - TRAVESSA CORONEL CASSIMIRO, 79, CENTRO, FREI PAULO/SE, 49514-000',
    'GARARU': 'FÓRUM DE GARARU - AVENIDA PRESIDENTE COSTA E SILVA,S/N, CENTRO, GARARU/SE, 49830-000',
    'CANHOBA': 'FÓRUM DE GARARU - AVENIDA PRESIDENTE COSTA E SILVA,S/N, CENTRO, GARARU/SE, 49830-000',
    'ITABI': 'FÓRUM DE GARARU - AVENIDA PRESIDENTE COSTA E SILVA,S/N, CENTRO, GARARU/SE, 49830-000',
    'NOSSA SENHORA DE LOURDES': 'FÓRUM DE GARARU - AVENIDA PRESIDENTE COSTA E SILVA,S/N, CENTRO, GARARU/SE, 49830-000',
    'INDIAROBA': 'FÓRUM DE INDIAROBA - PRAÇA JOÃO ALVES FILHO, 87, CENTRO, INDIAROBA/SE',
    'SANTA LUZIA DO ITANHY': 'FÓRUM DE INDIAROBA - PRAÇA JOÃO ALVES FILHO, 87, CENTRO, INDIAROBA/SE',
    'CEJUSC SANTA LUZIA DO ITANHY': 'FÓRUM DE INDIAROBA - PRAÇA JOÃO ALVES FILHO, 87, CENTRO, INDIAROBA/SE',
    '1ª VARA CIVEL DE ITABAIANA': 'FÓRUM MAURÍCIO GRACCHO CARDOSO - AV. DR. LUIZ MAGALHÃES S/N, CENTRO, ITABAIANA/SE, 49503-256',
    '2ª VARA CIVEL DE ITABAIANA': 'FÓRUM MAURÍCIO GRACCHO CARDOSO - AV. DR. LUIZ MAGALHÃES S/N, CENTRO, ITABAIANA/SE, 49503-256',
    'CEJUSC ITABAIANA': 'FÓRUM MAURÍCIO GRACCHO CARDOSO - AV. DR. LUIZ MAGALHÃES S/N, CENTRO, ITABAIANA/SE, 49503-256',
    '1ª VARA CRIMINAL DE ITABAIANA': 'FÓRUM MAURÍCIO GRACCHO CARDOSO - AV. DR. LUIZ MAGALHÃES S/N, CENTRO, ITABAIANA/SE, 49503-256',
    '2ª VARA CRIMINAL DE ITABAIANA': 'FÓRUM MAURÍCIO GRACCHO CARDOSO - AV. DR. LUIZ MAGALHÃES S/N, CENTRO, ITABAIANA/SE, 49503-256',
    'JUIZADO ESPECIAL CÍVEL E CRIMINAL DE ITABAIANA': 'FÓRUM MAURÍCIO GRACCHO CARDOSO - AV. DR. LUIZ MAGALHÃES S/N, CENTRO, ITABAIANA/SE, 49503-256',
    'ITABAIANINHA': 'FÓRUM DE ITABAIANINHA - RUA FRANCISCO SEVERO, Nº 228, CENTRO, ITABAIANINHA/SE, 49290-000',
    "1ª VARA CÍVEL E CRIMINAL DE ITAPORANGA D'AJUDA": 'FÓRUM FELISBELO FREIRE - AV. EMÍDIO MAXI NETO, S/N, CENTRO, ITAPORANGA D AJUDA/SE, 49120-000',
    "2ª VARA CÍVEL E CRIMINAL DE ITAPORANGA D'AJUDA": 'FÓRUM FELISBELO FREIRE - AV. EMÍDIO MAXI NETO, S/N, CENTRO, ITAPORANGA D AJUDA/SE, 49120-000',
    "CEJUSC ITAPORANGA D'AJUDA": 'FÓRUM FELISBELO FREIRE - AV. EMÍDIO MAXI NETO, S/N, CENTRO, ITAPORANGA D AJUDA/SE, 49120-000',
    'SALGADO': 'FÓRUM DRA. GICÉLIA DE ATORRES, AV 4 DE OUTUBRO S/N, ESTAÇÃO, SALGADO/SE, 49390-000',
    'JAPARATUBA': 'FÓRUM DE JAPARATUBA - RODOVIA LÚCIO PRADO, Nº 40, CENTRO, JAPARATUBA/SE, 49960-000',
    'PIRAMBU': 'FÓRUM DE PIRAMBU - RUA MÁRIO TRINDADE CRUZ, S/N, CENTRO, PIRAMBU/SE, 49190-000',
    '1ª VARA CIVEL DE LAGARTO': 'FÓRUM DE LAGARTO - ROD. ANTÔNIO MARTINS DE MENEZES, KM 36, S/N, HORTA, LAGARTO/SE, 49400-000',
    '2ª VARA CIVEL DE LAGARTO': 'FÓRUM DE LAGARTO - ROD. ANTÔNIO MARTINS DE MENEZES, KM 36, S/N, HORTA, LAGARTO/SE, 49400-000',
    'CEJUSC LAGARTO': 'FÓRUM DE LAGARTO - ROD. ANTÔNIO MARTINS DE MENEZES, KM 36, S/N, HORTA, LAGARTO/SE, 49400-000',
    'VARA CRIMINAL DE LAGARTO': 'FÓRUM DE LAGARTO - ROD. ANTÔNIO MARTINS DE MENEZES, KM 36, S/N, HORTA, LAGARTO/SE, 49400-000',
    'JUIZADO ESPECIAL CÍVEL E CRIMINAL DE LAGARTO': 'FÓRUM DE LAGARTO - ROD. ANTÔNIO MARTINS DE MENEZES, KM 36, S/N, HORTA, LAGARTO/SE, 49400-000',
    'NUSESP - 4º NÚCLEO': 'FÓRUM DES. EPAMINONDAS S. DE ANDRADE LIMA - RODOVIA LOURIVAL BATISTA, KM 36, S/Nº, HORTA, LAGARTO/SE, 49400-000',
    '1ª VARA CÍVEL E CRIMINAL DE LARANJEIRAS': 'FÓRUM DE LARANJEIRAS - ALAMÊDA IÊDA ROSA,S/N, CONJ. MANOEL DO PRADO FRANCO, LARANJEIRAS/SE, 49170-000',
    '2ª VARA CÍVEL E CRIMINAL DE LARANJEIRAS': 'FÓRUM DE LARANJEIRAS - ALAMÊDA IÊDA ROSA,S/N, CONJ. MANOEL DO PRADO FRANCO, LARANJEIRAS/SE, 49170-000',
    'AREIA BRANCA': 'FÓRUM DE AREIA BRANCA - LARGO MANOEL DO PRADO FRANCO,S/N, CENTRO, AREIA BRANCA/SE, 49580-000',
    'MALHADOR': 'FÓRUM DE MALHADOR - AV. VALTER FRANCO, Nº 1060, CENTRO, MALHADOR/SE, 49570-000',
    'MOITA BONITA': 'FÓRUM DE MOITA BONITA - AV. VALTER FRANCO, Nº 1060, CENTRO, MALHADOR/SE, 49570-000',
    'MARUIM': 'FÓRUM DE MARUIM - RUA ALVARO GARCEZ, Nº 315, BOA HORA, MARUIM/SE, 49770-000',
    'SANTO AMARO': 'FÓRUM DE SANTO AMARO - TRAVESSA CARLOS SIMEÃO, S/N, CENTRO, SANTO AMARO/SE, 49180-000',
    '1ª VARA CÍVEL E CRIMINAL DE NOSSA SENHORA DA GLÓRIA': 'FÓRUM DE NOSSA SENHORA DA GLÓRIA - AVENIDA MANOEL ELÍGIO DA MOTA, S/Nº , BRASÍLIA, NOSSA SENHORA DA GLÓRIA/SE, 49680-000',
    '2ª VARA CÍVEL E CRIMINAL DE NOSSA SENHORA DA GLÓRIA': 'FÓRUM DE NOSSA SENHORA DA GLÓRIA - AVENIDA MANOEL ELÍGIO DA MOTA, S/Nº , BRASÍLIA, NOSSA SENHORA DA GLÓRIA/SE, 49680-000',
    'FEIRA NOVA': 'FÓRUM DE NOSSA SENHORA DA GLÓRIA - AVENIDA MANOEL ELÍGIO DA MOTA, S/Nº , BRASÍLIA, NOSSA SENHORA DA GLÓRIA/SE, 49680-000',
    'MONTE ALEGRE': 'FÓRUM DE MONTE ALEGRE DE SERGIPE - PRAÇA PASSOS PORTO, Nº335, MONTEALEGRE@TJSE.JUS.BR, CENTRO, MONTE ALEGRE DE SERGIPE/SE, 49690-000',
    '1ª VARA CÍVEL E CRIMINAL DE NOSSA SENHORA DAS DORES': 'FÓRUM DE NOSSA SENHORA DAS DORES - PRAÇA. DES. ALOÍSIO DE ABREU LIMA, Nº 01, CENTRO, NOSSA SENHORA DAS DORES/SE, 49600-000',
    '2ª VARA CÍVEL E CRIMINAL DE NOSSA SENHORA DAS DORES': 'FÓRUM DE NOSSA SENHORA DAS DORES - PRAÇA. DES. ALOÍSIO DE ABREU LIMA, Nº 01, CENTRO, NOSSA SENHORA DAS DORES/SE, 49600-000',
    'CUMBE': 'FÓRUM DE NOSSA SENHORA DAS DORES - PRAÇA. DES. ALOÍSIO DE ABREU LIMA, Nº 01, CENTRO, NOSSA SENHORA DAS DORES/SE, 49600-000',
    'SIRIRI': 'FÓRUM DE NOSSA SENHORA DAS DORES - PRAÇA. DES. ALOÍSIO DE ABREU LIMA, Nº 01, CENTRO, NOSSA SENHORA DAS DORES/SE, 49600-000',
    '1ª VARA CÍVEL E CRIMINAL DE NEÓPOLIS': 'FÓRUM DE NEÓPOLIS - PÇA. MONS. JOSÉ MORENO DE SANTANA S/N, CENTRO, NEÓPOLIS/SE, 49980-000',
    '2ª VARA CÍVEL E CRIMINAL DE NEÓPOLIS': 'FÓRUM DE NEÓPOLIS - PÇA. MONS. JOSÉ MORENO DE SANTANA S/N, CENTRO, NEÓPOLIS/SE, 49980-000',
    'JAPOATÃ': 'FÓRUM JAPOATÃ - RUA GETULIO VARGAS, S/N, CENTRO, JAPOATÃ/SE, 49950-000',
    'SANTANA DO SÃO FRANCISCO': 'FÓRUM DE SANTANA DO SÃO FRANCISCO - RUA DAS FLORES, S/N, CENTRO, SANTANA DO SÃO FRANCISCO/SE, 49985-000',
    'BREJO GRANDE': 'FÓRUM DESEMBARGADOR ANTÔNIO MACHADO - RUA ALTO DA BOA VISTA, Nº 293, CENTRO, PACATUBA/SE, 49985-000',
    'ILHA DAS FLORES': 'FÓRUM DESEMBARGADOR ANTÔNIO MACHADO - RUA ALTO DA BOA VISTA, Nº 293, CENTRO, PACATUBA/SE, 49985-000',
    'PACATUBA': 'FÓRUM DESEMBARGADOR ANTÔNIO MACHADO - RUA ALTO DA BOA VISTA, Nº 293, CENTRO, PACATUBA/SE, 49985-000',
    'POÇO REDONDO': 'FÓRUM DE POÇO REDONDO - AV. ALCINO ALVES COSTA, Nº 983, CENTRO, POÇO REDONDO/SE, 49810-000',
    'POÇO VERDE': 'FÓRUM DE POÇO VERDE - AV. SÃO JOSÉ, S/N, CENTRO, POÇO VERDE/SE, 49490-000',
    'PORTO DA FOLHA': 'FÓRUM DE PORTO DA FOLHA - RUA AUGUSTO CÉSAR LEITE, Nº189, CENTRO, PORTO DA FOLHA/SE, 49800-000',
    '1ª VARA CÍVEL E CRIMINAL DE PROPRIÁ': 'FÓRUM JUIZ JOÃO FERNANDES DE BRITO - AVENIDA JOÃO BARBOSA PORTO, S/Nº, BELA VISTA, PROPRIÁ/SE - 49900-000',
    '2ª VARA CÍVEL E CRIMINAL DE PROPRIÁ': 'FÓRUM JUIZ JOÃO FERNANDES DE BRITO - AVENIDA JOÃO BARBOSA PORTO, S/Nº, BELA VISTA, PROPRIÁ/SE - 49900-000',
    'CEJUSC PROPRIÁ': 'FÓRUM JUIZ JOÃO FERNANDES DE BRITO - AV. JOÃO BARBOSA PORTO, S/N, BRASÍLIA, PROPRIÁ/SE - 49900-000',
    'NUSESP - 6º NÚCLEO': 'FÓRUM JUIZ JOÃO FERNANDES DE BRITO - AVENIDA JOÃO BARBOSA PORTO, S/Nº, BELA VISTA, PROPRIÁ/SE - 49900-000',
    'RIACHÃO DO DANTAS': 'FÓRUM DE RIACHÃO DO DANTAS - ROD. RIACHÃO-LAGARTO, S/N, CENTRO, RIACHÃO DO DANTAS/SE, 49320-000',
    'RIACHUELO': 'FÓRUM DE RIACHUELO - RUA SANTA MARIA, S/N, CENTRO, RIACHUELO/SE, 49130-000',
    'DIVINA PASTORA': 'FÓRUM DE DIVINA PASTORA - PRACA DA BANDEIRA, S/N, CENTRO, DIVINA PASTORA/SE, 49650-000',
    'SANTA ROSA DE LIMA': 'FÓRUM DE SANTA ROSA DE LIMA - RUA SANTA MARIA, S/N, CENTRO, RIACHUELO/SE, 49130-000',
    'RIBEIRÓPOLIS': 'FÓRUM DE RIBEIRÓPOLIS - PRAÇA MANOEL DO CARMO DE JESUS, S/N, CENTRO, RIBEIRÓPOLIS/SE, 49530-000',
    'SÃO MIGUEL DO ALEIXO': 'FÓRUM DE RIBEIRÓPOLIS - PRAÇA MANOEL DO CARMO DE JESUS, S/N, CENTRO, RIBEIRÓPOLIS/SE, 49530-000',
    'NOSSA SENHORA APARECIDA': 'FÓRUM DE RIBEIRÓPOLIS - PRAÇA MANOEL DO CARMO DE JESUS, S/N, CENTRO, RIBEIRÓPOLIS/SE, 49530-000',
    '1ª VARA CÍVEL SÃO CRISTÓVÃO': 'LARGO JOEL FONTES COSTA, S/N, CENTRO. SÃO CRISTÓVÃO/SE, 49100-000',
    '2ª VARA CÍVEL SÃO CRISTÓVÃO': 'FÓRUM PROF. GONÇALO ROLLEMBERG LEITE - AV. MARECHAL RONDON, S/N, CAMPUS UNIVERSITÁRIO, ROSA ELZE, SÃO CRISTÓVÃO/SE, 49100-000',
    'VARA CRIMINAL DE SÃO CRISTÓVÃO': 'LARGO JOEL FONTES COSTA, S/N, CENTRO, SÃO CRISTÓVÃO/SE, 49100-000',
    'JUIZADO ESPECIAL CÍVEL E CRIMINAL DE SÃO CRISTÓVÃO': 'FÓRUM PROF. GONÇALO ROLLEMBERG LEITE - AV. MARECHAL RONDON, S/N, CAMPUS UNIVERSITÁRIO, ROSA ELZE, SÃO CRISTÓVÃO/SE, 49100-000',
    'CEJUSC SÃO CRISTÓVÃO': 'LARGO JOEL FONTES COSTA, S/N, CENTRO, SÃO CRISTÓVÃO/SE, 49100-000',
    '1ª VARA CÍVEL E CRIMINAL DE SIMÃO DIAS': 'FÓRUM DE SIMÃO DIAS - RODOVIA LOURIVAL BAPTISTA - SE 240, Nº 2398, CENTRO, SIMÃO DIAS/SE, 49480-000',
    '2ª VARA CÍVEL E CRIMINAL DE SIMÃO DIAS': 'FÓRUM DE SIMÃO DIAS - RODOVIA LOURIVAL BAPTISTA - SE 240, Nº 2398, CENTRO, SIMÃO DIAS/SE, 49480-000',
    '1ª VARA CÍVEL DE TOBIAS BARRETO': 'FÓRUM DE TOBIAS BARRETO - AVENIDA JOSÉ DAVI DOS SANTOS, S/N, SANTA RITA, TOBIAS BARRETO/SE, 49300-000',
    '2ª VARA CÍVEL DE TOBIAS BARRETO': 'FÓRUM DE TOBIAS BARRETO - AV. JOSÉ DAVI DOS SANTOS, S/N, SANTA RITA, TOBIAS BARRETO/SE, 49300-000',
    'UMBAÚBA': 'FÓRUM DE UMBAÚBA - RUA DES. JOSÉ NOLASCO DE CARVALHO, S/N, CENTRO, UMBAÚBA/SE, 49260-000',
    '1ª VARA DE BRASÍLIA': 'EDIFÍCIO-SEDE I - SETOR DE AUTARQUIAS SUL, QUADRA 2, BLOCO G, LOTE 8, 70070-933, BRASÍLIA – DF',
    '2ª VARA DE BRASÍLIA': 'EDIFÍCIO-SEDE I - SETOR DE AUTARQUIAS SUL, QUADRA 2, BLOCO G, LOTE 8, 70070-933, BRASÍLIA – DF',
    '3ª VARA DE BRASÍLIA': 'EDIFÍCIO-SEDE I - SETOR DE AUTARQUIAS SUL, QUADRA 2, BLOCO G, LOTE 8, 70070-933, BRASÍLIA – DF',
    '4ª VARA DE BRASÍLIA': 'EDIFÍCIO-SEDE I - SETOR DE AUTARQUIAS SUL, QUADRA 2, BLOCO G, LOTE 8, 70070-933, BRASÍLIA – DF',
    '5ª VARA DE BRASÍLIA': 'EDIFÍCIO-SEDE I - SETOR DE AUTARQUIAS SUL, QUADRA 2, BLOCO G, LOTE 8, 70070-933, BRASÍLIA – DF',
    '6ª VARA DE BRASÍLIA': 'EDIFÍCIO-SEDE I - SETOR DE AUTARQUIAS SUL, QUADRA 2, BLOCO G, LOTE 8, 70070-933, BRASÍLIA – DF',
    '7ª VARA DE BRASÍLIA': 'EDIFÍCIO-SEDE I - SETOR DE AUTARQUIAS SUL, QUADRA 2, BLOCO G, LOTE 8, 70070-933, BRASÍLIA – DF',
    '8ª VARA DE BRASÍLIA': 'EDIFÍCIO-SEDE I - SETOR DE AUTARQUIAS SUL, QUADRA 2, BLOCO G, LOTE 8, 70070-933, BRASÍLIA – DF',
    '9ª VARA DE BRASÍLIA': 'EDIFÍCIO-SEDE I - SETOR DE AUTARQUIAS SUL, QUADRA 2, BLOCO G, LOTE 8, 70070-933, BRASÍLIA – DF',
    '10ª VARA DE BRASÍLIA': 'EDIFÍCIO-SEDE III - W3 NORTE - SEPN 510, BLOCO C, 70759-900, BRASÍLIA – DF',
    '11ª VARA DE BRASÍLIA': 'EDIFÍCIO-SEDE II - SETOR DE AUTARQUIAS SUL, QUADRA 4, BLOCO D, LOTE 7, 70070-901, BRASÍLIA – DF',
    '12ª VARA DE BRASÍLIA': 'EDIFÍCIO-SEDE III - W3 NORTE - SEPN 510, BLOCO C, 70759-900, BRASÍLIA – DF',
    '13ª VARA DE BRASÍLIA': 'EDIFÍCIO-SEDE II - SETOR DE AUTARQUIAS SUL, QUADRA 4, BLOCO D, LOTE 7, 70070-901, BRASÍLIA – DF',
    '14ª VARA DE BRASÍLIA': 'EDIFÍCIO-SEDE II - SETOR DE AUTARQUIAS SUL, QUADRA 4, BLOCO D, LOTE 7, 70070-901, BRASÍLIA – DF',
    '15ª VARA DE BRASÍLIA': 'EDIFÍCIO-SEDE III - W3 NORTE - SEPN 510, BLOCO C, 70759-900, BRASÍLIA – DF',
    '16ª VARA DE BRASÍLIA': 'EDIFÍCIO-SEDE II - SETOR DE AUTARQUIAS SUL, QUADRA 4, BLOCO D, LOTE 7, 70070-901, BRASÍLIA – DF',
    '17ª VARA DE BRASÍLIA': 'EDIFÍCIO-SEDE II - SETOR DE AUTARQUIAS SUL, QUADRA 4, BLOCO D, LOTE 7, 70070-901, BRASÍLIA – DF',
    '18ª VARA DE BRASÍLIA': 'EDIFÍCIO-SEDE III - W3 NORTE - SEPN 510, BLOCO C, 70759-900, BRASÍLIA – DF',
    '19ª VARA DE BRASÍLIA': 'EDIFÍCIO-SEDE III - W3 NORTE - SEPN 510, BLOCO C, 70759-900, BRASÍLIA – DF',
    '20ª VARA DE BRASÍLIA': 'EDIFÍCIO-SEDE II - SETOR DE AUTARQUIAS SUL, QUADRA 4, BLOCO D, LOTE 7, 70070-901, BRASÍLIA – DF',
    '21ª VARA DE BRASÍLIA': 'EDIFÍCIO-SEDE II - SETOR DE AUTARQUIAS SUL, QUADRA 4, BLOCO D, LOTE 7, 70070-901, BRASÍLIA – DF',
    '22ª VARA DE BRASÍLIA': 'EDIFÍCIO-SEDE II - SETOR DE AUTARQUIAS SUL, QUADRA 4, BLOCO D, LOTE 7, 70070-901, BRASÍLIA – DF',
    '23ª VARA DE BRASÍLIA': 'EDIFÍCIO-SEDE III - W3 NORTE - SEPN 510, BLOCO C, 70759-900, BRASÍLIA – DF',
    '24ª VARA DE BRASÍLIA': 'EDIFÍCIO-SEDE III - W3 NORTE - SEPN 510, BLOCO C, 70759-900, BRASÍLIA – DF',
    '25ª VARA DE BRASÍLIA': 'EDIFÍCIO-SEDE III - W3 NORTE - SEPN 510, BLOCO C, 70759-900, BRASÍLIA – DF',
    '26ª VARA DE BRASÍLIA': 'EDIFÍCIO-SEDE III - W3 NORTE - SEPN 510, BLOCO C, 70759-900, BRASÍLIA – DF',
    '27ª VARA DE BRASÍLIA': 'EDIFÍCIO-SEDE III - W3 NORTE - SEPN 510, BLOCO C, 70759-900, BRASÍLIA – DF',
    'SUBSEÇÃO JUDICIÁRIA DE ANÁPOLIS - 1ª VARA FEDERAL': 'EDIFÍCIO-SEDE - AV. UNIVERSITÁRIA, QD. 02, LT. 05, JARDIM BANDEIRANTES, ANÁPOLIS/GO - 75083-035',
    'SUBSEÇÃO JUDICIÁRIA DE ANÁPOLIS - 2ª VARA FEDERAL': 'EDIFÍCIO-SEDE - AV. UNIVERSITÁRIA, QD. 02, LT. 05, JARDIM BANDEIRANTES, ANÁPOLIS/GO - 75083-035',
    'SUBSEÇÃO JUDICIÁRIA DE APARECIDA DE GOIÂNIA - JUIZADO ESPECIAL FEDERAL': 'EDIFÍCIO GAMA DIAS - AV. REP. LÍBANO ESQ. COM AV. B, QD. D-1, LTS. 21/30, 2º ANDAR, SETOR OESTE, GOIÂNIA/GO - 74115-030',
    'SUBSEÇÃO JUDICIÁRIA DE FORMOSA': 'EDIFÍCIO-SEDE - RUA ITIQUIRA COM RUA LINDOLFO GONÇALVES, Nº 1000, SETOR NORDESTE, FORMOSA/GO - 73807-145',
    'SUBSEÇÃO JUDICIÁRIA DE ITUMBIARA': 'EDIFÍCIO-SEDE - AV. JOÃO PAULO II, Nº 185, BAIRRO ERNESTINA BORGES DE ANDRADE, ITUMBIARA/GO - 75528-370 (TÉRREO DO EDIFÍCIO DO FÓRUM)',
    'SUBSEÇÃO JUDICIÁRIA DE JATAÍ': 'EDIFÍCIO-SEDE - RUA NICOLAU ZAIDEM, Nº 1135, QD. 45, VILA FÁTIMA - CENTRO, JATAÍ/GO - 75803-055 (ANTIGO FÓRUM DA CIDADE)',
    'SUBSEÇÃO JUDICIÁRIA DE LUZIÂNIA': 'EDIFÍCIO-SEDE - RUA DR. JOÃO TEIXEIRA, Nº 596, QD. 73, LT. 21-A, ED. IACI AMARAL, CENTRO, LUZIÂNIA/GO - 72800-440',
    'SUBSEÇÃO JUDICIÁRIA DE RIO VERDE': 'EDIFÍCIO-SEDE - AVENIDA JOSÉ WALTER, Nº 500, QUADRA 49, LOTES 10/11, SETOR MORADA DO SOL, RIO VERDE/GO - 75908-740',
    'SUBSEÇÃO JUDICIÁRIA DE URUAÇU': 'EDIFÍCIO-SEDE - AV. TOCANTINS, Nº 17, QD. 7, LT. 16, CENTRO, URUAÇU/GO - 76400-000',
    'MOGI DAS CRUZES': 'AVENIDA FERNANDO COSTA, 820 - VILA RUBENS - MOGI DAS CRUZES - SP - 08735-000',
    'CENTRAL DE CONCILIAÇÃO DA SJDF': 'EDIFÍCIO-SEDE I - ANEXO "A" - EDIFÍCIO-SEDE I - SETOR DE AUTARQUIAS SUL, QUADRA 2, BLOCO G, LOTE 8, 70070-933, BRASÍLIA – DF',
};