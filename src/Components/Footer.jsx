import React from 'react';
import Select from 'react-select';
import { useTheme } from '../Context/ThemeContext';
import { themeOptions } from '../Utils/theme';


const Footer = () => {

    const {theme, setTheme, defaultTheme} = useTheme();

    const handleThemeChange = (e)=>{
        console.log(e.value);
        setTheme(e.value);
        localStorage.setItem('theme', JSON.stringify(e.value));
    }


  return (
    <div className='footer'>

      <div className="intructions">
        <div className="hint">
          Press <kbd>TAB</kbd> to open commands
        </div>
      </div>

      <div className="actual-footer">
       

        <div className="themes">  
          <Select
                options={themeOptions}
                onChange={handleThemeChange}
                menuPlacement='top'
                defaultValue={{value:defaultTheme, label: defaultTheme.label}}
                styles={{
                  control:  styles => ({...styles, backgroundColor: theme.background}),
                  menu: styles => ({...styles, backgroundColor: theme.background}),
                  option: (styles, {isFocused}) => {
                      return {
                          ...styles,
                          backgroundColor: (isFocused)? theme.background : theme.textColor,
                          color: (isFocused)? theme.textColor : theme.typeBoxText,
                          cursor: 'pointer'
                      }
                  },
                  singleValue: styles => ({...styles, color: theme.title}),
              }}
            />
        </div>
      </div>
    </div>
  )
}

export default Footer