class App extends React.Component {

    state = {
        isActive: true,
    }

    handleClick = () => {
        this.setState(state => ({
            isActive: !state.isActive,
        }))
    }

    render() {
        return (
            <div>
                <SwitchButton active={this.state.isActive} click={this.handleClick}/>
                {this.state.isActive && <Clock/>}
            </div>
        )
    }
}

const SwitchButton = props => (
    <button onClick={props.click}>{props.active ? "Wyłącz" : "Włącz"}</button>
)

class Clock extends React.Component {

    interval = "";

    state = {
        time: this.getTime()
    }

    getTime() {
        const currentTime = new Date();
        return ({
            hours: currentTime.getHours(),
            minutes: currentTime.getMinutes(),
            seconds: currentTime.getSeconds(),
        })
    }

    setTime = () => {
        const time = this.getTime();
        this.setState({time});
    }

    componentDidMount() {
        this.interval = setInterval(this.setTime, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const {hours, minutes, seconds} = this.state.time;
        return (
            <div>
                {hours < 10 ? `0${hours}` : hours} : {minutes < 10 ? `0${minutes}` : minutes} : {seconds < 10 ? `0${seconds}` : seconds}
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));