Models:

User, Face, Cart, CartItem, Order, OrderItem, OAuth

sessionId is a column in Cart.  It doesn't exist in its own model.  

Workflow: 

An unauthenticated client is browsing the site.  At the moment the unauthenticated client adds something to the cart we FindOrCreate a cart, finding by sessionId or writing the session id from express.sessions/the cookie to the sessionId of the cart.  

[This is not currently implemented as a class method and needs to be either written as a class method (that would take the session id as a parameter and return a cart with sessionId assigned) or handled in the route. -KS]  

Now the cart belongs to this session.  The cart should be destroyed when the session expires.  [I'm not 100% sure how to handle this and it's probably lower priority than other tasks given that this is not a real production website. One possibility would be to write a class method that periodically polls the database for carts without user id's that are older than X minutes, or whatever, and bulk destroys them. -KS]

An authenticated user is browsing the site.  A user's cart is created by a beforeCreate hook [Another option would be to somehow findOrCreate a cart, but I am having trouble figuring out how that would work without running into other complexity.  -KS]

An unauthenticated client signs in and becomes an authenticated user.  The cart items that were previously assigned to an unauthenticated cart are assigned to the user's cart, by overwriting their cart id.  Three class methods work together to accomplish this. Cart.getUnAuthCartId takes a session id and returns a cart id.  Cart.getUserCartId takes a user id and returns a cart id.  CartItem.migrate takes an unauthorized cart id and a user cart id, finds all cart items with the unathorized cart id, and overwrites the cart id with user cart id.  [If none of this is working we can always just deal with it in the routes -KS]

An unathenticated or authenticated user hits the checkout button.  A new order must be created.  All cart items in the current cart must be bulk added to OrderItems, with the newly created order's id.  This is not yet implemented.  







