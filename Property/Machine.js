class Machine extends React.Component{
    render(){
        const {s1,s2,s3} = this.props;
        const winner = (s1 == s2)&&(s2==s3);
        const color = {fontSize:"50px", backgroundColor:"purple" }
        return(
            <div style={color}>
                <p>{s1} {s2} {s3}</p>
                <p>{winner ? "Winner!!!" : "Loser~~~"}</p>
            </div>
        )
    }
}