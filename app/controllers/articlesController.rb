class ArticlesController < ApplicationController

  def index
    render(
        status: 200,
        json: Article.all
      )
  end

  def create
    article = Article.new(article_params)
    article.save ? (render json: article) : (render json: {message: article.errors}, status: 400)
  end

  private
    def article_params
      params.require(:article).permit(:title, :url, :description, :author)
    end

end
