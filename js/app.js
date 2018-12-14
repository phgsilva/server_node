'use strict'
// JavaScript source code
var vApp = new Vue({
    el: '#vApp',
	
    data: {
        nome: '',
        email: '',
        telefone: '',
        rg: '',
        lembrar: false,

        lstDados: []
    },
	
    methods: {
        mostrarDados: function () {
            let dado = { nome: this.nome, email: this.email, telefone: this.telefone, rg: this.rg, lembrar: this.lembrar };
            let stringDado = " NOME: "+this.nome+ "\n EMAIL: " + this.email + "\n TELEFONE: " + this.telefone + "\n RG: " + this.rg + "\n LEMBRAR: " + this.lembrar + "\n"
            let confirmado = confirm("Os dados abaixo estao corretos? \n \n" + stringDado);

            if (confirmado) {
                this.addItem(dado);
            }
            else {
                alert('Por favor, ajuste os dados no formulario.');
            }
        },

        addItem: function (item) {
            this.lstDados.push(item);
            this.limparCampos();
        },

        limparCampos: function () {
            this.nome = '';
            this.email = '';
            this.telefone = '';
            this.rg = '';
            this.lembrar = false;
        }
    },
	
    created: function(){
    }
});

//function testarWs() {
//    let conteudo = $('content');

//    $.ajax({
//        type: "GET",
//        url: "http://vitallis.agendeumaconsulta.com.br/WS/wsAgendamentoonline.asmx/BuscaEspecialidades",
//        data: "{ 'pCodClienteOrigem': 123, 'pCodTipoProfissional': 1 }", // if ur method take parameters 
//        dataType: "json",
//        contentType: "application/json; charset=utf-8",
//        success: function (data) {
//            if (data.d.results.length > 0) {
//                conteudo.text(data.d.results);
//            }
//        },
//        error: function (data) {
//            conteudo.text(data);
//        }
//    });
//}

