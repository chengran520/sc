var selectData={
	loadProvinceData:function(){
			var province = commonUtils.get(WEB_ROOT+"/data/center/monitor/getProvince",null,false);
			if(province.flag){
				var html="<option  disabled=''  value=''  selected='selected'>-----省-----</option>";
				$.each(province.data,function(key,value){ 
					html+="<option value='" + value.addvcd + "'>"+ value.addvnm+"</option>'";
			   });
				 $("#province").html(html); 
			}	
		},
	loadCityData:function(addvcd1){
		 var city = commonUtils.get(WEB_ROOT+"/data/center/monitor/getCity",{"addvcd":addvcd1},false); 
		 if(city.flag){
			    var html="<option disabled=''  value=''  selected='selected'>-----市-----</option>";
				$.each(city.data,function(key,value){ 
					html+="<option value='" + value.addvcd + "'>"+ value.addvnm+"</option>'";    
	            });
			 $("#city").html(html); 
		}
	},
	loadDistrictData:function(addvcd2){
		 var district = commonUtils.get(WEB_ROOT+"/data/center/monitor/getDistrict",{"addvcd":addvcd2},false); 
		 if(district.flag){
			     var html="<option  disabled='' value=''   selected='selected'>-----县区-----</option>";
				$.each(district.data,function(key,value){ 
					html+="<option value='" + value.addvcd + "'>"+ value.addvnm+"</option>'";
			    });
				$("#district").html(html); 
		  }
	},
	loadCountryData:function(addvcd3){
		 var country = commonUtils.get(WEB_ROOT+"/data/center/monitor/getCountry",{"addvcd":addvcd3},false); 
		 if(country.flag){
			    var html="<option  disabled='' value=''   selected='selected'>-----乡镇-----</option>";
				$.each(country.data,function(key,value){ 
					html+="<option value='" + value.addvcd + "'>"+ value.addvnm+"</option>'";
			    });
				$("#country").html(html); 
		  }
	},
	loadVillageData:function(addvcd4){
		 var village = commonUtils.get(WEB_ROOT+"/data/center/monitor/getVillage",{"addvcd":addvcd4},false); 
		 if(village.flag){
			     var html="<option  disabled='' value=''   selected='selected'>-----村-----</option>";
				$.each(village.data,function(key,value){ 
					html+="<option value='" + value.addvcd + "'>"+ value.addvnm+"</option>'";
			    });
				$("#village").html(html); 
		  }
	}
}
$(function(){
    selectData.loadProvinceData();
	$("#province").click(function(){
		var addvcd1= $("#province").find("option:selected").val();
		selectData.loadCityData(addvcd1);
    });
	$("#city").click(function(){
		var addvcd2= $("#city").find("option:selected").val();
		 selectData.loadDistrictData(addvcd2);
    });
	$("#district").click(function(){
		var addvcd3= $("#district").find("option:selected").val();
		 selectData.loadCountryData(addvcd3);
    });
	$("#country").click(function(){
		var addvcd4= $("#country").find("option:selected").val();
		 selectData.loadVillageData(addvcd4);
    });
});