class Quotes extends React.Component {

  render(){
    return(
      <section className="">
        <h1 className="quotesPage_title" >Quotes used in this Article</h1>
        <div className="newspaper_bottom_small_line add_line_margin"></div>
        <div className="quotesPage_body">
          {
            this.props.data.map((quote, i)=>{
              return <blockquote className="scroll-change" key={i}>{quote}</blockquote>
            })
          }
        </div>
      </section>
    )
  }
}
