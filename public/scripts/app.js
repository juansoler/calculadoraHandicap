/*
 * @license
 * Your First PWA Codelab (https://g.co/codelabs/pwa)
 * Copyright 2019 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License
 */
'use strict';

const hcpActual = {
  hcpActualText: document.getElementById('hcpActualText'),
}

const weatherApp = {
  selectedLocations: {},
  addDialogContainer: document.getElementById('addDialogContainer'),
};

/**
 * Toggles the visibility of the add location dialog box.
 */
function toggleAddDialog() {
  weatherApp.addDialogContainer.classList.toggle('visible');
}

function calcularHandicap(){
  var hcpActual = document.getElementById('hcpActual');
  var nuevoHcp = document.getElementById('nuevoHcp');
  const selectCategoria = document.getElementById('categoria');
  const categoriaSeleccionada = selectCategoria.options[selectCategoria.selectedIndex];
  const categoria = categoriaSeleccionada.value;
  
  const puntosElement = document.getElementById('puntos');
  const puntos = puntosElement.value;

  switch (categoria) {
  case "1":
    //Sentencias ejecutadas cuando el resultado de expresion coincide con valor1
      var hcpNuevo = 0.0;
       if (puntos <35){
        hcpNuevo = parseInt(hcpActual.value, 10) + 0.1;
      
        nuevoHcp.innerHTML = hcpNuevo.toString();
      
       break;
      }
      if (puntos == 35 || puntos == 36) {
        
      }
      if (puntos >36){
        var temp = 0;
        if (puntos-36 > 4) {
          temp = 4;
        }else temp = puntos-36;
        hcpNuevo += temp*0.1;
      }
      if (puntos >40){
        var temp = 0;
        if (puntos-40 > 5) {
          temp = 5;
        }else temp = puntos-40;
        hcpNuevo += temp*0.1;

      }
      if (puntos >45){
        hcpNuevo += (puntos-45);

      }
      hcpNuevo = parseInt(hcpActual.value, 10) - hcpNuevo;
      
      nuevoHcp.innerHTML = hcpNuevo.toString();
      
     break;
  case "2":
    //Sentencias ejecutadas cuando el resultado de expresion coincide con valor2
     var hcpNuevo = 0.0;
       if (puntos <34){
        hcpNuevo = parseInt(hcpActual.value, 10) + 0.1;
      
        nuevoHcp.innerHTML = hcpNuevo.toString();
      
       break;
      }
      if (puntos >= 34 && puntos <= 36) {
      }
      if (puntos >36){
        var temp = 0;
        if (puntos-36 > 4) {
          temp = 4;
        }else temp = puntos-36;
        hcpNuevo += temp*0.2;
      }
      if (puntos >40){
        var temp = 0;
        if (puntos-40 > 5) {
          temp = 5;
        }else temp = puntos-40;
        hcpNuevo += temp*0.3;

      }
      if (puntos >45){
        hcpNuevo += (puntos-45);

      }
      hcpNuevo = parseInt(hcpActual.value, 10) - hcpNuevo;
      
      nuevoHcp.innerHTML = hcpNuevo.toString();
      
     break;
  case "3":
    //Sentencias ejecutadas cuando el resultado de expresion coincide con valorN
    var hcpNuevo = 0.0;
       if (puntos <33){
        hcpNuevo = parseInt(hcpActual.value, 10) + 0.1;
      
        nuevoHcp.innerHTML = hcpNuevo.toString();
      
       break;
      }
      if (puntos >= 33 && puntos <= 36) {
        
      }
      if (puntos >36){
        var temp = 0;
        if (puntos-36 > 4) {
          temp = 4;
        }else temp = puntos-36;
        hcpNuevo += temp*0.3;
      }
      if (puntos >40){
        var temp = 0;
        if (puntos-40 > 5) {
          temp = 5;
        }else temp = puntos-40;
        hcpNuevo += temp*0.5;

      }
      if (puntos >45){
        hcpNuevo += (puntos-45);

      }
      hcpNuevo = parseInt(hcpActual.value, 10) - hcpNuevo;
      
      nuevoHcp.innerHTML = hcpNuevo.toString();
      
     break;
  case "4":
    //Sentencias ejecutadas cuando el resultado de expresion coincide con valorN
    var hcpNuevo = 0.0;
      
       if (puntos <32){
        hcpNuevo = parseInt(hcpActual.value, 10) + 0.1;
      
        nuevoHcp.innerHTML = hcpNuevo.toString();
      
       break;
      }
      
      if (puntos >= 32 && puntos <= 36) {
      }
      if (puntos >36){
        var temp = 0;
        if (puntos-36 > 4) {
          temp = 4;
        }else temp = puntos-36;
        hcpNuevo += temp*0.4;
      }
      if (puntos >40){
        var temp = 0;
        if (puntos-40 > 5) {
          temp = 5;
        }else temp = puntos-40;
        hcpNuevo += temp*0.7;

      }
      if (puntos >45){
        hcpNuevo += (puntos-45);

      }
      hcpNuevo = parseInt(hcpActual.value, 10) - hcpNuevo;
      
      nuevoHcp.innerHTML = hcpNuevo.toString();
      
     break;
  case "5":
    //Sentencias ejecutadas cuando el resultado de expresion coincide con valorN
    var hcpNuevo = 0.0;
      
       if (puntos <31){
        hcpNuevo = parseInt(hcpActual.value, 10) + 0.2;
      
        nuevoHcp.innerHTML = hcpNuevo.toString();
      
       break;
      }
      if (puntos >= 31 && puntos <= 36) {
      }
      if (puntos >36){
        var temp = 0;
        if (puntos-36 > 4) {
          temp = 4;
        }else temp = puntos-36;
        hcpNuevo += temp*0.5;
      }
      if (puntos >40){
        var temp = 0;
        if (puntos-40 > 5) {
          temp = 5;
        }else temp = puntos-40;
        hcpNuevo += temp*0.9;

      }
      if (puntos >45){
        hcpNuevo += (puntos-45);

      }
      hcpNuevo = parseInt(hcpActual.value, 10) - hcpNuevo;
      
      nuevoHcp.innerHTML = hcpNuevo.toString();
      
     break;
  case "6":
    //Sentencias ejecutadas cuando el resultado de expresion coincide con valorN
    var hcpNuevo = 0.0;
      
      if (puntos <30){
        hcpNuevo = parseInt(hcpActual.value, 10) + 0.2;
      
        nuevoHcp.innerHTML = hcpNuevo.toString();
      
       break;
      }
      if (puntos >= 30 && puntos <= 36) {
      }
      if (puntos >36){
        var temp = 0;
        if (puntos-36 > 4) {
          temp = 4;
        }else temp = puntos-36;
        hcpNuevo += temp*0.6;
      }
      if (puntos >40){
        var temp = 0;
        if (puntos-40 > 5) {
          temp = 5;
        }else temp = puntos-40;
        hcpNuevo += temp;

      }
      if (puntos >45){
        hcpNuevo += (puntos-45);

      }
      hcpNuevo = parseInt(hcpActual.value, 10) - hcpNuevo;
      
      nuevoHcp.innerHTML = hcpNuevo.toString();
      
     break;
  default:
    //Sentencias_def ejecutadas cuando no ocurre una coincidencia con los anteriores casos
    break;
}
                                         
}

