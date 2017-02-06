class RelatedArticles extends React.Component {
  constructor() {
    super()
  }

  render(){
    console.log(this.props.articles)
    return(
      <div>
      {this.props.articles.map((article, i)=>{
        return (
          <a href={article.link}>
          <div className='related-article' key={i}>
            <img className='related-article' src={article.media}/>
            <br/>
            <span>{article.title}</span>
          </div>
          </a>
        )
      })}
    </div>
    )
  }
}
