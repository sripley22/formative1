import React , {Component} from 'react';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';

import Article from './Article';
import './App.css';


var keyCode = '43066d44f6a24dbc855114e96ddfbd6f';
var key = '?apiKey='+keyCode;

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      activeKey:'politics',
      businessArticles:[],
      sportsArticles:[],
      politicsArticles:[],

      searchInput:'',
      searchArticles:[],

    }
  }

  handleTabSelect = (key, e) => {
    this.setState({activeKey:key})
  }

  handleSearchSubmitClick = (e) => {
    e.preventDefault();
    this.setState({activeKey:'search'})
  }


  loadHeadlinesByCategory = (category) => {
    var articlesURL = 'https://newsapi.org/v2/top-headlines'+key+'&category='+category+'&country=gb';
    fetch(articlesURL)
      .then( res=>res.json())
      .then((data)=>{
        var articles = data.articles;
        if(category == 'business'){
          this.setState({businessArticles:articles})
        }
        if(category == 'politics'){
          this.setState({politicsArticles:articles})
        }
        if(category == 'sports'){
          this.setState({sportsArticles:articles})
        }
        if(category == 'entertainment'){
          this.setState({entertainmentArticles:articles})
        }
      })
  }
  componentDidMount(){
    this.loadHeadlinesByCategory('business');
    this.loadHeadlinesByCategory('politics');
    this.loadHeadlinesByCategory('sports');
    this.loadHeadlinesByCategory('sports');

  }
  render(){
      return (
        <div className="container">
          <Tab.Container activeKey={this.state.activeKey} onSelect={this.handleTabSelect}>
       
            <div className="row tab-top">
              
              <Nav variant="pills" className="col-7">
                <Nav.Item>
                  <Nav.Link eventKey="politics">Politics</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="business">Businsess</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="sports">Sports</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="entertainment">Entertainment</Nav.Link>
                </Nav.Item>
              </Nav>

              <form className="col-5">
                <div class="form-row align-items-center justify-content-end">
                  <div class="col-auto">
                    <input type="text" className="form-control mb-2 search-input" placeholder="Enter keywords"/>
                  </div>
                  
                  <div class="col-auto">
                    <button onClick={this.handleSearchSubmitClick} type="submit" className="btn btn-primary mb-2 search-submit">Search</button>
                  </div>
                </div>
              </form>
            </div>

            
            <Tab.Content>
              <Tab.Pane className="tab-pane" eventKey="politics">
                <h1>Politics</h1>

                  <div className="articles">

                  {
                    this.state.politicsArticles.map((article)=>{
                      var articleProps = {
                        ...article,
                        key:Math.random()
                      }

                      return (<Article {...articleProps} />)
                    })
                  }

                  </div>
              </Tab.Pane>

              <Tab.Pane className="tab-pane" eventKey="business">
                <h1>Business</h1>
                <div className="business">

                  {
                    this.state.businessArticles.map((article) =>{
                      var articleProps = {
                        ...article,
                        key:Math.random()
                      }
                      return (<Article {...articleProps} />)
                    })
                  }
                </div>

                 

           
              </Tab.Pane>

              <Tab.Pane className="tab-pane" eventKey="sports">
                <h1>Sports</h1>

                <div className="business">

                  {
                    this.state.sportsArticles.map((article) =>{
                      var articleProps = {
                        ...article,
                        key:Math.random()
                      }
                      return (<Article {...articleProps} />)
                    })
                  }
                </div>
              </Tab.Pane>

              <Tab.Pane className="tab-pane" eventKey="sports">
                <h1>Entertainment</h1>

                <div className="entertainment">

                  {
                    this.state.sportsArticles.map((article) =>{
                      var articleProps = {
                        ...article,
                        key:Math.random()
                      }
                      return (<Article {...articleProps} />)
                    })
                  }
                </div>
              </Tab.Pane>

              <Tab.Pane className="tab-pane" eventKey="search">
                <h1>Search Results</h1>

                <div className="article">
                  <h5>Apple is giving out a special iPhone that can lead to a $1 million reward</h5>
                  <p><span class="badge badge-primary">Phonearena.com</span></p>
                </div>
                
              </Tab.Pane>

            </Tab.Content>
          
          </Tab.Container>
        </div>
    );
  }
}

export default App;
