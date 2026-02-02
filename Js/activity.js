 $(document).ready(function() {
    // Select all td (data) elements in the table
    $("td").each(function() {
        var cell = $(this);

        // Rule: "Not available" cells are not selectable
        // .trim() ensures we ignore extra whitespace
        if (cell.text().trim() === "Not Available") {
            return; // Skip this cell
        }

        // Rule: Heading/title cells are not selectable
        // Since we selected "td", we automatically exclude "th" (Table Headers).
        // If you also want to exclude the first column (Activity names like "Hiking"),
        // uncomment the line below:
        // if (cell.is(":first-child")) return;

        // Rule: On cells that are selectable, the cursor display the hand
        cell.css("cursor", "pointer");

        // Rule: Click to toggle highlight (add/remove class)
        cell.click(function() {
            $(this).toggleClass("highlight");
        });
    });
});