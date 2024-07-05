interface Credentials {
    username: string;
    password: string;
    token: string,
}

interface User {
    id: string;
    fullName: string;
    title: null;
    username: string;
    email: string;
    role: string;
    needApproval: boolean;
    avatar: Avatar;
    created: Date;
    updated: null;
    isVerified: boolean;
    token: string;
    refreshToken: string;
}

interface Avatar {
    imageDefault: string;
    imageBig: string;
    imageSmall: string;
}

export const useAuth = defineStore("auth", () => {
    // const alert = useAlert();
    const api = useApi();
    const API_BASE_URL = useRuntimeConfig().public.API_BASE_URL;
    const token = useCookie("auth.token");
    const user = useCookie<User | null>("auth.user");
    const refreshToken = useCookie("auth.refresh-token");
    // const expiredToken = useCookie("auth.expiredAt");

    const setRefreshToken = (data: string | null) => (refreshToken.value = data);
    // const setExpiredToken = (data: string | null) => (expiredToken.value = data);

    const setToken = (data: string | null) => (token.value = data);
    const setUser = (data: User | null) => (user.value = data);



    /**
   * Function to sign in user with provided credentials.
   * @param payload - User credentials including username and password.
   */
  const signIn = async (payload: Credentials) => {
    try {
        const response: any = await $fetch(API_BASE_URL + "authenticate", {
            method: "POST",
            body: { ...payload}
        });

        if (!response) return;

      const message = response.message;

        const userData = response.data

        setUser(userData);
        setToken(userData.token);
        setRefreshToken(userData.refreshToken);
        // setExpiredToken(userData.expiredAt);

        if (message === "success") {
            navigateTo("/");
        }
    } catch (error: any) {
        console.error(error)
    }
  }

  return { signIn };
})