document.querySelectorAll("[data-scroll]").forEach((e=>{e.addEventListener("wheel",(l=>{const t=l.deltaY<0&&e.scrollLeft>0,c=l.deltaY>0&&e.scrollLeft<e.scrollWidth-e.clientWidth;(t||c)&&(l.preventDefault(),e.scrollLeft+=l.deltaY)}))}));
//# sourceMappingURL=index.0c491d37.js.map
