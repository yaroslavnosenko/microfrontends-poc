# Microfrontends POC

This project is a proof of concept (POC) for implementing microfrontends architecture. Each application is placed in its own folder to simulate a multi-repository approach.

For integrating microfrontends with Next.js and Angular, the **Multizones** approach was chosen, along with [@bubblydoo/angular-react](https://github.com/bubblydoo/angular-react). One challenge with Multizones is sharing components across different apps (e.g., the Header). The Next.js team recommends using a monorepo for shared code, but to allow independent deployment and development, **Shadow DOM components** were used instead (e.g., the Header app). This enables the shared component to be maintained separately by another team while requiring minimal integration efforts.

## Project Structure

- **header** – A Vite-based React TypeScript project that compiles into a standalone library. It can be hosted as a Shadow DOM component and imported into other projects via a `<script>` tag. It includes Tailwind CSS for styling and uses React under the hood, allowing custom properties to be passed.
- **host** – The main Next.js microservice entry point. Built using the **T3 stack**, it supports router rewrites to enable the **Multizones** approach. [Learn more](https://nextjs.org/docs/app/building-your-application/deploying/multi-zones).
- **angular** – An Angular-based project cloned from [bubblydoo/next.js-angular-demo](https://github.com/bubblydoo/next.js-angular-demo). This includes a Next.js app with server-side rendering (SSR) and rewrites for Multizones, along with an Angular client on top. The setup can be adapted to use gRPC for SSR if needed.

## How to Run

To run the project locally, ensure you have **Node.js**, **pnpm**, and **Yarn** installed. This project was tested with:

- Node.js **v20.13.1**
- Yarn **1.22.22**
- pnpm **9.15.4**

### Installation

Run the following command to install all dependencies:

```sh
make install
```

### Running the Services

Start the microfrontends by running:

```sh
make run
```

### Available Services

- **Header** – [http://localhost:3010](http://localhost:3010)
- **Host** – [http://localhost:3011](http://localhost:3011) (Entry point)
- **Angular** – [http://localhost:3012](http://localhost:3012)

## Feature Improvements

### Header App

- The build process should be improved to generate proper production-ready outputs.
- Currently, the project only compiles into the `public` folder and runs with the `dev` command.

### Angular App

- It can be reworked to use the **T3 stack** for better integration.
- Support for **gRPC** and **pnpm** as the package manager can be added.

---

This POC demonstrates how microfrontends can be independently developed, deployed, and integrated using modern frameworks. 🚀
