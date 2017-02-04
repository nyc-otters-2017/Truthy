class ResultPage extends React.Component {

 constructor() {
   super()
 }

 render() {
   return(
     <div className='result-container'>
       <BlackList fullContact={this.props.fullContact} />
       <ArticleStatus blackList={this.props.blackList} />
       <Watson data={this.props.watson} />
     </div>
   )
 }
}
