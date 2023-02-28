import {
  render, screen, fireEvent, waitFor, getByRole,
} from '@testing-library/react';
import React from 'react';
import Card from '..';
import makeRequest from '../../../utils/makeRequest';

import mockSingleSongData from '../../../mocks/singleSongData';

jest.mock('../../../utils/makeRequest');

describe('Card component', () => {
  it('should render when mounted', () => {
    const { container } = render(<Card
      id={1}
      songdata={mockSingleSongData}
    />);
    expect(container).toMatchSnapshot();
  });

  //   it('should render the card', async () => {
  //     makeRequest.mockResolvedValue({
  //       data: {
  //         count: 15,
  //         like: true,
  //       },
  //     });
  //     render(<Card
  //       id={1}
  //       songdata={mockSingleSongData}
  //     />);
  //     expect(screen.getByText('Lost')).toBeTruthy();
  //     await waitFor(() => {
  //       expect(screen.getByText('15')).toBeTruthy();
  //     });
  //   });

  it('should render the card with like false', () => {
    makeRequest.mockResolvedValueOnce({
      data: {
        count: 15,
        like: false,
      },
    });
    makeRequest.mockResolvedValueOnce({
      data: {
        count: 16,
        like: true,
      },
    });
    const { container } = render(<Card
      id={1}
      songdata={mockSingleSongData}
    />);
    waitFor(() => {
      expect(screen.queryByText('15')).toBeTruthy();
    });

    const likeButton = container.getBy('testButton');
    fireEvent.click(likeButton);

    waitFor(() => {
      expect(screen.queryByText('16')).toBeTruthy();
    });
  });

  //   it('should increment thhe like count by 1 when not liked', () => {
  //     makeRequest.mockResolvedValueOnce({
  //       data: {
  //         count: 15,
  //         like: false,
  //       },
  //     });
  //     makeRequest.mockResolvedValueOnce({
  //       data: {
  //         count: 16,
  //         like: true,
  //       },
  //     });

//     render(<Card
//       id={1}
//       songdata={mockSingleSongData}
//     />);
//     makeRequest.mockResolvedValue();
//     const likeButton = getByRole('button');
//     fireEvent.click(likeButton);
//     expect(screen.getByText(10));
//   });
});
