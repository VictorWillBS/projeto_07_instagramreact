
const iconNames =["paper-plane-outline","compass-outline", "heart-outline","person-outline"]

function Icones(){
    return( <div class="icones">
        {(iconNames.map(nome=><ion-icon name={nome}></ion-icon>))}
</div>)
}

export default function NavBarr(){
    return( 
    <div class="navbar">
        <div class="container">
            <div class="logo">
                <ion-icon name="logo-instagram"></ion-icon>
                <div class="separador"></div>
                <img src="assets/img/logo.png" />
            </div>

            <div class="logo-mobile">
                <ion-icon name="logo-instagram"></ion-icon>
            </div>

            <div class="instagram-mobile">
                <img src="assets/img/logo.png" />
            </div>

            <div class="pesquisa">
                <input type="text" placeholder="Pesquisar" />
            </div>

            <Icones />
           
        </div>
  </div>
)
}