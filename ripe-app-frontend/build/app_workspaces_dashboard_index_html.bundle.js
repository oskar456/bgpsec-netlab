"use strict";(self.webpackChunkworkbench_shell=self.webpackChunkworkbench_shell||[]).push([["app_workspaces_dashboard_index_html"],{"./app/workspaces/dashboard/index.html":(e,n,o)=>{o.r(n),o.d(n,{default:()=>t});const t='    <style>\n        div.flex {\n          display: flex;\n          flex-wrap: wrap;\n        }\n        div.flex div {\n          float: left;\n          margin: 12px;\n        }\n        textarea {\n          min-width: 320px;\n          min-height: 100px;\n          width: 640px;\n          height: 30%;\n          background-color: black;\n          color: white;\n          resize: both;\n        }\n    </style>\n    <section>\n       <h2>My network</h2>\n         <div class="flex">\n           <vm-console src="/vtysh/R1/"><h3>Router 1</h3><a href="/logs/R1/" target="_new">open logs</a></vm-console>\n\n           <vm-console src="/vtysh/R2/"><h3>Router 2</h3><a href="/logs/R2/"    target="_new">open logs</a></vm-console>\n           <vm-console src="/vtysh/R3/"><h3>Router 3</h3><a href="/logs/R3/"    target="_new">open logs</a></vm-console>\n           <div>\n             <h3>Hints</h3>\n             <ul>\n               <li>Feel free to <strong>resize terminal windows</strong> by dragging (does not work in Safari and Chrome at the moment)</li>\n               <li>To scroll inside the tmux, use <code>Ctrl-B</code> and <code>PageUp</code>/<code>PageDown</code> (<code>Fn</code> + <code>Up</code>/<code>Down</code> on Mac)</li>\n               <li>To open new tmux window, use <code>Ctrl-B c</code></li>\n               <li>See <a href="https://tmuxcheatsheet.com/">tmux cheatsheet</a></li>\n             </ul>\n             <h3>Scratchpad</h3>\n             <textarea>Here you can put some text you need to copy and paste.</textarea>\n           </div>\n         </div>\n    </section>\n'}}]);