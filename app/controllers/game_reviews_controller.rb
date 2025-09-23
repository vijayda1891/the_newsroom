class GameReviewsController < ApplicationController
    before_action :authenticate_user!

    def index
        @game_reviews = GameReview.all
    end

    def new
        @game_review = GameReview.new
    end

    def create
        @game_review = GameReview.new(game_review_params)
        if @game_review.save
            redirect_to game_reviews_path, notice: "Review saved successfully"
        else
            render :new, status: :unprocessable_entity
        end
    end

    private 

    def game_review_params
        params.require(:game_review).permit!
    end
end
