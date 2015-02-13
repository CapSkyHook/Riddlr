# Stumplr

[Heroku link][heroku]

[heroku]: http://stumplr.herokuapp.com

## Minimum Viable Product
Stumplr is a tumblr clone where peole can post tricky riddles for others to solve. Users can:

- [x] Sign Up
- [x] Sign In
- [x] Create blogs
- [x] Create blog posts
- [x] View blogs and posts
- [x] Tag blog posts
- [x] Subscribe to blogs
- [x] View a feed of subscribed blogs
- [x] Search for posts by title
- [x] Search for posts by tag
- [x] Search for posts by content

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Authentication, Basic Blogs and Posts (~2 days)
I will implement user authentication in Rails.
By the end of this phase, users will be able to create blogs and
posts using simple text forms in Backbone views. Everything will be pushed
to Heroku but the end of the first day.

[Details][phase-one]

### Phase 2: Viewing and Editing Posts (~2 days)
I plan to allow people to post pictures using the third party API filepicker. There will
also be forms to allow users to update and view individual posts. There will be an edit form
view and an individual post show view.

[Details][phase-two]

### Phase 3: Subscribed Blogs Feed (~2 days)
There will be a view that displays a user's subscribe blogs' posts. This will also be
the view that shown upon log in by the user. The posts will be organized by date.

[Details][phase-three]

### Phase 4: Search Functionality(~1-2 days)
There will be a search box and a list of selectors for tags, content and title and users will be able to search using query terms through their posts and the their subscribed blogs' posts. Search view will display posts chronologically.

[Details][phase-four]

### Bonus Features (TBD)
- [ ] Activity history for posts (e.g. likes, reblogs, taggings)
- [x] Custom urls for blogs
- [x] 'Like' button and counter for `PostShow` view
- [x] Pagination of the `FeedShow`, `SearchShow`, and `BlogShow` views
- [ ] Post types with distinct views (image posts, quote posts, etc)
- [ ] Can make posts via email
- [ ] Can make posts via text message
- [ ] Support for multiple open sessions
- [x] User avatars

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
