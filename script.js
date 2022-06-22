window.AppState = {
    content: null,
    isOpen: false,
    openDialog: function (key) {
      AppState.content = phoneNumber.value;
      AppState.isOpen = true;
      toggleDialog();
    },
    closeDialog: function () {
      AppState.content = '';
      AppState.isOpen = false;
      toggleDialog();
    },
  };
  
  function toggleDialog() {
    const modalClass = AppState.isOpen
      ? 'modal modal-shown'
      : 'modal modal-hidden';
  
    modal.innerHTML = `
      <div class="${modalClass}">
        <div class="modal-content">
          <div style="text-align:right" onclick="AppState.closeDialog()">
            <span class="vedi-numero">Il numero inserito è:</span>
            <span class="modal-close">Chiudi</span>
          </div>
          <p class="modal-content">${AppState.content}</p>
        </div>
      </div>
    `;
  }
  
  openModal.addEventListener('click', (event) => {
    AppState.openDialog(modal);
  });
  