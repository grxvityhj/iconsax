const strokeInput = document.querySelector('.stroke-input');

strokeInput.addEventListener('input', () => {
  const pathAll = document.querySelectorAll('path');
  const iconAll = document.querySelectorAll('.iconsax');
  const customWidth = strokeInput.value.trim();

  const reg = /^[+]?\d+(\.\d+)?$/;

  if (customWidth === '') {
    for (const icon of iconAll) {
      icon.getAttribute('stroke-width') && icon.setAttribute('stroke-width', '1.5');
    }
  
    for (const path of pathAll) {
      path.getAttribute('stroke-width') && path.setAttribute('stroke-width', '1.5');
    }
  };
  
  if (!reg.test(customWidth)) return;

  for (const icon of iconAll) {
    icon.getAttribute('stroke-width') && icon.setAttribute('stroke-width', customWidth);
  }

  for (const path of pathAll) {
    path.getAttribute('stroke-width') && path.setAttribute('stroke-width', customWidth);
  }
});
