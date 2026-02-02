 // Partner data
    const partnersData = [
      {
        src: "images/partners/partner-bustout.png",
        alt: "Partner Bus Tours",
      },
      {
        src: "images/partners/partner-cabinrentak.png",
        alt: "Partner Cabin Rental",
      },
      {
        src: "images/partners/partner-campingadv.png",
        alt: "Partner Camping Adventures",
      },
      {
        src: "images/partners/partner-collegetours.png",
        alt: "Partner College Tours",
      },
      {
        src: "images/partners/partner-rentalbike.png",
        alt: "Partner Bike Rentals",
      },
      {
        src: "images/partners/partner-tourgroup.png",
        alt: "Partner Tour Group",
      },
    ];

    // Get the UL element
    const partnersList = document.getElementById("partners");

    // Create list items dynamically
    partnersData.forEach((partner) => {
      const li = document.createElement("li");
      li.className = "partner";

      const img = document.createElement("img");
      img.src = partner.src;
      img.alt = partner.alt;

      li.appendChild(img);
      partnersList.appendChild(li);
    });