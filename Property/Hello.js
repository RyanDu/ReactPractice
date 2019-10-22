class Hello extends React.Component{
    static defaultProps = {
        to: "Alice",
        from: "Ryan"
    }
    render(){
        const props = this.props;
        return(
            <h1>Hi from {props.from} to {props.to}</h1>
        )
    }
}