
const arrSugestao = [
    {image:"assets/img/bad.vibes.memes.svg", name:"bad.vibes.memes", razao:"Segue você"},
    {image:"assets/img/chibirdart.svg", name:"chibirdart", razao:"Novo no Instagram"},
    {image:"assets/img/razoesparaacreditar.svg", name:"razoesparaacreditar", razao:"Segue você"},
    {image:"assets/img/adorable_animals.svg", name:"adorable_animals", razao:"Segue você"},
    {image:"assets/img/smallcutecats.svg", name:"smallcutecats", razao:"Segue você"},
]

function Sugestao(props){
    return(
        <div class="sugestao">
             <div class="usuario">
                <img src={props.image} />
                <div class="texto">
                    <div class="nome">{props.name}</div>
                    <div class="razao">{props.razao}</div>
                </div>
             </div>

            <div class="seguir">Seguir</div>
         </div>        
    )
}

export default function Sugestoes(){
    return(
            <div>
                <div class="sugestoes">
                    <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                    </div>
                    {arrSugestao.map(item=> <Sugestao image={item.image} name={item.name} razao={item.razao} />)}
    
                </div>
            </div>
    )
}