const tipos_intimacao_array = ["Acompanhamento comercial", "Acompanhamento Ouvidoria", "Acompanhamento redes sociais", "Acompanhar", "Acórdão", "Agravo", "Análise", "Analise comercial", "Análise de Contrato", "Análise de exigência INSS Digital", "Análise de Processo", "Análise INSS Digital", "Andamento Processual", "Apelação", "Atendimento (Externo)", "Atendimento (Interno)", "Ato Ordinatório", "Atualizar Cálculos", "Audiência Conciliatória", "Audiência de Instrução", "Audiência de Instrução e Julgamento", "Audiência de Interrogatório", "Audiência de Julgamento", "Audiência de Sustentação Oral", "Audiência Inaugural", "Audiência Razões Finais", "Audiência Una", "Cálculos", "Cálculos de Revisão", "CARGA DO PROCESSO", "Carta Comercial", "Consulta", "Contatar Cliente", "Contatar Cliente (Advogado)", "Contato Comercial", "Contrarrazões", "Cumprimento de sentença", "Cumprimento Exigência INSS Digital", "Decisão", "Demora Injustificada", "Despacho", "Diligência", "Diligência (Acompanhamento Processual)", "Diligência (Cópias)", "Diligência (Protocolo)", "Distribuir", "Elaboração de Contrato", "Elaboração de Parecer", "Elaboração de Petição", "Elaboração de Relatório", "Embargo", "Emendar", "Execução", "Exigência INSS", "Intervenção - Controle INSS Digital", "Intimação", "Lembrar Cliente", "Mandado de Segurança", "Manifestação", "Nova Entrada", "Nova Entrada Processo ADM INSS Digital", "Pedido de Prorrogação Auxílio Doença - ADM", "Pedido de Prorrogação Auxílio Doença - Judicial", "Pendências ADM", "Pendencias INSS", "Pesquisa de Jurisprudência/Doutrina", "Processo", "Processo Administrativo Indeferido", "Protocolo Aux. Doença Adm", "Protocolo de Processo Adm - Com pendência", "Protocolo de Processo Adm - INSS Digital", "Provas", "Quesitos", "Razões Finais", "Recebimento de Alvará", "Recebimento de Honorários", "Recebimento de Precatório", "Recebimento de RPV", "Recurso", "Refazer Cálculos", "Réplica", "Reunião", "Reunião com Cliente", "Reunião com Equipe", "Reunião com Sócio(s)", "Revisão de Prazo", "Revisão de Relatório", "RPV ANTIGO", "RPV TRF1 Bahia", "RPV TRF1 Brasìlia", "RPV TRF1 Goiàs", "RPV TRF5 Aracaju", "RPV TRF5 Estância", "Sentença", "Sessão de Julgamento", "SMS e WhatsApp", "Sustentação Oral", "Tarefa Encerrada Sem Providência Acompanhamento comercial", "Acompanhamento Ouvidoria", "Acompanhamento redes sociais", "Acompanhar", "Acórdão", "Agravo", "Análise", "Analise comercial", "Análise de Contrato", "Análise de exigência INSS Digital", "Análise de Processo", "Análise INSS Digital", "Andamento Processual", "Apelação", "Atendimento (Externo)", "Atendimento (Interno)", "Ato Ordinatório", "Atualizar Cálculos", "Audiência Conciliatória", "Audiência de Instrução", "Audiência de Instrução e Julgamento", "Audiência de Interrogatório", "Audiência de Julgamento", "Audiência de Sustentação Oral", "Audiência Inaugural", "Audiência Razões Finais", "Audiência Una", "Cálculos", "Cálculos de Revisão", "CARGA DO PROCESSO", "Carta Comercial", "Consulta", "Contatar Cliente", "Contatar Cliente (Advogado)", "Contato Comercial", "Contrarrazões", "Cumprimento de sentença", "Cumprimento Exigência INSS Digital", "Decisão", "Demora Injustificada", "Despacho", "Diligência", "Diligência (Acompanhamento Processual)", "Diligência (Cópias)", "Diligência (Protocolo)", "Distribuir", "Elaboração de Contrato", "Elaboração de Parecer", "Elaboração de Petição", "Elaboração de Relatório", "Embargo", "Emendar", "Execução", "Exigência INSS", "Intervenção - Controle INSS Digital", "Intimação", "Lembrar Cliente", "Mandado de Segurança", "Manifestação", "Nova Entrada", "Nova Entrada Processo ADM INSS Digital", "Pedido de Prorrogação Auxílio Doença - ADM", "Pedido de Prorrogação Auxílio Doença - Judicial", "Pendências ADM", "Pendencias INSS", "Pesquisa de Jurisprudência/Doutrina", "Processo", "Processo Administrativo Indeferido", "Protocolo Aux. Doença Adm", "Protocolo de Processo Adm - Com pendência", "Protocolo de Processo Adm - INSS Digital", "Provas", "Quesitos", "Razões Finais", "Recebimento de Alvará", "Recebimento de Honorários", "Recebimento de Precatório", "Recebimento de RPV", "Recurso", "Refazer Cálculos", "Réplica", "Reunião", "Reunião com Cliente", "Reunião com Equipe", "Reunião com Sócio(s)", "Revisão de Prazo", "Revisão de Relatório", "RPV ANTIGO", "RPV TRF1 Bahia", "RPV TRF1 Brasìlia", "RPV TRF1 Goiàs", "RPV TRF5 Aracaju", "RPV TRF5 Estância", "Sentença", "Sessão de Julgamento", "SMS e WhatsApp", "Sustentação Oral", "Tarefa Encerrada Sem Providência"]

const colaboradores = ["ALÃ FEITOSA CARVALHO", "ALINE RIBEIRO", "ANA CAROLINA SOARES DE MELO", "ANTONIO RABELO NOLES DE ABREU", "ASLEY RODRIGO DE MELO LIMA", "BRUNO PRADO GUIMARAES", "CARLOS HENRIQUE ESPASIANI", "CARLOS ROBERTO SANTOS ARAUJO DA SILVA", "CLARA IRLAN NASCIMENTO OLIVEIRA HOLANDA CAVALCANTI", "CLAUDIO VICTOR NETO LIMA", "CRISTINA BEZERRA DA SILVA", "DANIEL CABRAL PEREIRA SANTOS", "DANIEL DE ALBUQUERQUE FRANCO OLIVEIRA", "DIEGO HENRIQUE GOMES SOARES", "DIEGO MELO SOBRINHO", "EUNICE DOS SANTOS", "FABIO RIBEIRO", "FELIPE PANTA CARDOSO", "Fernando Batista", "FERNANDO HENRIQUE BARBOZA NASCIMENTO", "FLAVIO LUCAS LIMA SOUZA", "GABRIEL FRANÇA VITAL", "GISELMA DOS SANTOS", "GLENISSON NASCIMENTO", "GUILHERME JASMIM", "HENYR GOIS DOS SANTOS", "ITALO DE ANDRADE BEZERRA", "JOÃO FERNANDO MAIA REZENDE FILHO", "JOAO PEDRO AMARAL BELFORT", "JOAO PEDRO DOS SANTOS", "JULIANO OLIVEIRA DE SOUZA", "KARINE LIMA MARTINS", "KEVEN FARO DE CARVALHO", "LAIS PEREIRA MORAES", "LAYNE DA SILVA GOIS", "LEANDRO SANTOS", "LETYCIA GABRIELLY SOUSA SANTANA", "LUCIANA DOS SANTOS ARAUJO", "LUCIANA LIMA REZENDE", "MARCOS ROBERT DE MELO LIMA", "MARCUS VINICIUS DE SOUZA MORAIS", "MATEUS DOS SANTOS SILVA", "MATHEUS CORREIA SANTOS", "MATHEUS MATOS BARRETO", "MICKAEL DE LIMA", "MIQUEAS CAMPOS DA SILVA", "OSMAR SILVA VIANA", "OVERLANDIA SANTOS MELO", "PATRICIA ANDRE SIMÃO DE SOUZA", "PAULO VICTOR SANTANA TEIXEIRA", "PAUTISTA BRASILIA ADVOGADOS", "PAUTISTA CIVEL ADVOGADOS", "PAUTISTA PREVIDENCIARIO ADVOGADOS", "PAUTISTA TRABALHISTA ADVOGADOS", "PEDRO MURILO LIMA ALMEIDA", "RODRIGO AGUIAR SANTOS", "RUAN APARICIO DOS SANTOS", "SAMARA ALBUQUERQUE CRUZ", "SANDOVAL FILHO CORREIA LIMA FILHO", "SARA GONÇALVES PINHEIRO", "SILVANIA PINHEIRO DE LEMOS", "Suporte Fábrica de Tempo", "THALYS RENAN GOMES OLIVEIRA", "TRICYA MATEUS ROLEMBERG", "VICTOR HUGO SOUSA ANDRADE", "VICTOR MENDES DOS SANTOS", "VINICIUS EDUARDO DOS SANTOS RAMOS", "VITÓRIA MIRELLY ALVES BARBOSA", "VOLNANDY JOSE MENEZES BRITO", "WENDEL CARLOS SANTOS", "WILKE RODRIGUES DE JESUS", "XERXES MATIAS PEREIRA", "YANN DIAS NUNES", "YURI DIAS PEREIRA"]

const parceiros = ['ADRIANA ( PARCEIRO)', 'AGENOR (PARCEIRO)', 'ALDOMIRO ( PARCEIRO)', 'ALEX MEDEIROS( PARCEIRO BRASILIA)', 'ALINE', 'ALISSON DE AREIA BRANCA ( PARCEIRO)', 'ALISSON SANTA MARIA ( PARCEIRO)', 'ALUISIO ( PARCEIRO)', 'ANA CRISTINA DA SILVA (PARCEIRA)', 'ANA SUELY ( FILHA DE BOTAFOGO)', 'ANDERSON ( PARCEIRO JAPARATUBA)', 'ANDREIA SILVA (PARCEIRA)', 'ANTONIO AVELINO DOS ANJOS ( PARCEIRO)', 'ANTONIO CAPELA ( PARCEIRO)', 'ANTONIO DEZIDERIO ( PARCEIRO)', 'ANTONIO FRANCISCO ( PARCEIRO)', 'ANTONIO JOSE PEREIRA', 'ANTONIO UMBAUBA ( PARCEIRO)', 'ASSIS- PORTO DO MATO ( PARCEIRO)', 'ASSOCIAÇÃO SEPE- TIARAJU', 'AUGUSTO ( PARCEIRO)', 'BARBARA ( PARCEIRO)', 'BOTAFOGO ( PARCEIRO)', 'CANDIDO ( PARCEIRO)', 'CARLA DANIELLE', 'CARLOS AUGUSTO ( PARCEIRO)', 'CAROL CUNHADA DE DR.DIEGO', 'CHUCHU ( PARCEIRO)', 'CIDA RECANTO DAS EMAS ( PARCEIRO)', 'CLOVIS CORREIOS ( PARCEIRO)', 'CRISTIANO SAMAMBAIA ( PARCEIRO)', 'D. GLEIDE ( PARCEIRO)', 'D. NENGA ( PARCEIRO)', 'D.ANA ARACAJU ( PARCEIRO)', 'D.JURA ( PARCEIRA)', 'D.LÓ ( PARCEIRO)', 'D.VÂNIA ( PARCEIRO)', 'DANIEL DE JESUS ( PARCEIRO)', 'DAVI JAPARATUBA ( PARCEIRO)', 'DAVI SANTA MARIA ( PARCEIRO)', 'DELFINA ( PARCEIRO)', 'DIELLE ( PARCEIRO)', 'DOMICIO ( PARCEIRO)', 'DR VANESSA', 'DR. MARCUS', 'DURVAL ( PARCEIRO)', 'EDILEUZA DOS SANTOS ( PARCEIRA)', 'EDMILSON POÇO REDONDO ( PARCEIRO)', 'EDMILSON BRASILIA ( PARCEIRO)', 'EDSON BEZERRA (PARCEIRO BRASILIA)', 'EDSON DE SOUZA SANTOS ARACAJU (PARCEIRO)', 'EDUARDO AMORIM DE LIMA', 'ELISVAN JARDIM COSTA( PARCEIRO)', 'ELIZANGELA ( PARCEIRA)', 'ELIZEU ( PARCEIRO)', 'EMANOEL', 'ERMINIO', 'ESCRITÓRIO', 'ETELVINO ( PARCEIRO)', 'EVANDRO ( PARCEIRO)', 'FABIO BERTO( PARCEIRO)', 'FRANCISCO JEAN (BODE)', 'FRANCISCO RODRIGUES BRASILIA ( PARCEIRO)', 'GAMA ( PARCEIRO)', 'GEOVANE', 'GILBERTO', 'GILDETE SILVEIRA', 'HERMES', 'HERNI', 'IVANEIDE SILVA SANTOS', 'JAILTON LEANDRO DOS SANTOS', 'JAIR', 'JAIR/OSMAR', 'JOACIR', 'JOSE ANTONIO VIEIRA ( PARCEIRO BRASILIA)', 'JOSE CARLOS SANTOS SILVA', 'JOSE CLAUDIO ( PARCEIRO)', 'JOSE DE JESUS', 'JOSE EDJANIO', 'JOSE ENEAS', 'JOSE FERREIRA NETO', 'JOSÉ JALDO', 'JOSE MARCOS CRUZ (PARCEIROS)', 'JOSE NOEL DE SANTANA JUNIOR', 'JOSE SERGIO', 'JOSE SILVA (POV. PREGUIÇA)', 'JOSE VALDO', 'JOSE VALTER', 'JOSELITO MARINHA ( PARCEIRO)', 'JUSTINO', 'KEILA', 'LEONCIO', 'LUCIA', 'MANOEL RICARDO', 'MARIA DE FATIMA', 'MARIA DO AÇAI', 'MARIA DO AMPARO REDUZINO', 'MARIA DO CARMO', 'MARIA DO PICOLÉ', 'MARIA DO POV. PREGUIÇA', 'MARIA GEDALVA SANTOS ( PARCEIRA)', 'MARIA JOSE ( SANTA ROSA DE LIMA)', 'MARIA JOSE-GUILHERME', 'MARIAZINHA (Tia do Osmar)', 'MARILDES DO INCRA', 'MARLENE (ASSOCIAÇÃO MÃO QUE CRIAM)', 'MARLUCIA ( MULTIRÃO JOAO ALVES)', 'MIGUEL DO SINTRA', 'NEGONA FILÉ', 'NEIDE', 'NICE', 'NIVALDO', 'OMAQ( ASSOCIAÇÃO BRASILIA)', 'ORLANDO FIGUEIREDO DE ARAUJO', 'OSMAR', 'PASTOR ELIAS', 'PASTOR JOÃO', 'PAULO MARTINS', 'RABELO', 'RAIMUNDO VIEIRA', 'RIBAMAR', 'RILDO', 'ROBERTO RODRIGUES', 'RODRIGO DPVAT', 'ROSARIO', 'RUBEM', 'SELMA XEROX', 'SUZANE - MALHADOR ( PARCEIRA)', 'SUZANETE', 'TACIO ( CAMPO DE BRITO)', 'TEREZINHA ( PORTO RICO) PARCEIRO', 'VALMIR DE JESUS (PARCEIRO)', 'VARLEN ( PARCEIRO)', 'VERA ( CONDE)', 'VILMA', 'WALTER', 'WILSON- MALHADOR ( PARCEIRO)', 'XAROPINHO (PARCEIRO)', 'ZE NEGUINHO', 'ZEZINHO']

