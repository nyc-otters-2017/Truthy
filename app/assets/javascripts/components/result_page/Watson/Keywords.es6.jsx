class Keywords extends React.Component {

  render() {
    return (
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
}
