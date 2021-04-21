import React from "react";

// NextJS
import Link from "next/link";

// Redux
import { useSelector } from "@/store/hooks";

// Styles and Icons
import { IconClock, IconStar, IconUser } from "@tabler/icons";

// My Components
import { Card, Image } from "@/components";

const AgencyPanel: React.FC = () => {
  const { post } = useSelector(({ post }) => post);

  return (
    <Card>
      <div className="flex">
        <div className="w-32 mr-3">
          <Link href={`/agency/${post?.agency.uuid}/${post?.agency.slug}`}>
            <a>
              <div className="css-cfoxh2 e1yv88nl0">
                <div className="overflow-hidden">
                  <Image className="w-full border" src={post?.agency.logo || ""} resolution="x250" />
                </div>
              </div>
            </a>
          </Link>
        </div>
        <div className="flex flex-col justify-between flex-1">
          <>
            <div>
              <div className="flex items-center">
                <Link href={`/agency/${post?.agency.uuid}/${post?.agency.slug}`}>
                  <a>
                    <h2 className="mr-2 text-lg font-medium">{post?.agency.name}</h2>
                  </a>
                </Link>
              </div>
              <p className="-mt-1 text-xs text-sec-text">{post?.agency.slogan}</p>
            </div>
            <div className="mt-2">
              <div className="flex items-center mb-1">
                <IconClock className="w-5 h-5 mr-1 text-gray-400" />
                <span className="text-sm">
                  Se unió el <b>9 de ene. de 2021</b>
                </span>
              </div>
              <div className="flex items-center text-sm">
                <IconUser className="w-5 h-5 mr-1 text-gray-400" />
                <span className="mr-1">
                  Vendedor <b>Particular</b>
                </span>
              </div>
            </div>
          </>
        </div>
      </div>
    </Card>
  );
};

export default AgencyPanel;
