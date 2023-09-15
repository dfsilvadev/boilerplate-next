import Image from 'next/image';

import * as S from './styles';

const Main = () => (
  <S.MainContent>
    <h1>Boilerplate</h1>
    <div>
      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </div>
  </S.MainContent>
);

export default Main;
