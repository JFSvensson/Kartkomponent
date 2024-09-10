class KartKomponent extends HTMLElement {
  constructor() {
      super();
      
      // Skapa en div som ska innehålla kartan (utanför Shadow DOM)
      this.mapContainer = document.createElement('div');
      this.mapContainer.setAttribute('id', 'map');
      this.mapContainer.style.height = '400px';
      this.mapContainer.style.width = '100%';

      // Lägg till kartcontainern i vanliga DOM-trädet
      this.appendChild(this.mapContainer);
  }

  connectedCallback() {
    // Ladda data från en extern JSON-fil
    fetch('data/kulturstigData.json')
    .then(response => response.json())
    .then(data => {
        this.createMap(data.center, data.zoom, data.markers);
    });
  }

  createMap(center, zoom, markers) {
      // Skapa kartan och ställ in den centralt på en specifik plats
      const map = L.map(this.mapContainer).setView(center, zoom);

      // Lägg till OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      markers.forEach(marker => {
        const leafletMarker = L.marker([marker.lat, marker.lng]).addTo(map);
        leafletMarker.bindPopup(`<b>${marker.popup}</b>`);
      });

      // Tooltip visas vid hover
      marker.bindTooltip('Hover-text för markering').openTooltip();
      
      // Hantera klick på markeringen för att länka till en annan sida
      marker.on('click', () => {
          window.location.href = 'https://example.com/information';
      });
  }
}

// Definiera webbkomponenten
customElements.define('svenssonom-kartkomponent', KartKomponent);
