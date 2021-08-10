	document.getElementById("remote_desktop:\/Common\/RDP").addEventListener("touchstart", touchHandler, false);
	document.getElementById("remote_desktop:\/Common\/RDP").addEventListener("touchmove", touchHandler, false);
	document.getElementById("remote_desktop:\/Common\/RDP").addEventListener("touchend", touchHandler, false);

	function touchHandler(e) {
	  if (e.type == "touchstart") {
		alert("You touched the screen!");
	  } else if (e.type == "touchmove") {
		alert("You moved your finger!");
	  } else if (e.type == "touchend" || e.type == "touchcancel") {
		alert("You removed your finger from the screen!");
	  }
	}
