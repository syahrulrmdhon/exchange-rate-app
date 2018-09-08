import React from "react";

const ListCurrency = props => {
  const { rates, symbols, allres } = props;
  const ItemCurrency = [];
  const Objects = [];
  const Options = [];
  for (const i in rates) {
    const sym = Object.keys(rates).find(key => rates[key] === rates[i]);
    ItemCurrency.push(
      <div className="card-body" key={i}>
        <span className="angka">
          {symbols[i].currencySymbol} {rates[i]}
          <button
            type="button"
            className="btn btn-danger"
            style={{ marginLeft: "10px" }}
            onClick={() => props.removeListItem(i)}
          >
            &minus;
          </button>
        </span>
        <h5>
          {sym}
          {/* hehehe */}
        </h5>
        {symbols[i].currencyName}
        <br />
      </div>
    );
    Objects.push(i);
  }
  for (const i in allres) {
    if (rates[i] === allres[i]) {
    } else {
      Options.push(
        <option key={i} value={"," + rates[i]}>
          {symbols[i].currencyName}
        </option>
      );
    }
  }
  return (
    <div className="col-md-8">
      <div className="card mb-4 shadow-sm">
        <div className="card-header">
          <h5>USD</h5>
          United States Dollars
          <span className="angka">
            <input
              className="form-control"
              type="number"
              style={{ width: "100px" }}
              defaultValue={props.inputVal}
              onChange={e => props.onchanges(e, Objects)}
            />
          </span>
        </div>
        {ItemCurrency}
      </div>
      <div className="card-body">
        <select
          className="form-control"
          value={props.valsymbol}
          onChange={props.onoptionchanges}
        >
          {Options}
        </select>
        <br />
        <input
          type="submit"
          className="form-control btn-info"
          value="Submit"
          onClick={props.handleurl}
        />
      </div>
    </div>
  );
};

export default ListCurrency;
