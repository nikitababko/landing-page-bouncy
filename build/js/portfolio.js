function filterSelectionPortfolio(o){var e,t;for(e=document.getElementsByClassName("filterDivPortfolio"),"allworks"==o&&(o="allworks"),t=0;t<e.length;t++)w3RemoveClassPortfolio(e[t],"show"),e[t].className.indexOf(o)>-1&&w3AddClassPortfolio(e[t],"show")}function w3AddClassPortfolio(o,e){var t,l,s;for(l=o.className.split(" "),s=e.split(" "),t=0;t<s.length;t++)-1==l.indexOf(s[t])&&(o.className+=" "+s[t])}function w3RemoveClassPortfolio(o,e){var t,l,s;for(l=o.className.split(" "),s=e.split(" "),t=0;t<s.length;t++)for(;l.indexOf(s[t])>-1;)l.splice(l.indexOf(s[t]),1);o.className=l.join(" ")}filterSelectionPortfolio("allworks");for(var btnContainer=document.getElementById("servicesPortfolio"),btns=btnContainer.getElementsByClassName("btn-portfolio"),i=0;i<btns.length;i++)btns[i].addEventListener("click",(function(){var o=document.getElementsByClassName("active-portfolio");o[0].className=o[0].className.replace(" active-portfolio",""),this.className+=" active-portfolio"}));
//# sourceMappingURL=portfolio.js.map
