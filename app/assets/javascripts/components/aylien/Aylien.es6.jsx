class Aylien extends React.Component {
 constructor() {
   super()
 }

 render(){
   return(
     <section className='aylien'>
       <div>
         <h2>Related Articles</h2>
         {
           this.props.aylien.map((article, i)=>{
           return (
             <RelatedArticle article={article} key={i} />
           )
         })
         }
       </div>
     </section>
   )
 }
}
