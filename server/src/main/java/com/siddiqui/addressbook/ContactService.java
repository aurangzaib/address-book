package com.siddiqui.addressbook;

import com.google.gson.Gson;
import com.mongodb.*;
import org.bson.types.ObjectId;

import java.util.ArrayList;
import java.util.List;

public class ContactService {
  // private final DB db;
  private final DBCollection collection;

  private BasicDBObject helperReturnContact(Contact contact) {
    return new BasicDBObject("name", contact.getName())
      .append("email", contact.getEmail())
      .append("number", contact.getNumber())
      .append("company", contact.getCompany())
      .append("address", contact.getAddress());
  }

  public ContactService(DB db) {
    // this.db = db;
    this.collection = db.getCollection("contacts");
  }

  // get all contacts
  List<Contact> getAllContacts() {
    List<Contact> contacts = new ArrayList<>();
    DBCursor dbObjects = collection.find();
    while (dbObjects.hasNext()) {
      DBObject dbObject = dbObjects.next();
      contacts.add(new Contact((BasicDBObject) dbObject));
    }
    return contacts;
  }

  // get a contact
  Contact getContact(String id) {
    return new Contact((BasicDBObject) collection.findOne(new BasicDBObject("_id", new ObjectId(id))));
  }

  void createContact(String body) {
    Contact contact = new Gson().fromJson(body, Contact.class);
    collection.insert(helperReturnContact(contact));
  }

  Contact updateContact(String id, String body) {
    Contact contact = new Gson().fromJson(body, Contact.class);
    collection.update(
      new BasicDBObject("_id", new ObjectId(id)),
      new BasicDBObject("$set", helperReturnContact(contact))
    );

    return this.getContact(id);
  }

  List<Contact> deleteContact(String id) {
    collection.findAndRemove(new BasicDBObject("_id", new ObjectId(id)));
    return this.getAllContacts();
  }
}
