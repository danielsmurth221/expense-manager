import React from "react"
import FormattedMoney from "./FormattedMoney"
import FormattedDate from "./FormattedDate"
import './ExpenseEntryItem.css'
import styles from './ExpenseEntryItem.module.css'

class ExpenseEntryItem extends React.Component {
    itemStyle = {
        color: 'brown', 
        fontSize: '14px' 
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={styles.itemStyle}>
                <div><b>Item:</b> <em>{this.props.item.name}</em></div>
                <div><b>Amount:</b> 
                    <em>
                        <FormattedMoney value={this.props.item.amount}/>
                    </em>
                </div>
                <div><b>Spend Date:</b> 
                    <em>
                        <FormattedDate value={this.props.item.spendDate} />
                    </em>
                </div>
                <div><b>Category:</b> <em>{this.props.item.category}</em></div>
            </div>
        )   
    }
}

export default ExpenseEntryItem