import { useState } from "react";
import { NotifItem, NotifList, SectionContentSettings } from "../../../ui/styles/settings-style";
const initialSettings = {
  email: true,
  sms: false,
  push: true,
  newsletter: false,
  productUpdates: true,
};
const Notifications = () => {
  const [settings, setSettings] = useState(initialSettings);

  const handleToggle = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  return (
    <SectionContentSettings>
      <h2>Notificaciones</h2>
      <p>Configura cómo y cuándo recibir notificaciones sobre tu cuenta y actividad.</p>
      <NotifList>
        <NotifItem>
          <label>
            <input type='checkbox' checked={settings.email} onChange={() => handleToggle("email")} />
            <span></span>
          </label>
          <p>Notificaciones por correo electrónico</p>
        </NotifItem>
        <NotifItem>
          <label>
            <input type='checkbox' checked={settings.sms} onChange={() => handleToggle("sms")} />
            <span></span>
          </label>
          <p>Notificaciones por SMS</p>
        </NotifItem>
        <NotifItem>
          <label>
            <input type='checkbox' checked={settings.push} onChange={() => handleToggle("push")} />
            <span></span>
          </label>
          <p>Notificaciones push en la app</p>
        </NotifItem>
        <NotifItem>
          <label>
            <input type='checkbox' checked={settings.newsletter} onChange={() => handleToggle("newsletter")} />
            <span></span>
          </label>
          <p>Recibir newsletter mensual</p>
        </NotifItem>
        <NotifItem>
          <label>
            <input type='checkbox' checked={settings.productUpdates} onChange={() => handleToggle("productUpdates")} />
            <span></span>
          </label>
          <p>Avisos de actualizaciones de productos</p>
        </NotifItem>
      </NotifList>
    </SectionContentSettings>
  );
};

export default Notifications;
