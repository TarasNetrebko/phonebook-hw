import { useSelector } from 'react-redux';
import { getUser } from 'redux/auth/auth-selectors';
import { useDispatch } from 'react-redux';
import { userLogout } from 'redux/auth/auth-operations';
import { UserButton } from 'components/Atoms/Buttons.styled';
import { Stack, Image } from 'react-bootstrap';

export const UserMenu = () => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  return (
      <Stack direction="horizontal" gap={3}>
          <Image src="https://avatars.dicebear.com/api/adventurer-neutral/your-custom-seed.svg" alt="avatar" roundedCircle width="40"/>
        <b>{user.email}</b>
        <UserButton type="button" onClick={() => dispatch(userLogout())}>
          Logout
        </UserButton>
    </Stack>
  );
};
