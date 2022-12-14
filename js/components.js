
class Menu {
    constructor(idUl, itens) {
        this.idUl = idUl;
        this.itens = itens;
    }
    render() {
        let ul = document.getElementById(this.idUl)
        let menus = ""
        this.itens.forEach(i => {
            menus += `
            <li class="nav-item">
                <a  href="${i.link}" class="nav-link clearfix" onclick="toggleMenu()">${i.label}</a>
            </li>
            `
        });
        ul.innerHTML = menus

    }
}

class Carousel {
    constructor(idDiv, slids) {
        this.idDiv = idDiv;
        this.slids = slids;
    }
    render() {
        let div = document.getElementById(this.idDiv)
        let images = ""
        this.slids.forEach(img => {
            let active = img.active ? 'active' : ''
            images += `
                <div class="carousel-item banner ${active}" data-bs-interval="3000">
                    <!-- img src="${img.src}" class="rounded d-block img-fluid" alt="${img.alt}" -->
                    <div class="carousel-caption d-none d-md-block">
                        <h1 class="text-center">${img.titulo}</h1>
                    </div>
                </div>
            `
        });
        div.innerHTML = images

    }
}

class CatCarousel {
    constructor(idDiv, slids) {
        this.idDiv = idDiv;
        this.slids = slids;
    }
    render() {
        let div = document.getElementById(this.idDiv)
        let images = ""
        this.slids.forEach(img => {
            let active = img.active ? 'active' : ''
            images += `
                <div class="carousel-item ${active}" data-bs-interval="5000">
                    <div class="card" style="width: 20rem;">
                        <img src="" alt="" class="card-img-top">
                        <div class="card-body">
                            <h2 class="card-title">Texto</h2>
                            <p class="card-text">texto</p>
                        </div>
                        <div class="card-footer">
                            <h3>Categoria</h3>
                        </div>
                    </div>
                </div>
            `
        });
        div.innerHTML = images

    }
}


/*



*/