import React from "react";

interface IProps {
  data: any[];
  renderRow: (item: any) => React.ReactNode;
  Header: React.FC;
}

function Table({ data, renderRow, Header }: IProps) {
  return (
    <table className="relative h-fit overflow-hidden flex flex-col rounded-2xl bg-white border border-stone-400">
      <Header />
      <tbody className="flex flex-col">
        {data.map((item) => renderRow(item))}
      </tbody>
    </table>
  );
}

export { Table };
