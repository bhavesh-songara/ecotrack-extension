# EcoTrack Chrome Extension

The EcoTrack Chrome extension empowers users to make informed, sustainable product choices by providing real-time insights into the environmental impact of the products they interact with online.

## Features

- **Real-Time Sustainability Analysis**: Instantly analyze the sustainability of products while browsing online stores.
- **Image Recognition**: Upload product images to receive detailed sustainability information, including:
  - Carbon footprint
  - Recycling options
  - Sustainability tips
  - Brand initiatives and commitments
- **User-Friendly Interface**: Seamlessly integrates with the browsing experience, offering an intuitive UI for easy access to sustainability data.
- **Demand Signal**: Sends a demand signal to companies, promoting sustainable practices by showing interest in eco-friendly products.

## Tech Stack

- **Frontend Framework**: React.js
- **Chrome Extension API**: Used to integrate the extension into the browser.
- **Styling**: CSS, Tailwind CSS
- **API Communication**: Axios

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/bhavesh-songara/ecotrack-extension.git
   cd ecotrack-extension

   ```

2. **Install dependencies:**

   ```bash
    npm install

   ```

3. **Build the extension:**

   ```bash
    npm run build

   ```

4. **Load the extension in Chrome:**

   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable "Developer mode" in the top right corner.
   - Click "Load unpacked" and select the `dist` folder from the cloned repository.

## Usage

After installation, the EcoTrack icon will appear in the Chrome toolbar.
Click on open side panel to open the extension.
Right click on the image of the product you want to analyze and click on "Track Sustainability" to get detailed sustainability insights for the products you're viewing.
