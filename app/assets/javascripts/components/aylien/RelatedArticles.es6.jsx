class RelatedArticle extends React.Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault()
    $.ajax ({
      type: 'POST',
      url: '/analyze',
      data: {urlString: this.props.article.link}
    }).done((r)=> {
      window.open('/results')
    })
  }

 render(){
   return(
     <div className='related-articles'>
       <div className='related-article-info'>
         <a href={this.props.article.link} onClick={this.handleClick}>
           <div className='related-article'>
           <h3 className="related-title">{this.props.article.title}</h3>
           <p className="related-author"><em>-{this.props.article.author}</em></p>
           <blockquote className="related-body" cite={"http://"+this.props.article.source}>
             {this.props.article.body}
           </blockquote>

           <br/>
         </div>
         </a>
       </div>
     </div>
   )
 }
}
