import { getIsLogedIn } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

export const useAuth = () => {
  const isLogin = useSelector(getIsLogedIn);
  return isLogin;
};
