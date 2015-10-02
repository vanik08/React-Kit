import React from 'react';
import { Input } from 'react-bootstrap';

class WeekdaySelector extends React.Component {
  constructor() {
    super();
    this.onDaySelected = this.onDaySelected.bind(this);
  }

  onDaySelected(e) {
    let weekday = e.target.value;
    let weekdayIndex = this.props.selectedWeekdays.indexOf(weekday);
    if(weekdayIndex >= 0) {
      this.props.selectedWeekdays.splice(weekdayIndex, 1);
    } else {
      this.props.selectedWeekdays.push(weekday);
    }
  }

  buildWeekdayBoxes() {
    const days = ['Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday', 'Sunday'];

    return days.map((day) => {
      return <Input
        type="checkbox"
        value={day}
        ref={day}
        onChange={this.onDaySelected}
        label={day} />;
    });
  }

  render() {
    return (
      <div>
        {this.buildWeekdayBoxes()}
      </div>
    );
  }
}

export default WeekdaySelector;
