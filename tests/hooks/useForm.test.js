import { renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';
import { act } from '@testing-library/react';

describe('Pruebas en useForm', () => {

  const initialForm = {
    name: 'Maycol',
    email: 'maycoldpc@gmail.com'
  };

  test('debe de regresar los valores por defecto', () => {
		
    const { result } = renderHook( () => useForm(initialForm) );
    
    expect( result.current ).toEqual( {
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm, //misma posicion en memoria
      onChangeInput: expect.any(Function),
      onResetBtn: expect.any(Function),
    });

  });


  test('Debe de cambiar el nombre del input', () => { 
    
    const newValue = 'LNagad';

    const { result}  = renderHook( () => useForm(initialForm) );
    const { onChangeInput } = result.current;

    act( () => {
      onChangeInput({target: {name: 'name', value: newValue}});
    });

    expect(result.current.name).toBe(newValue);
    expect(result.current.formState.name).toBe(newValue);
  });

  test('Debe de reiniciar el formulario', () => { 
    
    const newValue = 'LNagad';

    const { result}  = renderHook( () => useForm(initialForm) );
    const { onResetBtn, onChangeInput } = result.current;

    act( () => {
      onChangeInput({target: {name: 'name', value: newValue}});
      onResetBtn();
    });

    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.formState.name).toBe(initialForm.name);

  });
});
