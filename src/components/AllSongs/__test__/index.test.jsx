import React from 'react';
import {
  render, screen, fireEvent, waitFor,
} from '@testing-library/react';
import mockSongData from '../../../mocks/songData';
import AllSongs from '..';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('AllSongs', () => {
  it('should render when mounted', () => {
    const { container } = render(<AllSongs
      allSongsData={mockSongData}
      setToggleClicked={false}
    />);
    expect(container).toMatchSnapshot();
  });

  // it('should render cards when mounted', async () => {
  //   render(<AllSongs
  //     allSongsData={mockSongData}
  //     setToggleClicked={false}
  //   />);
  //   await waitFor(() => {
  //     expect(screen.getAllByTestId('testCard')).toHaveLength(2);
  //   });
  // });

  //   it('should have sync button when mounted', () => {
  //     render(<BrowserRouter><SyncButton /></BrowserRouter>);
  //     const syncButton = screen.getByTestId('sync-button');
  //     expect(syncButton).toBeTruthy();
  //   });
  //   it('should have sync button when mounted', () => {
  //     render(<BrowserRouter><SyncButton /></BrowserRouter>);
  //     const syncButton = screen.getByTestId('sync-button');
  //     expect(syncButton).toBeTruthy();
  //   });
});
