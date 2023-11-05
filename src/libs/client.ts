import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_API_URL || '',
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY || '',
});

export const formClient = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_FORM_API_URL || '',
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_FORM_API_KEY || '',
});
