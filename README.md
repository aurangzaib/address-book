<h1>Get the Code</h1>
<code>git clone https://github.com/aurangzaib/address-book</code>

<h1>Setup</h1>
<h3>Client side:</h3>
<code>cd address-book/client</code> <br/>

 Assuming you have bower and node installed in your machine: <br/>
<code>bower install && npm install</code>

<h3> Server Side:</h3>
 I am using Java 8 and MongoDB. Maven for packaging. <br/><br/>
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
