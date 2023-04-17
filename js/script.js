// Copyright (c) 2023 ZoiaB All rights reserved
//
// Created by: ZoiaB
// Created on: Apr 2023
// This file contains the JS functions for index.html

"use strict"

function temperatureEvaluate() {

//temperature and message variables & temperature limit value
 let temperature = parseFloat(document.getElementById("temp-input").value);
 const TEMP_LIMIT = 15;
 let message = "";

//if: for a temperature of 15 degrees or over
 if (temperature >= TEMP_LIMIT) {
   message = "This is considered hot. Prepare for warmer weather!";
 }

 //else: for a temperature of less than 15 degrees
 else {
   message = "This is considered cold. Prepare for cooler weather!";
 }

 //display the temperature evaluation to the screen
 document.getElementById("results").innerHTML = message;
}