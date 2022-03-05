import axios from 'axios';
import React, { Component } from "react"
// import {  Image } from 'react-native';
// import {Buffer} from 'buffer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Messages.css';
import { resolvePath } from 'react-router-dom';
import { useSelector } from 'react-redux';

// function GetUserInfo() {
//     let userId = useSelector(state => state[0]);
//     return userId;
// }

export default class MessagesBox extends Component {

    state = {
        //id of current user
        // userId: 8, //This needs to be updated to be dynamic!!!
        // patientId: 8,
        // userType: 'Patient',
        // userId: this.props.senderId, //This needs to be updated to be dynamic!!!
        userId: Number(window.localStorage.getItem("userId")),
        // userId: useSelector(state => state[0]), //ERROR
        // userId: GetUserInfo(), //ERROR
        // patientId: this.props.patientId,
        patientId: Number(window.localStorage.getItem("patientId")),
        // userType: this.props.userType,
        userType: window.localStorage.getItem("userType"),


        //array holding all the messages for this user
        messages: [],
        arrPhotos: [],
        base64Images: [],
        imgUrls: []
    }

    //get all messages for one patient
    componentDidMount() {
        // let userId =  useSelector(state => state[0]); //error
        console.log('At the very top of the console log upon mounting messagesbox')
        console.log(this.state.userId)
        // this.state.userId = useSelector(state => state.userId);
        // this.state.patientId = useSelector(state => state.patientId);
        // this.state.userType = useSelector(state => state.userType);
        
        this.getAllMessages();
        // this.scrollToBottom();
        this.messagesEnd.scrollIntoView({ behavior: "auto" });
        console.log('Mounted component, loaded the messages the 1st time')

        this.getAnyPhotos()
        
        setInterval(this.getAllMessages, 1000)

    }

    getAnyPhotos = () => {
        let photoId = 1; // this needs to be replaced. search through messages array and see if any message has photoId


        axios.get('http://localhost:8081/photos/' + photoId).then(
            res => {
                // console.log(res)
                console.log(res.data.photo)
                this.state.arrPhotos.push(res.data.photo)

                //trying to create Object URL
                var binaryData = [];
                binaryData.push(res.data.photo);
                
                // this.state.imgUrls.push(URL.createObjectURL(new Blob(binaryData, {type: "application/zip"})))
                
                // const fileReader = new FileReader();
                const currBlob = new Blob(binaryData);
                // console.log(currBlob)
                console.log('reader')
                const oneImage = this.convertBase64(currBlob) 
                // fileReader.readAsDataURL(currBlob);

                // fileReader.onload = () => {
                //     resolve(fileReader.result)
                // }

                // console.log(.result)

                // this.state.imgUrls.push(oneImage)


                // var base64Image = 'data:image/png;base64,REPLACETHIS'.replace('REPLACETHIS',res.data.photo)
                
                // var base64Image = 'data:image/png;base64,'+ new String(Base64.getEncoder().encode(res.data.photo)) 
                
                // const Buffer = require("buffer").Buffer;
                // let encodedAuth = Buffer(res.data.photo).toString("base64")
                
            //     const Buffer = require("buffer").Buffer;
            //     let encodedAuth = Buffer.from(res.data.photo, 'utf-8').toString('base64')
            //     var base64Image = 'data:image/png;base64,'+ encodedAuth
            //     this.state.base64Images.push(base64Image)
            }
            
        )

    }


    convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
      
            fileReader.onload = () => {
                console.log('inside filereader onload')
                console.log(fileReader.result)
                console.log(this.state.imgUrls)
                this.state.imgUrls.push(fileReader.result)
                console.log(this.state.imgUrls)


              resolve(fileReader.result);
            };
      
            fileReader.onerror = (error) => {
              reject(error);
            };
          });
        };


    getAllMessages = () => {
        // console.log('get all messages')
        // let patientId = 8; //This needs to be updated to be dynamic!!!
        let patientId = this.state.patientId; 

        axios.get('http://localhost:8081/messages/' + patientId).then(
            res => {
                // console.log('refreshed -> got latest messages from db')
                //if there are more messages on the database than on display then update the messages state
                if (res.data.length > this.state.messages.length) {
                    //Another if statement can be added here
                    //if the newest messages are not from the user
                    //then shift the screen up a certain number of pixels
                    //maybe also add a check so that this only happens if you
                    //are at the bottom of the autoscroll




                    this.setState({ messages: res.data });
                    // console.table(this.state.messages);
                }
            }
        );
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "auto" });
    }


    componentDidUpdate() {
        this.scrollToBottom();
    }

    render() {
        return (
            <div className="message-box">
                <div>
                    {this.state.messages.map(messageObj =>
                        // (messageObj.senderId === this.state.userId) ?
                        //     <div className="d-flex flex-row py-2 mx-2" key={messageObj.messageId}>
                        //         <div className="message-single bg-primary text-white px-3">
                        //             {messageObj.message}
                        //         </div>
                        //     </div> :
                        //     <div className="d-flex flex-row py-2 mx-2 justify-content-end" key={messageObj.messageId}>
                        //         <div className="message-single bg-light px-3">
                        //             {messageObj.message}
                        //         </div>
                        //     </div>
                        (this.state.userType === "Patient") ?
                            (messageObj.senderId === this.state.patientId) ?
                                <div className="d-flex flex-row py-2 mx-2" key={messageObj.messageId}>
                                    <div className="message-single bg-primary text-white px-3">
                                        {messageObj.message}
                                    </div>
                                </div> :
                                <div className="d-flex flex-row py-2 mx-2 justify-content-end" key={messageObj.messageId}>
                                    <div className="message-single bg-light px-3">
                                        {messageObj.message}
                                    </div>
                                </div>:
                            (messageObj.senderId !== this.state.patientId) ?
                            <div className="d-flex flex-row py-2 mx-2" key={messageObj.messageId}>
                                <div className="message-single bg-primary text-white px-3">
                                    {messageObj.message}
                                </div>
                            </div> :
                            <div className="d-flex flex-row py-2 mx-2 justify-content-end" key={messageObj.messageId}>
                                <div className="message-single bg-light px-3">
                                    {messageObj.message}
                                </div>
                            </div>
)}
                </div>
                {/* <div>
                    <img src={this.state.imgUrls[0]} height="50px"/>
                </div> */}
                <div ref={(el) => { this.messagesEnd = el; }}></div>
            </div>
        )
    }

}