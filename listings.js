function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const riskOptions = {
  riskScores: ['45%', '58%', '72%', '83%', '90%'],
  investmentTrends: [
    'Market is increasing by 3.2%.',
    'Market is flat with minimal change.',
    'Market is declining by 4.3%.'
  ],
  naturalDisasters: [
    'Located in FEMA Flood Zone AE.',
    'No major flood or wildfire risk.',
    'Moderate wildfire risk zone.'
  ],
  crimeData: [
    'Crime score: 67/100.',
    'Crime score: 45/100.',
    'Crime score: 88/100.'
  ],
  foundationSoil: [
    'Clay-heavy soil. Foundation may shift.',
    'Sandy soil. Low foundation risk.',
    'Rocky foundation. Very stable.'
  ],
  summaries: [
    'Moderate risk from soil, crime, and market trend.',
    'Low risk overall with stable market.',
    'High risk due to crime and foundation issues.'
  ]
};

const dummyData = [
  // Richardson, TX
  {
    id: 1,
    name: 'Aspen Retreat',
    address: '882 Maple Ave, Richardson, TX',
    price: '$749,000',
    image: 'images/1.jpg',
    link: 'https://www.redfin.com/TX/Richardson/719-Dumont-Dr-75080/home/31955091',
    riskScore: randomChoice(riskOptions.riskScores),
    investmentTrends: randomChoice(riskOptions.investmentTrends),
    naturalDisasters: randomChoice(riskOptions.naturalDisasters),
    crimeData: randomChoice(riskOptions.crimeData),
    foundationSoil: randomChoice(riskOptions.foundationSoil),
    summary: randomChoice(riskOptions.summaries)
  },
  {
    id: 2,
    name: 'Springview Cottage',
    address: '280 Oak Dr, Richardson, TX',
    price: '$1,277,000',
    image: 'images/2.jpg',
    link: 'https://www.redfin.com/TX/Richardson/1908-Cap-Rock-Dr-75080/home/31985576',
    riskScore: randomChoice(riskOptions.riskScores),
    investmentTrends: randomChoice(riskOptions.investmentTrends),
    naturalDisasters: randomChoice(riskOptions.naturalDisasters),
    crimeData: randomChoice(riskOptions.crimeData),
    foundationSoil: randomChoice(riskOptions.foundationSoil),
    summary: randomChoice(riskOptions.summaries)
  },
  {
    id: 3,
    name: 'Cottonwood Ridge',
    address: '890 Main St, Richardson, TX',
    price: '$937,000',
    image: 'images/3.jpg',
    link: 'https://www.redfin.com/TX/Richardson/3803-Marchwood-Dr-75082/home/32240631',
    riskScore: randomChoice(riskOptions.riskScores),
    investmentTrends: randomChoice(riskOptions.investmentTrends),
    naturalDisasters: randomChoice(riskOptions.naturalDisasters),
    crimeData: randomChoice(riskOptions.crimeData),
    foundationSoil: randomChoice(riskOptions.foundationSoil),
    summary: randomChoice(riskOptions.summaries)
  },
  {
    id: 4,
    name: 'Larkspur Lodge',
    address: '938 Pine Rd, Richardson, TX',
    price: '$816,000',
    image: 'images/4.jpg',
    link: 'https://www.redfin.com/TX/Richardson/1711-Windsong-Trl-75081/home/31983258',
    riskScore: randomChoice(riskOptions.riskScores),
    investmentTrends: randomChoice(riskOptions.investmentTrends),
    naturalDisasters: randomChoice(riskOptions.naturalDisasters),
    crimeData: randomChoice(riskOptions.crimeData),
    foundationSoil: randomChoice(riskOptions.foundationSoil),
    summary: randomChoice(riskOptions.summaries)
  },
  {
    id: 5,
    name: 'Foxglove Place',
    address: '979 Cedar Ln, Richardson, TX',
    price: '$1,090,000',
    image: 'images/5.jpg',
    link: 'https://www.redfin.com/TX/Richardson/1815-Harvard-Dr-75081/home/31981575',
    riskScore: randomChoice(riskOptions.riskScores),
    investmentTrends: randomChoice(riskOptions.investmentTrends),
    naturalDisasters: randomChoice(riskOptions.naturalDisasters),
    crimeData: randomChoice(riskOptions.crimeData),
    foundationSoil: randomChoice(riskOptions.foundationSoil),
    summary: randomChoice(riskOptions.summaries)
  },
  {
    id: 6,
    name: 'Parkside Haven',
    address: '183 Willow Way, Richardson, TX',
    price: '$765,000',
    image: 'images/6.jpg',
    link: 'https://www.redfin.com/TX/Richardson/722-Devonshire-Dr-75080/home/31954840',
    riskScore: randomChoice(riskOptions.riskScores),
    investmentTrends: randomChoice(riskOptions.investmentTrends),
    naturalDisasters: randomChoice(riskOptions.naturalDisasters),
    crimeData: randomChoice(riskOptions.crimeData),
    foundationSoil: randomChoice(riskOptions.foundationSoil),
    summary: randomChoice(riskOptions.summaries)
  },
  {
    id: 7,
    name: 'Elm Hollow',
    address: '360 Pine Rd, Richardson, TX',
    price: '$678,000',
    image: 'images/7.jpg',
    link: 'https://www.redfin.com/TX/Richardson/2721-N-Spring-Dr-75082/home/32172722',
    riskScore: randomChoice(riskOptions.riskScores),
    investmentTrends: randomChoice(riskOptions.investmentTrends),
    naturalDisasters: randomChoice(riskOptions.naturalDisasters),
    crimeData: randomChoice(riskOptions.crimeData),
    foundationSoil: randomChoice(riskOptions.foundationSoil),
    summary: randomChoice(riskOptions.summaries)
  },
  {
    id: 8,
    name: 'Willow Crest',
    address: '401 Oak Dr, Richardson, TX',
    price: '$849,000',
    image: 'images/8.jpg',
    link: 'https://www.redfin.com/TX/Richardson/428-Ridge-Crest-Dr-75080/home/31921226',
    riskScore: randomChoice(riskOptions.riskScores),
    investmentTrends: randomChoice(riskOptions.investmentTrends),
    naturalDisasters: randomChoice(riskOptions.naturalDisasters),
    crimeData: randomChoice(riskOptions.crimeData),
    foundationSoil: randomChoice(riskOptions.foundationSoil),
    summary: randomChoice(riskOptions.summaries)
  },

  // Dallas, TX
  {
    id: 9,
    name: 'Lakeview Villa',
    address: '286 Willow Way, Dallas, TX',
    price: '$897,000',
    image: 'images/9.jpg',
    link: 'https://www.redfin.com/TX/Richardson/310-Ridgewood-Dr-75080/home/31858138',
    riskScore: randomChoice(riskOptions.riskScores),
    investmentTrends: randomChoice(riskOptions.investmentTrends),
    naturalDisasters: randomChoice(riskOptions.naturalDisasters),
    crimeData: randomChoice(riskOptions.crimeData),
    foundationSoil: randomChoice(riskOptions.foundationSoil),
    summary: randomChoice(riskOptions.summaries)
  },
  {
    id: 10,
    name: 'Preston Pointe',
    address: '729 Oak Dr, Dallas, TX',
    price: '$920,000',
    image: 'images/10.jpg',
    link: 'https://www.redfin.com/TX/Richardson/711-Westover-Dr-75080/home/31963218',
    riskScore: randomChoice(riskOptions.riskScores),
    investmentTrends: randomChoice(riskOptions.investmentTrends),
    naturalDisasters: randomChoice(riskOptions.naturalDisasters),
    crimeData: randomChoice(riskOptions.crimeData),
    foundationSoil: randomChoice(riskOptions.foundationSoil),
    summary: randomChoice(riskOptions.summaries)
  },
  {
    id: 11,
    name: 'White Rock Estate',
    address: '639 Maple Ave, Dallas, TX',
    price: '$1,050,000',
    image: '/frontend/listings/img3.jpg',
    riskScore: randomChoice(riskOptions.riskScores),
    investmentTrends: randomChoice(riskOptions.investmentTrends),
    naturalDisasters: randomChoice(riskOptions.naturalDisasters),
    crimeData: randomChoice(riskOptions.crimeData),
    foundationSoil: randomChoice(riskOptions.foundationSoil),
    summary: randomChoice(riskOptions.summaries)
  },
  {
    id: 12,
    name: 'Mockingbird Manor',
    address: '401 Cedar Ln, Dallas, TX',
    price: '$1,477,000',
    image: '/frontend/listings/img4.jpg',
    riskScore: randomChoice(riskOptions.riskScores),
    investmentTrends: randomChoice(riskOptions.investmentTrends),
    naturalDisasters: randomChoice(riskOptions.naturalDisasters),
    crimeData: randomChoice(riskOptions.crimeData),
    foundationSoil: randomChoice(riskOptions.foundationSoil),
    summary: randomChoice(riskOptions.summaries)
  },
  {
    id: 13,
    name: 'Greenville Grove',
    address: '147 Willow Way, Dallas, TX',
    price: '$1,124,000',
    image: '/frontend/listings/img1.jpg',
    riskScore: randomChoice(riskOptions.riskScores),
    investmentTrends: randomChoice(riskOptions.investmentTrends),
    naturalDisasters: randomChoice(riskOptions.naturalDisasters),
    crimeData: randomChoice(riskOptions.crimeData),
    foundationSoil: randomChoice(riskOptions.foundationSoil),
    summary: randomChoice(riskOptions.summaries)
  },
  {
    id: 14,
    name: 'Trinity Heights',
    address: '899 Maple Ave, Dallas, TX',
    price: '$722,000',
    image: '/frontend/listings/img2.jpeg',
    riskScore: randomChoice(riskOptions.riskScores),
    investmentTrends: randomChoice(riskOptions.investmentTrends),
    naturalDisasters: randomChoice(riskOptions.naturalDisasters),
    crimeData: randomChoice(riskOptions.crimeData),
    foundationSoil: randomChoice(riskOptions.foundationSoil),
    summary: randomChoice(riskOptions.summaries)
  },
  {
    id: 15,
    name: 'Deep Ellum Dwelling',
    address: '530 Main St, Dallas, TX',
    price: '$1,100,000',
    image: '/frontend/listings/img3.jpg',
    riskScore: randomChoice(riskOptions.riskScores),
    investmentTrends: randomChoice(riskOptions.investmentTrends),
    naturalDisasters: randomChoice(riskOptions.naturalDisasters),
    crimeData: randomChoice(riskOptions.crimeData),
    foundationSoil: randomChoice(riskOptions.foundationSoil),
    summary: randomChoice(riskOptions.summaries)
  },
  {
    id: 16,
    name: 'Knox Urban Flat',
    address: '628 Oak Dr, Dallas, TX',
    price: '$861,000',
    image: '/frontend/listings/img4.jpg',
    riskScore: randomChoice(riskOptions.riskScores),
    investmentTrends: randomChoice(riskOptions.investmentTrends),
    naturalDisasters: randomChoice(riskOptions.naturalDisasters),
    crimeData: randomChoice(riskOptions.crimeData),
    foundationSoil: randomChoice(riskOptions.foundationSoil),
    summary: randomChoice(riskOptions.summaries)
  },

  // Austin, TX
  {
    id: 17,
    name: 'Shady Inn',
    address: '556 Main St, Austin, TX',
    price: '$1,216,000',
    image: '/frontend/listings/img1.jpg',
    riskScore: randomChoice(riskOptions.riskScores),
    investmentTrends: randomChoice(riskOptions.investmentTrends),
    naturalDisasters: randomChoice(riskOptions.naturalDisasters),
    crimeData: randomChoice(riskOptions.crimeData),
    foundationSoil: randomChoice(riskOptions.foundationSoil),
    summary: randomChoice(riskOptions.summaries)
  },
  {
    id: 18,
    name: 'Zilker Loft',
    address: '321 Cedar Ln, Austin, TX',
    price: '$1,412,000',
    image: '/frontend/listings/img2.jpeg',
    riskScore: randomChoice(riskOptions.riskScores),
    investmentTrends: randomChoice(riskOptions.investmentTrends),
    naturalDisasters: randomChoice(riskOptions.naturalDisasters),
    crimeData: randomChoice(riskOptions.crimeData),
    foundationSoil: randomChoice(riskOptions.foundationSoil),
    summary: randomChoice(riskOptions.summaries)
  },
  {
    id: 19,
    name: 'Bluebonnet Grove',
    address: '392 Willow Way, Austin, TX',
    price: '$1,008,000',
    image: '/frontend/listings/img3.jpg',
    riskScore: randomChoice(riskOptions.riskScores),
    investmentTrends: randomChoice(riskOptions.investmentTrends),
    naturalDisasters: randomChoice(riskOptions.naturalDisasters),
    crimeData: randomChoice(riskOptions.crimeData),
    foundationSoil: randomChoice(riskOptions.foundationSoil),
    summary: randomChoice(riskOptions.summaries)
  },
  {
    id: 20,
    name: 'Barton Creek Haven',
    address: '417 Oak Dr, Austin, TX',
    price: '$771,000',
    image: '/frontend/listings/img4.jpg',
    riskScore: randomChoice(riskOptions.riskScores),
    investmentTrends: randomChoice(riskOptions.investmentTrends),
    naturalDisasters: randomChoice(riskOptions.naturalDisasters),
    crimeData: randomChoice(riskOptions.crimeData),
    foundationSoil: randomChoice(riskOptions.foundationSoil),
    summary: randomChoice(riskOptions.summaries)
  },
  {
    id: 21,
    name: 'South Congress Escape',
    address: '386 Pine Rd, Austin, TX',
    price: '$1,093,000',
    image: '/frontend/listings/img1.jpg',
    riskScore: randomChoice(riskOptions.riskScores),
    investmentTrends: randomChoice(riskOptions.investmentTrends),
    naturalDisasters: randomChoice(riskOptions.naturalDisasters),
    crimeData: randomChoice(riskOptions.crimeData),
    foundationSoil: randomChoice(riskOptions.foundationSoil),
    summary: randomChoice(riskOptions.summaries)
  },
  {
    id: 22,
    name: 'East Side Cottage',
    address: '790 Maple Ave, Austin, TX',
    price: '$894,000',
    image: '/frontend/listings/img2.jpeg',
    riskScore: randomChoice(riskOptions.riskScores),
    investmentTrends: randomChoice(riskOptions.investmentTrends),
    naturalDisasters: randomChoice(riskOptions.naturalDisasters),
    crimeData: randomChoice(riskOptions.crimeData),
    foundationSoil: randomChoice(riskOptions.foundationSoil),
    summary: randomChoice(riskOptions.summaries)
  }
]; 
  
  function searchProperties() {
    const listingsContainer = document.getElementById('propertyListings');
    listingsContainer.innerHTML = '';
    const liked = JSON.parse(localStorage.getItem('likedProperties')) || [];
    const query = document.getElementById('searchInput').value.toLowerCase();

    const filteredData = dummyData.filter(property =>
      property.name.toLowerCase().includes(query) ||
      property.address.toLowerCase().includes(query) ||
      property.price.toLowerCase().includes(query)
    );

    filteredData.forEach((property) => {
      const isLiked = liked.includes(property.id);
      const card = document.createElement('div');
      card.className = 'property-card';

      card.innerHTML = `
      <div class="like-icon ${isLiked ? 'liked' : ''}" onclick="toggleLike(this)">
        ${isLiked ? '💚' : '🖤'}
      </div>
      <input type="checkbox" class="select-checkbox" value="${property.id}" />
      <img src="${property.image}" alt="${property.name}" class="property-image" />
      <h4>${property.name}</h4>
      <p>${property.price}</p>
      <p>${property.address}</p>
      `;

      const image = card.querySelector('.property-image');
      image.addEventListener('click', (event) => {
        event.stopPropagation(); // prevent event bubbling to card
        localStorage.setItem('selectedProperty', JSON.stringify(property));
        window.location.href = 'risk.html';
      });

      listingsContainer.appendChild(card);
    });
  }

