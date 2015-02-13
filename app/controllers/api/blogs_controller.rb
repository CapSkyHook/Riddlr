class Api::BlogsController < Api::ApiController
  def create
    @blog = current_user.blogs.new(blog_params)

    if @blog.save
      render json: @blog # "/#/" + "#{api_blog_path(@blog)}"[5..-1]
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
    if params[:search_term]
      @blogs = Blog.search(params[:search_term])
      render :index
    else
      @blogs = current_user.blogs.uniq
      render json: @blogs
    end

  end

  def show
    @blog = Blog.includes(:posts).find(params[:id])
     render :show
  end

  private
  def blog_params
    params.require(:blog).permit(:title, :owner_id, :profile_image)
  end
end
