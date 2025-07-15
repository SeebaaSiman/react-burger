import customersImg from "../../assets/customers.jpg";
import logoImg from "../../assets/logo.png";
import aboutImg from "../../assets/about.jpg";
import settingImg from "../../assets/setting.jpg";

export const arrBentoInfo = [
  {
    id: 0,
    text: "user name",
    area: "name",
    to: null,
  },
  {
    id: 1,
    text: "Clientes",
    icon: (
      <svg width='30px' height='30px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          stroke='#7A9A01'
          fillRule='evenodd'
          clipRule='evenodd'
          d='M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5Z'
        />
        <path
          stroke='#7A9A01'
          d='M6.28645 5.9581C6.81559 5.7999 7.1163 5.2427 6.9581 4.71355C6.7999 4.18441 6.2427 3.8837 5.71355 4.0419C4.06991 4.53331 3 6.1924 3 8C3 9.8076 4.06991 11.4667 5.71355 11.9581C6.2427 12.1163 6.7999 11.8156 6.9581 11.2864C7.1163 10.7573 6.81559 10.2001 6.28645 10.0419C5.62978 9.84558 5 9.07911 5 8C5 6.92089 5.62978 6.15442 6.28645 5.9581Z'
        />
        <path
          stroke='#7A9A01'
          d='M18.2864 4.0419C17.7573 3.8837 17.2001 4.18441 17.0419 4.71355C16.8837 5.2427 17.1844 5.7999 17.7136 5.9581C18.3702 6.15442 19 6.92089 19 8C19 9.07911 18.3702 9.84558 17.7136 10.0419C17.1844 10.2001 16.8837 10.7573 17.0419 11.2864C17.2001 11.8156 17.7573 12.1163 18.2864 11.9581C19.9301 11.4667 21 9.8076 21 8C21 6.1924 19.9301 4.53331 18.2864 4.0419Z'
        />
        <path
          stroke='#7A9A01'
          fillRule='evenodd'
          clipRule='evenodd'
          d='M12 14C10.0062 14 8.09544 14.2542 6.64442 14.8986C5.16516 15.5554 4 16.7142 4 18.5C4 18.9667 4.08524 19.4978 4.40272 20.0043C4.72017 20.5106 5.20786 20.8939 5.83781 21.1789C7.04688 21.7259 8.98391 22 12 22C15.0161 22 16.9531 21.7259 18.1622 21.1789C18.7921 20.8939 19.2798 20.5106 19.5973 20.0043C19.9148 19.4978 20 18.9667 20 18.5C20 16.7142 18.8348 15.5554 17.3556 14.8986C15.9046 14.2542 13.9938 14 12 14ZM6 18.5C6 17.7858 6.40184 17.1946 7.45609 16.7264C8.53857 16.2458 10.1278 16 12 16C13.8722 16 15.4614 16.2458 16.5439 16.7264C17.5982 17.1946 18 17.7858 18 18.5C18 18.7236 17.9602 18.8502 17.9027 18.942C17.8452 19.0338 17.7079 19.1893 17.3378 19.3567C16.5469 19.7145 14.9839 20 12 20C9.01609 20 7.45312 19.7145 6.66219 19.3567C6.29214 19.1893 6.15483 19.0338 6.09728 18.942C6.03976 18.8502 6 18.7236 6 18.5Z'
        />
        <path
          stroke='#7A9A01'
          d='M19.1042 13.5555C19.3497 13.0608 19.9498 12.8587 20.4445 13.1042C21.9384 13.8456 23 15.1261 23 17C23 17.5523 22.5523 18 22 18C21.4477 18 21 17.5523 21 17C21 16.0458 20.525 15.3769 19.5555 14.8958C19.0608 14.6503 18.8587 14.0502 19.1042 13.5555Z'
        />
        <path
          stroke='#7A9A01'
          d='M4.44452 14.8958C4.93924 14.6503 5.14127 14.0502 4.89577 13.5555C4.65027 13.0608 4.0502 12.8587 3.55548 13.1042C2.06158 13.8456 1 15.1261 1 17C1 17.5523 1.44772 18 2 18C2.55228 18 3 17.5523 3 17C3 16.0458 3.47503 15.3769 4.44452 14.8958Z'
        />
      </svg>
    ),
    image: customersImg,
    area: "clientes",
    to: "/admin/customers",
  },
  {
    id: 2,
    text: "Productos",
    icon: (
      <svg width='30px' height='30px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'>
        <g fill='none' fillRule='evenodd' stroke='none' strokeWidth='1'>
          <g transform='translate(-325.000000, -80.000000)'>
            <g transform='translate(325.000000, 80.000000)'>
              {/* <polygon fill='' fillopacity='0.01' fillRule='nonzero' points='24 0 0 0 0 24 24 24' /> */}

              <polygon
                points='22 7 12 2 2 7 2 17 12 22 22 17'
                stroke='#7A9A01'
                strokeLinejoin='round'
                strokeWidth='1.5'
              />

              <line
                stroke='#7A9A01'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.5'
                x1='2'
                x2='12'
                y1='7'
                y2='12'
              />

              <line
                id='路径'
                stroke='#7A9A01'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.5'
                x1='12'
                x2='12'
                y1='22'
                y2='12'
              />

              <line
                stroke='#7A9A01'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.5'
                x1='22'
                x2='12'
                y1='7'
                y2='12'
              />

              <line
                stroke='#7A9A01'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.5'
                x1='17'
                x2='7'
                y1='4.5'
                y2='9.5'
              />
            </g>
          </g>
        </g>
      </svg>
    ),
    image: logoImg,
    area: "productos",
    to: "/admin/admin-products",
  },
  {
    id: 3,
    text: "Subir productos",
    icon: (
      <svg width='30px' height='30px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M18.18 8.03933L18.6435 7.57589C19.4113 6.80804 20.6563 6.80804 21.4241 7.57589C22.192 8.34374 22.192 9.58868 21.4241 10.3565L20.9607 10.82M18.18 8.03933C18.18 8.03933 18.238 9.02414 19.1069 9.89309C19.9759 10.762 20.9607 10.82 20.9607 10.82M18.18 8.03933L13.9194 12.2999C13.6308 12.5885 13.4865 12.7328 13.3624 12.8919C13.2161 13.0796 13.0906 13.2827 12.9882 13.4975C12.9014 13.6797 12.8368 13.8732 12.7078 14.2604L12.2946 15.5L12.1609 15.901M20.9607 10.82L16.7001 15.0806C16.4115 15.3692 16.2672 15.5135 16.1081 15.6376C15.9204 15.7839 15.7173 15.9094 15.5025 16.0118C15.3203 16.0986 15.1268 16.1632 14.7396 16.2922L13.5 16.7054L13.099 16.8391M13.099 16.8391L12.6979 16.9728C12.5074 17.0363 12.2973 16.9867 12.1553 16.8447C12.0133 16.7027 11.9637 16.4926 12.0272 16.3021L12.1609 15.901M13.099 16.8391L12.1609 15.901'
          stroke='#7A9A01'
          strokeWidth='1.5'
        />
        <path d='M8 13H10.5' stroke='#7A9A01' strokeWidth='1.5' strokeLinecap='round' />
        <path d='M8 9H14.5' stroke='#7A9A01' strokeWidth='1.5' strokeLinecap='round' />
        <path d='M8 17H9.5' stroke='#7A9A01' strokeWidth='1.5' strokeLinecap='round' />
        <path
          d='M3 14V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157M21 14C21 17.7712 21 19.6569 19.8284 20.8284M4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284M19.8284 20.8284C20.7715 19.8853 20.9554 18.4796 20.9913 16'
          stroke='#7A9A01'
          strokeWidth='1.5'
          strokeLinecap='round'
        />
      </svg>
    ),
    image: aboutImg,
    area: "editar",
    to: "/admin/add-products",
  },
  {
    id: 4,
    text: "Configuraciones",
    icon: (
      <svg width='30px' height='30px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M22 6.5H16'
          stroke='#7A9A01'
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M6 6.5H2'
          stroke='#7A9A01'
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M10 10C11.933 10 13.5 8.433 13.5 6.5C13.5 4.567 11.933 3 10 3C8.067 3 6.5 4.567 6.5 6.5C6.5 8.433 8.067 10 10 10Z'
          stroke='#7A9A01'
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M22 17.5H18'
          stroke='#7A9A01'
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M8 17.5H2'
          stroke='#7A9A01'
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M14 21C15.933 21 17.5 19.433 17.5 17.5C17.5 15.567 15.933 14 14 14C12.067 14 10.5 15.567 10.5 17.5C10.5 19.433 12.067 21 14 21Z'
          stroke='#7A9A01'
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
    image: settingImg,
    area: "setting",
    to: "/admin/settings",
  },
];
