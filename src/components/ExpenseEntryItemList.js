import React, { useState } from "react"
import "./ExpenseEntryItemList.css"

class ExpenseEntryItemList extends React.Component {
    constructor(props) {
        super(props)

        // Init state
        this.state = { 
            items: this.props.items 
        }

        // Bind all event log funcs
        this.log = this.log.bind(this)
        this.handleMouseEnter = this.handleMouseEnter.bind()
        this.handleMouseLeave = this.handleMouseLeave.bind()
        this.handleMouseOver  = this.handleMouseOver.bind()
    }

    log(item, index, e) { 
        console.log("------ Event is fired ------ ")
        console.log(e.target)
        console.log(item)
        console.log(index)
        console.log(this)
    }

    handleMouseEnter(e) {
        e.target.parentNode.classList.add("highlight")
    }

    handleMouseLeave(e) {
        e.target.parentNode.classList.remove("highlight")
    }

    handleMouseOver(e) {
        console.log("The mouse is at (" + e.clientX + ", " + e.clientY + ")")
    }

    handleDelete(itemID, e) {
        e.preventDefault()

        if ( this.props.onDelete != null ) {
            this.props.onDelete(itemID, e)
        }

        /*
        console.log(`------ Remove Item is Fired -----`)
        console.log(itemID)

        this.setState((state, props) => {
            const items = [];

            state.items.forEach((item, idx) => {
                if (item.id !== itemID) {
                    items.push(item)
                }
            })

            const newState = {
               items: items
            }

            return newState
        })
        */
    }

    getTotal() {
        let total = 0;
        for(var i = 0; i < this.state.items.length; i++) {
           total += this.state.items[i].amount
        }

        return total
    }

    static getDerivedStateFromProps(props, state) {
        console.log("ExpenseEntryItemList :: Initialize / Update :: getDerivedStateFromProps :: Before update")
        // return null

        let newState = {
           items: props.items
        }
        return newState
    }

    /*
    componentDidMount() {
        console.log("ExpenseEntryItemList :: Initialize :: componentDidMount :: Component mounted")
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("ExpenseEntryItemList :: Update :: shouldComponentUpdate invoked :: Before update")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("ExpenseEntryItemList :: Update :: getSnapshotBeforeUpdate :: Before update")
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("ExpenseEntryItemList :: Update :: componentDidUpdate :: Component updated")
    }

    componentWillUnmount() {
        console.log("ExpenseEntryItemList :: Remove :: componentWillUnmount :: Component unmounted")
    }
    */

    render() {
        const lists = this.state.items.map( (item) => 
           <tr key={item.id} onClick={this.log.bind(this, item, item.id)} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
              <td>{item.name}</td>
              <td>{item.amount}</td>
              <td>{new Date(item.spendDate).toDateString()}</td>
              <td>{item.category}</td>
              <td><a href="#" onClick={(e) => this.handleDelete(item.id, e)}>Remove</a></td>
           </tr>
        )

        return (
            <div>
                <div>{this.props.header}</div> 
                <table onMouseOver={this.handleMouseOver}>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Category</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lists}
                        <tr>
                            <td colSpan="1" style={{ textAlign: "right" }}>Total Amount</td>
                            <td colSpan="4" style={{ textAlign: "left" }}>
                                {this.getTotal()}
                            </td> 
                        </tr>
                    </tbody>
                </table>
                <div>{this.props.footer}</div> 
            </div>
        )
    }     
}

export default ExpenseEntryItemList