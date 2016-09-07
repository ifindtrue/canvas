$(document).ready(function(){
	var engine;

	var sample1_canvas=new Canvas("#sample1");
		sample1_canvas.drawElement({
			E:{
				x:100,
				y:0,
				background:"orange"
			},
			E2:{
				x:0,
				y:"100%",
				width:"100%",
				origin:"0 100%",
				background:"#aaa"
			}
		});
	var sample1;
	$(".sample-btn").click(function(){
		var type=$(this).attr("data-type");
		if(engine){
			eval(engine+".stop()");
	
			eval(engine+"_unactive()");
			$(".sample-btn[data-type="+engine+"]").removeClass("btn-danger");
			$(this).html("실행");
			if(engine==type){
				engine=undefined;
				return;
			}
		}
		eval(type+"=new Engine("+type+"_canvas,{fps:64,gravity:10});");
		eval(type+"_active()");
		$(this).html("리셋");
		$(this).addClass("btn-danger");
		engine=type;
	});
	function sample1_active(){
		sample1.particle("E");
		sample1.particle("E2",{
			m:Infinity
		});
	}
	function sample1_unactive(){
		sample1_canvas.element("E").cvss("y",0);
	}	
});