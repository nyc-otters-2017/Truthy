class About extends React.Component {

  render() {
    return (
      <div>
        <h1>About Truthy</h1>
        <p>
          Thank you for using Truthy to learn more about your news sources,
          while also training our algorithm.
        </p>
        <p>
          Truthy works by collecting data about a news article from the url
          entered into the search bar. Our program will aggregate data from the internet and
          present information that can be used to determine whether or not the article is
          fake news (Truthy or Falsey).
        </p>
        <p>
          Because our machine learning model relies on accurate classification of news.
          Use resources like what we have provided for the news verification.
        </p>
        <p>
          Please do not teach our machine learning model about your own bias. Teach Truthy how to
          distinguish fabrication from fact.
        </p>
        <h1>Navigating Truthy</h1>
        <p>
          On the left you will see articles that our algorithm believes to be similar to the piece
          you are reading, which is based on keywords and concepts.
          These relevant articles are important because fake news
          is often completely unique in its content.
        </p>
        <p>
          Fake news often has little information about the company, or is listed as
          an advertising agency.
          Take note of social media presence, and how long the company has been around.
        </p>
        <p>
          Be aware of the emotional data in articles. While keywords and concepts can help guide you to article content,
          pay attention to the sentiment and objectivity. Blogs are often opinion, whereas a news source
          is often fact driven.
        </p>
      </div>
    )
  }
}
