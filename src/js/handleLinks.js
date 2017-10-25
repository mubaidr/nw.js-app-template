var gui = require('nw.gui')

function openExternalLink (link) {
  gui.Shell.openExternal(link)
}
