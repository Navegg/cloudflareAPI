(function(n, v, g) {
  "use strict"
  var a, b, o

  o = "Navegg"
  if (!n[o]) {
    a = v.createElement("script")
    a.src = g
    b = document.getElementsByTagName("script")[0]
    b.parentNode.insertBefore(a, b)
    n[o] = n[o] || function (parms) {
      n[o].q = n[o].q || []
      n[o].q.push([this, parms])
    }
  }
})(window, document, "https://tag.navdmp.com/universal.min.js")

window.naveggReady = window.naveggReady || []
var Navegg

window["nvg" + INSTALL_OPTIONS.account] = new Navegg({
  acc: INSTALL_OPTIONS.account
})
