import { render, screen } from '@testing-library/react';

import Main from '@/components/Main';

describe('<Main />', () => {
  it('should render the heading and next logo', () => {
    const { container } = render(<Main />);

    const heading = screen.getByRole('heading', { name: /boilerplate/i });
    const nextLogo = screen.getByRole('img', { name: /next.js logo/i });

    expect(heading).toBeInTheDocument();

    expect(nextLogo).toBeInTheDocument();
    expect(nextLogo).toHaveAttribute('src', '/next.svg');

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the background color currectly', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toHaveStyle({ 'background-color': '#f2f3f5' });
  });
});
