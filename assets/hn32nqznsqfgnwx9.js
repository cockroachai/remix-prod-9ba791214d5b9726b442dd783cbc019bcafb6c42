import{j as l,ep as R,eq as h,r as g,dY as C,H as v,ba as M,e3 as i,aU as b}from"./otyn7m3v4o5hjv1m.js";import{p as x}from"./n8ljlp21wilt13tf.js";import{c as T}from"./lw3rrnnb5dxcyypl.js";import{bf as j,b1 as p,Y as f,br as z,bs as G,bt as E}from"./g98o1hu13svzcy4j.js";function I(e){const t=x(e.gizmo.display.name);return t==null?[]:[{title:t},{property:"og:site_name",content:"ChatGPT"},{property:"og:type",content:"website"},{property:"og:title",content:t},...e.gizmo.display.description?[{name:"description",content:e.gizmo.display.description},{property:"og:description",content:e.gizmo.display.description}]:[],...e.gizmo.display.profile_picture_url?[{property:"og:image",content:e.gizmo.display.profile_picture_url},{property:"og:image:width",content:"512"},{property:"og:image:height",content:"512"}]:[]]}function O({gizmo:e}){return l.jsx(R,{children:l.jsx(h,{metadata:I(e)})})}function U({serverThreadId:e,clientThreadId:t,isStaticSharedThread:n,isDynamicSharedThread:o}){var m;const r=j(p.ReportConversation),s=((m=b("3376455464"))==null?void 0:m.value)||n||o,y=T(t);let a=e??y;const d=g.useContext(C);a==null&&d!=null&&(a=d.serverSharedThreadId??void 0);const c=v(),u=M();return g.useEffect(()=>{a==null&&r&&s&&(u.danger(c.formatMessage({id:"gizmo.report.conversationModal.emptyConversationError",defaultMessage:"Empty conversations cannot be reported"})),f.closeModal(p.ReportConversation))},[a,r,s,c,u]),!r||!s||a==null?null:l.jsx(_,{serverThreadId:a,onClose:()=>f.closeModal(p.ReportConversation),isStaticSharedThread:n})}function _({serverThreadId:e,onClose:t,isStaticSharedThread:n}){const{data:o}=z(n?i.ShareableConversation:i.Conversation),r=v(),s=G(r,e,n?i.ShareableConversation:i.Conversation);return o==null||e==null?null:l.jsx(E,{reasons:o.reasons,submitReport:s,title:r.formatMessage({id:"gizmo.report.conversationModal.title",defaultMessage:"Report a conversation"}),onClose:t,header:o.header,subHeader:o.header_explanation})}export{O as G,_ as R,U as T,I as g};
//# sourceMappingURL=hn32nqznsqfgnwx9.js.map
