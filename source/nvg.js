"use strict"

var element, firstScript
var Navegg

element = document.createElement("script")
element.src = "https://tag.navdmp.com/universal.min.js"
firstScript = document.getElementsByTagName("script")[0]
firstScript.parentNode.insertBefore(element, firstScript)
window.Navegg = window.Navegg || function (parms) {
  window.Navegg.q = window.Navegg.q || []
  window.Navegg.q.push([this, parms])
}

window.naveggReady = window.naveggReady || []
window["nvg" + INSTALL_OPTIONS.account] = new Navegg({
  acc: INSTALL_OPTIONS.account,
  origin: "cf"
})


