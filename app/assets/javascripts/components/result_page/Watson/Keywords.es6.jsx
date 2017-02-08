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
      console.log("props", this.props.keywords)
      var diameter = 960,
          format = d3.format(",d"),
          color = d3.scaleOrdinal(d3.schemeCategory20c);

      var bubble = d3.pack()
          .size([diameter, diameter])
          .padding(1.5);

      var svg = d3.select("body").append("svg")
          .attr("width", diameter)
          .attr("height", diameter)
          .attr("class", "bubble");

      d3.json("flare.json", function(error, data) {
        if (error) throw error;

        var root = d3.hierarchy(classes(data))
            .sum(function(d) { return d.value; })
            .sort(function(a, b) { return b.value - a.value; });

        bubble(root);
        var node = svg.selectAll(".node")
            .data(root.children)
          .enter().append("g")
            .attr("class", "node")
            .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

        node.append("title")
            .text(function(d) { return d.data.className + ": " + format(d.value); });

        node.append("circle")
            .attr("r", function(d) { return d.r; })
            .style("fill", function(d) {
              return color(d.data.packageName);
            });

        node.append("text")
            .attr("dy", ".3em")
            .style("text-anchor", "middle")
            .text(function(d) { return d.data.className.substring(0, d.r / 3); });
      });

      // Returns a flattened hierarchy containing all leaf nodes under the root.
      function classes(root) {
        var classes = [];

        function recurse(name, node) {
          if (node.children) node.children.forEach(function(child) { recurse(node.name, child); });
          else classes.push({packageName: name, className: node.name, value: node.size});
        }

        recurse(null, root);
        return {children: classes};
      }

      d3.select(self.frameElement).style("height", diameter + "px");

    }.bind(this))()
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
        </div>
      </div>

    )
  }
}
