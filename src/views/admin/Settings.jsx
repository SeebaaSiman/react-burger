import { useState } from "react";
import {
  AnimatedSectionSettings,
  ContentAreaSettings,
  NavItemSettings,
  NavSettings,
  SettingsContainer,
} from "../../ui/styles/settings-style";
import ConnectedApps from "./settings/ConnectedApps";
import Notifications from "./settings/Notifications";
import LanguageRegion from "./settings/LanguageRegion";
import SecurityLogin from "./settings/SecurityLogin";
import GeneralSettings from "./settings/GeneralSettings";

const navOptions = [
  { label: "General Settings", component: <GeneralSettings /> },
  { label: "Security y Login", component: <SecurityLogin /> },
  { label: "Language y Region", component: <LanguageRegion /> },
  { label: "Notificaciones", component: <Notifications /> },
  { label: "Conected Apps", component: <ConnectedApps /> },
];

const Settings = () => {
  const [selected, setSelected] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("out");

  const handleNavClick = (idx) => {
    if (idx === selected) return;
    setDirection("out");
    setAnimating(true);
    setTimeout(() => {
      setSelected(idx);
      setDirection("in");
      setTimeout(() => setAnimating(false), 350);
    }, 350);
  };

  return (
    <SettingsContainer>
      <NavSettings>
        {navOptions.map((opt, idx) => (
          <NavItemSettings key={opt.label} active={selected === idx} onClick={() => handleNavClick(idx)}>
            {opt.label}
          </NavItemSettings>
        ))}
      </NavSettings>
      <ContentAreaSettings>
        <AnimatedSectionSettings $animating={animating} $direction={direction} key={selected}>
          {navOptions[selected].component}
        </AnimatedSectionSettings>
      </ContentAreaSettings>
    </SettingsContainer>
  );
};
export default Settings;
