!function(){const t=window.bpSitewideNoticeBlockSettings||{},e=new class{constructor(t){const{path:e,dismissPath:s,root:o,nonce:i}=t;this.path=e,this.dismissPath=s,this.root=o,this.nonce=i}start(){document.querySelectorAll(".bp-sitewide-notice-block a.dismiss-notice").forEach((t=>{t.addEventListener("click",(t=>{t.preventDefault(),fetch(this.root+this.dismissPath,{method:"POST",headers:{"X-WP-Nonce":this.nonce}}).then((t=>t.json())).then((t=>{void 0!==t&&void 0!==t.dismissed&&t.dismissed&&document.querySelectorAll(".bp-sitewide-notice-block").forEach((t=>{t.remove()}))}))}))}))}}(t);"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e.start()):e.start()}();