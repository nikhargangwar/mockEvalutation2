import makeRequest from '..';
import axios from 'axios';
import { UPDATE_BLOG_DATA,GET_BLOG_DATA,BACKEND_URL } from '../../../constants/apiEndPoints';
import { mockBlogPostData } from './../../../mocks/blogData';
import { ERROR_ROUTE } from '../../../constants/routes';

jest.mock('axios');

describe('makeRequest',()=>{
    it('should call axios api',async()=>{
        const mockAxios = axios as jest.MockedFunction<
        typeof axios
      >;

      mockAxios.mockResolvedValue({data:{mockBlogPostData}})
      expect(mockAxios).not.toBeCalled();
      const response = await makeRequest(GET_BLOG_DATA);
      expect(mockAxios).toHaveBeenCalledTimes(1);
      expect(mockAxios).toHaveBeenCalledWith({
        baseURL: BACKEND_URL,
        url: 'blog-posts',
        method: 'get'
      })
      expect(response).toEqual({mockBlogPostData});
    });

    it('should make api call with appropriate request options and return response body when api endpoint and request body is specified', async () => {
        const mockAxios = axios as jest.MockedFunction<
        typeof axios
      >;

      mockAxios.mockResolvedValue({data:{data:{claps:1}}})
      expect(mockAxios).not.toBeCalled();
      const response = await makeRequest(UPDATE_BLOG_DATA(1),
        { 
            data:{claps:1}
        }
        );
      expect(mockAxios).toHaveBeenCalledTimes(1);
      expect(mockAxios).toHaveBeenCalledWith({
        baseURL: BACKEND_URL,
        url: 'blog-posts/1',
        method: 'put',
        data:{claps:1}
      })
      expect(response).toEqual(
        {data:
            {claps:1}
        });

    });

    it('should navigate to error page with status code when api call return error status code',async()=>{
      const mockNavigate = jest.fn();
      const mockAxios = axios as jest.MockedFunction<
        typeof axios
      >;
      mockAxios.mockRejectedValueOnce({response:{status:500}});
      expect(mockNavigate).not.toBeCalled();
      await makeRequest(
        UPDATE_BLOG_DATA(1),
        { 
            data:{claps:1}
        },
        mockNavigate
      );
      expect(mockNavigate).toHaveBeenCalledTimes(1);
      expect(mockNavigate).toHaveBeenCalledWith(`${ERROR_ROUTE}/500`)
    })
    it('should navigate to error page without status code when api call return error status code' ,async()=>{
      const mockNavigate = jest.fn();
      const mockAxios = axios as jest.MockedFunction<
        typeof axios
      >;
      mockAxios.mockRejectedValueOnce({});
      expect(mockNavigate).not.toBeCalled();
      await makeRequest(
        UPDATE_BLOG_DATA(1),
        { 
            data:{claps:1}
        },
        mockNavigate
      );
      expect(mockNavigate).toHaveBeenCalledTimes(1);
      expect(mockNavigate).toHaveBeenCalledWith(ERROR_ROUTE)
    })
})