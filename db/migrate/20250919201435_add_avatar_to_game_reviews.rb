class AddAvatarToGameReviews < ActiveRecord::Migration[8.0]
  def change
    add_column :game_reviews, :avatar, :string
  end
end
