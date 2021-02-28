import { React } from "react";
import Topbar from './Topbar';
import Footer from './Footer';
import Fluid from "./Fluid";
import Content from "./Content";
import Content2 from "./Content2";

function Wrapper (){
    return (
    <div className="wrapper">
      <Topbar />
      <div className="container-fluid">
        <Fluid />
        <div className="row">
          <Content titulo="Last product in Data Base"/>
          <Content2 />
        </div>
      </div>
        
      <Footer />
    </div>
    )
}

export default Wrapper;