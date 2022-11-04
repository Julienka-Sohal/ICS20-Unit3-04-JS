// Copyright (c) 2022 Julienka Sohal All rights reserved
//
// Created by: Julienka Sohal
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit3-04-JS/sw.js", {
    scope: "/ICS20-Unit3-04-JS/",
  })
}

/**
 * converts the fahrenheit to Celsius
 */
// input
function calculateClicked() {
  const fahrenheit = parseFloat(document.getElementById("Fahrenheit").value)

  // process
  const temp = ((fahrenheit - 32) * 5) / 9

  // output
  document.getElementById("Temp").innerHTML =
    "The the temperature in Celsius is " + temp.toFixed(2) + " °C."
}
