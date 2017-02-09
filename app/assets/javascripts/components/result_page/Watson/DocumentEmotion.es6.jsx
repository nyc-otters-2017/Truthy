class DocumentEmotion extends React.Component {
    componentDidMount(){
      (function() {
        var width = 0, widthScale, barHeight = 30, gutter = 15;

        var chart = d3.select(".chart");
        var entries = Object.entries(this.props.docEmotions)
        debugger
        // data converted from TSV to JS array
        var data = entries.map(emotion=>{
          return { name: emotion[0], value: (emotion[1] * 100).toFixed(2) }
        })

        console.log(data);

        // coerce to number
        data.forEach(function(d){
          d.value = +d.value;
        });

        var maxVal = d3.max(data, function(d) {
          return d.value;
        });

        // sort data
        data.sort(function(a, b){
          return Number(b.value) - Number(a.value);
        });

        var bar = chart.selectAll("div")
        .data(data)
        .enter().append("div")
        .attr('class', 'bar cf')
        .style("width", function(d) {
          return Number((d.value/maxVal) * 100) + '%';
        });

        bar.append("span")
          .attr("class", 'label')
          .text(function(d) {
          return d.value;
        });

        bar.append("span")
          .attr("class", 'name')
          .text(function(d) {
          return d.name;
        });

      }).bind(this)();
    }
  render() {
    return(
      <div>
        <h2 className="doc-emotion-header">Document Emotions</h2>
        <div className='chart'>

        </div>
        <h4 className="chart-info">Detects anger, disgust, fear, joy, and sadness in the content and returns a score that reflects the frequency of each emotion.</h4>

      </div>
    )
  }
}
