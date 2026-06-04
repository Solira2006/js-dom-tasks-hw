import escapeHtml from 'escape-html';

// BEGIN
const prepareForm = () => {

    /**
     * @param {Event} event
     */
    const formCallback = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        let email = escapeHtml(formData.get('email'));
        let name = escapeHtml(formData.get('name'));
        let comment = escapeHtml(formData.get('comment'));

        event.target.innerHTML = `<div>
  <p>Feedback has been sent</p>
  <div>Email: ${email}</div>
  <div>Name: ${name}</div>
  <div>Comment: ${comment}</div>
</div>`
    }

    for (let form of document.querySelectorAll("form"))
        form.addEventListener('submit', formCallback);

}

export default prepareForm;
// END