class PostsController < ApplicationController

    def index
      #if no query string
      @posts = Post.where(blog_id: current_user.subscribed_blog_ids).order(:created_at)
      #else
      render :index
    end

    def create
      @post = current_blog.posts.new(post_params)
      @post.user_id = current_blog.owner_id
      @post.blog_picture_url = current_blog.profile_image if current_blog.profile_image

      if @post.save
        render json: @post
      else
        render json: @post.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @post = Post.find(params[:id])
      @post.destroy
      render json: {}
    end

    def show
      @post = Post.find(params[:id])
      render json: @post
    end

    def update
      @post = current_blog.posts.find(params[:id])

      if @post.update_attributes(post_params)
        render json: @post
      else
        render json: @post.errors.full_messages, status: :unprocessable_entity
      end
    end

    private

    def current_blog
      if params[:id]
        @post = Post.find(params[:id])
        @blog = @post.blog
      elsif params[:post]
        @blog = Blog.find(params[:post][:blog_id])
      end
    end

    def post_params
      params.require(:post).permit(:title, :blog_id, :body, :user_id, :content_type, :filepicker_url, :blog_picture_url)
    end

end
