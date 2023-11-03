import { FC } from 'react';
import Script from 'next/script';
import { Box } from '@chakra-ui/react';

import { PATH_CONTACT } from '@/constant/path';

import HeadOgp from '@/components/HeadOgp';

const Contact: FC = () => {
  return (
    <>
      <HeadOgp path={PATH_CONTACT} />
      <Box as="main">
        <Script src="https://sdk.form.run/js/v2/embed.js" />
        <Box
          className="formrun-embed"
          data-formrun-form="@philosophia"
          data-formrun-redirect="true"
        />
      </Box>
    </>
  );
};

export default Contact;
