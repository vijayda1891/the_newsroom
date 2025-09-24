class GameReview < ApplicationRecord
    mount_uploader :avatar, AvatarUploader 
    paginates_per 5
end
