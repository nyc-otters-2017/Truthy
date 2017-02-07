class MlEntry < ApplicationRecord

  def self.train
    @@ml_model = ClassifierReborn::Bayes.new('truthy', 'falsey')
    MlEntry.all.each do |entry|
      @@ml_model.train(
        entry.user_input,
        entry.article_text.gsub(/[^a-zA-Z0-9 ]/, ''))
    end
    @@ml_model
  end

  def self.predict(input_text)
    @@ml_model.classify(input_text)
  end
end
