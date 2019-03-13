$(function(){
	 $('#search_rightSelected').click(function () {
		 $('#search option:selected').appendTo('#search_to');
	 });
	 $('#search_rightAll').click(function () {
		 $('#search option').appendTo('#search_to');
	 });
	 $('#search_leftSelected').click(function () {
		   $('#search_to option:selected').appendTo('#search');
	 });
	 $('#search_leftAll').click(function () {
		 $('#search_to option').appendTo('#search');
	 });
	 $('#search').dblclick(function () {
	   $("option:selected", this).appendTo('#search_to');
	 });
	 $('#search_to').dblclick(function () {
		   $("option:selected", this).appendTo('#search');
	 });

});