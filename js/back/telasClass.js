//Classe pai para telas
class Tela {
  constructor (titulo){
    this.titulo = titulo;
  }
}

//Calasse Construção do formulário
class TelaFrm extends Tela {
    constructor (titulo, campos){
        super(titulo);
        this.campos = campos;
    }
    renderizar(frm, cabecalho){
      cabecalho.innerHTML = this.titulo;
      this.campos.forEach((e, i) => {
          
        if (typeof this.campos[i].elemento == 'string'){
             frm.innerHTML += `
                 <div class="col-sm-12 col-md-${this.campos[i].tamanho}">
                     <label class="form-label mt-4 mb-2" for="${this.campos[i].id}">${this.campos[i].label}</label>
                     <${this.campos[i].elemento} type="${this.campos[i].type}" class="${this.campos[i].class}" id="campo${this.campos[i].id}" ${i==0? 'autofocus':''}> 
                 </div>
             `
        } 
        if (typeof this.campos[i].elemento == 'object'){
             var aux;
             this.campos[i].elemento.forEach((f, j)=>{
                 if (j==0){
                     aux = `
                     <div class="align-self-center text-justify col-sm-12 col-md-${this.campos[i].tamanho}">
                     <label class="form-label mt-4 mb-2" for="campo${this.campos[i].id}">${this.campos[i].label}</label>
                     <${this.campos[i].elemento[0]} class="${this.campos[i].class}" id="campo${this.campos[i].id}">
                     `
                 } else{
                     aux += `
                             <${this.campos[i].type} value="${this.campos[i].elemento[j]}">
                             ${this.campos[i].elemento[j]==""? "--" : this.campos[i].elemento[j]} 
                             </${this.campos[i].type}>
                         `;
                 }
             })
             aux += `</${this.campos[i].elemento[0]}>
                     </div>`
         
             frm.innerHTML += aux;
        
         }    
     });
    }
   
}




/* ---------------------------------------------------------------------- */

//Instancia dos formulários (posteriormente será recuperado de um BD)
var frmClientes = [
  {id:'1', label:'Nome', elemento: 'input', type: 'text', tamanho: '12', tabindex: '1', class: 'form-control'},
  {id:'2', label:'CPF', elemento: 'input', type: 'text', tamanho: '4', tabindex: '2', class: 'form-control'},
  {id:'3', label:'RG', elemento: 'input', type: 'text', tamanho: '4', tabindex: '3', class: 'form-control'},
  {id:'4', label:'CEP', elemento: 'input', type: 'text', tamanho: '4', tabindex: '7', class: 'form-control'},
  {id:'5', label:'Endereco', elemento: 'input', type: 'text', tamanho: '6', tabindex: '4', class: 'form-control'},
  {id:'6', label:'Cidade', elemento: 'input', type: 'text', tamanho: '3', tabindex: '5', class: 'form-control'},
  {id:'7', label:'UF', elemento: ['select',"", 'SP', 'MG', 'MT', 'PR'], type: 'option', tamanho: '3', tabindex: '6', class: 'form-select'}
];

var frmProdutos = [
  {id:'1', label:'Codigo de Barras', elemento: 'input', type: 'text', tamanho: '6', tabindex: '1', class: 'form-control'},
  {id:'2', label:'Descrição', elemento: 'input', type: 'text', tamanho: '6', tabindex: '2', class: 'form-control'},
  {id:'2', label:'Tamamanho/Embalagem', elemento: 'input', type: 'text', tamanho: '3', tabindex: '3', class: 'form-control me-0 pe-0'},
  {id:'3', label:'Uni.', elemento: ['select',"", 'Kg', 'L', 'ml', 'm'], type: 'option', tamanho: '1', tabindex: '4', class: 'form-select'},
  {id:'4', label:'Lote', elemento: 'input', type: 'text', tamanho: '4', tabindex: '5', class: 'form-control'},
  {id:'5', label:'Data de Validade', elemento: 'input', type: 'date', tamanho: '4', tabindex: '6', class: 'form-control datepicker'}
];

var frmFornecedores = [
  {id:'1', label:'CNPJ', elemento: 'input', type: 'text', tamanho: '4', tabindex: '1', class: 'form-control'},
  {id:'2', label:'Razão social', elemento: 'input', type: 'text', tamanho: '8', tabindex: '2', class: 'form-control'},
  {id:'3', label:'I/Municipal', elemento: 'input', type: 'text', tamanho: '4', tabindex: '3', class: 'form-control'},
  {id:'4', label:'I/Estadual', elemento: 'input', type: 'text', tamanho: '4', tabindex: '7', class: 'form-control'},
  {id:'5', label:'Contato', elemento: 'input', type: 'text', tamanho: '4', tabindex: '4', class: 'form-control'},
  {id:'6', label:'Fone1', elemento: 'input', type: 'text', tamanho: '4', tabindex: '5', class: 'form-control'},
  {id:'6', label:'Fone2', elemento: 'input', type: 'text', tamanho: '4', tabindex: '5', class: 'form-control'},
  {id:'6', label:'Fone3', elemento: 'input', type: 'text', tamanho: '4', tabindex: '5', class: 'form-control'},
  {id:'6', label:'E-mail', elemento: 'input', type: 'text', tamanho: '4', tabindex: '5', class: 'form-control'},
  {id:'7', label:'Segmento Principal', elemento: ['select',"", 'Descartáveis', 'Embalagens', 'Ferragem', 'Mat. Construção'], type: 'option', tamanho: '3', tabindex: '6', class: 'form-select'},
  {id:'6', label:'Obervações', elemento: 'input', type: 'text', tamanho: '5', tabindex: '5', class: 'form-control'}
];


/* ------------------------------------------------------------------------------------------------------------------- */