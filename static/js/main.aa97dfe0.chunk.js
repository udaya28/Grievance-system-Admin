(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[0],{148:function(e,t,n){},150:function(e,t,n){},151:function(e,t,n){},169:function(e,t,n){},176:function(e,t,n){},177:function(e,t,n){},178:function(e,t,n){},179:function(e,t,n){},180:function(e,t,n){},181:function(e,t,n){},217:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),i=n.n(c),r=n(13),s=n.n(r),l=(n(148),n(30)),o=n.n(l),j=n(38),d=n(42),b=n(14),x=(n(150),n(267)),u=(n(151),n(43)),O=n.n(u),m=n(32),h=n.n(m),p=n(39),f=n(16),v=n(28),g=n(265),y=n(266),C=n(268),N=Object(c.createContext)({}),k=Object(c.createContext)({}),w=Object(c.createContext)({}),S=Object(c.createContext)([]),I=Object(c.createContext)({}),A=(n(169),n(113)),P=n.n(A),D=n(114),T=n.n(D),G=n(259),F=n(251),B=n(258),M=n(256),Y=n(257),W=n(255),R=function(e){var t=e.SetOpen,n=e.handleClose,c=e.title,i=e.content,r=e.handleConfirm,s=e.confirmButtonColorSecondary;return Object(a.jsx)("div",{children:Object(a.jsxs)(F.a,{open:t,onClose:n,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(a.jsx)(W.a,{id:"alert-dialog-title",children:c}),""!==i&&Object(a.jsx)(M.a,{children:Object(a.jsx)(Y.a,{id:"alert-dialog-description",children:i})}),Object(a.jsxs)(B.a,{children:[Object(a.jsx)(G.a,{onClick:n,variant:"text",color:"primary",style:{color:"#333333"},children:"Cancel"}),Object(a.jsx)(G.a,{onClick:r,variant:"contained",color:s?"secondary":"primary",autoFocus:!0,children:"Confirm"})]})]})})},U=n(278),z=n(260),E=n(219),L=n(261),q=n(262),H=n(104),J=n.n(H),_=n(112),V=n.n(_),K=n(106),Q=n.n(K),X=n(105),Z=n.n(X),$=n(107),ee=n.n($),te=n(108),ne=n.n(te),ae=n(263),ce=n(109),ie=n.n(ce),re=n(110),se=n.n(re),le=n(111),oe=n.n(le),je=function(e){var t=e.setOpenDrawer,n=Object(c.useState)(null),i=Object(b.a)(n,2),r=i[0],s=i[1],l=Object(c.useState)(!0),o=Object(b.a)(l,2),j=o[0],d=o[1],x=function(e){s(e),t(!1)};return Object(a.jsx)("div",{style:{width:"240px"},children:Object(a.jsxs)(z.a,{children:[Object(a.jsx)(p.b,{to:"/Grievance-system-Admin/",children:Object(a.jsxs)(E.a,{button:!0,selected:0===r,onClick:function(){return x(0)},children:[Object(a.jsx)(L.a,{children:Object(a.jsx)(J.a,{})}),Object(a.jsx)(q.a,{primary:"Complaints"})]})}),Object(a.jsx)(p.b,{to:"/Grievance-system-Admin/dashboard",children:Object(a.jsxs)(E.a,{button:!0,selected:1===r,onClick:function(){return x(1)},children:[Object(a.jsx)(L.a,{children:Object(a.jsx)(Z.a,{})}),Object(a.jsx)(q.a,{primary:"Dashboard"})]})}),Object(a.jsxs)(E.a,{button:!0,selected:2===r,onClick:function(){d(!j)},children:[Object(a.jsx)(L.a,{children:Object(a.jsx)(Q.a,{})}),Object(a.jsx)(q.a,{primary:"Student"}),j?Object(a.jsx)(ee.a,{}):Object(a.jsx)(ne.a,{})]}),Object(a.jsx)(ae.a,{in:j,timeout:"auto",unmountOnExit:!0,children:Object(a.jsxs)(z.a,{component:"div",disablePadding:!0,style:{paddingLeft:"32px"},children:[Object(a.jsx)(p.b,{to:"/Grievance-system-Admin/create-student",children:Object(a.jsxs)(E.a,{button:!0,selected:3===r,onClick:function(){return x(3)},children:[Object(a.jsx)(L.a,{children:Object(a.jsx)(ie.a,{})}),Object(a.jsx)(q.a,{primary:"Create"})]})}),Object(a.jsx)(p.b,{to:"/Grievance-system-Admin/update-student",children:Object(a.jsxs)(E.a,{button:!0,selected:4===r,onClick:function(){return x(4)},children:[Object(a.jsx)(L.a,{children:Object(a.jsx)(se.a,{})}),Object(a.jsx)(q.a,{primary:"Update"})]})}),Object(a.jsx)(p.b,{to:"/Grievance-system-Admin/delete-student",children:Object(a.jsxs)(E.a,{button:!0,selected:5===r,onClick:function(){return x(5)},children:[Object(a.jsx)(L.a,{children:Object(a.jsx)(oe.a,{})}),Object(a.jsx)(q.a,{primary:"Delete"})]})})]})}),Object(a.jsx)(p.b,{to:"/Grievance-system-Admin/profile",children:Object(a.jsxs)(E.a,{button:!0,selected:6===r,onClick:function(){return x(6)},children:[Object(a.jsx)(L.a,{children:Object(a.jsx)(V.a,{})}),Object(a.jsx)(q.a,{primary:"Profile"})]})})]})})},de=n(264),be=function(){var e=Object(c.useContext)(N),t=Object(c.useState)(!1),n=Object(b.a)(t,2),i=n[0],r=n[1],s=function(){r(!0)},l=Object(c.useState)(!1),o=Object(b.a)(l,2),j=o[0],d=o[1],u=Object(de.a)((function(e){var t;return{drawerPaper:(t={marginTop:"56px"},Object(v.a)(t,e.breakpoints.up("md"),{marginTop:"64px"}),Object(v.a)(t,"height","100%"),t)}}))();return Object(a.jsxs)(g.a,{position:"fixed",color:"primary",children:[Object(a.jsx)(y.a,{children:Object(a.jsxs)(x.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",children:[Object(a.jsx)(x.a,{item:!0,children:Object(a.jsx)(C.a,{onClick:function(){return d(!0)},children:Object(a.jsx)(P.a,{className:"white"})})}),Object(a.jsx)(x.a,{item:!0,children:Object(a.jsx)("h3",{className:"mon heading white",children:"VCET"})}),Object(a.jsx)(x.a,{item:!0,children:Object(a.jsx)(x.a,{container:!0,direction:"row",alignItems:"center",children:Object(a.jsx)(G.a,{endIcon:Object(a.jsx)(T.a,{className:"white"}),onClick:function(){s()},children:Object(a.jsx)("h5",{className:"mon white",children:"Logout"})})})})]})}),Object(a.jsx)(R,{SetOpen:i,handleClose:function(){r(!1)},title:"Confirm",content:"Are you sure you want to logout?",handleConfirm:function(){h.a.remove("token"),e(!1)},confirmButtonColorSecondary:!0}),Object(a.jsx)(U.a,{open:j,onClose:function(){return d(!1)},classes:{paper:u.drawerPaper},children:Object(a.jsx)(je,{setOpenDrawer:d})})]})},xe=n(55),ue=function(){return Object(a.jsx)(g.a,{position:"relative",style:{top:"auto",bottom:0},color:"primary",children:Object(a.jsxs)(x.a,{container:!0,justify:"space-between",style:{padding:"10px 5px"},children:[Object(a.jsx)(x.a,{item:!0,sm:6,xs:12,children:Object(a.jsx)(xe.a,{variant:"caption",children:"Copyright \xa9 2021"})}),Object(a.jsx)(x.a,{item:!0,sm:6,xs:12,children:Object(a.jsx)(xe.a,{variant:"caption",children:"Developed By Udaya with \u2764\ufe0f"})})]})})},Oe=(n(176),n(72)),me=n.n(Oe),he=n(115),pe=n.n(he),fe=function(e){var t=e.setOpenFilter,n=Object(c.useContext)(I);return Object(a.jsx)(g.a,{position:"sticky",className:"feed-bar",children:Object(a.jsxs)(y.a,{style:{display:"flex",justifyContent:"space-between"},children:[Object(a.jsx)(xe.a,{variant:"h6",noWrap:!0,children:"Complaints"}),Object(a.jsxs)("div",{style:{display:"flex",direction:"column"},children:[Object(a.jsx)(C.a,{color:"inherit","aria-label":"refresh",edge:"start",onClick:function(){return n()},children:Object(a.jsx)(pe.a,{})}),Object(a.jsx)(C.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:function(){return t(!0)},style:{marginLeft:"8px"},className:"filter-button",children:Object(a.jsx)(me.a,{})})]})]})})},ve=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(z.a,{children:Object(a.jsxs)(E.a,{button:!0,children:[Object(a.jsx)(L.a,{children:Object(a.jsx)(me.a,{})}),Object(a.jsx)(q.a,{primary:"Filters"})]})})})},ge=function(e){var t=e.openFilter,n=e.setOpenFilter,c=Object(de.a)((function(e){var t;return{drawerPaper:(t={marginTop:"64px",marginBottom:"64px"},Object(v.a)(t,e.breakpoints.up("sm"),{display:"block"}),Object(v.a)(t,"display","none"),Object(v.a)(t,"height","auto"),Object(v.a)(t,"width","240px"),t),drawerPaper1:Object(v.a)({marginTop:"64px",height:"100%",width:"240px"},e.breakpoints.down("sm"),{marginTop:"56px"})}}))();return Object(a.jsxs)("div",{children:[Object(a.jsx)(U.a,{open:!0,anchor:"right",variant:"permanent",classes:{paper:c.drawerPaper},children:Object(a.jsx)(ve,{})}),Object(a.jsx)(U.a,{variant:"temporary",anchor:"right",open:t,onClose:function(){return n(!1)},classes:{paper:c.drawerPaper1},ModalProps:{keepMounted:!0},children:Object(a.jsx)(ve,{})})]})},ye=(n(177),function(e){var t,n=e.data,c=e.handleClickOpen,i=n.title,r=n.timeStamp,s=n.status;t="seen"===s?"yellow":"unseen"===s?"red":"replayed"===s?"green":"";var l=function(e){var t=e.split(" ").slice(1,5),n=t[3].split(":").map((function(e){return parseInt(e)})),a="AM",c=n[0],i=n[1],r=t.slice(0,3).join(" ");n[0]>12&&(a="PM",c%=12);var s="".concat(c>9?c:"0"+c,":").concat(i>9?i:"0"+i," ").concat(a);return"".concat(r+" "+s)};return Object(a.jsx)(x.a,{item:!0,xs:12,sm:12,md:6,style:{height:"100px"},children:Object(a.jsx)("div",{style:{width:"100%",height:"100%"},onClick:function(){c(n,l(r))},children:Object(a.jsxs)(x.a,{container:!0,className:"activity-container + ".concat(t),children:[Object(a.jsx)(x.a,{item:!0,children:Object(a.jsx)("h1",{className:"activity-title",children:i})}),Object(a.jsxs)(x.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",children:[Object(a.jsx)(x.a,{item:!0,xs:6,children:Object(a.jsx)("p",{className:"time-stamp",children:l(r)})}),Object(a.jsx)(x.a,{item:!0,xs:6,children:Object(a.jsx)("p",{className:"activity-status",children:s})})]})]})})})}),Ce=n(270),Ne=n(269),ke=n(276),we=n(73),Se=n.n(we),Ie=(n(178),n(277)),Ae=function(e){var t,n=e.open,i=e.handleClose,r=e.data;t="seen"===r.status?"yellow1":"unseen"===r.status?"red1":"replayed"===r.status?"green1":"";var s=window.innerWidth,l=Object(c.useState)(""),j=Object(b.a)(l,2),u=j[0],m=j[1],p=Object(c.useState)(!1),f=Object(b.a)(p,2),v=f[0],g=f[1],y=Object(c.useState)(!1),C=Object(b.a)(y,2),N=C[0],w=C[1],S=Object(c.useState)(!1),A=Object(b.a)(S,2),P=A[0],D=A[1],T=Object(c.useContext)(k),U=Object(c.useContext)(I),z=function(){var e=Object(d.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(u),console.log(r._id),""===u){e.next=18;break}return w(!1),m(""),i(),e.prev=6,T(!0),e.next=10,O.a.patch("https://grievance-app-backend.herokuapp.com/admin/complaint",{data:{id:{_id:r._id},data:{response:u}}},{headers:{token:h.a.get("admin-token")}});case 10:200===e.sent.status?(T(!1),console.log("posted"),D(!0),U()):(T(!1),console.log("failed to post")),g(!1),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(6),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[6,15]])})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{children:[Object(a.jsxs)(F.a,{open:n,onClose:function(){return i()},maxWidth:"md",fullWidth:!0,fullScreen:s<=600&&!0,scroll:"paper","aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",children:[Object(a.jsx)(W.a,{children:Object(a.jsx)("h1",{className:"dialogHeading",style:{margin:"0px"},children:r.title})}),Object(a.jsx)(M.a,{dividers:!0,children:Object(a.jsxs)(Y.a,{children:[Object(a.jsx)("h1",{className:"dialogHeading",children:"Student Details"}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Category\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 : \xa0"}),Object(a.jsx)("i",{style:{textTransform:"capitalize"},children:r.category})]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Department\xa0\xa0\xa0\xa0\xa0\xa0\xa0 : \xa0"}),Object(a.jsx)("i",{children:r.departmentName})]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Academic Year \xa0: \xa0"}),Object(a.jsxs)("i",{children:[r.jointYear," - ",r.jointYear+4]})]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Gender \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 : \xa0"}),Object(a.jsx)("i",{style:{textTransform:"capitalize"},children:r.gender})]}),Object(a.jsx)("h1",{className:"dialogHeading",children:"Complaint Details"}),Object(a.jsx)("h4",{className:"dialog-sub-heading",children:"Title"}),Object(a.jsx)("p",{children:r.title}),Object(a.jsx)("h4",{className:"dialog-sub-heading",children:"Complaint"}),Object(a.jsx)("p",{style:{textAlign:"justify"},children:r.complaint}),""!==r.response?[Object(a.jsx)("h4",{className:"dialog-sub-heading",children:"Response"}),Object(a.jsx)("p",{style:{textAlign:"justify"},children:r.response})]:[Object(a.jsx)("h4",{className:"dialog-sub-heading",children:"Response"}),Object(a.jsxs)(Ne.a,{className:"form-group",children:[Object(a.jsx)(Ce.a,{style:{width:"100%",margin:"10px 0px"},children:Object(a.jsx)(ke.a,{id:"outlined-basic",label:"Make Response",variant:"outlined",multiline:!0,rows:8,helperText:"Make Response for the Complaint",onInput:function(e){m(e.target.value)},error:v&&""===u,value:u})}),Object(a.jsx)(x.a,{container:!0,justify:"flex-end",children:Object(a.jsx)(G.a,{variant:"contained",color:"primary",endIcon:Object(a.jsx)(Se.a,{}),onClick:function(){return g(!0),void(""!==u&&w(!0))},children:"Send"})})]})]]})}),Object(a.jsxs)(B.a,{className:"action",children:[Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[Object(a.jsx)("p",{style:{textAlign:"left",fontSize:"small",margin:"0px 0px 0px 10px",fontWeight:"bolder",textTransform:"uppercase"},className:"".concat(t,"-col"),children:r.status}),Object(a.jsx)("p",{style:{fontSize:"small"},className:"time-stamp",children:r.timeStr})]}),Object(a.jsx)(G.a,{onClick:function(){g(!1),m(""),i()},color:"primary",children:"Close"})]})]}),Object(a.jsx)(R,{SetOpen:N,handleClose:function(){return w(!1)},title:"Confirm",content:"Once submitted you can't change or re-post your response",handleConfirm:z,confirmButtonColorSecondary:!1}),Object(a.jsx)(Ie.a,{open:P,autoHideDuration:6e3,onClose:function(){return D(!1)},message:"Posted Response successfully"})]})},Pe=function(e){var t=e.allComplaints,n=Object(c.useState)(!1),i=Object(b.a)(n,2),r=i[0],s=i[1],l=Object(c.useState)({}),o=Object(b.a)(l,2),j=o[0],d=o[1],u=function(e,t){e.timeStr=t,d(e),s(!0)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(x.a,{container:!0,spacing:1,style:{padding:"10px 5px 30px 5px"},children:t.map((function(e,t){return Object(a.jsx)(ye,{data:e,handleClickOpen:u},t)}))}),Object(a.jsx)(Ae,{handleClose:function(){s(!1)},open:r,data:j})]})},De=(n(179),n(272)),Te=function(){var e=Object(c.useState)(!1),t=Object(b.a)(e,2),n=t[0],i=t[1],r=Object(c.useContext)(S);return Object(a.jsxs)(x.a,{container:!0,className:"complaint-container",children:[Object(a.jsx)(x.a,{item:!0,className:"feed-container",children:Object(a.jsxs)(x.a,{container:!0,direction:"column",children:[Object(a.jsx)(fe,{setOpenFilter:i}),Object(a.jsx)(De.a,{maxWidth:"md",children:Object(a.jsx)(Pe,{allComplaints:r})})]})}),Object(a.jsx)(x.a,{item:!0,children:Object(a.jsx)(ge,{setOpenFilter:i,openFilter:n})})]})},Ge=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"Dashboard"})})},Fe=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"Profile"})})},Be=n(273),Me=(n(180),function(){var e=Object(c.useState)({firstName:"",secondName:"",departmentName:"",jointYear:"",gender:"",rollNumber:"",dateOfBirth:"",password:""}),t=Object(b.a)(e,2),n=t[0],i=t[1],r=function(e){i(Object(j.a)(Object(j.a)({},n),{},Object(v.a)({},e.target.name,e.target.value)))};return Object(a.jsxs)(De.a,{maxWidth:"md",children:[Object(a.jsx)("h1",{style:{textAlign:"left",margin:"10px 0px 0px"},children:"Create Student"}),Object(a.jsx)(Ne.a,{className:"form-group1",children:Object(a.jsxs)(x.a,{container:!0,children:[Object(a.jsx)(x.a,{items:!0,xs:12,sm:6,children:Object(a.jsx)(Ce.a,{className:"form-component",children:Object(a.jsx)(ke.a,{id:"outlined-basic",label:"First Name",variant:"outlined",name:"firstName",value:n.firstName,onInput:r,helperText:"Minimum of 3 characters length"})})}),Object(a.jsx)(x.a,{items:!0,xs:12,sm:6,children:Object(a.jsx)(Ce.a,{className:"form-component",children:Object(a.jsx)(ke.a,{id:"outlined-basic",label:"Second Name",variant:"outlined",name:"secondName",value:n.secondName,onInput:r})})}),Object(a.jsx)(x.a,{items:!0,xs:12,sm:6,children:Object(a.jsx)(Ce.a,{className:"form-component",children:Object(a.jsx)(ke.a,{id:"outlined-basic",label:"Roll Number",variant:"outlined",name:"rollNumber",value:n.rollNumber,onInput:r})})}),Object(a.jsx)(x.a,{items:!0,xs:12,sm:6,children:Object(a.jsx)(Ce.a,{className:"form-component",children:Object(a.jsx)(ke.a,{id:"outlined-basic",label:"Password",variant:"outlined",name:"password",value:n.password,onInput:r,helperText:"Minimum of 3 characters length"})})}),Object(a.jsx)(x.a,{items:!0,xs:12,sm:6,children:Object(a.jsx)(Ce.a,{className:"form-component",children:Object(a.jsx)(ke.a,{id:"outlined-basic",label:"Department Name",variant:"outlined",name:"departmentName",value:n.departmentName,onInput:r})})}),Object(a.jsx)(x.a,{items:!0,xs:12,sm:6,children:Object(a.jsx)(Ce.a,{className:"form-component",children:Object(a.jsx)(ke.a,{id:"outlined-basic",label:"Joint Year",variant:"outlined",name:"jointYear",value:n.jointYear,onInput:r})})}),Object(a.jsx)(x.a,{items:!0,xs:12,sm:6,children:Object(a.jsx)(Ce.a,{className:"form-component",children:Object(a.jsxs)(ke.a,{select:!0,id:"select",label:"Gender",variant:"outlined",name:"gender",value:n.gender,onChange:r,style:{textAlign:"left"},children:[Object(a.jsx)(Be.a,{value:"male",children:"Male"}),Object(a.jsx)(Be.a,{value:"female",children:"Female"})]})})}),Object(a.jsx)(x.a,{items:!0,xs:12,sm:6,children:Object(a.jsx)(Ce.a,{className:"form-component",children:Object(a.jsx)(ke.a,{id:"outlined-basic",label:"Date of Birth",helperText:"DD-MM-YYYY",variant:"outlined",name:"dateOfBirth",value:n.dateOfBirth,onInput:r})})}),Object(a.jsx)(x.a,{container:!0,justify:"flex-end",children:Object(a.jsx)(G.a,{variant:"contained",color:"primary",endIcon:Object(a.jsx)(Se.a,{}),onClick:function(){console.log(n)},children:"Create"})})]})})]})}),Ye=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"Update"})})},We=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"Delete"})})},Re=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],i=t[1],r=Object(c.useContext)(k);Object(c.useEffect)((function(){return s(),function(){}}),[]);var s=function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.next=3,O.a.get("https://grievance-app-backend.herokuapp.com/admin/complaint",{headers:{token:h.a.get("admin-token")}});case 3:200===(t=e.sent).status?(i(t.data.data.allComplaints),r(!1),console.log(t.data.data.allComplaints)):r(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)(S.Provider,{value:n,children:Object(a.jsx)(I.Provider,{value:s,children:Object(a.jsx)(p.a,{children:Object(a.jsxs)(x.a,{container:!0,direction:"column",children:[Object(a.jsx)(be,{}),Object(a.jsx)("div",{style:{marginTop:"64px"},className:"header-space"}),Object(a.jsxs)(f.c,{children:[Object(a.jsx)(f.a,{exact:!0,path:"/Grievance-system-Admin/create-student",children:Object(a.jsx)(Me,{})}),Object(a.jsx)(f.a,{exact:!0,path:"/Grievance-system-Admin/update-student",children:Object(a.jsx)(Ye,{})}),Object(a.jsx)(f.a,{exact:!0,path:"/Grievance-system-Admin/delete-student",children:Object(a.jsx)(We,{})}),Object(a.jsx)(f.a,{exact:!0,path:"/Grievance-system-Admin/profile",children:Object(a.jsx)(Fe,{})}),Object(a.jsx)(f.a,{exact:!0,path:"/Grievance-system-Admin/dashboard",children:Object(a.jsx)(Ge,{})}),Object(a.jsx)(f.a,{path:"/Grievance-system-Admin/",children:Object(a.jsx)(Te,{})})]}),Object(a.jsx)(ue,{})]})})})})},Ue=n(279),ze=n(274),Ee=n(123),Le=n(116),qe=n.n(Le),He=(n(181),Object(de.a)((function(e){return{root:{height:"100vh",alignItems:"center",display:"flex",justifyContent:"center",flexDirection:"row"},paper:{margin:e.spacing(5,4),display:"flex",flexDirection:"column",alignItems:"center",height:"auto",width:"100%",justify:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}))),Je=function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(""),s=Object(b.a)(r,2),l=s[0],u=s[1],m=Object(c.useState)(!1),p=Object(b.a)(m,2),f=p[0],v=p[1],g=Object(c.useState)(!0),y=Object(b.a)(g,2),C=y[0],S=y[1],I=He(),A=Object(c.useContext)(N),P=Object(c.useContext)(k),D=Object(c.useContext)(w),T=function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(v(!0),""===l||""===n){e.next=15;break}return e.prev=2,P(!0),e.next=6,O.a.post("https://grievance-app-backend.herokuapp.com/admin/login",{data:{userName:n,password:l}});case 6:t=e.sent,P(!1),200===t.status&&(D.setID(Object(j.a)(Object(j.a)({},D),{},{id:t.data.id})),1/48,h.a.set("admin-token",t.data.token,{expires:.020833333333333332}),A(!0)),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0),e.t0.response&&(console.log(e.t0.response),401===e.t0.response.status&&(S(!1),setTimeout((function(){return S(!0)}),5e3),P(!1)));case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(x.a,{container:!0,component:"main",className:I.root,children:[Object(a.jsx)(ze.a,{}),Object(a.jsx)(x.a,{item:!0,xs:12,sm:8,md:5,className:"login-box",component:Ee.a,children:Object(a.jsxs)("div",{className:I.paper,children:[Object(a.jsx)(xe.a,{component:"h1",variant:"h5",style:{marginBottom:"30px"},children:Object(a.jsx)("b",{children:Object(a.jsx)("p",{children:"Online Grievance System"})})}),Object(a.jsx)(Ue.a,{className:I.avatar,children:Object(a.jsx)(qe.a,{})}),Object(a.jsx)(xe.a,{component:"h1",variant:"h6",children:"Admin Login"}),Object(a.jsxs)(Ce.a,{className:I.form,validate:"true",children:[Object(a.jsx)(ke.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"User Name",name:"email",autoComplete:"email",onInput:function(e){""===l&&""===n&&v(!1),i(e.target.value)},value:n,error:f&&!n,helperText:f&&!n&&"User name field is required",autoFocus:!0}),Object(a.jsx)(ke.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",onInput:function(e){""===l&&""===n&&v(!1),u(e.target.value)},value:l,error:f&&!l,helperText:f&&!l&&"Password field is required",autoComplete:"current-password"}),!C&&Object(a.jsx)(xe.a,{color:"error",variant:"caption",align:"left",children:"UserName or Password is Invalid"}),Object(a.jsx)(G.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:I.submit,onClick:T,children:"Sign In"})]})]})})]})})},_e=n(120),Ve=n(275),Ke=n(117);var Qe=function(){var e=Object(c.useState)(),t=Object(b.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(!1),s=Object(b.a)(r,2),l=s[0],x=s[1],u=Object(c.useState)({}),m=Object(b.a)(u,2),p=m[0],f=m[1];Object(c.useEffect)((function(){Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!h.a.get("admin-token")){e.next=9;break}return x(!0),e.next=4,O.a.get("https://grievance-app-backend.herokuapp.com/auth",{headers:{token:h.a.get("admin-token")}});case 4:t=e.sent,x(!1),200===t.status?(f(Object(j.a)(Object(j.a)({},g),{},{id:t.data.id})),i(!0)):i(!1),e.next=10;break;case 9:i(!1);case 10:case"end":return e.stop()}}),e)})))()}),[]);var v=Object(_e.a)({palette:{type:"light",primary:{main:"#3a42bb"}}}),g={id:p.id,setID:f};return Object(a.jsx)(Ve.a,{theme:v,children:Object(a.jsx)(N.Provider,{value:i,children:Object(a.jsx)(k.Provider,{value:x,children:Object(a.jsx)(w.Provider,{value:g,children:Object(a.jsxs)("div",{className:"App",children:[n?Object(a.jsx)(Re,{}):Object(a.jsx)(Je,{}),l&&Object(a.jsx)(Ke.BoxLoading,{color:"#3a42bb",size:"large",style:{position:"fixed",margin:"auto",inset:"0px"}})]})})})})})};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(Qe,{})}),document.getElementById("root"))}},[[217,1,2]]]);
//# sourceMappingURL=main.aa97dfe0.chunk.js.map