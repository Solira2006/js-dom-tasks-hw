import 'whatwg-fetch';

export default () => {
  // BEGIN
  const inputs = document.querySelectorAll('input[data-autocomplete][data-autocomplete-name]');

  inputs.forEach(input => {
    input.addEventListener('input', async (e) => {
      const searchValue = e.target.value.trim();
      const urlStr = input.getAttribute('data-autocomplete');
      const listName = input.getAttribute('data-autocomplete-name');

      if (!urlStr || !listName) return;

      const url = new URL(urlStr, window.location.origin);
      url.searchParams.set('search', searchValue);

      try {
        const response = await fetch(url.toString());
        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();

        const ul = document.querySelector(`ul[data-autocomplete-name="${listName}"]`);
        if (!ul) return;

        ul.innerHTML = '';

        if (Array.isArray(data) && data.length > 0) {
          data.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li);
          });
        } else {
          const li = document.createElement('li');
          li.textContent = 'Nothing';
          ul.appendChild(li);
        }
      } catch (error) {
        const ul = document.querySelector(`ul[data-autocomplete-name="${listName}"]`);
        if (ul) {
          ul.innerHTML = '';
          const li = document.createElement('li');
          li.textContent = 'Nothing';
          ul.appendChild(li);
        }
      }
    });
  });
  // END
};