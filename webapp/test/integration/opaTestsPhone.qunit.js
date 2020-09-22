/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Z/DemoGit/test/integration/PhoneJourneys"
	], function () {
		QUnit.start();
	});
});
