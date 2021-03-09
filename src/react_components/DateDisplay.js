function monthNumToMonth(monthNum) {
    switch(monthNum) {
        case 0:
            return "January"
        case 1:
            return "February"
        case 2:
            return "March"
        case 3:
            return "April"
        case 4:
            return "May"
        case 5:
            return "June"
        case 6:
            return "July"
        case 7:
            return "August"
        case 8:
            return "September"
        case 9:
            return "October"
        case 10:
            return "November"
        case 11:
            return "December"
    }
}

function dayWithEnding(dayNum) {
    if (dayNum % 10 === 1) 
        return dayNum.toString() + "st"
    else if (dayNum % 10 === 2)
        return dayNum.toString() + "nd"
    else if (dayNum % 10 === 3)
        return dayNum.toString() + "rd"
    else
        return dayNum.toString() + "th"
}

function formatMinutes(minuteNum) {
    if (minuteNum < 10)
        return "0" + minuteNum
    else
        return minuteNum
} 

class DateDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className="dateText">
            <span>{monthNumToMonth(this.props.date.getMonth()) + ", " + dayWithEnding(this.props.date.getDay())}</span>
            <br/>
            <span>{this.props.date.getHours()}:{formatMinutes(this.props.date.getMinutes())}</span>
            </div>
        )
    }
}

export default DateDisplay