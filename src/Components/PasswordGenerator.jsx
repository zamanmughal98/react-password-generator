import '../styles/passwordGenerator.css';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast, Flip } from 'react-toastify';
import { useCallback, useEffect, useState, useRef } from 'react';

import { numbers, alphabets, characters } from './data/';
import Slider from './Slider';
import Checkbox from './Checkbox';

const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState(15);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const sliderValues = { min: 10, max: 40 };
  const passwordReference = useRef(null);
  const checkBoxesArrayToMap = [
    {
      id: 1,
      value: numberAllowed,
      onCheckClick: setNumberAllowed,
      labelText: 'Number',
      direction: 'left',
    },
    {
      id: 2,
      value: characterAllowed,
      onCheckClick: setCharacterAllowed,
      labelText: 'Character',
      direction: 'right',
    },
  ];

  const copyButtonHandler = useCallback(() => {
    passwordReference?.current?.select();

    navigator.clipboard.writeText(password);

    toast.success('Passoword Copied', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      transition: Flip,
    });
  }, [password]);

  const generateThePassword = useCallback(() => {
    let characterSet = [
      ...alphabets,
      ...alphabets.map((letter) => letter.toLowerCase()),
    ];

    if (numberAllowed) characterSet = [...characterSet, ...numbers];
    if (characterAllowed) characterSet = [...characterSet, ...characters];

    let generatedPassword = '';

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characterSet.length);
      generatedPassword += characterSet[randomIndex];
    }

    setPassword(generatedPassword);
  }, [numberAllowed, characterAllowed, passwordLength, setPassword]);

  useEffect(() => {
    document.title = 'Password  Generator';
  }, []);

  useEffect(() => {
    generateThePassword();
  }, [numberAllowed, characterAllowed, passwordLength, generateThePassword]);

  return (
    <section className="passwordSection">
      <h1 className="headerTitle">Password Generator</h1>

      <div className="subSectionContainer">
        <input
          className="passwordField"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          ref={passwordReference}
        />
        <button className="copyMe" onClick={copyButtonHandler}>
          <b>Copy</b>
        </button>
        <ToastContainer />
      </div>

      <div className="subSectionContainer alignItemsCenter gap12px">
        <Slider
          value={passwordLength}
          onSliderChange={setPasswordLength}
          minValue={sliderValues.min}
          maxValue={sliderValues.max}
        />
      </div>

      <div className="subSectionContainer justifyContentSpaceBetween">
        {checkBoxesArrayToMap.map((box) => (
          <Checkbox
            key={box.labelText}
            value={box.value}
            onCheckClick={box.onCheckClick}
            labelText={box.labelText}
            direction={box.direction}
          />
        ))}
      </div>

      <button onClick={generateThePassword} className="generateButton">
        Re-generate Password
      </button>
    </section>
  );
};

export default PasswordGenerator;
