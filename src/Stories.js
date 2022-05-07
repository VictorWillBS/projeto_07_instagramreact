const storyImage=["assets/img/9gag.svg" ,"assets/img/meowed.svg","assets/img/barked.svg","assets/img/nathanwpylestrangeplanet.svg","assets/img/wawawicomics.svg","assets/img/respondeai.svg","assets/img/filomoderna.svg","assets/img/memeriagourmet.svg"]

const userName=[ "9gag","meowed","barked","nathanwpylestrangeplanet","wawawicomics","respondeai", "filomoderna","memeriagourmet"]

const arrStories=[
{image : storyImage[0],  name: userName[0]},
{image : storyImage[1],  name: userName[1]},
{image : storyImage[2],  name: userName[2]},
{image : storyImage[3],  name: userName[3]},
{image : storyImage[4],  name: userName[4]},
{image : storyImage[5],  name: userName[5]},
{image : storyImage[6],  name: userName[6]},
{image : storyImage[7],  name: userName[7]},
]

console.log(arrStories)

function Story(props){
    return(
    <div class="story">
         <div class="imagem">
           <img src={props.image} alt ="Foto do Usuário"/>
         </div>
         <div class="usuario">
           {props.name}
         </div>
    </div>   
    )
}

function scrollar(){}

export default function Stories(){
    return (
  <div class="stories">
 
      {arrStories.map(item => <Story image={item.image} name={item.name}/>)}

      <div class="setinha" onClick="scrollar">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
    )
}


