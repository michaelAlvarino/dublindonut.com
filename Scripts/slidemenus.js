(function(window){
	var body		=document.body,
	mask			=document.createElement("div"),
	toggleSlideTop	=document.querySelector(".toggle-slide-top"),
	slideMenuTop	=document.querySelector(".slide-menu-top");
	mask.className	="mask";

	/*slide menu top*/
	toggleSlideTop.addEventListener("click",function(){
		classie.add(body,"smt-open");
		document.body.appendChild(mask);
		activeNave="smt-open";
	})
}(window))