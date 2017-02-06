class DocumentEmotion extends React.Component {
  render() {
    return(
      <div>
        <h3>Document Emotions</h3>
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
