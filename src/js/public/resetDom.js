/*
*  页面font-size重置
*/
export function reset(){
	var bWidth=document.body.clientWidth;
	bWidth = bWidth>640 ? 640 : bWidth;
	var size=bWidth/320*20;
	document.getElementsByTagName('html')[0].style.fontSize=size+'px'
}
/*
*	验证手机号码
*/
export function isTel(num){
	let test = new RegExp(/^[1][345789][0-9]{9}$/);
	return test.test(num);
}
