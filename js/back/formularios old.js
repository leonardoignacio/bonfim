//Função para construir os fomulários no modal
function renderizarFrm (tela){
    let cabecalho = document.getElementById('frmTitulo');
    cabecalho.innerHTML = tela.titulo;
    tela.campos.forEach((e, i) => {
          
        if (typeof tela.campos[i].elemento == 'string'){
             frm.innerHTML += `
                 <div class="col-sm-12 col-md-${tela.campos[i].tamanho}">
                     <label class="form-label mt-4 mb-2" for="${tela.campos[i].id}">${tela.campos[i].label}</label>
                     <${tela.campos[i].elemento} type="${tela.campos[i].type}" class="${tela.campos[i].class}" id="campo${tela.campos[i].id}" ${i==0? 'autofocus':''}> 
                 </div>
             `
        } 
        if (typeof tela.campos[i].elemento == 'object'){
             var aux;
             tela.campos[i].elemento.forEach((f, j)=>{
                 if (j==0){
                     aux = `
                     <div class="align-self-center text-justify col-sm-12 col-md-${tela.campos[i].tamanho}">
                     <label class="form-label mt-4 mb-2" for="campo${tela.campos[i].id}">${tela.campos[i].label}</label>
                     <${tela.campos[i].elemento[0]} class="${tela.campos[i].class}" id="campo${tela.campos[i].id}">
                     `
                 } else{
                     aux += `
                             <${tela.campos[i].type} value="${tela.campos[i].elemento[j]}">
                             ${tela.campos[i].elemento[j]==""? "--" : tela.campos[i].elemento[j]} 
                             </${tela.campos[i].type}>
                         `;
                 }
             })
             aux += `</${tela.campos[i].elemento[0]}>
                     </div>`
         
             frm.innerHTML += aux;
        
         }    
     });
}

