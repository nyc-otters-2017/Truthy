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
            <ReactCSSTransitionGroup
              transitionName="related"
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={600}
              key={i}>
              <div className='related-article' >
                <div className='related-article-info'>
                  <a href={article.link} >
                    <img className='related-article' src={article.media}/>
                    <br/>
                    <span>{article.title}</span>
                  </a>
                </div>
              </div>
            </ReactCSSTransitionGroup>
          )
        })
      )
    }


    return(
      <div>
        <a href="#" onClick={this.handleClick}><h1>Related Articles</h1></a>
          { articles }
      </div>
    )
  }
}
