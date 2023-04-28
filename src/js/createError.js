export const createError = (condition, parentBlock, errorClass, text) => {
  if (!condition && !document.querySelector(`.${errorClass}`)) {
    const error = document.createElement('p');
    error.textContent = text;
    error.classList.add(errorClass);
    parentBlock.prepend(error);
  } else if (condition) {
    document.querySelector(`.${errorClass}`).remove();
  }
};
