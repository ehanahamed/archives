/*!
 * Nord Bootstrap v23.523.2 (https://nord-bootstrap.ehan.dev/)
 * Copyright (c) 2022 Ehan Ahamed and contributors
 * Licensed under the MIT License (https://github.com/EhanAhamed/nord-bootstrap/blob/main/LICENSE.txt)
 */
function changeStyle(style) {
  if (style === "regular") {
    /* Remove RTL Direction HTML Attribute */
    document.documentElement.removeAttribute("dir");

    /* Switch nord-bootstrap Stylesheets */
    document.getElementById("regular-css").media = "";
    document.getElementById("regularrtl-css").media = "none";
    document.getElementById("inverted-css").media = "none";
    document.getElementById("invertedrtl-css").media = "none";

    /* Switch Demo and Demo RTL Stylesheets */
    document.getElementById("demo-css").media = "";
    document.getElementById("demortl-css").media = "none";

    /* Update "Select Style" Dropdown */
    document.getElementById("regular").innerHTML = "<strong>Regular</strong>";
    document.getElementById("regularrtl").innerHTML = "Regular (Right-to-Left)";
    document.getElementById("inverted").innerHTML = "Inverted";
    document.getElementById("invertedrtl").innerHTML =
      "Inverted (Right-to-Left)";
    document.getElementById("light").innerHTML = "Light";
    document.getElementById("lightrtl").innerHTML = "Light (Right-to-Left)";
  }
  if (style === "regularrtl") {
    /* Add RTL Direction HTML Attribute */
    document.documentElement.setAttribute("dir", "rtl");

    /* Switch nord-bootstrap Stylesheets */
    document.getElementById("regular-css").media = "none";
    document.getElementById("regularrtl-css").media = "";
    document.getElementById("inverted-css").media = "none";
    document.getElementById("invertedrtl-css").media = "none";

    /* Switch Demo and Demo RTL Stylesheets */
    document.getElementById("demo-css").media = "none";
    document.getElementById("demortl-css").media = "";

    /* Update "Select Style" Dropdown */
    document.getElementById("regular").innerHTML = "Regular";
    document.getElementById("regularrtl").innerHTML = "<strong>Regular (Right-to-Left)</strong>";
    document.getElementById("inverted").innerHTML = "Inverted";
    document.getElementById("invertedrtl").innerHTML =
      "Inverted (Right-to-Left)";
    document.getElementById("light").innerHTML = "Light";
    document.getElementById("lightrtl").innerHTML = "Light (Right-to-Left)";
  }
  if (style == undefined) {
    console.error(
      "changeStyle.js - changeStyle()" + "\n" + "parameter passed is undefined");
  }
}
