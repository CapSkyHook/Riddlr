class Api::BlogsController < Api::ApiController
  def create
    @blog = current_user.blogs.new(blog_params)

    if @blog.save
      redirect_to "/##{blog_path(@blog)}"
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
    @blog = Blog.includes(:posts).find(params[:id])
    render :show
  end

  private
  def blog_params
    params.require(:blog).permit(:title, :owner_id)
  end
end
