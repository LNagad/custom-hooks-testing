import { useState } from 'react';

export const useForm = ( initialForm = {} ) => {
    
  const [formState, setFormState] = useState(initialForm);

  const onChangeInput = ({ target }) => {
        
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  const onResetBtn = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onChangeInput,
    onResetBtn
  };
};
