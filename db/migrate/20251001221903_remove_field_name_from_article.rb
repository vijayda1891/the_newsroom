class RemoveFieldNameFromArticle < ActiveRecord::Migration[8.0]
  def change
    remove_column :articles, :avatar, :string
  end
end
