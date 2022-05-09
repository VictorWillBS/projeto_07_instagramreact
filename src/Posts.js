import React from "react"

const arrPost=[
{ imagem:"assets/img/meowed.svg",nome:"meowed", postImg:"assets/img/gato-telefone.svg", lastCurtidaImg:"assets/img/respondeai.svg", lastCurtidaNome:"respondeai", outrasCurtidasTxt:"outras 101.523 pessoas"},

{ imagem:"assets/img/barked.svg", nome:"barked", postImg:"assets/img/dog.svg", lastCurtidaImg: "assets/img/adorable_animals.svg", lastCurtidaNome:"adorable_animals",outrasCurtidasTxt:"outras 99.159 pessoas"}
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
    //logic
    const coracao_Inicial ="heart-outline";
    const coracao_Curtido= "heart";
    const class_Curtido= "coracaoCurtido";
    const class_Inicial= "coracaoInicial";
    const [coracao,setCoracao]= React.useState(coracao_Inicial);
    const [classCoracao,setClassCoracao] =React.useState(class_Inicial)

    function alterarCoracao(){
        if(coracao===coracao_Inicial){
            setCoracao(coracao_Curtido)
            setClassCoracao(class_Curtido)
        } else{
            setCoracao(coracao_Inicial)
            setClassCoracao(class_Inicial)
        }
    }

    //UI
    return(
        <div class="fundo">
            <div class="acoes">
                <div>
                    <ion-icon name={coracao} id={classCoracao} onClick={alterarCoracao} ></ion-icon>
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