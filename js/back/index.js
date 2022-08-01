//Declaração de variaveis glogais de controle
var titulo, campos;
//Interpolação de elementos HTML
var modal = document.getElementById('tela');
var modalInstance = bootstrap.Modal.getInstance(modal);
var frm = document.getElementById('frmCadastro');
var cabecalho = document.getElementById('frmTitulo');


//Execução da função para contruir o Menu
construirMenu();

//Eventos do modal de formulários
modal.addEventListener('shown.bs.modal', function (e) {
    document.querySelector('#campo1').focus();
});

modal.addEventListener('hidden.bs.modal', function (e) {
    campos = null;
    titulo = null;
    cabecalho.innerHTML = "";
    frm.innerHTML = "";
    
});
modal.addEventListener('hidePrevented.bs.modal', function (e) {
    document.querySelector('#campo1').focus();
});

//Função que carrega o formulário no modal
function abrirFrm (frmCampos){
        switch (frmCampos){
            case 'ClientesFrm': 
                campos = frmClientes;
                titulo = '<i class="fa fa-users"></i><i class="fa fa-users"></i> Cadastro de clientes';
                break;
            case 'ProdutosFrm': 
                campos = frmProdutos;
                titulo = '<i class="fas fa-cubes"></i><i class="fa fa-barcode"></i> Cadastro de Produtos';
                break;
            case 'FornecedoresFrm': 
                campos = frmFornecedores;
                titulo = '<i class="fa fa-users"></i><i class="fas fa-cubes"></i> Cadastro de Fornecedores';
                break;
            default:
                campos = "A tela não foi instanciada";
                titulo = "Tela não instanciada";
                break; 
        }
        
        let tela = new TelaFrm(titulo, campos);
        tela.renderizar(frm, cabecalho);
  
}

function salvarRegistro(){
    alert('Arquivo salvo com sucesso!')
}

/*


*/