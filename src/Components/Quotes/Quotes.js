import React, { Component } from 'react';

class Quotes extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          quote: 1
        };
    
        this.quotes = {
          arr: [
            "You make mistakes, but I don't have any regrets. I'm the kind of person who takes responsibility for it and deals with it. I learn from everything I do. I work very hard, I have so many things going on in my life. Get to know me and see who I am.",
            "We have a responsibility to help those around us and help others in need.",
            "Voting is our right, but it is also our responsibility because if we don't take the next step and elect leaders who are committed to building a better future for our kids, other rights - our rights to clean air, clean water, health, and prosperity - are placed directly in harm's way.",
            "Governments that block the aspirations of their people, that steal or are corrupt, that oppress and torture or that deny freedom of expression and human rights should bear in mind that they will find it increasingly hard to escape the judgement of their own people, or where warranted, the reach of international law."
          ]
        };
      }
    
      componentDidMount() {
    
        setInterval(() => {
          const quoteIndex = Math.floor(Math.random()*this.quotes.arr.length);
          this.setState({quote: quoteIndex})
        }, 10000);
      }

    render() {
        return(
            <p> {this.quotes.arr[this.state.quote]} </p>
        );
    }

}
export default Quotes;