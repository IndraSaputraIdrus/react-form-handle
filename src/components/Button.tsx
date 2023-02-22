import "./Button.css";

type ButtonProps = {
  children: string;
  type: any;
};

export default function Button(props: ButtonProps) {
  return (
    <button type={props.type} className="form__button">
      {props.children}
    </button>
  );
}
