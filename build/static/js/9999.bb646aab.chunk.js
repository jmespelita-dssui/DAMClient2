"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[9999],{29872:function(e,s,t){t.d(s,{v:function(){return r}});const r={appID:"9860caa9-1655-4c97-ba6f-ca9a203de773",redirectUri:"https://dssui-asset-manager.herokuapp.com",api:"https://dssui-asset-manager.herokuapp.com",scopes:["user.read"],authority:"https://login.microsoftonline.com/dssui.onmicrosoft.com",postLogoutRedirectUri:""}},33984:function(e,s,t){var r=t(27998),i=t(46417);s.Z=e=>{let{visible:s,popupMsg:t,onClose:o}=e;return(0,i.jsxs)(r.Tk,{size:"sm",visible:s,onClose:o,children:[(0,i.jsx)(r.p0,{children:(0,i.jsx)(r.fl,{children:"Error"})}),(0,i.jsx)(r.sD,{children:t})]})}},7174:function(e,s,t){var r=t(27998),i=t(46417);s.Z=e=>{let{visible:s,popupMsg:t,onClose:o}=e;return(0,i.jsxs)(r.Tk,{size:"sm",visible:s,onClose:o,children:[(0,i.jsx)(r.p0,{children:(0,i.jsx)(r.fl,{children:"Success"})}),(0,i.jsx)(r.sD,{children:t})]})}},39999:function(e,s,t){t.r(s),t.d(s,{default:function(){return h}});var r=t(47313),i=t(75903),o=t(31881),a=t.n(o),n=t(29872),d=t(27998),l=t(46417);var c=e=>{let{onAdd:s,ipAddressList:t,onError:i}=e;const[o,a]=(0,r.useState)(""),n=e=>{e.target.reset(),a("")};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(d.lx,{className:"add-user row g-3 needs-validation justify-content-center",onSubmit:e=>{e.preventDefault();const r="10.7.12."+o;if(!o.match(/^[0-9]+$/))return void i("Please insert valid IP address.");const d=t.some((e=>r===e.ip_address));a(),d?i("IP Address already exists."):(s({completeIP:r}),n(e))},children:(0,l.jsxs)(d.YR,{children:[(0,l.jsx)(d.wV,{id:"basic-addon1",children:"10.7.12."}),(0,l.jsx)(d.jO,{className:"form-control",type:"text",name:"ipAddress",onChange:e=>{a(e.target.value.trim())},maxLength:3,required:!0}),(0,l.jsx)(d.u5,{type:"submit",color:"secondary",children:"Add IP Address"})]})})})};var u=e=>{let{visible:s,onClose:t,formContent:r,onDelete:i,onCloseEdit:o}=e;return(0,l.jsxs)(d.Tk,{visible:s,backdrop:"static",onClose:t,children:[(0,l.jsx)(d.p0,{onClose:()=>setVisibleIPAddress(!1),children:(0,l.jsx)(d.fl,{children:"IP Address"})}),(0,l.jsx)(d.sD,{children:(0,l.jsxs)(d.lx,{className:"add-user row g-3 needs-validation justify-content-center",children:[(0,l.jsx)(d.YR,{children:(0,l.jsx)(d.jO,{className:"form-control",type:"text",name:"ipAddress",disabled:!0,defaultValue:r.ip_address,maxLength:3,required:!0})}),(0,l.jsxs)(d.b7,{xs:12,className:"modal-footer",children:[(0,l.jsx)(d.u5,{color:"secondary",onClick:o,children:"Cancel"}),(0,l.jsx)(d.u5,{color:"primary",onClick:()=>i(r.ip_address),children:"Delete IP Address"})]})]})})]})},p=t(7174),m=t(33984);t(43533);var h=()=>{const[e,s]=(0,r.useState)([]),[t,o]=(0,r.useState)(!1),[d,h]=(0,r.useState)({}),[x,j]=(0,r.useState)({}),[f,v]=(0,r.useState)(!1),[g,b]=(0,r.useState)(!1),[C,_]=(0,r.useState)(""),y=async()=>{console.log("fetching data..."),a().get("".concat(n.v.api,"/api/ip-addresses")).then((e=>{s(e.data)}))};(0,r.useEffect)((()=>{setTimeout((()=>{y()}),2e3)}),[s]);const A=()=>{o(!1)},k=e=>{_(e),b(!g)};return(0,l.jsxs)("div",{className:"table",children:[(0,l.jsx)(p.Z,{visible:f,popupMsg:C,onClose:()=>{v(!1)}}),(0,l.jsx)(m.Z,{visible:g,popupMsg:C,onClose:()=>{b(!1)}}),(0,l.jsx)(u,{visible:t,onClose:A,formContent:d,ipAddress:x,ipAddressList:e,onDelete:e=>{a().delete("".concat(n.v.api,"/").concat(e)).then((()=>{_("Entry successfully deleted."),v(!f),o(!1),setTimeout((()=>{y()}),2e3)})).catch((e=>{o(!1),_(e.message),b(!g)}))},onError:k,onCloseEdit:A}),(0,l.jsx)("div",{className:"table card",children:(0,l.jsx)(c,{onAdd:e=>{a().post("".concat(n.v.api,"/api/add-ip-address"),{ipAddress:e.completeIP}).then((e=>{_("IP Address successfully added."),v(!f),setTimeout((()=>{y()}),2e3)})).catch((e=>{o(!1),_(e.message),b(!g),console.log(e.message)}))},ipAddressList:e,onError:k})}),(0,l.jsx)("div",{className:"table card",children:(0,l.jsx)(i.uE,{cleaner:!0,columns:["ip_address",{key:"show_details",label:"",_style:{width:"1%"},filter:!1,sorter:!1}],tableProps:{hover:!0,responsive:!0},columnSorter:!0,items:e,pagination:!0,itemsPerPage:10,tableFilter:!0,scopedColumns:{show_details:e=>(0,l.jsx)("td",{className:"py-2",children:(0,l.jsx)(i.u5,{color:"primary",variant:"outline",shape:"square",size:"sm",onClick:()=>{console.log(e),h(e),j(e),o(!0)},children:"Edit"})})}})})]})}}}]);