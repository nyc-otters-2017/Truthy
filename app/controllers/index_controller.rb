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
 "emotion"=>
   {"anger" => "0.112369",
   "disgust" => "0.175777",
   "fear" => "0.147617",
   "joy" => "0.53496",
   "sadness" => "0.260595"},
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
    @blacklist = BlacklistHelper.check_domain('http://www.crunchbase.com/company/national-football-league')
    @fullcontact = {"bio"=>"This company did not include a bio.",
 "website"=>"http://today.com",
 "name"=>"Today Show",
 "founded"=>nil,
 "onlineSince"=>"1998-04-07",
 "socialMedia"=>
  [{"typeId" => "facebook","typeName" => "Facebook","url" => "https://www.facebook.com/today"},
    {"bio" => "America's favorite morning show","followers" => 2950317,"following" => 8171,"typeId" => "twitter","typeName" => "Twitter","url" => "https://twitter.com/TODAYshow","username" => "TODAYshow", "id" => "7744592"},
    {"bio" => "words and music. associate lifestyle editor @todayshow @nbcnews.","followers" => 273,"following" => 1139,"typeId" => "twitter","typeName" => "Twitter","url" => "https://twitter.com/rebekahlowin","username" => "rebekahlowin","id" => "2861086083"},
    {"bio" => "Today is a daily American morning television show that airs on NBC.","typeId" => "crunchbasecompany","typeName" => "CrunchBase","url" => "http://www.crunchbase.com/organization/today","username" => "today"},
    {"bio" => "Tips and tidbits from America's favorite morning show. Visit anytime at TODAY.com.","followers" => 2079,"following" => 14,"typeId" => "pinterest","typeName" => "Pinterest","url" => "http://www.pinterest.com/todayshow/","username" => "todayshow"},
    {"typeId" => "klout","typeName" => "Klout","url" => "http://klout.com/TODAYshow","username" => "TODAYshow","id" => "46161900947201452"},
    {"typeId" => "klout","typeName" => "Klout","url" => "http://klout.com/rebekahlowin","username" => "rebekahlowin","id" => "198721357132438420"},
    {"typeId" => "foursquare","typeName" => "Foursquare","url" => "https://foursquare.com/user/1223577","id" => "1223577"},
    {"bio" => "Today Foods is a Restaurants company located in 2839 Nansen St Ste B1, Medford, Oregon, United States.","typeId" => "linkedincompany","typeName" => "LinkedIn","url" => "https://www.linkedin.com/company/today-foods","username" => "today-foods","id" => "4745610"},
    {"typeId" => "instagram","typeName" => "Instagram","url" => "https://instagram.com/todayshow"}
  ]}
  @quotes = QuotesHelper.extract_quotes(QuotesHelper::TEST)
  stage_aylien(@watson)
  # @aylien = AylienHelper.aylien_call(@keyword, @entities)
  @aylien = [{"author"=>"Chris Strauss", "link"=>"http://www.foxsports.com/nfl/story/patriots-de-chris-long-celebrates-super-bowl-win-with-his-dad-howie-long-020517?cmpid=feed:-sports-CQ-RSS-Feed", "title"=>"Patriots DE Chris Long celebrates Super Bowl win with his dad Howie Long", "body"=>"Howie Long has been to numerous Super Bowls – winning Super Bowl XVIII with the Raiders and broadcasting from many more in his role with the NFL on FOX. But this year’s game brought a unique experience...", "source"=>"F"}, {"author"=>"Brian Barrett", "link"=>"https://www.wired.com/2017/02/lady-gaga-halftime-show-drones/", "title"=>"All About Lady Gaga’s Super Bowl Halftime Show Drones", "body"=>"The best Super Bowl halftime shows leave indelible memories, be it a notorious wardrobe malfunction, that goofy Left Shark, or every last second of Beyoncé’s two appearances. It’s too soon to say wheth...", "source"=>"W"}, {"author"=>"Usa Today", "link"=>"http://rssfeeds.usatoday.com/~/267611104/0/usatodaycommoney-topstories~Mr-Clean-is-trolling-other-Super-Bowl-commercials/", "title"=>"Mr. Clean is trolling other Super Bowl commercials", "body"=>"18013\n                        \n                            6\n                        Share This Story!Let friends in your social network know what you are reading aboutMr. Clean is trolling other Super...", "source"=>"U"}, {"author"=>"Usa Today", "link"=>"http://rssfeeds.usatoday.com/~/267676120/0/usatodaycomsports-topstories~Hyundais-live-commercial-puts-deployed-soldiers-at-Super-Bowl-with-families/", "title"=>"Hyundai's 'live' commercial puts deployed soldiers at Super Bowl with families", "body"=>"USA TODAY\n    \n            12:00 a.m. ET Feb. 6, 2017\n        CLOSE\n    Hyundai's post-Super Bowl ad pays tribute to the troops and their families.\n    USA TODAY SportsHyundai's \"live\" Super Bowl ad ga...", "source"=>"U"}, {"author"=>"Usa Today", "link"=>"http://rssfeeds.usatoday.com/~/267631836/0/usatodaycomsports-topstories~Polarizing-Lumber-ad-on-immigration-spurs-debate-after-Super-Bowl/", "title"=>"Polarizing 84 Lumber ad on immigration spurs debate after Super Bowl", "body"=>"Sean Rossman and Nathan Bomey, USA TODAY\n    \n            Published 9:35 p.m. ET Feb. 5, 2017 | Updated 7 minutes agoCLOSE\n    84 Lumber's first Super Bowl ad tells the story of an immigrant family's j...", "source"=>"U"}, {"author"=>"Espn.com", "link"=>"http://www.espn.com/nfl/story/_/id/18628343/sports-world-reacts-new-england-patriots-remarkable-super-bowl-li-comeback", "title"=>"Sports world reacts to Patriots' remarkable Super Bowl LI comeback", "body"=>"The New England Patriots'  fifth Super Bowl title came in dramatic fashion as quarterback Tom Brady dug his team out of a 25-point deficit on Sunday night, a performance that earned the praise of other...", "source"=>"E"}, {"author"=>"Usatoday", "link"=>"http://rssfeeds.usatoday.com/~/267181538/0/usatodaycomsports-topstories~Every-QB-matchup-in-Super-Bowl-history-ranked/", "title"=>"Every QB matchup in Super Bowl history, ranked", "body"=>"Tom Brady and Matt Ryan promises to be an epic matchup. (Photo: Photo by Jim Rogash/Getty Images)We're about to watch one of the best Super Bowl quarterback match-ups ever. Statistically, it's actually...", "source"=>"U"}, {"author"=>"Sean Wagner-mcgough", "link"=>"http://www.cbssports.com/nfl/news/super-bowl-li-tom-bradys-reportedly-ill-mother-made-the-trip-to-houston/", "title"=>"Super Bowl LI: Tom Brady's reportedly ill mother made the trip to Houston", "body"=>"Earlier this week, Patriots Tom Brady mentioned that his mother, Galynn, hasn't been to a single game this entire season. According to CSN New England's Tom Curran, Galynn has been dealing with an illn...", "source"=>"S"}, {"author"=>"Usa Today Sports", "link"=>"http://rssfeeds.usatoday.com/~/266442550/0/usatodaycomsports-topstories~Super-Bowl-protesters-could-bring-union-of-antiTrump-sentiments/", "title"=>"Super Bowl 51 protesters could bring union of anti-Trump sentiments", "body"=>"CLOSE\n    USA TODAY Sports' Tom Pelissero recaps some key moments from NFL Commissioner Roger Goodell's state of the league speech.\n    USA TODAY SportsMelanie Villela, 30, of Houston paints posters sh...", "source"=>"U"}, {"author"=>"Cameron Brock", "link"=>"http://abcnews.go.com/Business/hyundai-reunited-troops-families-super-bowl-surprise/story?id=45290887", "title"=>"How Hyundai Reunited Troops With Families for Super Bowl Surprise", "body"=>"\"Good Morning America\" went behind-the-scenes for the making of Hyundai's emotional Super Bowl commercial this year. The automaker's ad virtually reunites U.S. troops overseas with their families who w...", "source"=>"A"}]
    render :result
  end

  # def result
  #   @watson = Analysis.watson_call(session[:url])
  #   @blacklist = BlacklistHelper.check_domain(session[:url])
  #   @fullcontact = BlacklistHelper.request(session[:url])
  #   @quotes = QuotesHelper.extract_quotes(@watson['text'])
  #   stage_aylien(@watson)
  #   @aylien = AylienHelper.aylien_call(@keyword, @entities)
  #   render :result
  # end

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

  def train
    ml_entry = MlEntry.create(
      user_input: params[:user_input], article_text: params[:article_text]
    )
  end

  def predict
    MlEntry.train
    votes = {
      'truthiness' => MlEntry.predict(params[:article_text]),
      'truthy' => MlEntry.where("user_input LIKE ? AND article_text LIKE ?", "truthy", "#{params[:article_text]}").count,
      'falsey' => MlEntry.where("user_input LIKE ? AND article_text LIKE ?", "falsey", "#{params[:article_text]}").count,
      'total' => MlEntry.where("article_text LIKE ?", "#{params[:article_text]}").count
    }
    render status: 200, json: votes.to_json
  end

  private

  def index_params
    params.require(:index).permit(:url)
  end

end
