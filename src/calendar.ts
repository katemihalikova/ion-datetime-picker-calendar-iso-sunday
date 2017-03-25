import {Calendar} from "ion-datetime-picker";
import ISOMondayCalendar from "ion-datetime-picker-calendar-iso-monday/src/calendar";

export default class ISOSundayCalendar extends ISOMondayCalendar implements Calendar {
  public weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  protected getFirstWeekDayOfMonth(year: number, month: number): number {
    return (super.getFirstWeekDayOfMonth(year, month) + 1) % 7 || 7;
  }
}
