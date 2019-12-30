import React from 'react';
import { useForm } from '../hooks';

const Form = props => {
  // state object is first argument, props are the other - formName and button
  const { formState, setFormState, mapForm } = useForm(
    {
      name: '',
      password: ''
    },
    props
  );

  // createForm with state and fiter if necessary
  const createForm = mapForm(formState)();

  // submit function
  const onSubmit = e => {
    e.preventDefault();

    console.log('submitted');
  };

  // to disable the button
  const isInvalid = !formState.name || !formState.password;

  // use both to map the form
  const displayForm = createForm(onSubmit, isInvalid);

  // display the form
  return <div>{displayForm}</div>;
};

export default Form;
