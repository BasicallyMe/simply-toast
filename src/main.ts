import { toast } from './index';

const container = document.getElementById('app');
const firstButton = container?.querySelector("#first-button");
const secondButton = container?.querySelector("#second-button");

if (firstButton) {
  firstButton.addEventListener("click", () => {
    toast.success("Request submitted successfully");
  });
}

if (secondButton) {
  secondButton.addEventListener('click', () => {
    toast.error("Failed to submit request. Please try again after some time.");
  })
}

// if (button) {
//   button.addEventListener('click', () => {
//     toast.success('Button clicked!');
//   })
// }


