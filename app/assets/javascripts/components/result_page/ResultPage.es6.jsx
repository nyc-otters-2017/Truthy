class ResultPage extends React.Component {
 constructor(props) {
   super(props)
   this.state = { main: true }

   this.handleClick = this.handleClick.bind(this);
 }

 handleClick(event){
   this.state.main = this.props.fullContact
 }




 render() {

   return(
     <div className='result-container'>
       <main>
         {this.state.main}
       </main>

     </div>
   )
 }
}
