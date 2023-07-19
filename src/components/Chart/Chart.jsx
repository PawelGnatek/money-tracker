import './Chart.css';

import ChartBar from './ChartBar';

const Chart = (props) => {
    const dataPointValue = props.dataPoints.map(dataPoints => dataPoints.value); //transform dataPoints Object to Number in dataPoints.value
    const totalMax = Math.max(...dataPointValue); // spread operator pull out individual numbers

    return (
        <div className='chart'>
            {props.dataPoints.map((dataPoints) => (
                <ChartBar
                    key={dataPoints.label}
                    value={dataPoints.value}
                    maxValue={totalMax}
                    label={dataPoints.label}
                />
            ))}
        </div>
    );
};

export default Chart;
