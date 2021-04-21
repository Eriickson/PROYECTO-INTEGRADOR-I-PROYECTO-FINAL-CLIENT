import React, { useState } from "react";

// NextJS
import Link from "next/link";
// Packages
import InfiniteScroll from "react-infinite-scroll-component";
import { Card, Image } from "@/components";
import { IPost } from "@/shared";
import numeral from "numeral";

// Redux
import { useSelector } from "@/store/hooks";

const ResultList: React.FC = () => {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const { listStyle, foundVehicles } = useSelector(({ post }) => post);

  async function fetchData() {
    if (items.length <= 100) {
      setItems([...items, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    }
  }

  return (
    <div className="col-span-12">
      <InfiniteScroll
        dataLength={items.length} //This is important field to render the next data
        next={fetchData}
        loader={<h4></h4>}
        hasMore={true}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        // below props only if you need pull down functionality
        // refreshFunction={() =}
      >
        <ul className="grid w-full grid-cols-12 gap-2 pb-1">
          {foundVehicles?.posts?.length ? (
            foundVehicles.posts?.map((post, i) =>
              listStyle === "GRID" ? <GridItem key={i} post={post} /> : <ListItem key={i} post={post} />,
            )
          ) : (
            <Card className="col-span-12" notBorderTop>
              <p className="font-semibold text-center text-gray-500">No se han encontrado resultados</p>
            </Card>
          )}
        </ul>
      </InfiniteScroll>
    </div>
  );
};

export default ResultList;

interface GridItemProps {
  post: IPost;
}

const GridItem: React.FC<GridItemProps> = ({ post }) => (
  <div className="col-span-6 xl:col-span-3">
    <Card notBorderTop>
      <div>
        <Link href={`/post/${post.uuid}/${post.slug}`}>
          <a>
            <Image src={post.cover} resolution="x200" />
          </a>
        </Link>
        <div className="mt-1">
          <strong className="text-sm md:text-base text-main-text">
            {post.brand.label} {post.model.label} {post.typeModel.label != "NO_TYPE_MODEL" && post.typeModel.label} -{" "}
            {post.year}
          </strong>
          <br />
          <strong className="w-full text-sm text-green-600">
            {post.pricing.currency === "DOP" ? "RD$" : "US$"} {numeral(post.pricing.amount).format("0,0")}
          </strong>
          <ul className="text-sm text-gray-500">
            <li>{post.condition.label}</li>
            <li className="truncate">{post.transmission.label}</li>
          </ul>
        </div>
      </div>
    </Card>
  </div>
);

interface ListItemProps {
  post: IPost;
}

const ListItem: React.FC<ListItemProps> = ({ post }) => (
  <div className="col-span-12 sm:col-span-6">
    <Card notBorderTop>
      <div className="xl:flex">
        <div className="relative w-full xl:w-5/12">
          <Link href={`/post/${post.uuid}/${post.slug}`}>
            <a>
              <Image src={post.cover} resolution="x200" />
            </a>
          </Link>
        </div>
        <div className="flex-1 py-1 lg:mx-3 lg:py-0">
          <div>
            <Link href={`/post/${post.uuid}/${post.slug}`}>
              <a>
                <h2>
                  <strong className="text-lg text-main-text">
                    {post.brand.label} {post.model.label}{" "}
                    {post.typeModel.label != "NO_TYPE_MODEL" && post.typeModel.label} - {post.year}
                  </strong>
                </h2>
              </a>
            </Link>
            {/* <div className="flex space-x-2.5 text-sm text-sec-text mb-2">
              <span className="flex items-center">
                <IconClock className="w-4 h-4 mr-0.5" />{" "}
                {moment(post.createdAt).locale("es-do").startOf("hours").fromNow()}.
              </span>
            </div> */}
            <strong className="text-lg text-success-600">
              {post.pricing.currency === "DOP" ? "RD$" : "US$"} {numeral(post.pricing.amount).format("0,0")}
            </strong>
            <ul className="text-sm text-gray-500">
              <li>{post.condition.label}</li>
              <li>{post.transmission.label}</li>
            </ul>
          </div>
        </div>
      </div>
    </Card>
  </div>
);

/*  */
