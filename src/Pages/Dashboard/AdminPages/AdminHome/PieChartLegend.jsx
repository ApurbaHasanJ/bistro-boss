const PieChartLegend = (props) => {
    const { payload } = props;
    return (
      <div className="flex drop-shadow-2xl gap-5 items-center justify-center">
        {payload.map((entry, index) => (
          <div
            className="flex justify-center items-center "
            key={`item-${index}`}
            style={{  color: entry.color }}>
            <svg width="40" height="40" style={{ fill: entry.color }}>
              <polygon points="10,0 20,15 10,30 0,15" />
            </svg>{" "}
           <span className="-mt-3 -ml-3 capitalize"> {entry.value}</span>
          </div>
        ))}
      </div>
    );
  };
  
  export default PieChartLegend;
  