import { render, screen } from '@testing-library/react';

import Main from '@/components/Main';

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />);

    const heading = screen.getByRole('heading', { name: /boilerplate/i });
    const nextLogo = screen.getByRole('img', { name: /next.js logo/i });

    expect(heading).toBeInTheDocument();

    expect(nextLogo).toBeInTheDocument();
    expect(nextLogo).toHaveAttribute('src', '/next.svg');

    expect(container.firstChild).toMatchSnapshot();
  });
});
