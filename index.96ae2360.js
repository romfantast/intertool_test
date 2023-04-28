document.querySelectorAll("[data-scroll]").forEach((function(e){e.addEventListener("wheel",(function(l){var t=l.deltaY<0&&e.scrollLeft>0,c=l.deltaY>0&&e.scrollLeft<e.scrollWidth-e.clientWidth;(t||c)&&(l.preventDefault(),e.scrollLeft+=l.deltaY)}))}));
//# sourceMappingURL=index.96ae2360.js.map
