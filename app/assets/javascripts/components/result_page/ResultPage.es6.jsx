class ResultPage extends React.Component {
 constructor(props) {
   super(props)
   this.state = { main: '' }
   this.showContent = this.showContent.bind(this);
   this.handleClick = this.handleClick.bind(this);

 }

 handleClick(event){
   event.preventDefault()
   this.setState({main: this.props.fullContact })

 }

 showContent(theComponent){
   this.setState({main: <BlackList fullContact={this.props.fullContact} />})

 }

 componentDidMount(){
   this.setState({main: <Watson data={this.props.watson}/>})
 }


 render() {
   let blackListComp = <BlackList fullContact={this.props.fullContact} />
   let flagStatus = <ArticleStatus blackList={this.props.blackList} />
   let watsonArticle = <Watson data={this.props.watson} />
   return(
     <div className='result-container'>
       <main>
         {this.state.main}
       </main>
       {/* <button key={blackListComp} onClick={
         this.handleClick}>BlackList
       </button> */}
       <button key={flagStatus} onClick={
         this.handleClick}>FlagStatus
       </button>
       <button key={watsonArticle} onClick={
          this.handleClick}>watsonArticle
       </button>

     </div>
   )
 }
}
