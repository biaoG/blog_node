export function reset(){
	var bWidth=document.body.clientWidth;
	bWidth = bWidth>640 ? 640 : bWidth;
	var size=bWidth/320*20;
	document.getElementsByTagName('html')[0].style.fontSize=size+'px'
}

