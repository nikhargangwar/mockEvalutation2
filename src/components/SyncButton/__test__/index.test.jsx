import React from 'react';
// import { useNavigate } from 'react-router-dom';
import {
  render, screen, fireEvent, waitFor,
} from '@testing-library/react';
import SyncButton from '..';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

describe('SyncButton', () => {
  it('should render when mounted', () => {
    const { container } = render(<SyncButton />);
    expect(container).toMatchSnapshot();
  });

  it('should have sync button when mounted', () => {
    render(<SyncButton />);
    const syncButton = screen.getByTestId('sync-button');
    expect(syncButton).toBeTruthy();
  });

  it('should navigate when sync buttonn is clicked', async () => {
    render(<SyncButton />);
    expect(mockNavigate).not.toBeCalled();
    const syncButton = screen.getByTestId('sync-button');
    fireEvent.click(syncButton);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
  });
});
