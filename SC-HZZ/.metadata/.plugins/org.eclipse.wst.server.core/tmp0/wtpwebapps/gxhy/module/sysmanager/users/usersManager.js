var userManager={
	data:null,
	loadData:function(opt){
		easyui_datagrid_util.fit=false;
		easyui_datagrid_util.singleSelect=true;
		easyui_datagrid_util.pageSize = 20;
		easyui_datagrid_util.create_datagrid_options("patrol_catalogUser", WEB_ROOT+ "/userManager/work/getUserList",userManager, opt);
	},
	loadSuccess:function(){
		var data=userManager.getRoles();
		userManager.optionRoles(data);
		userManager.getDepts();
		userManager.getJobs();
	},
	loadRiver:function(){
		var result= commonUtils.get(WEB_ROOT+"/hydro/river/riverDataInfo",null,null);
		var optionstring="";
		var data = result.data;
		if(data!=null){
			$.each(data,function(key,value){  
				 optionstring += "<option value="+this.rvCd+">"+this.rvNm+"</option>"; 
                $("#search").html(optionstring); 
			});
	    }
	},
	Query:function(adcd){
		var keyword = $("#keyword").val();
		var phone=$("#phone_query").val();
		var data = {'phone':phone,'keyword':keyword,'adcd':adcd};
		$('#patrol_catalogUser').datagrid('load',data); 
	},
	formatterIscheck:function(value, row, index){
		if(row.isCheck==1){
			return "是";
		}else{
			return "否";
		}
	},
	formatterDataTm:function(value, row, index){
		return formatter_date_utils.formatterStrTime(value,0,5);
	},
	saveUser:function(type){
		var data = $("#form_data_user").serializeArray();
		var userId = $("#userId").val();
		if(userId == null || userId == ''){
			layer.msg('用户编码为必填项!', {icon: 5});
			return;
		}
		var userName=$("#userName").val();
		if(userName == null || userName == ''){
			layer.msg('用户名称为必填项!', {icon: 5});
			return;
		}
		var myReg = /^[\u4e00-\u9fa5]+$/;
        if (!myReg.test(userName)) {
        	layer.msg('用户名称为中文!', {icon: 5});
        	return;
        }
        if(type==1){
        	 var userPassword=$("#userPassword").val();
             if(userPassword == null || userPassword ==""){
     			layer.msg('用户名密码为必填项!', {icon: 5});
     			return;
     		}
             
        }
       
		var userPhone=$("#userPhone").val();
		if(userPhone == null || userPhone ==""){
			layer.msg('手机号码为必填项!', {icon: 5});
			return;
		}
		var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;       
		if (!myreg.test(userPhone)){  
			layer.msg('请输入有效的手机号码!', {icon: 5});
			return;
         }
		//如果增加的话,否则 
		var deptId=$("#deptId option:selected").val();//部门
		var job=$("#job option:selected").val();//职务
		var province=$("#province").val();//省
		if(deptId == null || deptId == ""){
			layer.msg('请选择部门，确认后保存!', {icon: 5});
			return;
		}else if(job == null || job == ""){
			layer.msg('请填写职务，确认后保存!', {icon: 5});
			return;
		}else if(province == null || province == ""){
			layer.msg('请选择行政区，确认后保存!', {icon: 5});
			return;
		}
		//选择的河流
		var array=[];
		$("#search_to option").each(function(){ //遍历全部option
	        var river = $(this).val(); //获取option的内容
            array.push(river); //添加到数组中
	    });
		if(array != null){
			var riverUser=array.join(",");
			data.push({name:'river_select',value:riverUser});
		}
		//如果用户为增加的话判断角色是否为空
		if(type==1){
			var roleId=$("#roleId").val();	
			if(roleId==null||roleId==""){
				layer.msg('请选择相应角色，确认后保存!', {icon: 5});
				return;
			}
		}
    	if(type==2){
    		data.push({name:'userId',value: userId});
    	}
    	var resultData=commonUtils.post(WEB_ROOT+"/userManager/work/addUser",data,false,"保存");
    	if(resultData.data.num==1){	
			 layer.msg('保存成功！', {icon: 1});
			 $('#myModalAdd').modal('hide');
			 $('#patrol_catalogUser').datagrid('load');  
		}else{
			 layer.msg('保存失败！', {icon: 5});
			 $('#myModalAdd').modal('hide');
			 layer.close();
		}
	  },
	 formatterUser:function(value, row, index){
		var uuid=row.uuid;
		var userId=row.userId;
        var role =uuid+"," +userId;
        var html="<a style='color:#0066cc;' class='colorDetail' onclick='setRole(\""+userId+"\");'>角色</a>";
            html+="|<a style='color:#008B00;' class='colorUpdate'  onclick='userManager.updateUser(\""+uuid+"\")'>修改</a>|";
	        html+="<a  style='color:#9B30FF;' class='colorDelete'    onclick='userManager.deleteUser(\""+role+"\");'>删除</a>";
	        html+="|<a style='color:#FD5F3B;' class='colorDetail'  onclick='userManager.showPwd(\""+userId+"\");'>修改密码</a>|";
	        html+="<a  style='color:#FF1493;' class='colorDelete'    onclick='userManager.resetPwd(\""+userId+"\");'>重置密码</a>";
	        return html;
	},
	showPwd:function(id){
		$("#id-pwd").val(id);
		$("#oldPwd").val("");
		$("#newPwd").val("");
		$("#aglinPwd").val("");
		$("#myModalPwd").modal();
	},
	//修改用户密码
	upatePwd:function(){
		var data = $("#form-update-pwd").serializeArray();
		var op = $("#oldPwd").val();
		if(op == null || op == ""){
			layer.msg('请填写旧密码!', {icon: 5});
			return;
		}
		var nd = $("#newPwd").val();
		if(op == nd){
			layer.msg('新密码和旧密码一样!', {icon: 5});
			return;
		}
		if(nd == null || nd == ""){
			layer.msg('请填写新密码!', {icon: 5});
			return;
		}
		var ad = $("#aglinPwd").val();
		if(ad == null || ad == ""){
			layer.msg('请再次填写密码!', {icon: 5});
			return;
		}
		if(ad != nd){
			layer.msg('二次输入密码不一致!', {icon: 5});
			return;
		}  
		data.push({name:'userId',value: $("#id-pwd").val()});
		var res=commonUtils.post(WEB_ROOT+"/userManager/work/updatePwdUser",data,false,"删除");
   	 	if(res.flag){	
   	 	    if(res.data==1){	
				 layer.msg('更新成功！', {icon: 1});
				 $("#myModalPwd").modal('hide');
				 $('#patrol_catalogUser').datagrid('load');  
			 }else{
				 layer.msg('更新失败！', {icon: 5});
				 layer.close();
			 }
   	 	}
	},	
	resetPwd:function(userId){
		layer.alert('你确定要重置吗？', {
		    skin: 'layui-layer-molv' 
		    ,closeBtn: 1    
		     ,btn: ['确定','取消']
		     ,icon: 5  // icon
		     ,yes:function(){
		    	 var re=commonUtils.post(WEB_ROOT+"/userManager/work/resetPwd",{"userId":userId},false,"删除");
	        	 if(re.flag){
	     			if(re.data==1){	
	     				 layer.msg('更新成功！', {icon: 1});
	     				 $('#patrol_catalogUser').datagrid('load');  
	     			 }else{
	     				 layer.msg('更新失败！', {icon: 5});
	     				 layer.close();
	     			 }
	     		}     		    	 
		       }
			    ,btn2:function(){
			   	     layer.close();
			    }
	   });
		
	},
	//显示用户详情
	detailUser:function(id){
		 $("#myModalDetail").modal();
		 var result= commonUtils.post(WEB_ROOT+"/userManager/work/detailUser",{"uuid":id},null);
		 if(result.flag){		
			 formatValue("userId_detail",result.data.userId);
			 formatValue("userName_detail",result.data.userName);
			 formatValue("deptName_detail",result.data.deptNm);
			 formatValue("jobName_detail",result.data.jobName);
			 formatValue("roleName_detail",result.data.roleName);
			 formatValue("phone_detail",result.data.userPhone);
			 formatValue("addvnm_detail",result.data.addvnm); 
			 if(result.data.userSex==1){
				 formatValue("sex_detail","男");
			 }else{
				 formatValue("sex_detail","女");
			 }
			 formatValue("createTime_detail",formatter_date_utils.formatterStrTime(result.data.createTime,0,3));
			 formatValue("updateTime_detail",formatter_date_utils.formatterStrTime(result.data.updateTime,0,3));
			 var arr =result.data.river_select.split(',');
			 var trhtm="<tr>";
			 for(var i=0;i<arr.length;i++){
				   if(i%8==0&&i>0){
						trhtm+="</tr><tr>";	
					}
					trhtm+="<td style='width:70px;'>"+arr[i]+"</td>";
					
				
		         }           
			 }
			 $("#river_detail").html(trhtm);
	  },
	  deleteUser:function(role){
			var uuid=role.split(",")[0];
			var userId=role.split(",")[1];
			layer.alert('你确定要删除吗？', {
    		    skin: 'layui-layer-molv' 
    		    ,closeBtn: 1    
    		     ,btn: ['确定','取消']
    		     ,icon: 5  // icon
    		     ,yes:function(){
    	        	 var resultData=commonUtils.post(WEB_ROOT+"/userManager/work/deleteUser",{uuid:uuid,userId:userId},false,"删除");
    	        	 if(resultData.data>0){	
    					 layer.msg('删除成功！', {icon: 1});
    					 $('#patrol_catalogUser').datagrid('load');  
    				 }else{
    					 layer.msg('删除失败！', {icon: 5});
    					 layer.close();
    				 }      		    	 
    		       }
    			    ,btn2:function(){
    			   	     layer.close();
    			    }
    	   });
	  },
	 updateUser:function(id){
		 $("#myModalAdd").modal();
		 var result= commonUtils.post(WEB_ROOT+"/userManager/work/detailUser",{"uuid":id},null);
		   if(result.flag){
			    var data=result.data;
			    $("#stat_span").hide();
			    $("#userId").attr("disabled","disabled"); 
				$("#pwd").hide();
				$("#saveUser").hide();
				$("#updateUser1").show();
				$("#uuid").val(data.uuid);
				$("#userId").val(data.userId);
				$("#userName").val(data.userName);
				$("#isCheck").val(data.isCheck);
				$("#userPhone").val(data.userPhone);
				$("#userEmail").val(data.userEmail);
				var deptId=data.deptId;
				userManager.getDepts();
				//回显部门
			    $("#deptId option").each(function(){
       			   if($.trim($(this).val()) ==  $.trim(deptId)){
       			      $(this).attr('selected', 'selected');
	       	      }
		       	});	
				//回显职务
			    userManager.getJobs();
				$("#job option").each(function(){
       			   if($(this).val() ==data.job){
       			      $(this).attr('selected', 'selected');
	       	      }
		       	});					
				$("#roleDiv").hide();
				$("input[type=radio][name=userSex]").each(function() { 
         			  if($(this).val()==data.userSex){
         				 $(this).attr("checked", true); 
					 }
         		});
         		$("#userAddress").val(data.userAddress);
         		$("#stcd").each(function(){
         			   if($(this).val() === data.stcd){
         			      $(this).attr('selected', 'selected');
         			   }
         		});
				var addvcd=data.userAddvcd;
				var addvnm=data.addvnm;
				var leavl=data.leavl;
				if(leavl=="3"||leavl=="4"){
					 var addvcds="";
					 var htm="";
					var result= commonUtils.get(WEB_ROOT+"/userManager/work/getUserNextAdcds",{"addvcd":addvcd},null);
					 if(result.flag){
						 addvcds=result.data;
					 }
					if(leavl=="3"){
						  htm="<option  disabled='disabled' value=''   selected='selected'>-----乡镇-----</option>";
						}else if(leavl=="4"){
						  htm="<option  disabled='disabled' value=''   selected='selected'>-----村-----</option>";
						}else{}
					
						$.each(addvcds,function(i,v){
							htm+="<option value="+this.value+">"+this.text+"</option>";
						});
						if(leavl=="3"){
							$("#countryOption").remove();
							$("#country").html(htm);
						}else if(leavl=="4"){
							$("#villageOption").remove();
							$("#village").html(htm);
						}else{
							
						}
				}
				
				//由最下级找到市再找省
				var result1=commonUtils.get(WEB_ROOT+"/data/center/monitor/getPreCity",{"addvcd":addvcd},null);
				var paddvcd=result1.data[0];
				var paddvnm=result1.data[1];
				var caddvcd=result1.data[2];
				var caddvnm=result1.data[3];
				var dAddvcd=result1.data[4];
				var daddvnm=result1.data[5];
					if(paddvcd==null||paddvcd==undefined){//如果省不为空
						$("#province").val("");
					}else{//省不为空
						$("#province").val(paddvcd);
						if(caddvcd==null||caddvcd==undefined){//市为空
							$("#city").val("");
						}else{//市不为空
							selectData.loadCityData(paddvcd);
							$("#city").val(caddvcd);
							if(dAddvcd==null||dAddvcd==undefined){//县为空
								$("#district").val("");
							}else{
								selectData.loadDistrictData(caddvcd);//县不为空
								$("#district").val(dAddvcd);
							}
						}	
					}
					userManager.loadRiver();
					//右边添加选择的河流
					var brr;
					var objArr = [];
					if(data.river_ids != null){
						brr=data.river_ids.split(",");
					}
					if(data.river_select != null){
						var arr = data.river_select.split(",");
						for(var i = 0; i<arr.length; i++){
			                var obj = {};
			                obj.name = arr[i];
			                obj.id = brr[i];
			                objArr.push(obj);
			            }
					}
					var htm="";
					$.each(objArr,function(i,v){
						htm+="<option value="+this.id+">"+this.name+"</option>";
					});
					$("#search_to").html(htm);
					//将所有的河流放进数组中
					var array=[];
					var res= commonUtils.get(WEB_ROOT+"/hydro/river/riverDataInfo",null,null);
					var redata=res.data;
					if(redata!=null){
						$.each(redata,function(i,v){
							var Ar = {};
							Ar.name = this.rvNm;
							Ar.id = this.rvCd;
					        array.push(Ar); //添加到数组中
						});
						var arr3=[];
						for (key in array) {  
					        var stra = array[key];  
					        var count = 0;  
					        for(var j= 0; j < objArr.length; j++){  
					            var strb = objArr[j];  
					            if(stra.id == strb.id) {  
					                count++;  
					            }  
					        }  
					        if(count===0) {//表示数组1的这个值没有重复的，放到arr3列表中  
					            arr3.push(stra);  
					        }  
					    }  
						/*console.log( arr3.length);*/
					//将"#search"重新赋值
					var htm2="";
					for(var i=0;i<arr3.length-1;i++){
						htm2+="<option value="+arr3[i].id+">"+arr3[i].name+"</option>";
					}
					$("#search").html(htm2);  
				}
		   }
	    },
	    //部门
	    getDepts:function(){
	    	var result= commonUtils.get(WEB_ROOT+"/dept/work/getDeptList",null,null);
	    	 if(result.flag){
	    		 var html="<option  disabled='' value=''>-------------------------- 请选择  --------------------------</option>";
	    		 $.each(result.data,function(i,v){	
	 	    		html+="<option value="+this.deptId+">"+this.deptNm+"</option>";
	 	    	});
	    		 $("#deptId").html(html);
	    	 }
	    },
	  //部门
	    getJobs:function(){
	    	var result= commonUtils.get(WEB_ROOT+"/userManager/work/getJobList",null,null);
	    	 if(result.flag){
	    		 var html="<option  disabled='' value=''>-------------------------- 请选择  --------------------------</option>";
	    		 $.each(result.data,function(i,v){	
	 	    		html+="<option value="+this.value+">"+this.text+"</option>";
	 	    	});
	    		 $("#job").html(html);
	    	 }
	    },
	    //角色
	    getRoles:function(){
	    	 var result= commonUtils.get(WEB_ROOT+"/role/work/getRoleList",null,null);
	    	 if(result.flag){
	    		 return result.data;
	    	 }
	    },
	    optionRoles:function(data){
	    	var html="<option  disabled='' value=''>-------------------------- 请选择  --------------------------</option>";
	    	$.each(data,function(i,v){	
	    		html+="<option value="+this.roleId+">"+this.roleName+"</option>";
	    	 });
   		     $("#roleId").html(html);
	     },
	    updateRole:function(){
	    	var userId=$("#user_Id").val();
	    	var roleId=$("#role_Id").val();
	    	var roleName=$("#roleName").val();
	    	//更新角色
	    	if(roleName==""||roleName==undefined){
	    		layer.alert('请选择完整信息，确认后保存!', {
	    			 icon:5,
	    			 title: "提示"
	    		 });	
	    	}else{
	    		var result=commonUtils.post(WEB_ROOT+"/role/work/updateRole_User",{userId:userId,roleId:roleId},false,"保存");
		    	if(result.flag){
		    		if(result.data.str=="success"){
		    			 layer.msg('设置成功！', {icon: 1});
		    			 setTimeout(function(){location.href=WEB_ROOT+"/module/sysmanager/users/usersManager.jsp";},1000);
		    		}	
				}else{
			        senderMsg("请选择完整信息，确认后保存！", false);	
			    }
	    	}
	    	
	    }
   }

