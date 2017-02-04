class Quote extends React.Component {
  render(){
    return(
      <section className="quotes">
        <h1>Quotes used in this Article:</h1>
          {
            this.props.quotes.map((quote, i)=>{
              return <blockquote key={i}>{quote}</blockquote>
            })
          }
      </section>
    )
  }
}
