import axios from 'axios';
import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './Messages.css';

import { IconContext } from 'react-icons/lib';
import { FaCamera} from "react-icons/fa";




import Navbar from '../navbar/Navbar';



export default class Messages extends Component{
  
  render(){
    return (
        <div className="h-100" stle={{"overflow":"hidden"}}>
            <Navbar />

            <div className="message-box">
            {/* <div className="message-box" style={{"position":"relative"}}> */}
                  Message Box
                  <div>
                    <div className="py-5">new</div>
                    <div className="py-5">new</div>
                    <div className="py-5">new</div>
                    <div className="py-5">new</div>
                    <div className="py-5">new</div>
                    <div className="py-5">new</div>
                    <div className="py-5">new</div>
                    <div className="py-5">new</div>
                    <div className="py-5">new</div>
                    <div className="py-5">new</div>
                    <div className="py-5">new</div>
                    <div className="py-5">new</div>
                    <div className="py-5">new</div>
                    <div className="py-5">new</div>
                    <div className="py-5">new</div>
                    <div className="py-5">new</div>
                    <div className="py-5">new</div>
                    <div className="py-5">new</div>
                    <div className="py-5">new</div>
                    <div className="py-5">new</div>
                  </div>   
            </div>

            {/* <label className="d-flex flex-row input-field justify-content-between"> */}
            <label className="d-flex flex-row input-field">
                <IconContext.Provider value={{className:'camera-icon'}}>
                    <div className="cam-wrapper mx-3">
                      <FaCamera title="Attach a Photo"/>
                    </div>
                </IconContext.Provider>
                {/* <input className="form-control mx-3 my-2" id="commentInput" type="text" required onChange={getData} onKeyDown={handleKeyDown} size="100" placeholder="Enter a message" />
                <button className="btn btn-secondary mx-2 my-2" type="submit" onClick={clickButton}>Send</button> */}
                <input className="message-input mx-2 my-2 w-100" id="commentInput" type="text" required size="100" placeholder="   Enter a message" />
                <button className="btn btn-secondary mx-2 my-2 message-send" type="submit">Send</button>
            </label>
            

            
            
        </div>
        
      )
  }
}
