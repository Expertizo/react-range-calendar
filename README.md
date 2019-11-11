# react-range-calendar

> A responsive and accessible date range picker component with bunch of options built with React

[![NPM](https://img.shields.io/npm/v/react-range-calendar.svg)](https://www.npmjs.com/package/react-range-calendar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-range-calendar
```

OR

```bash
yarn add  react-range-calendar
```

## Usage

```jsx
import React, { Component } from "react";

import Calendar from "react-range-calendar";

class Example extends Component {
  state = {
    visible: true,
    startWithDates: [new Date(), new Date("21/5/2019")]
  };
  render() {
    const { visible, startWithDates } = this.state;
    const step = 7;
    const startWith = "Wed";
    return (
      <Calendar
        visible={visible}
        step={step}
        startWithDay={startWith}
        dateRange={startWithDates}
        onDayClick={(minDate, maxDate) => {
          this.setState({ startWithDates: [minDate, maxDate] });
        }}
        type="free-range"
      />
    );
  }
}
```

## props

|  Prop name   |                     Description                      | Default Value |            Example values             |
| :----------: | :--------------------------------------------------: | :-----------: | :-----------------------------------: |
|    type\*    | Type of calendar `["free-range", "single", "range"]` |   `"range"`   |            `"free-range"`             |
|  visible\*   |                visibility of calendar                |    `false`    |                `true`                 |
| dateRange\*  |                   Array Of Date's                    |    `null`     | `[new Date(), new Date("21/5/2019")]` |
| onDayClick\* |                     On Day Click                     |               |       `(minDate, maxDate) => {        |

              this.setState({ startWithDates: [minDate, maxDate] });
            }` |

| baseColor | Base Color | `` | `red` | | fontColor | Font Color | `` | `white` |
| hoverBackgroundColor | Hover Background Color | `` | `red` | | hoverFontColor | Hover Font Color | `` | `white` |
| disabledColor | Disabled Color | `` | `#b9b9b9` | | weekDaysColor | Week Days Color | `` | `#ff7b7b` |
| weekendsDaysColor | Week Ends Color | `` | `#ffbaba` |

## Types

1.  ### free-range

    Users can select date freely without max,min & steps

    #### Demo

    ![](https://media.giphy.com/media/j2w0ENwMrjtwdsx4Du/giphy.gif)

2.  ### range

    When User click date it will find nearest provide day and add steps from that then return

    #### Demo

    ![](https://media.giphy.com/media/QXgd2n6ZOt6xvTeuJh/giphy.gif)

    #### Props

    |   Prop name    |                       Description                        | Default Value | Example values |
    | :------------: | :------------------------------------------------------: | :-----------: | :------------: |
    |     step\*     |                  Steps from start date                   |      `7`      |      `7`       |
    | startWithDay\* | starting day of nearest selected day then it will update |     `Wed`     |     `Wed`      |

3.  ### single

    For Single Date Select

    #### Demo

    ![](https://media.giphy.com/media/QYMYbEMXaukCROx7gQ/giphy.gif)

## License

MIT © [hamsahmedansari](https://github.com/hamsahmedansari)
