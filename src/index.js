import {info} from '../src/ids'
import ReactDOM from "react-dom";
import LayerApp from "./LayerApp"
// import "../src/index.css"

const divRoot = document.querySelector("#root");

info.forEach(title => {
  
  const paragraph = document.createElement('p');
  paragraph.innerText = title;

  // document.body.append(paragraph);
  ReactDOM.render(<LayerApp />, divRoot);
});