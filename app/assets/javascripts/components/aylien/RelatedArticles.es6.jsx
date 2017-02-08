class RelatedArticles extends React.Component {

 render(){
   return(
     <div>
       <h2>Related Articles</h2>
       {
         this.props.articles.map((article, i)=>{
         return (
             <div className='related-articles' key={i}>
               <div className='related-article-info'>
                 <a href={article.link} >
                   <div className='related-article'>
                   <h3 className="related-title">{article.title}</h3>
                   <p className="related-author"><em>-{article.author}</em></p>
                   <blockquote className="related-body" cite={"http://"+article.source}>
                     {article.body}
                   </blockquote>

                   <br/>
                 </div>
                 </a>
               </div>
             </div>
         )
       })
       }
     </div>
   )
 }
}
