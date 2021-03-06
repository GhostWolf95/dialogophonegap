/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }

};

function notificationAlert(){
navigator.notification.alert(
    'Eres un ganador!',  // mesare
    alertDismissed,      // callback
    'Final del juego',   // title
    'Ok'                 // buttonName
);
}

function alertDismissed() {
// do something
console.log('Has pulsado Ok');
}

function notificationConfirm(){
navigator.notification.confirm(
    'Eres un ganador!',     // message
    onConfirm,              // callback
    'Final del juego',      // title
    ['Reiniciar','Salir']   // buttonName
);
}

function onConfirm (buttonIndex) {
// do something
if(buttonIndex == 1)
    console.log('Has pulsado Reiniciar');
if(buttonIndex == 2)
    console.log('Has pulsado Salir');
}
function notificationPrompt(){
navigator.notification.prompt(
    'Por favor introduce tu nombre.',   // message
    onPrompt,                           // callback to invoke
    'Bienvenido',                       // title
    ['Guardar','Cancelar'],             // buttonLabels
    ''                                  // defaultText
);
}

function onPrompt(results) {
if(results.buttonIndex == 1)
    console.log("Has pulsado Guardar y te llamas " + results.input1);
if(results.buttonIndex == 2)
    console.log("Has pulsado Cancelar y te llamas " + results.input1);
}

function notificationBeep(){
navigator.notification.beep(2);
}
