import { useState } from "react";
import "./contactbook.css";
import EditForm from "./EditForm";

type Contact = {
  name: string;
  city: string;
};

const ContactBookApp = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [formData, setFormData] = useState<Contact>({ name: "", city: "" });
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setContacts([...contacts, formData]);
    setFormData({ name: "", city: "" });
  };

  const updateContact = (index: number, updated: Contact) => {
    const updatedContacts = [...contacts];
    updatedContacts[index] = updated;
    setContacts(updatedContacts);
    setEditIndex(null);
  };

  const deleteContact = (index: number) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
    setEditIndex(null);
  };
  
  return (
    <div className="main">
      <h1>Contact Book</h1>

      {editIndex === null && (
        <div className="form">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
              required
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
            <label>City:</label>
            <input
              required
              name="city"
              type="text"
              value={formData.city}
              onChange={handleChange}
            />
            <button type="submit" className="button">
              Add Contact
            </button>
          </form>
        </div>
      )}

      <div className="contact-profile">
        {contacts.map((item, index) => (
          <div key={index} className="contact-card">
            {editIndex === index ? (
              <EditForm
                initialData={item}
                onSave={(updated) => updateContact(index, updated)}
                onDelete={() => deleteContact(index)}
              />
            ) : (
              <>
                <p className="contact-name">{item.name}</p>
                <p className="contact-city">{item.city}</p>
                <button className="button" onClick={() => setEditIndex(index)}>
                  Edit
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactBookApp;
