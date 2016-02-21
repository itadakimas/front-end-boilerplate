/*
 * Dependencies
 */
import Events from "modules/events.js";
import Vue from "vue";
import template from "./home.html";

var view;

export function init()
{
  console.log("home section loaded");
  view = new Vue({
    replace: false,
    el: "#main",
    ready: function() {

      Events.emit("section:loaded");
    },
    template: template
  });
}
export function destroy()
{
  Events.emit("section:destroyed");
  console.log("home section destroyed");
}