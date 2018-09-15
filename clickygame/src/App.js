import React, { Component } from 'react';
import Header from "./components/Header";
import PersonSquare from "./components/PersonSquare";
import Wrapper from "./components/Wrapper";
import cast from "./cast.json";

class App extends Component {
    constructor(props) {
    super(props)
    this.state = {
      cast,
      score:0,
      clickedName: '',
      allClicked: []
    };
}
    addScore = () => {
        const score = this.state.score
        if (score < 9){
        this.setState({score : score+1})
        console.log(score);
        }else {
            alert('you win!')
        }
    }
    getClicked = (name) => {
        console.log(name)
        this.setState({clickedName:name});
        const allClicked = this.state.allClicked;
        this.setState({allClicked: [...allClicked, name]});
        console.log([...this.state.allClicked, name])
        this.shuffle(this.state.cast)
    }

    shuffle = (a) => {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        // return a;
        this.setState({cast:a})

    }

    render() {
        return (
            <div>
            <Header name= {this.state.clickedName} score={this.state.score} />
            <Wrapper >
            {this.state.cast.map(cast => (
                    <PersonSquare
                    id={cast.id}
                    key={cast.id}
                    name={cast.name}
                    image={cast.image}
                    clicked={cast.clicked}
                    addScore={this.addScore}
                    getClicked={this.getClicked}
                    
          />))}
            </Wrapper>
            </div>
        );
    }
}


export default App;