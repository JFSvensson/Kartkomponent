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
      // Vänta tills hela komponenten är laddad och sedan skapa Leaflet-kartan
      this.createMap();
  }

  createMap() {
      // Skapa kartan och ställ in den centralt på en specifik plats
      const map = L.map(this.mapContainer).setView([59.3293, 18.0686], 13); // Exempelvis Stockholm

      // Lägg till OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // Exempel på att lägga till en markering
      const marker = L.marker([59.3293, 18.0686]).addTo(map);
      
      // Lägg till ett popup-fönster som visas när man klickar på markeringen
      marker.bindPopup('<b>Information</b><br>Här är en informationsskylt.');

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
