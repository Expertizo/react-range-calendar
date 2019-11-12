import React, { Component } from "react";

import Calendar from "react-range-calendar";

export default class App extends Component {
  state = {
    visible: true,
    dateRange: [new Date(), new Date("21/5/2019")]
  };
  render() {
    const { visible, dateRange } = this.state;
    const steps = 7;
    const startWithDay = "Wed";
    return (
      <div className="App">
        <button onClick={() => this.setState({ visible: !visible })}>
          Toggle Calendar
        </button>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Calendar
            visible={visible}
            steps={steps}
            startWithDay={startWithDay}
            dateRange={dateRange}
            onDateClick={(minDate, maxDate) => {
              this.setState({ dateRange: [minDate, maxDate] });
            }}
            type="range"
          />
        </div>
      </div>
    );
  }
}
