class UrlController < ApplicationController
  protect_from_forgery
  before_action :find_url, only: [:update, :show]

  def index
    url = Url.order(updated_at: :desc )
    render status: :ok, json: { url: url }
  end

  def create
    url = Url.new(url_params)
    url.generate_slug
    if url.save
      render status: :ok, json: { notice: "Url shortened!" }
    else
      render status: :unprocessable_entity, json: { error: url.errors.full_messages }
    end
  end

  def update
    if @url.update(url_params)
      render :ok, json: { url: @url }
    else
      render status: :unprocessable_entity, json: { error: @url.errors.full_messages }
    end
  end

  def show
    update_count
    render :ok, json: { url: @url }
  end

  private
  
    def url_params
      params.require(:url).permit(:url, :pinned)
    end

    def find_url
      @url = Url.find(params[:id])
    end

    def update_count
      @url.increment!(:count)
    end
end
