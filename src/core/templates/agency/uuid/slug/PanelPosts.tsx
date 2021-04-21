import React from "react";

// NextJS
import Link from "next/link";

// Packages
import numeral from "numeral";

// Redux
import { useSelector } from "@/store/hooks";

// My Components
import { Card, Image } from "@/components";

const PanelPosts: React.FC = () => {
  const { agencyProfile } = useSelector(({ agency }) => agency);

  return (
    <div className="space-y-2">
      <Card notBorderTop>
        <div className="grid grid-cols-12 gap-3">
          {agencyProfile?.posts && agencyProfile.posts.length > 0
            ? agencyProfile.posts.map((post, index) => (
                <div key={index} className="col-span-6 sm:col-span-4 md:col-span-6 lg:col-span-4 xl:col-span-3">
                  <div className="mb-0.5">
                    <Link href={`/post/${post.uuid}/${post.slug}`}>
                      <a>
                        <Image src={post.cover} resolution="x200" />
                      </a>
                    </Link>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">
                      {post.brand.label} {post.model.label} - {post.year}
                    </h4>
                    <h3 className="text-sm font-semibold text-success-500">
                      {post.pricing.currency === "DOP" ? "RD$" : "US$"} {numeral(post.pricing.amount).format("0,0")}
                    </h3>
                  </div>
                </div>
              ))
            : "No hay publicaciones recientes"}
        </div>
      </Card>
    </div>
  );
};

export default PanelPosts;
