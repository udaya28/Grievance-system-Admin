(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[0],{144:function(e,t,n){},146:function(e,t,n){},147:function(e,t,n){},165:function(e,t,n){},172:function(e,t,n){},173:function(e,t,n){},174:function(e,t,n){},175:function(e,t,n){},176:function(e,t,n){},212:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),i=n.n(c),r=n(12),s=n.n(r),j=(n(144),n(36)),l=n.n(j),o=n(51),d=n(48),b=n(13),x=(n(146),n(261)),O=(n(147),n(49)),u=n.n(O),h=n(35),p=n.n(h),m=n(37),f=n(15),g=n(30),v=n(259),y=n(260),C=n(262),w=i.a.createContext({}),k=i.a.createContext({}),N=i.a.createContext({}),S=i.a.createContext([]),A=(n(165),n(109)),P=n.n(A),I=n(110),T=n.n(I),D=n(252),G=n(244),F=n(251),W=n(249),B=n(250),M=n(248),z=function(e){var t=e.SetOpen,n=e.handleClose,c=e.title,i=e.content,r=e.handleConfirm,s=e.confirmButtonColorSecondary;return Object(a.jsx)("div",{children:Object(a.jsxs)(G.a,{open:t,onClose:n,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(a.jsx)(M.a,{id:"alert-dialog-title",children:c}),""!==i&&Object(a.jsx)(W.a,{children:Object(a.jsx)(B.a,{id:"alert-dialog-description",children:i})}),Object(a.jsxs)(F.a,{children:[Object(a.jsx)(D.a,{onClick:n,variant:"text",color:"primary",style:{color:"#333333"},children:"Cancel"}),Object(a.jsx)(D.a,{onClick:r,variant:"contained",color:s?"secondary":"primary",autoFocus:!0,children:"Confirm"})]})]})})},E=n(269),U=n(253),q=n(254),H=n(255),R=n(256),L=n(100),Y=n.n(L),J=n(108),V=n.n(J),K=n(102),Q=n.n(K),X=n(101),Z=n.n(X),$=n(103),_=n.n($),ee=n(104),te=n.n(ee),ne=n(257),ae=n(105),ce=n.n(ae),ie=n(106),re=n.n(ie),se=n(107),je=n.n(se),le=function(e){var t=e.setOpenDrawer,n=Object(c.useState)(null),i=Object(b.a)(n,2),r=i[0],s=i[1],j=Object(c.useState)(!0),l=Object(b.a)(j,2),o=l[0],d=l[1],x=function(e){s(e),t(!1)};return Object(a.jsx)("div",{style:{width:"240px"},children:Object(a.jsxs)(U.a,{children:[Object(a.jsx)(m.b,{to:"/Grievance-system-Admin/",children:Object(a.jsxs)(q.a,{button:!0,selected:0===r,onClick:function(){return x(0)},children:[Object(a.jsx)(H.a,{children:Object(a.jsx)(Y.a,{})}),Object(a.jsx)(R.a,{primary:"Complaints"})]})}),Object(a.jsx)(m.b,{to:"/Grievance-system-Admin/dashboard",children:Object(a.jsxs)(q.a,{button:!0,selected:1===r,onClick:function(){return x(1)},children:[Object(a.jsx)(H.a,{children:Object(a.jsx)(Z.a,{})}),Object(a.jsx)(R.a,{primary:"Dashboard"})]})}),Object(a.jsxs)(q.a,{button:!0,selected:2===r,onClick:function(){d(!o)},children:[Object(a.jsx)(H.a,{children:Object(a.jsx)(Q.a,{})}),Object(a.jsx)(R.a,{primary:"Student"}),o?Object(a.jsx)(_.a,{}):Object(a.jsx)(te.a,{})]}),Object(a.jsx)(ne.a,{in:o,timeout:"auto",unmountOnExit:!0,children:Object(a.jsxs)(U.a,{component:"div",disablePadding:!0,style:{paddingLeft:"32px"},children:[Object(a.jsx)(m.b,{to:"/Grievance-system-Admin/create-student",children:Object(a.jsxs)(q.a,{button:!0,selected:3===r,onClick:function(){return x(3)},children:[Object(a.jsx)(H.a,{children:Object(a.jsx)(ce.a,{})}),Object(a.jsx)(R.a,{primary:"Create"})]})}),Object(a.jsx)(m.b,{to:"/Grievance-system-Admin/update-student",children:Object(a.jsxs)(q.a,{button:!0,selected:4===r,onClick:function(){return x(4)},children:[Object(a.jsx)(H.a,{children:Object(a.jsx)(re.a,{})}),Object(a.jsx)(R.a,{primary:"Update"})]})}),Object(a.jsx)(m.b,{to:"/Grievance-system-Admin/delete-student",children:Object(a.jsxs)(q.a,{button:!0,selected:5===r,onClick:function(){return x(5)},children:[Object(a.jsx)(H.a,{children:Object(a.jsx)(je.a,{})}),Object(a.jsx)(R.a,{primary:"Delete"})]})})]})}),Object(a.jsx)(m.b,{to:"/Grievance-system-Admin/profile",children:Object(a.jsxs)(q.a,{button:!0,selected:6===r,onClick:function(){return x(6)},children:[Object(a.jsx)(H.a,{children:Object(a.jsx)(V.a,{})}),Object(a.jsx)(R.a,{primary:"Profile"})]})})]})})},oe=n(258),de=function(){var e=Object(c.useContext)(w),t=Object(c.useState)(!1),n=Object(b.a)(t,2),i=n[0],r=n[1],s=function(){r(!0)},j=Object(c.useState)(!1),l=Object(b.a)(j,2),o=l[0],d=l[1],O=Object(oe.a)((function(e){var t;return{drawerPaper:(t={marginTop:"56px"},Object(g.a)(t,e.breakpoints.up("md"),{marginTop:"64px"}),Object(g.a)(t,"height","100%"),t)}}))();return Object(a.jsxs)(v.a,{position:"fixed",color:"primary",children:[Object(a.jsx)(y.a,{children:Object(a.jsxs)(x.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",children:[Object(a.jsx)(x.a,{item:!0,children:Object(a.jsx)(C.a,{onClick:function(){return d(!0)},children:Object(a.jsx)(P.a,{className:"white"})})}),Object(a.jsx)(x.a,{item:!0,children:Object(a.jsx)("h3",{className:"mon heading white",children:"VCET"})}),Object(a.jsx)(x.a,{item:!0,children:Object(a.jsx)(x.a,{container:!0,direction:"row",alignItems:"center",children:Object(a.jsx)(D.a,{endIcon:Object(a.jsx)(T.a,{className:"white"}),onClick:function(){s()},children:Object(a.jsx)("h5",{className:"mon white",children:"Logout"})})})})]})}),Object(a.jsx)(z,{SetOpen:i,handleClose:function(){r(!1)},title:"Confirm",content:"Are you sure you want to logout?",handleConfirm:function(){p.a.remove("token"),e(!1)},confirmButtonColorSecondary:!0}),Object(a.jsx)(E.a,{open:o,onClose:function(){return d(!1)},classes:{paper:O.drawerPaper},children:Object(a.jsx)(le,{setOpenDrawer:d})})]})},be=n(54),xe=function(){return Object(a.jsx)(v.a,{position:"relative",style:{top:"auto",bottom:0},color:"primary",children:Object(a.jsxs)(x.a,{container:!0,justify:"space-between",style:{padding:"10px 5px"},children:[Object(a.jsx)(x.a,{item:!0,sm:6,xs:12,children:Object(a.jsx)(be.a,{variant:"caption",children:"Copyright \xa9 2021"})}),Object(a.jsx)(x.a,{item:!0,sm:6,xs:12,children:Object(a.jsx)(be.a,{variant:"caption",children:"Developed By Udaya with \u2764\ufe0f"})})]})})},Oe=(n(172),n(71)),ue=n.n(Oe),he=function(e){var t=e.setOpenFilter;return Object(a.jsx)(v.a,{position:"sticky",className:"feed-bar",children:Object(a.jsxs)(y.a,{style:{display:"flex",justifyContent:"space-between"},children:[Object(a.jsx)(be.a,{variant:"h6",noWrap:!0,children:"Complaints"}),Object(a.jsx)(C.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:function(){return t(!0)},className:"filter-button",children:Object(a.jsx)(ue.a,{})})]})})},pe=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(U.a,{children:Object(a.jsxs)(q.a,{button:!0,children:[Object(a.jsx)(H.a,{children:Object(a.jsx)(ue.a,{})}),Object(a.jsx)(R.a,{primary:"Filters"})]})})})},me=function(e){var t=e.openFilter,n=e.setOpenFilter,c=Object(oe.a)((function(e){var t;return{drawerPaper:(t={marginTop:"64px",marginBottom:"64px"},Object(g.a)(t,e.breakpoints.up("sm"),{display:"block"}),Object(g.a)(t,"display","none"),Object(g.a)(t,"height","auto"),Object(g.a)(t,"width","240px"),t),drawerPaper1:Object(g.a)({marginTop:"64px",height:"100%",width:"240px"},e.breakpoints.down("sm"),{marginTop:"56px"})}}))();return Object(a.jsxs)("div",{children:[Object(a.jsx)(E.a,{open:!0,anchor:"right",variant:"permanent",classes:{paper:c.drawerPaper},children:Object(a.jsx)(pe,{})}),Object(a.jsx)(E.a,{variant:"temporary",anchor:"right",open:t,onClose:function(){return n(!1)},classes:{paper:c.drawerPaper1},ModalProps:{keepMounted:!0},children:Object(a.jsx)(pe,{})})]})},fe=(n(173),function(e){var t,n=e.data,c=e.handleClickOpen,i=n.title,r=n.timeStamp,s=n.status;t="seen"===s?"yellow":"unseen"===s?"red":"replayed"===s?"green":"";var j=function(e){var t=e.split(" ").slice(1,5),n=t[3].split(":").map((function(e){return parseInt(e)})),a="AM",c=n[0],i=n[1],r=t.slice(0,3).join(" ");n[0]>12&&(a="PM",c%=12);var s="".concat(c>9?c:"0"+c,":").concat(i>9?i:"0"+i," ").concat(a);return"".concat(r+" "+s)};return Object(a.jsx)(x.a,{item:!0,xs:12,sm:12,md:6,style:{height:"100px"},children:Object(a.jsx)("div",{style:{width:"100%",height:"100%"},onClick:function(){c(n,j(r))},children:Object(a.jsxs)(x.a,{container:!0,className:"activity-container + ".concat(t),children:[Object(a.jsx)(x.a,{item:!0,children:Object(a.jsx)("h1",{className:"activity-title",children:i})}),Object(a.jsxs)(x.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",children:[Object(a.jsx)(x.a,{item:!0,xs:6,children:Object(a.jsx)("p",{className:"time-stamp",children:j(r)})}),Object(a.jsx)(x.a,{item:!0,xs:6,children:Object(a.jsx)("p",{className:"activity-status",children:s})})]})]})})})}),ge=n(264),ve=n(263),ye=n(268),Ce=n(111),we=n.n(Ce),ke=(n(174),function(e){var t,n=e.open,c=e.handleClose,i=e.data;t="seen"===i.status?"yellow1":"unseen"===i.status?"red1":"replayed"===i.status?"green1":"";var r=window,s=r.innerWidth,j=r.innerHeight;return console.log(s,j),Object(a.jsx)("div",{children:Object(a.jsxs)(G.a,{open:n,onClose:c,maxWidth:"md",fullWidth:!0,fullScreen:s<=600&&!0,scroll:"paper","aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",children:[Object(a.jsx)(M.a,{children:Object(a.jsx)("h1",{className:"dialogHeading",style:{margin:"0px"},children:i.title})}),Object(a.jsx)(W.a,{dividers:!0,children:Object(a.jsxs)(B.a,{children:[Object(a.jsx)("h1",{className:"dialogHeading",children:"Student Details"}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Category\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 : \xa0"}),Object(a.jsx)("i",{style:{textTransform:"capitalize"},children:i.category})]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Department\xa0\xa0\xa0\xa0\xa0\xa0\xa0 : \xa0"}),Object(a.jsx)("i",{children:i.departmentName})]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Academic Year \xa0: \xa0"}),Object(a.jsxs)("i",{children:[i.jointYear," - ",i.jointYear+4]})]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Gender \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 : \xa0"}),Object(a.jsx)("i",{style:{textTransform:"capitalize"},children:i.gender})]}),Object(a.jsx)("h1",{className:"dialogHeading",children:"Complaint Details"}),Object(a.jsx)("h4",{className:"dialog-sub-heading",children:"Title"}),Object(a.jsx)("p",{children:i.title}),Object(a.jsx)("h4",{className:"dialog-sub-heading",children:"Complaint"}),Object(a.jsx)("p",{style:{textAlign:"justify"},children:i.complaint}),""!==i.response?[Object(a.jsx)("h4",{className:"dialog-sub-heading",children:"Response"}),Object(a.jsx)("p",{style:{textAlign:"justify"},children:i.response})]:[Object(a.jsx)("h4",{className:"dialog-sub-heading",children:"Response"}),Object(a.jsxs)(ve.a,{className:"form-group",children:[Object(a.jsx)(ge.a,{style:{width:"100%",margin:"10px 0px"},children:Object(a.jsx)(ye.a,{id:"outlined-basic",label:"Make Response",variant:"outlined",multiline:!0,rows:8})}),Object(a.jsx)(x.a,{container:!0,justify:"flex-end",children:Object(a.jsx)(D.a,{variant:"contained",color:"primary",endIcon:Object(a.jsx)(we.a,{}),children:"Send"})})]})]]})}),Object(a.jsxs)(F.a,{className:"action",children:[Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[Object(a.jsx)("p",{style:{textAlign:"left",fontSize:"small",margin:"0px 0px 0px 10px",fontWeight:"bolder",textTransform:"uppercase"},className:"".concat(t,"-col"),children:i.status}),Object(a.jsx)("p",{style:{fontSize:"small"},className:"time-stamp",children:i.timeStr})]}),Object(a.jsx)(D.a,{onClick:c,color:"primary",children:"Close"})]})]})})}),Ne=function(e){var t=e.allComplaints,n=Object(c.useState)(!1),i=Object(b.a)(n,2),r=i[0],s=i[1],j=Object(c.useState)({}),l=Object(b.a)(j,2),o=l[0],d=l[1],O=function(e,t){e.timeStr=t,d(e),s(!0)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(x.a,{container:!0,spacing:1,style:{padding:"10px 5px 30px 5px"},children:t.map((function(e,t){return Object(a.jsx)(fe,{data:e,handleClickOpen:O},t)}))}),Object(a.jsx)(ke,{handleClose:function(){s(!1)},open:r,data:o})]})},Se=(n(175),n(265)),Ae=function(){var e=Object(c.useState)(!1),t=Object(b.a)(e,2),n=t[0],i=t[1],r=Object(c.useContext)(S);return Object(a.jsxs)(x.a,{container:!0,className:"complaint-container",children:[Object(a.jsx)(x.a,{item:!0,className:"feed-container",children:Object(a.jsxs)(x.a,{container:!0,direction:"column",children:[Object(a.jsx)(he,{setOpenFilter:i}),Object(a.jsx)(Se.a,{maxWidth:"md",children:Object(a.jsx)(Ne,{allComplaints:r})})]})}),Object(a.jsx)(x.a,{item:!0,children:Object(a.jsx)(me,{setOpenFilter:i,openFilter:n})})]})},Pe=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"Dashboard"})})},Ie=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"Profile"})})},Te=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"Create"})})},De=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"Update"})})},Ge=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"Delete"})})},Fe=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],i=t[1];Object(c.useEffect)((function(){return r(),function(){}}),[]);var r=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("https://grievance-app-backend.herokuapp.com/admin/complaint",{headers:{token:p.a.get("admin-token")}});case 2:200===(t=e.sent).status&&(i(t.data.data.allComplaints),console.log(t.data.data.allComplaints));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)(S.Provider,{value:n,children:Object(a.jsx)(m.a,{children:Object(a.jsxs)(x.a,{container:!0,direction:"column",children:[Object(a.jsx)(de,{}),Object(a.jsx)("div",{style:{marginTop:"64px"},className:"header-space"}),Object(a.jsxs)(f.c,{children:[Object(a.jsx)(f.a,{exact:!0,path:"/Grievance-system-Admin/create-student",children:Object(a.jsx)(Te,{})}),Object(a.jsx)(f.a,{exact:!0,path:"/Grievance-system-Admin/update-student",children:Object(a.jsx)(De,{})}),Object(a.jsx)(f.a,{exact:!0,path:"/Grievance-system-Admin/delete-student",children:Object(a.jsx)(Ge,{})}),Object(a.jsx)(f.a,{exact:!0,path:"/Grievance-system-Admin/profile",children:Object(a.jsx)(Ie,{})}),Object(a.jsx)(f.a,{exact:!0,path:"/Grievance-system-Admin/dashboard",children:Object(a.jsx)(Pe,{})}),Object(a.jsx)(f.a,{path:"/Grievance-system-Admin/",children:Object(a.jsx)(Ae,{})})]}),Object(a.jsx)(xe,{})]})})})},We=n(270),Be=n(266),Me=n(119),ze=n(112),Ee=n.n(ze),Ue=(n(176),Object(oe.a)((function(e){return{root:{height:"100vh",alignItems:"center",display:"flex",justifyContent:"center"},paper:{margin:e.spacing(5,4),display:"flex",flexDirection:"column",alignItems:"center",height:"auto",width:"100%",justify:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}))),qe=function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(""),s=Object(b.a)(r,2),j=s[0],O=s[1],h=Object(c.useState)(!1),m=Object(b.a)(h,2),f=m[0],g=m[1],v=Object(c.useState)(!0),y=Object(b.a)(v,2),C=y[0],S=y[1],A=Ue(),P=Object(c.useContext)(w),I=Object(c.useContext)(k),T=Object(c.useContext)(N),G=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(g(!0),""===j||""===n){e.next=15;break}return e.prev=2,I(!0),e.next=6,u.a.post("https://grievance-app-backend.herokuapp.com/admin/login",{data:{userName:n,password:j}});case 6:t=e.sent,I(!1),200===t.status&&(T.setID(Object(o.a)(Object(o.a)({},T),{},{id:t.data.id})),1/48,p.a.set("admin-token",t.data.token,{expires:.020833333333333332}),P(!0)),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0),e.t0.response&&(console.log(e.t0.response),401===e.t0.response.status&&(S(!1),setTimeout((function(){return S(!0)}),5e3),I(!1)));case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)(x.a,{container:!0,component:"main",className:A.root,children:[Object(a.jsx)(Be.a,{}),Object(a.jsx)(x.a,{item:!0,xs:12,sm:8,md:5,className:"login-box",component:Me.a,children:Object(a.jsxs)("div",{className:A.paper,children:[Object(a.jsx)(We.a,{className:A.avatar,children:Object(a.jsx)(Ee.a,{})}),Object(a.jsx)(be.a,{component:"h1",variant:"h6",children:"Sign in"}),Object(a.jsxs)(ge.a,{className:A.form,validate:"true",children:[Object(a.jsx)(ye.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Roll Number",name:"email",autoComplete:"email",onInput:function(e){""===j&&""===n&&g(!1),i(e.target.value)},value:n,error:f&&!n,helperText:f&&!n&&"User name field is required",autoFocus:!0}),Object(a.jsx)(ye.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",onInput:function(e){""===j&&""===n&&g(!1),O(e.target.value)},value:j,error:f&&!j,helperText:f&&!j&&"Password field is required",autoComplete:"current-password"}),!C&&Object(a.jsx)(be.a,{color:"error",variant:"caption",align:"left",children:"UserName or Password is Invalid"}),Object(a.jsx)(D.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:A.submit,onClick:G,children:"Sign In"})]})]})})]})},He=n(116),Re=n(267),Le=n(113);var Ye=function(){var e=Object(c.useState)(),t=Object(b.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(!1),s=Object(b.a)(r,2),j=s[0],x=s[1],O=Object(c.useState)({}),h=Object(b.a)(O,2),m=h[0],f=h[1];Object(c.useEffect)((function(){Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!p.a.get("admin-token")){e.next=9;break}return x(!0),e.next=4,u.a.get("https://grievance-app-backend.herokuapp.com/auth",{headers:{token:p.a.get("admin-token")}});case 4:t=e.sent,x(!1),200===t.status?(f(Object(o.a)(Object(o.a)({},v),{},{id:t.data.id})),i(!0)):i(!1),e.next=10;break;case 9:i(!1);case 10:case"end":return e.stop()}}),e)})))()}),[]);var g=Object(He.a)({palette:{type:"light",primary:{main:"#3a42bb"}}}),v={id:m.id,setID:f};return Object(a.jsx)(Re.a,{theme:g,children:Object(a.jsx)(w.Provider,{value:i,children:Object(a.jsx)(k.Provider,{value:x,children:Object(a.jsx)(N.Provider,{value:v,children:Object(a.jsxs)("div",{className:"App",children:[n?Object(a.jsx)(Fe,{}):Object(a.jsx)(qe,{}),j&&Object(a.jsx)(Le.BoxLoading,{color:"#3a42bb",size:"large"})]})})})})})};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(Ye,{})}),document.getElementById("root"))}},[[212,1,2]]]);
//# sourceMappingURL=main.a17c5501.chunk.js.map