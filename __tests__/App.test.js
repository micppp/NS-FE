import { render, screen } from '@testing-library/react';
import App from '../pages/index';
import { SWRConfig } from 'swr';
import fetcher from '../utils/fetcher';

const Wrapper = ({ children }) => {
  return <SWRConfig value={{ dedupingInterval: 0 }}>{children}</SWRConfig>;
};

jest.mock('../utils/fetcher');

function buildData() {
  return {};
}

describe('App', () => {
  it('renders without crashing', () => {
    <Wrapper>
      <App />
    </Wrapper>;
  });

  it('starts loading the data', async () => {
    fetcher.mockResolvedValueOnce(buildData());
    render(<App />);
    expect(fetcher).toHaveBeenCalledTimes(1);

    const loading = screen.getByTestId('fetch-loading');
    expect(loading).toHaveTextContent(/loading/i);
  });
});
