import { PropsWithChildren } from 'react';

import GlobalStyles from '@/styles/global-styles';

export function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
}
