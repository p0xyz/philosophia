import { FC } from 'react';
import Script from 'next/script';
import { Box } from '@chakra-ui/react';

import OGP from '@/components/OGP';

const Formrun: FC = () => {
  return (
    <>
      <OGP />
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

export default Formrun;
