/* Organize the platform navigation into clear, keyboard-accessible sections. */
(() => {
  const setupNavigation = () => {
    const nav = document.querySelector('.snav');
    if (!nav || nav.dataset.organized === 'true') return;

    const links = [...nav.querySelectorAll(':scope > a')];
    const byHref = href => links.find(link => link.getAttribute('href') === href);
    const inGroup = (link, prefix) => link && link.getAttribute('href').startsWith(prefix);
    const dashboard = byHref('#/');

    const sections = [
      {
        id: 'courses', label: 'My courses',
        match: link => inGroup(link, '#/subject/')
      },
      {
        id: 'study', label: 'Study tools',
        match: link => ['#/planner', '#/workspace/tutor', '#/revision', '#/past-exams', '#/setup'].includes(link.getAttribute('href')),
        order: ['#/planner', '#/workspace/tutor', '#/revision', '#/past-exams', '#/setup']
      },
      {
        id: 'practice', label: 'Practice & review',
        match: link => inGroup(link, '#/exam/') || ['#/bank', '#/bookmarks', '#/mistakes'].includes(link.getAttribute('href')),
        order: ['#/exam/cs212', '#/exam/ece202', '#/exam/cs211', '#/bank', '#/bookmarks', '#/mistakes']
      },
      {
        id: 'workspace', label: 'Workspace',
        match: link => ['#/tools', '#/workspace'].includes(link.getAttribute('href'))
      },
      {
        id: 'support', label: 'Student support',
        match: link => ['#/help'].includes(link.getAttribute('href'))
      },
    ];

    nav.replaceChildren();
    if (dashboard) nav.append(dashboard);

    for (const section of sections) {
      let items = links.filter(link => link !== dashboard && section.match(link));
      if (!items.length) continue;
      if (section.order) {
        const rank = new Map(section.order.map((href, index) => [href, index]));
        items.sort((a, b) => (rank.get(a.getAttribute('href')) ?? 999) - (rank.get(b.getAttribute('href')) ?? 999));
      }

      const group = document.createElement('details');
      group.className = 'nav-group';
      group.dataset.navGroup = section.id;
      group.open = section.id === 'study';
      const heading = document.createElement('summary');
      heading.className = 'cat';
      heading.dataset.en = section.label;
      heading.textContent = section.label;
      group.append(heading, ...items);
      nav.append(group);
    }

    // Keep any future nav links visible instead of silently dropping them.
    const known = new Set([dashboard, ...nav.querySelectorAll('a')].filter(Boolean));
    const uncategorized = links.filter(link => !known.has(link));
    if (uncategorized.length) {
      const group = document.createElement('details');
      group.className = 'nav-group';
      group.dataset.navGroup = 'more';
      const heading = document.createElement('summary');
      heading.className = 'cat';
      heading.dataset.en = 'More';
      heading.textContent = 'More';
      group.append(heading, ...uncategorized);
      nav.append(group);
    }

    if (typeof AR_NAV === 'object') Object.assign(AR_NAV, {
      'My courses': 'موادي',
      'Study tools': 'أدوات المذاكرة',
      'Practice & review': 'التدريب والمراجعة',
      'Workspace': 'مساحة العمل',
      'Student support': 'مساعدة الطلاب',
      'More': 'المزيد'
    });

    const revealActiveSection = () => {
      const active = nav.querySelector('a.on');
      const group = active && active.closest('.nav-group');
      if (group) group.open = true;
      else if (!nav.querySelector('.nav-group[open]')) {
        const defaultGroup = nav.querySelector('[data-nav-group="study"]');
        if (defaultGroup) defaultGroup.open = true;
      }
    };
    revealActiveSection();
    const observer = new MutationObserver(revealActiveSection);
    observer.observe(nav, { subtree: true, attributes: true, attributeFilter: ['class'] });
    window.addEventListener('hashchange', revealActiveSection);

    if (typeof applyLang === 'function') applyLang();
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', setupNavigation, { once: true });
  else setupNavigation();
})();
