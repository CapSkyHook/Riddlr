class BlogsController < ApplicationController
  def create
    @blog = current_user.blogs.new(blog_params)

    if @blog.save
      redirect_to "/##{blog_path(@blog)}"
    else
      render json: {message: "something went wrong"}
      # flash.now[:errors]
      # flash.now[:errors] = @user.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @blog = current_user.blogs.find(params[:id])
    @blog.try(:destroy)
    render json: {}
  end

  def index
    if params[:search_term]
      @blogs = Blog.where(title: params[:search_term])
    else
      @blogs = current_user.blogs
    end
    render json: @blogs
  end

  def show
    @blog = current_user.blogs.includes(:posts).find(params[:id])
     render :show
  end

  private
  def blog_params
    params.require(:blog).permit(:title)
  end
end
