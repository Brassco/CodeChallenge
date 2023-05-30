import React, { memo } from "react";

import DateRowSC, { Props } from "../ui/DateRow";

const DateRow = ({
  locations,
  setDateToDateRow,
  setLocationToDateRow,
  data,
}: Props) => {
  return (
    <DateRowSC
      locations={locations}
      setDateToDateRow={setDateToDateRow}
      setLocationToDateRow={setLocationToDateRow}
      data={data}
    />
  );
};

export default memo(DateRow);
