import './style/App.scss';
import { BrowserRouter, Route } from "react-browser-router";
import Header from "./components/Header";
import ScrollBar from "./components/ScrollBar";
import Home from "./pages/Home";
import Countdown from "./pages/Countdown";
import ImgUploader from "./pages/ImgUploader";
import ApiList from "./pages/ApiList";
import SliderList from "./pages/SliderList";
import Codex from "./pages/Codex";
import ToDoList1 from "./pages/ToDoList1";
import ToDoList2 from "./pages/ToDoList2";
import ToDoList3 from "./pages/ToDoList3";
import Animations1 from "./pages/Animations1";
import Animations2 from "./pages/Animations2";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Header />
        <ScrollBar />
        <Route exact path='/' component={Home}/>
        <Route exact path='/Countdown' component={Countdown}/>
        <Route exact path='/ImgUploader' component={ImgUploader}/>
        <Route exact path='/ApiList' component={ApiList}/>
        <Route exact path='/SliderList' component={SliderList}/>
        <Route exact path='/Codex' component={Codex}/>
        <Route exact path='/ToDoList1' component={ToDoList1}/>
        <Route exact path='/ToDoList2' component={ToDoList2}/>
        <Route exact path='/ToDoList3' component={ToDoList3}/>
        <Route exact path='/Animations1' component={Animations1}/>
        <Route exact path='/Animations2' component={Animations2}/>
      </BrowserRouter>

    </div>
  );
}

export default App;