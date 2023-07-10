<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>
  <h1>Battles that helped form the UK</h1>

  <h2>Getting Started</h2>
  <p>To use this project, follow the instructions below:</p>
  <ol>
    <li>Clone the repository or download the HTML file.</li>
    <li>Open the HTML file (`index.html`) in a web browser.</li>
  </ol>

  <h2>Usage</h2>
  <p>Once you have opened the HTML file in a web browser, you will see a map of the United Kingdom with markers representing battle locations. The battles are color-coded with blue circles.</p>
  <p>The side panel on the right-hand side of the page provides additional functionality:</p>
  <ul>
    <li><strong>Sort by Year:</strong> Clicking this button will sort the battles in the table by year in ascending order.</li>
  </ul>
  <p>The table in the side panel displays the following information about each battle:</p>
  <table>
    <tr>
      <th>ID</th>
      <th>Year</th>
      <th>Event</th>
      <th>Achievement</th>
    </tr>
    <!-- Add rows dynamically using JavaScript -->
  </table>

  <h2>Dependencies</h2>
  <p>This project relies on the following libraries and APIs:</p>
  <ul>
    <li><a href="https://docs.mapbox.com/mapbox-gl-js/api/">Mapbox GL JS</a>: A JavaScript library for interactive, customizable maps.</li>
  </ul>

  <h2>Sources</h2>
  <p>The `uk.geojson` file used in this project was obtained from [Kaggle](https://www.kaggle.com/datasets/dorianlazar/uk-regions-geojson?resource=download).</p>
  <p>The `battles.geojson` file used in this project was created with the assistance of ChatGPT.</p>
</body>
</html>
