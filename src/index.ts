import { readFileSync } from 'fs';

import { Utils } from '@/utils';

interface Props {
  path?: string;
}

export const config = ({ path = '' }: Props = {}) => {
  try {
    const envPath = path || './.env';
    const envFile = readFileSync(envPath);

    const customEnv = String(envFile).split(/\n/).reduce((acc, env) => {
      if (!env || env.startsWith('#')) return acc;
      const [key, value] = env.split('=');
      return { ...acc, [Utils.clearstr(key)]: Utils.clearstr(value) };
    }, {});

    process.env = {
      ...process.env,
      ...customEnv,
    };
  } catch (error) {
    console.log('[@glhrmoura/env]', error);
  }
}