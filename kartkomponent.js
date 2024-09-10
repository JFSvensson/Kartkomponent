class KartKomponent extends HTMLElement {
  constructor() {
      super();      
      this.mapContainer = document.createElement('div');
      this.mapContainer.setAttribute('id', 'map');
      this.mapContainer.style.height = '400px';
      this.mapContainer.style.width = '100%';
      this.appendChild(this.mapContainer);
  }

  connectedCallback() {
    const dataUrl = this.getAttribute('data-url');
    fetch(dataUrl)
    .then(response => response.json())
    .then(data => {
        this.createMap(data.center, data.zoom, data.markers);
    });
  }

  createMap(center, zoom, markers) {
      const map = L.map(this.mapContainer).setView(center, zoom);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      markers.forEach(marker => {
        const leafletMarker = L.marker([marker.lat, marker.lng]).addTo(map);
        leafletMarker.bindPopup(`<b>${marker.popup}</b>`);
      });
  }
}

customElements.define('svenssonom-kartkomponent', KartKomponent);
