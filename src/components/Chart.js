import React from 'react';
import round from 'lodash/round';
import sum from 'lodash/sum';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  return round(sum(data)/data.length);
}

export const Chart = ({ data, color, units }) => (
  <div>
    <Sparklines height={120} width={180} data={data}>
      <SparklinesLine color={color} />
      <SparklinesReferenceLine type="avg" />
    </Sparklines>
    <div>{average(data)} {units}</div>
  </div>
);


export default Chart;
