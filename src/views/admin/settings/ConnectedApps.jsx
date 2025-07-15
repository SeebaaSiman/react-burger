import { useState } from "react";
import { ConnectedAppsData } from "../../../services/db/ConnectedAppsData";
import {
  ActionBtn,
  AppCard,
  AppDesc,
  AppInfo,
  AppName,
  AppsList,
  Icon,
  SectionContentSettings,
} from "../../../ui/styles/settings-style";

const ConnectedApps = () => {
  const [apps, setApps] = useState(ConnectedAppsData);

  const handleConnect = (id) => {
    setApps((prev) => prev.map((app) => (app.id === id ? { ...app, connected: !app.connected } : app)));
  };
  return (
    <SectionContentSettings>
      <h2>Apps Conectadas</h2>
      <p>Gestiona las aplicaciones y servicios conectados a tu cuenta.</p>
      <AppsList>
        {apps.map((app) => (
          <AppCard key={app.id} $connected={app.connected}>
            <Icon>{app.icon}</Icon>
            <AppInfo>
              <AppName>{app.name}</AppName>
              <AppDesc>{app.description}</AppDesc>
            </AppInfo>
            <ActionBtn $connected={app.connected} onClick={() => handleConnect(app.id)}>
              {app.connected ? "Desconectar" : "Conectar"}
            </ActionBtn>
          </AppCard>
        ))}
      </AppsList>
    </SectionContentSettings>
  );
};

export default ConnectedApps;
