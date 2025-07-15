import { useNavigate } from "react-router-dom";
import { emailRegex, passwordRegex, useForm } from "../../hooks/useForm";
import { useAuth } from "../../store/context/AuthContext";
import { FormBtnContainer, InputContainer, InputTitle, LoginFormContainer } from "../../ui/styles/login-form-style";
import { SpinnerLoader } from "../loader/SpinnerLoader";
import { useState } from "react";

const validateLogin = (values) => {
  let temp = {};
  if (!values.email) temp.email = "El email es obligatorio";
  else if (!emailRegex.test(values.email)) temp.email = "Email inválido";
  else temp.email = "";

  if (!values.password) temp.password = "La contraseña es obligatoria";
  else if (!passwordRegex.test(values.password))
    temp.password = "Debe tener una mayúscula, un número y mínimo 6 caracteres";
  else temp.password = "";

  return temp;
};

export const LoginForm = () => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    setIsSubmitting,
    handleChange,
    handleBlur,
    runValidation,
    setCredentials,
  } = useForm({ email: "", password: "" }, validateLogin);
  const { loginUser, loginAdmin } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const onPassword = () => setShowPassword(!showPassword);
  const onPreventDefault = (e) => {
    e.preventDefault();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const isValid = runValidation(values);
    if (isValid) {
      try {
        const res = await fetch("/users.json");
        const users = await res.json();
        const findUser = users.find((user) => user.email === values.email && user.password === values.password);

        if (!findUser) {
          setCredentials("Credenciales invalidas");
        } else {
          if (findUser.role === "admin") {
            loginAdmin(values.email);
            navigate("/admin");
          } else if (findUser.role === "cliente") {
            loginUser(values.email);
            navigate("/payment");
          }
        }
      } catch {
        setCredentials(`Algo salio mal. Por favor intente nuevamente. `);
      }
    }
    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <LoginFormContainer>
      <InputTitle>Email</InputTitle>
      <InputContainer>
        <svg xmlns='http://www.w3.org/2000/svg' width='20' viewBox='0 0 32 32' height='20'>
          <g data-name='Layer 3'>
            <path d='m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z'></path>
          </g>
        </svg>
        <input
          name='email'
          placeholder='Enter your Email'
          type='text'
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </InputContainer>
      {touched.email && errors.email && <span style={{ color: "red", fontSize: "0.9em" }}>{errors.email}</span>}
      {touched.email && !errors.email && values.email && (
        <span style={{ color: "green", fontSize: "0.9em" }}>Email validado</span>
      )}
      <InputTitle>Password </InputTitle>
      <InputContainer>
        <svg xmlns='http://www.w3.org/2000/svg' width='20' viewBox='-64 0 512 512' height='20'>
          <path d='m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0'></path>
          <path d='m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0'></path>
        </svg>
        <input
          name='password'
          placeholder='Enter your Password'
          type={showPassword ? "text" : "password"}
          autoComplete='current-password'
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <span aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"} onClick={onPassword}>
          {showPassword ? (
            // Ojo abierto

            <svg width='20px' height='20px' viewBox='0 -0.5 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M18.5 12.714C18.5 15.081 15.366 17 11.5 17C7.634 17 4.5 15.081 4.5 12.714C4.5 10.347 7.634 8.42896 11.5 8.42896C15.366 8.42896 18.5 10.347 18.5 12.714Z'
                stroke='#000000'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M13.2501 12.714C13.2647 13.4249 12.8477 14.074 12.1951 14.3562C11.5424 14.6384 10.7839 14.4977 10.2759 14.0002C9.76792 13.5027 9.61148 12.7472 9.8801 12.0889C10.1487 11.4305 10.789 11.0001 11.5001 11C11.9594 10.9952 12.4019 11.1731 12.7301 11.4945C13.0583 11.816 13.2453 12.2546 13.2501 12.714V12.714Z'
                stroke='#000000'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M10.75 8.429C10.75 8.84321 11.0858 9.179 11.5 9.179C11.9142 9.179 12.25 8.84321 12.25 8.429H10.75ZM12.25 5C12.25 4.58579 11.9142 4.25 11.5 4.25C11.0858 4.25 10.75 4.58579 10.75 5H12.25ZM18.2931 7.05471C18.4813 6.68571 18.3347 6.23403 17.9657 6.04586C17.5967 5.85769 17.145 6.00428 16.9569 6.37329L18.2931 7.05471ZM15.5199 9.19129C15.3317 9.5603 15.4783 10.012 15.8473 10.2001C16.2163 10.3883 16.668 10.2417 16.8561 9.87271L15.5199 9.19129ZM6.04314 6.37329C5.85497 6.00428 5.40329 5.85769 5.03429 6.04586C4.66528 6.23403 4.51869 6.68571 4.70686 7.05471L6.04314 6.37329ZM6.14386 9.87271C6.33203 10.2417 6.78371 10.3883 7.15271 10.2001C7.52172 10.012 7.66831 9.5603 7.48014 9.19129L6.14386 9.87271ZM12.25 8.429V5H10.75V8.429H12.25ZM16.9569 6.37329L15.5199 9.19129L16.8561 9.87271L18.2931 7.05471L16.9569 6.37329ZM4.70686 7.05471L6.14386 9.87271L7.48014 9.19129L6.04314 6.37329L4.70686 7.05471Z'
                fill='#000000'
              />
            </svg>
          ) : (
            // Ojo cerrado
            <svg width='20px' height='20px' viewBox='0 -0.5 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M12.5 9.279C12.9142 9.279 13.25 8.94321 13.25 8.529C13.25 8.11479 12.9142 7.779 12.5 7.779V9.279ZM7.78691 17.0545C8.15666 17.2412 8.60776 17.0928 8.79448 16.7231C8.9812 16.3533 8.83283 15.9022 8.46309 15.7155L7.78691 17.0545ZM11.75 8.529C11.75 8.94321 12.0858 9.279 12.5 9.279C12.9142 9.279 13.25 8.94321 13.25 8.529H11.75ZM13.25 5C13.25 4.58579 12.9142 4.25 12.5 4.25C12.0858 4.25 11.75 4.58579 11.75 5H13.25ZM12.4976 7.779C12.0834 7.78034 11.7487 8.11721 11.75 8.53142C11.7513 8.94563 12.0882 9.28033 12.5024 9.279L12.4976 7.779ZM15.0727 9.61167C15.4729 9.71841 15.8839 9.48051 15.9907 9.08029C16.0974 8.68006 15.8595 8.26908 15.4593 8.16233L15.0727 9.61167ZM7.04684 6.43163C6.86272 6.06058 6.41268 5.90905 6.04163 6.09316C5.67058 6.27728 5.51905 6.72732 5.70316 7.09837L7.04684 6.43163ZM7.14216 9.99837C7.32628 10.3694 7.77632 10.521 8.14737 10.3368C8.51842 10.1527 8.66995 9.70268 8.48584 9.33163L7.14216 9.99837ZM7.57341 19.4918C7.29275 19.7965 7.31219 20.2709 7.61682 20.5516C7.92146 20.8323 8.39594 20.8128 8.67659 20.5082L7.57341 19.4918ZM11.2516 17.7132C11.5323 17.4085 11.5128 16.9341 11.2082 16.6534C10.9035 16.3727 10.4291 16.3922 10.1484 16.6968L11.2516 17.7132ZM20.0518 8.155C20.3323 7.85027 20.3127 7.3758 20.008 7.09524C19.7033 6.81468 19.2288 6.83427 18.9482 7.139L20.0518 8.155ZM16.9282 9.333C16.6477 9.63773 16.6673 10.1122 16.972 10.3928C17.2767 10.6733 17.7512 10.6537 18.0318 10.349L16.9282 9.333ZM10.1484 16.6968C9.86775 17.0015 9.88718 17.4759 10.1918 17.7566C10.4965 18.0373 10.9709 18.0178 11.2516 17.7132L10.1484 16.6968ZM13.1 14.6L13.6516 15.1082L13.6523 15.1074L13.1 14.6ZM14.185 13.419L13.6333 12.9109L13.6327 12.9116L14.185 13.419ZM18.0317 10.3491C18.3123 10.0444 18.2928 9.5699 17.9881 9.2893C17.6834 9.00871 17.2089 9.02824 16.9283 9.33294L18.0317 10.3491ZM10.823 16.4652C10.4144 16.3972 10.0281 16.6734 9.96016 17.082C9.89221 17.4906 10.1684 17.8769 10.577 17.9448L10.823 16.4652ZM12.5 17.353L12.5 16.603H12.4995L12.5 17.353ZM19.5 12.941H20.25C20.25 12.9232 20.2494 12.9055 20.2481 12.8877L19.5 12.941ZM17.8309 9.17814C17.4648 8.98435 17.0109 9.12403 16.8171 9.49011C16.6234 9.8562 16.763 10.3101 17.1291 10.5039L17.8309 9.17814ZM10.4717 14.4167C10.7139 14.7526 11.1827 14.8286 11.5187 14.5863C11.8546 14.3441 11.9306 13.8753 11.6883 13.5393L10.4717 14.4167ZM10.937 12.1447L11.606 12.4838L10.937 12.1447ZM12.5 11.176L12.4991 10.426L12.494 10.426L12.5 11.176ZM13.0229 12.0756C13.3739 12.2955 13.8367 12.1892 14.0566 11.8381C14.2765 11.4871 14.1702 11.0243 13.8191 10.8044L13.0229 12.0756ZM12.5 7.779C10.4478 7.779 8.5544 8.30173 7.15036 9.18663C5.75606 10.0654 4.75 11.3737 4.75 12.941H6.25C6.25 12.0713 6.81094 11.1736 7.95014 10.4556C9.0796 9.74377 10.6862 9.279 12.5 9.279V7.779ZM4.75 12.941C4.75 14.7344 6.05973 16.1823 7.78691 17.0545L8.46309 15.7155C6.99027 14.9718 6.25 13.9336 6.25 12.941H4.75ZM13.25 8.529V5H11.75V8.529H13.25ZM12.5024 9.279C13.3701 9.27619 14.2343 9.38805 15.0727 9.61167L15.4593 8.16233C14.4932 7.90467 13.4974 7.77578 12.4976 7.779L12.5024 9.279ZM5.70316 7.09837L7.14216 9.99837L8.48584 9.33163L7.04684 6.43163L5.70316 7.09837ZM8.67659 20.5082L11.2516 17.7132L10.1484 16.6968L7.57341 19.4918L8.67659 20.5082ZM18.9482 7.139L16.9282 9.333L18.0318 10.349L20.0518 8.155L18.9482 7.139ZM11.2516 17.7132L13.6516 15.1082L12.5484 14.0918L10.1484 16.6968L11.2516 17.7132ZM13.6523 15.1074L14.7373 13.9264L13.6327 12.9116L12.5477 14.0926L13.6523 15.1074ZM14.7367 13.9271L18.0317 10.3491L16.9283 9.33294L13.6333 12.9109L14.7367 13.9271ZM10.577 17.9448C11.2127 18.0506 11.8561 18.1035 12.5005 18.103L12.4995 16.603C11.9378 16.6034 11.3771 16.5573 10.823 16.4652L10.577 17.9448ZM12.5 18.103C14.5522 18.103 16.4456 17.5803 17.8496 16.6954C19.2439 15.8166 20.25 14.5083 20.25 12.941H18.75C18.75 13.8107 18.1891 14.7084 17.0499 15.4264C15.9204 16.1382 14.3138 16.603 12.5 16.603V18.103ZM20.2481 12.8877C20.1363 11.317 19.2226 9.91487 17.8309 9.17814L17.1291 10.5039C18.0634 10.9985 18.6768 11.9398 18.7519 12.9943L20.2481 12.8877ZM11.6883 13.5393C11.4657 13.2306 11.4339 12.8233 11.606 12.4838L10.268 11.8057C9.84236 12.6456 9.92092 13.6529 10.4717 14.4167L11.6883 13.5393ZM11.606 12.4838C11.7781 12.1442 12.1253 11.929 12.506 11.926L12.494 10.426C11.5524 10.4335 10.6937 10.9658 10.268 11.8057L11.606 12.4838ZM12.5009 11.926C12.6855 11.9258 12.8664 11.9776 13.0229 12.0756L13.8191 10.8044C13.4235 10.5566 12.9659 10.4254 12.4991 10.426L12.5009 11.926Z'
                fill='#000000'
              />
            </svg>
          )}
        </span>
      </InputContainer>
      {touched.password && errors.password && (
        <span style={{ color: "red", fontSize: "0.9em" }}>{errors.password}</span>
      )}
      {touched.password && !errors.password && values.password && (
        <span style={{ color: "green", fontSize: "0.9em" }}>Contraseña validada</span>
      )}
      <FormBtnContainer>
        <span>Forgot password?</span>
      </FormBtnContainer>

      <button
        type='submit'
        disabled={isSubmitting || Object.values(errors).some((e) => e) || !values.email || !values.password}
        onClick={handleSubmit}
        className='button-submit'
      >
        {isSubmitting ? <SpinnerLoader /> : "Sign In"}
      </button>

      <span>
        Don't have an account?
        <button onClick={onPreventDefault}>Sign Up</button>
      </span>
      <p>Or With</p>

      <FormBtnContainer>
        <button onClick={onPreventDefault}>
          <svg viewBox='0 0 512 512' y='0px' x='0px' xmlns='http://www.w3.org/2000/svg' width='20' version='1.1'>
            <path
              d='M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
	c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
	C103.821,274.792,107.225,292.797,113.47,309.408z'
              style={{ fill: "#FBBB00" }}
            ></path>
            <path
              d='M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
	c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
	c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z'
              style={{ fill: "#518EF8" }}
            ></path>
            <path
              d='M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
	c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
	c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z'
              style={{ fill: "#28B446" }}
            ></path>
            <path
              d='M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
	c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
	C318.115,0,375.068,22.126,419.404,58.936z'
              style={{ fill: "#F14336" }}
            ></path>
          </svg>
          Google
        </button>
        <button onClick={onPreventDefault}>
          <svg
            style={{ enableBackground: "new 0 0 22.773 22.773" }}
            viewBox='0 0 22.773 22.773'
            y='0px'
            x='0px'
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            version='1.1'
          >
            <g>
              <g>
                <path d='M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z'></path>
                <path d='M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z'></path>
              </g>
            </g>
          </svg>
          Apple
        </button>
      </FormBtnContainer>
    </LoginFormContainer>
  );
};
