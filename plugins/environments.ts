import { Context } from '@nuxt/types';
require('dotenv').config();

export interface EnvironmentsVariables {
  [key: string]: any; // environments[key]の型エラー対策
  NODE_ENV: string;
  browser: boolean;
  client: boolean;
  mode: 'spa' | 'universal';
  modern: boolean;
  server: boolean;
  static: boolean;
}

export const environments: EnvironmentsVariables = {
  // Nuxt.js default environment value
  NODE_ENV: process.env.NODE_ENV!,
  browser: process.browser!,
  client: process.client!,
  mode: process.mode!,
  modern: process.modern!,
  server: process.server!,
  static: process.static!
  // custom environment value
};

export default (context: Context, inject: (name: string, value: any) => any) => {
  inject('environments', environments);
};
