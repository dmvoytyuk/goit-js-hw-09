import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const a="feedback-form-state",o=document.querySelector(".feedback-form");let e={email:"",message:""};o.addEventListener("input",t=>{e[t.target.name]=t.target.value,localStorage.setItem(a,JSON.stringify(e))});o.addEventListener("submit",t=>{t.preventDefault(),console.log(e),localStorage.removeItem(a),t.target.reset(),Object.keys(e).map(r=>{e[r]=""})});function m(){localStorage.getItem(a)&&(e=JSON.parse(localStorage.getItem(a)),o.elements.email.value=e.email,o.elements.message.value=e.message)}m();
//# sourceMappingURL=commonHelpers2.js.map
