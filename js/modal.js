(() => {
  const apiToken = "6407481840:AAE5YyjD19wV9jzvgLOc-zo77PVYkPdkA_I";
  const chatId = "644717925";

  function sendTelegramMessage(message) {
    const url = `https://api.telegram.org/bot${apiToken}/sendMessage`;
    const data = {
      chat_id: chatId,
      text: JSON.stringify(message),
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }

  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    sendData: document.querySelector("[data-send]"),
    form: document.querySelector(".modal-form"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.sendData.addEventListener("click", sendData);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

  function sendData(e) {
    e.preventDefault();

    const formData = {
      name: refs.form.elements.user_name.value,
      phone: refs.form.elements.user_phone.value,
      email: refs.form.elements.user_email.value,
      comment: refs.form.elements.coment.value,
      core: "vorongor.com",
    };

    console.log(formData);
    sendTelegramMessage(formData);
  }
})();
