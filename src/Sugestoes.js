const sugestaoImage = ["assets/img/bad.vibes.memes.svg","assets/img/chibirdart.svg", "assets/img/razoesparaacreditar.svg","assets/img/adorable_animals.svg", "assets/img/smallcutecats.svg"]
const sugestaoName = ["bad.vibes.memes","chibirdart", "razoesparaacreditar","adorable_animals","smallcutecats"]
const sugestaoRazao = ["Segue você","Novo no Instagram"]

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
                    <Sugestao image={sugestaoImage[0]} name={sugestaoName[0]} razao={sugestaoRazao[0]}/>
                    <Sugestao image={sugestaoImage[1]} name={sugestaoName[1]} razao={sugestaoRazao[0]}/>
                    <Sugestao image={sugestaoImage[2]} name={sugestaoName[2]} razao={sugestaoRazao[1]}/>
                    <Sugestao image={sugestaoImage[3]} name={sugestaoName[3]} razao={sugestaoRazao[0]}/>
                    <Sugestao image={sugestaoImage[4]} name={sugestaoName[4]} razao={sugestaoRazao[0]}/>
    
                </div>
            </div>
    )
}