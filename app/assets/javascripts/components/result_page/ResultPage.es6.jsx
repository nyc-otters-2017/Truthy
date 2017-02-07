class ResultPage extends React.Component {
 constructor(props) {

   super(props)
   this.state = {
     main: <Body data={this.props.watson} />
   }
    this.newRender = this.newRender.bind(this)
  }

  componentDidMount() {
    $(window).scroll(function() {

  // get the variable of how far we've scrolled from the top
  var offset = $(window).scrollTop();
    offset     = offset * 10;

  // add css transform with the offset variable
  $('.material-icons.orange600').css({
    '-moz-transform': 'rotate(' + offset + 'deg)',
    '-webkit-transform': 'rotate(' + offset + 'deg)',
    '-o-transform': 'rotate(' + offset + 'deg)',
    '-ms-transform': 'rotate(' + offset + 'deg)',
    'transform': 'rotate(' + offset + 'deg)',
  });

});
  }

  newRender(newMain) {
   this.setState({main: newMain })
  }

  render() {
    return(
      <div className='result-container'>

        <div className ="col-md-2">
          <Aylien aylien={this.props.aylien} />
        </div>


        <div className="col-md-8
          ">
          <main>
            <Main display={this.state.main}/>
          </main>
        </div>


        <div className ="col-md-2">
          <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

            <SideBox
              onNewRender={this.newRender}
              fullContact={this.props.fullContact}
              watson={this.props.watson}
              quotes={this.props.quotes}
              />
          </div>
        </div>

      </div>
    )
  }
}
