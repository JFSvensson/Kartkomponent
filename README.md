# KartKomponent med Leaflet.js

KartKomponent är en anpassningsbar webbkomponent som visar en interaktiv karta med markeringar baserat på OpenStreetMap och Leaflet.js. Komponentens data, som kartans centrering och markeringar, konfigureras via externa JSON-filer, vilket gör den flexibel och återanvändbar i olika projekt.

## Funktioner
- Interaktiv karta med stöd för zoom och markeringar.
- Visning av markeringar med popup-fönster och tooltip.
- Konfiguration av kartcentrering och zoom via HTML-attribut eller extern JSON-fil.
- Fullt integrerad med Leaflet.js för anpassad karta och layout.

## Installation

### Steg 1: Ladda ner och inkludera Leaflet.js och KartKomponent
Inkludera både `leaflet.js` och komponentens JavaScript-fil i din HTML-sida. Se till att filerna ligger i samma katalog som din HTML-fil, eller justera filvägarna efter behov.

```html
<link rel="stylesheet" href="leaflet/leaflet.css" />
<script src="leaflet/leaflet.js" defer></script>
<script src="kartkomponent.js" defer></script>
```

### Steg 2: Lägg till komponenten i din HTML
Du lagrar kartcentrering och markeringar i en extern JSON-fil och hämtar dessa via komponenten.

Exempel på JSON-fil (mapData.json):
```json
{
    "center": [59.3293, 18.0686],
    "zoom": 13,
    "markers": [
        {"lat": 59.3293, "lng": 18.0686, "popup": "Skylten 1"},
        {"lat": 59.3273, "lng": 18.0626, "popup": "Skylten 2"}
    ]
}
```

Lägga till komponenten i HTML som laddar JSON-data:

```html
Kopiera kod
<svenssonom-kartkomponent data-url="mapData.json"></svenssonom-kartkomponent>
```

### Användning
#### Attribut
- center (string): Kartans centrering som latitud och longitud. Exempel: "[59.3293, 18.0686]".
- zoom (string): Zoom-nivå för kartan. Exempel: "13".
- markers (string): En JSON-sträng med en array av markeringar som innehåller latitud, longitud och popup-text. Exempel:

```json
'[{"lat": 59.3293, "lng": 18.0686, "popup": "Skylten 1"}]'
```

### Extern JSON
Om du använder attributet data-url, förväntar sig komponenten en JSON-fil med följande struktur:

```json
{
    "center": [lat, lng],
    "zoom": zoomLevel,
    "markers": [
        {"lat": lat, "lng": lng, "popup": "text"}
    ]
}
```

### Exempel
#### Exempel 1: Enkel karta med attribut
Skapa en JSON-fil som innehåller kartdata, till exempel mapData.json:

```json
{
    "center": [59.3293, 18.0686],
    "zoom": 13,
    "markers": [
        {"lat": 59.3293, "lng": 18.0686, "popup": "Skylten 1"},
        {"lat": 59.3273, "lng": 18.0626, "popup": "Skylten 2"}
    ]
}
```

Använd komponenten och ange JSON-filens URL via data-url-attributet:

```html
<svenssonom-kartkomponent data-url="mapData.json"></svenssonom-kartkomponent>
```

### Krav
Leaflet.js: Leaflet.js biblioteket måste inkluderas för att kartkomponenten ska fungera.

### Författare
Denna komponent är utvecklad av Fredrik Svensson och distribueras under MIT-licensen.
