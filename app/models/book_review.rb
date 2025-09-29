class BookReview < ApplicationRecord
    mount_uploader :avatar, AvatarUploader 
    paginates_per 10
end
