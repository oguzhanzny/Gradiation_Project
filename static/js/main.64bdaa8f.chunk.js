(this["webpackJsonpgraduation-project"]=this["webpackJsonpgraduation-project"]||[]).push([[0],{40:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},60:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},71:function(e){e.exports=JSON.parse("{}")},79:function(e,t){},81:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n.n(a),c=n(18),i=n.n(c),s=(n(54),n(12)),r=(n(55),n(49).a.initializeApp({apiKey:"AIzaSyDcP7Js2l9b6jsTe3bWs6kxNqs70-qMqhs",authDomain:"graduation-project-86023.firebaseapp.com",projectId:"graduation-project-86023",storageBucket:"graduation-project-86023.appspot.com",messagingSenderId:"1046852282632",appId:"1:1046852282632:web:c8fd09ebdd3ca25241e4bd",measurementId:"G-D1R0LEF16H"})),l=(n(60),n(3)),d=function(e){var t=e.email,n=e.password,a=e.setEmail,o=e.setPassword,c=e.handleLogin,i=e.handleSignUp,s=e.hasAccount,r=e.setHasAccount,d=e.emailError,u=e.passwordError;return Object(l.jsx)("section",{className:"login",children:Object(l.jsxs)("div",{className:"loginContainer",children:[Object(l.jsx)("label",{children:"Username"}),Object(l.jsx)("input",{type:"text",autoFocus:!0,required:!0,value:t,onChange:function(e){return a(e.target.value)}}),Object(l.jsx)("p",{className:"errorMsg",children:d}),Object(l.jsx)("label",{children:"Password"}),Object(l.jsx)("input",{type:"password",required:!0,value:n,onChange:function(e){return o(e.target.value)}}),Object(l.jsx)("p",{className:"errorMsg",children:u}),Object(l.jsx)("div",{className:"btnContainer",children:s?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{className:"purpleButton",onClick:c,children:"Sign In"}),Object(l.jsxs)("p",{children:["Don't have an account ?",Object(l.jsx)("span",{onClick:function(){r(!s)},children:"Sign Up"})]})]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{className:"purpleButton",onClick:i,children:"Sign Up"}),Object(l.jsxs)("p",{children:["Have an account ?",Object(l.jsx)("span",{onClick:function(){return r(!s)},children:"Sign In"})]})]})})]})})},u=n(24),b=(n(62),n.p+"static/media/LoadingGif.5b5d185a.gif"),j=(n(63),function(){return Object(l.jsx)("div",{style:{},className:"loadingContainer",children:Object(l.jsx)("img",{src:b,style:{marginTop:"50px"}})})}),p=(n(40),n(41),n(27)),f=n(38),g=n.n(f),h=n(45),O=n(33),m=n(28),y=(n(65),function(e){var t=e.panTo,n=e.setCordinate1,a=e.setCordinate2,o=e.type,c=e.onPositionSelect,i=e.onFinishSelect,s=e.clearOldPoint,r=e.setOrigin,d=e.setDestination,u=e.setLimit,b=Object(O.a)({requestOptions:{location:{lat:function(){return 43.65324},lng:function(){return-79.3832}},radius:2e5}}),j=b.ready,p=b.value,f=b.suggestions,y=f.status,x=f.data,v=b.setValue,C=b.clearSuggestions;return Object(l.jsx)("div",{className:"search",children:Object(l.jsxs)(m.a,{style:{zIndex:2},onSelect:function(){var e=Object(h.a)(g.a.mark((function e(l){var b,j,p,f;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(""),d(""),u(0),v(l,!1),C(),e.prev=5,e.next=8,Object(O.b)({address:l});case 8:return b=e.sent,e.next=11,Object(O.c)(b[0]);case 11:j=e.sent,p=j.lat,f=j.lng,"startPoint"===o?(s("start"),n({x:p,y:f}),c(p,f,"./logos/marker-green.png","start")):(s("finish"),a({x:p,y:f}),i(p,f,"./logos/marker-red.png","finish")),t({lat:p,lng:f}),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(5),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[5,18]])})));return function(t){return e.apply(this,arguments)}}(),children:[Object(l.jsx)(m.b,{style:{zIndex:2},value:p,onChange:function(e){v(e.target.value)},disabled:!j,placeholder:"Enter an Adress"}),Object(l.jsx)(m.e,{style:{zIndex:2},children:Object(l.jsx)(m.c,{style:{zIndex:2},children:"OK"===y&&x.map((function(e){var t=e.id,n=e.description;return Object(l.jsx)(m.d,{value:n},t)}))})})]})})}),x=function(e){var t=e.panTo,n=e.setCordinate1,a=e.clearOldPoint,o=e.onPositionSelect;return Object(l.jsx)("button",{className:"locate",onClick:function(){navigator.geolocation.getCurrentPosition((function(e){var c=e.coords.latitude,i=e.coords.longitude;a("start"),o(c,i,"./logos/marker-green.png","start"),t({lat:c,lng:i}),n({x:c,y:i})}),(function(){return null}))},children:Object(l.jsx)("img",{src:"./logos/compass.png",alt:"compass - locate me"})})},v=n(88),C=n(87),S=n(86),k=n(48),w=n(89),A=n(46),T=n.n(A),P=n(30),R=(n(71),["places"]),I={width:"100%",height:"92vh"},L={lat:43.653225,lng:-79.383186},E={styles:[{featureType:"all",elementType:"geometry.fill",stylers:[{weight:"2.00"}]},{featureType:"all",elementType:"geometry.stroke",stylers:[{color:"#9c9c9c"}]},{featureType:"all",elementType:"labels.text",stylers:[{visibility:"on"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#eeeeee"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#7b7b7b"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#46bcec"},{visibility:"on"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#c8d7d4"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#070707"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]}],disableDefaultUI:!0,zoomControl:!0},D={strokeColor:"#FF0000",strokeOpacity:.8,strokeWeight:2,fillColor:"#FF0000",fillOpacity:.1,clickable:!1,draggable:!1,editable:!1,visible:!1,radius:0,zIndex:1},N=[{lat:43.14506241157973,lng:-80.31427730859374,time:new Date(86400001),info:"Accident on Tanner Rd at Pennbrooke Ln."},{lat:43.321157725277914,lng:-80.75373043359374,time:new Date(86400002),info:"Accident on Houston Branch Rd at Providence Branch Ln."},{lat:42.92422789558916,lng:-80.96796383203124,time:new Date(86400003),info:"Accident on I-595 Westbound at Exit 4 / Pine Island Rd."}],F=["At TN-248/Peytonsville Rd/Exit 61 - Accident. Right lane blocked.","At Magic Mountain Pky - Accident. Hard shoulder blocked.","Restrictions due to accident on US-92 at Bethlehem Rd.","At Northwest Hwy/Exit 11 - Accident.","Accident on Fort Lowell Rd at Avenida del Clarin.","At I-287/W Oakland Ave - Accident.","Accident on Westpark Dr at 14th St.","Accident on CA-2 Southbound at Exit 13 I-5.","Incident on SIERRA AVE near LYTLE CREEK RD Expect delays.","Incident on I-94 WB near I-696 Drive with caution.","Lane blocked due to accident on I-285 Eastbound at Exit 29 Ashford Dunwoody Rd.","Accident on US-401 Main St Northbound at NC-42 NC 55 Hwy.","Accident on Chimney Rock Rd at US-90 Alt Main St.","At McLean Ave/Exit 3 - Accident. Left lane blocked.","Lane blocked due to accident on I-680 Northbound at Exit 53 CA-4.","Accident on I-26 Eastbound at Exit 213B Montague Ave.","Accident on Research Blvd Southbound at Pavilion Blvd.","At CA-22/Garden Grove Fwy - Accident.","Accident on 17 Mile Rd at Stout Ave.","Accident on I-90 Eastbound at Exit 48A."],B=function(e,t){return function(e,t){var n=(e.x+t.x)/2,a=(e.y+t.y)/2;return console.log("Orta Nokta \nX: ".concat(n," \nY: ").concat(a)),{lat:n,lng:a}}(e,t)},M=function(e){var t,n=e.closeRide,a=e.panTo,o=e.setCordinate1,c=e.setCordinate2,i=e.onPositionSelect,s=e.clearOldPoint,r=e.setOrigin,d=e.setDestination,u=e.setLimit,b=e.onFinishSelect,j=e.clearAllPoint,f=e.cordinate1,g=e.cordinate2,h=e.setCircleRender,O=e.setCircleCenter,m=e.changeRadius,A=e.onDataLoadShowMarker;return Object(l.jsx)(T.a,{children:Object(l.jsxs)(v.a,{className:"card",style:{opacity:.85,borderColor:"#603bbb !important",position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",zIndex:"1",border:"solid 5px #603bbb"},children:[Object(l.jsxs)(v.a.Header,{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[Object(l.jsx)("h1",{children:"Start Ride"}),Object(l.jsx)("button",{style:{color:"#603bbb",border:"0",backgroundColor:"rgba(255,0,0,0)",height:"20px",right:"12px",top:"0px",padding:"0px",fontWeight:"900"},onClick:function(){return n()},children:"X"})]}),Object(l.jsxs)(v.a.Body,{className:"m2",children:[Object(l.jsxs)(C.a.Group,{controlId:"formBasicEmail",children:[Object(l.jsx)(C.a.Label,{children:"Choose a starting location."}),Object(l.jsxs)(S.a,{children:[Object(l.jsx)(k.a,{sm:10,children:Object(l.jsx)(y,{panTo:a,type:"startPoint",setCordinate1:o,setCordinate2:c,onPositionSelect:i,clearOldPoint:s,setOrigin:r,setDestination:d,setLimit:u})}),Object(l.jsx)(k.a,{sm:2,style:{padding:"0px"},children:Object(l.jsx)(x,{setLimit:u,panTo:a,setCordinate1:o,clearOldPoint:s,onPositionSelect:i,setOrigin:r,setDestination:d})})]}),Object(l.jsx)(C.a.Text,{className:"text-muted",children:"Choose your starting location for driving"})]}),Object(l.jsxs)(C.a.Group,{controlId:"formBasicEmail",children:[Object(l.jsx)(C.a.Label,{children:"Choose destination location"}),Object(l.jsx)(y,{style:{margin:"20px",top:"3rem"},type:"endPoint",panTo:a,setCordinate1:o,setCordinate2:c,onFinishSelect:b,clearOldPoint:s,setOrigin:r,setDestination:d,setLimit:u}),Object(l.jsxs)(C.a.Text,{className:"text-muted",children:["Choose your destination for driving"," "]})]}),Object(l.jsx)(w.a,(t={clearAllPoint:j,variant:"primary",style:{backgroundColor:"#603bbb",borderColor:"#603bbb"},type:"submit",size:"lg"},Object(p.a)(t,"type","calculateDistance"),Object(p.a)(t,"block",!0),Object(p.a)(t,"clearOldPoint",s),Object(p.a)(t,"onClick",(function(){n(!0),j(),B(f,g),r({lat:parseFloat(f.x),lng:parseFloat(f.y)}),d({lat:parseFloat(g.x),lng:parseFloat(g.y)}),h(!0),m(0),m(437*function(e,t){var n=Math.hypot(e.x-t.x,e.y-t.y);return console.log("distance :",100*n),100*n}(f,g)),O(B(f,g)),A(function(e,t){console.table([e,t]);for(var n=[],a=0,o=0;o<20;o++){if(a++,e.x<t.x)var c=P.a.float(t.x,e.x);else c=P.a.float(e.x,t.x);if(e.y<t.y)var i=P.a.float(t.y,e.y);else i=P.a.float(e.y,t.y);n.push({lat:c,lng:i,time:new Date(864e5+a),info:"".concat(F[o])})}return console.log(n),n}(f,g))})),Object(p.a)(t,"children","Submit"),t))]})]})})},z=n(23),U=function(e){D.radius=e},W=function(e){var t=e.startRide,n=e.closeRide,c=e.setResponse,i=e.response,r=Object(z.g)({googleMapsApiKey:"AIzaSyAfnXHBS80WU5DFMjNhQu9Zb42EdV_41qQ",libraries:R}),d=r.isLoaded,b=r.loadError,p=o.a.useState([]),f=Object(s.a)(p,2),g=f[0],h=f[1],O=Object(a.useState)(!1),m=Object(s.a)(O,2),y=m[0],x=m[1],v=Object(a.useState)({}),C=Object(s.a)(v,2),S=C[0],k=C[1],w=o.a.useState(null),A=Object(s.a)(w,2),T=A[0],P=A[1],F=o.a.useState(""),B=Object(s.a)(F,2),W=B[0],H=B[1],q=Object(a.useState)({x:0,y:0}),G=Object(s.a)(q,2),K=G[0],J=G[1],V=Object(a.useState)({x:0,y:0}),X=Object(s.a)(V,2),Q=X[0],Y=X[1],Z=Object(a.useState)(""),_=Object(s.a)(Z,2),$=_[0],ee=_[1],te=Object(a.useState)(""),ne=Object(s.a)(te,2),ae=ne[0],oe=ne[1],ce=Object(a.useState)(0),ie=Object(s.a)(ce,2),se=ie[0],re=ie[1],le=o.a.useCallback((function(){h((function(){return[]}))}),[]),de=o.a.useCallback((function(e){h((function(t){return[].concat(Object(u.a)(t),[{lat:e.latLng.lat(),lng:e.latLng.lng(),time:new Date,info:""}])}))}),[]),ue=o.a.useCallback((function(e){h((function(t){return Object(u.a)(t).concat(e)}))}),[]),be=o.a.useCallback((function(e,t,n,a){h((function(o){return[].concat(Object(u.a)(o),[{lat:e,lng:t,time:new Date,info:"".concat(a," Point"),url:n||"./logos/marker-green.png",type:a}])})),console.log(a,e,t)}),[]),je=o.a.useCallback((function(e,t,n,a){be(e,t,n,a)}),[]),pe=o.a.useRef(),fe=o.a.useCallback((function(e){pe.current=e,ue(N)}),[]),ge=o.a.useCallback((function(e){var t=e.lat,n=e.lng,a=e.zoom;pe.current.panTo({lat:t,lng:n}),pe.current.setZoom(a||10)}));return b?"Error loading Maps":d?Object(l.jsxs)("div",{children:[!!t&&Object(l.jsx)(M,{onDataLoadShowMarker:ue,closeRide:n,panTo:ge,setCordinate1:J,setCordinate2:Y,onPositionSelect:be,clearOldPoint:function(e){console.log(g.map((function(e){return e.type})));var t=g.filter((function(t){return t.type!==e}));console.log(t),h((function(){return Object(u.a)(t)}))},setOrigin:oe,setDestination:ee,setLimit:re,onFinishSelect:je,clearAllPoint:le,cordinate1:K,cordinate2:Q,setCircleRender:x,setCircleCenter:k,changeRadius:U}),Object(l.jsxs)(z.d,{mapContainerStyle:I,zoom:8,center:L,options:E,onClick:de,onLoad:fe,children:[g.map((function(e){return Object(l.jsx)(z.f,{animation:window.google.maps.Animation.DROP,position:{lat:e.lat,lng:e.lng},icon:{url:e.url||"./logos/crash.png",scaledSize:new window.google.maps.Size(32,32),origin:new window.google.maps.Point(0,0),anchor:new window.google.maps.Point(15,15)},onClick:function(){H(e.info),P(e)}},e.time.toISOString())})),T?Object(l.jsx)(z.e,{position:{lat:T.lat,lng:T.lng},onCloseClick:function(){P(null)},children:Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Potanciel Crash"}),Object(l.jsx)("p",{children:W})]})}):null,""!==$&&""!==ae&&Object(l.jsx)(z.c,{options:{destination:$,origin:ae,travelMode:"DRIVING"},callback:function(e){console.log(e),null!==e&&se<2&&(re(se+1),console.log(se),"OK"===e.status?c(e):console.log("response: ",e))},onLoad:function(e){console.log("DirectionsService onLoad directionsService: ",e)},onUnmount:function(e){console.log("DirectionsService onUnmount directionsService: ",e)}}),null!==i&&Object(l.jsx)(z.b,{options:{directions:i},onLoad:function(e){console.log("DirectionsRenderer onLoad directionsRenderer: ",e)},onUnmount:function(e){console.log("DirectionsRenderer onUnmount directionsRenderer: ",e)}}),y&&Object(l.jsx)(z.a,{center:S,options:D})]})]}):Object(l.jsx)(j,{})},H=(n(81),function(e){var t=e.handleLogOut,n=Object(a.useState)(!0),o=Object(s.a)(n,2),c=o[0],i=o[1],r=Object(a.useState)(null),d=Object(s.a)(r,2),u=d[0],b=d[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("section",{className:"hero",children:[Object(l.jsxs)("nav",{children:[Object(l.jsxs)("div",{className:"cont",children:[Object(l.jsx)("h2",{children:"Welcome"}),Object(l.jsx)("button",{className:"purpleButton",children:"Map"}),Object(l.jsx)("button",{className:"purpleButton",onClick:function(){i(!0)},children:"Start"})]}),Object(l.jsx)("div",{className:"cont right",children:Object(l.jsx)("button",{className:"purpleButton",onClick:t,children:"Logout"})})]}),Object(l.jsx)(W,{startRide:c,closeRide:function(){i(!1)},setStartRide:i,response:u,setResponse:b})]})})}),q=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),i=Object(s.a)(c,2),u=i[0],b=i[1],j=Object(a.useState)(""),p=Object(s.a)(j,2),f=p[0],g=p[1],h=Object(a.useState)(""),O=Object(s.a)(h,2),m=O[0],y=O[1],x=Object(a.useState)(""),v=Object(s.a)(x,2),C=v[0],S=v[1],k=Object(a.useState)(!1),w=Object(s.a)(k,2),A=w[0],T=w[1],P=function(){y(""),S("")},R=function(){r.auth().onAuthStateChanged((function(e){e?(b(""),g(""),o(e)):o("")}))};return Object(a.useEffect)((function(){R()}),[R]),Object(l.jsx)("div",{className:"App",children:n?Object(l.jsx)(H,{handleLogOut:function(){r.auth().signOut()}}):Object(l.jsx)(d,{email:u,password:f,setEmail:b,setPassword:g,handleLogin:function(){P(),r.auth().signInWithEmailAndPassword(u,f).catch((function(e){switch(e.code){case"auth/invalid-email":case"auth/user-disabled":case"auth/user-not-found":y(e.message);break;case"auth/wrong-password":S(e.message)}}))},handleSignUp:function(){P(),r.auth().createUserWithEmailAndPassword(u,f).catch((function(e){switch(e.code){case"auth/email-already-in-use":case"auth/invalid-email":y(e.message);break;case"auth/week-password":S(e.message)}}))},setHasAccount:T,hasAccount:A,emailError:m,passwordError:C})})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,90)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),o(e),c(e),i(e)}))};n(82);i.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(q,{})}),document.getElementById("root")),G()}},[[83,1,2]]]);
//# sourceMappingURL=main.64bdaa8f.chunk.js.map