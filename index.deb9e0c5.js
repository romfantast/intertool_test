const t=[document.querySelector("[data-about-us]"),document.querySelector("[data-about-service]"),document.querySelector("[data-about-usefull]")];for(let e=0;e<t.length;e+=1)t[e].addEventListener("click",(()=>{const o=t[e].attributes[0].nodeName.toString().split("-")[2],a=document.querySelector(`.footer-navigation-block div ul[data-${o}-list]`),r=document.querySelector(`.footer-navigation-block div p[data-about-${o}]`);a.classList.contains("dropdown")?(t[e].classList.remove("active-title"),a.classList.remove("dropdown"),r.style.setProperty("--rotate-arrow","rotate(0deg)")):(t[e].classList.add("active-title"),a.classList.add("dropdown"),r.style.setProperty("--rotate-arrow","rotate(180deg)"))}));
//# sourceMappingURL=index.deb9e0c5.js.map