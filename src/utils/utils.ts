export function handleChange(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>, setFunction: React.Dispatch<React.SetStateAction<any>>) {
    const { name, value } = e.target;
    setFunction((prevForm: FormData) => ({
      ...prevForm,
      [name]: value,
    }));
  }