dummyData.forEach(property => {
  property.summary = generateSummary(property);
});
  
function searchProperties() {
    const listingsContainer = document.getElementById('propertyListings');
    listingsContainer.innerHTML = '';
    const liked = JSON.parse(localStorage.getItem('likedProperties')) || [];
    const query = document.getElementById('searchInput').value.toLowerCase();

    const filteredData = dummyData.filter(property =>
      property.name.toLowerCase().includes(query) ||
      property.address.toLowerCase().includes(query) ||
      property.price.toLowerCase().includes(query)
    );

    filteredData.forEach((property) => {
      const isLiked = liked.includes(property.id);
      const card = document.createElement('div');
      card.className = 'property-card';

      card.innerHTML = `
      <div class="like-icon ${isLiked ? 'liked' : ''}" onclick="toggleLike(this)">
        ${isLiked ? '💚' : '🖤'}
      </div>
      <input type="checkbox" class="select-checkbox" value="${property.id}" />
      <img src="${property.image}" alt="${property.name}" class="property-image" />
      <h4>${property.name}</h4>
      <p>${property.price}</p>
      <p>${property.address}</p>
      `;

      const image = card.querySelector('.property-image');
      image.addEventListener('click', (event) => {
        event.stopPropagation(); // prevent event bubbling to card
        localStorage.setItem('selectedProperty', JSON.stringify(property));
        window.location.href = 'risk.html';
      });

      listingsContainer.appendChild(card);
    });
  }

  function toggleLike(iconElement) {
    const propertyId = parseInt(iconElement.nextElementSibling.value);
    let liked = JSON.parse(localStorage.getItem('likedProperties')) || [];

    if (iconElement.classList.contains('liked')) {
      liked = liked.filter(id => id !== propertyId);
      iconElement.classList.remove('liked');
      iconElement.textContent = '🖤';
    } else {
      liked.push(propertyId);
      iconElement.classList.add('liked');
      iconElement.textContent = '💚';
    }

    localStorage.setItem('likedProperties', JSON.stringify(liked));
  }  
  
  function compareSelected() {
  const checkboxes = document.querySelectorAll('.select-checkbox:checked');
  const selected = Array.from(checkboxes).map(cb => parseInt(cb.value));

  if (selected.length !== 2) {
    alert('Please select exactly 2 properties to compare.');
    return;
  }

  const selectedProps = dummyData.filter(prop => selected.includes(prop.id));
  const urls = selectedProps.map(p => p.link);

  localStorage.setItem('compareURLs', JSON.stringify(urls));
  window.location.href = 'Analysis1.html';
  }