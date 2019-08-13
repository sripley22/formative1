import React , {Component} from 'react';

class Business extends Component {
  constructor(props) {
    super(props);

  }
  render(){
      return (
        <div className="business">
          <h5>{this.props.title}</h5>
          <p><img src={this.props.urlToImage} /></p>
          <p>{this.props.description}</p>
          
        </div>
    );
  }
}

export default Business;
