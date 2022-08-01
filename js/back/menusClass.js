//Classe de construção de Menu
class Menu {    
    constructor(itens){
        this.itens = itens;
    }
    renderizar(){
        
    }
}


//MenuItem será o pai de cada item de
class MenuItem {
    constructor(tipo, titulo, subMenu){
        this.tipo = tipo;
        this.titulo = titulo;
        this.subMenu = subMenu;
    }
}

//MenuCadastro herda os atributos da classe MenuItem
class MenuCadastros extends MenuItem {
    constructor (titulo){
        let subMenu = [
                {label:"Novo Cadastro", tela:"Frm" },
                {label:"Consultas", tela:"Fon" },
                {label:"Relatório", tela:"Rel"}
            ];
        let tipo = "cadastro";
        super(tipo, titulo, subMenu) //Uso de herança por meio da propriedade extends e atributo super()
        
    }
}





//MenuCadastro herda os atributos da classe MenuItem
class MenuMovimentacoes extends MenuItem {
    constructor (titulo){
        //Falta definir a instancia do subMenu de movimentações
        let subMenu = [
                {label:"Teste1", tela:"Teste1" },
                {label:"Teste2", tela:"Teste2" },
                
            ];
        super(titulo, subMenu) //Uso de herança por meio da propriedade extends e atributo super()
        
    }
}

/* ---------------------------------------------------------------------------------------------------------- */
//Instancias dos menus de cadastro(posteriormente será recuperado do BD)
var cadMenus = ["Clientes", "Produtos", "Fornecedores", "teste"]; // Para novos menus de cadastro, basta inserir um item

//Instancias dos menus de movimentações(posteriormente será recuperado de um BD)
var movMenus = ["Teste1", "Teste2"];

/* ------------------------------------------------------------------------------------------------------------ */ 