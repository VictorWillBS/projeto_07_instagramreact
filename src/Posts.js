const imgUser = ["assets/img/meowed.svg", "assets/img/barked.svg"];
const userName = ["meowed","barked"];
const imgPost =["assets/img/gato-telefone.svg","assets/img/dog.svg"]
const curtidaImg = ["assets/img/respondeai.svg", "assets/img/adorable_animals.svg"]
const lastCurtida = ["respondeai","adorable_animals"]
const outrasCurtidas = ["outras 101.523 pessoas", "outras 99.159 pessoas"]

const arrPost=[
{ imagem:imgUser[0],nome:userName[0], postImg:imgPost[0], lastCurtidaImg:curtidaImg[0], lastCurtidaNome:lastCurtida[0], outrasCurtidasTxt:outrasCurtidas[0]},
{ imagem:imgUser[1], nome:userName[1], postImg:imgPost[1], lastCurtidaImg:curtidaImg[1], lastCurtidaNome:lastCurtida[1],outrasCurtidasTxt:outrasCurtidas[1]}
]


function Topo (props){
    return (
        <div class="topo">
            <div class="usuario">
                <img src={props.image} />
                {props.name}
            </div>
            <div class="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
    </div>
  )
}

function Conteudo(props){
    return(<div class="conteudo">
    <img src={props.image} />
  </div>)
}

function Fundo(props){
    return(
        <div class="fundo">
            <div class="acoes">
                <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div class="curtidas">
                <img src={props.image} />
                <div class="texto">
                    Curtido por <strong>{props.ultCurtida}</strong> e <strong>{props.outCurtidasTxt}</strong>
                </div>
            </div>
        </div>
    )
}
function Post(props){
    return( 
    <div class="post">
            
        <Topo image={props.imageUser} name={props.userName} />
        <Conteudo image={props.imagePost}/>
        <Fundo 
        image={props.imageCurtida} 
        ultCurtida={props.curtidaUser}
        outCurtidasTxt = {props.outrasCurtidasTxt}
        />
        
    </div>
)
}

export default function Posts(){
    return (
        <div class="posts">
       {arrPost.map(item=><Post 
        imageUser={item.imagem}
        userName={item.nome}
        imagePost={item.postImg}
        imageCurtida={item.lastCurtidaImg}
        curtidaUser={item.lastCurtidaNome}
        outrasCurtidasTxt={item.outrasCurtidasTxt} />)}
      </div>
    )
}