'use strict';

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

modalCloser();

const clipboard = new Clipboard('.modal-btn');

const topBtnHandler = () => {
  const topBtn = document.querySelector('.top-btn');

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

topBtnHandler();
