import React, { Component } from "react";

import Calendar from "react-range-calendar";

export default class App extends Component {
  state = {
    visible: true,
    startWithDates: [new Date(), new Date("21/5/2019")]
  };
  render() {
    const { visible, startWithDates } = this.state;
    const step = 7;
    const startWith = "Wed";
    return (
      <div className="App">
        <button onClick={() => this.setState({ visible: !visible })}>
          Toggle Calendar
        </button>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Calendar
            visible={visible}
            // date={date}
            step={step}
            startWith={startWith}
            startWithDates={startWithDates}
            onDayClick={(minDate, maxDate) => {
              this.setState({ startWithDates: [minDate, maxDate] });
            }}
            // baseColor="red"
            // fontColor="yellow"
            // hoverBackgroundColor="brown"
            // hoverFontColor="black"
            // disabledColor="orange"
            // weekDaysColor="green"
            // weekendsDaysColor="black"
            type="fix-range"
          />
        </div>
      </div>
    );
  }
}
