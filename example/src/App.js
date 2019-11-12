import React, { Component } from "react";

import Calendar from "react-range-calendar";

export default class App extends Component {
  state = {
    visible1: true,
    visible2: true,
    visible3: true,
    dateRange1: [new Date("11/10/2019"), new Date("11/18/2019")],
    dateRange2: [new Date("11/10/2019"), new Date("11/18/2019")],
    dateRange3: [new Date()]
  };
  render() {
    const {
      visible1,
      visible2,
      dateRange1,
      dateRange2,
      dateRange3,
      visible3
    } = this.state;
    const steps = 7;
    const startWithDay = "Wed";
    return (
      <div className="App">
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div>
            <button
              style={{ marginTop: 10, marginBottom: 10 }}
              onClick={() => this.setState({ visible1: !visible1 })}
            >
              Toggle Range
            </button>
            <Calendar
              visible={visible1}
              steps={steps}
              startWithDay={startWithDay}
              dateRange={dateRange1}
              onDateClick={(minDate, maxDate) => {
                this.setState({ dateRange1: [minDate, maxDate] });
              }}
              type="range"
            />
            <div style={{ marginTop: 10 }}>
              {dateRange1[0].toDateString()} + {dateRange1[1].toDateString()}
            </div>
          </div>
          <div>
            <button
              style={{ marginTop: 10, marginBottom: 10 }}
              onClick={() => this.setState({ visible2: !visible2 })}
            >
              Toggle Free Range
            </button>
            <Calendar
              visible={visible2}
              dateRange={dateRange2}
              onDateClick={(minDate, maxDate) => {
                this.setState({ dateRange2: [minDate, maxDate] });
              }}
              type="free-range"
            />
            <div style={{ marginTop: 10 }}>
              {dateRange2[0].toDateString()} + {dateRange2[1].toDateString()}
            </div>
          </div>

          <div>
            <button
              style={{ marginTop: 10, marginBottom: 10 }}
              onClick={() => this.setState({ visible3: !visible3 })}
            >
              Toggle Single
            </button>
            <Calendar
              visible={visible3}
              dateRange={dateRange3}
              onDateClick={date => {
                this.setState({ dateRange3: [date] });
              }}
              type="single"
            />
            <div style={{ marginTop: 10 }}>{dateRange3[0].toDateString()}</div>
          </div>
        </div>
      </div>
    );
  }
}
