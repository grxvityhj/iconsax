'use strict';

const generateIconsax = async function (icon, type, label, iconWidth, brand) {
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

const generator =() => {
    const activeSection = document.querySelector('.section--active');

    const iconsax = activeSection.querySelectorAll('.iconsax');

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
}

const iconContentAll = document.querySelectorAll('.icon-content');

iconContentAll.forEach(el => {
  el.addEventListener('click', e => {
    const modal = document.querySelector('.modal');
    const blockFull = document.querySelector('.block--full');
    const blockIcon = document.querySelector('.block--icon');

    const content = e.target.closest('.icon-content');
    const code = content.querySelector('.iconsax');
    const brand = code.classList.contains('brand') ? ' brand' : '';
    const type = code.getAttribute('type').trim();
    const strokeWidth = code.getAttribute('stroke-width') ? code.getAttribute('stroke-width').trim() : '';
    const icon = code.getAttribute('icon').trim();

    blockFull.innerHTML = `&lt;i class="iconsax${brand}" type="${type}"${strokeWidth !== '' ? ` stroke-width="${strokeWidth}"` : ''} icon="${icon}"&gt;&lt;/i&gt;`;
    blockIcon.textContent = icon;

    modal.classList.add('active');
  });
});

const modalCloser = () => {
  const activeModalBg = document.querySelector('.modal-bg');

  if (!activeModalBg) return;

  activeModalBg.addEventListener('click', () => {
    document.querySelector('.modal.active').classList.remove('active');
  });
};


const clipboard = new Clipboard('.modal-btn');
const topBtn = document.querySelector('.top-btn');

const topBtnHandler = () => {

  if (!topBtn) return;

  topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
};

document.addEventListener('scroll', e => {
  const pos = window.scrollY - 50;
  const topBtn = document.querySelector('.top-btn');

  if (pos < 0) topBtn.style.display = 'none';
  if (pos > 100) {
    topBtn.style.display = 'flex';
    topBtn.style.opacity = '100%';
    return;
  }

  if (pos % 3 === 2) {
    topBtn.style.display = 'flex';
    topBtn.style.opacity = `${pos}%`;
  }
});

const tabContainer = document.querySelector('.tab');

tabContainer.addEventListener('click', e => {
  const tab = e.target.closest('.tab-item');
  const tabAll = document.querySelectorAll('.tab-item');
  const sectionAll = document.querySelectorAll('.section-icon');

  if (!tab) return;

  const nextTab = tab.textContent.trim();

  for (const item of tabAll) {
    item.classList.remove('tab--active');
  }

  for (const section of sectionAll) {
    section.classList.remove('section--active')
  }

  document.querySelector(`.tab--${nextTab}`).classList.add('tab--active');
  document.querySelector(`.section--${nextTab}`).classList.add('section--active');

  generator();
})

generator();
modalCloser();
topBtnHandler();
generateIconsax(topBtn, 'chevron-up', 'linear', '2', false);