const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | null, setter: InputSetter) => {
  setter(e?.target.value || '');
};

export default handleInputChange;
