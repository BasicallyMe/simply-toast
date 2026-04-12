import classes from "./toast.module.css";

const toast = {
  success: function (message: string) {
    createNewToast(message, "success");
  },
  error: function (message: string) {
    createNewToast(message, "error");
  },
};

function createNewToast(message: string, type: "success" | "error") {
  // Search for the container and create if it doesn't exist.
  const container = createContainer();
  const toast = createToast(message, type, container);
  let timeoutId: number | null = null;
  timeoutId = setTimeout(async () => {
    await removeToast(toast);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = null;
  }, 3000);
}

function createContainer() {
  if (document.querySelector(".just-toast-container")) {
    const container = document.querySelector(".just-toast-container");
    return container;
  }
  const container = document.createElement("section");
  container.classList.add("just-toast-container", classes["toast-container"]);
  document.body.insertBefore(container, document.body.firstChild);
  return container;
}

function createCloseIcon() {
  const closeButtonSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;
  const parser = new DOMParser();
  const svgDoc = parser.parseFromString(closeButtonSVG, "image/svg+xml");
  const svgElement = svgDoc.documentElement;
  return svgElement;
}

function createToast(
  message: string,
  type: "success" | "error",
  container: Element | null,
) {
  // Create the toast element adding the classes
  const toast = document.createElement("output");
  toast.classList.add(classes["toast"]);
  if (type === "success") {
    toast.classList.add(classes["toast-success"]);
  }
  if (type === "error") {
    toast.classList.add(classes["toast-error"]);
  }
  toast.setAttribute("role", "status");

  // Add the message container for the toast
  const toastMessage = document.createElement("p");
  toastMessage.classList.add(classes["toast-message"]);
  toastMessage.textContent = message;
  toast.appendChild(toastMessage);

  // Add the close button for the toast
  const toastCloseButton = document.createElement("button");
  const closeIcon = createCloseIcon();
  toastCloseButton.appendChild(closeIcon);
  toastCloseButton.classList.add(classes["toast-cancel-button"]);
  toast.appendChild(toastCloseButton);

  // Append the toast to the container and set a timeout to remove it after 2 seconds
  container?.insertBefore(toast, container?.firstChild);
  toast.classList.add(classes["animate-in"]);
  return toast;
}

function removeToast(toast: HTMLElement) {
  const container = document.querySelector(".just-toast-container");
  toast.animate(
    [
      {
        opacity: 1,
        transform: "translateX(0vw)",
      },
      {
        opacity: 0,
        transform: "translateX(100vw)",
      },
    ],
    {
      duration: 150,
      easing: "ease-out",
    },
  );
  return new Promise<void>(async (resolve) => {
    await Promise.allSettled(
      toast.getAnimations().map((animation) => animation.finished),
    );
    container?.removeChild(toast);
    resolve();
  });
}


export { toast };
