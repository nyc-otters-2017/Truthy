class IndexController < ApplicationController

  def index
  end

  def analyze
    session[:url] = params[:urlString]
    redirect_to "/results"
  end

  def result
    @watson = {"text"=>
  "         There just aren't enough opportunities in a given year to marry puppies and football!       \n         Fortunately, we're at the precipice of Super Bowl 51, where the New England Patriots will face off against the Atlanta Falcons this Sunday — perfect timing for some precious pooches to weigh in on the game.       \n         RELATED: Meet the adorable special needs dogs who steal the show in this year's Puppy Bowl       \n         And so we present a segment from last night's \"Tonight Show\" with puppies predicting the winner of the Super Bowl!       \n         In the video, host Jimmy Fallon introduces the puppies to the audience, who are practically boiling over with desire to escape their clear-paneled enclosure. He explains the rules, \"no peeing or wandering\" before they are unleashed.       \n         It's all about which team's bowl gets the most puppy attention. After a quick scan Fallon announces the winner: the Atlanta Falcons!       \n         Clearly it will be a tight battle, since the Pats' dish was pretty well attended.       \n         But that wasn't the only pup prediction going on. Yowie the dog dropped by TODAY on Friday to offer up her thoughts on the Super Bowl winner!       \n         Yowie and owner Jeffrey Smee, who have made YouTube videos that accurately predicted every NFL playoff game this season, visited the studio to make her final big pick for football season by choosing a treat from a team-labeled bowl.       \n         And her prediction was ... also the Falcons! But then also the Patriots! Well, she is a dog and dogs love treats. (Smee noted in a previous test run she also picked the Falcons first.)       \n         Looks like it's a grand slam for Atlanta, though we'll have to wait until Sunday to get the actual results.       \n         RELATED: Little fans show adorable Super Bowl spirit from Atlanta hospital       \n         As we like to say, though, in puppy bowl moments everybody rules!       \n         Follow Randee Dawn on Twitter.       \n",
 "title"=>
  "Watch Jimmy Fallon's 'Tonight Show' pups predict the Super Bowl winner",
 "author"=>"Randee Dawn",
 "publicationDate"=>PublicationDateHelper.convert_date("20170204"),
 "docEmotions"=>
   [{"emotion"=>"anger", "score"=>"0.112369"},
   {"emotion"=>"disgust", "score"=>"0.175777"},
   {"emotion"=>"fear", "score"=>"0.147617"},
   {"emotion"=>"joy", "score"=>"0.53496"},
   {"emotion"=>"sadness", "score"=>"0.260595"}],
 "taxonomy"=>
  [{"label"=>"/sports/football", "score"=>"0.510555"},
   {"label"=>"/pets/dogs", "score"=>"0.475452"},
   {"confident"=>"no",
    "label"=>"/sports/hunting and shooting",
    "score"=>"0.302891"}],
 "sentiment"=>"positive",
 "subjectivity"=>"objective",
 "concepts"=>
  [{"text"=>"National Football League",
    "relevance"=>"0.951135",
    "website"=>"http://www.nfl.com",
    "dbpedia"=>"http://dbpedia.org/resource/National_Football_League",
    "freebase"=>"http://rdf.freebase.com/ns/m.059yj",
    "opencyc"=>"http://sw.opencyc.org/concept/Mx4rvVjw5ZwpEbGdrcN5Y29ycA",
    "yago"=>"http://yago-knowledge.org/resource/National_Football_League",
    "crunchbase"=>
     "http://www.crunchbase.com/company/national-football-league"}],
 "entities"=>
  [{"type"=>"FieldTerminology",
    "relevance"=>"0.885403",
    "count"=>"5",
    "text"=>"Super Bowl"}],
 "keywords"=>
  [{"relevance"=>"0.932929", "text"=>"Super Bowl"},
   {"relevance"=>"0.819755", "text"=>"Super Bowl winner"},
   {"relevance"=>"0.818567", "text"=>"puppy bowl"},
   {"relevance"=>"0.805022", "text"=>"puppy bowl moments"},
   {"relevance"=>"0.801545", "text"=>"adorable Super Bowl"},
   {"relevance"=>"0.751605", "text"=>"Atlanta Falcons"},
   {"relevance"=>"0.746163", "text"=>"New England Patriots"},
   {"relevance"=>"0.740753", "text"=>"adorable special needs"},
   {"relevance"=>"0.734186", "text"=>"owner Jeffrey Smee"},
   {"relevance"=>"0.729072", "text"=>"host Jimmy Fallon"},
   {"relevance"=>"0.721925", "text"=>"quick scan Fallon"},
   {"relevance"=>"0.706524", "text"=>"team-labeled bowl"},
   {"relevance"=>"0.696619", "text"=>"NFL playoff game"},
   {"relevance"=>"0.694629", "text"=>"final big pick"},
   {"relevance"=>"0.687355", "text"=>"previous test run"},
   {"relevance"=>"0.639355", "text"=>"precious pooches"},
   {"relevance"=>"0.627262", "text"=>"puppy attention"},
   {"relevance"=>"0.62511", "text"=>"pup prediction"},
   {"relevance"=>"0.623562", "text"=>"perfect timing"},
   {"relevance"=>"0.620258", "text"=>"clear-paneled enclosure"},
   {"relevance"=>"0.615867", "text"=>"Randee Dawn"},
   {"relevance"=>"0.61583", "text"=>"tight battle"},
   {"relevance"=>"0.609637", "text"=>"YouTube videos"},
   {"relevance"=>"0.605869", "text"=>"everybody rules"},
   {"relevance"=>"0.602801", "text"=>"football season"},
   {"relevance"=>"0.602368", "text"=>"grand slam"},
   {"relevance"=>"0.601466", "text"=>"Atlanta hospital"},
   {"relevance"=>"0.600551", "text"=>"actual results"}]}
    @blacklist = BlacklistHelper.check_domain(session[:url])
    @fullcontact = {"bio"=>"This company did not include a bio.",
 "website"=>"http://today.com",
 "name"=>"Today Show",
 "founded"=>nil,
 "onlineSince"=>"1998-04-07",
 "socialMedia"=>
  "[{\"typeId\":\"facebook\",\"typeName\":\"Facebook\",\"url\":\"https://www.facebook.com/today\"},{\"bio\":\"America's favorite morning show\",\"followers\":2950317,\"following\":8171,\"typeId\":\"twitter\",\"typeName\":\"Twitter\",\"url\":\"https://twitter.com/TODAYshow\",\"username\":\"TODAYshow\",\"id\":\"7744592\"},{\"bio\":\"words and music. associate lifestyle editor @todayshow @nbcnews.\",\"followers\":273,\"following\":1139,\"typeId\":\"twitter\",\"typeName\":\"Twitter\",\"url\":\"https://twitter.com/rebekahlowin\",\"username\":\"rebekahlowin\",\"id\":\"2861086083\"},{\"bio\":\"Today is a daily American morning television show that airs on NBC.\",\"typeId\":\"crunchbasecompany\",\"typeName\":\"CrunchBase\",\"url\":\"http://www.crunchbase.com/organization/today\",\"username\":\"today\"},{\"bio\":\"Tips and tidbits from America's favorite morning show. Visit anytime at TODAY.com.\",\"followers\":2079,\"following\":14,\"typeId\":\"pinterest\",\"typeName\":\"Pinterest\",\"url\":\"http://www.pinterest.com/todayshow/\",\"username\":\"todayshow\"},{\"typeId\":\"klout\",\"typeName\":\"Klout\",\"url\":\"http://klout.com/TODAYshow\",\"username\":\"TODAYshow\",\"id\":\"46161900947201452\"},{\"typeId\":\"klout\",\"typeName\":\"Klout\",\"url\":\"http://klout.com/rebekahlowin\",\"username\":\"rebekahlowin\",\"id\":\"198721357132438420\"},{\"typeId\":\"foursquare\",\"typeName\":\"Foursquare\",\"url\":\"https://foursquare.com/user/1223577\",\"id\":\"1223577\"},{\"bio\":\"Today Foods is a Restaurants company located in 2839 Nansen St Ste B1, Medford, Oregon, United States.\",\"typeId\":\"linkedincompany\",\"typeName\":\"LinkedIn\",\"url\":\"https://www.linkedin.com/company/today-foods\",\"username\":\"today-foods\",\"id\":\"4745610\"},{\"typeId\":\"instagram\",\"typeName\":\"Instagram\",\"url\":\"https://instagram.com/todayshow\"}]"}
  @quotes = QuotesHelper.extract_quotes(QuotesHelper::TEST)
  stage_aylien(@watson)
  @aylien = AylienHelper.aylien_call(@keyword, @entities)
    render :result
  end

  def quote
    @quotes = QuotesHelper.extract_quotes(QuotesHelper::TEST)
    render :quote
  end

  def aylien
    # when combined with other api, aylien should incorporate
    # @watson['keywords'] and @watson['entities']
    @aylien = AylienHelper.aylien_call()
    render :aylien
  end

  # def publication_date
  #   @publication_date = PublicationDateHelper.convert_date
  # end

  private

  def index_params
    params.require(:index).permit(:url)
  end

end
