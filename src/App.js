
import logo from './logo.svg';
import "../src/style.css";
import './App.css';
import myWonderfulImage from "./js.jpg"


function App() {
  return (
    <div className="App">

      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

               <h1 className="title red">Dania Ben Hassen</h1>{"\n"}
                  
               <img className="new-line" src={myWonderfulImage} style={{maxWidth:'300px', height:'147px'}}/>{"\n"}
                 
               <img src="/certificate.png"  style={{maxWidth:'300px', height:'147px'}}/>

      </div>

<video width={600} height={400} controls>

<source src="myVideo.mp4" type="video/mp4"/> </video>
    </div>
  );
}

export default App;
