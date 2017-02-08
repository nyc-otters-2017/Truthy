class Quotes extends React.Component {

  render(){
    console.log(this.props)
    return(
      <section className="quotes">
        <h1 className="" >Quotes used in this Article:</h1>
        <div className="newspaper_bottom_small_line add_line_margin"></div>
          {
            this.props.data.map((quote, i)=>{
              return <blockquote className="scroll-change" key={i}>{quote}</blockquote>
            })
          }
      </section>
    )
  }
}
