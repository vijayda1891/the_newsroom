class AddAvatarsToArticles < ActiveRecord::Migration[8.0]
  def change
    add_column :articles, :avatars, :json
  end
end
