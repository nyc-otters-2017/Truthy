class ResultPage extends React.Component {
 constructor(props) {

   super(props)
   this.state = {
     main: <Body data={this.props.watson} publicationDate={this.props.publicationDate} /> ,
     truthiness: '',
     trained: false,
     predicted: false
   }
   this.predictTruthiness = this.predictTruthiness.bind(this)
   this.newRender = this.newRender.bind(this)
   this.trainModel = this.trainModel.bind(this)
   this.trainerButtons = this.trainerButtons.bind(this)
   this.predictButton = this.predictButton.bind(this)

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

  predictTruthiness(){
    $.ajax({
      url: '/predict',
      method: 'POST',
      data: { article_text: this.props.watson.text }
    })
     .done(response=>{
       console.log(response)
       let { truthiness, truthy, falsey, total } = response
       let message = this.predictionMessage(truthiness, truthy, falsey)
       this.setState({truthiness: message, predicted: true})
     })
  }

  predictionMessage(machine, userTrue, userFalse){
    return(
      <p className="returnMessage">Machine Prediction: <strong>{machine}</strong>
      <br/>
      <strong>{userTrue}</strong> users found this article truthy
      | <strong>{userFalse}</strong> users found this article falsey
      </p>
    )
  }

  trainModel(event){
    $.ajax({
      url: '/train',
      method: 'POST',
      data: {
        user_input: event.target.value,
        article_text: this.props.watson.text
      }
    })
     .done(response=>{
     })
    this.setState({trained: true})
  }

  newRender(newMain) {
   this.setState({main: newMain })
  }

  trainerButtons(){
    return (
      <div>
        <span>Did you find this article to be Truthy or Falsey?</span>
        <button onClick={this.trainModel} type="submit" value="truthy">Truthy</button>
        <button onClick={this.trainModel} type="submit" value="falsey">Falsey</button>
      </div>
    )
  }

  predictButton(){
    return <button onClick={this.predictTruthiness}>Predict Truthiness</button>
  }

  render() {
    return(
      <div className=''>

        <div className="header">
          <div className="right-header">
            <Clock />
          </div>
          <div className="logo-title">
            <img className="header_logo" src="/assets/148653868433366.png" alt="Logo"/>
            <h1 className="header_title"><a href="/">TRUTHY</a></h1>
          </div>
          <div className="about-button ">
            <AboutButton onNewRender={this.newRender}/>
          </div>
        </div>
        <div className="blacklist-tag">
          <div>
          { this.state.predicted ? this.state.truthiness : this.predictButton() }
          <p>{this.props.blackList}</p>
          </div>
        </div>

        <div className='container-fluid'>
          <div className="row">

            <div className ="col-md-2 nopadding_right aylien-parent">
              <Aylien aylien={this.props.aylien} />
            </div>


            <div className="col-md-8">
              <main>
                <Main display={this.state.main}/>
                <div className="sub-header">
                  { this.state.trained ? <span>Thank You!</span> : this.trainerButtons() }
                </div>
              </main>
            </div>


            <div className="col-md-2 right_column_top_margin">
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
        </div>
      </div>
    )
  }
}
