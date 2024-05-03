# Stock Unlock

- This project uses Tailwind CSS for styling. Follow the steps below to set up Tailwind CSS for your local development environment.

## Prerequisites

Ensure that you have the following installed on your local development machine:

- Node.js and npm (Node.js v14 or newer is recommended)

## Setup

1. Clone the repository to your local machine.

```bash
git clone <repository-url>
```

2. Navigate to the project directory.

```bash
cd <project-dir>
```

3. Install the project dependencies.

```bash
npm install
```

- This will start a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Using Tailwind CSS in HTML

- You can use Tailwind's utility classes in your HTML files like this:

```html
<div
  class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4"
>
  <div class="flex-shrink-0">
    <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-gray-500">You have a new message!</p>
  </div>
</div>
```
