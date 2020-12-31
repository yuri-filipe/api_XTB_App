import React, {useState, useEffect, Dispatch, SetStateAction} from 'react';

type Response<T> = [T, string, string, Dispatch<SetStateAction<T>>];
function useSignal(value: any): Response<any> {
  const [state, setstate] = useState('');
  const [type, setType] = useState('');
  const [color, setColor] = useState('#fff');
  useEffect(() => {
    if (typeof value === 'string') {
      setstate(value);
      setType('string');
    } else {
      setType('number');
      if (value > 0) {
        setstate('+ ' + value.toFixed(2));
        setColor('#0f0');
      } else if (value < 0) {
        let tmp = value.toFixed(2);
        setstate('- ' + tmp.substr(1, tmp.length));
        setColor('#f00');
      } else {
        setstate(value.toFixed(2));
        setColor('#fff');
      }
    }
  }, [value]);

  return [state, type, color, setstate];
}
export default useSignal;
