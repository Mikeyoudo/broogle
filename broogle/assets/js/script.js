
//when the document is ready, process everything in well your document, run this function
$(document).ready(function() {
//class result, when result click, run the function
//the class result has your link you want from page SiteResultsProvider
	$(".result").on("click", function() {
		//get the data-linked and link attriburte you clicked on, you know thawt sentence that turns dark blue etc...
		var id = $(this).attr("data-linkId");
		var url = $(this).attr("href");

		if(!id) {
			alert("data-linkId attribute not found");
		}

		increaseLinkClicks(id, url);

		return false;
	});


});


function increaseLinkClicks(linkId, url) {
//going to your updateLinkCount underneath the ajax folder
	$.post("ajax/updateLinkCount.php", {linkId: linkId})
	.done(function(result) {
		if(result != "") {
			alert(result);
			return;
		}

		window.location.href = url;
	});

}
