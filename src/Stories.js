const storyImage=["assets/img/9gag.svg", "assets/img/meowed.svg","assets/img/barked.svg","assets/img/nathanwpylestrangeplanet.svg","assets/img/wawawicomics.svg","assets/img/respondeai.svg","assets/img/filomoderna.svg","assets/img/memeriagourmet.svg"]

const userName=[ "9gag","meowed","barked","nathanwpylestrangeplanet","wawawicomics","respondeai", "filomoderna","memeriagourmet"]

function Story(props){
    return(
    <div class="story">
         <div class="imagem">
           <img src={props.image} />
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
<Story image = {storyImage[0]}  name={userName[0]}/>
<Story image = {storyImage[1]}  name={userName[1]}/>
<Story image = {storyImage[2]}  name={userName[2]}/>
<Story image = {storyImage[3]}  name={userName[3]}/>
<Story image = {storyImage[4]}  name={userName[4]}/>
<Story image = {storyImage[5]}  name={userName[5]}/>
<Story image = {storyImage[6]}  name={userName[6]}/>
<Story image = {storyImage[7]}  name={userName[7]}/>
<Story image = {storyImage[5]}  name={userName[5]}/>
<Story image = {storyImage[6]}  name={userName[6]}/>
<Story image = {storyImage[7]}  name={userName[7]}/>

      <div class="setinha" onClick="scrollar">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
    )
}


