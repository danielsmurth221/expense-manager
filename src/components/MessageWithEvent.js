import React from "react"

class MessageWithEvent extends React.Component {
    constructor(props) {
        super(props)
        this.logEventToConsole = this.logEventToConsole.bind()
    }

    logEventToConsole(msgID, e) { 
        console.log('--- Event is Fired! ---')
        console.log(e.target.innerHTML)
        console.log(msgID)
    }
    
    render() {
        return (
            <div onClick={this.logEventToConsole.bind(this, Math.floor(Math.random() * 10))}>
               <p>Hello {this.props.name}!</p>
            </div>
        )
    }
}

export default MessageWithEvent