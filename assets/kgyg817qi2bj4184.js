import{eW as nt,eX as lt,eY as ht,eZ as ut,e_ as ct,e$ as C,f0 as et,f1 as dt,f2 as M,f3 as ft,f4 as y,ae as mt,f5 as O,f6 as pt,f7 as b,f8 as f,f9 as it,fa as S,fb as j,fc as p,fd as k,fe as I,ff as z,fg as A,fh as yt,fi as gt,fj as vt,fk as Tt,fl as B,fm as L,fn as W,fo as xt,fp as Pt,fq as E,fr as Dt,fs as w,ft as H,fu as _,fv as F,fw as St,fx as jt,fy as G,fz as Bt,fA as Rt,fB as At,fC as Lt,fD as st,fE as Vt,fF as kt,fG as Et,fH as Ft,fI as Ut}from"./g98o1hu13svzcy4j.js";const q=["","X","Y","Z"],Ct={visibility:"hidden"},X=1e3;let Ot=0;const x={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function ot({attachResizeListener:e,defaultParent:l,measureScroll:u,checkIsScrollRoot:d,resetTransform:V}){return class{constructor(t={},i=l==null?void 0:l()){this.id=Ot++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,x.totalNodes=x.resolvedTargetDeltas=x.recalculatedProjection=0,this.nodes.forEach(Nt),this.nodes.forEach(Ht),this.nodes.forEach(_t),this.nodes.forEach(Mt),nt(x)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=t,this.root=i?i.root||i:this,this.path=i?[...i.path,i]:[],this.parent=i,this.depth=i?i.depth+1:0;for(let s=0;s<this.path.length;s++)this.path[s].shouldResetTransform=!0;this.root===this&&(this.nodes=new lt)}addEventListener(t,i){return this.eventHandlers.has(t)||this.eventHandlers.set(t,new ht),this.eventHandlers.get(t).add(i)}notifyListeners(t,...i){const s=this.eventHandlers.get(t);s&&s.notify(...i)}hasListeners(t){return this.eventHandlers.has(t)}mount(t,i=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=ut(t),this.instance=t;const{layoutId:s,layout:o,visualElement:a}=this.options;if(a&&!a.current&&a.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),i&&(o||s)&&(this.isLayoutDirty=!0),e){let r;const n=()=>this.root.updateBlockedByResize=!1;e(t,()=>{this.root.updateBlockedByResize=!0,r&&r(),r=ct(n,250),C.hasAnimatedSinceResize&&(C.hasAnimatedSinceResize=!1,this.nodes.forEach(Z))})}s&&this.root.registerSharedNode(s,this),this.options.animate!==!1&&a&&(s||o)&&this.addEventListener("didUpdate",({delta:r,hasLayoutChanged:n,hasRelativeTargetChanged:h,layout:m})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const c=this.options.transition||a.getDefaultTransition()||Zt,{onLayoutAnimationStart:P,onLayoutAnimationComplete:T}=a.getProps(),D=!this.targetLayout||!et(this.targetLayout,m)||h,g=!n&&h;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||g||n&&(D||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(r,g);const v={...dt(c,"layout"),onPlay:P,onComplete:T};(a.shouldReduceMotion||this.options.layoutRoot)&&(v.delay=0,v.type=!1),this.startAnimation(v)}else n||Z(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=m})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const t=this.getStack();t&&t.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,M(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Gt),this.animationId++)}getTransformTemplate(){const{visualElement:t}=this.options;return t&&t.getProps().transformTemplate}willUpdate(t=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let a=0;a<this.path.length;a++){const r=this.path[a];r.shouldResetTransform=!0,r.updateScroll("snapshot"),r.options.layoutRoot&&r.willUpdate(!1)}const{layoutId:i,layout:s}=this.options;if(i===void 0&&!s)return;const o=this.getTransformTemplate();this.prevTransformTemplateValue=o?o(this.latestValues,""):void 0,this.updateSnapshot(),t&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Y);return}this.isUpdating||this.nodes.forEach(zt),this.isUpdating=!1,this.nodes.forEach(Wt),this.nodes.forEach(bt),this.nodes.forEach(wt),this.clearAllSnapshots();const i=ft.now();y.delta=mt(0,1e3/60,i-y.timestamp),y.timestamp=i,y.isProcessing=!0,O.update.process(y),O.preRender.process(y),O.render.process(y),y.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,pt.read(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(It),this.sharedNodes.forEach(qt)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,b.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){b.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let s=0;s<this.path.length;s++)this.path[s].updateScroll();const t=this.layout;this.layout=this.measure(!1),this.layoutCorrected=f(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:i}=this.options;i&&i.notify("LayoutMeasure",this.layout.layoutBox,t?t.layoutBox:void 0)}updateScroll(t="measure"){let i=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===t&&(i=!1),i&&(this.scroll={animationId:this.root.animationId,phase:t,isRoot:d(this.instance),offset:u(this.instance)})}resetTransform(){if(!V)return;const t=this.isLayoutDirty||this.shouldResetTransform,i=this.projectionDelta&&!it(this.projectionDelta),s=this.getTransformTemplate(),o=s?s(this.latestValues,""):void 0,a=o!==this.prevTransformTemplateValue;t&&(i||S(this.latestValues)||a)&&(V(this.instance,o),this.shouldResetTransform=!1,this.scheduleRender())}measure(t=!0){const i=this.measurePageBox();let s=this.removeElementScroll(i);return t&&(s=this.removeTransform(s)),$t(s),{animationId:this.root.animationId,measuredBox:i,layoutBox:s,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:t}=this.options;if(!t)return f();const i=t.measureViewportBox(),{scroll:s}=this.root;return s&&(j(i.x,s.offset.x),j(i.y,s.offset.y)),i}removeElementScroll(t){const i=f();p(i,t);for(let s=0;s<this.path.length;s++){const o=this.path[s],{scroll:a,options:r}=o;if(o!==this.root&&a&&r.layoutScroll){if(a.isRoot){p(i,t);const{scroll:n}=this.root;n&&(j(i.x,-n.offset.x),j(i.y,-n.offset.y))}j(i.x,a.offset.x),j(i.y,a.offset.y)}}return i}applyTransform(t,i=!1){const s=f();p(s,t);for(let o=0;o<this.path.length;o++){const a=this.path[o];!i&&a.options.layoutScroll&&a.scroll&&a!==a.root&&k(s,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),S(a.latestValues)&&k(s,a.latestValues)}return S(this.latestValues)&&k(s,this.latestValues),s}removeTransform(t){const i=f();p(i,t);for(let s=0;s<this.path.length;s++){const o=this.path[s];if(!o.instance||!S(o.latestValues))continue;I(o.latestValues)&&o.updateSnapshot();const a=f(),r=o.measurePageBox();p(a,r),z(i,o.latestValues,o.snapshot?o.snapshot.layoutBox:void 0,a)}return S(this.latestValues)&&z(i,this.latestValues),i}setTargetDelta(t){this.targetDelta=t,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(t){this.options={...this.options,...t,crossfade:t.crossfade!==void 0?t.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==y.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(t=!1){var i;const s=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=s.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=s.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=s.isSharedProjectionDirty);const o=!!this.resumingFrom||this!==s;if(!(t||o&&this.isSharedProjectionDirty||this.isProjectionDirty||!((i=this.parent)===null||i===void 0)&&i.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:r,layoutId:n}=this.options;if(!(!this.layout||!(r||n))){if(this.resolvedRelativeTargetAt=y.timestamp,!this.targetDelta&&!this.relativeTarget){const h=this.getClosestProjectingParent();h&&h.layout&&this.animationProgress!==1?(this.relativeParent=h,this.forceRelativeParentToResolveTarget(),this.relativeTarget=f(),this.relativeTargetOrigin=f(),A(this.relativeTargetOrigin,this.layout.layoutBox,h.layout.layoutBox),p(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=f(),this.targetWithTransforms=f()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),yt(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):p(this.target,this.layout.layoutBox),gt(this.target,this.targetDelta)):p(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const h=this.getClosestProjectingParent();h&&!!h.resumingFrom==!!this.resumingFrom&&!h.options.layoutScroll&&h.target&&this.animationProgress!==1?(this.relativeParent=h,this.forceRelativeParentToResolveTarget(),this.relativeTarget=f(),this.relativeTargetOrigin=f(),A(this.relativeTargetOrigin,this.target,h.target),p(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}x.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||I(this.parent.latestValues)||vt(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var t;const i=this.getLead(),s=!!this.resumingFrom||this!==i;let o=!0;if((this.isProjectionDirty||!((t=this.parent)===null||t===void 0)&&t.isProjectionDirty)&&(o=!1),s&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(o=!1),this.resolvedRelativeTargetAt===y.timestamp&&(o=!1),o)return;const{layout:a,layoutId:r}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(a||r))return;p(this.layoutCorrected,this.layout.layoutBox);const n=this.treeScale.x,h=this.treeScale.y;Tt(this.layoutCorrected,this.treeScale,this.path,s),i.layout&&!i.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(i.target=i.layout.layoutBox,i.targetWithTransforms=f());const{target:m}=i;if(!m){this.projectionTransform&&(this.projectionDelta=B(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=B(),this.projectionDeltaWithTransform=B());const c=this.projectionTransform;L(this.projectionDelta,this.layoutCorrected,m,this.latestValues),this.projectionTransform=W(this.projectionDelta,this.treeScale),(this.projectionTransform!==c||this.treeScale.x!==n||this.treeScale.y!==h)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",m)),x.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(t=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),t){const i=this.getStack();i&&i.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(t,i=!1){const s=this.snapshot,o=s?s.latestValues:{},a={...this.latestValues},r=B();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!i;const n=f(),h=s?s.source:void 0,m=this.layout?this.layout.source:void 0,c=h!==m,P=this.getStack(),T=!P||P.members.length<=1,D=!!(c&&!T&&this.options.crossfade===!0&&!this.path.some(Yt));this.animationProgress=0;let g;this.mixTargetDelta=v=>{const R=v/1e3;$(r.x,t.x,R),$(r.y,t.y,R),this.setTargetDelta(r),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(A(n,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Xt(this.relativeTarget,this.relativeTargetOrigin,n,R),g&&Bt(this.relativeTarget,g)&&(this.isProjectionDirty=!1),g||(g=f()),p(g,this.relativeTarget)),c&&(this.animationValues=a,xt(a,o,this.latestValues,R,D,T)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=R},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(t){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(M(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=b.update(()=>{C.hasAnimatedSinceResize=!0,this.currentAnimation=Pt(0,X,{...t,onUpdate:i=>{this.mixTargetDelta(i),t.onUpdate&&t.onUpdate(i)},onComplete:()=>{t.onComplete&&t.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const t=this.getStack();t&&t.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(X),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const t=this.getLead();let{targetWithTransforms:i,target:s,layout:o,latestValues:a}=t;if(!(!i||!s||!o)){if(this!==t&&this.layout&&o&&at(this.options.animationType,this.layout.layoutBox,o.layoutBox)){s=this.target||f();const r=E(this.layout.layoutBox.x);s.x.min=t.target.x.min,s.x.max=s.x.min+r;const n=E(this.layout.layoutBox.y);s.y.min=t.target.y.min,s.y.max=s.y.min+n}p(i,s),k(i,a),L(this.projectionDeltaWithTransform,this.layoutCorrected,i,a)}}registerSharedNode(t,i){this.sharedNodes.has(t)||this.sharedNodes.set(t,new Dt),this.sharedNodes.get(t).add(i);const o=i.options.initialPromotionConfig;i.promote({transition:o?o.transition:void 0,preserveFollowOpacity:o&&o.shouldPreserveFollowOpacity?o.shouldPreserveFollowOpacity(i):void 0})}isLead(){const t=this.getStack();return t?t.lead===this:!0}getLead(){var t;const{layoutId:i}=this.options;return i?((t=this.getStack())===null||t===void 0?void 0:t.lead)||this:this}getPrevLead(){var t;const{layoutId:i}=this.options;return i?(t=this.getStack())===null||t===void 0?void 0:t.prevLead:void 0}getStack(){const{layoutId:t}=this.options;if(t)return this.root.sharedNodes.get(t)}promote({needsReset:t,transition:i,preserveFollowOpacity:s}={}){const o=this.getStack();o&&o.promote(this,s),t&&(this.projectionDelta=void 0,this.needsReset=!0),i&&this.setOptions({transition:i})}relegate(){const t=this.getStack();return t?t.relegate(this):!1}resetRotation(){const{visualElement:t}=this.options;if(!t)return;let i=!1;const{latestValues:s}=t;if((s.rotate||s.rotateX||s.rotateY||s.rotateZ)&&(i=!0),!i)return;const o={};for(let a=0;a<q.length;a++){const r="rotate"+q[a];s[r]&&(o[r]=s[r],t.setStaticValue(r,0))}t.render();for(const a in o)t.setStaticValue(a,o[a]);t.scheduleRender()}getProjectionStyles(t){var i,s;if(!this.instance||this.isSVG)return;if(!this.isVisible)return Ct;const o={visibility:""},a=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,o.opacity="",o.pointerEvents=w(t==null?void 0:t.pointerEvents)||"",o.transform=a?a(this.latestValues,""):"none",o;const r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){const c={};return this.options.layoutId&&(c.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,c.pointerEvents=w(t==null?void 0:t.pointerEvents)||""),this.hasProjected&&!S(this.latestValues)&&(c.transform=a?a({},""):"none",this.hasProjected=!1),c}const n=r.animationValues||r.latestValues;this.applyTransformsToTarget(),o.transform=W(this.projectionDeltaWithTransform,this.treeScale,n),a&&(o.transform=a(n,o.transform));const{x:h,y:m}=this.projectionDelta;o.transformOrigin=`${h.origin*100}% ${m.origin*100}% 0`,r.animationValues?o.opacity=r===this?(s=(i=n.opacity)!==null&&i!==void 0?i:this.latestValues.opacity)!==null&&s!==void 0?s:1:this.preserveOpacity?this.latestValues.opacity:n.opacityExit:o.opacity=r===this?n.opacity!==void 0?n.opacity:"":n.opacityExit!==void 0?n.opacityExit:0;for(const c in H){if(n[c]===void 0)continue;const{correct:P,applyTo:T}=H[c],D=o.transform==="none"?n[c]:P(n[c],r);if(T){const g=T.length;for(let v=0;v<g;v++)o[T[v]]=D}else o[c]=D}return this.options.layoutId&&(o.pointerEvents=r===this?w(t==null?void 0:t.pointerEvents)||"":"none"),o}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(t=>{var i;return(i=t.currentAnimation)===null||i===void 0?void 0:i.stop()}),this.root.nodes.forEach(Y),this.root.sharedNodes.clear()}}}function bt(e){e.updateLayout()}function wt(e){var l;const u=((l=e.resumeFrom)===null||l===void 0?void 0:l.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&u&&e.hasListeners("didUpdate")){const{layoutBox:d,measuredBox:V}=e.layout,{animationType:U}=e.options,t=u.source!==e.layout.source;U==="size"?_(r=>{const n=t?u.measuredBox[r]:u.layoutBox[r],h=E(n);n.min=d[r].min,n.max=n.min+h}):at(U,u.layoutBox,d)&&_(r=>{const n=t?u.measuredBox[r]:u.layoutBox[r],h=E(d[r]);n.max=n.min+h,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+h)});const i=B();L(i,d,u.layoutBox);const s=B();t?L(s,e.applyTransform(V,!0),u.measuredBox):L(s,d,u.layoutBox);const o=!it(i);let a=!1;if(!e.resumeFrom){const r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){const{snapshot:n,layout:h}=r;if(n&&h){const m=f();A(m,u.layoutBox,n.layoutBox);const c=f();A(c,d,h.layoutBox),et(m,c)||(a=!0),r.options.layoutRoot&&(e.relativeTarget=c,e.relativeTargetOrigin=m,e.relativeParent=r)}}}e.notifyListeners("didUpdate",{layout:d,snapshot:u,delta:s,layoutDelta:i,hasLayoutChanged:o,hasRelativeTargetChanged:a})}else if(e.isLead()){const{onExitComplete:d}=e.options;d&&d()}e.options.transition=void 0}function Nt(e){x.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function Mt(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function It(e){e.clearSnapshot()}function Y(e){e.clearMeasurements()}function zt(e){e.isLayoutDirty=!1}function Wt(e){const{visualElement:l}=e.options;l&&l.getProps().onBeforeLayoutMeasure&&l.notify("BeforeLayoutMeasure"),e.resetTransform()}function Z(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Ht(e){e.resolveTargetDelta()}function _t(e){e.calcProjection()}function Gt(e){e.resetRotation()}function qt(e){e.removeLeadSnapshot()}function $(e,l,u){e.translate=F(l.translate,0,u),e.scale=F(l.scale,1,u),e.origin=l.origin,e.originPoint=l.originPoint}function J(e,l,u,d){e.min=F(l.min,u.min,d),e.max=F(l.max,u.max,d)}function Xt(e,l,u,d){J(e.x,l.x,u.x,d),J(e.y,l.y,u.y,d)}function Yt(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const Zt={duration:.45,ease:[.4,0,.1,1]},K=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Q=K("applewebkit/")&&!K("chrome/")?Math.round:St;function tt(e){e.min=Q(e.min),e.max=Q(e.max)}function $t(e){tt(e.x),tt(e.y)}function at(e,l,u){return e==="position"||e==="preserve-aspect"&&!jt(G(l),G(u),.2)}const Jt=ot({attachResizeListener:(e,l)=>Rt(e,"resize",l),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),N={current:void 0},rt=ot({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!N.current){const e=new Jt({});e.mount(window),e.setOptions({layoutScroll:!0}),N.current=e}return N.current},resetTransform:(e,l)=>{e.style.transform=l!==void 0?l:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),Kt={pan:{Feature:At},drag:{Feature:Lt,ProjectionNode:rt,MeasureLayout:st}},Qt={layout:{ProjectionNode:rt,MeasureLayout:st}},te={...Ft,...Ut,...Kt,...Qt},se=Vt((e,l)=>kt(e,l,te,Et));export{se as m};
//# sourceMappingURL=kgyg817qi2bj4184.js.map
