const aboutUsTitle = document.querySelector('[data-about-us]');
const serviceTitle = document.querySelector('[data-about-service]');
const usefullTitle = document.querySelector('[data-about-usefull]');

const paragraphTitles = [aboutUsTitle, serviceTitle, usefullTitle];

for (let i = 0; i < paragraphTitles.length; i += 1) {
  paragraphTitles[i].addEventListener('click', () => {
    const listName = paragraphTitles[i].attributes[0].nodeName
      .toString()
      .split('-')[2];
    const element = document.querySelector(
      `.footer-navigation-block div ul[data-${listName}-list]`
    );
    const arrow = document.querySelector(
      `.footer-navigation-block div p[data-about-${listName}]`
    );

    if (element.classList.contains('dropdown')) {
      paragraphTitles[i].classList.remove('active-title');
      element.classList.remove('dropdown');
      arrow.style.setProperty('--rotate-arrow', 'rotate(0deg)');
	 } else {
		 
      paragraphTitles[i].classList.add('active-title');
      element.classList.add('dropdown');
      arrow.style.setProperty('--rotate-arrow', 'rotate(180deg)');
    }
  });
}
