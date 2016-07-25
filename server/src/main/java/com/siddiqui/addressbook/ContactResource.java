package com.siddiqui.addressbook;

import spark.Spark;

import static spark.Spark.*;

public class ContactResource {

  private static final String API_CONTEXT = "/api/v1";

  private final ContactService contactService;

  public ContactResource(ContactService contactService) {
    this.contactService = contactService;
    setupEndpoints();
  }

  private void setupEndpoints() {

    // create new contact
    post(API_CONTEXT + "/contacts", "application/json", (request, response) -> {
      contactService.createContact(request.body());
      response.status(201);
      return response;
    }, new JsonUtil());

    // get a contact
    get(API_CONTEXT + "/contacts/:id", "application/json", (request, response)
      -> contactService.getContact(request.params(":id")), new JsonUtil());

    // get all contacts
    get(API_CONTEXT + "/contacts", "application/json", (request, response)
      -> contactService.getAllContacts(), new JsonUtil());

    // update a contact
    post(API_CONTEXT + "/contacts/:id", "application/json", (request, response)
      -> contactService.updateContact(request.params(":id"), request.body()), new JsonUtil());

    // delete a contact
    delete(API_CONTEXT + "/contacts/:id", "application/json", (request, response)
      -> contactService.deleteContact(request.params(":id")), new JsonUtil());


    Spark.options("/*", (request, response) -> {

      String accessControlRequestHeaders = request.headers("Access-Control-Request-Headers");
      if (accessControlRequestHeaders != null) {
        response.header("Access-Control-Allow-Headers", accessControlRequestHeaders);
      }

      String accessControlRequestMethod = request.headers("Access-Control-Request-Method");
      if (accessControlRequestMethod != null) {
        response.header("Access-Control-Allow-Methods", accessControlRequestMethod);
      }

      return "OK";
    });

    Spark.before((request, response) -> {
      response.header("Access-Control-Allow-Origin", "*");
    });
  }
}
