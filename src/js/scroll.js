const target = document.querySelectorAll('[data-scroll]');

target.forEach(item => {
  item.addEventListener('wheel', event => {
    const toLeft = event.deltaY < 0 && item.scrollLeft > 0;
    const toRight =
      event.deltaY > 0 && item.scrollLeft < item.scrollWidth - item.clientWidth;

    if (toLeft || toRight) {
      event.preventDefault();
      item.scrollLeft += event.deltaY;
    }
  });
});
