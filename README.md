# Design System

This project was generated using [Nx](https://nx.dev).

Inspired by this [article](https://ionic.io/blog/building-react-and-angular-component-libraries-with-stencil-and-nx)

## Getting Started

Install dependencies:
`npm install`

Inside `libs` directory is a `core-components` library, this is where the pure stencil components are authored, pure meaning not written with any framework, e.g, Angular or React

To consume these components in an Angular app, we must build these components in a mode that will generate angular wrapped components.

Run `nx build core-components`

Under the hood, this is using the `outputTargets` config options in `stencil.config.ts` which will generate our angular wrapped components into a new `core-components-angular` library as per the `angularOutputTarget` options in the stencil config file. Distributable artififacts will also be generated in the `dist` and can be shipped to NPM for consumption elsewhere.

## Running Locally

Building libs locally:

`nx run <lib-name>:<target>` 

e.g.

`nx run ui-css-kit:build`

This will generate output into the `dist` libs directory ready for publishing to NPM which will be handled by our build pipeline (Jenkins)

Serving apps locally:

`npm run prototype-library` Using `npm` instead of `nx` is intentiol here!

## Development Workflow

Details to follow for developing stencil components, usgae with storybook, prototype app, local dev with magma console, etc

## Publishing Changes

After making the necessary changes to any of the publishable libs in this workspace, e.g ui-css-kit or c-design-patterns, make sure to increment the version number for their respective package.json files and raise a PR to master. Once merged the automated pipeline will take of the rest and publish updated packages to NPM.

## Deployed Applications

The following applications will be re-deployed if they contain any changes when master branch is rebuilt on our Jenkins:

- [Prototype Library](https://prototype-library.product.dev.alertlogic.com/)
- [Design System](https://design-system.product.dev.alertlogic.com/) (Storybook)