class Keywords extends React.Component {
  constructor() {
    super()
    this.state = {
      details: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    (function(){
      var contentKeywords = this.props.keywords.map(keyword=>{
        return {name: keyword.text, size: (Math.pow(keyword.relevance, 8) * 100).toFixed(2) }
      });
      var root = {
       "name": "flare",
       "children": [
        {
         "name": "analytics",
         "children": [
          {
           "name": "cluster",
           "children": contentKeywords
          }
         ]
       },
       ]
      };

      var diameter = 700,
          format = d3.format(",d"),
          color = d3.scale.category20c();
      var bubble = d3.layout.pack()
          .sort(null)
          .size([diameter, diameter])
          .padding(1.5);
      var svg = d3.select("body").append("svg")
          .attr("viewBox","0 0 960 960")
          .attr("perserveAspectRatio","xMinYMid")
          .attr("width", diameter)
          .attr("height", diameter)
          .attr("class", "bubble");
      //d3.json("flare.json", function(error, root) {
      var node = svg.selectAll(".node")
          .data(bubble.nodes(classes(root))
          .filter(function(d) { return !d.children; }))
        .enter().append("g")
          .attr("class", "node")
          .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

      node.append("title")
          .text(function(d) { return d.className + ": " + format(d.value); });
      node.append("circle")
          .attr("r", function(d) { return d.r; })
          .style("fill", function(d) { return color(d.packageName); });
      node.append("text")
          .attr("dy", ".3em")
          .style("text-anchor", "middle")
          .text(function(d) { return d.className.substring(0, d.r / 3); });
      //});
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
      //d3.select(self.frameElement).style("height", diameter + "px");
      var chart = $(".bubble"),
          aspect = chart.width() / chart.height(),
          container = chart.parent();
      $(window).on("resize", function() {
          var targetWidth = container.width();
          chart.attr("width", targetWidth);
          chart.attr("height", Math.round(targetWidth / aspect));
      }).trigger("resize");
          }.bind(this))()
        }

  handleClick(event) {
    event.preventDefault()
    let status = this.state.details
    this.setState({details: !status})
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
          { details }
      </div>
    )
  }
}
