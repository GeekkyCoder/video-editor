"use strict";(self.webpackChunkvideo_editor=self.webpackChunkvideo_editor||[]).push([[562],{5576:function(e,n,s){s.r(n),s.d(n,{default:function(){return J}});var i=s(885),t=s(2791),r=s(6710),o=s(1247),l=s(2473),a=(s(5262),s(9658)),c=s(9846),d=s(3127),x=s(2028),u=s(3582),h=s(6549),m=s(9326),g=s(184);var j=function(){return(0,g.jsx)("div",{className:"share-container",children:(0,g.jsxs)("div",{className:"socials",children:[(0,g.jsx)(c.Z,{className:"facebook-button",url:"https://youtu.be/N3AkSS5hXMA",quote:"hey bro",hashtag:"#yt",children:(0,g.jsx)(d.Z,{className:"social-icon",size:"35px",round:!0,iconFillColor:"lightblue"})}),(0,g.jsx)(x.Z,{className:"linkdein-button",url:"https://youtu.be/N3AkSS5hXMA",children:(0,g.jsx)(u.Z,{className:"social-icon",size:"35px",round:!0,iconFillColor:"lightblue"})}),(0,g.jsx)(h.Z,{className:"email-button",url:"https://youtu.be/N3AkSS5hXMA",children:(0,g.jsx)(m.Z,{className:"social-icon",size:"35px",round:!0,bgStyle:{fill:"grey"}})})]})})},f=s(6268),p=s(580),v=s(675),y=s(8733),b=s(7863),S=s(8867),N=s(1920),Z=s(6243),k=s(6338),C=s(4796),w=s(3239),T=s(3400),D=s(9823),z=s(6125);var M,V,A=function(){var e=(0,t.useState)(!0),n=(0,i.Z)(e,2),s=n[0],r=n[1];return(0,g.jsx)("div",{children:(0,g.jsx)(z.Z,{in:s,children:(0,g.jsx)(a.Z,{action:(0,g.jsx)(T.Z,{"aria-label":"close",size:"small",onClick:function(){r(!1)},children:(0,g.jsx)(D.Z,{fontSize:"medium"})}),sx:{mb:2},children:"trimmed \u2714"})})})},F=s(7630),B=s(7558),I=s(7123),O=s(168),_=s(4554),E=s(6151),P=(0,F.ZP)(_.Z)(M||(M=(0,O.Z)([" \n    width: 500px;\n    max-width: 80%;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    @media (max-width:650px){\n        max-width: 90%;\n    }\n"]))),H=(0,F.ZP)(E.Z)(V||(V=(0,O.Z)([" \n    width: 30%;\n    display: block;\n    margin: 1em auto;\n    border-radius: 10px;\n    &:hover{\n        background-color: black;\n    }\n    @media (max-width:650px){\n        width: 70%;\n    }\n"]))),L=(0,F.ZP)(B.Z)((function(e){var n=e.theme;return{"& .MuiDialogContent-root":{padding:n.spacing(2)},"& .MuiDialogActions-root":{padding:n.spacing(1)}}}));function X(){var e=t.useContext(o._),n=e.setTextStartTime,s=e.setEndTextTime,i=e.setSelect,r=e.setRenderTextOnVideo,l=e.textStartTime,a=e.endTextTime,c=e.renderTextOnVideo,d=e.select,x=e.handleAddText,u=e.isOpen,h=e.setIsOpen;return(0,g.jsx)("div",{children:(0,g.jsxs)(L,{onClose:function(){h(!1)},"aria-labelledby":"customized-dialog-title",open:u,children:[(0,g.jsxs)(P,{children:[(0,g.jsx)("h3",{className:"heading",children:"Add text to your video"}),(0,g.jsxs)("div",{className:"from-container",children:[(0,g.jsx)("label",{children:"From"}),(0,g.jsx)("input",{type:"text",placeholder:"00:00:00",value:l,onChange:function(e){return n(e.target.value)}})]}),(0,g.jsxs)("div",{className:"to-container",children:[(0,g.jsx)("label",{children:"To"}),(0,g.jsx)("input",{type:"text",placeholder:"00:00:00",value:a,onChange:function(e){return s(e.target.value)}})]}),(0,g.jsx)("div",{className:"select-container",children:(0,g.jsxs)("select",{value:d,onChange:function(e){return i(e.target.value)},children:[(0,g.jsx)("option",{value:"x=(w-text_w)/2:y=h-th-10",children:"Bottom center"}),(0,g.jsx)("option",{value:"x=w-tw-10:y=h-th-10",children:"Bottom right"}),(0,g.jsx)("option",{value:"x=10:y=h-th-10",children:"Bottom left"}),(0,g.jsx)("option",{value:"x=(w-text_w)/2:y=(h-text_h)/2",children:"Center"}),(0,g.jsx)("option",{value:"x=(w-text_w)/2:y=100",children:"Top center"}),(0,g.jsx)("option",{value:"x=w-tw-10:y=10",children:"Top right"}),(0,g.jsx)("option",{value:"x=10:y=10",children:"Top left"})]})}),(0,g.jsx)("div",{className:"text-container",children:(0,g.jsx)("input",{type:"text",placeholder:"Here goes the text..",value:c,onChange:function(e){return r(e.target.value)}})}),(0,g.jsx)(H,{onClick:x,color:"success",variant:"contained",className:"add-text-btn",children:"Add Text"})]}),(0,g.jsx)(I.Z,{})]})})}var J=function(){var e=(0,t.useState)(0),n=(0,i.Z)(e,2),s=n[0],c=n[1],d=(0,t.useState)(0),x=(0,i.Z)(d,2),u=x[0],h=x[1],m=(0,t.useState)(0),T=(0,i.Z)(m,2),D=T[0],z=T[1],M=(0,t.useState)(!1),V=(0,i.Z)(M,2),F=V[0],B=V[1],I=(0,t.useState)(!1),O=(0,i.Z)(I,2),_=O[0],E=O[1],P=(0,t.useRef)(null),H=(0,t.useRef)(null),L=(0,t.useState)(!1),J=(0,i.Z)(L,2),R=J[0],U=J[1],q=(0,t.useContext)(o._),W=q.theme,K=q.setThemeMode,Y=q.choosenVideo,G=q.handleTrim,Q=q.startValue,$=q.setStartValue,ee=q.setEndValue,ne=q.isTrimmingDone,se=q.setIsTrimmingDone,ie=q.isVideoPlaying,te=q.setIsVideoPlaying,re=q.setIsNotLoading,oe=q.setUserHasChoosenVideo,le=q.isNotloading,ae=q.onChangeMergeVideo,ce=q.isMerged,de=q.endValue,xe=q.setIsOpen,ue=q.isOpen,he=q.setIsSliderMovedByUser,me=q.isTrimButtonHovered,ge=q.setIsTrimButtonHovered,je=q.isDisableTrimButton,fe=q.setIsDisableTrimButton,pe=q.isSliderMoving,ve=q.setIsSliderMoving,ye=q.showSuccessAlert,be=q.setSuccesAlert,Se=q.showWarningAlert,Ne=q.setShowWarningAlert,Ze=function(e){Ne(!1),be(!0),ve(!0),fe(!1),he(!0),te(!1);var n=(0,i.Z)(e,2),s=n[0],t=n[1];c(s),h(t),$(s),ee(t)};return(0,t.useEffect)((function(){if(P.current){var e=P.current.getDuration()||100;z(e),P.current.seekTo(Q),P.current.seekTo(de)}})),(0,t.useEffect)((function(){if(ne&&H.current){var e=H.current.getDuration()||100;z(Math.round(Number(e))),H.current.seekTo(Q)}}),[ne,Q,D]),console.log(Math.round(Number(D))),(0,g.jsxs)(g.Fragment,{children:[ne?(0,g.jsx)(A,{}):"",R&&(0,g.jsx)(j,{}),(0,g.jsxs)(f.HU,{className:"".concat(W,"-mode"),children:[(0,g.jsxs)(f.wm,{children:[(0,g.jsxs)(f.dm,{onMouseEnter:function(e){e.stopPropagation(),U(!0)},onClick:function(e){e.stopPropagation(),U((function(e){return!e}))},children:[(0,g.jsx)(p.Z,{fontSize:"medium",sx:{color:"#000000"}}),(0,g.jsx)(f.d_,{sx:{marginLeft:"1em"},variant:"body2",children:"Publish"})]}),(0,g.jsxs)(f.dw,{children:[(0,g.jsx)(v.Z,{sx:{color:"#000000"},fontSize:"medium"}),(0,g.jsx)(f.Nh,{sx:{marginLeft:"1em"},variant:"body2",children:"Invite"})]}),(0,g.jsx)(f.eq,{onClick:K,children:"light"===W?(0,g.jsx)(f.NW,{className:"icons-fade",fontSize:"large",sx:{color:"#FFC300"}}):(0,g.jsx)(f.kL,{className:"icons-fade",fontSize:"large"})})]}),le?(0,g.jsx)(f.yj,{children:ne?(0,g.jsx)(r.Z,{url:Y,ref:H,width:"100%",height:"100%",controls:!0,playing:ie,muted:F}):(0,g.jsx)(r.Z,{pip:!0,url:Y,ref:P,width:"100%",height:"100%",controls:!0,playing:ie,muted:F})}):(0,g.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,g.jsx)("p",{className:"processing-text-video",children:"Processing... "}),(0,g.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,g.jsx)(w.Z,{sx:{marginLeft:"5em"},fontSize:"large",color:"primary"})})]}),!ce&&_&&(0,g.jsxs)("div",{className:"merge-container",children:[(0,g.jsxs)(a.Z,{className:"alert-message",severity:"info",sx:{width:"100%"},children:["Merge video ? ",(0,g.jsx)("strong",{children:"choose a file \ud83d\udc47"})]}),(0,g.jsx)("input",{onChange:ae,type:"file",className:"merge-file-input",id:"up_file",name:"merge"})]}),ce&&(0,g.jsx)("div",{className:"merge-container",children:(0,g.jsx)(a.Z,{className:"alert-message",severity:"success",sx:{width:"100%"},children:"Video merged Successfully \u2714!"})}),(0,g.jsxs)(f.V,{children:[(0,g.jsxs)(f.uV,{children:[(0,g.jsx)(Z.Z,{onClick:function(){se(!1),oe(!1),re(!1),setTimeout((function(){re(!0)}),1e3)},fontSize:"large",sx:{color:" #000000"}}),(0,g.jsx)(f.oD,{variant:"body2",children:"Change"})]}),(0,g.jsxs)(f.H1,{children:[(0,g.jsx)(b.Z,{onClick:function(){E((function(e){return!e}))},fontSize:"large",sx:{color:" #000000"}}),(0,g.jsx)(f.oD,{variant:"body2",children:"Merge"})]}),(0,g.jsxs)(f.Av,{children:[(0,g.jsx)(S.Z,{onClick:function(){xe((function(e){return!e}))},fontSize:"large",sx:{color:" #000000"}}),(0,g.jsx)(f.oD,{variant:"body2",children:"Text"})]}),(0,g.jsxs)(f.It,{sx:{opacity:je?".7":"1"},onMouseEnter:function(){je?(be(!1),Ne(!0)):(Ne(!1),be(!0)),ge(!0)},children:[(pe||me)&&(0,g.jsxs)("div",{className:"trim-button-alert",children:[Se&&(0,g.jsx)("div",{children:(0,g.jsx)(a.Z,{className:"alert-message",severity:"warning",sx:{width:"100%",zIndex:"1000",position:"relative"},children:"First Choose the timeframes from slider first to start trimming!"})}),ye&&(0,g.jsx)("div",{children:(0,g.jsx)(a.Z,{className:"alert-message",severity:"success",sx:{width:"100%",zIndex:"1000",position:"relative"},children:"You can now trim it!"})})]}),(0,g.jsx)(y.Z,{onClick:G,fontSize:"large",sx:{color:" #000000"}}),(0,g.jsx)(f.oD,{variant:"body2",children:"Trim"})]}),(0,g.jsxs)(f.JK,{children:[(0,g.jsx)(N.Z,{onClick:function(){he(!1),se(!1)},fontSize:"large",sx:{color:" #000000"}}),(0,g.jsx)(f.oD,{variant:"body2",children:"Reset"})]}),(0,g.jsxs)(f.tg,{children:[F?(0,g.jsx)(k.Z,{onClick:function(){B(!1)},fontSize:"large",sx:{color:" #000000"}}):(0,g.jsx)(C.Z,{onClick:function(){B(!0)},fontSize:"large",sx:{color:" #000000"}}),(0,g.jsx)(f.oD,{variant:"body2",children:F?"Unmute":"Mute"})]})]}),ue&&(0,g.jsx)(X,{}),(0,g.jsx)("div",{children:ne?(0,g.jsxs)("div",{className:"trimmed-video-seconds-container",children:[(0,g.jsx)("p",{className:"title",children:"Trimmed Video"}),(0,g.jsx)("span",{className:"time",children:"00:".concat(JSON.stringify(s).slice(0,3))}),(0,g.jsx)("span",{children:"-"}),(0,g.jsx)("span",{className:"time",children:"00:".concat(JSON.stringify(u).slice(0,3))}),(0,g.jsxs)("span",{className:"calculate-trim-seconds",children:["(00:",u-s," seconds)"]})]}):(0,g.jsxs)("div",{className:"original-video-seconds-container",children:[(0,g.jsx)("p",{className:"title",children:"Original Video"}),(0,g.jsx)("span",{className:"time",children:"00:".concat(JSON.stringify(Q).slice(0,3))}),(0,g.jsx)("span",{children:"-"}),(0,g.jsx)("span",{className:"time",children:"00:".concat(JSON.stringify(de).slice(0,3))})]})}),(0,g.jsxs)(f._v,{children:[(0,g.jsx)(f.Xx,{children:ie?(0,g.jsx)(f.qf,{onClick:function(){te(!1)},fontSize:"large",sx:{color:"#914979"}}):(0,g.jsx)(f.o1,{onClick:function(){te(!0)},fontSize:"large",sx:{color:"#914979"}})}),(0,g.jsx)(f.XX,{children:ne?(0,g.jsx)(l.Z,{ariaLabelledByForHandle:function(){return"range"},autoFocus:!0,range:!0,defaultValue:[0,100],min:D/100,max:D,onChange:Ze,draggableTrack:!0,keyboard:!0,pushable:!0,allowCross:!0,activeDotStyle:[{background:"blue"}],trackStyle:[{background:"linear-gradient(#DBDEF5,blue)",height:"10px"}],railStyle:{backgroundColor:"#DBE0F5",height:"10px"}}):(0,g.jsx)(l.Z,{ariaLabelledByForHandle:function(){return"range"},autoFocus:!0,range:!0,defaultValue:[0,100],min:D/100,max:D,onChange:Ze,draggableTrack:!0,keyboard:!0,pushable:!0,allowCross:!0,activeDotStyle:[{background:"blue"}],trackStyle:[{backgroundImage:"linear-gradient(#DBDEF5,blue)",height:"10px"}],railStyle:{backgroundColor:"#DBE0F5",height:"10px"}})})]})]})]})}}}]);
//# sourceMappingURL=562.8a4bd8cc.chunk.js.map