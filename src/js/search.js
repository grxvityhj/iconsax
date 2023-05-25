'use strict';

const searchInput = document.querySelector('.search-input');

searchInput.addEventListener('input', e => {
  const val = e.target.value + '';
  const keyword = val.toLowerCase();
  const containerAll = document.querySelectorAll('.icon-wrap');
  const searchTagAll = document.querySelectorAll('.search-tag');

  for (const searchTag of searchTagAll) {
    const tag = searchTag.textContent.trim();

    if (!tag.includes(keyword)) {
      searchTag.closest('.icon-content').classList.add('hidden');
    } else {
      searchTag.closest('.icon-content').classList.remove('hidden');
    }
  }

  for (const container of containerAll) {
    const contentsIcon = container.querySelectorAll('.iconsax:not(.hidden)');
    const contentsHidden = container.querySelectorAll('.hidden');

    if (contentsIcon.length === contentsHidden.length) {
      container.closest('.section-wrap').classList.add('hidden');
    } else {
      container.closest('.section-wrap').classList.remove('hidden');
    }
  }

  if (keyword === '') {
    const hiddenAll = document.querySelectorAll('.hidden');

    for (const hidden of hiddenAll) {
      hidden.classList.remove('hidden');
    }
  }
});
