import axios from 'axios';
import makeRequest from '..';
import { GET_SONGS_DATA } from '../../../constants/apiEndPoints';
// import { ERROR_ROUTE } from '../../../constants/routes';
import { mockSongData } from '../../../mocks/songData';

jest.mock('axios');

describe('makeRequest', () => {
  it('should call axios api', async () => {
    axios.mockResolvedValue({ data: { mockSongData } });
    expect(axios).toHaveBeenCalledTimes(0);
    const response = await makeRequest(GET_SONGS_DATA);
    expect(axios).toHaveBeenCalledTimes(1);
    expect(response).toEqual({ mockSongData });
  });

  it('should navigate to error page without status code when api call return error status code' ,async()=>{
   const mockNavigate = jest.fn();

   mockAxios.mockRejectedValueOnce({});
   expect(mockNavigate).not.toBeCalled();
   await makeRequest(
      LIKE_SONG(1),
     { 
         data:{claps:1}
     },
     mockNavigate
   );
   expect(mockNavigate).toHaveBeenCalledTimes(1);
   expect(mockNavigate).toHaveBeenCalledWith(ERROR_ROUTE)
});
