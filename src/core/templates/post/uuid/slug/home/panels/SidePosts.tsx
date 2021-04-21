import { PanelComponent } from "@/components";
import Link from "next/link";
import React from "react";

const SidePosts: React.FC = () => {
  return (
    <PanelComponent title="Más publicaciones" notBorderTop>
      <div className="grid grid-cols-12 gap-2">
        {[1, 2, 3, 4, 5, 6].map(item => (
          <div key={item} className="col-span-6">
            <Link href="/post/123-456/example" key={item}>
              <a>
                <div>
                  <img
                    className="mb-1"
                    src="https://www.megautos.com/wp-content/uploads/2019/08/honda-civic-exl-2020-9.jpg"
                    alt=""
                  />
                  <p className="text-sm font-semibold">Honda Civic 2016</p>
                  <strong className="text-green-600">RD$ 250,000</strong>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </PanelComponent>
  );
};

export default SidePosts;
