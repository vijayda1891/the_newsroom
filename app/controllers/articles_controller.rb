class ArticlesController < ApplicationController
    before_action :authenticate_user!
    set_tab :articles

    set_tab :index, :navigation, :only => %w(index)

    def index
        @articles = Article.all.page(params[:page])
        @latest_articles = Article.order(created_at: :desc).limit(5)
    end

    def culture
    end

    def sports
    end

    def new
        @article = Article.new
    end

    def edit
        @article = Article.find(params[:id])
    end

    def show 
        @article = Article.find(params[:id])
    end

    def create
        @article = Article.new(article_params)
        if @article.save
            redirect_to articles_path, notice: "Article saved successfully"
        else
            render :new, status: :unprocessable_entity
        end
    end

    def update
        @article = Article.find(params[:id])
        if @article.update(article_params)
            redirect_to article_path(@article), notice: "Article updated successfully"
        else
            render :edit, status: :unprocessable_entity
        end
    end

    private

    def article_params
        params.require(:article).permit(:title, :author, :content, :short_description, :tag, :published, avatars: [])
    end
end
