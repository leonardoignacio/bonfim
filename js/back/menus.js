function construirMenu(){
    var listaMenu = document.getElementById('listaMenu');
    var aux ="";

    
    aux = `<li class="nav-item">
                <a class="nav-link btn btn-link" aria-current="page" href="#">Tela Inicial</a>
            </li>`
    
    cadMenus.forEach((e, i)=>{
        var menuItem = new MenuCadastros(cadMenus[i]);
        aux += `
                                <li class="nav-item dropdown">
                                    <a class="nav-link btn btn-link dropdown-toggle" href="#" id="dropmenu" role="button" 
                                        data-bs-toggle="dropdown" aria-expanded="false">${menuItem.titulo}</a>  
                                    <ul class="dropdown-menu" aria-labelledby="dropmenu"> 
                            `;
            menuItem.subMenu.forEach((f, j)=>{
                if (j >= 1){
                    aux += `<li><hr class="dropdown-divider"></li>`;
                }
                aux += `
                                    <li><a class="nav-link dropdown-item" 
                                            onclick="abrir${menuItem.subMenu[j].tela}('${menuItem.titulo+menuItem.subMenu[j].tela}')" 
                                            data-bs-toggle="modal" data-bs-target="#tela" data-bs-whatever="@getbootstrap" 
                                            href="#">${menuItem.subMenu[j].label}
                                    </a></li>
                                    `
                                   
            });
        aux += '</ul></li>'
    })
    listaMenu.innerHTML += `${aux}</ul></li>`;//Fechamento das tags abertas nas linhas  14 e 17 
}