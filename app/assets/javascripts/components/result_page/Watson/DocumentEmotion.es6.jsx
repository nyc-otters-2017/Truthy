class DocumentEmotion extends React.Component {
    componentDidMount(){
      (function() {
        var width = 0, widthScale, barHeight = 30, gutter = 15;

        var chart = d3.select(".chart");

        // data converted from TSV to JS array
        var data = this.props.docEmotions.map(emotion=>{
          return { name: emotion.emotion, value: (emotion.score * 100).toFixed(2) }
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
        <h3>Document Emotions</h3>
        <div className='chart'>

        </div>
        <ul>
          {
            this.props.docEmotions.map((emotion, i) => {
              return(
                <li key={i}>{emotion.emotion}, {emotion.score*100 + "%"}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
