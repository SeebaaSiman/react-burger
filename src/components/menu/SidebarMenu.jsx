import { restaurantInfo } from "../../services/db/local-info";
import { HourList, SideBar, SidebarButton, SidebarHeader } from "../../ui/styles/menu-style";
import { isToday } from "../../utils/isToday";

export const SidebarMenu = () => {
  return (
    <SideBar>
      <h1>{restaurantInfo.name}</h1>

      <div>
        <SidebarHeader>
          <div>
            <span>📍</span>
          </div>
          <span>Dirección</span>
        </SidebarHeader>
        <p>{restaurantInfo.address}</p>
      </div>

      <div>
        <SidebarHeader>
          <div>
            <span>ℹ️</span>
          </div>
          <span>Contacto</span>
        </SidebarHeader>
        <SidebarButton>
          <button>📱</button>
          <button>📷</button>
        </SidebarButton>
      </div>

      <div>
        <SidebarHeader>
          <div>
            <span>🕒</span>
          </div>
          <span>Horarios</span>
          {/* Hora actual */}
        </SidebarHeader>
        <HourList>
          {restaurantInfo.hours.map((item, index) => (
            <div key={index} className={` ${isToday(item.day) ? "highlight" : ""}`}>
              <span>{item.day}</span>
              <span>{item.hours}</span>
            </div>
          ))}
        </HourList>
      </div>
    </SideBar>
  );
};