const aracaju = [
    {
        "Destino": "Moita Bonita",
        "Resposta": {
            "destination_addresses": [
                "Moita Bonita - SE, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "63,6 km",
                                "value": 63623
                            },
                            "duration": {
                                "text": "1 hora 14 minutos",
                                "value": 4431
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Amparo de São Francisco",
        "Resposta": {
            "destination_addresses": [
                "Amparo de São Francisco, Amparo do São Francisco - SE, 49920-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "129 km",
                                "value": 128891
                            },
                            "duration": {
                                "text": "2 horas 12 minutos",
                                "value": 7947
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Neópolis",
        "Resposta": {
            "destination_addresses": [
                "Neópolis, SE, 49980-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "126 km",
                                "value": 126288
                            },
                            "duration": {
                                "text": "2 horas 6 minutos",
                                "value": 7553
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Santana do São Francisco",
        "Resposta": {
            "destination_addresses": [
                "Santana do São Francisco, SE, 49985-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "129 km",
                                "value": 129124
                            },
                            "duration": {
                                "text": "2 horas 11 minutos",
                                "value": 7839
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Campo do Brito",
        "Resposta": {
            "destination_addresses": [
                "Campo do Brito, SE, 49520-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "65,8 km",
                                "value": 65786
                            },
                            "duration": {
                                "text": "1 hora 12 minutos",
                                "value": 4347
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Cedro de São João",
        "Resposta": {
            "destination_addresses": [
                "Cedro de São João, SE, 49930-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "119 km",
                                "value": 119031
                            },
                            "duration": {
                                "text": "1 hora 58 minutos",
                                "value": 7105
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Cristinápolis",
        "Resposta": {
            "destination_addresses": [
                "Cristinápolis, SE, 49270-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "117 km",
                                "value": 116933
                            },
                            "duration": {
                                "text": "1 hora 52 minutos",
                                "value": 6696
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Tomar do Geru",
        "Resposta": {
            "destination_addresses": [
                "Tomar do Geru, SE, 49280-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "134 km",
                                "value": 134054
                            },
                            "duration": {
                                "text": "2 horas 18 minutos",
                                "value": 8255
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pacatuba",
        "Resposta": {
            "destination_addresses": [
                "Pacatuba, SE, 49970-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "97,0 km",
                                "value": 96966
                            },
                            "duration": {
                                "text": "1 hora 58 minutos",
                                "value": 7093
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Itabaiana",
        "Resposta": {
            "destination_addresses": [
                "Itabaiana, SE, 49500-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "55,8 km",
                                "value": 55761
                            },
                            "duration": {
                                "text": "1 hora 3 minutos",
                                "value": 3760
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Indiaroba",
        "Resposta": {
            "destination_addresses": [
                "Indiaroba, SE, 49250-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "96,2 km",
                                "value": 96200
                            },
                            "duration": {
                                "text": "1 hora 39 minutos",
                                "value": 5915
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Carmópolis",
        "Resposta": {
            "destination_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "59,8 km",
                                "value": 59788
                            },
                            "duration": {
                                "text": "1 hora 13 minutos",
                                "value": 4402
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Boquim",
        "Resposta": {
            "destination_addresses": [
                "Boquim, SE, 49360-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "83,0 km",
                                "value": 83028
                            },
                            "duration": {
                                "text": "1 hora 25 minutos",
                                "value": 5071
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Frei Paulo",
        "Resposta": {
            "destination_addresses": [
                "Frei Paulo - SE, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "75,8 km",
                                "value": 75770
                            },
                            "duration": {
                                "text": "1 hora 21 minutos",
                                "value": 4879
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Itabi",
        "Resposta": {
            "destination_addresses": [
                "Itabi, SE, 49870-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "132 km",
                                "value": 131675
                            },
                            "duration": {
                                "text": "2 horas 20 minutos",
                                "value": 8424
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora das Dores",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. das Dores, SE, 49600-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "69,4 km",
                                "value": 69421
                            },
                            "duration": {
                                "text": "1 hora 20 minutos",
                                "value": 4773
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Muribeca",
        "Resposta": {
            "destination_addresses": [
                "Muribeca, SE, 49780-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "95,4 km",
                                "value": 95375
                            },
                            "duration": {
                                "text": "1 hora 44 minutos",
                                "value": 6216
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Brejo Grande",
        "Resposta": {
            "destination_addresses": [
                "Brejo Grande, SE, 49995-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "107 km",
                                "value": 107162
                            },
                            "duration": {
                                "text": "2 horas 6 minutos",
                                "value": 7580
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Itaporanga d'Ajuda",
        "Resposta": {
            "destination_addresses": [
                "Itaporanga d'Ajuda - SE, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "33,3 km",
                                "value": 33281
                            },
                            "duration": {
                                "text": "37 minutos",
                                "value": 2216
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Divina Pastora",
        "Resposta": {
            "destination_addresses": [
                "Divina Pastora, SE, 49650-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "40,4 km",
                                "value": 40364
                            },
                            "duration": {
                                "text": "47 minutos",
                                "value": 2813
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Feira Nova",
        "Resposta": {
            "destination_addresses": [
                "Feira Nova - SE, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "100 km",
                                "value": 100333
                            },
                            "duration": {
                                "text": "1 hora 49 minutos",
                                "value": 6529
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Santa Luzia do Itanhy",
        "Resposta": {
            "destination_addresses": [
                "Santa Luzia do Itanhy, SE, 49230-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "79,7 km",
                                "value": 79660
                            },
                            "duration": {
                                "text": "1 hora 16 minutos",
                                "value": 4548
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Barra dos Coqueiros",
        "Resposta": {
            "destination_addresses": [
                "Barra dos Coqueiros, SE, 49140-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "8,9 km",
                                "value": 8935
                            },
                            "duration": {
                                "text": "18 minutos",
                                "value": 1104
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Rosário do Catete",
        "Resposta": {
            "destination_addresses": [
                "Rosário do Catete, SE, 49760-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "48,8 km",
                                "value": 48827
                            },
                            "duration": {
                                "text": "59 minutos",
                                "value": 3540
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Simão Dias",
        "Resposta": {
            "destination_addresses": [
                "Simão Dias, SE, 49480-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "105 km",
                                "value": 104879
                            },
                            "duration": {
                                "text": "1 hora 53 minutos",
                                "value": 6757
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Santa Rosa de Lima",
        "Resposta": {
            "destination_addresses": [
                "Santa Rosa de Lima, SE, 49640-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "42,3 km",
                                "value": 42300
                            },
                            "duration": {
                                "text": "49 minutos",
                                "value": 2958
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Monte Alegre de Sergipe",
        "Resposta": {
            "destination_addresses": [
                "Monte Alegre de Sergipe, SE, 49690-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "146 km",
                                "value": 146128
                            },
                            "duration": {
                                "text": "2 horas 35 minutos",
                                "value": 9304
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Cristóvão",
        "Resposta": {
            "destination_addresses": [
                "São Cristóvão - SE, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "22,7 km",
                                "value": 22715
                            },
                            "duration": {
                                "text": "33 minutos",
                                "value": 1973
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Canindé de São Francisco",
        "Resposta": {
            "destination_addresses": [
                "Canindé de São Francisco, SE, 49820-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "196 km",
                                "value": 196192
                            },
                            "duration": {
                                "text": "3 horas 28 minutos",
                                "value": 12484
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Japoatã",
        "Resposta": {
            "destination_addresses": [
                "Japoatã, SE, 49950-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "101 km",
                                "value": 101293
                            },
                            "duration": {
                                "text": "1 hora 45 minutos",
                                "value": 6288
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Carira",
        "Resposta": {
            "destination_addresses": [
                "Carira, SE, 49550-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "112 km",
                                "value": 112104
                            },
                            "duration": {
                                "text": "1 hora 48 minutos",
                                "value": 6452
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Lagarto",
        "Resposta": {
            "destination_addresses": [
                "Lagarto - SE, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "79,0 km",
                                "value": 78950
                            },
                            "duration": {
                                "text": "1 hora 24 minutos",
                                "value": 5025
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Cumbe",
        "Resposta": {
            "destination_addresses": [
                "Cumbe, SE, 49660-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "86,4 km",
                                "value": 86414
                            },
                            "duration": {
                                "text": "1 hora 39 minutos",
                                "value": 5929
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Japaratuba",
        "Resposta": {
            "destination_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "58,2 km",
                                "value": 58222
                            },
                            "duration": {
                                "text": "1 hora 8 minutos",
                                "value": 4067
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Graccho Cardoso",
        "Resposta": {
            "destination_addresses": [
                "Gracho Cardoso - SE, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "113 km",
                                "value": 113143
                            },
                            "duration": {
                                "text": "2 horas 0 minutos",
                                "value": 7205
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "General Maynard",
        "Resposta": {
            "destination_addresses": [
                "Gen. Maynard, SE, 49750-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "57,3 km",
                                "value": 57337
                            },
                            "duration": {
                                "text": "1 hora 12 minutos",
                                "value": 4298
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Gararu",
        "Resposta": {
            "destination_addresses": [
                "Gararu, SE, 49830-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "155 km",
                                "value": 154973
                            },
                            "duration": {
                                "text": "2 horas 42 minutos",
                                "value": 9690
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Canhoba",
        "Resposta": {
            "destination_addresses": [
                "Canhoba, SE, 49880-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "131 km",
                                "value": 130715
                            },
                            "duration": {
                                "text": "2 horas 13 minutos",
                                "value": 7961
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Miguel do Aleixo",
        "Resposta": {
            "destination_addresses": [
                "São Miguel do Aleixo, SE, 49535-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "104 km",
                                "value": 103571
                            },
                            "duration": {
                                "text": "1 hora 50 minutos",
                                "value": 6600
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Poço Redondo",
        "Resposta": {
            "destination_addresses": [
                "Poço Redondo - SE, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "175 km",
                                "value": 175312
                            },
                            "duration": {
                                "text": "3 horas 7 minutos",
                                "value": 11205
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Aquidabã",
        "Resposta": {
            "destination_addresses": [
                "Aquidabã, SE, 49790-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "108 km",
                                "value": 108278
                            },
                            "duration": {
                                "text": "1 hora 56 minutos",
                                "value": 6985
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Aracaju",
        "Resposta": {
            "destination_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "1 m",
                                "value": 0
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 0
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Porto da Folha",
        "Resposta": {
            "destination_addresses": [
                "Porto da Folha, SE, 49800-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "152 km",
                                "value": 152458
                            },
                            "duration": {
                                "text": "3 horas 1 minuto",
                                "value": 10832
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Capela",
        "Resposta": {
            "destination_addresses": [
                "Capela - SE, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "79,8 km",
                                "value": 79766
                            },
                            "duration": {
                                "text": "1 hora 30 minutos",
                                "value": 5388
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Umbaúba",
        "Resposta": {
            "destination_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "101 km",
                                "value": 100993
                            },
                            "duration": {
                                "text": "1 hora 36 minutos",
                                "value": 5775
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Riachão do Dantas",
        "Resposta": {
            "destination_addresses": [
                "Riachão do Dantas - SE, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "98,4 km",
                                "value": 98405
                            },
                            "duration": {
                                "text": "1 hora 42 minutos",
                                "value": 6122
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pedra Mole",
        "Resposta": {
            "destination_addresses": [
                "Pedra Mole, SE, 49512-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "97,4 km",
                                "value": 97450
                            },
                            "duration": {
                                "text": "1 hora 39 minutos",
                                "value": 5923
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Siriri",
        "Resposta": {
            "destination_addresses": [
                "Siriri, SE, 49630-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "51,3 km",
                                "value": 51281
                            },
                            "duration": {
                                "text": "1 hora 0 minutos",
                                "value": 3605
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Santo Amaro das Brotas",
        "Resposta": {
            "destination_addresses": [
                "Santo Amaro das Brotas, SE, 49180-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "42,3 km",
                                "value": 42278
                            },
                            "duration": {
                                "text": "54 minutos",
                                "value": 3267
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Malhador",
        "Resposta": {
            "destination_addresses": [
                "Malhador, SE, 49570-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "50,4 km",
                                "value": 50376
                            },
                            "duration": {
                                "text": "1 hora 0 minutos",
                                "value": 3600
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Maruim",
        "Resposta": {
            "destination_addresses": [
                "Maruim - SE, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "43,1 km",
                                "value": 43141
                            },
                            "duration": {
                                "text": "54 minutos",
                                "value": 3213
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pinhão",
        "Resposta": {
            "destination_addresses": [
                "Pinhão - SE, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "98,2 km",
                                "value": 98191
                            },
                            "duration": {
                                "text": "1 hora 37 minutos",
                                "value": 5839
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Tobias Barreto",
        "Resposta": {
            "destination_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "131 km",
                                "value": 130823
                            },
                            "duration": {
                                "text": "2 horas 9 minutos",
                                "value": 7711
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Propriá",
        "Resposta": {
            "destination_addresses": [
                "Propriá, SE, 49900-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "110 km",
                                "value": 110285
                            },
                            "duration": {
                                "text": "1 hora 52 minutos",
                                "value": 6746
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Malhada dos Bois",
        "Resposta": {
            "destination_addresses": [
                "Malhada dos Bois, SE, 49940-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "94,1 km",
                                "value": 94090
                            },
                            "duration": {
                                "text": "1 hora 41 minutos",
                                "value": 6063
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Areia Branca",
        "Resposta": {
            "destination_addresses": [
                "Areia Branca - SE, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "37,2 km",
                                "value": 37170
                            },
                            "duration": {
                                "text": "41 minutos",
                                "value": 2441
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pirambu",
        "Resposta": {
            "destination_addresses": [
                "Pirambu - SE, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "39,1 km",
                                "value": 39136
                            },
                            "duration": {
                                "text": "50 minutos",
                                "value": 2983
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Francisco",
        "Resposta": {
            "destination_addresses": [
                "São Francisco - SE, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "92,2 km",
                                "value": 92196
                            },
                            "duration": {
                                "text": "1 hora 37 minutos",
                                "value": 5804
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Domingos",
        "Resposta": {
            "destination_addresses": [
                "São Domingos - SE, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "77,1 km",
                                "value": 77068
                            },
                            "duration": {
                                "text": "1 hora 26 minutos",
                                "value": 5162
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Macambira",
        "Resposta": {
            "destination_addresses": [
                "Macambira, SE, 49565-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "74,7 km",
                                "value": 74713
                            },
                            "duration": {
                                "text": "1 hora 22 minutos",
                                "value": 4944
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora da Glória",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. da Glória, SE, 49680-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "117 km",
                                "value": 117351
                            },
                            "duration": {
                                "text": "2 horas 4 minutos",
                                "value": 7464
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora de Lourdes",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. de Lourdes - SE, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "144 km",
                                "value": 144330
                            },
                            "duration": {
                                "text": "2 horas 26 minutos",
                                "value": 8747
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Riachuelo",
        "Resposta": {
            "destination_addresses": [
                "Riachuelo - SE, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "30,7 km",
                                "value": 30731
                            },
                            "duration": {
                                "text": "35 minutos",
                                "value": 2099
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Arauá",
        "Resposta": {
            "destination_addresses": [
                "Arauá, SE, 49220-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "98,2 km",
                                "value": 98223
                            },
                            "duration": {
                                "text": "1 hora 37 minutos",
                                "value": 5845
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora do Socorro",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. do Socorro, SE, 49160-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "16,0 km",
                                "value": 16026
                            },
                            "duration": {
                                "text": "22 minutos",
                                "value": 1321
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Laranjeiras",
        "Resposta": {
            "destination_addresses": [
                "Laranjeiras - SE, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "22,8 km",
                                "value": 22773
                            },
                            "duration": {
                                "text": "29 minutos",
                                "value": 1765
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Salgado",
        "Resposta": {
            "destination_addresses": [
                "Salgado - SE, 49390-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "54,3 km",
                                "value": 54253
                            },
                            "duration": {
                                "text": "53 minutos",
                                "value": 3157
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Itabaianinha",
        "Resposta": {
            "destination_addresses": [
                "Itabaianinha, SE, 49290-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "121 km",
                                "value": 120718
                            },
                            "duration": {
                                "text": "2 horas 1 minuto",
                                "value": 7245
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pedrinhas",
        "Resposta": {
            "destination_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "90,9 km",
                                "value": 90873
                            },
                            "duration": {
                                "text": "1 hora 33 minutos",
                                "value": 5595
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Estância",
        "Resposta": {
            "destination_addresses": [
                "Estância - SE, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "69,9 km",
                                "value": 69907
                            },
                            "duration": {
                                "text": "1 hora 7 minutos",
                                "value": 4002
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Ilha das Flores",
        "Resposta": {
            "destination_addresses": [
                "Ilha das Flores - SE, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "104 km",
                                "value": 103903
                            },
                            "duration": {
                                "text": "2 horas 6 minutos",
                                "value": 7544
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora Aparecida",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. Aparecida - SE, 49540-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "94,6 km",
                                "value": 94639
                            },
                            "duration": {
                                "text": "1 hora 40 minutos",
                                "value": 6019
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Ribeirópolis",
        "Resposta": {
            "destination_addresses": [
                "Ribeirópolis, SE, 49530-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "76,9 km",
                                "value": 76894
                            },
                            "duration": {
                                "text": "1 hora 23 minutos",
                                "value": 4989
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Poço Verde",
        "Resposta": {
            "destination_addresses": [
                "Poço Verde, SE, 49490-000, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "150 km",
                                "value": 149583
                            },
                            "duration": {
                                "text": "2 horas 39 minutos",
                                "value": 9531
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Telha",
        "Resposta": {
            "destination_addresses": [
                "Telha - SE, Brasil"
            ],
            "origin_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "119 km",
                                "value": 119143
                            },
                            "duration": {
                                "text": "2 horas 3 minutos",
                                "value": 7353
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    }
]

const estancia = [
    {
        "Destino": "Santa Luzia do Itanhy",
        "Resposta": {
            "destination_addresses": [
                "Santa Luzia do Itanhy, SE, 49230-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "10,8 km",
                                "value": 10843
                            },
                            "duration": {
                                "text": "14 minutos",
                                "value": 823
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Simão Dias",
        "Resposta": {
            "destination_addresses": [
                "Simão Dias, SE, 49480-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "92,7 km",
                                "value": 92702
                            },
                            "duration": {
                                "text": "1 hora 40 minutos",
                                "value": 6008
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Moita Bonita",
        "Resposta": {
            "destination_addresses": [
                "Moita Bonita - SE, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "116 km",
                                "value": 116252
                            },
                            "duration": {
                                "text": "1 hora 52 minutos",
                                "value": 6746
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Ribeirópolis",
        "Resposta": {
            "destination_addresses": [
                "Ribeirópolis, SE, 49530-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "130 km",
                                "value": 129523
                            },
                            "duration": {
                                "text": "2 horas 2 minutos",
                                "value": 7305
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Campo do Brito",
        "Resposta": {
            "destination_addresses": [
                "Campo do Brito, SE, 49520-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "93,6 km",
                                "value": 93606
                            },
                            "duration": {
                                "text": "1 hora 35 minutos",
                                "value": 5706
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Maruim",
        "Resposta": {
            "destination_addresses": [
                "Maruim - SE, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "109 km",
                                "value": 108923
                            },
                            "duration": {
                                "text": "1 hora 50 minutos",
                                "value": 6609
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Porto da Folha",
        "Resposta": {
            "destination_addresses": [
                "Porto da Folha, SE, 49800-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "205 km",
                                "value": 205087
                            },
                            "duration": {
                                "text": "3 horas 39 minutos",
                                "value": 13148
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora da Glória",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. da Glória, SE, 49680-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "170 km",
                                "value": 169980
                            },
                            "duration": {
                                "text": "2 horas 43 minutos",
                                "value": 9780
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Rosário do Catete",
        "Resposta": {
            "destination_addresses": [
                "Rosário do Catete, SE, 49760-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "115 km",
                                "value": 114609
                            },
                            "duration": {
                                "text": "1 hora 56 minutos",
                                "value": 6936
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Japoatã",
        "Resposta": {
            "destination_addresses": [
                "Japoatã, SE, 49950-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "167 km",
                                "value": 166620
                            },
                            "duration": {
                                "text": "2 horas 35 minutos",
                                "value": 9291
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Brejo Grande",
        "Resposta": {
            "destination_addresses": [
                "Brejo Grande, SE, 49995-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "173 km",
                                "value": 172944
                            },
                            "duration": {
                                "text": "3 horas 3 minutos",
                                "value": 10976
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Muribeca",
        "Resposta": {
            "destination_addresses": [
                "Muribeca, SE, 49780-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "161 km",
                                "value": 160702
                            },
                            "duration": {
                                "text": "2 horas 34 minutos",
                                "value": 9219
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Riachuelo",
        "Resposta": {
            "destination_addresses": [
                "Riachuelo - SE, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "83,4 km",
                                "value": 83360
                            },
                            "duration": {
                                "text": "1 hora 14 minutos",
                                "value": 4415
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Umbaúba",
        "Resposta": {
            "destination_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "32,2 km",
                                "value": 32176
                            },
                            "duration": {
                                "text": "34 minutos",
                                "value": 2050
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Carira",
        "Resposta": {
            "destination_addresses": [
                "Carira, SE, 49550-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "149 km",
                                "value": 148921
                            },
                            "duration": {
                                "text": "2 horas 28 minutos",
                                "value": 8880
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Graccho Cardoso",
        "Resposta": {
            "destination_addresses": [
                "Gracho Cardoso - SE, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "166 km",
                                "value": 165772
                            },
                            "duration": {
                                "text": "2 horas 39 minutos",
                                "value": 9520
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Japaratuba",
        "Resposta": {
            "destination_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "129 km",
                                "value": 129407
                            },
                            "duration": {
                                "text": "2 horas 4 minutos",
                                "value": 7456
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Santa Rosa de Lima",
        "Resposta": {
            "destination_addresses": [
                "Santa Rosa de Lima, SE, 49640-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "94,9 km",
                                "value": 94929
                            },
                            "duration": {
                                "text": "1 hora 28 minutos",
                                "value": 5273
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "General Maynard",
        "Resposta": {
            "destination_addresses": [
                "Gen. Maynard, SE, 49750-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "128 km",
                                "value": 127968
                            },
                            "duration": {
                                "text": "2 horas 7 minutos",
                                "value": 7643
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Siriri",
        "Resposta": {
            "destination_addresses": [
                "Siriri, SE, 49630-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "104 km",
                                "value": 103910
                            },
                            "duration": {
                                "text": "1 hora 39 minutos",
                                "value": 5920
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pedrinhas",
        "Resposta": {
            "destination_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "35,1 km",
                                "value": 35061
                            },
                            "duration": {
                                "text": "42 minutos",
                                "value": 2521
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Malhador",
        "Resposta": {
            "destination_addresses": [
                "Malhador, SE, 49570-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "103 km",
                                "value": 103005
                            },
                            "duration": {
                                "text": "1 hora 39 minutos",
                                "value": 5916
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Macambira",
        "Resposta": {
            "destination_addresses": [
                "Macambira, SE, 49565-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "103 km",
                                "value": 102587
                            },
                            "duration": {
                                "text": "1 hora 45 minutos",
                                "value": 6313
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pacatuba",
        "Resposta": {
            "destination_addresses": [
                "Pacatuba, SE, 49970-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "163 km",
                                "value": 162748
                            },
                            "duration": {
                                "text": "2 horas 55 minutos",
                                "value": 10489
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Cumbe",
        "Resposta": {
            "destination_addresses": [
                "Cumbe, SE, 49660-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "139 km",
                                "value": 139043
                            },
                            "duration": {
                                "text": "2 horas 17 minutos",
                                "value": 8245
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Cedro de São João",
        "Resposta": {
            "destination_addresses": [
                "Cedro de São João, SE, 49930-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "184 km",
                                "value": 184358
                            },
                            "duration": {
                                "text": "2 horas 48 minutos",
                                "value": 10107
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pedra Mole",
        "Resposta": {
            "destination_addresses": [
                "Pedra Mole, SE, 49512-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "119 km",
                                "value": 118999
                            },
                            "duration": {
                                "text": "2 horas 11 minutos",
                                "value": 7877
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Frei Paulo",
        "Resposta": {
            "destination_addresses": [
                "Frei Paulo - SE, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "128 km",
                                "value": 128399
                            },
                            "duration": {
                                "text": "2 horas 0 minutos",
                                "value": 7195
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Miguel do Aleixo",
        "Resposta": {
            "destination_addresses": [
                "São Miguel do Aleixo, SE, 49535-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "156 km",
                                "value": 156200
                            },
                            "duration": {
                                "text": "2 horas 29 minutos",
                                "value": 8915
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Tobias Barreto",
        "Resposta": {
            "destination_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "84,8 km",
                                "value": 84754
                            },
                            "duration": {
                                "text": "1 hora 29 minutos",
                                "value": 5337
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pinhão",
        "Resposta": {
            "destination_addresses": [
                "Pinhão - SE, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "116 km",
                                "value": 116441
                            },
                            "duration": {
                                "text": "2 horas 2 minutos",
                                "value": 7306
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Neópolis",
        "Resposta": {
            "destination_addresses": [
                "Neópolis, SE, 49980-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "192 km",
                                "value": 191615
                            },
                            "duration": {
                                "text": "2 horas 56 minutos",
                                "value": 10556
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Monte Alegre de Sergipe",
        "Resposta": {
            "destination_addresses": [
                "Monte Alegre de Sergipe, SE, 49690-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "199 km",
                                "value": 198757
                            },
                            "duration": {
                                "text": "3 horas 14 minutos",
                                "value": 11619
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Telha",
        "Resposta": {
            "destination_addresses": [
                "Telha - SE, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "184 km",
                                "value": 184470
                            },
                            "duration": {
                                "text": "2 horas 53 minutos",
                                "value": 10356
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Santo Amaro das Brotas",
        "Resposta": {
            "destination_addresses": [
                "Santo Amaro das Brotas, SE, 49180-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "108 km",
                                "value": 108060
                            },
                            "duration": {
                                "text": "1 hora 51 minutos",
                                "value": 6663
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Itabi",
        "Resposta": {
            "destination_addresses": [
                "Itabi, SE, 49870-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "184 km",
                                "value": 184304
                            },
                            "duration": {
                                "text": "2 horas 59 minutos",
                                "value": 10740
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Barra dos Coqueiros",
        "Resposta": {
            "destination_addresses": [
                "Barra dos Coqueiros, SE, 49140-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "74,7 km",
                                "value": 74717
                            },
                            "duration": {
                                "text": "1 hora 15 minutos",
                                "value": 4499
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora de Lourdes",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. de Lourdes - SE, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "197 km",
                                "value": 196580
                            },
                            "duration": {
                                "text": "3 horas 11 minutos",
                                "value": 11440
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Cristinápolis",
        "Resposta": {
            "destination_addresses": [
                "Cristinápolis, SE, 49270-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "48,1 km",
                                "value": 48116
                            },
                            "duration": {
                                "text": "50 minutos",
                                "value": 2971
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Itabaianinha",
        "Resposta": {
            "destination_addresses": [
                "Itabaianinha, SE, 49290-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "51,9 km",
                                "value": 51901
                            },
                            "duration": {
                                "text": "59 minutos",
                                "value": 3520
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora do Socorro",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. do Socorro, SE, 49160-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "68,7 km",
                                "value": 68655
                            },
                            "duration": {
                                "text": "1 hora 1 minuto",
                                "value": 3636
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Riachão do Dantas",
        "Resposta": {
            "destination_addresses": [
                "Riachão do Dantas - SE, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "51,8 km",
                                "value": 51799
                            },
                            "duration": {
                                "text": "59 minutos",
                                "value": 3567
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Aquidabã",
        "Resposta": {
            "destination_addresses": [
                "Aquidabã, SE, 49790-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "174 km",
                                "value": 173605
                            },
                            "duration": {
                                "text": "2 horas 46 minutos",
                                "value": 9988
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora Aparecida",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. Aparecida - SE, 49540-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "147 km",
                                "value": 147268
                            },
                            "duration": {
                                "text": "2 horas 19 minutos",
                                "value": 8334
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Poço Redondo",
        "Resposta": {
            "destination_addresses": [
                "Poço Redondo - SE, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "228 km",
                                "value": 227941
                            },
                            "duration": {
                                "text": "3 horas 45 minutos",
                                "value": 13521
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Santana do São Francisco",
        "Resposta": {
            "destination_addresses": [
                "Santana do São Francisco, SE, 49985-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "194 km",
                                "value": 194451
                            },
                            "duration": {
                                "text": "3 horas 1 minuto",
                                "value": 10842
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Domingos",
        "Resposta": {
            "destination_addresses": [
                "São Domingos - SE, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "85,6 km",
                                "value": 85640
                            },
                            "duration": {
                                "text": "1 hora 29 minutos",
                                "value": 5368
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Canhoba",
        "Resposta": {
            "destination_addresses": [
                "Canhoba, SE, 49880-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "196 km",
                                "value": 196042
                            },
                            "duration": {
                                "text": "3 horas 3 minutos",
                                "value": 10964
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Indiaroba",
        "Resposta": {
            "destination_addresses": [
                "Indiaroba, SE, 49250-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "33,3 km",
                                "value": 33346
                            },
                            "duration": {
                                "text": "32 minutos",
                                "value": 1942
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Estância",
        "Resposta": {
            "destination_addresses": [
                "Estância - SE, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "1 m",
                                "value": 0
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 0
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Propriá",
        "Resposta": {
            "destination_addresses": [
                "Propriá, SE, 49900-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "176 km",
                                "value": 175612
                            },
                            "duration": {
                                "text": "2 horas 42 minutos",
                                "value": 9749
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Itaporanga d'Ajuda",
        "Resposta": {
            "destination_addresses": [
                "Itaporanga d'Ajuda - SE, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "38,7 km",
                                "value": 38698
                            },
                            "duration": {
                                "text": "38 minutos",
                                "value": 2261
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Boquim",
        "Resposta": {
            "destination_addresses": [
                "Boquim, SE, 49360-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "27,2 km",
                                "value": 27215
                            },
                            "duration": {
                                "text": "33 minutos",
                                "value": 1997
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Gararu",
        "Resposta": {
            "destination_addresses": [
                "Gararu, SE, 49830-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "208 km",
                                "value": 207602
                            },
                            "duration": {
                                "text": "3 horas 20 minutos",
                                "value": 12005
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pirambu",
        "Resposta": {
            "destination_addresses": [
                "Pirambu - SE, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "105 km",
                                "value": 104918
                            },
                            "duration": {
                                "text": "1 hora 46 minutos",
                                "value": 6379
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Carmópolis",
        "Resposta": {
            "destination_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "122 km",
                                "value": 122228
                            },
                            "duration": {
                                "text": "2 horas 0 minutos",
                                "value": 7182
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Laranjeiras",
        "Resposta": {
            "destination_addresses": [
                "Laranjeiras - SE, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "75,4 km",
                                "value": 75402
                            },
                            "duration": {
                                "text": "1 hora 8 minutos",
                                "value": 4081
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Amparo de São Francisco",
        "Resposta": {
            "destination_addresses": [
                "Amparo de São Francisco, Amparo do São Francisco - SE, 49920-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "194 km",
                                "value": 194218
                            },
                            "duration": {
                                "text": "3 horas 3 minutos",
                                "value": 10950
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora das Dores",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. das Dores, SE, 49600-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "122 km",
                                "value": 122050
                            },
                            "duration": {
                                "text": "1 hora 58 minutos",
                                "value": 7088
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Divina Pastora",
        "Resposta": {
            "destination_addresses": [
                "Divina Pastora, SE, 49650-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "93,0 km",
                                "value": 92993
                            },
                            "duration": {
                                "text": "1 hora 25 minutos",
                                "value": 5129
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Aracaju",
        "Resposta": {
            "destination_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "69,9 km",
                                "value": 69923
                            },
                            "duration": {
                                "text": "1 hora 6 minutos",
                                "value": 3964
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Itabaiana",
        "Resposta": {
            "destination_addresses": [
                "Itabaiana, SE, 49500-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "108 km",
                                "value": 108390
                            },
                            "duration": {
                                "text": "1 hora 41 minutos",
                                "value": 6076
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Capela",
        "Resposta": {
            "destination_addresses": [
                "Capela - SE, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "119 km",
                                "value": 118699
                            },
                            "duration": {
                                "text": "2 horas 12 minutos",
                                "value": 7948
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Feira Nova",
        "Resposta": {
            "destination_addresses": [
                "Feira Nova - SE, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "153 km",
                                "value": 152962
                            },
                            "duration": {
                                "text": "2 horas 27 minutos",
                                "value": 8845
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Areia Branca",
        "Resposta": {
            "destination_addresses": [
                "Areia Branca - SE, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "89,8 km",
                                "value": 89799
                            },
                            "duration": {
                                "text": "1 hora 19 minutos",
                                "value": 4757
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Lagarto",
        "Resposta": {
            "destination_addresses": [
                "Lagarto - SE, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "66,8 km",
                                "value": 66774
                            },
                            "duration": {
                                "text": "1 hora 11 minutos",
                                "value": 4277
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Ilha das Flores",
        "Resposta": {
            "destination_addresses": [
                "Ilha das Flores - SE, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "170 km",
                                "value": 169685
                            },
                            "duration": {
                                "text": "3 horas 2 minutos",
                                "value": 10940
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Poço Verde",
        "Resposta": {
            "destination_addresses": [
                "Poço Verde, SE, 49490-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "137 km",
                                "value": 137406
                            },
                            "duration": {
                                "text": "2 horas 26 minutos",
                                "value": 8783
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Malhada dos Bois",
        "Resposta": {
            "destination_addresses": [
                "Malhada dos Bois, SE, 49940-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "159 km",
                                "value": 159417
                            },
                            "duration": {
                                "text": "2 horas 31 minutos",
                                "value": 9065
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Francisco",
        "Resposta": {
            "destination_addresses": [
                "São Francisco - SE, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "158 km",
                                "value": 157523
                            },
                            "duration": {
                                "text": "2 horas 27 minutos",
                                "value": 8807
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Canindé de São Francisco",
        "Resposta": {
            "destination_addresses": [
                "Canindé de São Francisco, SE, 49820-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "249 km",
                                "value": 248821
                            },
                            "duration": {
                                "text": "4 horas 7 minutos",
                                "value": 14800
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Tomar do Geru",
        "Resposta": {
            "destination_addresses": [
                "Tomar do Geru, SE, 49280-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "65,2 km",
                                "value": 65237
                            },
                            "duration": {
                                "text": "1 hora 16 minutos",
                                "value": 4530
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Salgado",
        "Resposta": {
            "destination_addresses": [
                "Salgado - SE, 49390-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "42,1 km",
                                "value": 42076
                            },
                            "duration": {
                                "text": "40 minutos",
                                "value": 2409
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Cristóvão",
        "Resposta": {
            "destination_addresses": [
                "São Cristóvão - SE, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "56,5 km",
                                "value": 56528
                            },
                            "duration": {
                                "text": "53 minutos",
                                "value": 3169
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Arauá",
        "Resposta": {
            "destination_addresses": [
                "Arauá, SE, 49220-000, Brasil"
            ],
            "origin_addresses": [
                "Estância - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "29,4 km",
                                "value": 29406
                            },
                            "duration": {
                                "text": "35 minutos",
                                "value": 2120
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    }
]

const carmopolis = [
    {
        "Destino": "Barra dos Coqueiros",
        "Resposta": {
            "destination_addresses": [
                "Barra dos Coqueiros, SE, 49140-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "51,2 km",
                                "value": 51191
                            },
                            "duration": {
                                "text": "55 minutos",
                                "value": 3326
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Capela",
        "Resposta": {
            "destination_addresses": [
                "Capela - SE, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "28,6 km",
                                "value": 28585
                            },
                            "duration": {
                                "text": "30 minutos",
                                "value": 1825
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pirambu",
        "Resposta": {
            "destination_addresses": [
                "Pirambu - SE, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "30,4 km",
                                "value": 30419
                            },
                            "duration": {
                                "text": "35 minutos",
                                "value": 2097
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Aquidabã",
        "Resposta": {
            "destination_addresses": [
                "Aquidabã, SE, 49790-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "57,1 km",
                                "value": 57096
                            },
                            "duration": {
                                "text": "57 minutos",
                                "value": 3423
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Carira",
        "Resposta": {
            "destination_addresses": [
                "Carira, SE, 49550-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "121 km",
                                "value": 120785
                            },
                            "duration": {
                                "text": "1 hora 53 minutos",
                                "value": 6803
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Cedro de São João",
        "Resposta": {
            "destination_addresses": [
                "Cedro de São João, SE, 49930-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "67,8 km",
                                "value": 67849
                            },
                            "duration": {
                                "text": "59 minutos",
                                "value": 3542
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Simão Dias",
        "Resposta": {
            "destination_addresses": [
                "Simão Dias, SE, 49480-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "131 km",
                                "value": 131287
                            },
                            "duration": {
                                "text": "2 horas 8 minutos",
                                "value": 7685
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Itabaiana",
        "Resposta": {
            "destination_addresses": [
                "Itabaiana, SE, 49500-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "72,3 km",
                                "value": 72308
                            },
                            "duration": {
                                "text": "1 hora 28 minutos",
                                "value": 5254
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Santana do São Francisco",
        "Resposta": {
            "destination_addresses": [
                "Santana do São Francisco, SE, 49985-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "77,9 km",
                                "value": 77942
                            },
                            "duration": {
                                "text": "1 hora 11 minutos",
                                "value": 4276
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Graccho Cardoso",
        "Resposta": {
            "destination_addresses": [
                "Gracho Cardoso - SE, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "78,2 km",
                                "value": 78191
                            },
                            "duration": {
                                "text": "1 hora 19 minutos",
                                "value": 4716
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora do Socorro",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. do Socorro, SE, 49160-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "35,5 km",
                                "value": 35519
                            },
                            "duration": {
                                "text": "45 minutos",
                                "value": 2696
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Canindé de São Francisco",
        "Resposta": {
            "destination_addresses": [
                "Canindé de São Francisco, SE, 49820-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "160 km",
                                "value": 159931
                            },
                            "duration": {
                                "text": "2 horas 50 minutos",
                                "value": 10205
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pacatuba",
        "Resposta": {
            "destination_addresses": [
                "Pacatuba, SE, 49970-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "70,3 km",
                                "value": 70344
                            },
                            "duration": {
                                "text": "1 hora 5 minutos",
                                "value": 3914
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Itabi",
        "Resposta": {
            "destination_addresses": [
                "Itabi, SE, 49870-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "96,4 km",
                                "value": 96434
                            },
                            "duration": {
                                "text": "1 hora 38 minutos",
                                "value": 5907
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Rosário do Catete",
        "Resposta": {
            "destination_addresses": [
                "Rosário do Catete, SE, 49760-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "12,7 km",
                                "value": 12698
                            },
                            "duration": {
                                "text": "18 minutos",
                                "value": 1060
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Boquim",
        "Resposta": {
            "destination_addresses": [
                "Boquim, SE, 49360-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "114 km",
                                "value": 113704
                            },
                            "duration": {
                                "text": "1 hora 57 minutos",
                                "value": 7014
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Riachão do Dantas",
        "Resposta": {
            "destination_addresses": [
                "Riachão do Dantas, SE, 49320-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "129 km",
                                "value": 128832
                            },
                            "duration": {
                                "text": "2 horas 13 minutos",
                                "value": 7988
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora da Glória",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. da Glória, SE, 49680-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "81,5 km",
                                "value": 81537
                            },
                            "duration": {
                                "text": "1 hora 27 minutos",
                                "value": 5196
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Indiaroba",
        "Resposta": {
            "destination_addresses": [
                "Indiaroba, SE, 49250-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "133 km",
                                "value": 132840
                            },
                            "duration": {
                                "text": "2 horas 7 minutos",
                                "value": 7610
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Canhoba",
        "Resposta": {
            "destination_addresses": [
                "Canhoba, SE, 49880-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "79,5 km",
                                "value": 79533
                            },
                            "duration": {
                                "text": "1 hora 13 minutos",
                                "value": 4399
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora das Dores",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. das Dores, SE, 49600-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "36,7 km",
                                "value": 36652
                            },
                            "duration": {
                                "text": "40 minutos",
                                "value": 2422
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Areia Branca",
        "Resposta": {
            "destination_addresses": [
                "Areia Branca, SE, 49580-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "53,7 km",
                                "value": 53713
                            },
                            "duration": {
                                "text": "1 hora 6 minutos",
                                "value": 3935
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Amparo de São Francisco",
        "Resposta": {
            "destination_addresses": [
                "Amparo de São Francisco, Amparo do São Francisco - SE, 49920-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "77,7 km",
                                "value": 77710
                            },
                            "duration": {
                                "text": "1 hora 13 minutos",
                                "value": 4385
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Tomar do Geru",
        "Resposta": {
            "destination_addresses": [
                "Tomar do Geru, SE, 49280-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "165 km",
                                "value": 164731
                            },
                            "duration": {
                                "text": "2 horas 50 minutos",
                                "value": 10199
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pinhão",
        "Resposta": {
            "destination_addresses": [
                "Pinhão - SE, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "107 km",
                                "value": 106872
                            },
                            "duration": {
                                "text": "1 hora 43 minutos",
                                "value": 6191
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Estância",
        "Resposta": {
            "destination_addresses": [
                "Estância - SE, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "101 km",
                                "value": 100584
                            },
                            "duration": {
                                "text": "1 hora 39 minutos",
                                "value": 5945
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Itaporanga d'Ajuda",
        "Resposta": {
            "destination_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "64,0 km",
                                "value": 63954
                            },
                            "duration": {
                                "text": "1 hora 9 minutos",
                                "value": 4159
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pedrinhas",
        "Resposta": {
            "destination_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "122 km",
                                "value": 121550
                            },
                            "duration": {
                                "text": "2 horas 6 minutos",
                                "value": 7538
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Arauá",
        "Resposta": {
            "destination_addresses": [
                "Arauá, SE, 49220-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "129 km",
                                "value": 128900
                            },
                            "duration": {
                                "text": "2 horas 10 minutos",
                                "value": 7789
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Carmópolis",
        "Resposta": {
            "destination_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "1 m",
                                "value": 0
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 0
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Umbaúba",
        "Resposta": {
            "destination_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "132 km",
                                "value": 131670
                            },
                            "duration": {
                                "text": "2 horas 9 minutos",
                                "value": 7719
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "General Maynard",
        "Resposta": {
            "destination_addresses": [
                "Gen. Maynard, SE, 49750-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "5,3 km",
                                "value": 5275
                            },
                            "duration": {
                                "text": "9 minutos",
                                "value": 527
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora Aparecida",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. Aparecida - SE, 49540-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "84,0 km",
                                "value": 83983
                            },
                            "duration": {
                                "text": "1 hora 25 minutos",
                                "value": 5073
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Cristóvão",
        "Resposta": {
            "destination_addresses": [
                "São Cristóvão - SE, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "60,0 km",
                                "value": 60016
                            },
                            "duration": {
                                "text": "1 hora 8 minutos",
                                "value": 4099
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Macambira",
        "Resposta": {
            "destination_addresses": [
                "Macambira, SE, 49565-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "91,3 km",
                                "value": 91261
                            },
                            "duration": {
                                "text": "1 hora 47 minutos",
                                "value": 6438
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Riachuelo",
        "Resposta": {
            "destination_addresses": [
                "Riachuelo - SE, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "33,7 km",
                                "value": 33680
                            },
                            "duration": {
                                "text": "43 minutos",
                                "value": 2592
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Neópolis",
        "Resposta": {
            "destination_addresses": [
                "Neópolis, SE, 49980-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "75,1 km",
                                "value": 75106
                            },
                            "duration": {
                                "text": "1 hora 7 minutos",
                                "value": 3991
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Cristinápolis",
        "Resposta": {
            "destination_addresses": [
                "Cristinápolis, SE, 49270-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "148 km",
                                "value": 147610
                            },
                            "duration": {
                                "text": "2 horas 24 minutos",
                                "value": 8639
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Domingos",
        "Resposta": {
            "destination_addresses": [
                "São Domingos - SE, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "93,6 km",
                                "value": 93615
                            },
                            "duration": {
                                "text": "1 hora 51 minutos",
                                "value": 6656
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Propriá",
        "Resposta": {
            "destination_addresses": [
                "Propriá, SE, 49900-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "59,1 km",
                                "value": 59103
                            },
                            "duration": {
                                "text": "53 minutos",
                                "value": 3184
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Japaratuba",
        "Resposta": {
            "destination_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "12,9 km",
                                "value": 12898
                            },
                            "duration": {
                                "text": "15 minutos",
                                "value": 891
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Itabaianinha",
        "Resposta": {
            "destination_addresses": [
                "Itabaianinha, SE, 49290-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "151 km",
                                "value": 151395
                            },
                            "duration": {
                                "text": "2 horas 33 minutos",
                                "value": 9189
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pedra Mole",
        "Resposta": {
            "destination_addresses": [
                "Pedra Mole, SE, 49512-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "106 km",
                                "value": 106131
                            },
                            "duration": {
                                "text": "1 hora 45 minutos",
                                "value": 6274
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Japoatã",
        "Resposta": {
            "destination_addresses": [
                "Japoatã, SE, 49950-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "50,1 km",
                                "value": 50111
                            },
                            "duration": {
                                "text": "45 minutos",
                                "value": 2726
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Brejo Grande",
        "Resposta": {
            "destination_addresses": [
                "Brejo Grande, SE, 49995-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "95,7 km",
                                "value": 95728
                            },
                            "duration": {
                                "text": "1 hora 27 minutos",
                                "value": 5242
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Siriri",
        "Resposta": {
            "destination_addresses": [
                "Siriri, SE, 49630-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "19,1 km",
                                "value": 19115
                            },
                            "duration": {
                                "text": "23 minutos",
                                "value": 1376
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora de Lourdes",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. de Lourdes, SE, 49890-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "93,1 km",
                                "value": 93149
                            },
                            "duration": {
                                "text": "1 hora 26 minutos",
                                "value": 5185
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Santa Luzia do Itanhy",
        "Resposta": {
            "destination_addresses": [
                "Santa Luzia do Itanhy, SE, 49230-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "110 km",
                                "value": 110337
                            },
                            "duration": {
                                "text": "1 hora 48 minutos",
                                "value": 6492
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Gararu",
        "Resposta": {
            "destination_addresses": [
                "Gararu, SE, 49830-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "113 km",
                                "value": 112546
                            },
                            "duration": {
                                "text": "1 hora 44 minutos",
                                "value": 6235
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Poço Redondo",
        "Resposta": {
            "destination_addresses": [
                "Poço Redondo - SE, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "139 km",
                                "value": 139050
                            },
                            "duration": {
                                "text": "2 horas 29 minutos",
                                "value": 8926
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Campo do Brito",
        "Resposta": {
            "destination_addresses": [
                "Campo do Brito, SE, 49520-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "82,3 km",
                                "value": 82333
                            },
                            "duration": {
                                "text": "1 hora 37 minutos",
                                "value": 5840
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Divina Pastora",
        "Resposta": {
            "destination_addresses": [
                "Divina Pastora, SE, 49650-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "29,4 km",
                                "value": 29417
                            },
                            "duration": {
                                "text": "34 minutos",
                                "value": 2019
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Malhada dos Bois",
        "Resposta": {
            "destination_addresses": [
                "Malhada dos Bois, SE, 49940-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "42,9 km",
                                "value": 42908
                            },
                            "duration": {
                                "text": "42 minutos",
                                "value": 2500
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Malhador",
        "Resposta": {
            "destination_addresses": [
                "Malhador, SE, 49570-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "56,4 km",
                                "value": 56360
                            },
                            "duration": {
                                "text": "1 hora 6 minutos",
                                "value": 3963
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Cumbe",
        "Resposta": {
            "destination_addresses": [
                "Cumbe, SE, 49660-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "53,6 km",
                                "value": 53645
                            },
                            "duration": {
                                "text": "1 hora 0 minutos",
                                "value": 3578
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Ribeirópolis",
        "Resposta": {
            "destination_addresses": [
                "Ribeirópolis, SE, 49530-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "65,8 km",
                                "value": 65827
                            },
                            "duration": {
                                "text": "1 hora 6 minutos",
                                "value": 3959
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Santo Amaro das Brotas",
        "Resposta": {
            "destination_addresses": [
                "Santo Amaro das Brotas, SE, 49180-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "24,9 km",
                                "value": 24928
                            },
                            "duration": {
                                "text": "32 minutos",
                                "value": 1890
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Santa Rosa de Lima",
        "Resposta": {
            "destination_addresses": [
                "Santa Rosa de Lima, SE, 49640-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "39,8 km",
                                "value": 39804
                            },
                            "duration": {
                                "text": "46 minutos",
                                "value": 2768
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Telha",
        "Resposta": {
            "destination_addresses": [
                "Telha - SE, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "68,0 km",
                                "value": 67961
                            },
                            "duration": {
                                "text": "1 hora 3 minutos",
                                "value": 3791
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Miguel do Aleixo",
        "Resposta": {
            "destination_addresses": [
                "São Miguel do Aleixo, SE, 49535-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "72,5 km",
                                "value": 72538
                            },
                            "duration": {
                                "text": "1 hora 32 minutos",
                                "value": 5500
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Moita Bonita",
        "Resposta": {
            "destination_addresses": [
                "Moita Bonita - SE, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "64,3 km",
                                "value": 64262
                            },
                            "duration": {
                                "text": "1 hora 5 minutos",
                                "value": 3926
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Muribeca",
        "Resposta": {
            "destination_addresses": [
                "Muribeca, SE, 49780-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "44,2 km",
                                "value": 44193
                            },
                            "duration": {
                                "text": "44 minutos",
                                "value": 2654
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Poço Verde",
        "Resposta": {
            "destination_addresses": [
                "Poço Verde, SE, 49490-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "176 km",
                                "value": 176352
                            },
                            "duration": {
                                "text": "2 horas 58 minutos",
                                "value": 10684
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Tobias Barreto",
        "Resposta": {
            "destination_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "162 km",
                                "value": 161500
                            },
                            "duration": {
                                "text": "2 horas 41 minutos",
                                "value": 9654
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Aracaju",
        "Resposta": {
            "destination_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "49,6 km",
                                "value": 49575
                            },
                            "duration": {
                                "text": "1 hora 2 minutos",
                                "value": 3719
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Feira Nova",
        "Resposta": {
            "destination_addresses": [
                "Feira Nova - SE, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "67,6 km",
                                "value": 67564
                            },
                            "duration": {
                                "text": "1 hora 10 minutos",
                                "value": 4178
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Salgado",
        "Resposta": {
            "destination_addresses": [
                "Salgado - SE, 49390-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "84,9 km",
                                "value": 84930
                            },
                            "duration": {
                                "text": "1 hora 25 minutos",
                                "value": 5100
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Laranjeiras",
        "Resposta": {
            "destination_addresses": [
                "Laranjeiras - SE, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "29,8 km",
                                "value": 29827
                            },
                            "duration": {
                                "text": "40 minutos",
                                "value": 2416
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Francisco",
        "Resposta": {
            "destination_addresses": [
                "São Francisco - SE, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "41,0 km",
                                "value": 41014
                            },
                            "duration": {
                                "text": "37 minutos",
                                "value": 2242
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Monte Alegre de Sergipe",
        "Resposta": {
            "destination_addresses": [
                "Monte Alegre de Sergipe, SE, 49690-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "110 km",
                                "value": 109866
                            },
                            "duration": {
                                "text": "1 hora 57 minutos",
                                "value": 7025
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Ilha das Flores",
        "Resposta": {
            "destination_addresses": [
                "Ilha das Flores - SE, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "92,5 km",
                                "value": 92468
                            },
                            "duration": {
                                "text": "1 hora 27 minutos",
                                "value": 5206
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Frei Paulo",
        "Resposta": {
            "destination_addresses": [
                "Frei Paulo - SE, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "84,5 km",
                                "value": 84451
                            },
                            "duration": {
                                "text": "1 hora 27 minutos",
                                "value": 5231
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Porto da Folha",
        "Resposta": {
            "destination_addresses": [
                "Porto da Folha, SE, 49800-000, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "139 km",
                                "value": 138939
                            },
                            "duration": {
                                "text": "2 horas 19 minutos",
                                "value": 8332
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Lagarto",
        "Resposta": {
            "destination_addresses": [
                "Lagarto - SE, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "110 km",
                                "value": 109627
                            },
                            "duration": {
                                "text": "1 hora 56 minutos",
                                "value": 6968
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Maruim",
        "Resposta": {
            "destination_addresses": [
                "Maruim - SE, Brasil"
            ],
            "origin_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "18,8 km",
                                "value": 18777
                            },
                            "duration": {
                                "text": "25 minutos",
                                "value": 1489
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    }
]

const capela = [
    {
        "Destino": "Brejo Grande",
        "Resposta": {
            "destination_addresses": [
                "Brejo Grande, SE, 49995-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "106 km",
                                "value": 106125
                            },
                            "duration": {
                                "text": "1 hora 37 minutos",
                                "value": 5825
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Itabi",
        "Resposta": {
            "destination_addresses": [
                "Itabi, SE, 49870-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "79,8 km",
                                "value": 79813
                            },
                            "duration": {
                                "text": "1 hora 24 minutos",
                                "value": 5054
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Capela",
        "Resposta": {
            "destination_addresses": [
                "Capela - SE, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "1 m",
                                "value": 0
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 0
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pedra Mole",
        "Resposta": {
            "destination_addresses": [
                "Pedra Mole, SE, 49512-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "92,3 km",
                                "value": 92274
                            },
                            "duration": {
                                "text": "1 hora 38 minutos",
                                "value": 5896
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Neópolis",
        "Resposta": {
            "destination_addresses": [
                "Neópolis, SE, 49980-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "85,5 km",
                                "value": 85504
                            },
                            "duration": {
                                "text": "1 hora 16 minutos",
                                "value": 4574
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Itabaianinha",
        "Resposta": {
            "destination_addresses": [
                "Itabaianinha, SE, 49290-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "172 km",
                                "value": 171523
                            },
                            "duration": {
                                "text": "2 horas 52 minutos",
                                "value": 10292
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Barra dos Coqueiros",
        "Resposta": {
            "destination_addresses": [
                "Barra dos Coqueiros, SE, 49140-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "71,3 km",
                                "value": 71318
                            },
                            "duration": {
                                "text": "1 hora 14 minutos",
                                "value": 4430
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Cedro de São João",
        "Resposta": {
            "destination_addresses": [
                "Cedro de São João, SE, 49930-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "78,2 km",
                                "value": 78247
                            },
                            "duration": {
                                "text": "1 hora 9 minutos",
                                "value": 4125
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Siriri",
        "Resposta": {
            "destination_addresses": [
                "Siriri, SE, 49630-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "14,4 km",
                                "value": 14450
                            },
                            "duration": {
                                "text": "33 minutos",
                                "value": 1956
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pirambu",
        "Resposta": {
            "destination_addresses": [
                "Pirambu - SE, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "45,1 km",
                                "value": 45097
                            },
                            "duration": {
                                "text": "48 minutos",
                                "value": 2870
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Carmópolis",
        "Resposta": {
            "destination_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "26,2 km",
                                "value": 26154
                            },
                            "duration": {
                                "text": "29 minutos",
                                "value": 1765
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Canhoba",
        "Resposta": {
            "destination_addresses": [
                "Canhoba, SE, 49880-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "89,9 km",
                                "value": 89931
                            },
                            "duration": {
                                "text": "1 hora 23 minutos",
                                "value": 4982
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Itabaiana",
        "Resposta": {
            "destination_addresses": [
                "Itabaiana, SE, 49500-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "66,9 km",
                                "value": 66909
                            },
                            "duration": {
                                "text": "1 hora 22 minutos",
                                "value": 4916
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Areia Branca",
        "Resposta": {
            "destination_addresses": [
                "Areia Branca, SE, 49580-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "56,5 km",
                                "value": 56475
                            },
                            "duration": {
                                "text": "1 hora 21 minutos",
                                "value": 4848
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Simão Dias",
        "Resposta": {
            "destination_addresses": [
                "Simão Dias, SE, 49480-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "117 km",
                                "value": 117430
                            },
                            "duration": {
                                "text": "2 horas 2 minutos",
                                "value": 7306
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora das Dores",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. das Dores, SE, 49600-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "19,2 km",
                                "value": 19218
                            },
                            "duration": {
                                "text": "27 minutos",
                                "value": 1633
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Itaporanga d'Ajuda",
        "Resposta": {
            "destination_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "84,1 km",
                                "value": 84082
                            },
                            "duration": {
                                "text": "1 hora 28 minutos",
                                "value": 5262
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Cristóvão",
        "Resposta": {
            "destination_addresses": [
                "São Cristóvão - SE, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "80,1 km",
                                "value": 80143
                            },
                            "duration": {
                                "text": "1 hora 27 minutos",
                                "value": 5202
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Carira",
        "Resposta": {
            "destination_addresses": [
                "Carira, SE, 49550-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "107 km",
                                "value": 106928
                            },
                            "duration": {
                                "text": "1 hora 47 minutos",
                                "value": 6425
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora do Socorro",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. do Socorro, SE, 49160-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "55,6 km",
                                "value": 55646
                            },
                            "duration": {
                                "text": "1 hora 3 minutos",
                                "value": 3799
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pinhão",
        "Resposta": {
            "destination_addresses": [
                "Pinhão - SE, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "93,0 km",
                                "value": 93015
                            },
                            "duration": {
                                "text": "1 hora 37 minutos",
                                "value": 5812
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora Aparecida",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. Aparecida - SE, 49540-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "70,1 km",
                                "value": 70126
                            },
                            "duration": {
                                "text": "1 hora 18 minutos",
                                "value": 4695
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Telha",
        "Resposta": {
            "destination_addresses": [
                "Telha - SE, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "78,4 km",
                                "value": 78359
                            },
                            "duration": {
                                "text": "1 hora 13 minutos",
                                "value": 4373
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Arauá",
        "Resposta": {
            "destination_addresses": [
                "Arauá, SE, 49220-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "149 km",
                                "value": 149027
                            },
                            "duration": {
                                "text": "2 horas 28 minutos",
                                "value": 8892
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Gararu",
        "Resposta": {
            "destination_addresses": [
                "Gararu, SE, 49830-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "103 km",
                                "value": 103112
                            },
                            "duration": {
                                "text": "1 hora 45 minutos",
                                "value": 6319
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Tomar do Geru",
        "Resposta": {
            "destination_addresses": [
                "Tomar do Geru, SE, 49280-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "185 km",
                                "value": 184858
                            },
                            "duration": {
                                "text": "3 horas 8 minutos",
                                "value": 11302
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Estância",
        "Resposta": {
            "destination_addresses": [
                "Estância - SE, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "121 km",
                                "value": 120711
                            },
                            "duration": {
                                "text": "1 hora 57 minutos",
                                "value": 7049
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Riachuelo",
        "Resposta": {
            "destination_addresses": [
                "Riachuelo - SE, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "35,3 km",
                                "value": 35260
                            },
                            "duration": {
                                "text": "57 minutos",
                                "value": 3414
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pedrinhas",
        "Resposta": {
            "destination_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "142 km",
                                "value": 141678
                            },
                            "duration": {
                                "text": "2 horas 24 minutos",
                                "value": 8641
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Divina Pastora",
        "Resposta": {
            "destination_addresses": [
                "Divina Pastora, SE, 49650-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "25,5 km",
                                "value": 25494
                            },
                            "duration": {
                                "text": "45 minutos",
                                "value": 2682
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Canindé de São Francisco",
        "Resposta": {
            "destination_addresses": [
                "Canindé de São Francisco, SE, 49820-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "141 km",
                                "value": 140838
                            },
                            "duration": {
                                "text": "2 horas 33 minutos",
                                "value": 9186
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora da Glória",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. da Glória, SE, 49680-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "62,4 km",
                                "value": 62445
                            },
                            "duration": {
                                "text": "1 hora 10 minutos",
                                "value": 4176
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Riachão do Dantas",
        "Resposta": {
            "destination_addresses": [
                "Riachão do Dantas, SE, 49320-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "131 km",
                                "value": 131266
                            },
                            "duration": {
                                "text": "2 horas 21 minutos",
                                "value": 8440
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Japaratuba",
        "Resposta": {
            "destination_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "23,3 km",
                                "value": 23296
                            },
                            "duration": {
                                "text": "25 minutos",
                                "value": 1474
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Japoatã",
        "Resposta": {
            "destination_addresses": [
                "Japoatã, SE, 49950-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "60,5 km",
                                "value": 60509
                            },
                            "duration": {
                                "text": "55 minutos",
                                "value": 3308
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Santana do São Francisco",
        "Resposta": {
            "destination_addresses": [
                "Santana do São Francisco, SE, 49985-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "88,3 km",
                                "value": 88339
                            },
                            "duration": {
                                "text": "1 hora 21 minutos",
                                "value": 4859
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Boquim",
        "Resposta": {
            "destination_addresses": [
                "Boquim, SE, 49360-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "134 km",
                                "value": 133832
                            },
                            "duration": {
                                "text": "2 horas 15 minutos",
                                "value": 8118
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Miguel do Aleixo",
        "Resposta": {
            "destination_addresses": [
                "São Miguel do Aleixo, SE, 49535-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "53,1 km",
                                "value": 53101
                            },
                            "duration": {
                                "text": "1 hora 14 minutos",
                                "value": 4448
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Malhada dos Bois",
        "Resposta": {
            "destination_addresses": [
                "Malhada dos Bois, SE, 49940-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "53,3 km",
                                "value": 53306
                            },
                            "duration": {
                                "text": "51 minutos",
                                "value": 3083
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Cristinápolis",
        "Resposta": {
            "destination_addresses": [
                "Cristinápolis, SE, 49270-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "168 km",
                                "value": 167737
                            },
                            "duration": {
                                "text": "2 horas 42 minutos",
                                "value": 9743
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Domingos",
        "Resposta": {
            "destination_addresses": [
                "São Domingos - SE, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "94,6 km",
                                "value": 94587
                            },
                            "duration": {
                                "text": "1 hora 47 minutos",
                                "value": 6437
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Graccho Cardoso",
        "Resposta": {
            "destination_addresses": [
                "Gracho Cardoso - SE, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "61,3 km",
                                "value": 61282
                            },
                            "duration": {
                                "text": "1 hora 4 minutos",
                                "value": 3834
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Ribeirópolis",
        "Resposta": {
            "destination_addresses": [
                "Ribeirópolis, SE, 49530-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "52,0 km",
                                "value": 51970
                            },
                            "duration": {
                                "text": "1 hora 0 minutos",
                                "value": 3581
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pacatuba",
        "Resposta": {
            "destination_addresses": [
                "Pacatuba, SE, 49970-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "80,7 km",
                                "value": 80742
                            },
                            "duration": {
                                "text": "1 hora 15 minutos",
                                "value": 4497
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora de Lourdes",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. de Lourdes, SE, 49890-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "92,1 km",
                                "value": 92090
                            },
                            "duration": {
                                "text": "1 hora 36 minutos",
                                "value": 5754
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Santa Rosa de Lima",
        "Resposta": {
            "destination_addresses": [
                "Santa Rosa de Lima, SE, 49640-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "35,9 km",
                                "value": 35882
                            },
                            "duration": {
                                "text": "57 minutos",
                                "value": 3431
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Aquidabã",
        "Resposta": {
            "destination_addresses": [
                "Aquidabã, SE, 49790-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "44,8 km",
                                "value": 44760
                            },
                            "duration": {
                                "text": "1 hora 4 minutos",
                                "value": 3831
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Campo do Brito",
        "Resposta": {
            "destination_addresses": [
                "Campo do Brito, SE, 49520-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "83,3 km",
                                "value": 83305
                            },
                            "duration": {
                                "text": "1 hora 34 minutos",
                                "value": 5621
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Cumbe",
        "Resposta": {
            "destination_addresses": [
                "Cumbe, SE, 49660-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "34,6 km",
                                "value": 34553
                            },
                            "duration": {
                                "text": "43 minutos",
                                "value": 2559
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Umbaúba",
        "Resposta": {
            "destination_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "152 km",
                                "value": 151797
                            },
                            "duration": {
                                "text": "2 horas 27 minutos",
                                "value": 8822
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Malhador",
        "Resposta": {
            "destination_addresses": [
                "Malhador, SE, 49570-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "52,4 km",
                                "value": 52437
                            },
                            "duration": {
                                "text": "1 hora 17 minutos",
                                "value": 4627
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Santo Amaro das Brotas",
        "Resposta": {
            "destination_addresses": [
                "Santo Amaro das Brotas, SE, 49180-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "45,1 km",
                                "value": 45056
                            },
                            "duration": {
                                "text": "50 minutos",
                                "value": 2994
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Amparo de São Francisco",
        "Resposta": {
            "destination_addresses": [
                "Amparo de São Francisco, Amparo do São Francisco - SE, 49920-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "88,1 km",
                                "value": 88107
                            },
                            "duration": {
                                "text": "1 hora 23 minutos",
                                "value": 4968
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "General Maynard",
        "Resposta": {
            "destination_addresses": [
                "Gen. Maynard, SE, 49750-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "31,9 km",
                                "value": 31895
                            },
                            "duration": {
                                "text": "37 minutos",
                                "value": 2227
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Indiaroba",
        "Resposta": {
            "destination_addresses": [
                "Indiaroba, SE, 49250-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "153 km",
                                "value": 152968
                            },
                            "duration": {
                                "text": "2 horas 25 minutos",
                                "value": 8714
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Porto da Folha",
        "Resposta": {
            "destination_addresses": [
                "Porto da Folha, SE, 49800-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "101 km",
                                "value": 100596
                            },
                            "duration": {
                                "text": "2 horas 4 minutos",
                                "value": 7462
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Propriá",
        "Resposta": {
            "destination_addresses": [
                "Propriá, SE, 49900-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "69,5 km",
                                "value": 69501
                            },
                            "duration": {
                                "text": "1 hora 3 minutos",
                                "value": 3767
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Tobias Barreto",
        "Resposta": {
            "destination_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "164 km",
                                "value": 163934
                            },
                            "duration": {
                                "text": "2 horas 48 minutos",
                                "value": 10106
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Laranjeiras",
        "Resposta": {
            "destination_addresses": [
                "Laranjeiras - SE, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "50,0 km",
                                "value": 49954
                            },
                            "duration": {
                                "text": "59 minutos",
                                "value": 3519
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Santa Luzia do Itanhy",
        "Resposta": {
            "destination_addresses": [
                "Santa Luzia do Itanhy, SE, 49230-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "130 km",
                                "value": 130464
                            },
                            "duration": {
                                "text": "2 horas 7 minutos",
                                "value": 7595
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Poço Verde",
        "Resposta": {
            "destination_addresses": [
                "Poço Verde, SE, 49490-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "162 km",
                                "value": 162495
                            },
                            "duration": {
                                "text": "2 horas 52 minutos",
                                "value": 10306
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Macambira",
        "Resposta": {
            "destination_addresses": [
                "Macambira, SE, 49565-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "80,4 km",
                                "value": 80403
                            },
                            "duration": {
                                "text": "1 hora 43 minutos",
                                "value": 6196
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Poço Redondo",
        "Resposta": {
            "destination_addresses": [
                "Poço Redondo - SE, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "120 km",
                                "value": 119958
                            },
                            "duration": {
                                "text": "2 horas 12 minutos",
                                "value": 7907
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Aracaju",
        "Resposta": {
            "destination_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "69,7 km",
                                "value": 69702
                            },
                            "duration": {
                                "text": "1 hora 20 minutos",
                                "value": 4822
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Maruim",
        "Resposta": {
            "destination_addresses": [
                "Maruim - SE, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "38,9 km",
                                "value": 38904
                            },
                            "duration": {
                                "text": "43 minutos",
                                "value": 2593
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Francisco",
        "Resposta": {
            "destination_addresses": [
                "São Francisco - SE, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "51,4 km",
                                "value": 51412
                            },
                            "duration": {
                                "text": "47 minutos",
                                "value": 2825
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Rosário do Catete",
        "Resposta": {
            "destination_addresses": [
                "Rosário do Catete, SE, 49760-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "32,8 km",
                                "value": 32825
                            },
                            "duration": {
                                "text": "36 minutos",
                                "value": 2164
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Feira Nova",
        "Resposta": {
            "destination_addresses": [
                "Feira Nova - SE, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "48,5 km",
                                "value": 48472
                            },
                            "duration": {
                                "text": "53 minutos",
                                "value": 3159
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Salgado",
        "Resposta": {
            "destination_addresses": [
                "Salgado - SE, 49390-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "105 km",
                                "value": 105057
                            },
                            "duration": {
                                "text": "1 hora 43 minutos",
                                "value": 6204
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Muribeca",
        "Resposta": {
            "destination_addresses": [
                "Muribeca, SE, 49780-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "22,9 km",
                                "value": 22942
                            },
                            "duration": {
                                "text": "33 minutos",
                                "value": 2009
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Monte Alegre de Sergipe",
        "Resposta": {
            "destination_addresses": [
                "Monte Alegre de Sergipe, SE, 49690-000, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "90,8 km",
                                "value": 90774
                            },
                            "duration": {
                                "text": "1 hora 40 minutos",
                                "value": 6005
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Frei Paulo",
        "Resposta": {
            "destination_addresses": [
                "Frei Paulo - SE, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "70,6 km",
                                "value": 70594
                            },
                            "duration": {
                                "text": "1 hora 21 minutos",
                                "value": 4852
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Ilha das Flores",
        "Resposta": {
            "destination_addresses": [
                "Ilha das Flores - SE, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "103 km",
                                "value": 102866
                            },
                            "duration": {
                                "text": "1 hora 36 minutos",
                                "value": 5789
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Lagarto",
        "Resposta": {
            "destination_addresses": [
                "Lagarto - SE, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "111 km",
                                "value": 111478
                            },
                            "duration": {
                                "text": "2 horas 2 minutos",
                                "value": 7327
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Moita Bonita",
        "Resposta": {
            "destination_addresses": [
                "Moita Bonita - SE, Brasil"
            ],
            "origin_addresses": [
                "Capela - SE, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "50,4 km",
                                "value": 50405
                            },
                            "duration": {
                                "text": "59 minutos",
                                "value": 3547
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    }
]

const japaratuba = [
    {
        "Destino": "Brejo Grande",
        "Resposta": {
            "destination_addresses": [
                "Brejo Grande, SE, 49995-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "88,9 km",
                                "value": 88865
                            },
                            "duration": {
                                "text": "1 hora 20 minutos",
                                "value": 4784
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora da Glória",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. da Glória, SE, 49680-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "84,1 km",
                                "value": 84113
                            },
                            "duration": {
                                "text": "1 hora 32 minutos",
                                "value": 5490
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Carmópolis",
        "Resposta": {
            "destination_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "15,6 km",
                                "value": 15588
                            },
                            "duration": {
                                "text": "17 minutos",
                                "value": 1028
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Carira",
        "Resposta": {
            "destination_addresses": [
                "Carira, SE, 49550-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "130 km",
                                "value": 130346
                            },
                            "duration": {
                                "text": "2 horas 0 minutos",
                                "value": 7170
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Amparo de São Francisco",
        "Resposta": {
            "destination_addresses": [
                "Amparo de São Francisco, Amparo do São Francisco - SE, 49920-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "70,8 km",
                                "value": 70847
                            },
                            "duration": {
                                "text": "1 hora 5 minutos",
                                "value": 3927
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Areia Branca",
        "Resposta": {
            "destination_addresses": [
                "Areia Branca, SE, 49580-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "63,3 km",
                                "value": 63273
                            },
                            "duration": {
                                "text": "1 hora 12 minutos",
                                "value": 4301
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Simão Dias",
        "Resposta": {
            "destination_addresses": [
                "Simão Dias, SE, 49480-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "141 km",
                                "value": 140848
                            },
                            "duration": {
                                "text": "2 horas 14 minutos",
                                "value": 8051
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Canhoba",
        "Resposta": {
            "destination_addresses": [
                "Canhoba, SE, 49880-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "72,7 km",
                                "value": 72671
                            },
                            "duration": {
                                "text": "1 hora 6 minutos",
                                "value": 3942
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora de Lourdes",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. de Lourdes, SE, 49890-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "86,3 km",
                                "value": 86286
                            },
                            "duration": {
                                "text": "1 hora 19 minutos",
                                "value": 4728
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Barra dos Coqueiros",
        "Resposta": {
            "destination_addresses": [
                "Barra dos Coqueiros, SE, 49140-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "49,3 km",
                                "value": 49341
                            },
                            "duration": {
                                "text": "51 minutos",
                                "value": 3042
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Boquim",
        "Resposta": {
            "destination_addresses": [
                "Boquim, SE, 49360-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "123 km",
                                "value": 123265
                            },
                            "duration": {
                                "text": "2 horas 3 minutos",
                                "value": 7380
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Propriá",
        "Resposta": {
            "destination_addresses": [
                "Propriá, SE, 49900-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "52,2 km",
                                "value": 52241
                            },
                            "duration": {
                                "text": "45 minutos",
                                "value": 2726
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Siriri",
        "Resposta": {
            "destination_addresses": [
                "Siriri, SE, 49630-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "28,7 km",
                                "value": 28676
                            },
                            "duration": {
                                "text": "29 minutos",
                                "value": 1742
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Arauá",
        "Resposta": {
            "destination_addresses": [
                "Arauá, SE, 49220-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "138 km",
                                "value": 138460
                            },
                            "duration": {
                                "text": "2 horas 16 minutos",
                                "value": 8155
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Estância",
        "Resposta": {
            "destination_addresses": [
                "Estância - SE, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "110 km",
                                "value": 110145
                            },
                            "duration": {
                                "text": "1 hora 45 minutos",
                                "value": 6311
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora do Socorro",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. do Socorro, SE, 49160-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "45,1 km",
                                "value": 45079
                            },
                            "duration": {
                                "text": "51 minutos",
                                "value": 3062
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Itabaiana",
        "Resposta": {
            "destination_addresses": [
                "Itabaiana, SE, 49500-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "81,9 km",
                                "value": 81869
                            },
                            "duration": {
                                "text": "1 hora 34 minutos",
                                "value": 5620
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pedrinhas",
        "Resposta": {
            "destination_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "131 km",
                                "value": 131111
                            },
                            "duration": {
                                "text": "2 horas 12 minutos",
                                "value": 7904
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Cristóvão",
        "Resposta": {
            "destination_addresses": [
                "São Cristóvão - SE, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "69,6 km",
                                "value": 69576
                            },
                            "duration": {
                                "text": "1 hora 14 minutos",
                                "value": 4465
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora das Dores",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. das Dores, SE, 49600-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "46,2 km",
                                "value": 46213
                            },
                            "duration": {
                                "text": "46 minutos",
                                "value": 2788
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pirambu",
        "Resposta": {
            "destination_addresses": [
                "Pirambu - SE, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "22,0 km",
                                "value": 22011
                            },
                            "duration": {
                                "text": "25 minutos",
                                "value": 1472
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora Aparecida",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. Aparecida - SE, 49540-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "93,5 km",
                                "value": 93544
                            },
                            "duration": {
                                "text": "1 hora 31 minutos",
                                "value": 5439
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Divina Pastora",
        "Resposta": {
            "destination_addresses": [
                "Divina Pastora, SE, 49650-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "39,0 km",
                                "value": 38977
                            },
                            "duration": {
                                "text": "40 minutos",
                                "value": 2385
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pedra Mole",
        "Resposta": {
            "destination_addresses": [
                "Pedra Mole, SE, 49512-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "116 km",
                                "value": 115692
                            },
                            "duration": {
                                "text": "1 hora 51 minutos",
                                "value": 6640
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Canindé de São Francisco",
        "Resposta": {
            "destination_addresses": [
                "Canindé de São Francisco, SE, 49820-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "163 km",
                                "value": 162507
                            },
                            "duration": {
                                "text": "2 horas 55 minutos",
                                "value": 10500
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Ribeirópolis",
        "Resposta": {
            "destination_addresses": [
                "Ribeirópolis, SE, 49530-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "75,4 km",
                                "value": 75388
                            },
                            "duration": {
                                "text": "1 hora 12 minutos",
                                "value": 4326
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pinhão",
        "Resposta": {
            "destination_addresses": [
                "Pinhão - SE, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "116 km",
                                "value": 116433
                            },
                            "duration": {
                                "text": "1 hora 49 minutos",
                                "value": 6557
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Itabi",
        "Resposta": {
            "destination_addresses": [
                "Itabi, SE, 49870-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "89,6 km",
                                "value": 89571
                            },
                            "duration": {
                                "text": "1 hora 31 minutos",
                                "value": 5449
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Itaporanga d'Ajuda",
        "Resposta": {
            "destination_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "73,5 km",
                                "value": 73515
                            },
                            "duration": {
                                "text": "1 hora 15 minutos",
                                "value": 4525
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pacatuba",
        "Resposta": {
            "destination_addresses": [
                "Pacatuba, SE, 49970-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "63,5 km",
                                "value": 63482
                            },
                            "duration": {
                                "text": "58 minutos",
                                "value": 3456
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Rosário do Catete",
        "Resposta": {
            "destination_addresses": [
                "Rosário do Catete, SE, 49760-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "22,3 km",
                                "value": 22259
                            },
                            "duration": {
                                "text": "24 minutos",
                                "value": 1427
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Malhador",
        "Resposta": {
            "destination_addresses": [
                "Malhador, SE, 49570-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "65,9 km",
                                "value": 65921
                            },
                            "duration": {
                                "text": "1 hora 12 minutos",
                                "value": 4330
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Santo Amaro das Brotas",
        "Resposta": {
            "destination_addresses": [
                "Santo Amaro das Brotas, SE, 49180-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "34,5 km",
                                "value": 34489
                            },
                            "duration": {
                                "text": "38 minutos",
                                "value": 2257
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Domingos",
        "Resposta": {
            "destination_addresses": [
                "São Domingos - SE, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "103 km",
                                "value": 103176
                            },
                            "duration": {
                                "text": "1 hora 57 minutos",
                                "value": 7022
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Malhada dos Bois",
        "Resposta": {
            "destination_addresses": [
                "Malhada dos Bois, SE, 49940-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "36,0 km",
                                "value": 36046
                            },
                            "duration": {
                                "text": "34 minutos",
                                "value": 2043
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Neópolis",
        "Resposta": {
            "destination_addresses": [
                "Neópolis, SE, 49980-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "68,2 km",
                                "value": 68244
                            },
                            "duration": {
                                "text": "59 minutos",
                                "value": 3533
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Campo do Brito",
        "Resposta": {
            "destination_addresses": [
                "Campo do Brito, SE, 49520-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "91,9 km",
                                "value": 91894
                            },
                            "duration": {
                                "text": "1 hora 43 minutos",
                                "value": 6207
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Japoatã",
        "Resposta": {
            "destination_addresses": [
                "Japoatã, SE, 49950-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "43,2 km",
                                "value": 43249
                            },
                            "duration": {
                                "text": "38 minutos",
                                "value": 2268
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Santa Rosa de Lima",
        "Resposta": {
            "destination_addresses": [
                "Santa Rosa de Lima, SE, 49640-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "49,4 km",
                                "value": 49365
                            },
                            "duration": {
                                "text": "52 minutos",
                                "value": 3134
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Cedro de São João",
        "Resposta": {
            "destination_addresses": [
                "Cedro de São João, SE, 49930-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "61,0 km",
                                "value": 60987
                            },
                            "duration": {
                                "text": "51 minutos",
                                "value": 3085
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Japaratuba",
        "Resposta": {
            "destination_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "1 m",
                                "value": 0
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 0
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Cumbe",
        "Resposta": {
            "destination_addresses": [
                "Cumbe, SE, 49660-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "56,2 km",
                                "value": 56221
                            },
                            "duration": {
                                "text": "1 hora 5 minutos",
                                "value": 3873
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Indiaroba",
        "Resposta": {
            "destination_addresses": [
                "Indiaroba, SE, 49250-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "142 km",
                                "value": 142401
                            },
                            "duration": {
                                "text": "2 horas 13 minutos",
                                "value": 7977
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Macambira",
        "Resposta": {
            "destination_addresses": [
                "Macambira, SE, 49565-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "101 km",
                                "value": 100821
                            },
                            "duration": {
                                "text": "1 hora 53 minutos",
                                "value": 6804
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Riachão do Dantas",
        "Resposta": {
            "destination_addresses": [
                "Riachão do Dantas, SE, 49320-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "138 km",
                                "value": 138393
                            },
                            "duration": {
                                "text": "2 horas 19 minutos",
                                "value": 8355
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Riachuelo",
        "Resposta": {
            "destination_addresses": [
                "Riachuelo - SE, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "43,2 km",
                                "value": 43241
                            },
                            "duration": {
                                "text": "49 minutos",
                                "value": 2958
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Santana do São Francisco",
        "Resposta": {
            "destination_addresses": [
                "Santana do São Francisco, SE, 49985-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "71,1 km",
                                "value": 71079
                            },
                            "duration": {
                                "text": "1 hora 4 minutos",
                                "value": 3819
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Santa Luzia do Itanhy",
        "Resposta": {
            "destination_addresses": [
                "Santa Luzia do Itanhy, SE, 49230-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "120 km",
                                "value": 119898
                            },
                            "duration": {
                                "text": "1 hora 54 minutos",
                                "value": 6858
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Porto da Folha",
        "Resposta": {
            "destination_addresses": [
                "Porto da Folha, SE, 49800-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "132 km",
                                "value": 132076
                            },
                            "duration": {
                                "text": "2 horas 11 minutos",
                                "value": 7875
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Aquidabã",
        "Resposta": {
            "destination_addresses": [
                "Aquidabã, SE, 49790-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "50,2 km",
                                "value": 50233
                            },
                            "duration": {
                                "text": "49 minutos",
                                "value": 2965
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Umbaúba",
        "Resposta": {
            "destination_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "141 km",
                                "value": 141231
                            },
                            "duration": {
                                "text": "2 horas 15 minutos",
                                "value": 8085
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Feira Nova",
        "Resposta": {
            "destination_addresses": [
                "Feira Nova - SE, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "70,1 km",
                                "value": 70140
                            },
                            "duration": {
                                "text": "1 hora 15 minutos",
                                "value": 4473
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "General Maynard",
        "Resposta": {
            "destination_addresses": [
                "Gen. Maynard, SE, 49750-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "21,3 km",
                                "value": 21328
                            },
                            "duration": {
                                "text": "25 minutos",
                                "value": 1490
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Itabaianinha",
        "Resposta": {
            "destination_addresses": [
                "Itabaianinha, SE, 49290-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "161 km",
                                "value": 160956
                            },
                            "duration": {
                                "text": "2 horas 39 minutos",
                                "value": 9555
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Tomar do Geru",
        "Resposta": {
            "destination_addresses": [
                "Tomar do Geru, SE, 49280-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "174 km",
                                "value": 174291
                            },
                            "duration": {
                                "text": "2 horas 56 minutos",
                                "value": 10565
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Gararu",
        "Resposta": {
            "destination_addresses": [
                "Gararu, SE, 49830-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "106 km",
                                "value": 105683
                            },
                            "duration": {
                                "text": "1 hora 36 minutos",
                                "value": 5778
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Cristinápolis",
        "Resposta": {
            "destination_addresses": [
                "Cristinápolis, SE, 49270-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "157 km",
                                "value": 157171
                            },
                            "duration": {
                                "text": "2 horas 30 minutos",
                                "value": 9006
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Telha",
        "Resposta": {
            "destination_addresses": [
                "Telha - SE, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "61,1 km",
                                "value": 61099
                            },
                            "duration": {
                                "text": "56 minutos",
                                "value": 3333
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Miguel do Aleixo",
        "Resposta": {
            "destination_addresses": [
                "São Miguel do Aleixo, SE, 49535-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "82,1 km",
                                "value": 82099
                            },
                            "duration": {
                                "text": "1 hora 38 minutos",
                                "value": 5866
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Capela",
        "Resposta": {
            "destination_addresses": [
                "Capela - SE, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "21,7 km",
                                "value": 21722
                            },
                            "duration": {
                                "text": "23 minutos",
                                "value": 1368
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Monte Alegre de Sergipe",
        "Resposta": {
            "destination_addresses": [
                "Monte Alegre de Sergipe, SE, 49690-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "112 km",
                                "value": 112442
                            },
                            "duration": {
                                "text": "2 horas 2 minutos",
                                "value": 7319
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Salgado",
        "Resposta": {
            "destination_addresses": [
                "Salgado - SE, 49390-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "94,5 km",
                                "value": 94490
                            },
                            "duration": {
                                "text": "1 hora 31 minutos",
                                "value": 5467
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Laranjeiras",
        "Resposta": {
            "destination_addresses": [
                "Laranjeiras - SE, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "39,4 km",
                                "value": 39387
                            },
                            "duration": {
                                "text": "46 minutos",
                                "value": 2782
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Frei Paulo",
        "Resposta": {
            "destination_addresses": [
                "Frei Paulo - SE, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "94,0 km",
                                "value": 94012
                            },
                            "duration": {
                                "text": "1 hora 33 minutos",
                                "value": 5597
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Graccho Cardoso",
        "Resposta": {
            "destination_addresses": [
                "Gracho Cardoso - SE, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "71,3 km",
                                "value": 71329
                            },
                            "duration": {
                                "text": "1 hora 11 minutos",
                                "value": 4258
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Poço Redondo",
        "Resposta": {
            "destination_addresses": [
                "Poço Redondo - SE, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "142 km",
                                "value": 141626
                            },
                            "duration": {
                                "text": "2 horas 34 minutos",
                                "value": 9221
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Francisco",
        "Resposta": {
            "destination_addresses": [
                "São Francisco - SE, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "34,2 km",
                                "value": 34152
                            },
                            "duration": {
                                "text": "30 minutos",
                                "value": 1784
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Aracaju",
        "Resposta": {
            "destination_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "58,3 km",
                                "value": 58259
                            },
                            "duration": {
                                "text": "1 hora 9 minutos",
                                "value": 4120
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Tobias Barreto",
        "Resposta": {
            "destination_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "171 km",
                                "value": 171061
                            },
                            "duration": {
                                "text": "2 horas 47 minutos",
                                "value": 10021
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Ilha das Flores",
        "Resposta": {
            "destination_addresses": [
                "Ilha das Flores - SE, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "85,6 km",
                                "value": 85606
                            },
                            "duration": {
                                "text": "1 hora 19 minutos",
                                "value": 4748
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Moita Bonita",
        "Resposta": {
            "destination_addresses": [
                "Moita Bonita - SE, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "73,8 km",
                                "value": 73823
                            },
                            "duration": {
                                "text": "1 hora 12 minutos",
                                "value": 4292
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Poço Verde",
        "Resposta": {
            "destination_addresses": [
                "Poço Verde, SE, 49490-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "186 km",
                                "value": 185913
                            },
                            "duration": {
                                "text": "3 horas 4 minutos",
                                "value": 11050
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Maruim",
        "Resposta": {
            "destination_addresses": [
                "Maruim - SE, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "28,3 km",
                                "value": 28338
                            },
                            "duration": {
                                "text": "31 minutos",
                                "value": 1856
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Muribeca",
        "Resposta": {
            "destination_addresses": [
                "Muribeca, SE, 49780-000, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "37,3 km",
                                "value": 37331
                            },
                            "duration": {
                                "text": "37 minutos",
                                "value": 2196
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Lagarto",
        "Resposta": {
            "destination_addresses": [
                "Lagarto - SE, Brasil"
            ],
            "origin_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "119 km",
                                "value": 119188
                            },
                            "duration": {
                                "text": "2 horas 2 minutos",
                                "value": 7335
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    }
]

const conde = [
    {
        "Destino": "Santa Rosa de Lima",
        "Resposta": {
            "destination_addresses": [
                "Santa Rosa de Lima, SE, 49640-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "176 km",
                                "value": 175901
                            },
                            "duration": {
                                "text": "2 horas 38 minutos",
                                "value": 9463
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Feira Nova",
        "Resposta": {
            "destination_addresses": [
                "Feira Nova - SE, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "234 km",
                                "value": 233934
                            },
                            "duration": {
                                "text": "3 horas 37 minutos",
                                "value": 13035
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pinhão",
        "Resposta": {
            "destination_addresses": [
                "Pinhão - SE, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "187 km",
                                "value": 186732
                            },
                            "duration": {
                                "text": "3 horas 12 minutos",
                                "value": 11537
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Umbaúba",
        "Resposta": {
            "destination_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "73,6 km",
                                "value": 73609
                            },
                            "duration": {
                                "text": "1 hora 10 minutos",
                                "value": 4211
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Santo Amaro das Brotas",
        "Resposta": {
            "destination_addresses": [
                "Santo Amaro das Brotas, SE, 49180-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "189 km",
                                "value": 189032
                            },
                            "duration": {
                                "text": "3 horas 1 minuto",
                                "value": 10853
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Cumbe",
        "Resposta": {
            "destination_addresses": [
                "Cumbe, SE, 49660-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "220 km",
                                "value": 220015
                            },
                            "duration": {
                                "text": "3 horas 27 minutos",
                                "value": 12435
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Riachão do Dantas",
        "Resposta": {
            "destination_addresses": [
                "Riachão do Dantas, SE, 49320-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "118 km",
                                "value": 117908
                            },
                            "duration": {
                                "text": "2 horas 2 minutos",
                                "value": 7320
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Itaporanga d'Ajuda",
        "Resposta": {
            "destination_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "120 km",
                                "value": 119673
                            },
                            "duration": {
                                "text": "1 hora 48 minutos",
                                "value": 6451
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Santana do São Francisco",
        "Resposta": {
            "destination_addresses": [
                "Santana do São Francisco, SE, 49985-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "275 km",
                                "value": 275422
                            },
                            "duration": {
                                "text": "4 horas 11 minutos",
                                "value": 15031
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Macambira",
        "Resposta": {
            "destination_addresses": [
                "Macambira, SE, 49565-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "184 km",
                                "value": 183558
                            },
                            "duration": {
                                "text": "2 horas 55 minutos",
                                "value": 10503
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Carmópolis",
        "Resposta": {
            "destination_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "203 km",
                                "value": 203200
                            },
                            "duration": {
                                "text": "3 horas 10 minutos",
                                "value": 11372
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pirambu",
        "Resposta": {
            "destination_addresses": [
                "Pirambu - SE, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "186 km",
                                "value": 185890
                            },
                            "duration": {
                                "text": "2 horas 56 minutos",
                                "value": 10569
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Malhador",
        "Resposta": {
            "destination_addresses": [
                "Malhador, SE, 49570-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "184 km",
                                "value": 183977
                            },
                            "duration": {
                                "text": "2 horas 48 minutos",
                                "value": 10106
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "General Maynard",
        "Resposta": {
            "destination_addresses": [
                "Gen. Maynard, SE, 49750-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "209 km",
                                "value": 208940
                            },
                            "duration": {
                                "text": "3 horas 17 minutos",
                                "value": 11833
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Neópolis",
        "Resposta": {
            "destination_addresses": [
                "Neópolis, SE, 49980-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "273 km",
                                "value": 272587
                            },
                            "duration": {
                                "text": "4 horas 6 minutos",
                                "value": 14746
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Monte Alegre de Sergipe",
        "Resposta": {
            "destination_addresses": [
                "Monte Alegre de Sergipe, SE, 49690-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "280 km",
                                "value": 279729
                            },
                            "duration": {
                                "text": "4 horas 23 minutos",
                                "value": 15809
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora de Lourdes",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. de Lourdes, SE, 49890-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "278 km",
                                "value": 277552
                            },
                            "duration": {
                                "text": "4 horas 21 minutos",
                                "value": 15630
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Boquim",
        "Resposta": {
            "destination_addresses": [
                "Boquim, SE, 49360-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "108 km",
                                "value": 108187
                            },
                            "duration": {
                                "text": "1 hora 43 minutos",
                                "value": 6187
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Salgado",
        "Resposta": {
            "destination_addresses": [
                "Salgado - SE, 49390-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "123 km",
                                "value": 123048
                            },
                            "duration": {
                                "text": "1 hora 50 minutos",
                                "value": 6599
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Muribeca",
        "Resposta": {
            "destination_addresses": [
                "Muribeca, SE, 49780-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "242 km",
                                "value": 241674
                            },
                            "duration": {
                                "text": "3 horas 43 minutos",
                                "value": 13409
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Riachuelo",
        "Resposta": {
            "destination_addresses": [
                "Riachuelo - SE, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "164 km",
                                "value": 164332
                            },
                            "duration": {
                                "text": "2 horas 23 minutos",
                                "value": 8605
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Indiaroba",
        "Resposta": {
            "destination_addresses": [
                "Indiaroba, SE, 49250-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "48,9 km",
                                "value": 48895
                            },
                            "duration": {
                                "text": "43 minutos",
                                "value": 2581
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Tobias Barreto",
        "Resposta": {
            "destination_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "124 km",
                                "value": 124077
                            },
                            "duration": {
                                "text": "2 horas 9 minutos",
                                "value": 7766
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Laranjeiras",
        "Resposta": {
            "destination_addresses": [
                "Laranjeiras - SE, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "156 km",
                                "value": 156374
                            },
                            "duration": {
                                "text": "2 horas 18 minutos",
                                "value": 8271
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Gararu",
        "Resposta": {
            "destination_addresses": [
                "Gararu, SE, 49830-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "289 km",
                                "value": 288574
                            },
                            "duration": {
                                "text": "4 horas 30 minutos",
                                "value": 16195
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Miguel do Aleixo",
        "Resposta": {
            "destination_addresses": [
                "São Miguel do Aleixo, SE, 49535-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "237 km",
                                "value": 237172
                            },
                            "duration": {
                                "text": "3 horas 38 minutos",
                                "value": 13105
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Arauá",
        "Resposta": {
            "destination_addresses": [
                "Arauá, SE, 49220-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "91,6 km",
                                "value": 91650
                            },
                            "duration": {
                                "text": "1 hora 34 minutos",
                                "value": 5662
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Aquidabã",
        "Resposta": {
            "destination_addresses": [
                "Aquidabã, SE, 49790-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "255 km",
                                "value": 254576
                            },
                            "duration": {
                                "text": "3 horas 56 minutos",
                                "value": 14178
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Aracaju",
        "Resposta": {
            "destination_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "151 km",
                                "value": 150894
                            },
                            "duration": {
                                "text": "2 horas 16 minutos",
                                "value": 8153
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Cedro de São João",
        "Resposta": {
            "destination_addresses": [
                "Cedro de São João, SE, 49930-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "265 km",
                                "value": 265330
                            },
                            "duration": {
                                "text": "3 horas 58 minutos",
                                "value": 14297
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Domingos",
        "Resposta": {
            "destination_addresses": [
                "São Domingos - SE, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "167 km",
                                "value": 166611
                            },
                            "duration": {
                                "text": "2 horas 39 minutos",
                                "value": 9557
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Itabaiana",
        "Resposta": {
            "destination_addresses": [
                "Itabaiana, SE, 49500-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "189 km",
                                "value": 189362
                            },
                            "duration": {
                                "text": "2 horas 51 minutos",
                                "value": 10265
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Francisco",
        "Resposta": {
            "destination_addresses": [
                "São Francisco - SE, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "238 km",
                                "value": 238495
                            },
                            "duration": {
                                "text": "3 horas 37 minutos",
                                "value": 12997
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Simão Dias",
        "Resposta": {
            "destination_addresses": [
                "Simão Dias, SE, 49480-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "163 km",
                                "value": 162993
                            },
                            "duration": {
                                "text": "2 horas 51 minutos",
                                "value": 10240
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Maruim",
        "Resposta": {
            "destination_addresses": [
                "Maruim - SE, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "190 km",
                                "value": 189895
                            },
                            "duration": {
                                "text": "3 horas 0 minutos",
                                "value": 10799
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Rosário do Catete",
        "Resposta": {
            "destination_addresses": [
                "Rosário do Catete, SE, 49760-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "196 km",
                                "value": 195581
                            },
                            "duration": {
                                "text": "3 horas 5 minutos",
                                "value": 11125
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Capela",
        "Resposta": {
            "destination_addresses": [
                "Capela - SE, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "200 km",
                                "value": 199671
                            },
                            "duration": {
                                "text": "3 horas 22 minutos",
                                "value": 12138
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora da Glória",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. da Glória, SE, 49680-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "251 km",
                                "value": 250952
                            },
                            "duration": {
                                "text": "3 horas 53 minutos",
                                "value": 13970
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Poço Verde",
        "Resposta": {
            "destination_addresses": [
                "Poço Verde, SE, 49490-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "179 km",
                                "value": 179453
                            },
                            "duration": {
                                "text": "3 horas 34 minutos",
                                "value": 12844
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pedrinhas",
        "Resposta": {
            "destination_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "102 km",
                                "value": 101519
                            },
                            "duration": {
                                "text": "1 hora 46 minutos",
                                "value": 6374
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Estância",
        "Resposta": {
            "destination_addresses": [
                "Estância - SE, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "82,1 km",
                                "value": 82079
                            },
                            "duration": {
                                "text": "1 hora 14 minutos",
                                "value": 4466
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Amparo de São Francisco",
        "Resposta": {
            "destination_addresses": [
                "Amparo de São Francisco, Amparo do São Francisco - SE, 49920-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "275 km",
                                "value": 275190
                            },
                            "duration": {
                                "text": "4 horas 12 minutos",
                                "value": 15140
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Ilha das Flores",
        "Resposta": {
            "destination_addresses": [
                "Ilha das Flores - SE, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "251 km",
                                "value": 250657
                            },
                            "duration": {
                                "text": "4 horas 12 minutos",
                                "value": 15130
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Cristinápolis",
        "Resposta": {
            "destination_addresses": [
                "Cristinápolis, SE, 49270-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "84,2 km",
                                "value": 84207
                            },
                            "duration": {
                                "text": "1 hora 22 minutos",
                                "value": 4908
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Cristóvão",
        "Resposta": {
            "destination_addresses": [
                "São Cristóvão - SE, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "138 km",
                                "value": 137500
                            },
                            "duration": {
                                "text": "2 horas 3 minutos",
                                "value": 7359
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Campo do Brito",
        "Resposta": {
            "destination_addresses": [
                "Campo do Brito, SE, 49520-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "175 km",
                                "value": 174578
                            },
                            "duration": {
                                "text": "2 horas 45 minutos",
                                "value": 9896
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Carira",
        "Resposta": {
            "destination_addresses": [
                "Carira, SE, 49550-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "219 km",
                                "value": 219212
                            },
                            "duration": {
                                "text": "3 horas 39 minutos",
                                "value": 13111
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Japaratuba",
        "Resposta": {
            "destination_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "210 km",
                                "value": 210378
                            },
                            "duration": {
                                "text": "3 horas 14 minutos",
                                "value": 11646
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Santa Luzia do Itanhy",
        "Resposta": {
            "destination_addresses": [
                "Santa Luzia do Itanhy, SE, 49230-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "71,4 km",
                                "value": 71413
                            },
                            "duration": {
                                "text": "1 hora 2 minutos",
                                "value": 3720
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Telha",
        "Resposta": {
            "destination_addresses": [
                "Telha - SE, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "265 km",
                                "value": 265442
                            },
                            "duration": {
                                "text": "4 horas 2 minutos",
                                "value": 14546
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Propriá",
        "Resposta": {
            "destination_addresses": [
                "Propriá, SE, 49900-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "257 km",
                                "value": 256584
                            },
                            "duration": {
                                "text": "3 horas 52 minutos",
                                "value": 13939
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Moita Bonita",
        "Resposta": {
            "destination_addresses": [
                "Moita Bonita - SE, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "197 km",
                                "value": 197224
                            },
                            "duration": {
                                "text": "3 horas 2 minutos",
                                "value": 10936
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora das Dores",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. das Dores, SE, 49600-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "203 km",
                                "value": 203022
                            },
                            "duration": {
                                "text": "3 horas 8 minutos",
                                "value": 11278
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Divina Pastora",
        "Resposta": {
            "destination_addresses": [
                "Divina Pastora, SE, 49650-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "174 km",
                                "value": 173965
                            },
                            "duration": {
                                "text": "2 horas 35 minutos",
                                "value": 9319
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Canindé de São Francisco",
        "Resposta": {
            "destination_addresses": [
                "Canindé de São Francisco, SE, 49820-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "330 km",
                                "value": 329793
                            },
                            "duration": {
                                "text": "5 horas 17 minutos",
                                "value": 18990
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Tomar do Geru",
        "Resposta": {
            "destination_addresses": [
                "Tomar do Geru, SE, 49280-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "101 km",
                                "value": 101327
                            },
                            "duration": {
                                "text": "1 hora 48 minutos",
                                "value": 6468
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Itabaianinha",
        "Resposta": {
            "destination_addresses": [
                "Itabaianinha, SE, 49290-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "93,4 km",
                                "value": 93384
                            },
                            "duration": {
                                "text": "1 hora 35 minutos",
                                "value": 5711
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Siriri",
        "Resposta": {
            "destination_addresses": [
                "Siriri, SE, 49630-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "185 km",
                                "value": 184882
                            },
                            "duration": {
                                "text": "2 horas 49 minutos",
                                "value": 10110
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Poço Redondo",
        "Resposta": {
            "destination_addresses": [
                "Poço Redondo - SE, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "309 km",
                                "value": 308913
                            },
                            "duration": {
                                "text": "4 horas 55 minutos",
                                "value": 17711
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Japoatã",
        "Resposta": {
            "destination_addresses": [
                "Japoatã, SE, 49950-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "248 km",
                                "value": 247592
                            },
                            "duration": {
                                "text": "3 horas 45 minutos",
                                "value": 13481
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Itabi",
        "Resposta": {
            "destination_addresses": [
                "Itabi, SE, 49870-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "265 km",
                                "value": 265275
                            },
                            "duration": {
                                "text": "4 horas 9 minutos",
                                "value": 14930
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Ribeirópolis",
        "Resposta": {
            "destination_addresses": [
                "Ribeirópolis, SE, 49530-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "210 km",
                                "value": 210495
                            },
                            "duration": {
                                "text": "3 horas 12 minutos",
                                "value": 11495
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pacatuba",
        "Resposta": {
            "destination_addresses": [
                "Pacatuba, SE, 49970-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "244 km",
                                "value": 243720
                            },
                            "duration": {
                                "text": "4 horas 5 minutos",
                                "value": 14679
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora Aparecida",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. Aparecida - SE, 49540-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "228 km",
                                "value": 228240
                            },
                            "duration": {
                                "text": "3 horas 29 minutos",
                                "value": 12524
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Areia Branca",
        "Resposta": {
            "destination_addresses": [
                "Areia Branca, SE, 49580-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "171 km",
                                "value": 170766
                            },
                            "duration": {
                                "text": "2 horas 29 minutos",
                                "value": 8946
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Frei Paulo",
        "Resposta": {
            "destination_addresses": [
                "Frei Paulo - SE, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "209 km",
                                "value": 209371
                            },
                            "duration": {
                                "text": "3 horas 10 minutos",
                                "value": 11385
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Canhoba",
        "Resposta": {
            "destination_addresses": [
                "Canhoba, SE, 49880-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "277 km",
                                "value": 277014
                            },
                            "duration": {
                                "text": "4 horas 13 minutos",
                                "value": 15154
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Graccho Cardoso",
        "Resposta": {
            "destination_addresses": [
                "Gracho Cardoso - SE, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "247 km",
                                "value": 246744
                            },
                            "duration": {
                                "text": "3 horas 49 minutos",
                                "value": 13710
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Barra dos Coqueiros",
        "Resposta": {
            "destination_addresses": [
                "Barra dos Coqueiros, SE, 49140-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "156 km",
                                "value": 155689
                            },
                            "duration": {
                                "text": "2 horas 25 minutos",
                                "value": 8689
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Porto da Folha",
        "Resposta": {
            "destination_addresses": [
                "Porto da Folha, SE, 49800-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "286 km",
                                "value": 286059
                            },
                            "duration": {
                                "text": "4 horas 49 minutos",
                                "value": 17338
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Brejo Grande",
        "Resposta": {
            "destination_addresses": [
                "Brejo Grande, SE, 49995-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "254 km",
                                "value": 253916
                            },
                            "duration": {
                                "text": "4 horas 13 minutos",
                                "value": 15166
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Lagarto",
        "Resposta": {
            "destination_addresses": [
                "Lagarto - SE, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "138 km",
                                "value": 137800
                            },
                            "duration": {
                                "text": "2 horas 24 minutos",
                                "value": 8660
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Malhada dos Bois",
        "Resposta": {
            "destination_addresses": [
                "Malhada dos Bois, SE, 49940-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "240 km",
                                "value": 240389
                            },
                            "duration": {
                                "text": "3 horas 41 minutos",
                                "value": 13255
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pedra Mole",
        "Resposta": {
            "destination_addresses": [
                "Pedra Mole, SE, 49512-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "189 km",
                                "value": 189289
                            },
                            "duration": {
                                "text": "3 horas 22 minutos",
                                "value": 12108
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora do Socorro",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. do Socorro, SE, 49160-000, Brasil"
            ],
            "origin_addresses": [
                "Conde - BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "150 km",
                                "value": 149626
                            },
                            "duration": {
                                "text": "2 horas 10 minutos",
                                "value": 7826
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    }
]

const tobias = [
    {
        "Destino": "Pedrinhas",
        "Resposta": {
            "destination_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "49,7 km",
                                "value": 49711
                            },
                            "duration": {
                                "text": "47 minutos",
                                "value": 2837
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora Aparecida",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. Aparecida - SE, 49540-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "132 km",
                                "value": 132328
                            },
                            "duration": {
                                "text": "2 horas 10 minutos",
                                "value": 7813
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora das Dores",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. das Dores, SE, 49600-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "141 km",
                                "value": 140885
                            },
                            "duration": {
                                "text": "2 horas 29 minutos",
                                "value": 8959
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Ribeirópolis",
        "Resposta": {
            "destination_addresses": [
                "Ribeirópolis, SE, 49530-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "115 km",
                                "value": 114583
                            },
                            "duration": {
                                "text": "1 hora 53 minutos",
                                "value": 6783
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pinhão",
        "Resposta": {
            "destination_addresses": [
                "Pinhão - SE, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "102 km",
                                "value": 101586
                            },
                            "duration": {
                                "text": "1 hora 39 minutos",
                                "value": 5927
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Amparo de São Francisco",
        "Resposta": {
            "destination_addresses": [
                "Amparo de São Francisco, Amparo do São Francisco - SE, 49920-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "240 km",
                                "value": 240100
                            },
                            "duration": {
                                "text": "4 horas 1 minuto",
                                "value": 14430
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Macambira",
        "Resposta": {
            "destination_addresses": [
                "Macambira, SE, 49565-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "91,0 km",
                                "value": 91031
                            },
                            "duration": {
                                "text": "1 hora 29 minutos",
                                "value": 5354
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Cedro de São João",
        "Resposta": {
            "destination_addresses": [
                "Cedro de São João, SE, 49930-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "230 km",
                                "value": 230239
                            },
                            "duration": {
                                "text": "3 horas 46 minutos",
                                "value": 13588
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora do Socorro",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. do Socorro, SE, 49160-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "130 km",
                                "value": 130127
                            },
                            "duration": {
                                "text": "2 horas 2 minutos",
                                "value": 7324
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora da Glória",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. da Glória, SE, 49680-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "155 km",
                                "value": 155040
                            },
                            "duration": {
                                "text": "2 horas 34 minutos",
                                "value": 9258
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Gararu",
        "Resposta": {
            "destination_addresses": [
                "Gararu, SE, 49830-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "225 km",
                                "value": 224855
                            },
                            "duration": {
                                "text": "3 horas 45 minutos",
                                "value": 13506
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Cristóvão",
        "Resposta": {
            "destination_addresses": [
                "São Cristóvão - SE, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "118 km",
                                "value": 118000
                            },
                            "duration": {
                                "text": "1 hora 54 minutos",
                                "value": 6856
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Itabaianinha",
        "Resposta": {
            "destination_addresses": [
                "Itabaianinha, SE, 49290-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "30,9 km",
                                "value": 30892
                            },
                            "duration": {
                                "text": "35 minutos",
                                "value": 2103
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Graccho Cardoso",
        "Resposta": {
            "destination_addresses": [
                "Gracho Cardoso - SE, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "183 km",
                                "value": 183025
                            },
                            "duration": {
                                "text": "3 horas 4 minutos",
                                "value": 11021
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Carmópolis",
        "Resposta": {
            "destination_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "168 km",
                                "value": 168109
                            },
                            "duration": {
                                "text": "2 horas 58 minutos",
                                "value": 10662
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Riachuelo",
        "Resposta": {
            "destination_addresses": [
                "Riachuelo - SE, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "129 km",
                                "value": 129241
                            },
                            "duration": {
                                "text": "2 horas 12 minutos",
                                "value": 7895
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Muribeca",
        "Resposta": {
            "destination_addresses": [
                "Muribeca, SE, 49780-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "182 km",
                                "value": 182088
                            },
                            "duration": {
                                "text": "3 horas 22 minutos",
                                "value": 12143
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Santa Luzia do Itanhy",
        "Resposta": {
            "destination_addresses": [
                "Santa Luzia do Itanhy, SE, 49230-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "88,3 km",
                                "value": 88255
                            },
                            "duration": {
                                "text": "1 hora 37 minutos",
                                "value": 5835
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Feira Nova",
        "Resposta": {
            "destination_addresses": [
                "Feira Nova - SE, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "169 km",
                                "value": 168736
                            },
                            "duration": {
                                "text": "2 horas 49 minutos",
                                "value": 10168
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Umbaúba",
        "Resposta": {
            "destination_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "51,1 km",
                                "value": 51076
                            },
                            "duration": {
                                "text": "1 hora 1 minuto",
                                "value": 3684
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora de Lourdes",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. de Lourdes, SE, 49890-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "214 km",
                                "value": 213832
                            },
                            "duration": {
                                "text": "3 horas 36 minutos",
                                "value": 12941
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Divina Pastora",
        "Resposta": {
            "destination_addresses": [
                "Divina Pastora, SE, 49650-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "139 km",
                                "value": 138874
                            },
                            "duration": {
                                "text": "2 horas 23 minutos",
                                "value": 8609
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Santa Rosa de Lima",
        "Resposta": {
            "destination_addresses": [
                "Santa Rosa de Lima, SE, 49640-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "131 km",
                                "value": 130503
                            },
                            "duration": {
                                "text": "2 horas 25 minutos",
                                "value": 8689
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pirambu",
        "Resposta": {
            "destination_addresses": [
                "Pirambu - SE, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "166 km",
                                "value": 166391
                            },
                            "duration": {
                                "text": "2 horas 48 minutos",
                                "value": 10066
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Indiaroba",
        "Resposta": {
            "destination_addresses": [
                "Indiaroba, SE, 49250-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "85,6 km",
                                "value": 85646
                            },
                            "duration": {
                                "text": "1 hora 39 minutos",
                                "value": 5960
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Laranjeiras",
        "Resposta": {
            "destination_addresses": [
                "Laranjeiras - SE, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "133 km",
                                "value": 132863
                            },
                            "duration": {
                                "text": "2 horas 16 minutos",
                                "value": 8130
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Malhador",
        "Resposta": {
            "destination_addresses": [
                "Malhador, SE, 49570-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "111 km",
                                "value": 110709
                            },
                            "duration": {
                                "text": "1 hora 57 minutos",
                                "value": 7042
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Tobias Barreto",
        "Resposta": {
            "destination_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "1 m",
                                "value": 0
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 0
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Rosário do Catete",
        "Resposta": {
            "destination_addresses": [
                "Rosário do Catete, SE, 49760-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "166 km",
                                "value": 166335
                            },
                            "duration": {
                                "text": "2 horas 53 minutos",
                                "value": 10392
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Brejo Grande",
        "Resposta": {
            "destination_addresses": [
                "Brejo Grande, SE, 49995-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "234 km",
                                "value": 234416
                            },
                            "duration": {
                                "text": "4 horas 4 minutos",
                                "value": 14663
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Itaporanga d'Ajuda",
        "Resposta": {
            "destination_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "100 km",
                                "value": 100174
                            },
                            "duration": {
                                "text": "1 hora 39 minutos",
                                "value": 5949
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Neópolis",
        "Resposta": {
            "destination_addresses": [
                "Neópolis, SE, 49980-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "237 km",
                                "value": 237496
                            },
                            "duration": {
                                "text": "3 horas 54 minutos",
                                "value": 14036
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Siriri",
        "Resposta": {
            "destination_addresses": [
                "Siriri, SE, 49630-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "150 km",
                                "value": 149791
                            },
                            "duration": {
                                "text": "2 horas 37 minutos",
                                "value": 9401
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Itabaiana",
        "Resposta": {
            "destination_addresses": [
                "Itabaiana, SE, 49500-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "93,5 km",
                                "value": 93451
                            },
                            "duration": {
                                "text": "1 hora 33 minutos",
                                "value": 5554
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Estância",
        "Resposta": {
            "destination_addresses": [
                "Estância - SE, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "84,8 km",
                                "value": 84767
                            },
                            "duration": {
                                "text": "1 hora 27 minutos",
                                "value": 5234
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Capela",
        "Resposta": {
            "destination_addresses": [
                "Capela - SE, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "160 km",
                                "value": 159790
                            },
                            "duration": {
                                "text": "2 horas 55 minutos",
                                "value": 10477
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Tomar do Geru",
        "Resposta": {
            "destination_addresses": [
                "Tomar do Geru, SE, 49280-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "45,3 km",
                                "value": 45348
                            },
                            "duration": {
                                "text": "51 minutos",
                                "value": 3064
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Santana do São Francisco",
        "Resposta": {
            "destination_addresses": [
                "Santana do São Francisco, SE, 49985-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "240 km",
                                "value": 240332
                            },
                            "duration": {
                                "text": "3 horas 59 minutos",
                                "value": 14322
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Japoatã",
        "Resposta": {
            "destination_addresses": [
                "Japoatã, SE, 49950-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "213 km",
                                "value": 212501
                            },
                            "duration": {
                                "text": "3 horas 33 minutos",
                                "value": 12771
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Simão Dias",
        "Resposta": {
            "destination_addresses": [
                "Simão Dias, SE, 49480-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "77,8 km",
                                "value": 77848
                            },
                            "duration": {
                                "text": "1 hora 17 minutos",
                                "value": 4629
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Japaratuba",
        "Resposta": {
            "destination_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "175 km",
                                "value": 175288
                            },
                            "duration": {
                                "text": "3 horas 2 minutos",
                                "value": 10936
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Santo Amaro das Brotas",
        "Resposta": {
            "destination_addresses": [
                "Santo Amaro das Brotas, SE, 49180-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "170 km",
                                "value": 169533
                            },
                            "duration": {
                                "text": "2 horas 53 minutos",
                                "value": 10350
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Campo do Brito",
        "Resposta": {
            "destination_addresses": [
                "Campo do Brito, SE, 49520-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "82,1 km",
                                "value": 82051
                            },
                            "duration": {
                                "text": "1 hora 19 minutos",
                                "value": 4748
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Salgado",
        "Resposta": {
            "destination_addresses": [
                "Salgado - SE, 49390-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "76,9 km",
                                "value": 76937
                            },
                            "duration": {
                                "text": "1 hora 18 minutos",
                                "value": 4689
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Lagarto",
        "Resposta": {
            "destination_addresses": [
                "Lagarto - SE, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "52,7 km",
                                "value": 52654
                            },
                            "duration": {
                                "text": "51 minutos",
                                "value": 3050
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Boquim",
        "Resposta": {
            "destination_addresses": [
                "Boquim, SE, 49360-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "57,6 km",
                                "value": 57574
                            },
                            "duration": {
                                "text": "55 minutos",
                                "value": 3314
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Monte Alegre de Sergipe",
        "Resposta": {
            "destination_addresses": [
                "Monte Alegre de Sergipe, SE, 49690-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "194 km",
                                "value": 193503
                            },
                            "duration": {
                                "text": "3 horas 4 minutos",
                                "value": 11054
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Francisco",
        "Resposta": {
            "destination_addresses": [
                "São Francisco - SE, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "203 km",
                                "value": 203404
                            },
                            "duration": {
                                "text": "3 horas 25 minutos",
                                "value": 12287
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Aracaju",
        "Resposta": {
            "destination_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "131 km",
                                "value": 131395
                            },
                            "duration": {
                                "text": "2 horas 8 minutos",
                                "value": 7651
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Canhoba",
        "Resposta": {
            "destination_addresses": [
                "Canhoba, SE, 49880-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "228 km",
                                "value": 228106
                            },
                            "duration": {
                                "text": "3 horas 51 minutos",
                                "value": 13866
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Aquidabã",
        "Resposta": {
            "destination_addresses": [
                "Aquidabã, SE, 49790-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "182 km",
                                "value": 182150
                            },
                            "duration": {
                                "text": "3 horas 29 minutos",
                                "value": 12519
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Maruim",
        "Resposta": {
            "destination_addresses": [
                "Maruim - SE, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "151 km",
                                "value": 150598
                            },
                            "duration": {
                                "text": "2 horas 50 minutos",
                                "value": 10193
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Porto da Folha",
        "Resposta": {
            "destination_addresses": [
                "Porto da Folha, SE, 49800-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "235 km",
                                "value": 235188
                            },
                            "duration": {
                                "text": "3 horas 48 minutos",
                                "value": 13705
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Moita Bonita",
        "Resposta": {
            "destination_addresses": [
                "Moita Bonita - SE, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "109 km",
                                "value": 109336
                            },
                            "duration": {
                                "text": "1 hora 55 minutos",
                                "value": 6880
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Barra dos Coqueiros",
        "Resposta": {
            "destination_addresses": [
                "Barra dos Coqueiros, SE, 49140-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "136 km",
                                "value": 136190
                            },
                            "duration": {
                                "text": "2 horas 16 minutos",
                                "value": 8187
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Areia Branca",
        "Resposta": {
            "destination_addresses": [
                "Areia Branca, SE, 49580-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "108 km",
                                "value": 108100
                            },
                            "duration": {
                                "text": "1 hora 46 minutos",
                                "value": 6386
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Cumbe",
        "Resposta": {
            "destination_addresses": [
                "Cumbe, SE, 49660-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "158 km",
                                "value": 157878
                            },
                            "duration": {
                                "text": "2 horas 49 minutos",
                                "value": 10116
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pacatuba",
        "Resposta": {
            "destination_addresses": [
                "Pacatuba, SE, 49970-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "233 km",
                                "value": 232734
                            },
                            "duration": {
                                "text": "3 horas 53 minutos",
                                "value": 13960
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Poço Redondo",
        "Resposta": {
            "destination_addresses": [
                "Poço Redondo - SE, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "223 km",
                                "value": 222686
                            },
                            "duration": {
                                "text": "3 horas 36 minutos",
                                "value": 12955
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Arauá",
        "Resposta": {
            "destination_addresses": [
                "Arauá, SE, 49220-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "59,5 km",
                                "value": 59471
                            },
                            "duration": {
                                "text": "59 minutos",
                                "value": 3510
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Miguel do Aleixo",
        "Resposta": {
            "destination_addresses": [
                "São Miguel do Aleixo, SE, 49535-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "141 km",
                                "value": 141261
                            },
                            "duration": {
                                "text": "2 horas 20 minutos",
                                "value": 8394
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "General Maynard",
        "Resposta": {
            "destination_addresses": [
                "Gen. Maynard, SE, 49750-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "174 km",
                                "value": 173849
                            },
                            "duration": {
                                "text": "3 horas 5 minutos",
                                "value": 11124
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Riachão do Dantas",
        "Resposta": {
            "destination_addresses": [
                "Riachão do Dantas, SE, 49320-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "33,1 km",
                                "value": 33089
                            },
                            "duration": {
                                "text": "30 minutos",
                                "value": 1772
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Canindé de São Francisco",
        "Resposta": {
            "destination_addresses": [
                "Canindé de São Francisco, SE, 49820-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "244 km",
                                "value": 243567
                            },
                            "duration": {
                                "text": "3 horas 57 minutos",
                                "value": 14234
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Carira",
        "Resposta": {
            "destination_addresses": [
                "Carira, SE, 49550-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "134 km",
                                "value": 134066
                            },
                            "duration": {
                                "text": "2 horas 5 minutos",
                                "value": 7501
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Frei Paulo",
        "Resposta": {
            "destination_addresses": [
                "Frei Paulo - SE, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "113 km",
                                "value": 113459
                            },
                            "duration": {
                                "text": "1 hora 51 minutos",
                                "value": 6673
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Cristinápolis",
        "Resposta": {
            "destination_addresses": [
                "Cristinápolis, SE, 49270-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "62,1 km",
                                "value": 62086
                            },
                            "duration": {
                                "text": "1 hora 15 minutos",
                                "value": 4519
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Malhada dos Bois",
        "Resposta": {
            "destination_addresses": [
                "Malhada dos Bois, SE, 49940-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "205 km",
                                "value": 205298
                            },
                            "duration": {
                                "text": "3 horas 29 minutos",
                                "value": 12546
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Telha",
        "Resposta": {
            "destination_addresses": [
                "Telha - SE, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "230 km",
                                "value": 230351
                            },
                            "duration": {
                                "text": "3 horas 51 minutos",
                                "value": 13836
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Poço Verde",
        "Resposta": {
            "destination_addresses": [
                "Poço Verde, SE, 49490-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "56,3 km",
                                "value": 56277
                            },
                            "duration": {
                                "text": "1 hora 28 minutos",
                                "value": 5305
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pedra Mole",
        "Resposta": {
            "destination_addresses": [
                "Pedra Mole, SE, 49512-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "104 km",
                                "value": 104144
                            },
                            "duration": {
                                "text": "1 hora 48 minutos",
                                "value": 6498
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Propriá",
        "Resposta": {
            "destination_addresses": [
                "Propriá, SE, 49900-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "221 km",
                                "value": 221493
                            },
                            "duration": {
                                "text": "3 horas 40 minutos",
                                "value": 13229
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Domingos",
        "Resposta": {
            "destination_addresses": [
                "São Domingos - SE, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "74,1 km",
                                "value": 74084
                            },
                            "duration": {
                                "text": "1 hora 13 minutos",
                                "value": 4409
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Itabi",
        "Resposta": {
            "destination_addresses": [
                "Itabi, SE, 49870-000, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "202 km",
                                "value": 201556
                            },
                            "duration": {
                                "text": "3 horas 24 minutos",
                                "value": 12241
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Ilha das Flores",
        "Resposta": {
            "destination_addresses": [
                "Ilha das Flores - SE, Brasil"
            ],
            "origin_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "231 km",
                                "value": 231157
                            },
                            "duration": {
                                "text": "4 horas 4 minutos",
                                "value": 14627
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    }
]

const pedrinhas = [
    {
        "Destino": "Arauá",
        "Resposta": {
            "destination_addresses": [
                "Arauá, SE, 49220-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "9,8 km",
                                "value": 9831
                            },
                            "duration": {
                                "text": "12 minutos",
                                "value": 742
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Barra dos Coqueiros",
        "Resposta": {
            "destination_addresses": [
                "Barra dos Coqueiros, SE, 49140-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "96,6 km",
                                "value": 96594
                            },
                            "duration": {
                                "text": "1 hora 42 minutos",
                                "value": 6110
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Areia Branca",
        "Resposta": {
            "destination_addresses": [
                "Areia Branca, SE, 49580-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "91,9 km",
                                "value": 91935
                            },
                            "duration": {
                                "text": "1 hora 35 minutos",
                                "value": 5684
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Carmópolis",
        "Resposta": {
            "destination_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "144 km",
                                "value": 144104
                            },
                            "duration": {
                                "text": "2 horas 27 minutos",
                                "value": 8792
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Capela",
        "Resposta": {
            "destination_addresses": [
                "Capela - SE, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "144 km",
                                "value": 143626
                            },
                            "duration": {
                                "text": "2 horas 43 minutos",
                                "value": 9774
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Brejo Grande",
        "Resposta": {
            "destination_addresses": [
                "Brejo Grande, SE, 49995-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "195 km",
                                "value": 194821
                            },
                            "duration": {
                                "text": "3 horas 30 minutos",
                                "value": 12587
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Carira",
        "Resposta": {
            "destination_addresses": [
                "Carira, SE, 49550-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "118 km",
                                "value": 117901
                            },
                            "duration": {
                                "text": "1 hora 53 minutos",
                                "value": 6799
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Canhoba",
        "Resposta": {
            "destination_addresses": [
                "Canhoba, SE, 49880-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "218 km",
                                "value": 217919
                            },
                            "duration": {
                                "text": "3 horas 30 minutos",
                                "value": 12575
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Estância",
        "Resposta": {
            "destination_addresses": [
                "Estância - SE, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "35,5 km",
                                "value": 35481
                            },
                            "duration": {
                                "text": "42 minutos",
                                "value": 2523
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Divina Pastora",
        "Resposta": {
            "destination_addresses": [
                "Divina Pastora, SE, 49650-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "115 km",
                                "value": 114870
                            },
                            "duration": {
                                "text": "1 hora 52 minutos",
                                "value": 6740
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Itabaianinha",
        "Resposta": {
            "destination_addresses": [
                "Itabaianinha, SE, 49290-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "30,2 km",
                                "value": 30250
                            },
                            "duration": {
                                "text": "43 minutos",
                                "value": 2578
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Gararu",
        "Resposta": {
            "destination_addresses": [
                "Gararu, SE, 49830-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "209 km",
                                "value": 208690
                            },
                            "duration": {
                                "text": "3 horas 33 minutos",
                                "value": 12804
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Canindé de São Francisco",
        "Resposta": {
            "destination_addresses": [
                "Canindé de São Francisco, SE, 49820-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "227 km",
                                "value": 227402
                            },
                            "duration": {
                                "text": "3 horas 46 minutos",
                                "value": 13532
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Itabaiana",
        "Resposta": {
            "destination_addresses": [
                "Itabaiana, SE, 49500-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "77,3 km",
                                "value": 77286
                            },
                            "duration": {
                                "text": "1 hora 21 minutos",
                                "value": 4851
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Cedro de São João",
        "Resposta": {
            "destination_addresses": [
                "Cedro de São João, SE, 49930-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "206 km",
                                "value": 206235
                            },
                            "duration": {
                                "text": "3 horas 15 minutos",
                                "value": 11718
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Itabi",
        "Resposta": {
            "destination_addresses": [
                "Itabi, SE, 49870-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "185 km",
                                "value": 185391
                            },
                            "duration": {
                                "text": "3 horas 12 minutos",
                                "value": 11538
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Itaporanga d'Ajuda",
        "Resposta": {
            "destination_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "60,6 km",
                                "value": 60578
                            },
                            "duration": {
                                "text": "1 hora 5 minutos",
                                "value": 3872
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Neópolis",
        "Resposta": {
            "destination_addresses": [
                "Neópolis, SE, 49980-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "213 km",
                                "value": 213492
                            },
                            "duration": {
                                "text": "3 horas 23 minutos",
                                "value": 12167
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pedrinhas",
        "Resposta": {
            "destination_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "1 m",
                                "value": 0
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 0
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pinhão",
        "Resposta": {
            "destination_addresses": [
                "Pinhão - SE, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "85,4 km",
                                "value": 85422
                            },
                            "duration": {
                                "text": "1 hora 27 minutos",
                                "value": 5225
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pirambu",
        "Resposta": {
            "destination_addresses": [
                "Pirambu - SE, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "127 km",
                                "value": 126795
                            },
                            "duration": {
                                "text": "2 horas 13 minutos",
                                "value": 7990
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora das Dores",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. das Dores, SE, 49600-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "125 km",
                                "value": 124720
                            },
                            "duration": {
                                "text": "2 horas 18 minutos",
                                "value": 8257
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pedra Mole",
        "Resposta": {
            "destination_addresses": [
                "Pedra Mole, SE, 49512-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "88,0 km",
                                "value": 87979
                            },
                            "duration": {
                                "text": "1 hora 37 minutos",
                                "value": 5795
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora Aparecida",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. Aparecida - SE, 49540-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "116 km",
                                "value": 116164
                            },
                            "duration": {
                                "text": "1 hora 59 minutos",
                                "value": 7110
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Simão Dias",
        "Resposta": {
            "destination_addresses": [
                "Simão Dias, SE, 49480-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "61,7 km",
                                "value": 61683
                            },
                            "duration": {
                                "text": "1 hora 5 minutos",
                                "value": 3927
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Tomar do Geru",
        "Resposta": {
            "destination_addresses": [
                "Tomar do Geru, SE, 49280-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "51,8 km",
                                "value": 51764
                            },
                            "duration": {
                                "text": "1 hora 9 minutos",
                                "value": 4126
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora da Glória",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. da Glória, SE, 49680-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "139 km",
                                "value": 138876
                            },
                            "duration": {
                                "text": "2 horas 23 minutos",
                                "value": 8556
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora de Lourdes",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. de Lourdes, SE, 49890-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "198 km",
                                "value": 197668
                            },
                            "duration": {
                                "text": "3 horas 24 minutos",
                                "value": 12239
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Riachão do Dantas",
        "Resposta": {
            "destination_addresses": [
                "Riachão do Dantas, SE, 49320-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "16,6 km",
                                "value": 16598
                            },
                            "duration": {
                                "text": "17 minutos",
                                "value": 1007
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Riachuelo",
        "Resposta": {
            "destination_addresses": [
                "Riachuelo - SE, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "105 km",
                                "value": 105237
                            },
                            "duration": {
                                "text": "1 hora 40 minutos",
                                "value": 6026
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Domingos",
        "Resposta": {
            "destination_addresses": [
                "São Domingos - SE, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "57,9 km",
                                "value": 57920
                            },
                            "duration": {
                                "text": "1 hora 2 minutos",
                                "value": 3706
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Siriri",
        "Resposta": {
            "destination_addresses": [
                "Siriri, SE, 49630-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "126 km",
                                "value": 125786
                            },
                            "duration": {
                                "text": "2 horas 6 minutos",
                                "value": 7531
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Telha",
        "Resposta": {
            "destination_addresses": [
                "Telha - SE, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "206 km",
                                "value": 206347
                            },
                            "duration": {
                                "text": "3 horas 19 minutos",
                                "value": 11966
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Amparo de São Francisco",
        "Resposta": {
            "destination_addresses": [
                "Amparo de São Francisco, Amparo do São Francisco - SE, 49920-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "216 km",
                                "value": 216095
                            },
                            "duration": {
                                "text": "3 horas 29 minutos",
                                "value": 12561
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Cristóvão",
        "Resposta": {
            "destination_addresses": [
                "São Cristóvão - SE, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "78,4 km",
                                "value": 78405
                            },
                            "duration": {
                                "text": "1 hora 20 minutos",
                                "value": 4780
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Cumbe",
        "Resposta": {
            "destination_addresses": [
                "Cumbe, SE, 49660-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "142 km",
                                "value": 141713
                            },
                            "duration": {
                                "text": "2 horas 37 minutos",
                                "value": 9414
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Aquidabã",
        "Resposta": {
            "destination_addresses": [
                "Aquidabã, SE, 49790-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "166 km",
                                "value": 165985
                            },
                            "duration": {
                                "text": "3 horas 17 minutos",
                                "value": 11817
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora do Socorro",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. do Socorro, SE, 49160-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "90,5 km",
                                "value": 90531
                            },
                            "duration": {
                                "text": "1 hora 27 minutos",
                                "value": 5247
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Santana do São Francisco",
        "Resposta": {
            "destination_addresses": [
                "Santana do São Francisco, SE, 49985-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "216 km",
                                "value": 216327
                            },
                            "duration": {
                                "text": "3 horas 28 minutos",
                                "value": 12452
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "General Maynard",
        "Resposta": {
            "destination_addresses": [
                "Gen. Maynard, SE, 49750-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "150 km",
                                "value": 149845
                            },
                            "duration": {
                                "text": "2 horas 34 minutos",
                                "value": 9254
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Indiaroba",
        "Resposta": {
            "destination_addresses": [
                "Indiaroba, SE, 49250-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "70,5 km",
                                "value": 70509
                            },
                            "duration": {
                                "text": "1 hora 10 minutos",
                                "value": 4204
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Graccho Cardoso",
        "Resposta": {
            "destination_addresses": [
                "Gracho Cardoso - SE, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "167 km",
                                "value": 166860
                            },
                            "duration": {
                                "text": "2 horas 52 minutos",
                                "value": 10319
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Japaratuba",
        "Resposta": {
            "destination_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "151 km",
                                "value": 151283
                            },
                            "duration": {
                                "text": "2 horas 31 minutos",
                                "value": 9067
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Boquim",
        "Resposta": {
            "destination_addresses": [
                "Boquim, SE, 49360-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "8,3 km",
                                "value": 8288
                            },
                            "duration": {
                                "text": "10 minutos",
                                "value": 603
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Malhador",
        "Resposta": {
            "destination_addresses": [
                "Malhador, SE, 49570-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "94,5 km",
                                "value": 94544
                            },
                            "duration": {
                                "text": "1 hora 46 minutos",
                                "value": 6340
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Campo do Brito",
        "Resposta": {
            "destination_addresses": [
                "Campo do Brito, SE, 49520-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "65,9 km",
                                "value": 65886
                            },
                            "duration": {
                                "text": "1 hora 7 minutos",
                                "value": 4045
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Malhada dos Bois",
        "Resposta": {
            "destination_addresses": [
                "Malhada dos Bois, SE, 49940-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "181 km",
                                "value": 181294
                            },
                            "duration": {
                                "text": "2 horas 58 minutos",
                                "value": 10676
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Cristinápolis",
        "Resposta": {
            "destination_addresses": [
                "Cristinápolis, SE, 49270-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "44,2 km",
                                "value": 44159
                            },
                            "duration": {
                                "text": "52 minutos",
                                "value": 3131
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Macambira",
        "Resposta": {
            "destination_addresses": [
                "Macambira, SE, 49565-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "74,9 km",
                                "value": 74867
                            },
                            "duration": {
                                "text": "1 hora 18 minutos",
                                "value": 4652
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Feira Nova",
        "Resposta": {
            "destination_addresses": [
                "Feira Nova - SE, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "153 km",
                                "value": 152571
                            },
                            "duration": {
                                "text": "2 horas 38 minutos",
                                "value": 9465
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Aracaju",
        "Resposta": {
            "destination_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "91,8 km",
                                "value": 91799
                            },
                            "duration": {
                                "text": "1 hora 33 minutos",
                                "value": 5574
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Japoatã",
        "Resposta": {
            "destination_addresses": [
                "Japoatã, SE, 49950-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "188 km",
                                "value": 188497
                            },
                            "duration": {
                                "text": "3 horas 2 minutos",
                                "value": 10901
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pacatuba",
        "Resposta": {
            "destination_addresses": [
                "Pacatuba, SE, 49970-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "185 km",
                                "value": 184625
                            },
                            "duration": {
                                "text": "3 horas 22 minutos",
                                "value": 12100
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Frei Paulo",
        "Resposta": {
            "destination_addresses": [
                "Frei Paulo - SE, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "97,3 km",
                                "value": 97295
                            },
                            "duration": {
                                "text": "1 hora 40 minutos",
                                "value": 5971
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Propriá",
        "Resposta": {
            "destination_addresses": [
                "Propriá, SE, 49900-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "197 km",
                                "value": 197489
                            },
                            "duration": {
                                "text": "3 horas 9 minutos",
                                "value": 11360
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Lagarto",
        "Resposta": {
            "destination_addresses": [
                "Lagarto - SE, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "36,5 km",
                                "value": 36490
                            },
                            "duration": {
                                "text": "39 minutos",
                                "value": 2347
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Miguel do Aleixo",
        "Resposta": {
            "destination_addresses": [
                "São Miguel do Aleixo, SE, 49535-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "125 km",
                                "value": 125096
                            },
                            "duration": {
                                "text": "2 horas 8 minutos",
                                "value": 7691
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Rosário do Catete",
        "Resposta": {
            "destination_addresses": [
                "Rosário do Catete, SE, 49760-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "136 km",
                                "value": 136486
                            },
                            "duration": {
                                "text": "2 horas 22 minutos",
                                "value": 8546
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Santo Amaro das Brotas",
        "Resposta": {
            "destination_addresses": [
                "Santo Amaro das Brotas, SE, 49180-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "130 km",
                                "value": 129937
                            },
                            "duration": {
                                "text": "2 horas 18 minutos",
                                "value": 8274
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Ilha das Flores",
        "Resposta": {
            "destination_addresses": [
                "Ilha das Flores - SE, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "192 km",
                                "value": 191561
                            },
                            "duration": {
                                "text": "3 horas 29 minutos",
                                "value": 12551
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Maruim",
        "Resposta": {
            "destination_addresses": [
                "Maruim - SE, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "131 km",
                                "value": 130799
                            },
                            "duration": {
                                "text": "2 horas 17 minutos",
                                "value": 8220
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Santa Rosa de Lima",
        "Resposta": {
            "destination_addresses": [
                "Santa Rosa de Lima, SE, 49640-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "117 km",
                                "value": 116806
                            },
                            "duration": {
                                "text": "1 hora 55 minutos",
                                "value": 6884
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Moita Bonita",
        "Resposta": {
            "destination_addresses": [
                "Moita Bonita - SE, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "93,2 km",
                                "value": 93171
                            },
                            "duration": {
                                "text": "1 hora 43 minutos",
                                "value": 6178
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Ribeirópolis",
        "Resposta": {
            "destination_addresses": [
                "Ribeirópolis, SE, 49530-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "98,4 km",
                                "value": 98419
                            },
                            "duration": {
                                "text": "1 hora 41 minutos",
                                "value": 6081
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Muribeca",
        "Resposta": {
            "destination_addresses": [
                "Muribeca, SE, 49780-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "183 km",
                                "value": 182579
                            },
                            "duration": {
                                "text": "3 horas 1 minuto",
                                "value": 10830
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Santa Luzia do Itanhy",
        "Resposta": {
            "destination_addresses": [
                "Santa Luzia do Itanhy, SE, 49230-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "48,0 km",
                                "value": 48005
                            },
                            "duration": {
                                "text": "51 minutos",
                                "value": 3085
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Monte Alegre de Sergipe",
        "Resposta": {
            "destination_addresses": [
                "Monte Alegre de Sergipe, SE, 49690-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "177 km",
                                "value": 177338
                            },
                            "duration": {
                                "text": "2 horas 53 minutos",
                                "value": 10351
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Umbaúba",
        "Resposta": {
            "destination_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "28,2 km",
                                "value": 28219
                            },
                            "duration": {
                                "text": "37 minutos",
                                "value": 2211
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Poço Redondo",
        "Resposta": {
            "destination_addresses": [
                "Poço Redondo - SE, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "207 km",
                                "value": 206522
                            },
                            "duration": {
                                "text": "3 horas 24 minutos",
                                "value": 12252
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Laranjeiras",
        "Resposta": {
            "destination_addresses": [
                "Laranjeiras - SE, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "97,3 km",
                                "value": 97279
                            },
                            "duration": {
                                "text": "1 hora 35 minutos",
                                "value": 5692
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Tobias Barreto",
        "Resposta": {
            "destination_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "49,7 km",
                                "value": 49694
                            },
                            "duration": {
                                "text": "47 minutos",
                                "value": 2816
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Francisco",
        "Resposta": {
            "destination_addresses": [
                "São Francisco - SE, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "179 km",
                                "value": 179400
                            },
                            "duration": {
                                "text": "2 horas 54 minutos",
                                "value": 10418
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Poço Verde",
        "Resposta": {
            "destination_addresses": [
                "Poço Verde, SE, 49490-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "106 km",
                                "value": 106387
                            },
                            "duration": {
                                "text": "1 hora 52 minutos",
                                "value": 6702
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Salgado",
        "Resposta": {
            "destination_addresses": [
                "Salgado - SE, 49390-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "37,3 km",
                                "value": 37341
                            },
                            "duration": {
                                "text": "44 minutos",
                                "value": 2612
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Porto da Folha",
        "Resposta": {
            "destination_addresses": [
                "Porto da Folha, SE, 49800-000, Brasil"
            ],
            "origin_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "219 km",
                                "value": 219023
                            },
                            "duration": {
                                "text": "3 horas 37 minutos",
                                "value": 13002
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    }
]

const santoAmaro = [
    {
        "Destino": "Itaporanga d'Ajuda",
        "Resposta": {
            "destination_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.141 km",
                                "value": 2141110
                            },
                            "duration": {
                                "text": "1 dia 6 horas",
                                "value": 109386
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pirambu",
        "Resposta": {
            "destination_addresses": [
                "Pirambu - SE, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.207 km",
                                "value": 2207326
                            },
                            "duration": {
                                "text": "1 dia 8 horas",
                                "value": 113504
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Divina Pastora",
        "Resposta": {
            "destination_addresses": [
                "Divina Pastora, SE, 49650-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.195 km",
                                "value": 2195401
                            },
                            "duration": {
                                "text": "1 dia 7 horas",
                                "value": 112254
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pedrinhas",
        "Resposta": {
            "destination_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.100 km",
                                "value": 2099758
                            },
                            "duration": {
                                "text": "1 dia 6 horas",
                                "value": 107633
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Itabaianinha",
        "Resposta": {
            "destination_addresses": [
                "Itabaianinha, SE, 49290-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.092 km",
                                "value": 2091624
                            },
                            "duration": {
                                "text": "1 dia 6 horas",
                                "value": 106969
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Neópolis",
        "Resposta": {
            "destination_addresses": [
                "Neópolis, SE, 49980-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.294 km",
                                "value": 2294024
                            },
                            "duration": {
                                "text": "1 dia 9 horas",
                                "value": 117681
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Siriri",
        "Resposta": {
            "destination_addresses": [
                "Siriri, SE, 49630-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.206 km",
                                "value": 2206318
                            },
                            "duration": {
                                "text": "1 dia 7 horas",
                                "value": 113045
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Itabi",
        "Resposta": {
            "destination_addresses": [
                "Itabi, SE, 49870-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.287 km",
                                "value": 2286712
                            },
                            "duration": {
                                "text": "1 dia 9 horas",
                                "value": 117865
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Brejo Grande",
        "Resposta": {
            "destination_addresses": [
                "Brejo Grande, SE, 49995-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.275 km",
                                "value": 2275352
                            },
                            "duration": {
                                "text": "1 dia 9 horas",
                                "value": 118101
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Canindé de São Francisco",
        "Resposta": {
            "destination_addresses": [
                "Canindé de São Francisco, SE, 49820-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.237 km",
                                "value": 2236908
                            },
                            "duration": {
                                "text": "1 dia 9 horas",
                                "value": 117784
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Domingos",
        "Resposta": {
            "destination_addresses": [
                "São Domingos - SE, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.157 km",
                                "value": 2157469
                            },
                            "duration": {
                                "text": "1 dia 7 horas",
                                "value": 111277
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora do Socorro",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. do Socorro, SE, 49160-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.171 km",
                                "value": 2171063
                            },
                            "duration": {
                                "text": "1 dia 7 horas",
                                "value": 110761
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Carira",
        "Resposta": {
            "destination_addresses": [
                "Carira, SE, 49550-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.217 km",
                                "value": 2217451
                            },
                            "duration": {
                                "text": "1 dia 8 horas",
                                "value": 114370
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Telha",
        "Resposta": {
            "destination_addresses": [
                "Telha - SE, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.287 km",
                                "value": 2286878
                            },
                            "duration": {
                                "text": "1 dia 9 horas",
                                "value": 117481
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Capela",
        "Resposta": {
            "destination_addresses": [
                "Capela - SE, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.221 km",
                                "value": 2221108
                            },
                            "duration": {
                                "text": "1 dia 8 horas",
                                "value": 115073
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Tomar do Geru",
        "Resposta": {
            "destination_addresses": [
                "Tomar do Geru, SE, 49280-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.069 km",
                                "value": 2068911
                            },
                            "duration": {
                                "text": "1 dia 5 horas",
                                "value": 105586
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Riachuelo",
        "Resposta": {
            "destination_addresses": [
                "Riachuelo - SE, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.186 km",
                                "value": 2185769
                            },
                            "duration": {
                                "text": "1 dia 7 horas",
                                "value": 111540
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Riachão do Dantas",
        "Resposta": {
            "destination_addresses": [
                "Riachão do Dantas, SE, 49320-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.116 km",
                                "value": 2116147
                            },
                            "duration": {
                                "text": "1 dia 6 horas",
                                "value": 108579
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Canhoba",
        "Resposta": {
            "destination_addresses": [
                "Canhoba, SE, 49880-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.298 km",
                                "value": 2298450
                            },
                            "duration": {
                                "text": "1 dia 9 horas",
                                "value": 118089
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Carmópolis",
        "Resposta": {
            "destination_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.225 km",
                                "value": 2224636
                            },
                            "duration": {
                                "text": "1 dia 8 horas",
                                "value": 114307
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Itabaiana",
        "Resposta": {
            "destination_addresses": [
                "Itabaiana, SE, 49500-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.177 km",
                                "value": 2176836
                            },
                            "duration": {
                                "text": "1 dia 7 horas",
                                "value": 112423
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pinhão",
        "Resposta": {
            "destination_addresses": [
                "Pinhão - SE, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.185 km",
                                "value": 2184971
                            },
                            "duration": {
                                "text": "1 dia 7 horas",
                                "value": 112796
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Cedro de São João",
        "Resposta": {
            "destination_addresses": [
                "Cedro de São João, SE, 49930-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.287 km",
                                "value": 2286766
                            },
                            "duration": {
                                "text": "1 dia 9 horas",
                                "value": 117232
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Cristóvão",
        "Resposta": {
            "destination_addresses": [
                "São Cristóvão - SE, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.159 km",
                                "value": 2158936
                            },
                            "duration": {
                                "text": "1 dia 7 horas",
                                "value": 110294
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora das Dores",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. das Dores, SE, 49600-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.224 km",
                                "value": 2224459
                            },
                            "duration": {
                                "text": "1 dia 8 horas",
                                "value": 114213
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Simão Dias",
        "Resposta": {
            "destination_addresses": [
                "Simão Dias, SE, 49480-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.161 km",
                                "value": 2161232
                            },
                            "duration": {
                                "text": "1 dia 7 horas",
                                "value": 111498
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Areia Branca",
        "Resposta": {
            "destination_addresses": [
                "Areia Branca, SE, 49580-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.192 km",
                                "value": 2192203
                            },
                            "duration": {
                                "text": "1 dia 7 horas",
                                "value": 111881
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Arauá",
        "Resposta": {
            "destination_addresses": [
                "Arauá, SE, 49220-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.090 km",
                                "value": 2089890
                            },
                            "duration": {
                                "text": "1 dia 6 horas",
                                "value": 106921
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Estância",
        "Resposta": {
            "destination_addresses": [
                "Estância - SE, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.104 km",
                                "value": 2103516
                            },
                            "duration": {
                                "text": "1 dia 6 horas",
                                "value": 107401
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora Aparecida",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. Aparecida - SE, 49540-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.216 km",
                                "value": 2215713
                            },
                            "duration": {
                                "text": "1 dia 8 horas",
                                "value": 114682
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pedra Mole",
        "Resposta": {
            "destination_addresses": [
                "Pedra Mole, SE, 49512-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.188 km",
                                "value": 2187529
                            },
                            "duration": {
                                "text": "1 dia 7 horas",
                                "value": 113366
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Santana do São Francisco",
        "Resposta": {
            "destination_addresses": [
                "Santana do São Francisco, SE, 49985-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.297 km",
                                "value": 2296859
                            },
                            "duration": {
                                "text": "1 dia 9 horas",
                                "value": 117966
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Gararu",
        "Resposta": {
            "destination_addresses": [
                "Gararu, SE, 49830-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.310 km",
                                "value": 2310011
                            },
                            "duration": {
                                "text": "1 dia 9 horas",
                                "value": 119130
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora de Lourdes",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. de Lourdes, SE, 49890-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.299 km",
                                "value": 2298989
                            },
                            "duration": {
                                "text": "1 dia 9 horas",
                                "value": 118565
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora da Glória",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. da Glória, SE, 49680-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.238 km",
                                "value": 2238425
                            },
                            "duration": {
                                "text": "1 dia 8 horas",
                                "value": 116127
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Barra dos Coqueiros",
        "Resposta": {
            "destination_addresses": [
                "Barra dos Coqueiros, SE, 49140-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.177 km",
                                "value": 2177126
                            },
                            "duration": {
                                "text": "1 dia 7 horas",
                                "value": 111624
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Aquidabã",
        "Resposta": {
            "destination_addresses": [
                "Aquidabã, SE, 49790-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.276 km",
                                "value": 2276013
                            },
                            "duration": {
                                "text": "1 dia 9 horas",
                                "value": 117113
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Amparo de São Francisco",
        "Resposta": {
            "destination_addresses": [
                "Amparo de São Francisco, Amparo do São Francisco - SE, 49920-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.297 km",
                                "value": 2296627
                            },
                            "duration": {
                                "text": "1 dia 9 horas",
                                "value": 118075
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Miguel do Aleixo",
        "Resposta": {
            "destination_addresses": [
                "São Miguel do Aleixo, SE, 49535-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.225 km",
                                "value": 2224646
                            },
                            "duration": {
                                "text": "1 dia 8 horas",
                                "value": 115262
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Macambira",
        "Resposta": {
            "destination_addresses": [
                "Macambira, SE, 49565-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.174 km",
                                "value": 2174416
                            },
                            "duration": {
                                "text": "1 dia 7 horas",
                                "value": 112223
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Propriá",
        "Resposta": {
            "destination_addresses": [
                "Propriá, SE, 49900-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.278 km",
                                "value": 2278020
                            },
                            "duration": {
                                "text": "1 dia 8 horas",
                                "value": 116874
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Boquim",
        "Resposta": {
            "destination_addresses": [
                "Boquim, SE, 49360-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.107 km",
                                "value": 2107380
                            },
                            "duration": {
                                "text": "1 dia 6 horas",
                                "value": 108103
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Graccho Cardoso",
        "Resposta": {
            "destination_addresses": [
                "Gracho Cardoso - SE, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.268 km",
                                "value": 2268181
                            },
                            "duration": {
                                "text": "1 dia 8 horas",
                                "value": 116645
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Japoatã",
        "Resposta": {
            "destination_addresses": [
                "Japoatã, SE, 49950-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.269 km",
                                "value": 2269029
                            },
                            "duration": {
                                "text": "1 dia 8 horas",
                                "value": 116416
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Umbaúba",
        "Resposta": {
            "destination_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.072 km",
                                "value": 2071848
                            },
                            "duration": {
                                "text": "1 dia 5 horas",
                                "value": 105470
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Campo do Brito",
        "Resposta": {
            "destination_addresses": [
                "Campo do Brito, SE, 49520-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.165 km",
                                "value": 2165436
                            },
                            "duration": {
                                "text": "1 dia 7 horas",
                                "value": 111616
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Indiaroba",
        "Resposta": {
            "destination_addresses": [
                "Indiaroba, SE, 49250-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.090 km",
                                "value": 2090368
                            },
                            "duration": {
                                "text": "1 dia 6 horas",
                                "value": 107281
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "General Maynard",
        "Resposta": {
            "destination_addresses": [
                "Gen. Maynard, SE, 49750-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.230 km",
                                "value": 2230377
                            },
                            "duration": {
                                "text": "1 dia 8 horas",
                                "value": 114768
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Santa Luzia do Itanhy",
        "Resposta": {
            "destination_addresses": [
                "Santa Luzia do Itanhy, SE, 49230-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.109 km",
                                "value": 2109028
                            },
                            "duration": {
                                "text": "1 dia 6 horas",
                                "value": 107618
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Cumbe",
        "Resposta": {
            "destination_addresses": [
                "Cumbe, SE, 49660-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.241 km",
                                "value": 2241451
                            },
                            "duration": {
                                "text": "1 dia 8 horas",
                                "value": 115370
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Santo Amaro das Brotas",
        "Resposta": {
            "destination_addresses": [
                "Santo Amaro das Brotas, SE, 49180-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.210 km",
                                "value": 2210469
                            },
                            "duration": {
                                "text": "1 dia 8 horas",
                                "value": 113788
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Malhada dos Bois",
        "Resposta": {
            "destination_addresses": [
                "Malhada dos Bois, SE, 49940-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.262 km",
                                "value": 2261826
                            },
                            "duration": {
                                "text": "1 dia 8 horas",
                                "value": 116190
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Cristinápolis",
        "Resposta": {
            "destination_addresses": [
                "Cristinápolis, SE, 49270-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.055 km",
                                "value": 2055357
                            },
                            "duration": {
                                "text": "1 dia 5 horas",
                                "value": 104368
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Rosário do Catete",
        "Resposta": {
            "destination_addresses": [
                "Rosário do Catete, SE, 49760-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.217 km",
                                "value": 2217018
                            },
                            "duration": {
                                "text": "1 dia 8 horas",
                                "value": 114061
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Porto da Folha",
        "Resposta": {
            "destination_addresses": [
                "Porto da Folha, SE, 49800-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.283 km",
                                "value": 2283387
                            },
                            "duration": {
                                "text": "1 dia 9 horas",
                                "value": 119415
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Santa Rosa de Lima",
        "Resposta": {
            "destination_addresses": [
                "Santa Rosa de Lima, SE, 49640-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.197 km",
                                "value": 2197337
                            },
                            "duration": {
                                "text": "1 dia 7 horas",
                                "value": 112398
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pacatuba",
        "Resposta": {
            "destination_addresses": [
                "Pacatuba, SE, 49970-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.265 km",
                                "value": 2265157
                            },
                            "duration": {
                                "text": "1 dia 9 horas",
                                "value": 117614
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Poço Redondo",
        "Resposta": {
            "destination_addresses": [
                "Poço Redondo - SE, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.244 km",
                                "value": 2244034
                            },
                            "duration": {
                                "text": "1 dia 8 horas",
                                "value": 116796
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Japaratuba",
        "Resposta": {
            "destination_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.232 km",
                                "value": 2231815
                            },
                            "duration": {
                                "text": "1 dia 8 horas",
                                "value": 114581
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Malhador",
        "Resposta": {
            "destination_addresses": [
                "Malhador, SE, 49570-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.205 km",
                                "value": 2205413
                            },
                            "duration": {
                                "text": "1 dia 7 horas",
                                "value": 113041
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Laranjeiras",
        "Resposta": {
            "destination_addresses": [
                "Laranjeiras - SE, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.178 km",
                                "value": 2177810
                            },
                            "duration": {
                                "text": "1 dia 7 horas",
                                "value": 111206
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Ribeirópolis",
        "Resposta": {
            "destination_addresses": [
                "Ribeirópolis, SE, 49530-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.198 km",
                                "value": 2197968
                            },
                            "duration": {
                                "text": "1 dia 8 horas",
                                "value": 113652
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Maruim",
        "Resposta": {
            "destination_addresses": [
                "Maruim - SE, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.211 km",
                                "value": 2211331
                            },
                            "duration": {
                                "text": "1 dia 8 horas",
                                "value": 113734
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Muribeca",
        "Resposta": {
            "destination_addresses": [
                "Muribeca, SE, 49780-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.263 km",
                                "value": 2263110
                            },
                            "duration": {
                                "text": "1 dia 8 horas",
                                "value": 116344
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Tobias Barreto",
        "Resposta": {
            "destination_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.081 km",
                                "value": 2081325
                            },
                            "duration": {
                                "text": "1 dia 6 horas",
                                "value": 106743
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Monte Alegre de Sergipe",
        "Resposta": {
            "destination_addresses": [
                "Monte Alegre de Sergipe, SE, 49690-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.246 km",
                                "value": 2246230
                            },
                            "duration": {
                                "text": "1 dia 9 horas",
                                "value": 117179
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Moita Bonita",
        "Resposta": {
            "destination_addresses": [
                "Moita Bonita - SE, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.193 km",
                                "value": 2192721
                            },
                            "duration": {
                                "text": "1 dia 8 horas",
                                "value": 113749
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Ilha das Flores",
        "Resposta": {
            "destination_addresses": [
                "Ilha das Flores - SE, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.272 km",
                                "value": 2272093
                            },
                            "duration": {
                                "text": "1 dia 9 horas",
                                "value": 118065
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Francisco",
        "Resposta": {
            "destination_addresses": [
                "São Francisco - SE, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.260 km",
                                "value": 2259932
                            },
                            "duration": {
                                "text": "1 dia 8 horas",
                                "value": 115932
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Frei Paulo",
        "Resposta": {
            "destination_addresses": [
                "Frei Paulo, SE, 49514-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.197 km",
                                "value": 2196845
                            },
                            "duration": {
                                "text": "1 dia 8 horas",
                                "value": 113553
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Feira Nova",
        "Resposta": {
            "destination_addresses": [
                "Feira Nova - SE, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.255 km",
                                "value": 2255370
                            },
                            "duration": {
                                "text": "1 dia 8 horas",
                                "value": 115970
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Poço Verde",
        "Resposta": {
            "destination_addresses": [
                "Poço Verde, SE, 49490-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.100 km",
                                "value": 2100434
                            },
                            "duration": {
                                "text": "1 dia 7 horas",
                                "value": 109973
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Salgado",
        "Resposta": {
            "destination_addresses": [
                "Salgado - SE, 49390-000, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.144 km",
                                "value": 2144485
                            },
                            "duration": {
                                "text": "1 dia 6 horas",
                                "value": 109534
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Lagarto",
        "Resposta": {
            "destination_addresses": [
                "Lagarto - SE, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.136 km",
                                "value": 2136039
                            },
                            "duration": {
                                "text": "1 dia 7 horas",
                                "value": 109918
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Aracaju",
        "Resposta": {
            "destination_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "origin_addresses": [
                "Santo Amaro, São Paulo - SP, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "2.172 km",
                                "value": 2172331
                            },
                            "duration": {
                                "text": "1 dia 7 horas",
                                "value": 111088
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    }
]

const umbauba = [
    {
        "Destino": "Arauá",
        "Resposta": {
            "destination_addresses": [
                "Arauá, SE, 49220-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "18,6 km",
                                "value": 18560
                            },
                            "duration": {
                                "text": "26 minutos",
                                "value": 1576
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Canhoba",
        "Resposta": {
            "destination_addresses": [
                "Canhoba, SE, 49880-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "227 km",
                                "value": 227121
                            },
                            "duration": {
                                "text": "3 horas 32 minutos",
                                "value": 12744
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pacatuba",
        "Resposta": {
            "destination_addresses": [
                "Pacatuba, SE, 49970-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "194 km",
                                "value": 193828
                            },
                            "duration": {
                                "text": "3 horas 25 minutos",
                                "value": 12270
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pedrinhas",
        "Resposta": {
            "destination_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "28,4 km",
                                "value": 28429
                            },
                            "duration": {
                                "text": "38 minutos",
                                "value": 2288
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Estância",
        "Resposta": {
            "destination_addresses": [
                "Estância - SE, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "32,2 km",
                                "value": 32187
                            },
                            "duration": {
                                "text": "34 minutos",
                                "value": 2056
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Domingos",
        "Resposta": {
            "destination_addresses": [
                "São Domingos - SE, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "86,1 km",
                                "value": 86140
                            },
                            "duration": {
                                "text": "1 hora 39 minutos",
                                "value": 5933
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Riachuelo",
        "Resposta": {
            "destination_addresses": [
                "Riachuelo - SE, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "114 km",
                                "value": 114439
                            },
                            "duration": {
                                "text": "1 hora 43 minutos",
                                "value": 6195
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Boquim",
        "Resposta": {
            "destination_addresses": [
                "Boquim, SE, 49360-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "36,1 km",
                                "value": 36051
                            },
                            "duration": {
                                "text": "46 minutos",
                                "value": 2758
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Canindé de São Francisco",
        "Resposta": {
            "destination_addresses": [
                "Canindé de São Francisco, SE, 49820-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "256 km",
                                "value": 255623
                            },
                            "duration": {
                                "text": "4 horas 23 minutos",
                                "value": 15758
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "General Maynard",
        "Resposta": {
            "destination_addresses": [
                "Gen. Maynard, SE, 49750-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "159 km",
                                "value": 159047
                            },
                            "duration": {
                                "text": "2 horas 37 minutos",
                                "value": 9423
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Areia Branca",
        "Resposta": {
            "destination_addresses": [
                "Areia Branca, SE, 49580-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "121 km",
                                "value": 120874
                            },
                            "duration": {
                                "text": "1 hora 49 minutos",
                                "value": 6537
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Cristinápolis",
        "Resposta": {
            "destination_addresses": [
                "Cristinápolis, SE, 49270-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "16,5 km",
                                "value": 16500
                            },
                            "duration": {
                                "text": "18 minutos",
                                "value": 1066
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Barra dos Coqueiros",
        "Resposta": {
            "destination_addresses": [
                "Barra dos Coqueiros, SE, 49140-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "106 km",
                                "value": 105797
                            },
                            "duration": {
                                "text": "1 hora 45 minutos",
                                "value": 6280
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora da Glória",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. da Glória, SE, 49680-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "167 km",
                                "value": 167096
                            },
                            "duration": {
                                "text": "3 horas 0 minutos",
                                "value": 10782
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pedra Mole",
        "Resposta": {
            "destination_addresses": [
                "Pedra Mole, SE, 49512-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "116 km",
                                "value": 116200
                            },
                            "duration": {
                                "text": "2 horas 14 minutos",
                                "value": 8021
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Itabaiana",
        "Resposta": {
            "destination_addresses": [
                "Itabaiana, SE, 49500-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "106 km",
                                "value": 105507
                            },
                            "duration": {
                                "text": "1 hora 58 minutos",
                                "value": 7078
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Tomar do Geru",
        "Resposta": {
            "destination_addresses": [
                "Tomar do Geru, SE, 49280-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "33,6 km",
                                "value": 33621
                            },
                            "duration": {
                                "text": "44 minutos",
                                "value": 2625
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Santa Luzia do Itanhy",
        "Resposta": {
            "destination_addresses": [
                "Santa Luzia do Itanhy, SE, 49230-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "37,7 km",
                                "value": 37698
                            },
                            "duration": {
                                "text": "38 minutos",
                                "value": 2273
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Itaporanga d'Ajuda",
        "Resposta": {
            "destination_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "69,8 km",
                                "value": 69781
                            },
                            "duration": {
                                "text": "1 hora 7 minutos",
                                "value": 4042
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Gararu",
        "Resposta": {
            "destination_addresses": [
                "Gararu, SE, 49830-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "239 km",
                                "value": 238682
                            },
                            "duration": {
                                "text": "3 horas 50 minutos",
                                "value": 13785
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Santana do São Francisco",
        "Resposta": {
            "destination_addresses": [
                "Santana do São Francisco, SE, 49985-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "226 km",
                                "value": 225530
                            },
                            "duration": {
                                "text": "3 horas 30 minutos",
                                "value": 12622
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Divina Pastora",
        "Resposta": {
            "destination_addresses": [
                "Divina Pastora, SE, 49650-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "124 km",
                                "value": 124072
                            },
                            "duration": {
                                "text": "1 hora 55 minutos",
                                "value": 6909
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Brejo Grande",
        "Resposta": {
            "destination_addresses": [
                "Brejo Grande, SE, 49995-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "204 km",
                                "value": 204023
                            },
                            "duration": {
                                "text": "3 horas 33 minutos",
                                "value": 12756
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Umbaúba",
        "Resposta": {
            "destination_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "1 m",
                                "value": 0
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 0
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Amparo de São Francisco",
        "Resposta": {
            "destination_addresses": [
                "Amparo de São Francisco, Amparo do São Francisco - SE, 49920-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "225 km",
                                "value": 225298
                            },
                            "duration": {
                                "text": "3 horas 32 minutos",
                                "value": 12730
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora das Dores",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. das Dores, SE, 49600-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "153 km",
                                "value": 153130
                            },
                            "duration": {
                                "text": "2 horas 28 minutos",
                                "value": 8868
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Riachão do Dantas",
        "Resposta": {
            "destination_addresses": [
                "Riachão do Dantas, SE, 49320-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "44,8 km",
                                "value": 44818
                            },
                            "duration": {
                                "text": "54 minutos",
                                "value": 3234
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Cedro de São João",
        "Resposta": {
            "destination_addresses": [
                "Cedro de São João, SE, 49930-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "215 km",
                                "value": 215437
                            },
                            "duration": {
                                "text": "3 horas 18 minutos",
                                "value": 11888
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Japaratuba",
        "Resposta": {
            "destination_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "160 km",
                                "value": 160486
                            },
                            "duration": {
                                "text": "2 horas 34 minutos",
                                "value": 9236
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Graccho Cardoso",
        "Resposta": {
            "destination_addresses": [
                "Gracho Cardoso - SE, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "197 km",
                                "value": 196852
                            },
                            "duration": {
                                "text": "3 horas 8 minutos",
                                "value": 11301
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Ribeirópolis",
        "Resposta": {
            "destination_addresses": [
                "Ribeirópolis, SE, 49530-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "127 km",
                                "value": 126639
                            },
                            "duration": {
                                "text": "2 horas 18 minutos",
                                "value": 8307
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Santo Amaro das Brotas",
        "Resposta": {
            "destination_addresses": [
                "Santo Amaro das Brotas, SE, 49180-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "139 km",
                                "value": 139140
                            },
                            "duration": {
                                "text": "2 horas 21 minutos",
                                "value": 8443
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Aquidabã",
        "Resposta": {
            "destination_addresses": [
                "Aquidabã, SE, 49790-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "205 km",
                                "value": 204684
                            },
                            "duration": {
                                "text": "3 horas 16 minutos",
                                "value": 11768
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Simão Dias",
        "Resposta": {
            "destination_addresses": [
                "Simão Dias, SE, 49480-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "89,9 km",
                                "value": 89903
                            },
                            "duration": {
                                "text": "1 hora 43 minutos",
                                "value": 6153
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Santa Rosa de Lima",
        "Resposta": {
            "destination_addresses": [
                "Santa Rosa de Lima, SE, 49640-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "126 km",
                                "value": 126008
                            },
                            "duration": {
                                "text": "1 hora 58 minutos",
                                "value": 7054
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pinhão",
        "Resposta": {
            "destination_addresses": [
                "Pinhão - SE, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "114 km",
                                "value": 113642
                            },
                            "duration": {
                                "text": "2 horas 4 minutos",
                                "value": 7451
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Siriri",
        "Resposta": {
            "destination_addresses": [
                "Siriri, SE, 49630-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "135 km",
                                "value": 134989
                            },
                            "duration": {
                                "text": "2 horas 8 minutos",
                                "value": 7700
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Rosário do Catete",
        "Resposta": {
            "destination_addresses": [
                "Rosário do Catete, SE, 49760-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "146 km",
                                "value": 145689
                            },
                            "duration": {
                                "text": "2 horas 25 minutos",
                                "value": 8716
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora de Lourdes",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. de Lourdes, SE, 49890-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "228 km",
                                "value": 227660
                            },
                            "duration": {
                                "text": "3 horas 40 minutos",
                                "value": 13221
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Itabi",
        "Resposta": {
            "destination_addresses": [
                "Itabi, SE, 49870-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "215 km",
                                "value": 215383
                            },
                            "duration": {
                                "text": "3 horas 29 minutos",
                                "value": 12520
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora do Socorro",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. do Socorro, SE, 49160-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "99,7 km",
                                "value": 99734
                            },
                            "duration": {
                                "text": "1 hora 30 minutos",
                                "value": 5417
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora Aparecida",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. Aparecida - SE, 49540-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "144 km",
                                "value": 144384
                            },
                            "duration": {
                                "text": "2 horas 36 minutos",
                                "value": 9337
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Propriá",
        "Resposta": {
            "destination_addresses": [
                "Propriá, SE, 49900-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "207 km",
                                "value": 206691
                            },
                            "duration": {
                                "text": "3 horas 12 minutos",
                                "value": 11529
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Campo do Brito",
        "Resposta": {
            "destination_addresses": [
                "Campo do Brito, SE, 49520-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "94,1 km",
                                "value": 94107
                            },
                            "duration": {
                                "text": "1 hora 45 minutos",
                                "value": 6272
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Cumbe",
        "Resposta": {
            "destination_addresses": [
                "Cumbe, SE, 49660-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "170 km",
                                "value": 170122
                            },
                            "duration": {
                                "text": "2 horas 47 minutos",
                                "value": 10025
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Carira",
        "Resposta": {
            "destination_addresses": [
                "Carira, SE, 49550-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "146 km",
                                "value": 146122
                            },
                            "duration": {
                                "text": "2 horas 30 minutos",
                                "value": 9025
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Telha",
        "Resposta": {
            "destination_addresses": [
                "Telha - SE, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "216 km",
                                "value": 215549
                            },
                            "duration": {
                                "text": "3 horas 22 minutos",
                                "value": 12136
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Neópolis",
        "Resposta": {
            "destination_addresses": [
                "Neópolis, SE, 49980-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "223 km",
                                "value": 222695
                            },
                            "duration": {
                                "text": "3 horas 26 minutos",
                                "value": 12336
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Cristóvão",
        "Resposta": {
            "destination_addresses": [
                "São Cristóvão - SE, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "87,6 km",
                                "value": 87607
                            },
                            "duration": {
                                "text": "1 hora 22 minutos",
                                "value": 4949
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Miguel do Aleixo",
        "Resposta": {
            "destination_addresses": [
                "São Miguel do Aleixo, SE, 49535-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "153 km",
                                "value": 153316
                            },
                            "duration": {
                                "text": "2 horas 45 minutos",
                                "value": 9918
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Poço Redondo",
        "Resposta": {
            "destination_addresses": [
                "Poço Redondo - SE, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "235 km",
                                "value": 234742
                            },
                            "duration": {
                                "text": "4 horas 1 minuto",
                                "value": 14479
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Itabaianinha",
        "Resposta": {
            "destination_addresses": [
                "Itabaianinha, SE, 49290-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "20,3 km",
                                "value": 20295
                            },
                            "duration": {
                                "text": "27 minutos",
                                "value": 1610
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pirambu",
        "Resposta": {
            "destination_addresses": [
                "Pirambu - SE, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "136 km",
                                "value": 135997
                            },
                            "duration": {
                                "text": "2 horas 16 minutos",
                                "value": 8159
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Capela",
        "Resposta": {
            "destination_addresses": [
                "Capela - SE, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "150 km",
                                "value": 149779
                            },
                            "duration": {
                                "text": "2 horas 42 minutos",
                                "value": 9728
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Japoatã",
        "Resposta": {
            "destination_addresses": [
                "Japoatã, SE, 49950-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "198 km",
                                "value": 197699
                            },
                            "duration": {
                                "text": "3 horas 5 minutos",
                                "value": 11071
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Maruim",
        "Resposta": {
            "destination_addresses": [
                "Maruim - SE, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "140 km",
                                "value": 140002
                            },
                            "duration": {
                                "text": "2 horas 20 minutos",
                                "value": 8390
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Malhador",
        "Resposta": {
            "destination_addresses": [
                "Malhador, SE, 49570-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "134 km",
                                "value": 134084
                            },
                            "duration": {
                                "text": "2 horas 8 minutos",
                                "value": 7696
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Feira Nova",
        "Resposta": {
            "destination_addresses": [
                "Feira Nova - SE, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "184 km",
                                "value": 184041
                            },
                            "duration": {
                                "text": "2 horas 57 minutos",
                                "value": 10625
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Poço Verde",
        "Resposta": {
            "destination_addresses": [
                "Poço Verde, SE, 49490-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "106 km",
                                "value": 106363
                            },
                            "duration": {
                                "text": "2 horas 26 minutos",
                                "value": 8744
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Frei Paulo",
        "Resposta": {
            "destination_addresses": [
                "Frei Paulo - SE, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "126 km",
                                "value": 125515
                            },
                            "duration": {
                                "text": "2 horas 17 minutos",
                                "value": 8197
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Malhada dos Bois",
        "Resposta": {
            "destination_addresses": [
                "Malhada dos Bois, SE, 49940-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "190 km",
                                "value": 190496
                            },
                            "duration": {
                                "text": "3 horas 1 minuto",
                                "value": 10846
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Aracaju",
        "Resposta": {
            "destination_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "101 km",
                                "value": 101002
                            },
                            "duration": {
                                "text": "1 hora 36 minutos",
                                "value": 5744
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Laranjeiras",
        "Resposta": {
            "destination_addresses": [
                "Laranjeiras - SE, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "106 km",
                                "value": 106481
                            },
                            "duration": {
                                "text": "1 hora 38 minutos",
                                "value": 5861
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Tobias Barreto",
        "Resposta": {
            "destination_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "51,0 km",
                                "value": 50987
                            },
                            "duration": {
                                "text": "1 hora 1 minuto",
                                "value": 3666
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Porto da Folha",
        "Resposta": {
            "destination_addresses": [
                "Porto da Folha, SE, 49800-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "236 km",
                                "value": 236166
                            },
                            "duration": {
                                "text": "4 horas 9 minutos",
                                "value": 14928
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Monte Alegre de Sergipe",
        "Resposta": {
            "destination_addresses": [
                "Monte Alegre de Sergipe, SE, 49690-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "206 km",
                                "value": 205558
                            },
                            "duration": {
                                "text": "3 horas 30 minutos",
                                "value": 12577
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Carmópolis",
        "Resposta": {
            "destination_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "153 km",
                                "value": 153307
                            },
                            "duration": {
                                "text": "2 horas 29 minutos",
                                "value": 8962
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Muribeca",
        "Resposta": {
            "destination_addresses": [
                "Muribeca, SE, 49780-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "192 km",
                                "value": 191781
                            },
                            "duration": {
                                "text": "3 horas 3 minutos",
                                "value": 10999
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Macambira",
        "Resposta": {
            "destination_addresses": [
                "Macambira, SE, 49565-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "103 km",
                                "value": 103087
                            },
                            "duration": {
                                "text": "1 hora 55 minutos",
                                "value": 6878
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Francisco",
        "Resposta": {
            "destination_addresses": [
                "São Francisco - SE, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "189 km",
                                "value": 188603
                            },
                            "duration": {
                                "text": "2 horas 56 minutos",
                                "value": 10587
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Moita Bonita",
        "Resposta": {
            "destination_addresses": [
                "Moita Bonita - SE, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "121 km",
                                "value": 121392
                            },
                            "duration": {
                                "text": "2 horas 20 minutos",
                                "value": 8404
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Ilha das Flores",
        "Resposta": {
            "destination_addresses": [
                "Ilha das Flores - SE, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "201 km",
                                "value": 200764
                            },
                            "duration": {
                                "text": "3 horas 32 minutos",
                                "value": 12720
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Salgado",
        "Resposta": {
            "destination_addresses": [
                "Salgado - SE, 49390-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "73,2 km",
                                "value": 73156
                            },
                            "duration": {
                                "text": "1 hora 10 minutos",
                                "value": 4189
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Lagarto",
        "Resposta": {
            "destination_addresses": [
                "Lagarto - SE, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "64,7 km",
                                "value": 64710
                            },
                            "duration": {
                                "text": "1 hora 16 minutos",
                                "value": 4574
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Indiaroba",
        "Resposta": {
            "destination_addresses": [
                "Indiaroba, SE, 49250-000, Brasil"
            ],
            "origin_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "35,2 km",
                                "value": 35158
                            },
                            "duration": {
                                "text": "40 minutos",
                                "value": 2402
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    }
]

const loteamentoJeova = [
    {
        "Destino": "Itabaiana",
        "Resposta": {
            "destination_addresses": [
                "Itabaiana, SE, 49500-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "72,4 km",
                                "value": 72412
                            },
                            "duration": {
                                "text": "1 hora 11 minutos",
                                "value": 4281
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Barra dos Coqueiros",
        "Resposta": {
            "destination_addresses": [
                "Barra dos Coqueiros, SE, 49140-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "38,7 km",
                                "value": 38739
                            },
                            "duration": {
                                "text": "45 minutos",
                                "value": 2705
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Itaporanga d'Ajuda",
        "Resposta": {
            "destination_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "1 m",
                                "value": 0
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 0
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Estância",
        "Resposta": {
            "destination_addresses": [
                "Estância - SE, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "38,2 km",
                                "value": 38164
                            },
                            "duration": {
                                "text": "37 minutos",
                                "value": 2199
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Carmópolis",
        "Resposta": {
            "destination_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "86,2 km",
                                "value": 86249
                            },
                            "duration": {
                                "text": "1 hora 30 minutos",
                                "value": 5387
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Areia Branca",
        "Resposta": {
            "destination_addresses": [
                "Areia Branca, SE, 49580-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "53,8 km",
                                "value": 53816
                            },
                            "duration": {
                                "text": "49 minutos",
                                "value": 2962
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Brejo Grande",
        "Resposta": {
            "destination_addresses": [
                "Brejo Grande, SE, 49995-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "137 km",
                                "value": 136965
                            },
                            "duration": {
                                "text": "2 horas 33 minutos",
                                "value": 9181
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Itabaianinha",
        "Resposta": {
            "destination_addresses": [
                "Itabaianinha, SE, 49290-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "89,0 km",
                                "value": 88975
                            },
                            "duration": {
                                "text": "1 hora 31 minutos",
                                "value": 5442
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Carira",
        "Resposta": {
            "destination_addresses": [
                "Carira, SE, 49550-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "129 km",
                                "value": 128754
                            },
                            "duration": {
                                "text": "1 hora 56 minutos",
                                "value": 6973
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Capela",
        "Resposta": {
            "destination_addresses": [
                "Capela - SE, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "82,7 km",
                                "value": 82721
                            },
                            "duration": {
                                "text": "1 hora 43 minutos",
                                "value": 6154
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Canindé de São Francisco",
        "Resposta": {
            "destination_addresses": [
                "Canindé de São Francisco, SE, 49820-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "213 km",
                                "value": 212843
                            },
                            "duration": {
                                "text": "3 horas 37 minutos",
                                "value": 13005
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Cedro de São João",
        "Resposta": {
            "destination_addresses": [
                "Cedro de São João, SE, 49930-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "148 km",
                                "value": 148379
                            },
                            "duration": {
                                "text": "2 horas 19 minutos",
                                "value": 8313
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Gararu",
        "Resposta": {
            "destination_addresses": [
                "Gararu, SE, 49830-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "172 km",
                                "value": 171624
                            },
                            "duration": {
                                "text": "2 horas 50 minutos",
                                "value": 10211
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Arauá",
        "Resposta": {
            "destination_addresses": [
                "Arauá, SE, 49220-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "66,5 km",
                                "value": 66479
                            },
                            "duration": {
                                "text": "1 hora 7 minutos",
                                "value": 4042
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Divina Pastora",
        "Resposta": {
            "destination_addresses": [
                "Divina Pastora, SE, 49650-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "57,0 km",
                                "value": 57014
                            },
                            "duration": {
                                "text": "56 minutos",
                                "value": 3334
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Tomar do Geru",
        "Resposta": {
            "destination_addresses": [
                "Tomar do Geru, SE, 49280-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "102 km",
                                "value": 102310
                            },
                            "duration": {
                                "text": "1 hora 48 minutos",
                                "value": 6452
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Riachuelo",
        "Resposta": {
            "destination_addresses": [
                "Riachuelo - SE, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "47,4 km",
                                "value": 47382
                            },
                            "duration": {
                                "text": "44 minutos",
                                "value": 2620
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pedrinhas",
        "Resposta": {
            "destination_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "59,1 km",
                                "value": 59130
                            },
                            "duration": {
                                "text": "1 hora 3 minutos",
                                "value": 3791
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Domingos",
        "Resposta": {
            "destination_addresses": [
                "São Domingos - SE, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "48,0 km",
                                "value": 48046
                            },
                            "duration": {
                                "text": "1 hora 11 minutos",
                                "value": 4260
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pirambu",
        "Resposta": {
            "destination_addresses": [
                "Pirambu - SE, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "68,9 km",
                                "value": 68939
                            },
                            "duration": {
                                "text": "1 hora 16 minutos",
                                "value": 4584
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Neópolis",
        "Resposta": {
            "destination_addresses": [
                "Neópolis, SE, 49980-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "156 km",
                                "value": 155637
                            },
                            "duration": {
                                "text": "2 horas 26 minutos",
                                "value": 8761
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Canhoba",
        "Resposta": {
            "destination_addresses": [
                "Canhoba, SE, 49880-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "160 km",
                                "value": 160063
                            },
                            "duration": {
                                "text": "2 horas 33 minutos",
                                "value": 9170
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora do Socorro",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. do Socorro, SE, 49160-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "32,7 km",
                                "value": 32676
                            },
                            "duration": {
                                "text": "31 minutos",
                                "value": 1842
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pedra Mole",
        "Resposta": {
            "destination_addresses": [
                "Pedra Mole, SE, 49512-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "114 km",
                                "value": 114100
                            },
                            "duration": {
                                "text": "1 hora 47 minutos",
                                "value": 6444
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pinhão",
        "Resposta": {
            "destination_addresses": [
                "Pinhão - SE, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "96,9 km",
                                "value": 96874
                            },
                            "duration": {
                                "text": "1 hora 44 minutos",
                                "value": 6251
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Telha",
        "Resposta": {
            "destination_addresses": [
                "Telha - SE, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "148 km",
                                "value": 148491
                            },
                            "duration": {
                                "text": "2 horas 23 minutos",
                                "value": 8561
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Siriri",
        "Resposta": {
            "destination_addresses": [
                "Siriri, SE, 49630-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "67,9 km",
                                "value": 67931
                            },
                            "duration": {
                                "text": "1 hora 9 minutos",
                                "value": 4126
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora Aparecida",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. Aparecida - SE, 49540-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "111 km",
                                "value": 111289
                            },
                            "duration": {
                                "text": "1 hora 49 minutos",
                                "value": 6540
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora de Lourdes",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. de Lourdes, SE, 49890-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "161 km",
                                "value": 160602
                            },
                            "duration": {
                                "text": "2 horas 41 minutos",
                                "value": 9646
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Cristóvão",
        "Resposta": {
            "destination_addresses": [
                "São Cristóvão - SE, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "20,5 km",
                                "value": 20549
                            },
                            "duration": {
                                "text": "23 minutos",
                                "value": 1374
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Simão Dias",
        "Resposta": {
            "destination_addresses": [
                "Simão Dias, SE, 49480-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "73,1 km",
                                "value": 73135
                            },
                            "duration": {
                                "text": "1 hora 23 minutos",
                                "value": 4953
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora da Glória",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. da Glória, SE, 49680-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "134 km",
                                "value": 134001
                            },
                            "duration": {
                                "text": "2 horas 13 minutos",
                                "value": 7985
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora das Dores",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. das Dores, SE, 49600-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "86,1 km",
                                "value": 86072
                            },
                            "duration": {
                                "text": "1 hora 28 minutos",
                                "value": 5294
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Itabi",
        "Resposta": {
            "destination_addresses": [
                "Itabi, SE, 49870-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "148 km",
                                "value": 148325
                            },
                            "duration": {
                                "text": "2 horas 29 minutos",
                                "value": 8945
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Riachão do Dantas",
        "Resposta": {
            "destination_addresses": [
                "Riachão do Dantas, SE, 49320-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "66,4 km",
                                "value": 66412
                            },
                            "duration": {
                                "text": "1 hora 11 minutos",
                                "value": 4242
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Santana do São Francisco",
        "Resposta": {
            "destination_addresses": [
                "Santana do São Francisco, SE, 49985-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "158 km",
                                "value": 158472
                            },
                            "duration": {
                                "text": "2 horas 31 minutos",
                                "value": 9047
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Cristinápolis",
        "Resposta": {
            "destination_addresses": [
                "Cristinápolis, SE, 49270-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "85,2 km",
                                "value": 85189
                            },
                            "duration": {
                                "text": "1 hora 22 minutos",
                                "value": 4893
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Boquim",
        "Resposta": {
            "destination_addresses": [
                "Boquim, SE, 49360-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "51,3 km",
                                "value": 51284
                            },
                            "duration": {
                                "text": "54 minutos",
                                "value": 3268
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "General Maynard",
        "Resposta": {
            "destination_addresses": [
                "Gen. Maynard, SE, 49750-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "92,0 km",
                                "value": 91990
                            },
                            "duration": {
                                "text": "1 hora 37 minutos",
                                "value": 5849
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Campo do Brito",
        "Resposta": {
            "destination_addresses": [
                "Campo do Brito, SE, 49520-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "56,0 km",
                                "value": 56012
                            },
                            "duration": {
                                "text": "1 hora 17 minutos",
                                "value": 4599
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Ribeirópolis",
        "Resposta": {
            "destination_addresses": [
                "Ribeirópolis, SE, 49530-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "93,5 km",
                                "value": 93544
                            },
                            "duration": {
                                "text": "1 hora 32 minutos",
                                "value": 5510
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Propriá",
        "Resposta": {
            "destination_addresses": [
                "Propriá, SE, 49900-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "140 km",
                                "value": 139633
                            },
                            "duration": {
                                "text": "2 horas 13 minutos",
                                "value": 7954
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Malhador",
        "Resposta": {
            "destination_addresses": [
                "Malhador, SE, 49570-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "67,0 km",
                                "value": 67026
                            },
                            "duration": {
                                "text": "1 hora 9 minutos",
                                "value": 4121
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Amparo de São Francisco",
        "Resposta": {
            "destination_addresses": [
                "Amparo de São Francisco, Amparo do São Francisco - SE, 49920-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "158 km",
                                "value": 158240
                            },
                            "duration": {
                                "text": "2 horas 33 minutos",
                                "value": 9155
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Rosário do Catete",
        "Resposta": {
            "destination_addresses": [
                "Rosário do Catete, SE, 49760-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "78,6 km",
                                "value": 78631
                            },
                            "duration": {
                                "text": "1 hora 26 minutos",
                                "value": 5141
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Japoatã",
        "Resposta": {
            "destination_addresses": [
                "Japoatã, SE, 49950-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "131 km",
                                "value": 130642
                            },
                            "duration": {
                                "text": "2 horas 5 minutos",
                                "value": 7496
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Malhada dos Bois",
        "Resposta": {
            "destination_addresses": [
                "Malhada dos Bois, SE, 49940-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "123 km",
                                "value": 123439
                            },
                            "duration": {
                                "text": "2 horas 1 minuto",
                                "value": 7271
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Umbaúba",
        "Resposta": {
            "destination_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "69,2 km",
                                "value": 69249
                            },
                            "duration": {
                                "text": "1 hora 6 minutos",
                                "value": 3972
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pacatuba",
        "Resposta": {
            "destination_addresses": [
                "Pacatuba, SE, 49970-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "127 km",
                                "value": 126770
                            },
                            "duration": {
                                "text": "2 horas 25 minutos",
                                "value": 8695
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Macambira",
        "Resposta": {
            "destination_addresses": [
                "Macambira, SE, 49565-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "65,0 km",
                                "value": 64993
                            },
                            "duration": {
                                "text": "1 hora 27 minutos",
                                "value": 5205
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Indiaroba",
        "Resposta": {
            "destination_addresses": [
                "Indiaroba, SE, 49250-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "70,4 km",
                                "value": 70420
                            },
                            "duration": {
                                "text": "1 hora 4 minutos",
                                "value": 3864
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Aquidabã",
        "Resposta": {
            "destination_addresses": [
                "Aquidabã, SE, 49790-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "138 km",
                                "value": 137626
                            },
                            "duration": {
                                "text": "2 horas 17 minutos",
                                "value": 8193
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Poço Redondo",
        "Resposta": {
            "destination_addresses": [
                "Poço Redondo - SE, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "192 km",
                                "value": 191962
                            },
                            "duration": {
                                "text": "3 horas 15 minutos",
                                "value": 11726
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Graccho Cardoso",
        "Resposta": {
            "destination_addresses": [
                "Gracho Cardoso - SE, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "130 km",
                                "value": 129794
                            },
                            "duration": {
                                "text": "2 horas 9 minutos",
                                "value": 7726
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Cumbe",
        "Resposta": {
            "destination_addresses": [
                "Cumbe, SE, 49660-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "103 km",
                                "value": 103064
                            },
                            "duration": {
                                "text": "1 hora 48 minutos",
                                "value": 6450
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Santa Rosa de Lima",
        "Resposta": {
            "destination_addresses": [
                "Santa Rosa de Lima, SE, 49640-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "59,0 km",
                                "value": 58950
                            },
                            "duration": {
                                "text": "58 minutos",
                                "value": 3479
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Japaratuba",
        "Resposta": {
            "destination_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "93,4 km",
                                "value": 93428
                            },
                            "duration": {
                                "text": "1 hora 34 minutos",
                                "value": 5661
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Santo Amaro das Brotas",
        "Resposta": {
            "destination_addresses": [
                "Santo Amaro das Brotas, SE, 49180-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "72,1 km",
                                "value": 72082
                            },
                            "duration": {
                                "text": "1 hora 21 minutos",
                                "value": 4868
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Tobias Barreto",
        "Resposta": {
            "destination_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "99,1 km",
                                "value": 99080
                            },
                            "duration": {
                                "text": "1 hora 38 minutos",
                                "value": 5908
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Feira Nova",
        "Resposta": {
            "destination_addresses": [
                "Feira Nova - SE, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "117 km",
                                "value": 116983
                            },
                            "duration": {
                                "text": "1 hora 58 minutos",
                                "value": 7050
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Miguel do Aleixo",
        "Resposta": {
            "destination_addresses": [
                "São Miguel do Aleixo, SE, 49535-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "120 km",
                                "value": 120222
                            },
                            "duration": {
                                "text": "1 hora 59 minutos",
                                "value": 7121
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Santa Luzia do Itanhy",
        "Resposta": {
            "destination_addresses": [
                "Santa Luzia do Itanhy, SE, 49230-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "47,9 km",
                                "value": 47916
                            },
                            "duration": {
                                "text": "46 minutos",
                                "value": 2745
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Salgado",
        "Resposta": {
            "destination_addresses": [
                "Salgado - SE, 49390-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "22,5 km",
                                "value": 22509
                            },
                            "duration": {
                                "text": "23 minutos",
                                "value": 1354
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Porto da Folha",
        "Resposta": {
            "destination_addresses": [
                "Porto da Folha, SE, 49800-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "169 km",
                                "value": 169108
                            },
                            "duration": {
                                "text": "3 horas 9 minutos",
                                "value": 11353
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Ilha das Flores",
        "Resposta": {
            "destination_addresses": [
                "Ilha das Flores - SE, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "134 km",
                                "value": 133706
                            },
                            "duration": {
                                "text": "2 horas 32 minutos",
                                "value": 9145
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Laranjeiras",
        "Resposta": {
            "destination_addresses": [
                "Laranjeiras - SE, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "39,4 km",
                                "value": 39423
                            },
                            "duration": {
                                "text": "38 minutos",
                                "value": 2286
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Moita Bonita",
        "Resposta": {
            "destination_addresses": [
                "Moita Bonita - SE, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "80,3 km",
                                "value": 80273
                            },
                            "duration": {
                                "text": "1 hora 23 minutos",
                                "value": 4952
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Monte Alegre de Sergipe",
        "Resposta": {
            "destination_addresses": [
                "Monte Alegre de Sergipe, SE, 49690-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "163 km",
                                "value": 162778
                            },
                            "duration": {
                                "text": "2 horas 44 minutos",
                                "value": 9825
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Maruim",
        "Resposta": {
            "destination_addresses": [
                "Maruim - SE, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "72,9 km",
                                "value": 72944
                            },
                            "duration": {
                                "text": "1 hora 20 minutos",
                                "value": 4815
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Muribeca",
        "Resposta": {
            "destination_addresses": [
                "Muribeca, SE, 49780-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "125 km",
                                "value": 124723
                            },
                            "duration": {
                                "text": "2 horas 4 minutos",
                                "value": 7425
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Francisco",
        "Resposta": {
            "destination_addresses": [
                "São Francisco - SE, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "122 km",
                                "value": 121545
                            },
                            "duration": {
                                "text": "1 hora 57 minutos",
                                "value": 7012
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Frei Paulo",
        "Resposta": {
            "destination_addresses": [
                "Frei Paulo - SE, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "92,4 km",
                                "value": 92420
                            },
                            "duration": {
                                "text": "1 hora 30 minutos",
                                "value": 5400
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Lagarto",
        "Resposta": {
            "destination_addresses": [
                "Lagarto - SE, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "47,2 km",
                                "value": 47207
                            },
                            "duration": {
                                "text": "54 minutos",
                                "value": 3222
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Aracaju",
        "Resposta": {
            "destination_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "33,9 km",
                                "value": 33944
                            },
                            "duration": {
                                "text": "36 minutos",
                                "value": 2169
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Poço Verde",
        "Resposta": {
            "destination_addresses": [
                "Poço Verde, SE, 49490-000, Brasil"
            ],
            "origin_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "118 km",
                                "value": 117839
                            },
                            "duration": {
                                "text": "2 horas 9 minutos",
                                "value": 7728
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    }
]

const alagoinhas = [
    {
        "Destino": "Tomar do Geru",
        "Resposta": {
            "destination_addresses": [
                "Tomar do Geru, SE, 49280-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "129 km",
                                "value": 128908
                            },
                            "duration": {
                                "text": "2 horas 9 minutos",
                                "value": 7712
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Domingos",
        "Resposta": {
            "destination_addresses": [
                "São Domingos - SE, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "217 km",
                                "value": 217466
                            },
                            "duration": {
                                "text": "3 horas 43 minutos",
                                "value": 13403
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Siriri",
        "Resposta": {
            "destination_addresses": [
                "Siriri, SE, 49630-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "266 km",
                                "value": 266315
                            },
                            "duration": {
                                "text": "4 horas 13 minutos",
                                "value": 15171
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Areia Branca",
        "Resposta": {
            "destination_addresses": [
                "Areia Branca, SE, 49580-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "252 km",
                                "value": 252200
                            },
                            "duration": {
                                "text": "3 horas 53 minutos",
                                "value": 14007
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Simão Dias",
        "Resposta": {
            "destination_addresses": [
                "Simão Dias, SE, 49480-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "221 km",
                                "value": 221229
                            },
                            "duration": {
                                "text": "3 horas 47 minutos",
                                "value": 13624
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Arauá",
        "Resposta": {
            "destination_addresses": [
                "Arauá, SE, 49220-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "150 km",
                                "value": 149887
                            },
                            "duration": {
                                "text": "2 horas 31 minutos",
                                "value": 9046
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora das Dores",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. das Dores, SE, 49600-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "284 km",
                                "value": 284456
                            },
                            "duration": {
                                "text": "4 horas 32 minutos",
                                "value": 16339
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Capela",
        "Resposta": {
            "destination_addresses": [
                "Capela - SE, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "281 km",
                                "value": 281105
                            },
                            "duration": {
                                "text": "4 horas 47 minutos",
                                "value": 17199
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Cristóvão",
        "Resposta": {
            "destination_addresses": [
                "São Cristóvão - SE, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "219 km",
                                "value": 218933
                            },
                            "duration": {
                                "text": "3 horas 27 minutos",
                                "value": 12419
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Riachão do Dantas",
        "Resposta": {
            "destination_addresses": [
                "Riachão do Dantas, SE, 49320-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "176 km",
                                "value": 176144
                            },
                            "duration": {
                                "text": "2 horas 58 minutos",
                                "value": 10704
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Itaporanga d'Ajuda",
        "Resposta": {
            "destination_addresses": [
                "Itaporanga d'Ajuda, SE, 49120-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "201 km",
                                "value": 201107
                            },
                            "duration": {
                                "text": "3 horas 12 minutos",
                                "value": 11512
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Barra dos Coqueiros",
        "Resposta": {
            "destination_addresses": [
                "Barra dos Coqueiros, SE, 49140-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "237 km",
                                "value": 237123
                            },
                            "duration": {
                                "text": "3 horas 49 minutos",
                                "value": 13750
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Carmópolis",
        "Resposta": {
            "destination_addresses": [
                "Carmópolis, SE, 49740-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "285 km",
                                "value": 284633
                            },
                            "duration": {
                                "text": "4 horas 34 minutos",
                                "value": 16432
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Itabaiana",
        "Resposta": {
            "destination_addresses": [
                "Itabaiana, SE, 49500-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "237 km",
                                "value": 236833
                            },
                            "duration": {
                                "text": "4 horas 2 minutos",
                                "value": 14548
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pedrinhas",
        "Resposta": {
            "destination_addresses": [
                "Pedrinhas, SE, 49350-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "160 km",
                                "value": 159755
                            },
                            "duration": {
                                "text": "2 horas 43 minutos",
                                "value": 9758
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Canhoba",
        "Resposta": {
            "destination_addresses": [
                "Canhoba, SE, 49880-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "358 km",
                                "value": 358447
                            },
                            "duration": {
                                "text": "5 horas 37 minutos",
                                "value": 20215
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Brejo Grande",
        "Resposta": {
            "destination_addresses": [
                "Brejo Grande, SE, 49995-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "335 km",
                                "value": 335349
                            },
                            "duration": {
                                "text": "5 horas 37 minutos",
                                "value": 20226
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pinhão",
        "Resposta": {
            "destination_addresses": [
                "Pinhão - SE, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "245 km",
                                "value": 244968
                            },
                            "duration": {
                                "text": "4 horas 9 minutos",
                                "value": 14921
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Estância",
        "Resposta": {
            "destination_addresses": [
                "Estância - SE, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "164 km",
                                "value": 163513
                            },
                            "duration": {
                                "text": "2 horas 39 minutos",
                                "value": 9527
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Riachuelo",
        "Resposta": {
            "destination_addresses": [
                "Riachuelo - SE, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "246 km",
                                "value": 245766
                            },
                            "duration": {
                                "text": "3 horas 48 minutos",
                                "value": 13665
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Gararu",
        "Resposta": {
            "destination_addresses": [
                "Gararu, SE, 49830-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "370 km",
                                "value": 370008
                            },
                            "duration": {
                                "text": "5 horas 54 minutos",
                                "value": 21256
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Itabi",
        "Resposta": {
            "destination_addresses": [
                "Itabi, SE, 49870-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "347 km",
                                "value": 346709
                            },
                            "duration": {
                                "text": "5 horas 33 minutos",
                                "value": 19991
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Divina Pastora",
        "Resposta": {
            "destination_addresses": [
                "Divina Pastora, SE, 49650-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "255 km",
                                "value": 255398
                            },
                            "duration": {
                                "text": "4 horas 0 minutos",
                                "value": 14379
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Cedro de São João",
        "Resposta": {
            "destination_addresses": [
                "Cedro de São João, SE, 49930-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "347 km",
                                "value": 346763
                            },
                            "duration": {
                                "text": "5 horas 23 minutos",
                                "value": 19358
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Carira",
        "Resposta": {
            "destination_addresses": [
                "Carira, SE, 49550-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "277 km",
                                "value": 277448
                            },
                            "duration": {
                                "text": "4 horas 35 minutos",
                                "value": 16495
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora Aparecida",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. Aparecida - SE, 49540-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "276 km",
                                "value": 275710
                            },
                            "duration": {
                                "text": "4 horas 40 minutos",
                                "value": 16807
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Neópolis",
        "Resposta": {
            "destination_addresses": [
                "Neópolis, SE, 49980-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "354 km",
                                "value": 354021
                            },
                            "duration": {
                                "text": "5 horas 30 minutos",
                                "value": 19806
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora de Lourdes",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. de Lourdes, SE, 49890-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "359 km",
                                "value": 358986
                            },
                            "duration": {
                                "text": "5 horas 45 minutos",
                                "value": 20691
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Itabaianinha",
        "Resposta": {
            "destination_addresses": [
                "Itabaianinha, SE, 49290-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "152 km",
                                "value": 151621
                            },
                            "duration": {
                                "text": "2 horas 32 minutos",
                                "value": 9095
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pirambu",
        "Resposta": {
            "destination_addresses": [
                "Pirambu - SE, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "267 km",
                                "value": 267323
                            },
                            "duration": {
                                "text": "4 horas 21 minutos",
                                "value": 15630
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pedra Mole",
        "Resposta": {
            "destination_addresses": [
                "Pedra Mole, SE, 49512-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "248 km",
                                "value": 247526
                            },
                            "duration": {
                                "text": "4 horas 18 minutos",
                                "value": 15492
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Santana do São Francisco",
        "Resposta": {
            "destination_addresses": [
                "Santana do São Francisco, SE, 49985-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "357 km",
                                "value": 356856
                            },
                            "duration": {
                                "text": "5 horas 35 minutos",
                                "value": 20092
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora da Glória",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. da Glória, SE, 49680-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "298 km",
                                "value": 298422
                            },
                            "duration": {
                                "text": "5 horas 4 minutos",
                                "value": 18253
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Nossa Senhora do Socorro",
        "Resposta": {
            "destination_addresses": [
                "Nossa Sra. do Socorro, SE, 49160-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "231 km",
                                "value": 231060
                            },
                            "duration": {
                                "text": "3 horas 35 minutos",
                                "value": 12887
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Telha",
        "Resposta": {
            "destination_addresses": [
                "Telha - SE, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "347 km",
                                "value": 346875
                            },
                            "duration": {
                                "text": "5 horas 27 minutos",
                                "value": 19606
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Canindé de São Francisco",
        "Resposta": {
            "destination_addresses": [
                "Canindé de São Francisco, SE, 49820-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "358 km",
                                "value": 357550
                            },
                            "duration": {
                                "text": "5 horas 54 minutos",
                                "value": 21268
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Ribeirópolis",
        "Resposta": {
            "destination_addresses": [
                "Ribeirópolis, SE, 49530-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "258 km",
                                "value": 257965
                            },
                            "duration": {
                                "text": "4 horas 23 minutos",
                                "value": 15777
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Aquidabã",
        "Resposta": {
            "destination_addresses": [
                "Aquidabã, SE, 49790-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "336 km",
                                "value": 336010
                            },
                            "duration": {
                                "text": "5 horas 21 minutos",
                                "value": 19238
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Macambira",
        "Resposta": {
            "destination_addresses": [
                "Macambira, SE, 49565-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "234 km",
                                "value": 234413
                            },
                            "duration": {
                                "text": "3 horas 59 minutos",
                                "value": 14348
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Cristinápolis",
        "Resposta": {
            "destination_addresses": [
                "Cristinápolis, SE, 49270-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "115 km",
                                "value": 115354
                            },
                            "duration": {
                                "text": "1 hora 48 minutos",
                                "value": 6493
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Malhada dos Bois",
        "Resposta": {
            "destination_addresses": [
                "Malhada dos Bois, SE, 49940-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "322 km",
                                "value": 321823
                            },
                            "duration": {
                                "text": "5 horas 5 minutos",
                                "value": 18316
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Indiaroba",
        "Resposta": {
            "destination_addresses": [
                "Indiaroba, SE, 49250-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "150 km",
                                "value": 150365
                            },
                            "duration": {
                                "text": "2 horas 37 minutos",
                                "value": 9406
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Cumbe",
        "Resposta": {
            "destination_addresses": [
                "Cumbe, SE, 49660-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "301 km",
                                "value": 301448
                            },
                            "duration": {
                                "text": "4 horas 52 minutos",
                                "value": 17496
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Campo do Brito",
        "Resposta": {
            "destination_addresses": [
                "Campo do Brito, SE, 49520-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "225 km",
                                "value": 225433
                            },
                            "duration": {
                                "text": "3 horas 49 minutos",
                                "value": 13742
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Santa Luzia do Itanhy",
        "Resposta": {
            "destination_addresses": [
                "Santa Luzia do Itanhy, SE, 49230-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "169 km",
                                "value": 169025
                            },
                            "duration": {
                                "text": "2 horas 42 minutos",
                                "value": 9743
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "General Maynard",
        "Resposta": {
            "destination_addresses": [
                "Gen. Maynard, SE, 49750-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "290 km",
                                "value": 290374
                            },
                            "duration": {
                                "text": "4 horas 42 minutos",
                                "value": 16894
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Pacatuba",
        "Resposta": {
            "destination_addresses": [
                "Pacatuba, SE, 49970-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "325 km",
                                "value": 325154
                            },
                            "duration": {
                                "text": "5 horas 29 minutos",
                                "value": 19740
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Amparo de São Francisco",
        "Resposta": {
            "destination_addresses": [
                "Amparo de São Francisco, Amparo do São Francisco - SE, 49920-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "357 km",
                                "value": 356624
                            },
                            "duration": {
                                "text": "5 horas 37 minutos",
                                "value": 20200
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Malhador",
        "Resposta": {
            "destination_addresses": [
                "Malhador, SE, 49570-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "265 km",
                                "value": 265410
                            },
                            "duration": {
                                "text": "4 horas 13 minutos",
                                "value": 15167
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Santo Amaro das Brotas",
        "Resposta": {
            "destination_addresses": [
                "Santo Amaro das Brotas, SE, 49180-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "270 km",
                                "value": 270466
                            },
                            "duration": {
                                "text": "4 horas 25 minutos",
                                "value": 15914
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Umbaúba",
        "Resposta": {
            "destination_addresses": [
                "Umbaúba, SE, 49260-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "132 km",
                                "value": 131845
                            },
                            "duration": {
                                "text": "2 horas 7 minutos",
                                "value": 7595
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Boquim",
        "Resposta": {
            "destination_addresses": [
                "Boquim, SE, 49360-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "167 km",
                                "value": 167377
                            },
                            "duration": {
                                "text": "2 horas 50 minutos",
                                "value": 10228
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Japoatã",
        "Resposta": {
            "destination_addresses": [
                "Japoatã, SE, 49950-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "329 km",
                                "value": 329026
                            },
                            "duration": {
                                "text": "5 horas 9 minutos",
                                "value": 18541
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Miguel do Aleixo",
        "Resposta": {
            "destination_addresses": [
                "São Miguel do Aleixo, SE, 49535-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "285 km",
                                "value": 284643
                            },
                            "duration": {
                                "text": "4 horas 50 minutos",
                                "value": 17388
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Propriá",
        "Resposta": {
            "destination_addresses": [
                "Propriá, SE, 49900-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "338 km",
                                "value": 338017
                            },
                            "duration": {
                                "text": "5 horas 17 minutos",
                                "value": 18999
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Japaratuba",
        "Resposta": {
            "destination_addresses": [
                "Japaratuba, SE, 49960-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "292 km",
                                "value": 291812
                            },
                            "duration": {
                                "text": "4 horas 38 minutos",
                                "value": 16706
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Graccho Cardoso",
        "Resposta": {
            "destination_addresses": [
                "Gracho Cardoso - SE, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "328 km",
                                "value": 328178
                            },
                            "duration": {
                                "text": "5 horas 13 minutos",
                                "value": 18771
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Rosário do Catete",
        "Resposta": {
            "destination_addresses": [
                "Rosário do Catete, SE, 49760-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "277 km",
                                "value": 277015
                            },
                            "duration": {
                                "text": "4 horas 30 minutos",
                                "value": 16186
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Santa Rosa de Lima",
        "Resposta": {
            "destination_addresses": [
                "Santa Rosa de Lima, SE, 49640-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "257 km",
                                "value": 257334
                            },
                            "duration": {
                                "text": "4 horas 2 minutos",
                                "value": 14524
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Poço Redondo",
        "Resposta": {
            "destination_addresses": [
                "Poço Redondo - SE, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "365 km",
                                "value": 364677
                            },
                            "duration": {
                                "text": "5 horas 38 minutos",
                                "value": 20280
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Feira Nova",
        "Resposta": {
            "destination_addresses": [
                "Feira Nova - SE, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "315 km",
                                "value": 315367
                            },
                            "duration": {
                                "text": "5 horas 2 minutos",
                                "value": 18095
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Maruim",
        "Resposta": {
            "destination_addresses": [
                "Maruim - SE, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "271 km",
                                "value": 271328
                            },
                            "duration": {
                                "text": "4 horas 24 minutos",
                                "value": 15860
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Tobias Barreto",
        "Resposta": {
            "destination_addresses": [
                "Tobias Barreto, SE, 49300-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "141 km",
                                "value": 141322
                            },
                            "duration": {
                                "text": "2 horas 28 minutos",
                                "value": 8869
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "São Francisco",
        "Resposta": {
            "destination_addresses": [
                "São Francisco - SE, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "320 km",
                                "value": 319929
                            },
                            "duration": {
                                "text": "5 horas 1 minuto",
                                "value": 18057
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Aracaju",
        "Resposta": {
            "destination_addresses": [
                "Aracaju, SE, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "232 km",
                                "value": 232328
                            },
                            "duration": {
                                "text": "3 horas 40 minutos",
                                "value": 13214
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Frei Paulo",
        "Resposta": {
            "destination_addresses": [
                "Frei Paulo - SE, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "257 km",
                                "value": 256841
                            },
                            "duration": {
                                "text": "4 horas 21 minutos",
                                "value": 15667
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Salgado",
        "Resposta": {
            "destination_addresses": [
                "Salgado - SE, 49390-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "204 km",
                                "value": 204482
                            },
                            "duration": {
                                "text": "3 horas 14 minutos",
                                "value": 11659
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Laranjeiras",
        "Resposta": {
            "destination_addresses": [
                "Laranjeiras - SE, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "238 km",
                                "value": 237807
                            },
                            "duration": {
                                "text": "3 horas 42 minutos",
                                "value": 13332
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Monte Alegre de Sergipe",
        "Resposta": {
            "destination_addresses": [
                "Monte Alegre de Sergipe, SE, 49690-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "337 km",
                                "value": 336884
                            },
                            "duration": {
                                "text": "5 horas 34 minutos",
                                "value": 20048
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Poço Verde",
        "Resposta": {
            "destination_addresses": [
                "Poço Verde, SE, 49490-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "221 km",
                                "value": 221076
                            },
                            "duration": {
                                "text": "3 horas 44 minutos",
                                "value": 13457
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Porto da Folha",
        "Resposta": {
            "destination_addresses": [
                "Porto da Folha, SE, 49800-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "367 km",
                                "value": 367492
                            },
                            "duration": {
                                "text": "6 horas 13 minutos",
                                "value": 22398
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Moita Bonita",
        "Resposta": {
            "destination_addresses": [
                "Moita Bonita - SE, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "253 km",
                                "value": 252718
                            },
                            "duration": {
                                "text": "4 horas 25 minutos",
                                "value": 15875
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Lagarto",
        "Resposta": {
            "destination_addresses": [
                "Lagarto - SE, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "196 km",
                                "value": 196036
                            },
                            "duration": {
                                "text": "3 horas 21 minutos",
                                "value": 12044
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Muribeca",
        "Resposta": {
            "destination_addresses": [
                "Muribeca, SE, 49780-000, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "323 km",
                                "value": 323107
                            },
                            "duration": {
                                "text": "5 horas 8 minutos",
                                "value": 18470
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    },
    {
        "Destino": "Ilha das Flores",
        "Resposta": {
            "destination_addresses": [
                "Ilha das Flores - SE, Brasil"
            ],
            "origin_addresses": [
                "Alagoinhas, BA, Brasil"
            ],
            "rows": [
                {
                    "elements": [
                        {
                            "distance": {
                                "text": "332 km",
                                "value": 332090
                            },
                            "duration": {
                                "text": "5 horas 37 minutos",
                                "value": 20190
                            },
                            "status": "OK"
                        }
                    ]
                }
            ],
            "status": "OK"
        }
    }
]