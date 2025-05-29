
import { Faker, faker } from '@faker-js/faker';

export function requestApiHubResidencial() {
    const requestApiHubResidencial = {
        apolice: {
            numeroPedido: "CALC-C2503100200",
            numApoliceAnterio: "0",
            codigoProduto: "RESID",
            sistemaOrigem: 15,
            data: "2025-05-26 10:53:52",
            moedaObjetoSegurado: 28,
            moedaPremio: 28,
            codigoEscritorioRegional: "50",
            codigoRelacionamento: 50,
            flagIof: true,
            inicioVigencia: "2025-05-26 00:00:00",
            fimVigencia: "2026-05-26 00:00:00",
            limiteMaximoIndenizacao: 792000.0,
            acordoResseguro: 1,
            valorResseguro: 792000.0,
            codigoTipo: 2,
            descontoComercial: 0.00,
            tipoSeguro: 1,
            descontoRenovacao: 1,
            despesasAdministrativas: 0.15,
            margemLucro: 0.05,
            parcelamento: {
                dataVencimentoPrimeiraParcela: "2025-06-11 00:00:00",
                diaVencimentoParcela: 25
            },
            pagamento: {
                tipo: "1",
                frequencia: 1,
                numeroParcelas: 10,
                meioPagamento: {
                    codigoMeioPagamento: 300,
                    identificadorCobrancaRegistrada: 2,
                    contaBancaria: null
                }
            },
            boletos: null,
            filial: {
                endereco: {
                    cidade: {
                        codigo: "01"
                    }
                }
            },
            objetoSegurados: [
                {
                    endereco: {
                        estado: {
                            nome: "SP"
                        },
                        cidade: {
                            nome: "BARUERI"
                        },
                        tipoLogradouro: "Não informado.",
                        logradouro: "ALAMEDA RIO NEGRO",
                        numero: "1200",
                        complemento: null,
                        bairro: "ALPHAVILLE INDUSTRIAL",
                        cep: "06454000"
                    },
                    flagLocalizacao: true,
                    tipoObtencaoImovel: 1,
                    nomeProprietario: null,
                    numeroDocumentoProprietario: null,
                    valorRisco: 600000.0,
                    identificador: "1",
                    tipoPropriedade: 1,
                    tipoImovel: "1",
                    tipoConstrucao: 1,
                    coberturas: [
                        {
                            codigo: "IEQR",
                            valorImportanciaSegurada: "600000.0",
                            tipoDeducao: 1,
                            valorDedutivel: 10.0,
                            descricaoDeducao: "10% dos prejuízos indenizáveis c/ mínimo de R$ 550,00 p/ Queda de Raio",
                            flagGradeJanelaClaraboia: true,
                            flagAlarmeMonitorado: true,
                            flagVigilancia: true,
                            flagCercaEletrica: true,
                            valorPremioSubCobertura: 107.76,
                            jurosPremioParcelamento: 8.12,
                            custoEmissao: 0.0,
                            iofPremio: 7.95,
                            iofCustoEmissao: 0.0,
                            iofJurosPremio: 0.6,
                            interesses: [
                                {
                                    codigoSubCobertura: "OUT",
                                    valorImportanciaSegurado: 600000.0
                                }
                            ]
                        },
                        {
                            codigo: "DE",
                            valorImportanciaSegurada: "30000.0",
                            tipoDeducao: 1,
                            valorDedutivel: 15.0,
                            descricaoDeducao: "15% dos prejuízos indenizáveis c/ mínimo de R$ 550,00",
                            flagGradeJanelaClaraboia: true,
                            flagAlarmeMonitorado: true,
                            flagVigilancia: true,
                            flagCercaEletrica: true,
                            valorPremioSubCobertura: 173.56,
                            jurosPremioParcelamento: 13.09,
                            custoEmissao: 0.0,
                            iofPremio: 12.81,
                            iofCustoEmissao: 0.0,
                            iofJurosPremio: 0.97,
                            interesses: null
                        },
                        {
                            codigo: "RD",
                            valorImportanciaSegurada: "30000.0",
                            tipoDeducao: 6,
                            valorDedutivel: 0.0,
                            descricaoDeducao: "Não se aplica",
                            flagGradeJanelaClaraboia: true,
                            flagAlarmeMonitorado: true,
                            flagVigilancia: true,
                            flagCercaEletrica: true,
                            valorPremioSubCobertura: 12.6,
                            jurosPremioParcelamento: 0.95,
                            custoEmissao: 0.0,
                            iofPremio: 0.93,
                            iofCustoEmissao: 0.0,
                            iofJurosPremio: 0.07,
                            interesses: null
                        },
                        {
                            codigo: "IVAT",
                            valorImportanciaSegurada: "30000.0",
                            tipoDeducao: 1,
                            valorDedutivel: 10.0,
                            descricaoDeducao: "10% dos prejuízos indenizáveis c/ mínimo de R$ 300,00",
                            flagGradeJanelaClaraboia: true,
                            flagAlarmeMonitorado: true,
                            flagVigilancia: true,
                            flagCercaEletrica: true,
                            valorPremioSubCobertura: 35.09,
                            jurosPremioParcelamento: 2.65,
                            custoEmissao: 0.0,
                            iofPremio: 2.59,
                            iofCustoEmissao: 0.0,
                            iofJurosPremio: 0.2,
                            interesses: null
                        },
                        {
                            codigo: "PPA",
                            valorImportanciaSegurada: "72000.0",
                            tipoDeducao: 6,
                            periodoIndenitario: 6,
                            valorDedutivel: 0.0,
                            descricaoDeducao: "Não se aplica",
                            flagGradeJanelaClaraboia: true,
                            flagAlarmeMonitorado: true,
                            flagVigilancia: true,
                            flagCercaEletrica: true,
                            valorPremioSubCobertura: 34.08,
                            jurosPremioParcelamento: 2.57,
                            custoEmissao: 0.0,
                            iofPremio: 2.52,
                            iofCustoEmissao: 0.0,
                            iofJurosPremio: 0.19,
                            interesses: null
                        },
                        {
                            codigo: "QV",
                            valorImportanciaSegurada: "12000.0",
                            tipoDeducao: 1,
                            valorDedutivel: 10.0,
                            descricaoDeducao: "10% dos prejuízos indenizáveis c/ mínimo de R$ 500,00",
                            flagGradeJanelaClaraboia: true,
                            flagAlarmeMonitorado: true,
                            flagVigilancia: true,
                            flagCercaEletrica: true,
                            valorPremioSubCobertura: 54.44,
                            jurosPremioParcelamento: 4.11,
                            custoEmissao: 0.0,
                            iofPremio: 4.02,
                            iofCustoEmissao: 0.0,
                            iofJurosPremio: 0.3,
                            interesses: null
                        },
                        {
                            codigo: "RCF",
                            valorImportanciaSegurada: "120000.0",
                            tipoDeducao: 6,
                            valorDedutivel: 0.0,
                            descricaoDeducao: "Não se aplica",
                            flagGradeJanelaClaraboia: true,
                            flagAlarmeMonitorado: true,
                            flagVigilancia: true,
                            flagCercaEletrica: true,
                            valorPremioSubCobertura: 37.05,
                            jurosPremioParcelamento: 2.79,
                            custoEmissao: 0.0,
                            iofPremio: 2.73,
                            iofCustoEmissao: 0.0,
                            iofJurosPremio: 0.21,
                            interesses: null
                        },
                        {
                            codigo: "RFB",
                            valorImportanciaSegurada: "30000.0",
                            tipoDeducao: 6,
                            valorDedutivel: 0.0,
                            descricaoDeducao: "Não se aplica",
                            flagGradeJanelaClaraboia: true,
                            flagAlarmeMonitorado: true,
                            flagVigilancia: true,
                            flagCercaEletrica: true,
                            valorPremioSubCobertura: 26.53,
                            jurosPremioParcelamento: 2.0,
                            custoEmissao: 0.0,
                            iofPremio: 1.96,
                            iofCustoEmissao: 0.0,
                            iofJurosPremio: 0.15,
                            interesses: null
                        },
                        {
                            codigo: "VFCT",
                            valorImportanciaSegurada: "30000.0",
                            tipoDeducao: 1,
                            valorDedutivel: 15.0,
                            descricaoDeducao: "15% dos prejuízos indenizáveis c/ mínimo de R$ 550,00",
                            flagGradeJanelaClaraboia: true,
                            flagAlarmeMonitorado: true,
                            flagVigilancia: true,
                            flagCercaEletrica: true,
                            valorPremioSubCobertura: 18.76,
                            jurosPremioParcelamento: 1.41,
                            custoEmissao: 0.0,
                            iofPremio: 1.38,
                            iofCustoEmissao: 0.0,
                            iofJurosPremio: 0.1,
                            interesses: null
                        },
                        {
                            codigo: "RTT",
                            valorImportanciaSegurada: "30000.0",
                            tipoDeducao: 1,
                            valorDedutivel: 10.0,
                            descricaoDeducao: "10% dos prejuízos indenizáveis c/ mínimo de R$ 300,00",
                            flagGradeJanelaClaraboia: true,
                            flagAlarmeMonitorado: true,
                            flagVigilancia: true,
                            flagCercaEletrica: true,
                            valorPremioSubCobertura: 213.11,
                            jurosPremioParcelamento: 16.07,
                            custoEmissao: 0.0,
                            iofPremio: 15.73,
                            iofCustoEmissao: 0.0,
                            iofJurosPremio: 1.19,
                            interesses: null
                        },
                        {
                            codigo: "ASS",
                            valorImportanciaSegurada: "0.0",
                            tipoDeducao: 6,
                            valorDedutivel: 0.0,
                            descricaoDeducao: "Não se aplica",
                            flagGradeJanelaClaraboia: true,
                            flagAlarmeMonitorado: true,
                            flagVigilancia: true,
                            flagCercaEletrica: true,
                            valorPremioSubCobertura: 69.89,
                            jurosPremioParcelamento: 5.27,
                            custoEmissao: 0.0,
                            iofPremio: 5.16,
                            iofCustoEmissao: 0.0,
                            iofJurosPremio: 0.39,
                            interesses: null,
                            pacoteAssistencial: 6
                        }
                    ]
                }
            ],
            segurados: [
                {
                    pessoa: {
                        nomeSocial: "QA Enginner",
                        nome: "Marcus",
                        sobrenome: "Vinicius Teste API HUB",
                        dataNascimento: "1992-07-07 00:00:00",
                        ocupacao: "212205",
                        faixaRenda: 5.0,
                        contatos: [
                            {
                                telefones: [
                                    {
                                        numero: "991261692",
                                        ddd: 11,
                                        tipo: "telefoneCelular",
                                        ramal: null
                                    },
                                    {
                                        numero: "991261692",
                                        ddd: 11,
                                        tipo: "telefoneComercial",
                                        ramal: null
                                    }
                                ],
                                emails: [
                                    {
                                        email: "marcus.castro.prime@segurosunimed.com.br"
                                    }
                                ]
                            }
                        ],
                        dadosDocumentos: [
                            {
                                tipo: "1",
                                numero: "08667514080"
                            }
                        ],
                        enderecos: [
                            {
                                estado: {
                                    nome: "SP"
                                },
                                cidade: {
                                    nome: "BARUERI"
                                },
                                tipoLogradouro: "Não informado.",
                                logradouro: "ALAMEDA RIO NEGRO",
                                numero: "1200",
                                complemento: null,
                                bairro: "ALPHAVILLE INDUSTRIAL",
                                cep: "06454000",
                                tipo: "1"
                            }
                        ]
                    },
                    perfil: 3,
                    tipo: "0",
                    codigoTipoIndividual: 2,
                    flagExposicaoPolitica: false,
                    flagRelacaoAgentePublico: false,
                    tipoContato: "1",
                    emitidoPor: "Virtual user",
                    dataEmissao: "2025-03-11 10:51:17",
                    individual: {
                        flagCalcularImpostoServico: true
                    },
                    contaBancaria: {
                        tipoPagamento: "0",
                        tipoTitularConta: "0",
                        nomeTitularConta: "MARCUS VINICIUS TESTE API HUB",
                        tipoIdentificacaoTitularConta: "1",
                        numeroIdentificacaoTitularConta: "08667514080",
                        banco: 0,
                        agencia: 0,
                        tipoConta: 0,
                        conta: 0,
                        digitoConta: 0,
                        dataAplicacao: "2025-03-11 10:53:52",
                        statusAprovacao: 1,
                        contaConjunta: false
                    }
                }
            ],
            comissoes: [
                {
                    codigoInternoCorretor: "0000000021",
                    categoriaRisco: 101,
                    flagCorretorPrincipal: true,
                    tipoComissao: 1,
                    valorCorretagem: 0.35
                }
            ],
            clausulas: [
                {
                    nivel: 1,
                    tipo: 1,
                    codigo: 440000021
                }
            ],
            anexos: [
                {
                    extensao: "PDF",
                    nomeArquivo: "anexo",
                    conteudo: ""
                }
            ],
            operacao: null,
            observacao: "",
            congenero: {
                flagRetroatividadeAposPrazoComplementar: false,
                nome: null,
                dataRetroatividadeUltimaApolice: null
            }
        }
    }

    return requestApiHubResidencial;
}