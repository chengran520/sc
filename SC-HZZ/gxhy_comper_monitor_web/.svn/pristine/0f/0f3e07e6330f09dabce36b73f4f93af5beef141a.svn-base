var TiandtData = {
	rvData:[],
	data:[],
	adData:null,
	quaData:null,
	showDataDiv:function(tp){
		var data = this.data;
		var html = "<ul class='well' id='well_div' style='overflow: auto;height: 94%;margin: 5px auto 0;'>";
		if(data.length > 0){
			for(var i = 0 ;i < data.length;i++){
				if(tp == 0){
					if(data[i].sttp == 'RR'){
						html += "<li><div><span style='display:none' id='rv_stcd'  title='"+data[i].sttp+"'>"+data[i].rsCd+"</span><span class='colorGreen'>"+data[i].rsName+"</span><div style='clear: both;'></div>";
						html += "<p class='view_span_defalut'>站点位置："+(data[i].stlc == null ? "暂无":data[i].stlc)+"</p><p class='view_span_defalut'>总库容："+(data[i].totCap == null ? "暂无":(data[i].totCap)+"万m³")+"</p></div>";
						html += "</li>";
					}else if (data[i].sttp == 'ST'){
						html += "<li><div><span style='display:none' id='rv_stcd'  title='"+data[i].sttp+"'>"+data[i].damcd+"</span><span class='colorGreen'>"+data[i].damname+"</span><div style='clear: both;'></div>";
						html += "<p class='view_span_defalut'>站点位置："+(data[i].stlc == null ? "暂无":data[i].stlc)+"</p><p class='view_span_defalut'>总库容："+(data[i].xhst == null ? "暂无":(data[i].xhst)+"万m³")+"</p></div>";
						html += "</li>";
					}else{
					
						html += "<li><div><span style='display:none' id='rv_stcd'>"+data[i].rvCd+"</span><span class='colorGreen'>"+data[i].rvNm+"</span><div style='clear: both;'></div>";
						html += "<p class='view_span_defalut'>上级河流："+(data[i].prvNm == null ? "暂无":data[i].prvNm)+"</p><p class='view_span_defalut'>河流长度："+(data[i].rvlt == null ? "暂无":(data[i].rvlt)+"km")+"</p></div>";
						html += "</li>";
					}
				}else if(tp == 1){
					var sttp = data[i].sttp;
					var img="";
					if(sttp == 'SZ'){
						img="shuiz.png";
					}else if(sttp == 'SP'){
						img="video.png";
					}else if(sttp == 'SY'){
						img="dbsyd.png";
					}else if(sttp == 'ZZ' || sttp == 'ZQ'){
						img="sk1.png";
					}else if(sttp == 'PP'){
						img = "pp_0.png";
					}
					html += "<li><span><img style='width:13px;height:13px;' src="+WEB_ROOT+"/common/images/river/"+img+">";
					html += "</span><div><span style='display:none' id='stcd' title='"+sttp+"'>"+data[i].stcd+"</span><span class='colorBlack'>"+data[i].stnm+"</span><div style='clear: both;'></div></li>";					
				}else{
					
				}
			}
		}else{
			if(tp == 0){				
				html += "<li>当前暂无河流信息</li>";
			}else{
				html += "<li>当前暂无站点信息</li>";
			}
		}
		html += "</ul>";
		$("#stationList_defaultView").html(html);
	},
	//获取河道信息
	initData:function(key,isTp){
		this.data = [];
		$("#inpt_query").show();
		$("#all_div").css("top","40px");
		//isTp:0 查询河流，1查询测站，3查询行政区
		if(isTp == 0){
			console.log(key);
			//获取河流
			var data = {'rvNm':key};
			var reulst = commonUtils.get(WEB_ROOT+"/data/monitor/riverDataInfo",data,false);
			if(reulst.flag){
				 for(var i = 0 ;i < reulst.data.length;i++){
					 this.data.push(reulst.data[i]);
				 }
				 this.rvData= reulst.data;
			}
			//获取山塘
			var dataST = {'keyword':key};
			var reulstST = commonUtils.get(WEB_ROOT+ "/data/pool/getPools",dataST,false);
			if(reulstST.flag){
				 for(var i = 0 ;i < reulstST.data.length;i++){
					 this.data.push(reulstST.data[i]);
				 }
			}
			//获取水库
			var dataRR = {'keyword':key};
			var reulstRR = commonUtils.get(WEB_ROOT+ "/data/reservoir/getRvvrs",dataRR,false);
			if(reulstRR.flag){
				 for(var i = 0 ;i < reulstRR.data.length;i++){
					 this.data.push(reulstRR.data[i]);
				 }
			}
			/*this.data.sort( function(x, y) {
				if (x % 2 ==0) return 1;
				if (x % 2 !=0) return -1;
			});
			this.rvData.sort( function(x, y) {
				if (x % 2 ==0) return 1;
				if (x % 2 !=0) return -1;
			});*/
			if(this.data && this.rvData){
				this.showDataDiv(isTp);
			}
			var adReultst = commonUtils.get(WEB_ROOT+"/data/monitor/getUserAdcdRiver",null,false);
			if(adReultst.flag){
				this.adData = adReultst.data;
			}
		}else if (isTp == 1){
			this.data = [];
			var data = {"stnm":key};
			var reulst = commonUtils.get(WEB_ROOT+"/hydro/stbprp/getStbprpInfo",data,false);
			if(reulst.flag){
				 var stbprpData = reulst.data.stbprp;
				 for(var i = 0 ;i < stbprpData.length;i++){
					 if(stbprpData[i].sttp != 'ST' &&  stbprpData[i].sttp != 'RR'){
						 this.data.push(stbprpData[i]);
					 }
				 }
				this.showDataDiv(isTp);
			}
		}else{
			$("#inpt_query").hide();
			$("#all_div").css("top","0px");
			var data = this.rvData;
			var html ="";
			var div = '<div class="more_show_div actice" id="rvInfo">河流网络</div><div class="more_show_div" id="adInfo">行政区域</div><div class="more_show_div" id="ztInfo">一河一档</div></div>';
			if(data.length > 0){
				for(var i = 0 ;i < data.length;i++){
					html+='<span class="more_span">'+data[i].rvNm+'</span>';
				}
			}else{
				html += "<li>当前暂无河流网络信息</li>";
			}
			this.inintLeftMore(html,div);
			$("#more_div").css("margin-left","6px");
			$(".more_span").css({"width":"48%","line-height":"3em","display": "inline-block","color":"#0099ff"});
			$(".more_show_div").css("margin-left","0px");
			$(".more_slgz_div").css("margin-left","0px");
		 	$(".well_li").css({"cursor":"initial","padding":" 10px 0px","height":"98%","border":"0"});
		}
	},
	inintLeftMore:function(opt,div){
		var html = "<ul class='well' id='well_div'>";
		html+='<li class="well_li" ><div  id="more_div" class="moreDiv_well">';
		html+=div;
		html+='<div>';
		html+=opt;
		html+='</div></li>';
//		html+='<li class="well_li" id="more_well_li"><div class="more_slgz_div">一河一策</div><div><div class="more_glshow headr" style=""><img  style="position: inherit;" class="more_img" src="'+WEB_ROOT+'/common/images/river/sk.png"><p class="more_p1">121座</p><p style="padding: 17px 0 0 14px;">大型水库</p></div>';
//		html+='<div class="more_glshow headr glscor1" style=""><img class="more_img" style="position: inherit;" src="'+WEB_ROOT+'/common/images/river/sk.png"><p class="more_p1">198座</p><p style="padding: 17px 0 0 14px;">小型水库</p></div>'
//		html+='<div class="more_glshow headr glscor2" style=""><img class="more_img" style="position: inherit;" src="'+WEB_ROOT+'/common/images/river/hddm.png"><p class="more_p1">59段</p><p style="padding: 17px 0 0 14px;">河道断面</p></div>'
//		html+='<div class="more_glshow glscor1 " style=""><img class="more_img"  style="position: inherit;" src="'+WEB_ROOT+'/common/images/river/hdxx.png"><p class="more_p1" >78条</p><p style="padding: 17px 0 0 25px;">河&nbsp;&nbsp;段</p></div>'
//		html+='<div class="more_glshow glscor2" style=""><img class="more_img"  style="position: inherit;" src="'+WEB_ROOT+'/common/images/river/hl.png"><p class="more_p1">12条</p><p style="padding: 17px 0 0 25px;">河&nbsp;&nbsp;流</p></div>'
//		html+='<div class="more_glshow glscor3" style=""><img class="more_img" style="position: inherit;" src="'+WEB_ROOT+'/common/images/river/pwk.png"><p class="more_p1">68个</p><p style="padding: 17px 0 0 22px;">排污口</p></div>'
//		html+='<div class="more_glshow glscor1" style=""><img class="more_img"  style="position: inherit;"src="'+WEB_ROOT+'/common/images/river/gsgc.png"><p class="more_p1">355座</p><p style="padding: 17px 0 0 14px;">供水工程</p></div>'
//		html+='<div class="more_glshow glscor3" style=""><img class="more_img"  style="position: inherit;"src="'+WEB_ROOT+'/common/images/river/gq.png"><p class="more_p1">223座</p><p style="padding: 17px 0 0 14px;">灌区工程</p></div>'
//		html+='<div class="more_glshow" style=""><img class="more_img" style="position: inherit;" src="'+WEB_ROOT+'/common/images/river/syd.png"><p class="more_p1">26座</p><p style="padding: 17px 0 0 22px;">水源地</p></div>'
//		html+='<div class="more_glshow glscor3" style=""><img class="more_img" style="position: inherit;" src="'+WEB_ROOT+'/common/images/river/sk.png"><p class="more_p1">108座</p><p style="padding: 17px 0 0 25px;">泵&nbsp;&nbsp;站</p></div>'
//		html+='<div class="more_glshow" style=""><img class="more_img" style="position: inherit;" src="'+WEB_ROOT+'/common/images/river/qsk.png"><p class="more_p1">38个</p><p style="padding: 17px 0 0 14px;">取水口</p></div>'
//		html+='<div class="more_glshow glscor2" style=""><img class="more_img"  style="position: inherit;"src="'+WEB_ROOT+'/common/images/river/ntqs.png"><p class="more_p1">12个</p><p style="padding: 17px 0 0 14px;">农田供水</p></div></div></li>'
		html += "</ul>";
		$("#stationList_defaultView").html(html);
	}/*,
	animatePost:function(rvNm){

		$("#modalAnimate").modal();
		$("#animate_ModalLabel").html(rvNm+" 全景图");
		var camera, scene, renderer,w,h;
		var geometry, material, mesh;
		var target = new THREE.Vector3();

		var lon = 90, lat = 0;
		var phi = 0, theta = 0;

		var touchX, touchY;
		
		init();
		animate();
		function init() {
			h = $("#panorama_model").height();  
			w = $("#panorama_model").width();
			sizeW = window.innerWidth;
			sizeH = window.innerHeight;
			
			camera = new THREE.PerspectiveCamera( 45, w/ h, 1, 2000 );

			scene = new THREE.Scene();

			var sides = [
				{
					url: 'images/river_01/posx.jpg',
					position: [ -512, 0, 0 ],
					rotation: [ 0, Math.PI / 2, 0 ]
				},
				{
					url: 'images/river_01/negx.jpg',
					position: [ 512, 0, 0 ],
					rotation: [ 0, -Math.PI / 2, 0 ]
				},
				{
					url: 'images/river_01/posy.jpg',
					position: [ 0,  512, 0 ],
					rotation: [ Math.PI / 2, 0, Math.PI ]
				},
				{
					url: 'images/river_01/negy.jpg',
					position: [ 0, -512, 0 ],
					rotation: [ - Math.PI / 2, 0, Math.PI ]
				},
				{
					url: 'images/river_01/posz.jpg',
					position: [ 0, 0,  512 ],
					rotation: [ 0, Math.PI, 0 ]
				},
				{
					url: 'images/river_01/negz.jpg',
					position: [ 0, 0, -512 ],
					rotation: [ 0, 0, 0 ]
				}
			];

			for ( var i = 0; i < sides.length; i ++ ) {

				var side = sides[ i ];

				var element = document.createElement( 'img' );
				element.width = 1026; // 2 pixels extra to close the gap.
				element.src = side.url;

				var object = new THREE.CSS3DObject( element );
				object.position.fromArray( side.position );
				object.rotation.fromArray( side.rotation );
				scene.add( object );

			}
			$("#panorama_model").empty();
			var element=document.getElementById("panorama_model");  
			renderer = new THREE.CSS3DRenderer();
			renderer.setSize( w, h );
	        element.appendChild(renderer.domElement);
//				document.body.appendChild( renderer.domElement );

			document.addEventListener( 'mousedown', onDocumentMouseDown, false );
			document.addEventListener( 'wheel', onDocumentMouseWheel, false );

			document.addEventListener( 'touchstart', onDocumentTouchStart, false );
			document.addEventListener( 'touchmove', onDocumentTouchMove, false );

			window.addEventListener( 'resize', onWindowResize, false );

		}

		function onWindowResize() {
			
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();

			renderer.setSize(w, h);

		}

		function onDocumentMouseDown( event ) {

			event.preventDefault();

			document.addEventListener( 'mousemove', onDocumentMouseMove, false );
			document.addEventListener( 'mouseup', onDocumentMouseUp, false );

		}

		function onDocumentMouseMove( event ) {

			var movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
			var movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;

			lon -= movementX * 0.1;
			lat += movementY * 0.1;

		}

		function onDocumentMouseUp( event ) {

			document.removeEventListener( 'mousemove', onDocumentMouseMove );
			document.removeEventListener( 'mouseup', onDocumentMouseUp );

		}

		function onDocumentMouseWheel( event ) {

			var fov = camera.fov + event.deltaY * 0.05;

			camera.fov = THREE.Math.clamp( fov, 10, 75 );

			camera.updateProjectionMatrix();

		}

		function onDocumentTouchStart( event ) {

			event.preventDefault();

			var touch = event.touches[ 0 ];

			touchX = touch.screenX;
			touchY = touch.screenY;

		}

		function onDocumentTouchMove( event ) {

			event.preventDefault();

			var touch = event.touches[ 0 ];

			lon -= ( touch.screenX - touchX ) * 0.1;
			lat += ( touch.screenY - touchY ) * 0.1;

			touchX = touch.screenX;
			touchY = touch.screenY;

		}

		function animate() {

			requestAnimationFrame( animate );

			lon +=  0.1;
			lat = Math.max( - 85, Math.min( 85, lat ) );
			phi = THREE.Math.degToRad( 90 - lat );
			theta = THREE.Math.degToRad( lon );

			target.x = Math.sin( phi ) * Math.cos( theta );
			target.y = Math.cos( phi );
			target.z = Math.sin( phi ) * Math.sin( theta );

			camera.lookAt( target );

			renderer.render( scene, camera );

		}
	}*/
}