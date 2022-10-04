"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[6091],{29872:function(e,a,t){t.d(a,{v:function(){return s}});const s={appID:"9860caa9-1655-4c97-ba6f-ca9a203de773",redirectUri:"https://dssui-asset-manager.herokuapp.com",api:"https://dssui-asset-manager.herokuapp.com",scopes:["user.read"],authority:"https://login.microsoftonline.com/dssui.onmicrosoft.com",postLogoutRedirectUri:""}},33984:function(e,a,t){var s=t(27998),l=t(46417);a.Z=e=>{let{visible:a,popupMsg:t,onClose:o}=e;return(0,l.jsxs)(s.Tk,{size:"sm",visible:a,onClose:o,children:[(0,l.jsx)(s.p0,{children:(0,l.jsx)(s.fl,{children:"Error"})}),(0,l.jsx)(s.sD,{children:t})]})}},7174:function(e,a,t){var s=t(27998),l=t(46417);a.Z=e=>{let{visible:a,popupMsg:t,onClose:o}=e;return(0,l.jsxs)(s.Tk,{size:"sm",visible:a,onClose:o,children:[(0,l.jsx)(s.p0,{children:(0,l.jsx)(s.fl,{children:"Success"})}),(0,l.jsx)(s.sD,{children:t})]})}},66091:function(e,a,t){t.r(a),t.d(a,{default:function(){return h}});var s=t(47313),l=t(31881),o=t.n(l),c=t(29872),n=t(27998),i=t(46417);var r=e=>{let{onAdd:a,deviceList:t,onError:l}=e;const[o,c]=(0,s.useState)(""),[r,d]=(0,s.useState)(""),[u,p]=(0,s.useState)(""),[m,h]=(0,s.useState)(""),[x,v]=(0,s.useState)(""),[j,g]=(0,s.useState)(""),C=e=>{e.target.reset(),c("PC"),d(""),v(""),g("INTERNAL")};return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(n.lx,{className:"add-user row g-3 needs-validation  justify-content-center",onSubmit:e=>{e.preventDefault();t.some((e=>e.pc_name===r))?l("Device already exists."):(a({devType:o,pcName:r,model:u,cCapacity:m,ram:x,source:j}),C(e))},children:[(0,i.jsx)(n.b7,{md:2,children:(0,i.jsxs)(n.LX,{className:"form-select",onChange:e=>{c(e.target.value)},required:!0,children:[(0,i.jsx)("option",{value:"",children:"Select device type"}),(0,i.jsx)("option",{value:"PC",children:"PC"}),(0,i.jsx)("option",{value:"LAPTOP",children:"Laptop"}),(0,i.jsx)("option",{value:"MINIPC",children:"Mini PC"}),(0,i.jsx)("option",{value:"MACBOOK",children:"MacBook"}),(0,i.jsx)("option",{value:"IMAC",children:"iMac"}),(0,i.jsx)("option",{value:"MACMINI",children:"Mac Mini"})]})}),(0,i.jsx)(n.b7,{md:2,children:(0,i.jsx)(n.jO,{className:"form-control",type:"text",name:"pcName",placeholder:"PC Name",onChange:e=>{d(e.target.value.trim())},maxLength:45,required:!0})}),(0,i.jsx)(n.b7,{md:2,children:(0,i.jsx)(n.jO,{className:"form-control",type:"text",name:"model",placeholder:"Model",onChange:e=>{p(e.target.value.trim())},maxLength:45})}),(0,i.jsx)(n.b7,{md:1,children:(0,i.jsx)(n.jO,{className:"form-control",type:"text",name:"cCapacity",placeholder:"C:\\",onChange:e=>{h(e.target.value.trim())},maxLength:45})}),(0,i.jsx)(n.b7,{md:1,children:(0,i.jsxs)(n.LX,{className:"form-select",onChange:e=>{v(e.target.value)},children:[(0,i.jsx)("option",{value:"",children:"RAM"}),(0,i.jsx)("option",{value:"8192 MB",children:"8 GB"}),(0,i.jsx)("option",{value:"10240 MB",children:"10 GB"}),(0,i.jsx)("option",{value:"12288 MB",children:"12 GB"}),(0,i.jsx)("option",{value:"16384 MB",children:"16 GB"})]})}),(0,i.jsx)(n.b7,{md:2,children:(0,i.jsxs)(n.LX,{className:"form-select",onChange:e=>{g(e.target.value)},required:!0,children:[(0,i.jsx)("option",{value:"",children:"Select source"}),(0,i.jsx)("option",{value:"INTERNAL",children:"Internal"}),(0,i.jsx)("option",{value:"EXTERNAL",children:"External"}),(0,i.jsx)("option",{value:"APSA",children:"APSA"})]})}),(0,i.jsx)(n.b7,{md:2,children:(0,i.jsx)(n.u5,{type:"submit",color:"secondary",children:"Add device"})})]})})};var d=e=>{let{visible:a,onClose:t,formContent:l,onEdit:o,onDelete:c,onCloseEdit:r}=e;const[d,u]=(0,s.useState)("PC"),[p,m]=(0,s.useState)(!1),[h,x]=(0,s.useState)(""),[v,j]=(0,s.useState)(!1),[g,C]=(0,s.useState)(""),[f,y]=(0,s.useState)(!1),[_,b]=(0,s.useState)(""),[N,M]=(0,s.useState)(!1),[S,A]=(0,s.useState)(""),[L,E]=(0,s.useState)(!1),[P,B]=(0,s.useState)("INTERNAL"),[k,T]=(0,s.useState)(!1);return(0,i.jsxs)(n.Tk,{visible:a,size:"lg",backdrop:"static",onClose:t,children:[(0,i.jsx)(n.p0,{children:(0,i.jsx)(n.fl,{children:"Edit device"})}),(0,i.jsx)(n.sD,{children:(0,i.jsxs)(n.lx,{className:"add-user row g-3 needs-validation justify-content-center",onSubmit:e=>{let a;e.preventDefault(),a={dev_id:l.dev_id,dev_type:p?d:l.dev_type,pc_name:v?h:l.pc_name,model:f?g:l.model,source:k?P:l.source,c_drive_capacity:N?_:l.c_drive_capacity,ram:L?S:l.ram},M(!1),m(!1),y(!1),j(!1),E(!1),T(!1),console.log("from Modal: ",a),o(a)},children:[(0,i.jsx)(n.b7,{md:2,children:(0,i.jsxs)(n.LX,{className:"form-select",onChange:e=>{u(e.target.value),m(!0)},defaultValue:l.dev_type,required:!0,children:[(0,i.jsx)("option",{disabled:!0,children:"Select type"}),(0,i.jsx)("option",{defaultValue:"PC",children:"PC"}),(0,i.jsx)("option",{value:"LAPTOP",children:"Laptop"}),(0,i.jsx)("option",{value:"MINIPC",children:"Mini PC"}),(0,i.jsx)("option",{value:"MACBOOK",children:"MacBook"}),(0,i.jsx)("option",{value:"IMAC",children:"iMac"}),(0,i.jsx)("option",{value:"MACMINI",children:"Mac Mini"})]})}),(0,i.jsx)(n.b7,{md:2,children:(0,i.jsx)(n.jO,{className:"form-control",type:"text",name:"pcName",placeholder:"PC Name",defaultValue:l.pc_name,onChange:e=>{j(!0),x(e.target.value.trim())},maxLength:45,required:!0})}),(0,i.jsx)(n.b7,{md:2,children:(0,i.jsx)(n.jO,{className:"form-control",type:"text",name:"model",defaultValue:l.model,placeholder:"Model",onChange:e=>{y(!0),C(e.target.value.trim())},maxLength:45})}),(0,i.jsx)(n.b7,{md:2,children:(0,i.jsx)(n.jO,{className:"form-control",type:"text",name:"cCapacity",defaultValue:l.c_drive_capacity,placeholder:"C:\\",onChange:e=>{M(!0),b(e.target.value.trim())},maxLength:45})}),(0,i.jsx)(n.b7,{md:2,children:(0,i.jsxs)(n.LX,{className:"form-select",defaultValue:l.ram,onChange:e=>{E(!0),A(e.target.value)},children:[(0,i.jsx)("option",{value:"",children:"RAM"}),(0,i.jsx)("option",{value:"8192 MB",children:"8 GB"}),(0,i.jsx)("option",{value:"10240 MB",children:"10 GB"}),(0,i.jsx)("option",{value:"12288 MB",children:"12 GB"}),(0,i.jsx)("option",{value:"16384 MB",children:"16 GB"})]})}),(0,i.jsx)(n.b7,{md:2,children:(0,i.jsxs)(n.LX,{className:"form-select",defaultValue:l.source,onChange:e=>{T(!0),B(e.target.value)},required:!0,children:[(0,i.jsx)("option",{disabled:!0,children:"Select source"}),(0,i.jsx)("option",{defaultValue:"EXTERNAL",children:"External"}),(0,i.jsx)("option",{value:"INTERNAL",children:"Internal"}),(0,i.jsx)("option",{value:"APSA",children:"APSA"})]})}),(0,i.jsxs)(n.b7,{xs:12,className:"modal-footer",children:[(0,i.jsx)(n.u5,{color:"secondary",onClick:r,children:"Cancel"}),(0,i.jsx)(n.u5,{color:"primary",onClick:()=>c(l.dev_id),children:"Delete user"}),(0,i.jsx)(n.u5,{color:"primary",type:"submit",children:"Save changes"})]})]})})]})},u=t(7174),p=t(33984),m=t(75903);t(43533);var h=()=>{const[e,a]=(0,s.useState)([]),[t,l]=(0,s.useState)(!1),[n,h]=(0,s.useState)({}),[x,v]=(0,s.useState)({}),[j,g]=(0,s.useState)(!1),[C,f]=(0,s.useState)(!1),[y,_]=(0,s.useState)(""),b=async()=>{console.log("fetching data..."),o().get("".concat(c.v.api,"/api/devices")).then((e=>{a(e.data)}))};(0,s.useEffect)((()=>{setTimeout((()=>{b()}),2e3)}),[a]);const N=()=>{l(!1)},M=e=>{_(e),f(!C)};return(0,i.jsxs)("div",{className:"table",children:[(0,i.jsx)(u.Z,{visible:j,popupMsg:y,onClose:()=>{g(!1)}}),(0,i.jsx)(p.Z,{visible:C,popupMsg:y,onClose:()=>{f(!1)}}),(0,i.jsx)(d,{visible:t,onClose:N,onEdit:e=>{console.log("editDevice",n,e),n.dev_type===e.dev_type&&n.pc_name===e.pc_name&&n.model===e.model&&n.c_drive_capacity===e.c_drive_capacity&&n.ram===e.ram&&n.source==e.source?M("No changes were made."):o().put("".concat(c.v.api,"/api/edit-device"),e).then((()=>{_("Device successfully updated."),g(!j),setTimeout((()=>{b()}),2e3)})).catch((e=>{l(!1),_(e.message),f(!C),console.log(e.message)})),l(!1)},formContent:n,onDelete:e=>{o().delete("".concat(c.v.api,"/api/delete-device/").concat(e)).then((()=>{_("Entry successfully deleted."),g(!j),l(!1),setTimeout((()=>{b()}),2e3)})).catch((e=>{l(!1),_(e.message),f(!C)}))},onError:M,onCloseEdit:N}),(0,i.jsx)("div",{className:"table card",children:(0,i.jsx)(r,{onAdd:e=>{console.log("adding device:",e),o().post("".concat(c.v.api,"/api/add-device"),{devType:e.devType,pcName:e.pcName,model:e.model,cCapacity:e.cCapacity,ram:e.ram,source:e.source}).then((e=>{_("Device successfully added."),g(!j),setTimeout((()=>{b()}),2e3)})).catch((e=>{l(!1),_(e.message),f(!C),console.log(e.message)}))},deviceList:e,onError:M})}),(0,i.jsx)("div",{className:"table card",children:(0,i.jsx)(m.uE,{cleaner:!0,columns:["dev_id",{key:"dev_type",label:"Type"},"pc_name","model",{key:"c_drive_capacity",label:"C: Capacity"},{key:"ram",label:"RAM"},"source",{key:"show_details",label:"",_style:{width:"1%"},filter:!1,sorter:!1}],tableProps:{hover:!0,responsive:!0},columnSorter:!0,items:e,pagination:!0,itemsPerPage:10,tableFilter:!0,scopedColumns:{show_details:e=>(0,i.jsx)("td",{className:"py-2",children:(0,i.jsx)(m.u5,{color:"primary",variant:"outline",shape:"square",size:"sm",onClick:()=>{h(e),v(e),l(!0)},children:"Edit"})})}})})]})}}}]);