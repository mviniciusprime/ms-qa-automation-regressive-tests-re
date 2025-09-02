

import { faker } from '@faker-js/faker';

export function motorCalculoDroolsResidencial() {

    var actualDate = new Date().toISOString().split('T')[0];

    const motorDroolsResid = {
        sistemaOrigem: "15",
        perfilUsuario: "1",
        codProduto: "RESID",
        tipoSeguro: "1",
        tipoVigencia: "1",
        acordoComercial: "I",
        codCotacao: 100200,
        congenereAnterior: 0,
        dataCotacao: "04-06-2025",
        dataCriacaoCotacao: "04-06-2025",
        descontoComercial: 0.00,
        iniVigApolice: "04-06-2025",
        fimVigApolice: "04-06-2026",
        mg: 0.05,
        listaCorretor: [
            {
                taxaComissao: 0.35,
                tipoComissao: 1
            }
        ],
        listaItem: [
            {
                item: 1,
                cepRisco: "06454000",
                ufRisco: "SP",
                teveSinistroUltimosDozeMeses: "2",
                cooperado: "2",
                classeBonus: "0",
                tipoImovel: "1",
                tipoUtilizacao: "1",
                tipoConstrucao: "1",
                ajusteTecnicoItem: 0,
                vrd: 600000.0,
                localizadoEmCondominio: "1",
                vigilanciaVinteQuatroHoras: "1",
                monitoramentoVinteQuatroHoras: "1",
                cercaEletrica: "1",
                gradesEmJanelas: "1",
                isencaoIof: "2",
                isencaoJuros: "2",
                listaCobertura: [
                    {
                        codCobertura: "IEQR",
                        faixaCapital: 1,
                        capitalCobertura: 600000.0,
                        periodoIndenitario: 0,
                        tipoFranquia: 0,
                        valorFranquia: 0.0,
                        ajusteTecnico: 0.0
                    },
                    {
                        codCobertura: "DE",
                        faixaCapital: 1,
                        capitalCobertura: 30000.0,
                        periodoIndenitario: 0,
                        tipoFranquia: 0,
                        valorFranquia: 0.0,
                        ajusteTecnico: 0.0
                    },
                    {
                        codCobertura: "RD",
                        faixaCapital: 1,
                        capitalCobertura: 30000.0,
                        periodoIndenitario: 0,
                        tipoFranquia: 0,
                        valorFranquia: 0.0,
                        ajusteTecnico: 0.0
                    },
                    {
                        codCobertura: "IVAT",
                        faixaCapital: 1,
                        capitalCobertura: 25000.0,
                        periodoIndenitario: 0,
                        tipoFranquia: 0,
                        valorFranquia: 0.0,
                        ajusteTecnico: 0.0
                    },
                    {
                        codCobertura: "PPA",
                        faixaCapital: 1,
                        capitalCobertura: 72000.0,
                        periodoIndenitario: 6,
                        tipoFranquia: 0,
                        valorFranquia: 0.0,
                        ajusteTecnico: 0.0
                    },
                    {
                        codCobertura: "QV",
                        faixaCapital: 1,
                        capitalCobertura: 12000.0,
                        periodoIndenitario: 0,
                        tipoFranquia: 0,
                        valorFranquia: 0.0,
                        ajusteTecnico: 0.0
                    },
                    {
                        codCobertura: "RCF",
                        faixaCapital: 1,
                        capitalCobertura: 100000.0,
                        periodoIndenitario: 0,
                        tipoFranquia: 0,
                        valorFranquia: 0.0,
                        ajusteTecnico: 0.0
                    },
                    {
                        codCobertura: "RFB",
                        faixaCapital: 1,
                        capitalCobertura: 30000.0,
                        periodoIndenitario: 0,
                        tipoFranquia: 0,
                        valorFranquia: 0.0,
                        ajusteTecnico: 0.0
                    },
                    {
                        codCobertura: "VFCT",
                        faixaCapital: 1,
                        capitalCobertura: 30000.0,
                        periodoIndenitario: 0,
                        tipoFranquia: 0,
                        valorFranquia: 0.0,
                        ajusteTecnico: 0.0
                    },
                    {
                        codCobertura: "RTT",
                        faixaCapital: 1,
                        capitalCobertura: 30000.0,
                        periodoIndenitario: 0,
                        tipoFranquia: 0,
                        valorFranquia: 0.0,
                        ajusteTecnico: 0.0
                    },
                    {
                        codCobertura: "ASS",
                        faixaCapital: 1,
                        capitalCobertura: 0.0,
                        periodoIndenitario: 0,
                        tipoFranquia: 0,
                        valorFranquia: 0.0,
                        ajusteTecnico: 0.0
                    }
                ]
            }
        ]
    }

    return motorDroolsResid;
};