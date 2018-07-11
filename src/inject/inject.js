(function () {
	var timePeriod = 10 * 1000;
	
	console.log('Refresh script loaded.');
	
	function autorefresh() {
		/**
		 * ============================
		 * THIS IS WHERE THE ISSUE LIES
		 * ============================
		 * Because of the way that Salesforce Lighting renders their 'Fake HTML' the user will need to
		 * right click on the target and, then inspect the target element. This causes the element to
		 * actually be added to the DOM and then can be manipulated via JS. There will need to be a 
		 * workaround found for this issue.
		 */
		var targetElement = document.querySelectorAll('.slds-button.slds-button--neutral.refresh')[0];
		console.log(targetElement);
		console.log('Looking for Target Element');
		if (targetElement) {
			console.log('Refreshing...');
			// Click the Target
			targetElement.click();
			// Recurse after Defined Time Period
			setTimeout(autorefresh(), timePeriod);
		} else {
			console.error(new Error('Target Element was not found.'));
		}
	}

	// Set Initial Timeout
	/**
	 * ========================
	 * Here's your challenge:
	 * ========================
	 * Time period was harcoded.
	 * See if you can find a Vanilla JS way to wait until the element is displayed on the page and then beind the
	 * recursion process. In other words, replace the setTimeout below with a better approach.
	 */
	console.log('Preparing to scan page for element.');
	setTimeout(function () {
		console.log('Running the script.');
		autorefresh();
	}, timePeriod);

})();