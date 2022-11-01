// Copyright (c) 2020 Julienka Sohal All rights reserved
//
// Created by: Julienka Sohal
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit3-02-JS/sw.js", {
    scope: "/ICS20-Unit3-02-JS/",
  })
}

/**
 * calculates the volume of the pyramid
 */
// input
function calculateClicked() {
  const length = parseFloat(document.getElementById("Length").value)
  const width = parseFloat(document.getElementById("Width").value)
  const height = parseFloat(document.getElementById("Height").value)

  // process
  const volume = (length * width * height) / 3

  // output
  document.getElementById("Volume").innerHTML =
    "The volume of this Pyramid is " + volume.toFixed(2) + "cm³."
}
