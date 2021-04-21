import React from "react";

// NextJS
import Link from "next/link";

// Packages
import numeral from "numeral";

// Redux
import { useSelector } from "@/store/hooks";

// My Components
import { PanelComponent, Image } from "@/components";

const RecentPosts: React.FC = () => {
  const { recentPosts } = useSelector(({ post }) => post);

  return (
    <PanelComponent title="Vehículos Recientes" notBorderTop>
      <div className="grid grid-cols-12 gap-3">
        {recentPosts?.length > 0 ? (
          recentPosts.map((post, i) => (
            <div key={i} className="col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2">
              <div className="mb-0.5">
                <Link href={`/post/${post.uuid}/${post.slug}`}>
                  <a>
                    <Image resolution="x200" src={post.cover} />
                  </a>
                </Link>
              </div>
              <div>
                <Link href={`/post/${post.uuid}/${post.slug}`}>
                  <a>
                    <h4 className="text-sm font-semibold">
                      {post.brand.label} {post.model.label}{" "}
                      {post.typeModel.label != "NO_TYPE_MODEL" && post.typeModel.label} - {post.year}
                    </h4>
                  </a>
                </Link>
                <strong className="text-sm font-semibold text-success-500">
                  {post.pricing.currency === "DOP" ? "RD$" : "US$"} {numeral(post.pricing.amount).format("0,0")}
                </strong>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-12 my-2 text-lg font-semibold text-center text-gray-400">
            No hay publicaciones recientes
          </p>
        )}
      </div>
    </PanelComponent>
  );
};

export default RecentPosts;
