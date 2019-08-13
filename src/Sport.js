import React , {Component} from 'react';

class Sport extends Component {
  constructor(props) {
    super(props);

  }
  render(){
      return (
    
      <div className="sport">
        <h5>{this.props.title}</h5>
          <p><img src={this.props.urlToImage} /></p>
          <p>{this.props.description}</p>
      </div>
          
    );
  }
}

export default Sport;
