package com.siddiqui.addressbook;

import com.mongodb.DB;
import com.mongodb.MongoClient;

import static spark.Spark.setIpAddress;
import static spark.Spark.setPort;
import static spark.SparkBase.staticFileLocation;

import java.util.HashMap;

import spark.Filter;
import spark.Request;
import spark.Response;
import spark.Spark;

public class Main {

  // entry point for the app
  public static void main(String[] args) throws Exception {
    setIpAddress("localhost");
    setPort(8080); // server port
    staticFileLocation("/public");
    new ContactResource(new ContactService(mongo()));
  }

  // database
  private static DB mongo() throws Exception {
    MongoClient mongoClient = new MongoClient("localhost", 27017); // DB port
    return mongoClient.getDB("addressbook");
  }
}
