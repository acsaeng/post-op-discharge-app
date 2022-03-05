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

        // scrollPosition:this.props.scrollPosition
    }

    //get all messages for one patient
    componentDidMount(){
        this.getAllMessages();
        // axios.get('http://localhost:8081/messages/'+this.state.patientId).then(
        //     res => {
        //         console.log(res);
        //         this.setState({messages: res.data});
        //         console.table(this.state.messages);
        //     });
            // this.handleScrollPosition();
        this.scrollToBottom();

        // this.state.patientId = 8;

        // setInterval(this.getAllMessages, 1000)

    }

    getAllMessages = () => {
        console.log('get all messages')

        let patientId = 8; //dynamically update this in the future!!!!!

        axios.get('http://localhost:8081/messages/'+ patientId).then(
            res => {
                console.log('returned result')
                    this.setState({messages: res.data});
                    // console.table(this.state.messages);
                }
            );
    }

        // handle scroll position after content load
    handleScrollPosition() {
        const scrollPosition = sessionStorage.getItem("scrollPosition");
        if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition));
        // sessionStorage.removeItem("scrollPosition");
        }
    };

    // checkPosition(){
    //     console.log("window.pageYOffset")
    //     console.log(window.pageYOffset)
    // }

    scrollToBottom = () => {
        // this.messagesEnd.scrollIntoView({ behavior: "smooth" });
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
          {/* <button onClick={this.checkPosition}>check position</button> */}
          <div ref={(el) => { this.messagesEnd = el; }}>
            </div>
        </div>
        )
    }
  
}