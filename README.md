Note: This guide is only for OSX El Capitan and Ubuntu 16.04. I don't have my development environment setup on Windows.

<h1>Get the Code</h1>
<code>git clone https://github.com/aurangzaib/address-book</code>

<h1>Setup</h1>
<h3>Client side:</h3>

 <h4>I have used Typescript and AngularJS.</h4>

<code>cd address-book/client</code> <br/>

 If you dont have bower and node installed in your machine: <br/>
 Node  <code>https://nodejs.org/dist/v4.4.7/node-v4.4.7.pkg </code> <br/>
 Bower <code>sudo npm install -g bower </code>
 
<code>bower install && npm install</code>

<h3> Server Side:</h3>

 <h4> I have used Java 8, MongoDB and Maven. </h4>
 
<code>cd address-book/server</code> <br/>
<code>brew install mongodb</code><br/>
<code>brew install mvn</code><br/>
<code>mvn clean install</code> <br/>

<h1> Running the project </h1>

You should be using 3 terminal tabs (DB, Server, Client)

New terminal:
<code>cd address-book/server && sudo mongod</code> <br/>

New terminal:
<code>cd address-book/server && java -jar target/addressbook-1.0-SNAPSHOT.jar</code>

New terminal:
<code>cd address-book/client && grunt serve</code> <br/>

<h1>Development</h1>

I have use IntelliJ for Client and Backend development. <br/>
For client side, you need typescript to be enabled in IntelliJ.
For server side, common figure out yourself :)
