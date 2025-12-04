import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import { BrochureIcon, DownIcon, HomeIcon, HostIcon, MenuIcon, PhoneIcon, UpIcon } from "../../icons/Icons";
import { useLocation, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const [open, setOpen] = React.useState(false);
  const [hostOpen, setHostOpen] = React.useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const isActive = (path) => location.pathname === path;

  const DrawerList = (
    <Box sx={{ width: 250, p: 2 }} role="presentation">
      <List>
        <div className="flex flex-col">
          <div
            onClick={() => navigate("/")}
            className={`flex gap-4 items-center p-4 rounded-2xl cursor-pointer
              ${isActive("/") ? "bg-amber-900 text-white" : "text-black"}
            `}
          >
            <HomeIcon color={isActive("/") ? "#fff" : "#000"} width={24} height={24} />
            <p className="text-lg font-semibold">Home</p>
          </div>
          <div
            onClick={() => navigate("/showcase")}
            className={`flex gap-4 items-center p-4 rounded-2xl cursor-pointer
              ${isActive("/showcase") ? "bg-amber-900 text-white" : "text-black"}
            `}
          >
            <HomeIcon color={isActive("/showcase") ? "#fff" : "#000"} width={24} height={24} />
            <p className="text-lg font-semibold">R&D Showcase</p>
          </div>
          <div
            className={`flex justify-between items-center p-4 rounded-2xl cursor-pointer
            ${location.pathname.includes("/hosts") ? "bg-amber-900 text-white" : "text-black"}
           `}
            onClick={() => setHostOpen(!hostOpen)}
          >
            <div className="flex gap-4 items-center">
              <HostIcon
                color={location.pathname.includes("/hosts") ? "#fff" : "#000"}
                width={24}
                height={24}
              />
              <p className="text-lg font-semibold">Hosts</p>
            </div>

            {hostOpen ? (
              <UpIcon color={"#000000"} width={20} height={20} />
            ) : (
              <DownIcon color={"#000000"} width={20} height={20} />
            )}
          </div>
          {hostOpen && (
            <div className="ml-8 flex flex-col gap-2 mt-2">
              <p
                onClick={() => navigate("/hosts/kharagpur/1")}
                className={`cursor-pointer ${isActive("/hosts/kharagpur/1") ? "text-amber-700 font-bold" : "text-black"
                  }`}
              >
                IIT Kharagpur
              </p>

              <p
                onClick={() => navigate("/hosts/varanasi/2")}
                className={`cursor-pointer ${isActive("/hosts/varanasi/2") ? "text-amber-700 font-bold" : "text-black"
                  }`}
              >
                IIT(BHU) Varanasi
              </p>

              <p
                onClick={() => navigate("/hosts/dhanbad/3")}
                className={`cursor-pointer ${isActive("/hosts/dhanbad/3") ? "text-amber-700 font-bold" : "text-black"
                  }`}
              >
                IIT(ISM) Dhanbad
              </p>

              <p
                onClick={() => navigate("/hosts/patna/4")}
                className={`cursor-pointer ${isActive("/hosts/patna/4") ? "text-amber-700 font-bold" : "text-black"
                  }`}
              >
                IIT Patna
              </p>

              <p
                onClick={() => navigate("/hosts/bhubaneswar/5")}
                className={`cursor-pointer ${isActive("/hosts/bhubaneswar/5") ? "text-amber-700 font-bold" : "text-black"
                  }`}
              >
                IIT Bhubaneswar
              </p>
            </div>
          )}

          <div
            onClick={() => navigate("/contact")}
            className={`flex gap-4 items-center p-4 rounded-2xl cursor-pointer
              ${isActive("/contact") ? "bg-amber-900 text-white" : "text-black"}
            `}
          >
            <PhoneIcon color={isActive("/contact") ? "#fff" : "#000"} width={24} height={24} />
            <p className="text-lg font-semibold">Contact</p>
          </div>

          <div
            onClick={() => navigate("/brochure")}
            className={`flex gap-4 items-center p-4 rounded-2xl cursor-pointer
              ${isActive("/brochure") ? "bg-amber-900 text-white" : "text-black"}
            `}
          >
            <BrochureIcon color={isActive("/brochure") ? "#fff" : "#000"} width={24} height={24} />
            <p className="text-lg font-semibold">Brochure</p>
          </div>
        </div>
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon color="#a00026" width="20" height="20" />
      </Button>

      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: { backgroundColor: "#f0ddab", color: "#000", width: 250 },
        }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}


