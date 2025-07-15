import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../store/context/AuthContext";
import { HeaderLoginPage } from "../../../ui/styles/header-login-style";
import { getNameOfMail } from "../../../utils/getNameOfMail";

export const HeaderLogin = () => {
  const { user, admin } = useAuth();

  return <HeaderLoginPage>{!user && !admin ? <NotLogIn /> : <AnyLogIn />}</HeaderLoginPage>;
};

const NotLogIn = () => {
  const navigate = useNavigate();
  const onNavigate = () => {
    navigate("/login");
  };
  return (
    <>
      <p onClick={onNavigate}>iniciar sesión</p>
      <svg
        onClick={onNavigate}
        width='30px'
        height='30px'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M16.8 2H14.2C11 2 9 4 9 7.2V11.25H13.44L11.37 9.18C11.22 9.03 11.15 8.84 11.15 8.65C11.15 8.46 11.22 8.27 11.37 8.12C11.66 7.83 12.14 7.83 12.43 8.12L15.78 11.47C16.07 11.76 16.07 12.24 15.78 12.53L12.43 15.88C12.14 16.17 11.66 16.17 11.37 15.88C11.08 15.59 11.08 15.11 11.37 14.82L13.44 12.75H9V16.8C9 20 11 22 14.2 22H16.79C19.99 22 21.99 20 21.99 16.8V7.2C22 4 20 2 16.8 2Z' />
        <path d='M2.75 11.25C2.34 11.25 2 11.59 2 12C2 12.41 2.34 12.75 2.75 12.75H9V11.25H2.75Z' />
      </svg>
    </>
  );
};
export const AnyLogIn = () => {
  const { user, admin, logout } = useAuth();
  const username = getNameOfMail(user || admin);
  const navigate = useNavigate();
  const onAdmin = () => {
    if (admin) {
      navigate("/admin");
    }
  };
  return (
    <>
      <svg width='20px' height='20px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z' />
        <path d='M12.0002 14.5C6.99016 14.5 2.91016 17.86 2.91016 22C2.91016 22.28 3.13016 22.5 3.41016 22.5H20.5902C20.8702 22.5 21.0902 22.28 21.0902 22C21.0902 17.86 17.0102 14.5 12.0002 14.5Z' />
      </svg>
      <p onClick={onAdmin}>{username}</p>
      <svg
        onClick={logout}
        width='30px'
        height='30px'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M16.8 2H14.2C11 2 9 4 9 7.2V11.25H15.25C15.66 11.25 16 11.59 16 12C16 12.41 15.66 12.75 15.25 12.75H9V16.8C9 20 11 22 14.2 22H16.79C19.99 22 21.99 20 21.99 16.8V7.2C22 4 20 2 16.8 2Z' />
        <path d='M4.56141 11.2498L6.63141 9.17984C6.78141 9.02984 6.85141 8.83984 6.85141 8.64984C6.85141 8.45984 6.78141 8.25984 6.63141 8.11984C6.34141 7.82984 5.86141 7.82984 5.57141 8.11984L2.22141 11.4698C1.93141 11.7598 1.93141 12.2398 2.22141 12.5298L5.57141 15.8798C5.86141 16.1698 6.34141 16.1698 6.63141 15.8798C6.92141 15.5898 6.92141 15.1098 6.63141 14.8198L4.56141 12.7498H9.00141V11.2498H4.56141Z' />
      </svg>
    </>
  );
};
