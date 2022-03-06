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

td {
    border-radius: 5px;
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
        <th>Time</th>
        <th>Event</th>
    </tr>
    <tr>
        <th colspan=2">April 8</th>
    </tr>
    <tr>
        <td>6:00pm</td>
        <td class="event">Check In</td>
    </tr>
    <tr>
        <td>7:00pm</td>
        <td class="event">Kick Off</td>
    </tr>
    <tr>
        <td>8:00pm</td>
        <td rowspan="2" class="workshop">Chris Waldon Presenting Git</td>
    </tr>
    <tr>
        <td>9:00pm</td>
    </tr>
    <tr>
        <td>10:00pm</td>
    </tr>
    <tr>
        <td>11:00pm</td>
        <td>Games</td>
    </tr>
    <tr>
        <th colspan=2">April 9</th>
    </tr>
    <tr>
        <td>7:00am</td>
        <td class="meal">Breakfast</td>
    </tr>
    <tr>
        <td>8:00am</td>
    </tr>
    <tr>
        <td>9:00am</td>
        <td class="workshop">RENCI (iRODS)</td>
    </tr>
    <tr>
        <td>10:00am</td>
        <td rowspan="3" class="event">Sponsorship Fair</td>
    </tr>
    <tr>
        <td>11:00am</td>
    </tr>
    <tr>
        <td>12:00pm</td>
    </tr>
    <tr>
        <td>12:30pm</td>
        <td rowspan="2" class="meal">Lunch</td>
    </tr>
    <tr>
        <td>1:00pm</td>
    </tr>
    <tr>
        <td>2:00pm</td>
        <td rowspan="2" class="workshop">Mike Wilson</td>
    </tr>
    <tr>
        <td>3:00pm</td>
    </tr>
    <tr>
        <td>4:00pm</td>
        <td rowspan="2" class="workshop">Drake Software</td>
    </tr>
    <tr>
        <td>5:00pm</td>
    </tr>
    <tr>
        <td>6:00pm</td>
        <td class="meal">Dinner</td>
    </tr>
    <tr>
        <td>7:00pm</td>
        <td class="event">Showcase/Judging</td>
    </tr>
    <tr>
        <td>8:00pm</td>
        <td class="event">Prizes/Closing</td>
    </tr>
</table>

{% end %}