$(function(){
	var p = $(window).height();	
	var contextH =$("#headerUserdiv").height();
	var userH = $("#user_div_manager").height();
	//此处因easyui样式导致自适应高度加上头部后显示不出来，所以将window高度减去头部高度
	$("#div_user").height(p-contextH); 
	$("#div_users").height(p-contextH); 
	$("#patrol_catalogUser").height(p-contextH-userH); 
	$("#homeTree").height(p-contextH-userH-50); 
	//初始化加载用户数据
	userManager.loadData();
	
    //刷新
	$("#refreshUser").click(function(){
		userManager.loadData();
	});
	$(".modal-body").height(p * 0.78);
	//添加用户
	$("#add").click(function(){
		$("#myModalAdd").modal();
		$("#pwd").show();
		$("#stat_span").show();
		$('#userId').removeAttr("disabled"); 
		$('#form_data_user')[0].reset();
		$("#search_to option").remove();
		userManager.loadRiver();
		$("#roleId").val("");
		$("#job").val("");
		$("#deptId").val("");	
		$("#roleDiv").show();
	});
	//用户保存
	$("#saveUser").click(function(){
	   var type=1;
	  userManager.saveUser(type);
	});
	//修改
	$("#updateUser1").click(function(){
		var type=2;
		userManager.saveUser(type);
	});
	//选择角色
	$("#updateRole").click(function(){
		userManager.updateRole();
	});
	 $('.selectpicker').selectpicker({
        'selectedText': 'cat'
    });
	$('#keyword').bind('keypress',function(event){
        if(event.keyCode == "13") {
    		userManager.Query();
        }
    });
    $('#phone_query').bind('keypress',function(event){
        if(event.keyCode == "13"){
    		userManager.Query();
        }
    });
    //查询
    $("#query").click(function(){
    	userManager.Query();
    });
    $(".left-div").click(function(){
    	userManager.Query();
    })
    //用户导出
    $("#exportUsers").click(function(event) {
    	var keyword = $("#keyword").val();
		var phone=$("#phone_query").val();
		// 修改form中的action动作
		var url = WEB_ROOT+'/userManager/work/exportUsers?keyword='+keyword+'&phone='+phone;
		$("form").attr("action", url);
		// 提交表单
		$("form").submit();
	});
    
    $("#updatePwd-id").click(function(){
    	userManager.upatePwd();
    });
    
    //验证旧密码
    $("#oldPwd").blur(function(){
    	var userId=$("#id-pwd").val();
        var password=$(this).val();
        $.ajax({
            url:WEB_ROOT+ "/userManager/work/checkUserPwd",
            data:{"userId":userId,"password":password},     
            dataType: "json",
            type: "post",
            success:function(result){
                if(result.data==0){  
                	 layer.msg('原密码不正确！', {icon: 5});
                	 return;
                } 
            }                 
        });
    });
    
    
    //手机号验证是否已经存在
    $("#userPhone").blur(function(){
    	var userPhone=$("#userPhone").val();
        $.ajax({
            url:WEB_ROOT+ "/userManager/work/checkUserPhone",
            data:{"userPhone":userPhone},     
            dataType: "json",
            type: "post",
            success:function(result){
                if(result.data>0){  
                	 layer.msg('此手机号已被注册，请重新填写', {icon: 5});
                	 $("#userPhone").val("");
                	 return;
                } 
            }                 
        });
    });
});

//判断值是否为空，如果为空，为暂无
function  formatValue(id,value){
	if(value==null||value==""){
		document.getElementById(''+id+'').innerHTML="暂无";
	}else{
		document.getElementById(''+id+'').innerHTML=value;
	}
}

//导入文件
function importExp() {
    var formData = new FormData();
    var name = $("#upfile").val();
    formData.append("file",$("#upfile")[0].files[0]);
    formData.append("name",name);
    $.ajax({
        url : WEB_ROOT+"/import/importExcel",
        type : 'POST',
        async : false,
        data : formData,
        // 告诉jQuery不要去处理发送的数据
        processData : false,
        // 告诉jQuery不要去设置Content-Type请求头
        contentType : false,
        beforeSend:function(){
            console.log("正在进行，请稍候");
        },
        success : function(responseStr) {
            if(responseStr.data==1){
                alert("导入成功");
            }else{
                alert("导入失败");
            }
        }
    });
}
function download(){
    var url = WEB_ROOT+"/import/importTemplet";  
    $("form").attr("action", url);
	// 提交表单
	$("form").submit();
}
