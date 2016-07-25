package com.siddiqui.addressbook;

import com.google.gson.Gson;
import spark.Response;
import spark.ResponseTransformer;

import java.util.HashMap;

class JsonUtil implements ResponseTransformer {

  private Gson gson = new Gson();

  @Override
  public String render(Object model) {
    if (model instanceof Response) {
      return gson.toJson(new HashMap<>());
    }
    return gson.toJson(model);
  }
}
