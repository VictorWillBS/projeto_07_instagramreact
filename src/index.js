import ReactDom from "react-dom";
import NavBarr from "./NavBarr";
import Body from "./Body";
function App(){
    return(
        <div>
            <NavBarr/>
            <Body/>
        </div>
    )
}

ReactDom.render(<App/>, document.querySelector(".root"))