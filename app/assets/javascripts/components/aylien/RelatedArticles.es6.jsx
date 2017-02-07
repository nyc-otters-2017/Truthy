class RelatedArticles extends React.Component {

  constructor() {
    super()
    this.state = {
      revealed: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault()
    let status = this.state.revealed
    this.setState({revealed: !status})
  }


  render(){
    const yourArticlesAreShowing = this.state.revealed
    var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup

    if (yourArticlesAreShowing) {
      var articles = (
          this.props.articles.map((article, i)=>{
          return (
            <a href={article.link} key={i}>
              <div className='related-article' >
              <img className='related-article' src={article.media}/>
              <br/>
              <span>{article.title}</span>
            </div>
            </a>
          )
        })
      )
    }


    return(
      <div>
        <a href="#" onClick={this.handleClick}>Related articles</a>
        <ReactCSSTransitionGroup
          transitionName="related"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          { articles }
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}
