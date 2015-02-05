class PostsController < ApplicationController
    def create
      @post = current_blog.posts.new(post_params)
      @post.user_id = current_blog.owner_id

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

    # def update
    #   @post = current_board.posts.find(params[:id])
    #
    #   if @post.update_attributes(post_params)
    #     render json: @post
    #   else
    #     render json: @post.errors.full_messages, status: :unprocessable_entity
    #   end
    # end

    private

    def current_blog
      if params[:id]
        @post = Post.find(params[:id])
        @blog = @post.board
      elsif params[:post]
        @blog = Blog.find(params[:post][:blog_id])
      end
    end

    def post_params
      params.require(:post).permit(:title, :board_id, :body, :user_id, :content_type, :filepicker_url)
    end

end
