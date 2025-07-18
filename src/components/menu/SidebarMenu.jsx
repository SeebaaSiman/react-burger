import { useEffect } from "react";
import { useMenu } from "../../hooks/useMenu";
import { restaurantInfo } from "../../services/db/local-info";
import {
  HourList,
  MenuCartContainer,
  SideBar,
  SidebarContent,
  HamburgerMenuContainer,
} from "../../ui/styles/menu-style";
import { isToday } from "../../utils/isToday";
import { CartNav } from "../cart/CartNav";
import { HamburgerIcon } from "../HamburgerIcon";
import { useClock } from "../../hooks/useClock";
import { useNavigate } from "react-router-dom";

export const SidebarMenu = () => {
  const { toggleMenu, closeMenu, menuOpen } = useMenu();
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);
  const digitalClock = useClock();
  const navigate = useNavigate();
  const onHome = () => navigate("/");
  return (
    <>
      <MenuCartContainer>
        <CartNav closeMenu={closeMenu} />
      </MenuCartContainer>
      <HamburgerMenuContainer>
        <HamburgerIcon {...{ toggleMenu, menuOpen }} />
      </HamburgerMenuContainer>
      <SideBar className={` ${menuOpen ? "open" : ""}`}>
        <h1 onClick={onHome}>{restaurantInfo.name}</h1>

        <SidebarContent className='info-location'>
          <svg
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512.001 512.001'
            style={{ width: "25px", height: "25px" }}
          >
            <rect
              x='240.708'
              y='72.606'
              transform='matrix(-0.7071 -0.7071 0.7071 -0.7071 417.1353 551.282)'
              style={{ fill: "#E35336" }}
              width='164.067'
              height='233.287'
            />
            <path
              style={{ fill: "#D93C1C " }}
              d='M276.92,235.081c-49.059-49.059-116.582-68.387-180.199-58.007L334.927,415.28
	C345.307,351.663,325.979,284.139,276.92,235.081z'
            />
            <polygon
              style={{ fill: "#E5E5E5 " }}
              points='63.083,485.576 8.096,503.904 26.425,448.918 197.495,277.848 234.153,314.506 '
            />
            <rect
              x='178.414'
              y='291.418'
              transform='matrix(-0.7071 -0.7071 0.7071 -0.7071 131.2715 669.6971)'
              style={{ fill: "#CCCCCC " }}
              width='51.841'
              height='32.487'
            />
            <path
              style={{ fill: "#D93C1C " }}
              d='M493.777,134.236L377.764,18.224c-13.497-13.497-35.38-13.497-48.877,0l0,0
	c-13.497,13.497-13.497,35.38,0,48.877L444.9,183.115c13.497,13.497,35.38,13.497,48.877,0l0,0
	C507.274,169.617,507.274,147.733,493.777,134.236z'
            />
            <path
              d='M499.505,128.508l-72.045-72.045c-3.163-3.162-8.293-3.162-11.455,0c-3.163,3.165-3.163,8.293,0,11.456l72.045,72.044
	c10.2,10.201,10.2,27.222,0,37.422c-10.201,10.2-27.221,10.2-37.421-0.001L334.614,61.371c-10.2-10.199-10.2-27.22,0-37.419
	c10.2-10.201,27.221-10.201,37.421,0l23.986,23.984c3.163,3.162,8.293,3.163,11.455-0.001c3.163-3.163,3.163-8.293,0-11.455
	l-23.984-23.984C375.434,4.438,364.721,0,353.324,0c-11.396,0-22.108,4.438-30.167,12.495c-8.057,8.058-12.495,18.771-12.495,30.167
	c0,8.646,2.56,16.895,7.312,23.894L204.956,179.574c-3.392-1.254-6.81-2.441-10.263-3.52c-31.896-9.958-66.224-12.369-99.277-6.976
	c-6.383,1.041-9.004,9.14-4.423,13.723l95.046,95.046l-25.347,25.347c-3.163,3.165-3.163,8.293,0,11.456
	c3.163,3.162,8.293,3.162,11.455,0l25.347-25.347l25.203,25.202L58.707,478.495l-37.804,12.602l12.601-37.804l120.011-120.011
	c3.163-3.165,3.163-8.293,0-11.456c-3.163-3.162-8.293-3.162-11.455,0L20.697,443.189c-0.889,0.889-1.56,1.973-1.957,3.167
	L0.411,501.343c-2.069,6.207,4.033,12.317,10.246,10.246l54.987-18.329c1.192-0.397,2.277-1.067,3.167-1.957l165.341-165.341
	l95.047,95.046c4.583,4.583,12.681,1.954,13.723-4.424c5.394-33.054,2.981-67.384-6.976-99.277c-1.078-3.453-2.266-6.87-3.52-10.264
	l113.019-113.019c6.999,4.752,15.248,7.312,23.894,7.312c11.396,0,22.108-4.438,30.167-12.495
	c8.057-8.058,12.495-18.771,12.495-30.167S507.562,136.566,499.505,128.508z M328.895,397.793L114.206,183.106
	c57.916-4.625,115.622,16.339,156.985,57.703C312.557,282.174,333.52,339.867,328.895,397.793z M282.648,229.353
	c-17.847-17.847-38.781-32.431-61.525-43.033L328.887,78.556l104.559,104.558L325.682,290.878
	C315.079,268.134,300.494,247.2,282.648,229.353z'
            />
          </svg>
          <p>{restaurantInfo.address}</p>
        </SidebarContent>

        <SidebarContent>
          <svg height='20px' width='20px' version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
            <path
              style={{ fill: "#20A83E" }}
              d='M256,8.017C119.043,8.017,8.017,119.043,8.017,256c0,53.111,16.705,102.317,45.136,142.666
	L8.017,503.983l101.13-48.157c41.111,30.263,91.89,48.157,146.853,48.157c136.957,0,247.983-111.026,247.983-247.983
	S392.957,8.017,256,8.017z'
            />
            <circle style={{ fill: "#E5E5E5" }} cx='256' cy='256' r='205.228' />
            <circle style={{ fill: "#FFFFFF" }} cx='256' cy='256' r='179.574' />
            <path
              style={{ fill: "#20A83E" }}
              d='M376.579,302.728l-60.466-12.093l-28.686,28.686c-48.529-20.565-74.182-46.219-96.746-96.746
	l28.687-28.687l-12.093-60.466l-41.647-7.689c-9.111,2.07-17.77,6.64-24.865,13.735c-13.8,13.8-15.717,32.968-12.883,50.983
	c6.41,40.749,26.25,95.264,61.008,130.159l0,0c0.084,0.084,0.165,0.171,0.249,0.255c0.084,0.084,0.171,0.165,0.255,0.249l0,0
	c34.895,34.758,89.41,54.597,130.159,61.008c18.015,2.834,37.183,0.917,50.983-12.883c7.095-7.095,11.665-15.753,13.735-24.865
	L376.579,302.728z'
            />
            <path
              style={{ fill: "#20A83E" }}
              d='M336.651,366.042c-40.749-6.41-95.264-26.25-130.159-61.008l0,0
	c-0.084-0.084-0.171-0.165-0.255-0.249c-0.084-0.084-0.165-0.171-0.249-0.255l0,0c-34.758-34.895-54.597-89.41-61.008-130.159
	c-2.331-14.817-1.441-30.41,6.624-43.159c-3.876,2.213-7.534,4.949-10.843,8.257c-13.8,13.8-15.717,32.968-12.883,50.983
	c6.41,40.749,26.25,95.264,61.008,130.159l0,0c0.084,0.084,0.165,0.171,0.249,0.255c0.084,0.084,0.171,0.165,0.255,0.249l0,0
	c34.895,34.758,89.41,54.597,130.159,61.008c18.015,2.834,37.183,0.917,50.983-12.883c2.587-2.587,4.828-5.385,6.745-8.332
	C365.027,367.584,350.501,368.22,336.651,366.042z'
            />
            <path
              d='M437.019,74.981C388.667,26.629,324.38,0,256,0S123.333,26.629,74.981,74.981C26.629,123.333,0,187.62,0,256
	c0,51.582,15.212,101.126,44.038,143.582L0.648,500.825c-2.843,6.632,4.272,13.513,10.815,10.396l96.843-46.115
	C151.658,495.802,202.618,512,256,512c68.38,0,132.667-26.628,181.019-74.981C485.372,388.668,512,324.38,512,256
	S485.372,123.333,437.019,74.981z M256,495.967c-51.553,0-100.69-16.113-142.1-46.596c-2.356-1.735-5.558-2.039-8.199-0.781
	L23.756,487.61l36.766-85.784c1.096-2.558,0.788-5.501-0.816-7.775C31.135,353.5,16.033,305.764,16.033,256
	C16.033,123.682,123.682,16.033,256,16.033S495.967,123.682,495.967,256S388.318,495.967,256,495.967z'
            />
            <path
              d='M397.05,96.066c-3.318-2.931-8.385-2.613-11.315,0.705c-2.93,3.319-2.613,8.385,0.705,11.315
	c42.433,37.451,66.771,91.363,66.771,147.913c0,108.743-88.469,197.211-197.211,197.211c-108.743,0-197.211-88.468-197.211-197.211
	S147.257,58.789,256,58.789c34.673,0,68.768,9.122,98.6,26.379c3.833,2.218,8.737,0.907,10.954-2.926
	c2.217-3.833,0.908-8.736-2.924-10.954C330.359,52.623,293.487,42.756,256,42.756C138.416,42.756,42.756,138.416,42.756,256
	S138.416,469.244,256,469.244S469.244,373.584,469.244,256C469.244,194.852,442.93,136.559,397.05,96.066z'
            />
            <path
              d='M310.444,284.966l-24.826,24.827c-41.844-18.678-64.966-41.848-85.333-85.484l24.751-24.751
	c1.895-1.895,2.718-4.612,2.192-7.241l-12.092-60.466c-0.643-3.216-3.181-5.716-6.406-6.312l-41.647-7.689
	c-1.07-0.198-2.17-0.175-3.231,0.066c-10.898,2.477-20.843,7.97-28.756,15.884c-13.703,13.703-18.937,33.724-15.134,57.897
	c3.465,22.03,10.454,45.99,19.678,67.467c1.748,4.069,6.463,5.951,10.53,4.202c4.068-1.748,5.949-6.461,4.202-10.53
	c-8.713-20.284-15.308-42.883-18.572-63.631c-3.015-19.171,0.562-33.997,10.633-44.068c5.399-5.4,12.091-9.253,19.436-11.207
	l34.612,6.39l10.187,50.934l-25.652,25.652c-2.349,2.349-3.007,5.904-1.651,8.937c23.32,52.224,50.677,79.559,100.937,100.858
	c3.01,1.273,6.487,0.596,8.797-1.713l25.651-25.652l50.933,10.187l6.391,34.612c-1.953,7.343-5.807,14.035-11.206,19.436
	c-10.072,10.07-24.901,13.648-44.069,10.632c-38.321-6.029-91.477-24.633-125.737-58.757l-0.492-0.493
	c-9.305-9.341-17.968-20.672-25.75-33.68c-2.271-3.799-7.194-5.037-10.995-2.764c-3.8,2.272-5.037,7.196-2.764,10.995
	c8.451,14.128,17.921,26.497,28.178,36.797l0.496,0.494c36.988,36.842,93.768,56.828,134.57,63.246
	c16.27,2.56,33.749,1.36,48.085-7.402c3.563-2.177,6.86-4.779,9.812-7.731c7.915-7.916,13.408-17.86,15.883-28.758
	c0.242-1.061,0.264-2.161,0.066-3.231l-7.689-41.647c-0.595-3.225-3.095-5.762-6.311-6.406l-60.465-12.092
	C315.056,282.25,312.339,283.071,310.444,284.966z'
            />
          </svg>
          <p>{restaurantInfo.phone}</p>
        </SidebarContent>

        <SidebarContent>
          <svg height='20px' width='20px' version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
            <path
              style={{ fill: "#FDE494" }}
              d='M115.613,510.899h60.972l-96.206-61.66L1.298,403.03C4.752,463.092,54.701,510.899,115.613,510.899z'
            />
            <path
              style={{ fill: "#FEA150" }}
              d='M335.828,475.665l-68.858-17.617H115.613c-33.999,0-61.66-27.661-61.66-61.66v-33.803l-26.426-28.359
	l-26.426,4.673v57.489c0,2.231,0.072,4.444,0.197,6.643l175.287,107.869h208.318L335.828,475.665z'
            />
            <path
              style={{ fill: "#FF5D4A" }}
              d='M441.806,439.194c-11.22,11.612-26.935,18.854-44.318,18.854H266.97l117.933,52.852h12.585
	c41.113,0,77.229-21.783,97.43-54.41l-26.964-16.059L441.806,439.194z'
            />
            <path
              style={{ fill: "#E45261" }}
              d='M459.148,325.313v71.074c0,16.616-6.619,31.707-17.342,42.807l53.113,17.296
	C505.742,439.008,512,418.416,512,396.387v-62.67l-27.337-15.358L459.148,325.313z'
            />
            <polygon
              style={{ fill: "#FF4D95" }}
              points='512,148.869 483.858,142.168 459.148,156.962 459.148,325.313 512,333.717 '
            />
            <path
              style={{ fill: "#CB319C" }}
              d='M512,114.512c0-57.509-42.616-105.246-97.925-113.306l-69.284,28.831l-35.108,22.815h87.805
	c33.999,0,61.66,27.661,61.66,61.66v42.45L512,148.869V114.512z'
            />
            <path
              style={{ fill: "#8A3293" }}
              d='M318.15,0l-65.54,24.583l-51.693,28.269h108.768L414.075,1.206C408.658,0.416,403.121,0,397.488,0
	H318.15z'
            />
            <path
              style={{ fill: "#FF5D4A" }}
              d='M256.551,405.196c18.319,0,35.876-3.313,52.114-9.36l-85.835-38.963l-90.982-18.617
	C158.708,378.574,204.575,405.196,256.551,405.196z'
            />
            <path
              style={{ fill: "#E45261" }}
              d='M329.546,304.702c-15.849,23.414-42.656,38.834-72.996,38.834c-40.186,0-74.149-27.06-84.685-63.909
	l-23.631-14.769l-40.76,4.529c2.348,25.291,10.99,48.782,24.372,68.869l176.817,57.581c38.221-14.234,69.088-43.663,85.274-80.894
	l-31.685-16.05L329.546,304.702z'
            />
            <g>
              <path
                style={{ fill: "#FF4D95" }}
                d='M168.465,255.449c0-21.831,8-41.817,21.201-57.223l-37.577-5.257l-38.168,16.855
		c-4.615,14.391-7.116,29.72-7.116,45.624c0,4.702,0.243,9.345,0.669,13.936l64.391,10.24
		C169.667,271.938,168.465,263.834,168.465,255.449z'
              />
              <path
                style={{ fill: "#FF4D95" }}
                d='M406.297,255.449c0-32.069-10.138-61.813-27.369-86.204l-37.317-5.296l-38.335,16.881
		c24.819,15.598,41.361,43.205,41.361,74.62c0,18.231-5.568,35.185-15.09,49.252l64.392,10.24
		C401.872,296.695,406.297,276.583,406.297,255.449z'
              />
            </g>
            <g>
              <path
                style={{ fill: "#CB319C" }}
                d='M256.551,167.363c17.157,0,33.171,4.948,46.725,13.466l75.652-11.584
		c-27.137-38.41-71.875-63.542-122.377-63.542c-66.667,0-123.288,43.794-142.63,104.121l75.745-11.599
		C205.833,179.355,229.811,167.363,256.551,167.363z'
              />
              <path
                style={{ fill: "#CB319C" }}
                d='M397.488,149.746c19.428,0,35.234-15.806,35.234-35.234s-15.806-35.234-35.234-35.234
		s-35.234,15.806-35.234,35.234S378.06,149.746,397.488,149.746z'
              />
            </g>
            <polygon
              style={{ fill: "#FF5D4A" }}
              points='53.953,312.889 28.512,300.2 1.101,295.678 1.101,338.899 53.953,362.584 '
            />
            <polygon
              style={{ fill: "#E45261" }}
              points='1.101,252.47 1.101,295.678 53.953,312.889 53.953,260.874 26.492,251.002 '
            />
            <polygon
              style={{ fill: "#FF4D95" }}
              points='53.953,219.007 26.795,218.762 1.101,227.1 1.101,252.47 53.953,260.874 '
            />
            <polygon
              style={{ fill: "#CB319C" }}
              points='53.953,179.371 25.959,182.21 1.101,205.519 1.101,227.1 53.953,219.007 '
            />
            <polygon
              style={{ fill: "#8A3293" }}
              points='1.101,205.519 53.953,179.371 53.953,119.106 22.954,122.07 1.101,142.933 '
            />
            <path
              style={{ fill: "#523494 " }}
              d='M205.719,0L85.126,46.381L2.485,96.72c-0.908,5.8-1.384,11.742-1.384,17.792v28.421l52.852-23.826
	v-4.595c0-33.999,27.661-61.66,61.66-61.66h85.304L318.15,0H205.719z'
            />
            <path style={{ fill: "#2D2D87 " }} d='M115.613,0C58.522,0,11.058,41.997,2.485,96.72L205.719,0H115.613z' />
            <path
              d='M256.551,100.198c-85.606,0-155.252,69.645-155.252,155.252c0,27.293,7.183,54.138,20.775,77.632
	c2.284,3.947,7.336,5.295,11.284,3.014c3.947-2.284,5.297-7.335,3.014-11.284c-12.139-20.984-18.556-44.969-18.556-69.362
	c0-76.499,62.236-138.735,138.735-138.735s138.736,62.236,138.736,138.735S333.05,394.185,256.551,394.185
	c-38.491,0-74.271-15.397-100.748-43.355c-3.136-3.311-8.363-3.454-11.675-0.317c-3.311,3.136-3.454,8.363-0.317,11.675
	c29.629,31.284,69.667,48.513,112.74,48.513c85.606,0,155.252-69.645,155.252-155.252S342.157,100.198,256.551,100.198z'
            />
            <path
              d='M256.551,355.647c55.25,0,100.198-44.948,100.198-100.198S311.8,155.252,256.551,155.252S156.353,200.2,156.353,255.449
	S201.301,355.647,256.551,355.647z M256.551,171.768c46.143,0,83.682,37.539,83.682,83.682s-37.539,83.682-83.682,83.682
	s-83.682-37.539-83.682-83.682S210.408,171.768,256.551,171.768z'
            />
            <path
              d='M397.488,78.176c-20.035,0-36.335,16.3-36.335,36.335s16.3,36.335,36.335,36.335s36.335-16.3,36.335-36.335
	S417.523,78.176,397.488,78.176z M397.488,134.331c-10.928,0-19.819-8.891-19.819-19.819s8.891-19.819,19.819-19.819
	s19.819,8.891,19.819,19.819S408.416,134.331,397.488,134.331z'
            />
            <path
              d='M512,113.961C512,51.023,460.977,0,398.039,0H113.961C51.023,0,0,51.023,0,113.961v284.077
	C0,460.977,51.023,512,113.961,512h284.077C460.977,512,512,460.977,512,398.039V113.961z M495.484,398.039
	c0,53.817-43.628,97.445-97.445,97.445H113.961c-53.817,0-97.445-43.628-97.445-97.445V113.961
	c0-53.817,43.628-97.445,97.445-97.445h284.077c53.817,0,97.445,43.628,97.445,97.445V398.039z'
            />
            <path
              d='M473.462,117.265c0-43.479-35.248-78.727-78.727-78.727H117.265c-43.479,0-78.727,35.248-78.727,78.727v277.471
	c0,43.479,35.248,78.727,78.727,78.727h277.471c43.479,0,78.727-35.248,78.727-78.727V117.265z M456.946,394.736
	c0,34.358-27.853,62.211-62.211,62.211H117.265c-34.358,0-62.211-27.853-62.211-62.211V117.265
	c0-34.358,27.853-62.211,62.211-62.211h277.471c34.358,0,62.211,27.853,62.211,62.211V394.736z'
            />
          </svg>
          <p>{restaurantInfo.instagram}</p>
        </SidebarContent>
        <SidebarContent className='info-digital-clock'>
          <svg
            height='20px'
            width='20px'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 366.285 366.285'
          >
            <g>
              <g>
                <path
                  style={{ fill: "#00969B " }}
                  d='M70.717,286.199l-31.01,31.01c-8.797,8.797-8.797,23.193,0,31.99l0,0
			c8.797,8.797,23.193,8.797,31.99,0l33.232-33.232C92.038,307.853,80.499,297.794,70.717,286.199z'
                />
                <path
                  style={{ fill: "#1F2C47" }}
                  d='M55.702,365.797c-8.731,0-16.922-3.383-23.066-9.526
			c-12.719-12.719-12.719-33.414,0-46.133l38.706-38.706l7.019,8.319c9.163,10.861,19.894,20.199,31.896,27.753l10.604,6.674
			l-42.092,42.093C72.625,362.414,64.433,365.797,55.702,365.797z M70.356,300.703l-23.577,23.578
			c-4.921,4.92-4.921,12.927,0,17.848c2.366,2.366,5.535,3.669,8.923,3.669s6.558-1.303,8.924-3.669l24.728-24.728
			C82.585,312.355,76.237,306.775,70.356,300.703z'
                />
              </g>
              <g>
                <path
                  style={{ fill: "#00969B " }}
                  d='M326.578,317.209l-31.01-31.01c-9.781,11.594-21.321,21.654-34.212,29.768
			l33.232,33.232c8.797,8.797,23.193,8.797,31.99,0l0,0C335.375,340.402,335.375,326.006,326.578,317.209z'
                />
                <path
                  style={{ fill: "#1F2C47" }}
                  d='M310.583,365.797c-8.731,0-16.922-3.383-23.066-9.526l-42.092-42.092l10.604-6.674
			c12.002-7.555,22.733-16.893,31.896-27.753l7.019-8.319l38.706,38.706c12.719,12.719,12.719,33.414,0,46.133
			C327.505,362.414,319.314,365.797,310.583,365.797z M276.932,317.401l24.728,24.727c2.366,2.366,5.535,3.669,8.924,3.669
			s6.558-1.303,8.923-3.669c4.921-4.92,4.921-12.927,0-17.848l-23.577-23.578C290.048,306.775,283.7,312.355,276.932,317.401z'
                />
              </g>
              <g>
                <g>
                  <path
                    style={{ fill: "#00969B " }}
                    d='M133.143,52.971c-8.624-24.73-32.135-42.481-59.805-42.481
				C38.357,10.49,10,38.847,10,73.827c0,25.882,15.532,48.123,37.776,57.95C61.985,93.703,93.703,64.165,133.143,52.971z'
                  />
                  <path
                    style={{ fill: "#1F2C47" }}
                    d='M53.437,145.208l-9.702-4.286C17.167,129.187,0,102.85,0,73.827
				C0,33.389,32.899,0.49,73.337,0.49c31.159,0,58.988,19.767,69.248,49.188l3.493,10.017l-10.205,2.896
				c-36.141,10.257-65.571,37.428-78.728,72.682L53.437,145.208z M73.337,20.49C43.927,20.49,20,44.417,20,73.827
				c0,17.654,8.737,33.943,22.904,43.796c15.351-32.495,42.939-57.965,76.52-70.646C110,30.811,92.538,20.49,73.337,20.49z'
                  />
                </g>
                <g>
                  <path
                    style={{ fill: "#00969B " }}
                    d='M292.948,10.49c-27.671,0-51.182,17.751-59.805,42.481
				c39.439,11.194,71.158,40.732,85.366,78.805c22.244-9.827,37.776-32.068,37.776-57.95
				C356.285,38.847,327.928,10.49,292.948,10.49z'
                  />
                  <path
                    style={{ fill: "#1F2C47" }}
                    d='M312.848,145.208l-3.708-9.937c-13.157-35.253-42.587-62.424-78.728-72.682
				l-10.205-2.896l3.493-10.017c10.26-29.421,38.089-49.188,69.248-49.188c40.438,0,73.337,32.899,73.337,73.337
				c0,29.022-17.167,55.359-43.735,67.097L312.848,145.208z M246.861,46.978c33.581,12.68,61.169,38.15,76.52,70.646
				c14.167-9.854,22.904-26.143,22.904-43.796c0-29.41-23.927-53.337-53.337-53.337C273.747,20.49,256.285,30.811,246.861,46.978z'
                  />
                </g>
                <g>
                  <path
                    style={{ fill: "#1F2C47" }}
                    d='M183.143,348.485c-86.588,0-157.032-70.444-157.032-157.032
				S96.555,34.42,183.143,34.42s157.032,70.444,157.032,157.032S269.73,348.485,183.143,348.485z M183.143,54.42
				c-75.56,0-137.032,61.473-137.032,137.032s61.473,137.032,137.032,137.032s137.032-61.473,137.032-137.032
				S258.702,54.42,183.143,54.42z'
                  />
                </g>
                <g>
                  <path
                    style={{ fill: "#1F2C47" }}
                    d='M183.143,314.554c-67.878,0-123.102-55.223-123.102-123.102
				S115.264,68.351,183.143,68.351v20c-56.851,0-103.102,46.251-103.102,103.102s46.251,103.102,103.102,103.102
				s103.102-46.251,103.102-103.102h20C306.244,259.331,251.021,314.554,183.143,314.554z'
                  />
                </g>
                <g id='XMLID_225_'>
                  <polygon
                    id='XMLID_226_'
                    style={{ fill: "#1F2C47" }}
                    points='185.117,214.93 133.43,189.087 142.374,171.198 181.168,190.594
				232.622,139.141 246.765,153.283 			'
                  />
                </g>
              </g>
            </g>
          </svg>
          <span>Hora actual:</span>
          <p>{digitalClock}</p>
        </SidebarContent>
        <SidebarContent className='info-location hour '>
          <svg width='45px' height='45px' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg'>
            <path d='M454.4 273.4h126.5v480.7H454.4z' fill='#F7BE29' />
            <path
              d='M644.2 513.8c0 69.9-56.6 126.5-126.5 126.5s-126.5-56.6-126.5-126.5 56.6-126.5 126.5-126.5c69.9-0.1 126.5 56.6 126.5 126.5z'
              fill='#FAE274'
            />
            <path
              d='M517.7 511.1v-67c0-3.5-2.8-6.3-6.3-6.3s-6.3 2.8-6.3 6.3v69.6c0 0.8 0.2 1.6 0.5 2.4 0.3 0.8 0.8 1.5 1.4 2.1l54.8 54.8c1.2 1.2 2.9 1.9 4.5 1.9s3.2-0.6 4.5-1.9c2.5-2.5 2.5-6.5 0-8.9l-53.1-53z'
              fill='#211F1E'
            />
            <path
              d='M645.1 475.2c-9.5-32.8-30.7-60.7-58.8-78.7V273.4c0-7-5.7-12.7-12.7-12.7H447.1c-7 0-12.7 5.7-12.7 12.7v124.5c-37.5 25-62.2 67.6-62.2 115.9 0 48.3 24.7 90.9 62.2 115.9v124.5c0 7 5.7 12.7 12.7 12.7h126.5c7 0 12.7-5.7 12.7-12.7V631c28.1-18 49.4-45.9 58.8-78.7 10.3-2.3 18.1-11.5 18.1-22.5v-32.1c0-11-7.8-20.2-18.1-22.5zM459.7 286h101.2v12.7H459.7V286z m0 25.3h101.2V324H459.7v-12.7z m0 25.3h101.2v12.7H459.7v-12.7z m0 25.3h101.2v21.8c-15.4-5.9-32.1-9.1-49.5-9.1-18.3 0-35.7 3.6-51.7 10v-22.7z m101.2 379.6H459.7v-12.6h101.2v12.6z m0-25.3H459.7v-12.7h101.2v12.7z m0-25.3H459.7v-12.7h101.2v12.7z m0-25.3H459.7v-22.7c16 6.4 33.4 10 51.7 10 17.5 0 34.1-3.3 49.5-9.1v21.8z m45.4-145.5h18.6c-3.2 57.7-49.5 104-107.3 107.2v-18.6c0-3.5-2.8-6.3-6.3-6.3s-6.3 2.8-6.3 6.3v18.6c-57.7-3.2-104-49.5-107.2-107.2h18.6c3.5 0 6.3-2.8 6.3-6.3s-2.8-6.3-6.3-6.3h-18.6c3.2-57.7 49.5-104 107.2-107.2v18.6c0 3.5 2.8 6.3 6.3 6.3s6.3-2.8 6.3-6.3v-18.6c57.7 3.2 104.1 49.5 107.3 107.2h-18.6c-3.5 0-6.3 2.8-6.3 6.3 0 3.4 2.8 6.3 6.3 6.3z'
              fill='#211F1E'
            />
          </svg>
          <span>Horarios del local</span>
          <HourList>
            {restaurantInfo.hours.map((item, index) => (
              <div key={index} className={`${isToday(item.day) ? "highlight" : ""}`}>
                <span>{item.day}</span>
                <span>{item.hours}</span>
              </div>
            ))}
          </HourList>
        </SidebarContent>
      </SideBar>
    </>
  );
};
