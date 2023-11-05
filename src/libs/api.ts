import { formClient } from '@/libs/client';
import { MicroCMSFormType } from '@/types/microCMS';
import { WriteApiRequestResult } from 'microcms-js-sdk';

export const postApi: (
  params: MicroCMSFormType
) => Promise<WriteApiRequestResult> = async (params: MicroCMSFormType) => {
  const result = await formClient.create({
    endpoint: 'form',
    content: params,
  });

  return result;
};
