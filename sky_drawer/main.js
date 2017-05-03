// Routines for the Sky Drawer main page.
require([
  "dojo/dom",
  "dojo/domReady!"
], function(dom) {
  // The WWT object.
  var wwt;

  // Standard wat to initialise the WorldWide Telescope.
  var initForWwt = function() {
    //wwt.loadImageCollection("http://www.worldwidetelescope.org/COMPLETE/wwtcomplete.wtml");
    wwt.settings.set_showCrosshairs(true);
    wwt.hideUI(false);
  };
  
  // Function called by the WWT initialiser when it's ready.
  var wwtReady = function() {
    initForWwt();
  };
  
  // Function to initialise the WWT object.
  var wwtInit = function() {
    wwt = wwtlib.WWTControl.initControl("WWTCanvas");
    wwt.add_ready(wwtReady);
  };

  // Call it.
  wwtInit();
});
