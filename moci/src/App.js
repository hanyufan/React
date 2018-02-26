import React, { Component } from 'react'; // 固定写法，引入必要的组件

import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      films: []
    }

  }
  componentDidMount() {
    axios.get("/v4/api/film/now-playing?__t=1517826362619&page=1&count=5")
    .then((res)=>{
      console.log(res);
      this.setState({
        films: res.data.data.films
      });
    })
  }
  render() {
    return (
      <div>
        {
          this.state.films.map(function(item, index){
            return (
              <div key="index">
                <h3>{item.name}</h3>
                <img src={item.cover.origin} />
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default App;
