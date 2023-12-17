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

The library is quite simple to use, we just need to import and call a configuration function. The configuration will look for a `.env` file at the same level as the file calling it.

```jsx
import { config } from '@glhrmoura/environment';

config();
```

#### Passing `envPath` property

The `envPath` property refers to the path of the `.env` file:

```jsx
import { config } from '@glhrmoura/environment';

config({ envPath: '/path/envFile' });
```

#### Passing `envPath` as a list

The `envPath` property can also be in the form of a list, receiving multiple paths for different files:

```jsx
import { config } from '@glhrmoura/environment';

config({ envPath: ['/path/envFileDev', '/path/envFileProd'] });
```

### License

[MIT](https://github.com/glhrmoura/environment/blob/main/LICENSE)

Copyright (c) Guilherme Moura