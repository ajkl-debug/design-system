# Design System

## Usage
This package is published in GitHub Package Registry. Detailed instructruction about consuming Github Packages
you can find in [Installing a package](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package).

The easiest way how to consume this package is to create `.npmrc` file in the root of your application and add the line:
```
@securityscorecard:registry=https://npm.pkg.github.com
```

After `.npmrc` file is created you have to authenticate by logging in to npm or by adding PAT (Personal Access Token)
into `.npmrc` file. For more information please see [Authenticating to GitHub Packages](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-to-github-packages).


Then you can install this package as:
```sh
yarn add @securityscorecard/design-system
# OR
npm install @securityscorecard/design-system
```


## Local Development

### Development in Storybook
```sh
git clone https://github.com/securityscorecard/design-system
cd design-system
yarn
yarn run storybook
```

### Development in third-party application
To avoid version conflicts within the application we need to link `react`, `react-dom` 
and `styled-components` libraries from the third-party application into `design-system`.
```sh
cd path/to/application
cd node_modules/react && yarn link # register react
cd ../react-dom && yarn link # register react-dom
cd ../styled-components && yarn link # register styled-components
```

Then we need to use registered packages in `design-system`, register package as the link and start build script.
```sh
cd path/to/design-system
yarn link react && yarn link react-dom && yarn link styled-components # use registered package
yarn link # register design-system
yarn build --watch # start build in watch mode
```

At the end, we need to link `design-system` in a third-party application.
```sh
cd path/to/application
yarn link @securityscorecard/design-system # use design-system
```


## Contributing
- read the [Contributing guide](CONTRIBUTING.md)
- read the [Testing guide](TESTING.md)
