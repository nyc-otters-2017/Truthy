class CreateMlEntries < ActiveRecord::Migration[5.0]
  def change
    create_table :ml_entries do |t|
      t.string :user_input, :null => false
      t.text :article_text, :null =>false

      t.timestamps
    end
  end
end
