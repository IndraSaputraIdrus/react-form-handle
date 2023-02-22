import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import ModalBox from "./components/ModalBox";
import listInput from "./libs/listInput";

export default function App() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [submit, setSubmit] = useState(false);

  const inputs = listInput(data.password);

  const handleChange = (e: any) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmit(true);
  };

  return (
    <main className="app">
      {submit && (
        <ModalBox
          submit={submit}
          setSubmit={setSubmit}
          name={data.name}
          email={data.email}
        />
      )}
      <form onSubmit={handleSubmit} className="container">
        <h1 className="heading">React Form</h1>
        {inputs.map((input) => (
          <Input
            onChange={handleChange}
            key={input.id}
            placeholder={input.label}
            {...input}
          />
        ))}
        <Button type="submit">Submit</Button>
      </form>
    </main>
  );
}
