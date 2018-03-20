(function() {
  'use strict'

  var element, firstScript
  var Navegg

  element = document.createElement("script")
  element.src = "https://tag.navdmp.com/universal.min.js"
  document.head.appendChild(element)
  window.Navegg = window.Navegg || function (parms) {
    window.Navegg.q = window.Navegg.q || []
    window.Navegg.q.push([this, parms])
  }

  window.naveggReady = window.naveggReady || []
  if(INSTALL_OPTIONS.account) {
    window["nvg" + INSTALL_OPTIONS.account] = new window.Navegg({
      acc: INSTALL_OPTIONS.account,
      origin: "cf"
    })
  }

}())
