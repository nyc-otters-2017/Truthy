class Quotes extends React.Component {

  render(){
    console.log(this.props)
    return(
      <section className="quotes">
        <h1>Quotes used in this Article:</h1>
          {
            this.props.data.map((quote, i)=>{
              return <blockquote className="scroll-change" key={i}>{quote}</blockquote>
            })
          }
      </section>
    )
  }
}
