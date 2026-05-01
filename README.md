# simply-toast

A tiny toast notification package for browser-based JavaScript and TypeScript apps.

`simply-toast` gives you a small `toast` API for showing success and error messages. It creates a toast container in the page automatically, injects the package styles with the bundled JavaScript, and removes each toast after 3 seconds.

## Installation

Install the package with your preferred package manager:

```sh
npm install simply-toast
```

```sh
pnpm add simply-toast
```

```sh
yarn add simply-toast
```

## Usage

Import the named `toast` export and call one of the toast helpers:

```ts
import { toast } from "simply-toast";

toast.success("Saved successfully");
toast.error("Something went wrong");
```

That is all you need. The package creates a `.simply-toast-container` element when the first toast is shown and inserts new notifications into it.

## API

### `toast.success(message)`

Displays a success toast.

```ts
toast.success("Profile updated");
```

### `toast.error(message)`

Displays an error toast.

```ts
toast.error("Could not save changes");
```

## Behavior

- Toasts appear in the top-right corner of the page.
- New toasts are added above older toasts.
- Toasts animate in from the right.
- Toasts are automatically removed after 3 seconds.
- Styles are bundled with the package, so you do not need to import a separate CSS file.

## TypeScript

Type definitions are included with the package. The exported API accepts string messages:

```ts
toast.success("Your changes are live");
toast.error("Please try again");
```

## Browser Support

`simply-toast` uses browser DOM APIs, so it should be called from client-side code. If you use a framework with server-side rendering, call it only after the page has loaded in the browser, such as inside an event handler or client-only component.

## Development

Clone the repository, install dependencies, and run the build:

```sh
pnpm install
pnpm build
```

Available scripts:

- `pnpm dev` starts the Vite development server.
- `pnpm build` generates the production package in `dist`.
- `pnpm preview` previews the built output.

## License

MIT
