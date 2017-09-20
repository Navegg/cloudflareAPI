var Navegg

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

window["nvg" + INSTALL_OPTIONS.account] = new Navegg({
  acc: INSTALL_OPTIONS.account,
  origin: "cf"
})

window.INSTALL_SCOPE = {

  nvg_preview_div: null,

  errorTimeout: null,

  timeout: null,

  options: null,

  triggerTimeout: function triggerTimeout () {
    window.clearTimeout(window.INSTALL_SCOPE.timeout)
    window.INSTALL_SCOPE.timeout = window.setTimeout(window.INSTALL_SCOPE.validateTag, 1500)
  },

  showErrorMsg: function showErrorMsg () {
    window.INSTALL_SCOPE.nvg_preview_div.style.background = "#F00"
    window.INSTALL_SCOPE.nvg_preview_div.innerHTML = "Please, put a Navegg valid Account!"
  },

  updateAccount: function updateAccount (options) {
    window.INSTALL_SCOPE.options = options
    window.clearTimeout(window.INSTALL_SCOPE.timeout)
    if (window.INSTALL_SCOPE.nvg_preview_div == null) {
      window.INSTALL_SCOPE.nvg_preview_div = document.createElement("div")
      window.INSTALL_SCOPE.nvg_preview_div.style.cssText = "left:0;position:fixed;width:40%;height:80px;padding:10px 0;background:#65cc9a;opacity:0.8;top:15%;margin-left:30%;color:#FFF;text-align:center"
      document.body.appendChild(window.INSTALL_SCOPE.nvg_preview_div)
    }
    window.INSTALL_SCOPE.nvg_preview_div.innerHTML = "Loading..."
    window["nvg" + window.INSTALL_SCOPE.options.account] = new Navegg({
      acc: window.INSTALL_SCOPE.options.account,
      origin: "cf"
    })
    window.naveggReady.push(window.INSTALL_SCOPE.triggerTimeout)
    window.clearTimeout(window.INSTALL_SCOPE.errorTimeout)
    window.INSTALL_SCOPE.errorTimeout = window.setTimeout(window.INSTALL_SCOPE.showErrorMsg, 5000)
  },

  validateTag: function validateTag() {
    window.clearTimeout(window.INSTALL_SCOPE.errorTimeout)
    if (window.INSTALL_SCOPE.options.account && window["nvg" + window.INSTALL_SCOPE.options.account].usr) {
      window.INSTALL_SCOPE.nvg_preview_div.style.background = "#65cc9a"
      window.INSTALL_SCOPE.nvg_preview_div.innerHTML = "The selected Account is valid!</br></br>Acc ID:<b>" + window.INSTALL_SCOPE.options.account + "</b>"
    }
    else window.INSTALL_SCOPE.showErrorMsg()
  }
}
