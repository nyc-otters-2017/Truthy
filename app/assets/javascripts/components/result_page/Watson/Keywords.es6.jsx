class Keywords extends React.Component {

  constructor() {
    super()
    this.state = {
      details: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault()
    let status = this.state.details
    this.setState({details: !status})
  }

  componentDidMount() {
    (function() {
      var frequency_list = [{"text":"study","size":40},{"text":"motion","size":15}]


          var color = d3.scale.linear()
                  .domain([0,1,2,3,4,5,6,10,15,20,100])
                  .range(["#ddd", "#ccc", "#bbb", "#aaa", "#999", "#888", "#777", "#666", "#555", "#444", "#333", "#222"]);

          d3.layout.cloud().size([800, 300])
                  .words(frequency_list)
                  .rotate(0)
                  .fontSize(function(d) { return d.size; })
                  .on("end", draw)
                  .start();

          function draw(words) {
              d3.select(".cloud").append("svg")
                      .attr("width", 850)
                      .attr("height", 350)
                      .attr("class", "wordcloud")
                      .append("g")
                      // without the transform, words words would get cutoff to the left and top, they would
                      // appear outside of the SVG area
                      .attr("transform", "translate(320,200)")
                      .selectAll("text")
                      .data(words)
                      .enter().append("text")
                      .style("font-size", function(d) { return d.size + "px"; })
                      .style("fill", function(d, i) { return color(i); })
                      .attr("transform", function(d) {
                          return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
                      })
                      .text(function(d) { return d.text; });
          }

    })()
  }

  render() {
    const yourDetailsAreShowing = this.state.details

    if (yourDetailsAreShowing) {
      var details = (
        <div>
          {
            this.props.keywords.map((keyword, i ) => {
              return (
                <Keyword key={i} data={keyword} />
              )
            })
          }
        </div>
      )
    }
    return (
      <div>
      
        <div className="scroll-change">
          <h2><a href="#" onClick={this.handleClick}>Keywords</a></h2>
          <h4>Determines important keywords in the text and ranks them by relevance.</h4>
          <div>
              <div className="legend">
                  Commonly used words are larger and slightly faded in color.  Less common words are smaller and darker.
              </div>
              <div className="cloud"></div>

          </div>

        </div>
          { details }
      </div>

    )
  }
}
