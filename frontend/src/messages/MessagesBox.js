import axios from 'axios';
import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './Messages.css';


export default class MessagesBox extends Component{

    state = {
        //id of current user
        userId: 8, //This needs to be updated to be dynamic!!!
        patientId:8,
        
        //array holding all the messages for this user
        messages:[],
    }

    //get all messages for one patient
    componentDidMount(){
        this.getAllMessages();
        // this.scrollToBottom();
        this.messagesEnd.scrollIntoView({ behavior: "auto" });


        setInterval(this.getAllMessages, 1000)

    }

    getAllMessages = () => {
        // console.log('get all messages')
        let patientId = 8; //This needs to be updated to be dynamic!!!

        axios.get('http://localhost:8081/messages/'+ patientId).then(
            res => {
                console.log('refreshed -> got latest messages from db')
                    //if there are more messages on the database than on display then update the messages state
                    if ( res.data.length  > this.state.messages.length ){
                        //Another if statement can be added here
                        //if the newest messages are not from the user
                        //then shift the screen up a certain number of pixels
                        //maybe also add a check so that this only happens if you
                        //are at the bottom of the autoscroll




                        this.setState({messages: res.data});
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

    render(){
        return(
        <div className="message-box">
          <div>
            {this.state.messages.map( messageObj =>
              (messageObj.senderId === this.state.userId) ?
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
          <div ref={(el) => { this.messagesEnd = el; }}></div>
        </div>
        )
    }
  
}