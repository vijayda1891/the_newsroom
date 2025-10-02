class Article < ApplicationRecord
    mount_uploaders :avatars, AvatarUploader
    has_rich_text :content
    paginates_per 10
end
