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
          <div className='related-article' key={i}>
            <a href={article.link}>{article.title}</a>
            <p>source: {article.source}</p>
          </div>
        )
      })}
    </div>
    )
  }
}
