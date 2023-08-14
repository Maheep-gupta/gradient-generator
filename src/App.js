import './App.css';
import { useState } from 'react';

function App() {
  const [gradient, setgradient] = useState("linear-gradient")
  const [colorPicker, setcolorPicker] = useState({
    color1: '#ffffff',
    color2: '#ffffff',
  })
  const [hexToRgbState, sethexToRgbState] = useState({
    rgb1: hexToRgb(colorPicker.color1),
    rgb2: hexToRgb(colorPicker.color2),
  })
  console.log(colorPicker)
  console.log(hexToRgbState)
  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }


  return (
    <>
      <div className="App">
        <p className='title'>Gradient Generator</p>
      </div>
      <div className='gen-main'>
        <div className='generator'>
          <div className='generatingValue'>
            <div className="field">
              <label htmlFor='gradient-type'>Gradient Type</label>
              <select className="input-field" name="gradient-type" id="gradient-type" value={gradient} onChange={e => setgradient(e.target.value)}>
                <option value="linear-gradient">Linear</option>
                <option value="radial-gradient">Radial</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor='color-in-hex'>Color (in hex)</label>
              <input placeholder="Hex Code" name='color-in-hex' className="input-field" value={colorPicker.color1} onChange={(e) => setcolorPicker({ ...colorPicker, color1: e.target.value })} type="text" />
            </div>
            <div className="field">
              <label htmlFor='color-in-hex'>Color (in hex)</label>
              <input placeholder="Hex Code" name='color-in-hex' className="input-field" value={colorPicker.color2} onChange={(e) => setcolorPicker({ ...colorPicker, color2: e.target.value })} type="text" />
            </div>

            <div className="field">
              <label htmlFor='color-picker'>Pick your 1 color</label>
              <input placeholder="color picker" name='color-picker' value={colorPicker.color1} onChange={(e) => {
                setcolorPicker({ ...colorPicker, color1: e.target.value })
                sethexToRgbState({ ...hexToRgbState, rgb1: hexToRgb(colorPicker.color1) })
              }} className="input-field" type="color" />

            </div>
            <div className="field">
              <div className='field-main-rgb' style={{ gap: '20px' }}>
                <div className='field rgb-text'>Red</div>
                <div className='field rgb-text'>Green</div>
                <div className='field rgb-text'>Blue</div>
              </div>
              <div className='field-main-rgb'>
                <div className='field-rgb RR'>{hexToRgbState.rgb1.r}</div>
                <div className='field-rgb GG'>{hexToRgbState.rgb1.g}</div>
                <div className='field-rgb BB'>{hexToRgbState.rgb1.b}</div>
              </div>

            </div>
            <div className="field">
              <label htmlFor='color-picker2'>Pick your 2 color</label>
              <input placeholder="color picker" name='color-picker2' value={colorPicker.color2} onChange={(e) => {
                setcolorPicker({ ...colorPicker, color2: e.target.value })
                sethexToRgbState({ ...hexToRgbState, rgb2: hexToRgb(colorPicker.color1) })
              }} className="input-field" type="color" />

            </div>

            <div className="field">
              <div className='field-main-rgb' style={{ gap: '20px' }}>
                <div className='field rgb-text'>Red</div>
                <div className='field rgb-text'>Green</div>
                <div className='field rgb-text'>Blue</div>
              </div>
              <div className='field-main-rgb'>
                <div className='field-rgb RR'>{hexToRgbState.rgb2.r}</div>
                <div className='field-rgb GG'>{hexToRgbState.rgb2.g}</div>
                <div className='field-rgb BB'>{hexToRgbState.rgb2.b}</div>
              </div>

            </div>
          </div>

          <div className='display-div'>
            <div className='display' style={{
              backgroundImage: `${gradient}(${colorPicker.color1},${colorPicker.color2})`
            }}></div>
            <div className='code'>
              <code>

                {
                  `background-image: ${gradient}(${colorPicker.color1},${colorPicker.color2})`
                }
              </code>

            </div>
          </div>

        </div>
      </div>

    </>
  );
}

export default App;
