document.addEventListener("DOMContentLoaded", function () {
  // Hard-coded property data.
  const propertiesData = [
    {
      url: "https://www.redfin.com/TX/Richardson/719-Dumont-Dr-75080/home/31955091",
      Price: "450900",
      appreciation: "40.6",      // in percent
      "Projected ROI": "7.20",   // as given
      image: "images/1.jpg"
    },
    {
      url: "https://www.redfin.com/TX/Richardson/1908-Cap-Rock-Dr-75080/home/31985576",
      Price: "485900",
      appreciation: "10",
      "Projected ROI": "6.80",
      image: "images/2.jpg"
    },
    {
      url: "https://www.redfin.com/TX/Richardson/3803-Marchwood-Dr-75082/home/32240631",
      Price: "575000",
      appreciation: "-12.6",
      "Projected ROI": "9.40",
      image: "images/3.jpg"
    },
    {
      url: "https://www.redfin.com/TX/Richardson/1711-Windsong-Trl-75081/home/31983258",
      Price: "415000",
      appreciation: "-20.5",
      "Projected ROI": "6.20",
      image: "images/4.jpg"
    },
    {
      url: "https://www.redfin.com/TX/Richardson/1815-Harvard-Dr-75081/home/31981575",
      Price: "430000",
      appreciation: "-15.7",
      "Projected ROI": "8",
      image: "images/5.jpg"
    },
    {
      url: "https://www.redfin.com/TX/Richardson/722-Devonshire-Dr-75080/home/31954840",
      Price: "435000",
      appreciation: "27.7",
      "Projected ROI": "6.80",
      image: "images/6.jpg"
    },
    {
      url: "https://www.redfin.com/TX/Richardson/2721-N-Spring-Dr-75082/home/32172722",
      Price: "505000",
      appreciation: "-12.7",
      "Projected ROI": "6.80",
      image: "images/7.jpg"
    },
    {
      url: "https://www.redfin.com/TX/Richardson/428-Ridge-Crest-Dr-75080/home/31921226",
      Price: "750000",
      appreciation: "39",
      "Projected ROI": "9.20",
      image: "images/8.jpg"
    },
    {
      url: "https://www.redfin.com/TX/Richardson/310-Ridgewood-Dr-75080/home/31858138",
      Price: "825900",
      appreciation: "8",
      "Projected ROI": "7",
      image: "images/9.jpg"
    },
    {
      url: "https://www.redfin.com/TX/Richardson/711-Westover-Dr-75080/home/31963218",
      Price: "439900",
      appreciation: "5",
      "Projected ROI": "10",
      image: "images/10.jpg"
    }
  ];
  
  // Fixed table headings for the output table.
  const headings = [
    "Property",
    "Investment ($)",
    "Timeframe (years)",
    "Appreciation Rate (%)",
    "Final Value ($)",
    "Projected ROI (%)",
    "Rental Income ($)",
    "Tax Benefit ($)",
    "Status"
  ];
  
  // Update slider display values.
  document.getElementById("timeframe1").addEventListener("input", function() {
    document.getElementById("timeframe1Value").textContent = this.value;
  });
  document.getElementById("timeframe2").addEventListener("input", function() {
    document.getElementById("timeframe2Value").textContent = this.value;
  });
  
  // When the "Generate ROI" button is clicked:
  document.getElementById("generateROI").addEventListener("click", function() {
    const inputUrl1 = document.getElementById("url1").value.trim();
    const inputUrl2 = document.getElementById("url2").value.trim();
    
    // Get user-selected timeframe values from the sliders.
    const userYears1 = document.getElementById("timeframe1").value;
    const userYears2 = document.getElementById("timeframe2").value;
    
    if (!inputUrl1 || !inputUrl2) {
      alert("Please enter both property URLs.");
      return;
    }
    
    console.log("Input URL 1:", inputUrl1, "Timeframe:", userYears1);
    console.log("Input URL 2:", inputUrl2, "Timeframe:", userYears2);
    
    // Pair each input URL with its user-selected timeframe.
    const inputData = [
      { url: inputUrl1, userYears: userYears1 },
      { url: inputUrl2, userYears: userYears2 }
    ];
    
    // For each input URL, find the matching property in the hard-coded dataset.
    const selectedProperties = inputData.map(item => {
      const match = propertiesData.find(
        prop => String(prop.url).trim().toLowerCase() === item.url.toLowerCase()
      );
      console.log("Matching for URL:", item.url, "=>", match);
      if (!match) {
        return { url: item.url, error: "No matching property found", userYears: item.userYears };
      }
      // Merge the matched data with the user-selected timeframe.
      return { ...match, userYears: item.userYears };
    });
    
    // Build the ROI data for each property.
    const roiData = selectedProperties.map(prop => {
      if (prop.error) {
        return {
          "Property": "Unknown",
          "Investment ($)": "",
          "Timeframe (years)": prop.userYears || "",
          "Appreciation Rate (%)": "",
          "Final Value ($)": "",
          "Projected ROI (%)": "",
          "Rental Income ($)": "",
          "Tax Benefit ($)": "",
          "Status": "No matching property found"
        };
      }
      
      // Use "Price" for Investment ($)
      const price = parseFloat(prop.Price);
      // Parse "Projected ROI" as given.
      const projROI = parseFloat(prop["Projected ROI"]);
      // Parse "appreciation" as a percentage.
      const appreciation = parseFloat(prop.appreciation);
      // Override the default "years" with the user-selected timeframe.
      const years = parseFloat(prop.userYears);
      
      if (isNaN(price) || isNaN(projROI) || isNaN(appreciation) || isNaN(years) || price <= 0) {
        return {
          "Property": prop.image || "Unknown",
          "Investment ($)": "",
          "Timeframe (years)": prop.userYears,
          "Appreciation Rate (%)": "",
          "Final Value ($)": "",
          "Projected ROI (%)": "",
          "Rental Income ($)": "",
          "Tax Benefit ($)": "",
          "Status": "Invalid data"
        };
      }
      
      // Calculate metrics:
      // Final Value = Investment * (1 + Appreciation Rate/100)
      const finalValue = price * (1 + (appreciation / 100));
      // Rental Income = Investment * 0.5 * (user-selected years)
      const rentalIncome = price * 0.5 * years;
      // Tax Benefit = (Investment / 27.5) * 0.25 * (user-selected years)
      const taxBenefit = (price / 27.5) * 0.25 * years;
      // ROI (%) = ((Final Value / Investment) - 1) * 100
      const roiPercent = ((finalValue / price) - 1) * 100;
      // Status determined solely by the appreciation rate:
      const status = appreciation < 0 ? "Loss" : "Profit";
      
      return {
        "Property": prop.image || "Unknown",
        "Investment ($)": price.toFixed(2),
        "Timeframe (years)": years.toString(),
        "Appreciation Rate (%)": appreciation.toFixed(2),
        "Final Value ($)": finalValue.toFixed(2),
        "Projected ROI (%)": projROI.toFixed(2),
        "Rental Income ($)": rentalIncome.toFixed(2),
        "Tax Benefit ($)": taxBenefit.toFixed(2),
        "Status": status
      };
    });
    
    displayResultsTable(roiData);
  });
  
  // Function to display the results table with fixed headings.
  function displayResultsTable(data) {
    let html = `<table>
      <thead>
        <tr>
          ${headings.map(h => `<th>${h}</th>`).join("")}
        </tr>
      </thead>
      <tbody>`;
    
    data.forEach(row => {
      html += "<tr>";
      headings.forEach(key => {
        const value = row[key] || "";
        if (key === "Property") {
          html += `<td><img src="${value}" alt="Property Image" style="width: 100px; height: auto;"></td>`;
        } else if (key === "Status") {
          const cls = value === "Profit" ? "profit" : (value === "Loss" ? "loss" : "");
          html += `<td class="${cls}">${value}</td>`;
        } else {
          html += `<td>${value}</td>`;
        }
      });
      html += "</tr>";
    });
    
    html += "</tbody></table>";
    document.getElementById("results").innerHTML = html;
  }
});
