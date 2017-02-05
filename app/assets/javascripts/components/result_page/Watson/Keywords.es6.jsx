class Keywords extends React.Component {

  render() {
    return (
      <div>
        <h3>Keywords</h3>
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
}
