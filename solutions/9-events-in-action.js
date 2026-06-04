export default () => {
  // BEGIN
  const handleTabSwitch = (event) => {
    const clickedTab = event.currentTarget;
    const navContainer = clickedTab.closest('.nav');

    if (!navContainer) return;

    const targetSelector = clickedTab.getAttribute('data-bs-target');
    if (!targetSelector) return;

    const targetContent = document.querySelector(targetSelector);
    if (!targetContent) return;

    const tabContentContainer = targetContent.closest('.tab-content');
    if (!tabContentContainer) return;

    const navLinks = navContainer.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));

    const tabPanes = tabContentContainer.querySelectorAll('.tab-pane');
    tabPanes.forEach(pane => pane.classList.remove('active'));

    clickedTab.classList.add('active');
    targetContent.classList.add('active');
  };

  const tabs = document.querySelectorAll('[data-bs-toggle="tab"], [data-bs-toggle="pill"]');
  tabs.forEach(tab => tab.addEventListener('click', handleTabSwitch));
  // END
};