import { toast } from './index';

const container = document.getElementById('app');
const firstButton = container?.querySelector("#first-button");
const secondButton = container?.querySelector("#second-button");

if (firstButton) {
  firstButton.addEventListener("click", () => {
    toast.success("First button clicked!");
  });
}

if (secondButton) {
  secondButton.addEventListener('click', () => {
    toast.success('Second button clicked');
  })
}

// if (button) {
//   button.addEventListener('click', () => {
//     toast.success('Button clicked!');
//   })
// }


