const tooltipHandler = tooltip => {
  tooltip.classList.add('active');
  tooltip.addEventListener(
    'transitionend',
    () => {
      setTimeout(() => {
        tooltip.classList.remove('active');
      }, 1000);
    },
    {
      once: true,
    }
  );
};

window.addEventListener('click', e => {
  if (!e.target.closest('.btn')) return;
  const tooltip = document.querySelector('.tooltip');
  tooltipHandler(tooltip);
});
