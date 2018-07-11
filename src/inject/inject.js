(function() {

function autorefresh() {
	document.querySelectorAll('button.slds-button.slds-button--neutral.refresh')[0].click();
	setTimeout(autorefresh, 60000);}autorefresh();

})();