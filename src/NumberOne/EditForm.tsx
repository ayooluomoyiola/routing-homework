import { useState } from "react";

// Contact type definition
type Contact = {
  name: string;
  city: string;
};

type EditFormProps = {
  initialData: Contact;
  onSave: (updated: Contact) => void;
  onDelete: () => void;
};

const EditForm = ({ initialData, onSave, onDelete }: EditFormProps) => {
  const [localData, setLocalData] = useState<Contact>(initialData);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalData({ ...localData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSave(localData);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="edit-form">
        <input
          type="text"
          name="name"
          value={localData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="city"
          value={localData.city}
          onChange={handleChange}
          required
        />
        <button type="submit" className="contact-button">
          Save
        </button>
        <button type="button" onClick={onDelete} className="contact-button">
          Delete
        </button>
      </form>
    </>
  );
};

export default EditForm;
