
class Menu {    
    constructor(idUl, itens){
        this.idUl = idUl;
        this.itens = itens;
    }
    render(){
        let ul = document.getElementById(this.idUl)
        let menus=""
        this.itens.forEach(i => {
            menus +=`
            <li class="nav-item">
                <a class="nav-link" aria-current="page" href="${i.link}">${i.label}</a>
            </li>
            `
        });
        ul.innerHTML=menus
        
    }
}

class Carousel {    
    constructor(idDiv, slids){
        this.idDiv = idDiv;
        this.slids = slids;
    }
    render(){
        let div = document.getElementById(this.idDiv)
        let images=""
        this.slids.forEach(img => {
            let active = img.active ? 'active':''
            images +=`
                <div class="carousel-item ${active}" data-bs-interval="5000">
                    <img src="${img.src}" class="d-block w-100 img-fluid" alt="${img.alt}">
                </div>
            `
        });
        div.innerHTML=images
        
    }
}


/*

<div class="carousel-item active" data-bs-interval="5000">
<img src="..." class="d-block w-100" alt="...">
</div>
<div class="carousel-item" data-bs-interval="2000">
<img src="..." class="d-block w-100" alt="...">
</div>
<div class="carousel-item">
<img src="..." class="d-block w-100" alt="...">
</div>
</div>

*/