var bittersMap=function(){var e=new google.maps.LatLng(25.080803,121.564737),t=new google.maps.LatLng(25.080803,121.564737),i=document.getElementById("map_canvas"),n={center:t,zoom:13,scrollwheel:!1,draggable:!1,disableDefaultUI:!0,mapTypeId:google.maps.MapTypeId.ROADMAP},a=new google.maps.Map(i,n),o='<div id="content"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading">Polydice, Inc.</h1><div id="bodyContent"<p>3F., No.32, Jihu Rd., Neihu Dist., Taipei City 11492</p></div></div>',s=new google.maps.InfoWindow({content:o,maxWidth:300}),d=new google.maps.Marker({position:e,map:a,title:"Polydice, Inc."});return{init:function(){a.set("styles",[{featureType:"landscape",elementType:"geometry",stylers:[{hue:"#ffff00"},{saturation:30},{lightness:10}]}]),s.open(a,d)}}}();bittersMap.init();
//# sourceMappingURL=./script-min.js.map