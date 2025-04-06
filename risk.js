// Future enhancement: dynamically fetch and compute risk score from APIs
console.log("Risk report loaded");

const selectedProperty = JSON.parse(localStorage.getItem('selectedProperty'));

if (selectedProperty) {
  document.getElementById('property-address').textContent = selectedProperty.address;
  document.getElementById('risk-score').textContent = selectedProperty.riskScore || 'N/A';
  document.getElementById('investment-trends').textContent = selectedProperty.investmentTrends || 'No investment data available.';
  document.getElementById('natural-disasters').textContent = selectedProperty.naturalDisasters || 'No disaster data available.';
  document.getElementById('crime-data').textContent = selectedProperty.crimeData || 'No crime data available.';
  document.getElementById('foundation-soil').textContent = selectedProperty.foundationSoil || 'No soil data available.';
  document.getElementById('summary-text').textContent = selectedProperty.summary || 'No summary available.';
} else {
  document.getElementById('property-address').textContent = 'No property selected.';
}
