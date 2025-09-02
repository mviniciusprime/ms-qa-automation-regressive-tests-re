import { authToken } from '../../../../support/requests/authToken';
import { motorCalculoDroolsResidencial } from '../../../../support/requests/motorResidencialCotacao';
import { requestApiHubResidencial } from '../../../../support/requests/apiHubResidRequest'
import '../../../../support/commands'

var requestMotorDrools
var requestApiHubResid
var tipoFranquia
var valorFranquia
var capitalSegurado


describe("Testes API do HUB Cient Id - quiver-api", () => {
  context("Testes API do HUB Residencial", () => {
    it("Chamar API do Drools e obter Calculo", () => {
      requestMotorDrools = motorCalculoDroolsResidencial();

      //var client = clientAssertion();

      cy.reqMotorDroolsResid(
        'POST',
        'https://api-services-hml2.digital-segurosunimed.com/motor-residencial-cotacao/rest/calculoResidencial',
        requestMotorDrools
      ).then((response) => {

        if(response.body.listaItem[0].listaCobertura.find((codCobertura) => codCobertura.codCobertura == 'IEQR')){
            const codCoberturaIEQR = response.body.listaItem[0].listaCobertura.find((codCobertura) => codCobertura.codCobertura == 'IEQR');
            tipoFranquia = codCoberturaIEQR.tipoFranquia
            valorFranquia = codCoberturaIEQR.valorFranquia
            capitalSegurado = codCoberturaIEQR.capitalSegurado

        }
        cy.log(JSON.stringify(response.body))
        expect(response.status).to.equal(200)
      });

    });

    it("Chamar API do HUB e obter resultado da requisição", () => {

      requestApiHubResid = requestApiHubResidencial()

      requestApiHubResid.apolice.objetoSegurados[0].coberturas[0].valorImportanciaSegurada = capitalSegurado

      cy.reqApiHubResidencial(
        'POST',
        "https://multicalculoresidencial-hml.segurosunimed.com.br/api/cotacoes/completo",
        requestApiHubResid,
      ).then((response) => {
        cy.log(JSON.stringify(response.body))
        expect(response.status).to.equal(200);
      })

    })
  });
});