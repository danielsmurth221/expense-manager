import React from "react"

class FormattedDate extends React.Component {
    constructor(props) {
        super(props)
    }

    format(val) {
        const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jun", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const parsed_date = new Date(Date.parse(val));
        const formatted_date = parsed_date.getFullYear() + 
            "-" + months[parsed_date.getMonth()] + 
            "-" + parsed_date.getDate()
        return formatted_date;
    }

    render() {
        return <span>{this.format(this.props.value)}</span>
    }
}

export default FormattedDate