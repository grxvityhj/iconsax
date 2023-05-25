const sectionIcon = document.querySelector('.section-icon');

const slideToggleHandler = container => {
  if (
    container.classList.contains('active') &&
    container.style.height === '0px'
  ) {
    container.classList.remove('active');
    return;
  }

  if (!container.classList.contains('active')) {
    container.classList.add('active');
    container.style.height = 'auto';

    let height = container.clientHeight + 'px';

    container.style.height = '0px';
    container.style.visibility = 'visible';

    container.addEventListener(
      'transitionend',
      () => {
        container.style.overflow = 'visible';
      },
      {
        once: true,
      }
    );

    setTimeout(() => (container.style.height = height), 0);
  } else {
    container.style.height = '0px';
    container.style.overflow = 'hidden';

    container.addEventListener(
      'transitionend',
      () => {
        container.classList.remove('active');
        container.style.visibility = 'hidden';
      },
      {
        once: true,
      }
    );
  }
};

sectionIcon.addEventListener('click',e => {
  const toggleBtn = e.target.closest('.section-toggle-btn');
  const section = e.target.closest('.section-wrap');
  const iconWrap = section.querySelector('.icon-wrap')

  if (!toggleBtn) return;

  slideToggleHandler(iconWrap);
  section.classList.toggle('active')
});