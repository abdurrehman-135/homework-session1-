$(document).ready(function() {
        $("td").click(function () { 
            // 1. Get the content of the clicked cell
            var content = $(this).text(); 
            
            // 2. Use index() to find the column index of the clicked cell (0-based)
            var colIndex = $(this).index();
            
            // 3. Use eq() to select the corresponding <th> from the header row using the index
            var cliffName = $("thead th").eq(colIndex).text();
            
            // 4. Create a plain text version of the full string for removal logic
            // jQuery's :contains() matches the text content, so we keep this consistent.
            var fullDisplayText = content + " at " + cliffName;

            // 5. Create the HTML version with the span for the "blue box"
            // The content (Activity Name) + The Cliff Name inside a span
            var htmlContent = content + ' <span class="cliff-box">at ' + cliffName + '</span>';

            // Check if content is not "Not Available"
            if (content != "Not Available") { 
                
                // Toggle visual highlight class
                $(this).toggleClass("tdhighlight"); 

                if ($(this).hasClass("tdhighlight")) { 
                    // If cell is now selected:
                    
                    $("#displaySelected").css("visibility","visible"); 
                    $("#displaySelected").css("margin-top","2em"); 
                    
                    // Append the HTML version (with the blue box)
                    $("#result").append("<p>"+htmlContent+"</p>"); 

                } else { 
                    // If cell is being deselected:
                    
                    // Remove the specific paragraph. 
                    // We search for the plain text version (fullDisplayText) because :contains matches text content.
                    $('#result p:contains("'+fullDisplayText+'")').remove(); 

                    // Check if there are any remaining activities
                    if ($("#result").has('p').length == false) { 
                        $("#displaySelected").css("visibility","hidden"); 
                        $("#displaySelected").css("margin-top","0"); 
                    }
                }
            }
        });
        
    });