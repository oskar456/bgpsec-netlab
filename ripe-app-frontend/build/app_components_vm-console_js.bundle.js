"use strict";(self.webpackChunkworkbench_shell=self.webpackChunkworkbench_shell||[]).push([["app_components_vm-console_js"],{"./app/components/vm-console.js":(e,t,o)=>{if(!customElements.get("vm-console")){let e=document.createElement("template");o.e("app_components_vm-console_html").then(o.bind(o,"./app/components/vm-console.html")).then((t=>{e.innerHTML=`${t.default}`,customElements.define("vm-console",class extends HTMLElement{constructor(){super();const t=e.content.cloneNode(!0),o=t.querySelector("iframe");t.getElementById("refresher").onclick=()=>(o.contentDocument.location.reload(),!1),this.attachShadow({mode:"open"}).appendChild(t)}static get observedAttributes(){return["src"]}attributeChangedCallback(e,t,o){"src"==e&&(this.shadowRoot.getElementById("popout").href=o,this.shadowRoot.querySelector("iframe").src=o)}})}))}}}]);