class Quote extends React.Component {
  render(){
    return(
      <section className="quotes">
        <h1>Quotes used in this Article:</h1>
        <ul>
          {
            this.props.quotes.map((quote, i)=>{
              return <li key={i}>"{quote}"</li>
            })
          }
        </ul>
      </section>
    )
  }
}