/**
 * Event handler for butDialogAdd, adds the selected location to the list.
 */


/**
 * Event handler for .remove-city, removes a location from the list.
 *
 * @param {Event} evt
 */


/**
 * Renders the forecast data into the card element.
 *
 * @param {Element} card The card element to update.
 * @param {Object} data Weather forecast data to update the element with.
 */


/**
 * Get's the latest forecast data from the network.
 *
 * @param {string} coords Location object to.
 * @return {Object} The weather forecast, if the request fails, return null.
 */


/**
 * Get's the cached forecast data from the caches object.
 *
 * @param {string} coords Location object to.
 * @return {Object} The weather forecast, if the request fails, return null.
 */


/**
 * Get's the HTML element for the weather forecast, or clones the template
 * and adds it to the DOM if we're adding a new item.
 *
 * @param {Object} location Location object
 * @return {Element} The element for the weather forecast.
 */


/**
 * Gets the latest weather forecast data and updates each card with the
 * new data.
 */


/**
 * Saves the list of locations.
 *
 * @param {Object} locations The list of locations to save.
 */


/**
 * Loads the list of saved location.
 *
 * @return {Array}


/**
 * Initialize the app, gets the list of locations from local storage, then
 * renders the initial data.
 */
function init() {
  // Get the location list, and update the UI.

  // Set up the event handlers for all of the buttons.
  document.getElementById('butAdd').addEventListener('click', toggleAddDialog);
  document.getElementById('butDialogCancel')
      .addEventListener('click', toggleAddDialog);
  document.getElementById('butDialogAdd')
      .addEventListener('click', calcularHandicap);
}

init();
