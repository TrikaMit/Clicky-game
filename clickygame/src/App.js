import React, { Component } from 'react';
import Header from "./components/Header";
import PersonSquare from "./components/PersonSquare";
import Wrapper from "./components/Wrapper";
import cast from "./cast.json";

class App extends Component {
    state = {
      cast
    };

    render() {
        return (
            <div>
            <Header />
            <Wrapper >
                {this.state.cast.map(cast => (
                    <PersonSquare
                    id={cast.id}
                    key={cast.id}
                    name={cast.name}
                    image={cast.image}
                    clicked={cast.clicked}
                    />
                ))}
            </Wrapper>
            </div>
        );
    }
}


export default App;