class Loop extends React.Component{
    render(){
        const {name, poppies} = this.props;
        return(
            <div>
                <h1>{name}</h1>
                <ul>{poppies.map(p => <li>{p}</li>)}</ul>
            </div>
        )
    }
}