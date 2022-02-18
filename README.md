# Frank Sinatra Wiki

Using JavaScript and Express, I learned the basics of creating a backend while creating a Wiki for Frank Sinatra. 

## Installation

In order to launch this site, you must download the code run the following commands to start a local server.

npm install
node app.js


## Usage

This site can either be accessed on your browser using localhost:8080. 

You can learn more about Frank Sinatra by using the following routes.

# Returns a random song from Frank Sinatra
http://localhost:8080/

# Returns Franks Sinatra's Birthdate
http://localhost:8080/birth_date

# Returns Frank Sinatra's Birth City
http://localhost:8080/birth_city

# Returns Frank Sinatra's Wives
http://localhost:8080/wives

# Returns a Picture from Frank Sinatra
http://localhost:8080/picture

# Everyone can access the page
http://localhost:8080/public

# Private Access
This action will be protected by a HTTP Basic access authentication and print "Welcome, authenticated client" if you are authorized with the login admin and password admin otherwise it will provide a 401 Not authorized.
http://localhost:8080/protected
