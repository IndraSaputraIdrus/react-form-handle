import "./ModalBox.css";

type ModalProps = {
  submit: boolean;
  setSubmit: any;
  name: string;
  email: string;
};

export default function ModalBox(props: ModalProps) {
  return (
    <>
      <div className={`overlay ${!props.submit && "hidden"}`} />
      <div className={`modal-box ${!props.submit && "hidden"}`}>
        <h1>Success</h1>
        <ul>
          <li>Name: {props.name}</li>
          <li>Email: {props.email}</li>
        </ul>
        <button onClick={() => props.setSubmit(false)} className="button-close">
          Close
        </button>
      </div>
    </>
  );
}
