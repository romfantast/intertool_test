const aboutUsTitle = document.querySelector('[data-about-us]');
const serviceTitle = document.querySelector('[data-about-service]');
const usefullTitle = document.querySelector('[data-about-usefull]');

const paragraphTitles = [aboutUsTitle, serviceTitle, usefullTitle];

for (let i = 0; i < paragraphTitles.length; i += 1) {
  paragraphTitles[i].addEventListener('click', () => {
    console.log(paragraphTitles[i].attributes[0].nodeName.split('-'));
    const listName = paragraphTitles[i].attributes[0].nodeName
      .toString()
      .split('-')[2];
    const element = document.querySelector(
      `.footer-navigation-block div ul[data-${listName}-list]`
    );
    console.log(element);
    element.classList.toggle('dropdown');
  });
}
