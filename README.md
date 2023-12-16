<p align="center">
  <img
		style="object: contain; height: 150px"
		src="https://raw.githubusercontent.com/glhrmoura/environment/main/src/static/images/logo.png"
	/>
</p>

## Environment

[![NPM Version](https://img.shields.io/npm/v/@glhrmoura/environment.svg?style=for-the-badge)](https://www.npmjs.com/package/@glhrmoura/environment)
[![License](https://img.shields.io/npm/l/@glhrmoura/environment.svg?style=for-the-badge)](https://github.com/glhrmoura/environment/blob/main/LICENSE)

An efficient Node library for managing and setting environment variables.

### Install

```
$ yarn add @glhrmoura/environment
```

or

```
$ npm install @glhrmoura/environment
```

### Usage

#### Basic

The library is quite simple to use, we just need to import and call a configuration function:

```jsx
import { config } from '@glhrmoura/environment';

config();
```

#### Passing `path` property

There's also the option to provide a custom path to the file. If no `path` is provided, an .environment file will be searched for in the project's root:

```jsx
import { config } from '@glhrmoura/environment';

config({ path: '/path/envFile' });
```

### License

[MIT](https://github.com/glhrmoura/environment/blob/main/LICENSE)

Copyright (c) Guilherme Moura