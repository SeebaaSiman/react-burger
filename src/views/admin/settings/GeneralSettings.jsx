import { useState } from "react";
import { BtnRow, FormLR, SectionContentSettings } from "../../../ui/styles/settings-style";

const GeneralSettings = () => {
  const [name, setName] = useState("Admin User");
  const [email, setEmail] = useState("admin@email.com");
  const [edit, setEdit] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setEdit(false);
  };
  const handleEdit = (e) => {
    e.preventDefault();
    setEdit(true);
  };
  return (
    <SectionContentSettings>
      <h2>Configuración General</h2>
      <p>Aquí puedes modificar la información general de tu cuenta y preferencias básicas.</p>
      <FormLR>
        <label>
          Nombre:
          <input type='text' value={name} disabled={!edit} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type='email' value={email} disabled={!edit} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <BtnRow>
          {edit ? (
            <>
              <button type='submit' onClick={handleSave}>
                Guardar
              </button>
              <button type='button' onClick={handleSave} className="btn-settings-general-cancel">
                Cancelar
              </button>
            </>
          ) : (
            <button type='button' onClick={handleEdit}>
              Editar
            </button>
          )}
        </BtnRow>
      </FormLR>
    </SectionContentSettings>
  );
};

export default GeneralSettings;
