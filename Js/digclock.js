 function currentTime() {
      var d = new Date(); //Get current date
      var hr = d.getHours(); //Get current hours (Local)
      var min = d.getMinutes(); //Get current minutes
      var sec = d.getSeconds(); //Get current seconds
      var ampm = hr >= 12 ? "PM" : "AM"; //Determine AM or PM

      // --- Requirement 1: Get Greenwich Mean Time ---
      var utchr = d.getUTCHours(); //Get current Greenwich Mean Time (GMT)

      // --- Requirement 2: Convert Greenwich Mean Time from military to standard ---
      // (We do this mathematically for the variable, even if we don't display GMT explicitly)
      var utcampm = utchr >= 12 ? "PM" : "AM";
      var gmtStandard = utchr % 12;
      gmtStandard = gmtStandard ? gmtStandard : 12;

      // --- Requirement 3: Calculate time difference between GMT hour and local hour ---
      var timeDiff = utchr - hr;

      // --- Requirement 4: Convert time difference, if negative, to positive ---
      // Note: To fix the "midnight crossing" issue where GMT might be 1 and Local 20,
      // we add 24 to the negative difference to get the positive offset (e.g., 1 - 20 = -19 -> +24 = 5 hours).
      var adjTimeDiff = timeDiff;
      if (timeDiff < 0) {
        adjTimeDiff = timeDiff + 24;
      }

      // --- Requirement 5: Check which time zone based on adjusted time difference ---
      var timeZone = "";
      // Standard Time Zones (Winter): PT=8, MT=7, CT=6, ET=5
      // Daylight Savings (Summer): PT=7, MT=6, CT=5, ET=4
      // We check for both possibilities to ensure accuracy year-round.

      switch (adjTimeDiff) {
        case 8:
          timeZone = "PT";
          break;
        case 7:
          timeZone = "MT"; // Or DST PT
          break;
        case 6:
          timeZone = "CT"; // Or DST MT
          break;
        case 5:
          timeZone = "ET"; // Or DST CT
          break;
        case 4:
          timeZone = "ET"; // DST ET
          break;
        default:
          timeZone = "Local";
      }

      // Formatting Local Time for display
      // Add 0 to single digits for seconds
      if (sec < 10) {
        sec = "0" + sec;
      }

      // Add 0 to single digits for minutes
      if (min < 10) {
        min = "0" + min;
      }

      // Convert local hour to standard 12h format
      hr = hr % 12;
      hr = hr ? hr : 12;

      // --- Requirement 6: Add time zone to the very end of the assembly time format ---
      var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;

      // Update HTML
      var clockElement = document.getElementById("clock");
      if (clockElement) {
        clockElement.innerText = time;
      }
    }

    // Intial run
    currentTime();
    // Run every 1 second
    setInterval(currentTime, 1000);
