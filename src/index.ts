import classes from "./toast.module.css";

const toast = {
  success: function (message: string) {
    createToast(message);
  },
};

function createToast(message: string) {
  let container = document.querySelector(".just-toast-container");
  if (!Boolean(container)) {
    container = createContainer();
  }
  const toast = document.createElement("output");
  toast.classList.add(classes["toast"]);
  toast.setAttribute('role', 'status');

  const toastMessage = document.createElement("p");
  toastMessage.classList.add(classes["toast-message"]);
  toastMessage.textContent = message;

  const toastCloseButton = document.createElement("button");
  const closeIcon = createCloseIcon();
  toastCloseButton.appendChild(closeIcon);
  toastCloseButton.classList.add(classes["toast-cancel-button"]);

  toast.appendChild(toastMessage);
  toast.appendChild(toastCloseButton);

  container?.appendChild(toast);
}

function createContainer() {
  const container = document.createElement("section");
  container.classList.add('just-toast-container', classes["toast-container"]);
  document.firstElementChild?.insertBefore(container, document.body);
  return container;
}

function createCloseIcon() {
  const closeButtonSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;
  const parser = new DOMParser();
  const svgDoc = parser.parseFromString(closeButtonSVG, 'image/svg+xml');
  const svgElement = svgDoc.documentElement;
  return svgElement;
}


export { toast };
