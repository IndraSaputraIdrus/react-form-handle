function listInput(password: string) {
  return [
    {
      id: "name",
      label: "Name",
      type: "text",
      errorMessage:
        "Username should ne 1-16 characters and shouldn't include any special characters!",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$",
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      errorMessage: "It should be a valid email address",
      required: true,
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter uppercase, 1 number",
      required: true,
      pattern: "^(?=.*?[A-Z])[A-Za-z0-9]{8,20}$",
    },
    {
      id: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      errorMessage: "Password don't match!",
      required: true,
      pattern: password,
    },
  ];
}

export default listInput;
