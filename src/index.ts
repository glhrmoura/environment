import { readFileSync } from 'fs';

import { Utils } from '@/utils';

interface Config {
  envPath?: string | string[];
}

const getVariables = (envFile: Buffer): { [key: string]: string } => {
  return String(envFile).split(/\n/).reduce((acc, env) => {
    if (!env || env.startsWith('#')) return acc;
    const [key, value] = env.split('=');
    return { ...acc, [Utils.clearstr(key)]: Utils.clearstr(value) };
  }, {});
}

export const config = ({ envPath }: Config = {}) => {
  try {
    let variables = {};
    const path = envPath?.length ? envPath : './.env';

    if (typeof path === 'string') {
      variables = getVariables(readFileSync(path))
    } else if (Array.isArray(path)) {
      path.forEach((path) => {
        variables = {
          ...variables,
          ...getVariables(readFileSync(path))
        };
      });
    }

    process.env = {
      ...process.env,
      ...variables
    };
  } catch (error) {
    console.log('[@glhrmoura/environment]', error);
  }
}