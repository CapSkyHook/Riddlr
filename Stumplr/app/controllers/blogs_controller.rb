class BlogsController < ApplicationController
  def create
    @blog = current_user.blog.new(blog_params)

    if @blog.save
      render json: @blog
    else
      render json: @blog.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @blog = current_user.blogs.find(params[:id])
    @blog.try(:destroy)
    render json: {}
  end

  def index
    @blogs = current_user.boards
    render json: @blogs
  end

  def show
    @blog = current_user.blogs.find(params[:id])
    render json: @blogs
  end

  private
  def blog_params
    params.require(:blog).permit(:title)
  end
end
