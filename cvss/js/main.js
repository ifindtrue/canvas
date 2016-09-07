$(document).ready(function(){

	/*샘플 캔버스 정의*/
	var sample_main=new Canvas("#sample_main");
	var sample1=new Canvas("#sample1");
	var sample2=new Canvas("#sample2");
	var sample3=new Canvas("#sample3");
	var sample4=new Canvas("#sample4");
	var sample5=new Canvas("#sample5");
	var sample6=new Canvas("#sample6");
	var sample7=new Canvas("#sample7");
	var sample8=new Canvas("#sample8");
	var sample9=new Canvas("#sample9");
	var sample10=new Canvas("#sample10");
	var sample11=new Canvas("#sample11");
	var sample12=new Canvas("#sample12");
	var sample13=new Canvas("#sample13");
	var sample14=new Canvas("#sample14");
	var sample15=new Canvas("#sample15");
	var sample16=new Canvas("#sample16");
	var sample17=new Canvas("#sample17");

	//sample_main
	sample_main.drawElement({
		E:{
			width:"100%",
			height:"100%",
		}
	});
	//smaple1
	sample1.drawElement({
		E:{
			x:10,
			y:10,
			background:"orange"
		},
		E2:{
			type:"polygon",
			x:90,
			y:10,
			vertex:[[50,0],[50,100]],
			background:"orange"
		},
		E3:{
			type:"circle",
			x:190,
			y:35,
			r:25,
			background:"orange"
		},
		E4:{
			type:"text",
			content:"재미있다!",
			x:225,
			y:10,
			textBaseline:"top",
			fontSize:"15",
			color:"orange",
			fontFamily:"궁서체"
		}
	})
	//sample2
	sample2.drawElement("E",{
		x:0,
		background:"orange"
	});
	$(".x-property-btn").click(function(){
		var value=$(this).attr("data-value");

		sample2.element("E").cvss("x",value);
		
		$(".x-property-code").show();
		if(Number(value)){
			$(".x-property-value").text(value);
		}else{
			$(".x-property-value").text("\""+value+"\"");
		}
	});

	//sample3
	sample3.drawElement("E",{
		y:0,
		background:"orange"
	});
	$(".y-property-btn").click(function(){
		var value=$(this).attr("data-value");
	
		sample3.element("E").cvss("y",value);

		$(".y-property-code").show();
		if(Number(value)){
			$(".y-property-value").text(value);
		}else{
			$(".y-property-value").text("\""+value+"\"");
		}
	});

	//sample4
	sample4.drawElement({
		E:{
			x:0,
			y:0,
			background:"orange"
		},
		E2:{
			x:0,
			y:0,
			background:"orange",
			opacity:0.5
		}		
	});
	$(".origin-property-select").change(function(){
		sample4.element("E").cvss({
			origin:this.value
		});
		$(".origin-property-value").html(this.value)
	});

	//sample4
	sample5.drawElement({
		E:{
			background:"orange"
		}
	});
	$(".block-size-submit").click(sample5_func);
	$(".block-size-input").change(sample5_func);
	$(".block-size-btn").click(function(){
		var type=$(this).attr("data-type");
		sample5.element("E").cvss(type,$(this).html());

		var text=sample5.element("E").cvss("$"+type);
		$(".block-size-input[data-type="+type+"]").val(text);
	});
	function sample5_func(){
		var width=$(".block-size-input[data-type=width]").val();
		var height=$(".block-size-input[data-type=height]").val();

		sample5.element("E").cvss({
			width:width,
			height:height
		});
	}

	//sample6
	sample6.drawElement({
		E:{
			x:10,
			y:10,
			background:"skyblue"
		},
		E2:{
			y:10,
			type:"polygon",
			background:"skyblue",
			x:110,
			vertex:[[25,0],[0,100],[-25,0]]
		}
	});	
	$(".background-property-input").change(sample6_func)
	$(".background-property-submit").click(sample6_func)
	function sample6_func(){
		var value=$(".background-property-input").val();
		sample6.element("E").cvss("background",value);
		sample6.element("E2").cvss("background",value);
	}
	$(".background-property-btn").click(function(){
		$(".background-property-input").val($(this).html());
		sample6_func()
	});

	//sample7
	sample7.drawElement({
		E:{
			x:10,
			y:10,
			background:"skyblue",
			borderWidth:1
		},
		E2:{
			y:10,
			type:"polygon",
			background:"skyblue",
			x:110,
			borderWidth:1,
			vertex:[[25,0],[0,100],[-25,0]]
		}
	});
	$(".borderWidth-property-input").change(sample7_func)
	$(".borderWidth-property-submit").click(sample7_func)
	function sample7_func(){
		var width=$(".borderWidth-property-input").val();
		sample7.element("E").cvss({
			borderWidth:width,
		});
		sample7.element("E2").cvss({
			borderWidth:width
		});		
		$(".border-property-text").html(sample7.element("E2").cvss("border"))
	}
	$(".borderColor-property-btn").click(function(){
		var color=$(this).html();
		sample7.element("E").cvss({
			borderColor:color,
		});
		sample7.element("E2").cvss({
			borderColor:color,
		});	
		$(".border-property-text").html(sample7.element("E2").cvss("border"))
	});

	//samole8
	sample8.drawElement({
		E:{
			type:"block",
			width:"100%",
			height:"100%",
			background:"orange"
		}
	});
	var sample8_timer=setInterval(sample8_function,100);

	$(".opacity-property-btn").click(function(){
		if(sample8_timer){
			clearInterval(sample8_timer);
			sample8_timer=NaN;
			$(this).html("시작");
			$(this).addClass("btn-danger");
			return;
		}
		sample8_timer=setInterval(sample8_function,100);
		$(this).html("정지");
		$(this).removeClass("btn-danger");
	});
	function sample8_function(){
		var opacity=sample8.element("E").cvss("opacity")
		if(opacity<=0){
			var opacity=1;
		}
		sample8.element("E").cvss("opacity","0."+(opacity*10-1))

		$(".opacity-property-text").html(opacity)
	}

	//sample9
	sample9.drawElement({
		E:{
			x:"50%",
			y:"50%",
			origin:"50% 50%",
			background:"orange",
			rotateOriginX:"50%",
			rotateOriginY:"50%",
		}
	});
	var sample9_timer=setInterval(sample9_function,100);
	function sample9_function(){
		var rotate=sample9.element("E").cvss("rotate")
		sample9.element("E").cvss("rotate",rotate+0.1)
	}

	//sample10
	sample10.drawElement("object",{
	    width:480,
	    height:60,
	    onlyBaseElement:true,
	    background:"#aaa",
	    backgroundImageSrc:"./resource/img/sprite.jpg",
	    border:"1px solid #ddd",
	    rotate:-10,
	    rotateOriginX:"50%",
	    rotateOriginY:"50%"
	});
	sample10.element("object").hover(function(e,key){
	    this.element(key).cvss("border","1px solid red");
	    toggle*=-1;
	},function(e,key){
	    this.element(key).cvss("border","none");
	    toggle*=-1;
	});

	for (i=1; i<=4; i++) {
	    sample10.drawElement("sprite"+i,{
	    	baseElement:"object",
	    	x:10,
	    	y:30+210*(i-1),
	    	backgroundImageY:-60*(i-1)
	    });
	    sample10.drawElement("sprite"+i+"_moving",{
	    	baseElement:"object",
	    	x:10,
	    	y:110+210*(i-1),
	    	backgroundImageY:-60*(i-1)
	    });
	}
	setInterval(function(){spriteMotion("sprite1_moving",{width:60,height:0});},300);
	setInterval(function(){spriteMotion("sprite2_moving",{width:60,height:0});},300);
	setInterval(function(){spriteMotion("sprite3_moving",{width:60,height:0});},300);
	setInterval(function(){spriteMotion("sprite4_moving",{width:60,height:0});},300);

	var toggle=-1;
	function spriteMotion(key,sprite){
	    var elementInfo=sample10.element(key).getInfo();
	    if(elementInfo.backgroundImageX*toggle+sprite.width>=elementInfo.$backgroundImage.width){
	        sample10.element(key).cvss('backgroundImageX',0);
	        return 0;
	    }
	    sample10.element(key).cvss({backgroundImageX:"+="+toggle*sprite.width+"px"});
	}

	//sample11
	sample11.drawElement({
		E:{
			type:"polygon",
			y:10,
			vertex:[[100,0],[200,50],[300,100],[200,100]],
			background:"red",
			cursor:"pointer"
		}
	});
	$(".cursor-property-select").change(function(){
		sample11.element("E").cvss("cursor",this.value);
	});

	//sample12
	sample12.drawElement("E",{
		type:"polygon",
		vertex:[[100,10],[200,100]],
		x:10,
		y:10,
		background:"#aaa"
	});

	//sample13
	sample13.drawElement("E",{
		type:"polygon",
		vertex:[[100,10],[200,100]],
		x:10,
		y:10,
		border:"5px solid #000"
	});
	$(".lineJoin-property-select").change(function(){
		sample13.element("E").cvss("lineJoin",this.value)
	});

	//sample14
	sample14.drawElement("E",{
		type:"text",
		x:100,y:10,
		content:"재미나다!"
	});
	$(".text-property-input").change(function(){
		var type=$(this).attr("data-type");
		sample14.element("E").cvss(type,$(this).val());
	});
	//sample15
	sample15.drawElement("E",{
		type:"circle",
		background:"orange",
		x:"50%",y:"50%",
		r:100,
		border:"1px solid #000",
		clock:false
	});
	$(".circle-property-input").change(function(){
		var type=$(this).attr("data-type");
		if(type=="start" || type=="end"){
			var value=this.value*0.000000000000001
		}else if(type=="clock"){
			var value=this.checked
		}else{
			var value=this.value
		}
		sample15.element("E").cvss(type,value);
		$(".circle-property-text[data-type="+type+"]").html(String(value))
	});


	//sample16
	sample16.drawElement({
		base:{
			x:1,
			y:1,
			background:"red",
			border:"1px solid #000"
		},
		E:{
			baseElement:"base",
			x:100
		},
		E2:{
			baseStyleElement:"base",
			y:53,
			background:"#eee"
		}
	});

	//sample16
	sample17.drawElement({
		E:{
			type:"polygon",
			vertex:[[300,0],[100,50],[300,100],[0,100]],
			border:"1px solid #000"
		}
	});
	var event_type="click";
	sample17.element("E").click(sample17_function);

	function sample17_function(){
		sample17.element("E").cvss("background","red");
		$(".event-background").show();
		$(".event-background-text").html("red");
	}
	function sample17_function_2(){
		sample17.element("E").cvss("background","");
		$(".event-background").hide();
	}
	$(".event-select").change(function(){
		sample17.element("E").unbind(event_type);

		event_type=$(this).val();
		if(event_type=="hover"){
			sample17.element("E").hover(sample17_function,sample17_function_2)
			$(".event-hover-text").show();
		}else{
			sample17.element("E").bind(event_type,sample17_function);
			$(".event-hover-text").hide();
		}
		$(".event-text").html(event_type)
		sample17_function_2();
	});
	$(".event-reset").click(function(){
		sample17_function_2();
	})
});