# Authentication

Test and integrate **Token Authentication** to your Applications. 

Try to answer following questions:

- How to receive Tokens for Authentication?
- Which benefits exist if you are using such Tokens for User Authentication?
- What are possible risks if you are not using Authentication and Autorization with e.g. Tokens? 

## useful Links

- testing with environment variables https://blog.postman.com/extracting-data-from-responses-and-chaining-requests/ e.g. request token and using at another request
- What is a Bearer Token 
	- https://oauth.net/2/bearer-tokens/
	- https://swagger.io/docs/specification/authentication/bearer-authentication/


## JSON Web Tokens

Those steps should guide you through implementing JSON Web Tokens. 

**Use about 3x45minutes** to go through JSON Web Tokens (JWT). Feel free to integrate in your existing app or to create a small demo application.

- Define (REST) API
- Authentication by Username and Password
- Receive your Token
- Use this Token for Authentication
- Use Local Storage to keep Token persistent
- Use token within Web Socket

**useful links:**

- https://jwt.io/introduction/
- https://github.com/bradtraversy/node_jwt_example
- https://www.youtube.com/watch?v=7nafaH9SddU
- https://gist.github.com/jfromaniello/8418116
- https://developer.mozilla.org/de/docs/Web/API/Window/localStorage
- **Postman Requests** https://www.getpostman.com/collections/eb0f211d22e26b550bc1

### Node.js with JWT and Web Socket Example
- [app.js](app.js) node express Server with simple demonstration (with Mock objects) incl. 
- [ui/frontend.js](ui/frontend.js) simple UI implementation based on Web Socket Example

## OAuth2

OAuth (Open Authorization) 2.0 is the industry-standard protocol for authorization. 

**Use about 3x45minutes** to go through OAuth2 (incl. possible Integration).

**useful links:**

- https://www.youtube.com/watch?v=bzGKgC3N7SY
- https://medium.com/@darutk/the-simplest-guide-to-oauth-2-0-8c71bd9a15bb
- https://oauth.net/2/
- https://oauth.net/2/jwt/

## Google OAuth2

A possible example for OAuth2 is Google OAuth2 Service.


**useful links:**

- https://googleapis.dev/nodejs/googleapis/latest/oauth2/index.html
- https://github.com/googleapis/google-api-nodejs-client/
- https://www.youtube.com/watch?v=o9e3ex-axzA

there are also other Platforms like Facebook, which provides possible integration of their user account management to login in with "PLATFORM Account". Feel free to use other platform to take a look about OAuth2 Integration within your Application.