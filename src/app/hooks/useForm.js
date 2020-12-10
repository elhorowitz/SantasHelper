import { useState } from 'react';

export default ({ initialInputs, onSubmit }) => {
  const [inputs, setInputs] = useState(initialInputs);

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }

    onSubmit();
  };

  const handleInputChange = (event) => {
    if (event) {
      const { name, value } = event.target || {};
      event.persist();
      setInputs((inputs) => ({ ...inputs, [name]: value }));
    }
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs,
  };
};
