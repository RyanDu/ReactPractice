function getMood(){
    const Mood = ['Happy','Angry','Sad'];
    return Mood[Math.floor(Math.random() * Mood.length)];
}
class Hello extends React.Component{
    render(){
        return (
            <div>
                <h1>I am {getMood()}</h1>
            </div>
        )
    }
}

ReactDOM.render(<Hello/>,document.getElementById("root"));