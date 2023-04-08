// Copyright (c) 2023 ZoiaB All rights reserved
//
// Created by: ZoiaB
// Created on: Apr 2023
// This file contains the JS functions for index.html

"use strict"

function tempSent() {

 //declaring original variables & constant
 let temperature = parseFloat(document.getElementById("temp-input").value);
 const TEMP_LIMIT = 15;
 let message = "";

 //setting different if/then scenarios
 if (temperature >= TEMP_LIMIT) {
   message = "This is considered hot. Prepare for warmer weather!";
 }

 //else represents a temperature of less than 15 degrees
 else {
   message = "This is considered cold. Prepare for cooler weather!";
 }

 //display the correct message to the screen
 document.getElementById("results").innerHTML = message;
}