const customBtn = document.querySelector('.custom-btn');
const customInput = document.querySelector('.custom-input');

customBtn.addEventListener('click', () => {
  const pathAll = document.querySelectorAll('path');
  const iconAll = document.querySelectorAll('.iconsax');
  const customWidth = customInput.value.trim();

  const reg = /^[+]?\d+(\.\d+)?$/;

  if (customWidth === '') return;
  if (!reg.test(customWidth)) return;

  for (const icon of iconAll) {
    icon.setAttribute('stroke-width', customWidth);
  }

  for (const path of pathAll) {
    path.setAttribute('stroke-width', customWidth);
  }
});
