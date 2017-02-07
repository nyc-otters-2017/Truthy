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
              <div className='related-articles' >
                <div className='related-article-info'>
                  <a href={article.link} >
                    <div className='related-article'>
                    <h3 className="related-title">{article.title}</h3>
                    <p>-{article.author}</p>
                    <blockquote cite={"http://"+article.source}>
                      {article.body}
                    </blockquote>

                    <br/>
                  </div>
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
        <a href="#" onClick={this.handleClick}><h2>Related Articles</h2></a>
          { articles }
      </div>
    )
  }
}
