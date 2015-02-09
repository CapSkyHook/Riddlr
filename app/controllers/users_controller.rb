class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      sign_in!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end


####using the journal app as a demo, create the underlying structure. this will take care of the auth, and creating basic blogs. all the blogs need to be is a title and an image. so if i can create the index like we did for the new reader app that is a good start so that they link to their own show page.
