import { toast } from './index';

const container = document.getElementById('app');
const button = container?.querySelector('button');

if (button) {
  button.addEventListener('click', () => {
    toast.success('Button clicked!');
  })
}


