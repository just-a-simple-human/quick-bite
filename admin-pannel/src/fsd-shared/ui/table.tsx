import classNames from "classnames";
import React from "react";

interface IProps {
  data: any[];
  renderRow: (item: any) => React.ReactNode;
  Header: React.FC;
  isLoading?: boolean;
}

function Table({ data, renderRow, Header, isLoading }: IProps) {
  return (
    <table className="relative h-fit overflow-hidden flex flex-col rounded-2xl bg-white border border-stone-400">
      <Header />
      <tbody
        className={classNames("flex flex-col", { "opacity-50": isLoading })}
      >
        {data.map((item) => renderRow(item))}
      </tbody>
    </table>
  );
}

export { Table };
