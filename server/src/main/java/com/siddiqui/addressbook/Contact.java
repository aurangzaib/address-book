package com.siddiqui.addressbook;

import com.mongodb.BasicDBObject;
import org.bson.types.ObjectId;

public class Contact {

  private String id;
  private String name;
  private String number;
  private String email;
  private String company;
  private String address;

  public Contact(BasicDBObject dbObject) {
    this.id = dbObject.get("_id").toString();
    this.name = dbObject.getString("name");
    this.number = dbObject.getString("number");
    this.email = dbObject.getString("email");
    this.company = dbObject.getString("company");
    this.address = dbObject.getString("address");
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getNumber() {
    return number;
  }

  public void setNumber(String number) {
    this.number = number;
  }

  public String getCompany() {
    return company;
  }

  public void setCompany(String company) {
    this.company = company;
  }

  public String getAddress() {
    return address;
  }

  public void setAddress(String address) {
    this.address = address;
  }
}
