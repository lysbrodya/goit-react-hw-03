import { FaUser, FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
export default function Contact({ contact: { name, number, id }, onDelete }) {
  return (
    <>
      <div className={css.userContact}>
        {" "}
        <p>
          <FaUser className={css.Icon} />
          {name}
        </p>
        <p>
          <FaPhone className={css.Icon} />
          {number}
        </p>
      </div>
      <button onClick={() => onDelete(id)} className={css.buttonDel}>
        Delete
      </button>
    </>
  );
}
