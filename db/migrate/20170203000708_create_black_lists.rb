class CreateBlackLists < ActiveRecord::Migration[5.0]
  def change
    create_table :black_lists do |t|
      t.string :url,    null: false, default: ""
      t.string :reason,   null: false, default: ""

      t.timestamps
    end
  end
end
