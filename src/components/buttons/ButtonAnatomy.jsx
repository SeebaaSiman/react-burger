import { ButtonAnatomyStyle } from "../../ui/styles/Buttons-style";

export const ButtonAnatomy = ({ text, icon }) => {
  return (
    <ButtonAnatomyStyle>
      <div className='icon'>
        <span className='text-icon hide'>Icon</span>
        <img src={icon} alt='' height='30' width='30' />
      </div>
      <span className='title'> {text} </span>
      <div className='padding-left hide'>
        <div className='padding-left-line'>
          <span className='padding-left-text'>Left Padding</span>
        </div>
      </div>
      <div className='padding-right hide'>
        <div className='padding-right-line'>
          <span className='padding-right-text'>Right Padding</span>
        </div>
      </div>
      <div className='background hide'>
        <span className='background-text'>Background</span>
      </div>
      <div className='border hide'>
        <span className='border-text'>Border Radius</span>
      </div>
    </ButtonAnatomyStyle>
  );
};
