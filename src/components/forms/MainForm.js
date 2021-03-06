import React, { Component } from "react";
import { Consumer } from "../../context";
import Spinner from "../layouts/Spinner";
import ListCurrency from "../forms/ListCurrency";

class MainForm extends Component {
  render() {
    return (
      <Consumer>
        {({ value, remove, onchanges, onoptionchanges, handleurl }) => {
          const { resrates, symbols, inputVal, allres } = value;
          if (resrates === undefined || Object.keys(resrates).length === 0) {
            return <Spinner />;
          } else {
            return (
              <React.Fragment>
                <div className="row  h-100 justify-content-center align-items-center">
                  <ListCurrency
                    rates={resrates}
                    allres={allres}
                    symbols={symbols}
                    removeListItem={remove}
                    inputVal={inputVal}
                    onchanges={onchanges}
                    onoptionchanges={onoptionchanges}
                    handleurl={handleurl}
                  />
                </div>
              </React.Fragment>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default MainForm;
