import axios from "axios";

export function useApi() {
  const token = useCookie("auth.token");
  const API_BASE_URL = useRuntimeConfig().public.API_BASE_URL;

    /**
   * Construct common headers for API requests
   */
    const header: any = {
        Authorization: token,
        "Content-Type": "application/json",
    };

    /**
   * Wrapper funtion to handle token refresh and retry
   */
  const handleRequest = async (requestFunc: () => Promise<any>) => {
    try {
      return await requestFunc();
    } catch (error: any) {
      if (error.response && error.response.data) {
        if (error.response?.data.message === "Token Expired") {
          navigateTo('/auth/login')
        }
      }
    }
  };

    const get = async (
        endpoint: string,
        params?: Record<string, any>
      ): Promise<any> => {
        return handleRequest(() =>
          $fetch(API_BASE_URL + endpoint, {
            method: "GET",
            headers: header,
            params: params,
          })
        );
      };
    
  return { get };
}