import React from "react";

// Hooks
import { useSelector } from "src/store/hooks";

// My components
import { Card, Image } from "@/components";

const PanelTop: React.FC = () => {
  const { userData } = useSelector(store => store.users.userProfile);

  return (
    <Card>
      <div className="grid grid-cols-12 gap-3 mx-auto">
        <div className="col-span-12">
          <div className="flex flex-col justify-between md:flex-row md:items-center">
            <div className="flex mb-2 md:mb-0">
              <div className="w-24 h-24 mr-3 overflow-hidden bg-blue-300">
                <div className="border-2 border-pri-400">
                  <Image src={userData?.profilePicture || "/alternative-path.png"} />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-main-text">
                  {userData?.name} {userData?.lastname}
                </h3>
                <p className="mb-2 font-medium text-sec-text">@{userData?.username}</p>
                {/* <button className="btn pri">Cambiar Perfil</button> */}
              </div>
            </div>
            {/* <div className="flex">
              <button className="w-full btn warning icon left md:w-auto">
                <IconKey />
                Cambiar Contraseña
              </button>
            </div> */}
          </div>
        </div>
        {/* <FormEditProfile /> */}
      </div>
    </Card>
  );
};

export default PanelTop;
