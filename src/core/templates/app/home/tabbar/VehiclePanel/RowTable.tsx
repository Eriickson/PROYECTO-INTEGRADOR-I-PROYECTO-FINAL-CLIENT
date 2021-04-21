import React from "react";

// Packages
import moment from "moment";

// Redux
import { useSelector } from "@/store/hooks";
import numeral from "numeral";

const RowTable: React.FC = () => {
  const { myAgency } = useSelector(({ agency }) => agency);

  return (
    <tbody>
      {myAgency?.posts.map((post, i) => (
        <tr key={i} className="relative duration-150 hover:bg-pri-100">
          <td className="relative w-5 px-4 py-4 text-sm">
            <input id={String(i)} type="radio" name="row-vehicle" value="F" />
            <label htmlFor={String(i)} className="absolute top-0 bottom-0 left-0 right-0 cursor-pointer"></label>
          </td>
          <td className="px-6 py-4 text-sm whitespace-nowrap">
            <p className="w-max-content">
              <b>{post.brand.label}</b>
            </p>
          </td>
          <td className="px-6 py-4 text-sm whitespace-nowrap">
            <p className="w-max-content">
              <b>{post.model.label}</b>
            </p>
          </td>
          <td className="px-6 py-4 text-sm whitespace-nowrap">
            <p className="w-max-content">
              <b>{post.year}</b>
            </p>
          </td>
          <td className="px-6 py-4 text-sm whitespace-nowrap">
            <p className="font-semibold w-max-content">
              {moment(parseInt(post.createdAt)).locale("es-do").format("lll")}
            </p>
          </td>
          <td className="px-6 py-4 text-sm leading-5 whitespace-nowrap">
            <p className="font-semibold w-max-content">
              {post.pricing.currency === "DOP" ? "RD$" : "US$ "} {numeral(post.pricing.amount).format("0,0")}
            </p>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default RowTable;
