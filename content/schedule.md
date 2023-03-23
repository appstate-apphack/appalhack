+++
title = "Schedule"
+++

{% note() %}
The schedule below is subject to change before/during the event.
{% end %}

{% card() %}

<style>
table {
    width: 100%;
}

table * {
    padding: 5px;
}

td, th {
    border-radius: 5px;
}
th {
    text-decoration: underline;
}

tr > td:nth-child(2) {
    border: 1px solid #4c4c4c;
}

tr:nth-child(odd) > td:first-child {
    background-color: #4c4c4c;
}

/* Declare schedule colors */
.workshop { background-color: navy; }
.meal { background-color: teal; }
.event { background-color: brown; }
.date {
    font-size: 16pt;
}
</style>

Key:
<span class="w3-round-large w3-padding-small workshop">Workshops</span>
<span class="w3-round-large w3-padding-small meal">Meals</span>
<span class="w3-round-large w3-padding-small event">Main Events</span>
<span class="w3-round-large w3-padding-small" style="border: 1px solid #4c4c4c">
Additional Events
</span>

<table>
    <tr>
        <th colspan="2" class="date">April 1</th>
    </tr>
   <tr>
        <th>Time</th>
        <th>Event</th>
    </tr>
    <tr>
        <td>2:00PM</td>
        <td class="event">Check In</td>
    </tr>
    <tr>
        <td>3:00PM</td>
        <td class="event">Kick Off</td>
    </tr>
    <tr>
        <td>4:00PM</td>
        <td rowspan="2" class="workshop">Chris Waldon presenting Go prorgaming</td>
    </tr>
    <tr>
        <td>4:30PM</td>
    </tr>
    <tr>
        <td>5:00PM</td>
        <td rowspan="2" class="workshop">Mike Wilson</td>
    </tr>
    <tr>
        <td>5:30PM</td>
    </tr>
    <tr>
        <td>6:00PM</td>
        <td rowspan="2" class="workshop">Dr.Amstorng</td>
    </tr>
    <tr>
        <td>6:30PM</td>
    </tr>
    <tr>
        <td>7:00PM</td>
        <td rowspan="2" class="meal">Dinner</td>
    </tr>
    <tr>
        <td>8:00PM</td>
    </tr>
    <tr>
        <td>9:00PM</td>
    </tr>
    <tr>
        <td>10:00PM</td>
    </tr>
    <tr>
        <td>11:00PM</td>
    </tr>
    <tr>
        <th colspan="2" class="date">April 2</th>
    </tr>
    <tr>
        <td>12:00AM</td>
        <td rowspan="2" class="event">Trivia</td>
    </tr>
    <tr>
        <td>1:00AM</td>
    </tr>
    <tr>
        <td>2:30AM</td>
        <td rowspan="3" class="event">Scavanger Hunt</td>
    </tr>
    <tr>
        <td>3:00AM</td>
    </tr>
    <tr>
        <td>4:00AM</td>
    </tr>
    <tr>
        <td>6:00AM</td>
        <td rowspan="2" class="meal">Breakfeast</td>
    </tr>
    <tr>
        <td>7:00AM</td>
    </tr>
    <tr>
        <td>10:30AM</td>
        <td rowspan="2" class="workshop">Sponsor Fair</td>
    </tr>
     <tr>
        <td>11:00AM</td>
    </tr>
        <td>12:00AM</td>
        <td rowspan="2" class="meal">Lunch</td>
    <tr>
        <td>1:00PM</td>
    </tr>
    <tr>
        <td>2:00PM</td>
    </tr>
    <tr>
        <td>3:00PM</td>
        <td class="event">End of hack</td>
    </td>
</table>

{% end %}
