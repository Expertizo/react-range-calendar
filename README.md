# react-range-calendar

> A responsive and accessible date range picker component with bunch of options built with React

[![NPM](https://img.shields.io/npm/v/react-range-calendar.svg)](https://www.npmjs.com/package/react-range-calendar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

|                           free-range                            |                              range                              |                             single                              |
| :-------------------------------------------------------------: | :-------------------------------------------------------------: | :-------------------------------------------------------------: |
| ![](https://media.giphy.com/media/j2w0ENwMrjtwdsx4Du/giphy.gif) | ![](https://media.giphy.com/media/QXgd2n6ZOt6xvTeuJh/giphy.gif) | ![](https://media.giphy.com/media/QYMYbEMXaukCROx7gQ/giphy.gif) |

![](https://media.giphy.com/media/U3VBtzauLwfaXrxmcb/giphy.gif)

## Install

```bash
npm install --save react-range-calendar
```

OR

```bash
yarn add react-range-calendar
```

## Usage

![](https://i.imgur.com/IiEWSrS.png)

```jsx
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
      <Calendar
        visible={visible}
        steps={steps}
        startWithDay={startWithDay}
        dateRange={dateRange}
        onDayClick={(minDate, maxDate) => {
          this.setState({ dateRange: [minDate, maxDate] });
        }}
        type="range"
      />
    );
  }
}
```

## Props

All \* props are Required.

|      Prop name       |                     Description                      | Default Value |            Example values             |
| :------------------: | :--------------------------------------------------: | :-----------: | :-----------------------------------: |
|        type\*        | Type of calendar `["free-range", "single", "range"]` |   `"range"`   |            `"free-range"`             |
|      visible\*       |                Visibility of calendar                |    `false`    |                `true`                 |
|     dateRange\*      |                   Array of date's                    |     `[]`      | `[new Date(), new Date("21/5/2019")]` |
|     onDayClick\*     |                     On day click                     |               |        `(minDate,maxDate)=>{}`        |
|      baseColor       |                      Base color                      |   `#007bff`   |                 `red`                 |  | fontColor | Font Color | `` | `white` |
| hoverBackgroundColor |                Hover background color                |   `#007bff`   |                 `red`                 |  | hoverFontColor | Hover Font Color | `` | `white` |
|    disabledColor     |                    Disabled color                    |   `#add8e6`   |               `#b9b9b9`               |  | weekDaysColor | Week Days Color | `` | `#ff7b7b` |
|  weekendsDaysColor   |                   Week ends color                    |    `grey`     |               `#ffbaba`               |

## Types

1.  ### free-range

    Users can select date freely

    ### Example

    ```jsx
    <Calendar
      visible={visible}
      dateRange={dateRange}
      onDayClick={(minDate, maxDate) => {
        this.setState({ dateRange: [minDate, maxDate] });
      }}
      type="free-range"
    />
    ```

    #### Demo

    ![](https://media.giphy.com/media/j2w0ENwMrjtwdsx4Du/giphy.gif)

2.  ### range

    On user date selection, It will find nearest provided day (`startWithDay`) and add provided `steps` from that day

    ### Example

    ```jsx
    <Calendar
      visible={visible}
      steps={steps}
      startWithDay={startWithDay}
      dateRange={dateRange}
      onDayClick={(minDate, maxDate) => {
        this.setState({ dateRange: [minDate, maxDate] });
      }}
      type="range"
    />
    ```

    #### Demo

    ![](https://media.giphy.com/media/QXgd2n6ZOt6xvTeuJh/giphy.gif)

    #### Props

    |   Prop name    |                       Description                        | Default Value | Example values |
    | :------------: | :------------------------------------------------------: | :-----------: | :------------: |
    |    steps\*     |                  Steps from start date                   |      `7`      |      `7`       |
    | startWithDay\* | Starting day of nearest selected day then it will update |     `Wed`     |     `Wed`      |

3.  ### single

    For single date select

    #### Example

    ```jsx
    <Calendar
      visible={visible}
      dateRange={dateRange} // date should be in array with first index of active date i.e [new Date()]
      onDayClick={date => {
        this.setState({ dateRange: [date] });
      }}
      type="single"
    />
    ```

    #### Demo

    ![](https://media.giphy.com/media/QYMYbEMXaukCROx7gQ/giphy.gif)

## Contributors ✨

Thanks goes to these wonderful people

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/hamsahmedansari"><img src="https://avatars1.githubusercontent.com/u/35776235?s=460&v=4" width="100px;" alt="Hams Ahmed Ansari"/><br /><sub><b>Hams Ahmed Ansari</b></sub></a><br /><a href="#" title="Infrastructure  (Hosting, Build-Tools,Complete Setup, etc)">🚇</a> <a href="#" title="Code">💻</a></td>
  </tr>
</table>

## License

MIT © [hamsahmedansari](https://github.com/hamsahmedansari)
