import { formClient } from '@/libs/client';
import { FormType } from '@/types/microCMS';
import { WriteApiRequestResult } from 'microcms-js-sdk';

export const sendForm: (
  params: FormType
) => Promise<WriteApiRequestResult> = async (params: FormType) => {
  const result = await formClient.create({
    endpoint: 'form',
    content: params,
  });

  return result;
};
