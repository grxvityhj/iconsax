'use strict';

const generateIconsax = async function (icon, type, label, iconWidth, brand) {
  if (label === '') return;
    
  const url = `https://grxvityhj.github.io/iconsax/icon/${
    brand ? 'brand/' : ''
  }${type}/${label}.svg`;

  fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Error occured: ${res.statusText}(${res.status})`);
      } else {
        return res.text();
      }
    })
    .then((data) => {
      icon.innerHTML = data !== undefined ? data : '';

      const svgPath = icon.querySelectorAll('path');

      for (const path of svgPath) {
        path.getAttribute('stroke-width') &&
          path.setAttribute('stroke-width', iconWidth);

        path.getAttribute('stroke') &&
          path.setAttribute('stroke', 'currentColor');

        path.getAttribute('fill') && path.setAttribute('fill', 'currentColor');
      }
    });
};

window.addEventListener('load', () => {
  const iconsax = document.querySelectorAll('.iconsax');

  for (const icon of iconsax) {
    const brand = icon.classList.contains('brand');
    const iconLabel = icon.getAttribute('icon').trim();
    const iconType = icon.getAttribute('type')
      ? icon.getAttribute('type').trim()
      : 'linear';
    const iconWidth = icon.getAttribute('stroke-width')
      ? icon.getAttribute('stroke-width')
      : '1.5';

    const args = [icon, iconType, iconLabel, iconWidth, brand];

    generateIconsax(...args);
  }
});
