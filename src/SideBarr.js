import Sugestoes from "./Sugestoes"
const userName=["catanacomics"]
const name = ["Catana"]

const arrUsuario=[{userName:"catanacomics", name:"Catana"}]

function Usuario(props){
    return(
            <div class="usuario">
                <img src="assets/img/catanacomics.svg" />
                <div class="texto">
                <strong>{props.userName}</strong>
                {props.name}
                </div>
            </div>
    )
}
export default function SideBarr(){
    return(
        <div class="sidebar">
         {arrUsuario.map(item=> <Usuario userName={item.userName} name={item.name}/>)}

          <Sugestoes/>

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>

    )
}