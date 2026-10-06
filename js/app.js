

function formatPrice(amount) {
  if (typeof amount !== "number") amount = parseFloat(amount) || 0;
  return `Rs. ${Math.round(amount).toLocaleString('en-PK')}`;
}

const PRODUCTS_DATA = [
  {
    id: "lumina-book",
    name: "Lumina X1 Carbon Ultrabook 14''",
    category: "Laptops",
    price: 325000,
    oldPrice: 360000,
    rating: 5.0,
    reviews: 42,
    badge: "FEATURED",
    badgeClass: "",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Ultra-slim carbon fiber body powered by Intel Core Ultra 7 processor, 32GB LPDDR5X RAM, and stunning 2.8K OLED 120Hz display.",
    specs: {
      "Processor": "Intel Core Ultra 7 155H",
      "RAM & Storage": "32GB RAM + 1TB PCIe 4.0 SSD",
      "Display": "14'' 2.8K OLED HDR 120Hz",
      "Weight": "1.09 kg (2.4 lbs)"
    }
  },
  {
    id: "lumina-bud",
    name: "Lumina Studio Earbuds Pro",
    category: "Audio",
    price: 12999,
    oldPrice: 15999,
    rating: 4.7,
    reviews: 88,
    badge: "SALE",
    badgeClass: "",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80"
    ],
    description: "True wireless earbuds with spatial audio tracking, crystal clear quad-mic calls, and Qi wireless charging case.",
    specs: {
      "Audio": "Spatial Audio with Dynamic Head Tracking",
      "Noise Control": "Active Noise Cancellation & Transparency Mode",
      "Battery": "30 Hours total with Wireless Case",
      "Water Resistance": "IPX5 Sweat & Water Resistant"
    }
  },
  {
    id: "lumina-speaker",
    name: "Lumina Soundbar 360 & Subwoofer",
    category: "Smart Home",
    price: 54999,
    oldPrice: 64999,
    rating: 4.8,
    reviews: 64,
    badge: "BESTSELLER",
    badgeClass: "",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Immersive Dolby Atmos surround sound system with wireless subwoofer and integrated voice assistant support.",
    specs: {
      "Channels": "5.1.2 Surround Sound",
      "Total Power": "450W Output",
      "Connectivity": "HDMI eARC, Optical, AirPlay 2, Bluetooth"
    }
  },
  {
    id: "lumina-keyboard",
    name: "Lumina Craft Wireless Mechanical Keyboard",
    category: "Accessories",
    price: 16499,
    oldPrice: 19999,
    rating: 4.8,
    reviews: 77,
    badge: "POPULAR",
    badgeClass: "",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Tactile mechanical keyboard with customizable RGB per-key lighting, hot-swappable switches, and aluminum body.",
    specs: {
      "Switches": "Hot-swappable Lumina Linear Red / Tactile Brown",
      "Layout": "75% Compact Design",
      "Battery": "4000mAh (Up to 200 Hours)"
    }
  },
  {
    id: "lumina-charger",
    name: "Lumina 100W GaN Fast Charger",
    category: "Accessories",
    price: 6999,
    oldPrice: 8999,
    rating: 4.9,
    reviews: 150,
    badge: "SALE",
    badgeClass: "",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Compact 4-port Gallium Nitride (GaN) fast charger capable of simultaneously powering your laptop, phone, and tablet.",
    specs: {
      "Ports": "3x USB-C Power Delivery 3.0 + 1x USB-A QC 4.0",
      "Total Output": "100W Max Output",
      "Safety": "Over-voltage & Over-temperature Protection"
    }
  },
  {
    id: "lumina-hub",
    name: "Lumina Smart Hub Display 10''",
    category: "Smart Home",
    price: 28999,
    oldPrice: 34999,
    rating: 4.7,
    reviews: 39,
    badge: "NEW",
    badgeClass: "badge-new",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Central smart home command station with HD touchscreen, stereo speakers, smart camera shutter, and Matter standard support.",
    specs: {
      "Display": "10.1'' HD Touchscreen",
      "Audio": "Dual 2'' Full Range Drivers + Passive Radiator",
      "Compatibility": "Matter, Zigbee, Apple Home, Google Assistant"
    }
  },
  {
    id: "lumina-ring",
    name: "Lumina Smart Health Ring Gen 2",
    category: "Wearables",
    price: 38999,
    oldPrice: 45999,
    rating: 4.9,
    reviews: 53,
    badge: "NEW",
    badgeClass: "badge-new",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Ultra-lightweight titanium smart ring with medical-grade biometric sensors for sleep tracking, HRV analysis, and 7-day battery life.",
    specs: {
      "Material": "Aerospace-Grade Titanium with PVD Coating",
      "Sensors": "Optical PPG, Skin Temperature, 3D Accelerometer",
      "Water Resistance": "10 ATM (100m Submersible)",
      "Battery Life": "7 Days Continuous Usage + Fast Charging Case"
    }
  },
  {
    id: "lumina-monitor",
    name: "Lumina Vision 27'' 4K QD-OLED Studio Monitor",
    category: "Laptops",
    price: 185000,
    oldPrice: 210000,
    rating: 4.9,
    reviews: 37,
    badge: "HOT",
    badgeClass: "",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Stunning 27-inch 4K QD-OLED display featuring 240Hz refresh rate, 0.03ms response time, 99% DCI-P3 color accuracy, and USB-C 90W power delivery.",
    specs: {
      "Panel Type": "Quantum Dot OLED (3840 x 2160)",
      "Refresh Rate & Response": "240Hz / 0.03ms GtG",
      "Color Gamut": "99% DCI-P3 / Delta E < 1",
      "Ports": "1x USB-C (90W PD), 2x HDMI 2.1, 1x DisplayPort 1.4"
    }
  },
  {
    id: "lumina-light",
    name: "Lumina Glow Smart Ambient Lamp & Lightbar",
    category: "Smart Home",
    price: 7499,
    oldPrice: 9999,
    rating: 4.8,
    reviews: 41,
    badge: "NEW",
    badgeClass: "badge-new",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Dynamic RGBIC ambient desk lamp with music sync, screen color mirroring, smart app control, and Apple Home/Matter integration.",
    specs: {
      "Brightness & LEDs": "1200 Lumens / 16 Million RGBIC Colors",
      "Connectivity": "Wi-Fi 2.4GHz + Bluetooth 5.0 / Matter Supported",
      "Features": "Music Rhythm Sync, Screen Reactive Mode, Schedule Timer",
      "Power Supply": "USB-C 24W Power Adapter"
    }
  },
  {
    id: "lumina-powerbank",
    name: "Lumina Blade 25,000mAh Laptop Power Bank 65W",
    category: "Accessories",
    price: 11999,
    oldPrice: 14499,
    rating: 4.9,
    reviews: 82,
    badge: "POPULAR",
    badgeClass: "",
    image: "https://images.unsplash.com/photo-1609592424350-bbd493a1005a?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1609592424350-bbd493a1005a?auto=format&fit=crop&w=600&q=80"
    ],
    description: "High-capacity 25,000mAh portable power bank with 65W Power Delivery output, smart TFT digital status screen, and aircraft-safe aluminum enclosure.",
    specs: {
      "Capacity": "25,000mAh / 92.5Wh (Flight Approved)",
      "Output Ports": "2x USB-C (65W Max PD) + 1x USB-A (22.5W QC)",
      "Display": "Color Digital Smart Screen (Watts, Volts, Remaining %)",
      "Recharge Time": "Fully charged in 90 minutes with 65W charger"
    }
  },
  {
    id: "lumina-boom",
    name: "Lumina Pulse Waterproof Portable Bluetooth Speaker",
    category: "Audio",
    price: 9499,
    oldPrice: 11999,
    rating: 4.8,
    reviews: 69,
    badge: "NEW",
    badgeClass: "badge-new",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Rugged 30W outdoor portable Bluetooth speaker featuring 360-degree bass radiators, beat-driven RGB lighting rings, and IP67 waterproof floating design.",
    specs: {
      "Audio Output": "30W Stereo with Dual Bass Passive Radiators",
      "Water Resistance": "IP67 Dustproof & Submersible Waterproof",
      "Battery Life": "Up to 24 Hours Playtime (Fast USB-C Charging)",
      "Connectivity": "Bluetooth 5.3 + TWS Stereo Pairing"
    }
  },
  {
    id: "lumina-watch",
    name: "Lumina Chrono Ultra Titanium Smartwatch",
    category: "Wearables",
    price: 42999,
    oldPrice: 49999,
    rating: 4.9,
    reviews: 76,
    badge: "NEW",
    badgeClass: "badge-new",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Flagship aerospace-grade titanium smartwatch with sapphire crystal display, dual-frequency GPS, comprehensive heart & SpO2 health tracking, and 14-day battery life.",
    specs: {
      "Display": "1.43'' AMOLED Always-On (1000 Nits Sapphire Glass)",
      "Materials": "Grade 5 Titanium Case with Fluoroelastomer Strap",
      "Health Tracking": "ECG, SpO2, Heart Rate, Stress & Sleep Analysis",
      "Water Resistance & Battery": "5 ATM + IP68 Water Resistance / 14-Day Battery"
    }
  },
  {
    id: "lumina-headphones",
    name: "Lumina Aura Wireless ANC Studio Headphones",
    category: "Audio",
    price: 29999,
    oldPrice: 34999,
    rating: 4.9,
    reviews: 112,
    badge: "BESTSELLER",
    badgeClass: "",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Flagship over-ear wireless headphones with custom 40mm beryllium drivers, hybrid active noise cancellation, lossless LDAC codec support, and 50 hours of battery life.",
    specs: {
      "Acoustic Drivers": "Custom 40mm Beryllium Diaphragm Drivers",
      "Noise Cancellation": "Hybrid Active Noise Cancellation & Transparency Mode",
      "Battery & Charging": "Up to 50 Hours Playback (10 min charge = 5 hours play)",
      "Connectivity & Codecs": "Bluetooth 5.4, LDAC, aptX Adaptive, AAC & 3.5mm Lossless"
    }
  },
  {
    id: "lumina-tab",
    name: "Lumina Pad Pro 12.9'' OLED Creative Tablet",
    category: "Laptops",
    price: 145000,
    oldPrice: 165000,
    rating: 4.9,
    reviews: 58,
    badge: "NEW",
    badgeClass: "badge-new",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Professional creative tablet featuring 12.9-inch 120Hz tandem OLED display, Lumina Pen Pro active stylus support, high-performance octa-core chipset, and all-day battery life.",
    specs: {
      "Display": "12.9'' Ultra Retina Tandem OLED (2732 x 2048, 120Hz)",
      "Processor & Memory": "Octa-Core AI Chipset / 16GB RAM + 512GB Storage",
      "Stylus & Accessories": "Lumina Magnetic Wireless Pen & Smart Folio Support",
      "Battery & OS": "10,200mAh (Up to 14 Hours) / LuminaOS Touch"
    }
  },
  {
    id: "lumina-mouse",
    name: "Lumina Apex Master Wireless Ergonomic Mouse",
    category: "Accessories",
    price: 14999,
    oldPrice: 17999,
    rating: 4.9,
    reviews: 64,
    badge: "NEW",
    badgeClass: "badge-new",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80"
    ],
    description: "High-precision wireless ergonomic mouse featuring electromagnetic MagSpeed scrolling, 8,000 DPI Darkfield sensor, multi-device cross-computer flow, and whisper-quiet click switches.",
    specs: {
      "Sensor": "8,000 DPI Darkfield High-Precision Optical Sensor",
      "Battery Life": "Up to 70 days on full charge (USB-C Quick Charge)",
      "Connectivity": "Bluetooth Low Energy & 2.4GHz Wireless Receiver (Pair up to 3 devices)",
      "Ergonomics": "Sculpted ergonomic grip with gesture button & thumb wheel"
    }
  },
  {
    id: "lumina-glasses",
    name: "Lumina Vision AR Smart Audio Glasses",
    category: "Wearables",
    price: 49999,
    oldPrice: 59999,
    rating: 4.9,
    reviews: 51,
    badge: "NEW",
    badgeClass: "badge-new",
    image: "https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Next-generation smart eyewear with integrated micro-OLED heads-up display, directional open-ear acoustic speakers, voice AI assistant, and lightweight titanium frame.",
    specs: {
      "Display": "Dual Micro-OLED Waveguide Heads-Up Display (1080p equivalent)",
      "Audio": "Open-Ear Directional Stereo Speakers with Dual Beamforming Mics",
      "Battery Life": "Up to 8 Hours Continuous Playback / 48 Hours with Charging Case",
      "Connectivity & Protection": "Bluetooth 5.4, IPX4 Water Resistance, UVA/UVB 100% Protection"
    }
  },
  {
    id: "lumina-mic",
    name: "Lumina Stream Pro Studio Condenser Microphone",
    category: "Audio",
    price: 21999,
    oldPrice: 25999,
    rating: 4.8,
    reviews: 47,
    badge: "NEW",
    badgeClass: "badge-new",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Professional USB & XLR broadcast condenser microphone with 192kHz/24-bit high-resolution audio recording, dual polar patterns, zero-latency headphone monitoring, and integrated shock mount.",
    specs: {
      "Acoustic Principle": "25mm Large Studio Condenser Capsule",
      "Polar Patterns": "Cardioid & Omnidirectional Switchable",
      "Sample Rate & Resolution": "192kHz / 24-bit High-Fidelity Recording",
      "Connectivity": "USB-C Digital & 3-Pin Balanced XLR Outputs + 3.5mm Monitor"
    }
  },
  {
    id: "lumina-mini-pc",
    name: "Lumina Nova Mini Pro AI Desktop PC",
    category: "Laptops",
    price: 165000,
    oldPrice: 189000,
    rating: 4.9,
    reviews: 38,
    badge: "NEW",
    badgeClass: "badge-new",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=600&q=80"
    ],
    description: "High-performance ultra-compact AI workstation featuring AMD Ryzen 9 8945HS processor, integrated Radeon 780M graphics, 32GB DDR5 RAM, and quad 4K display output support.",
    specs: {
      "Processor & NPU": "AMD Ryzen 9 8945HS (8 Cores / 16 Threads + 38 TOPS NPU)",
      "Memory & Storage": "32GB DDR5-5600MHz RAM + 1TB PCIe 4.0 NVMe SSD",
      "Graphics": "AMD Radeon 780M Integrated Graphics (RDNA 3)",
      "Ports & Connectivity": "2x USB4 40Gbps, 2x HDMI 2.1, 2.5GbE LAN, Wi-Fi 6E & Bluetooth 5.3"
    }
  },
  {
    id: "lumina-vr",
    name: "Lumina Horizon 4K Spatial VR Headset",
    category: "Wearables",
    price: 89999,
    oldPrice: 105000,
    rating: 4.9,
    reviews: 44,
    badge: "NEW",
    badgeClass: "badge-new",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Next-generation standalone spatial VR headset featuring dual 4K micro-OLED displays, precision inside-out tracking, spatial audio, and ultra-lightweight ergonomic counter-balance design.",
    specs: {
      "Display": "Dual 4K Micro-OLED (120Hz Refresh Rate, 110° FOV)",
      "Tracking & Audio": "6 DoF Inside-Out Optical Tracking & Spatial 3D Audio",
      "Processor & Storage": "Snapdragon XR2+ Gen 2 / 16GB RAM + 512GB Storage",
      "Battery & Weight": "Up to 3.5 Hours Playback / 420g Ultra-Balanced Frame"
    }
  },
  {
    id: "lumina-projector",
    name: "Lumina Beam Ultra 4K Smart Laser Projector",
    category: "Smart Home",
    price: 119999,
    oldPrice: 135000,
    rating: 4.9,
    reviews: 52,
    badge: "NEW",
    badgeClass: "badge-new",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Flagship 4K UHD smart laser projector featuring 3,000 ANSI lumens, HDR10+, motorized auto-focus & keystone alignment, built-in Harman Kardon acoustics, and Google TV integration.",
    specs: {
      "Resolution & Brightness": "4K UHD (3840 x 2160) / 3,000 ANSI Lumens",
      "Projection Size": "60'' to 200'' Ultra-Short Throw / Precision Autofocus",
      "Audio System": "Dual 15W Harman Kardon Speakers with Dolby Audio",
      "Connectivity": "Wi-Fi 6, Bluetooth 5.2, 2x HDMI 2.1 (eARC), USB 3.0"
    }
  },
  {
    id: "lumina-drone",
    name: "Lumina SkyView 4K Pro GPS Foldable Drone",
    category: "Accessories",
    price: 74999,
    oldPrice: 89999,
    rating: 4.9,
    reviews: 48,
    badge: "NEW",
    badgeClass: "badge-new",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Ultra-compact foldable quadcopter drone featuring 4K/60fps HDR video, 3-axis mechanical gimbal, omnidirectional obstacle avoidance, 12km transmission range, and 38-minute flight time.",
    specs: {
      "Camera & Gimbal": "4K/60fps HDR (1/1.3-inch CMOS) + 3-Axis Mechanical Gimbal",
      "Flight Performance": "Up to 38 Mins Flight Time / Level 5 Wind Resistance",
      "Transmission & Range": "12km FHD Video Transmission (O3+ Technology)",
      "Intelligent Features": "Omnidirectional Obstacle Sensing & AI Subject Tracking"
    }
  },
  {
    id: "lumina-cam",
    name: "Lumina Sentinel 4K AI Outdoor Security Camera",
    category: "Smart Home",
    price: 18999,
    oldPrice: 22999,
    rating: 4.8,
    reviews: 63,
    badge: "NEW",
    badgeClass: "badge-new",
    image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Weatherproof 4K HDR smart security camera with solar charging support, color night vision, AI person and vehicle detection, two-way intercom, and local encrypted storage.",
    specs: {
      "Video & Optics": "4K Ultra HD (3840 x 2160) with 140° Ultra-Wide FOV",
      "Night Vision & Lighting": "Full Color Night Vision + 600-Lumen Motion Spotlight",
      "Power & Battery": "Integrated Solar Panel + 10,000mAh Battery (365-Day Power)",
      "Protection & Storage": "IP67 Weatherproof / MicroSD up to 256GB + Cloud Backup"
    }
  },
  {
    id: "lumina-blade-pro",
    name: "Lumina Blade Pro 16'' RTX 4080 Gaming & Studio Laptop",
    category: "Laptops",
    price: 395000,
    oldPrice: 435000,
    rating: 5.0,
    reviews: 34,
    badge: "FEATURED",
    badgeClass: "",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Extreme performance powerhouse engineered with Intel Core i9-14900HX, NVIDIA GeForce RTX 4080 12GB GDDR6, 64GB DDR5 RAM, and a breathtaking 16-inch 240Hz Mini-LED display.",
    specs: {
      "Processor": "Intel Core i9-14900HX (24 Cores / 32 Threads, up to 5.8 GHz)",
      "Graphics & Display": "NVIDIA GeForce RTX 4080 12GB GDDR6 / 16'' Mini-LED 240Hz (1000 Nits)",
      "Memory & Storage": "64GB DDR5-5600MHz RAM + 2TB PCIe 4.0 NVMe SSD",
      "Cooling & Battery": "Vapor Chamber Liquid Metal Cooling / 99.9Wh Battery (Flight Approved)"
    }
  },
  {
    id: "lumina-monitors",
    name: "Lumina Wave Hi-Fi Desktop Studio Reference Monitors",
    category: "Audio",
    price: 36999,
    oldPrice: 42999,
    rating: 4.9,
    reviews: 57,
    badge: "NEW",
    badgeClass: "badge-new",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1545127398-14699f92334b?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Pair of premium bi-amplified active studio reference monitors featuring 5-inch Kevlar woofers, 1-inch silk dome tweeters, Bluetooth 5.3 wireless streaming, and balanced TRS inputs.",
    specs: {
      "Drivers": "5'' Woven Kevlar Low-Frequency Woofer + 1'' Silk Dome Tweeter",
      "Power Output": "120W Total RMS (60W per speaker) Class-D Bi-Amplifier",
      "Frequency Response": "48Hz - 22kHz Flat Acoustic Response",
      "Connectivity": "Balanced 1/4'' TRS, RCA, 3.5mm AUX & Bluetooth 5.3 aptX HD"
    }
  },
  {
    id: "lumina-halo-band",
    name: "Lumina Halo AI Biometric Recovery & Fitness Smart Band",
    category: "Wearables",
    price: 19999,
    oldPrice: 24999,
    rating: 4.8,
    reviews: 71,
    badge: "NEW",
    badgeClass: "badge-new",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Screenless ultra-lightweight biometric smart band designed for 24/7 continuous health tracking, HRV strain analysis, deep sleep staging, skin temperature metrics, and 10-day battery life.",
    specs: {
      "Biometric Sensors": "5-LED PPG Sensor, Skin Temp, EDA Stress & 3D Gyro",
      "Design & Comfort": "Screen-free Featherweight (21g) with Breathable ProKnit Strap",
      "Battery Life": "Up to 10 Days Continuous Tracking + Wireless Slide-on Battery Pack",
      "Durability": "5 ATM Water-Resistant (Safe for Swimming & Showers)"
    }
  },
  {
    id: "lumina-dock-station",
    name: "Lumina Thunderbolt 4 Pro Docking Station 16-in-1",
    category: "Accessories",
    price: 48999,
    oldPrice: 56999,
    rating: 4.9,
    reviews: 39,
    badge: "NEW",
    badgeClass: "badge-new",
    image: "https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Comprehensive 16-in-1 Thunderbolt 4 workspace dock delivering 96W power delivery, dual 4K/8K display output, 2.5Gb Ethernet, UHS-II SD card reader, and ultra-fast 40Gbps data transfer.",
    specs: {
      "Ports": "2x Thunderbolt 4 (40Gbps), 4x USB-A 10Gbps, 2x HDMI 2.1, 1x DP 1.4, 2.5G LAN",
      "Power Delivery": "96W Host Charging + 15W Downstream Ports",
      "Display Support": "Dual 4K @ 60Hz or Single 8K @ 30Hz",
      "Enclosure": "Solid Anodized Aluminum Enclosure with Thermal Vents"
    }
  },
  {
    id: "lumina-mesh-router",
    name: "Lumina NetMesh Pro Tri-Band Wi-Fi 7 Router System",
    category: "Smart Home",
    price: 62999,
    oldPrice: 74999,
    rating: 4.9,
    reviews: 45,
    badge: "NEW",
    badgeClass: "badge-new",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Ultra-fast Wi-Fi 7 mesh system delivering up to 19Gbps speeds across 320MHz channels, seamless whole-home coverage up to 6,000 sq ft, 10GbE WAN/LAN ports, and AI network security.",
    specs: {
      "Speed & Standards": "Tri-Band Wi-Fi 7 (BE19000) with 320MHz Channel Width",
      "Coverage": "Up to 6,000 sq ft with Multi-Link Operation (MLO)",
      "Ports": "2x 10GbE Ports + 4x 2.5GbE Ports per Node",
      "Security": "LuminaShield AI Real-time Threat Protection & Parental Controls"
    }
  },
  {
    id: "lumina-ergo-chair",
    name: "Lumina Motion Pro Executive Ergonomic Desk Chair",
    category: "Accessories",
    price: 54999,
    oldPrice: 64999,
    rating: 4.9,
    reviews: 58,
    badge: "POPULAR",
    badgeClass: "",
    image: "https://images.unsplash.com/photo-1580481072645-022f9a6d1270?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1580481072645-022f9a6d1270?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Ergonomic mesh office chair engineered with dynamic auto-adjusting lumbar support, 4D multi-directional armrests, breathable Italian mesh, and synchronous recline mechanism.",
    specs: {
      "Lumbar Support": "Dynamic Self-Adjusting Lower Lumbar Matrix",
      "Armrests": "4D Height, Depth, Angle & Width Adjustable",
      "Material": "Ultra-Breathable Italian Wintex Mesh & Alloy Base",
      "Max Weight & Recline": "Up to 150 kg (330 lbs) / 135° Locking Tilt Recline"
    }
  },
  {
    id: "lumina-dual-screen",
    name: "Lumina Edge 15.6'' Dual-Screen Portable OLED Monitor",
    category: "Accessories",
    price: 89999,
    oldPrice: 105000,
    rating: 5.0,
    reviews: 29,
    badge: "NEW",
    badgeClass: "badge-new",
    image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Innovative dual 15.6-inch 4K OLED touchscreen portable monitor with 360-degree folding kickstand, single USB-C cable operation, and 100% DCI-P3 color gamut.",
    specs: {
      "Display": "Dual 15.6'' 4K OLED (3840 x 2160 x 2) Touchscreens",
      "Brightness & Color": "500 Nits HDR / 100% DCI-P3 / 1ms Response Time",
      "Connectivity": "Dual USB-C Full-Featured + Mini HDMI 2.1",
      "Stand & Design": "360° Rotating Ergonomic Kickstand / Ultra-Slim 9mm Profile"
    }
  },
  {
    id: "lumina-ai-companion",
    name: "Lumina Sphere AI Desktop Companion & Smart Speaker",
    category: "Smart Home",
    price: 24999,
    oldPrice: 29999,
    rating: 4.9,
    reviews: 33,
    badge: "NEW",
    badgeClass: "badge-new",
    image: "https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Futuristic spherical desktop AI companion featuring a circular AMOLED display, 360-degree spatial audio, quad microphone array, and expressive voice & gesture interactions.",
    specs: {
      "Display & Expressiveness": "2.1'' Circular Touch AMOLED (Mood Animations & Smart Widgets)",
      "Audio System": "360° Spatial Sound with Dynamic Room Tuning & Quad Array Mics",
      "Connectivity & AI": "Wi-Fi 6E, Bluetooth 5.4, On-device Local AI Processing Engine",
      "Power": "USB-C Fast Charging + 12-Hour Built-in Battery Backup"
    }
  }
];



const LuminaStore = {
  getCart() {
    const data = localStorage.getItem("lumina_cart");
    if (!data) return [];
    try {
      const items = JSON.parse(data);
      return items
        .filter(item => PRODUCTS_DATA.some(p => p.id === item.id))
        .map(item => {
          const prod = PRODUCTS_DATA.find(p => p.id === item.id);
          if (prod) {
            return { ...item, price: prod.price, name: prod.name, image: prod.image, category: prod.category };
          }
          return item;
        });
    } catch (e) {
      return [];
    }
  },

  saveCart(cart) {
    localStorage.setItem("lumina_cart", JSON.stringify(cart));
    this.updateBadges();
  },

  addToCart(productId, qty = 1) {
    const cart = this.getCart();
    const existing = cart.find(item => item.id === productId);
    if (existing) {
      existing.qty += parseInt(qty);
    } else {
      const prod = PRODUCTS_DATA.find(p => p.id === productId);
      if (prod) {
        cart.push({
          id: prod.id,
          name: prod.name,
          price: prod.price,
          image: prod.image,
          category: prod.category,
          qty: parseInt(qty)
        });
      }
    }
    this.saveCart(cart);
    this.showToast(`Added to your cart!`, "success");
  },

  removeFromCart(productId) {
    let cart = this.getCart();
    cart = cart.filter(item => item.id !== productId);
    this.saveCart(cart);
    this.showToast(`Item removed from cart.`, "info");
  },

  updateCartQty(productId, qty) {
    let cart = this.getCart();
    const item = cart.find(i => i.id === productId);
    if (item) {
      item.qty = Math.max(1, parseInt(qty));
      this.saveCart(cart);
    }
  },

  getWishlist() {
    const data = localStorage.getItem("lumina_wishlist");
    const ids = data ? JSON.parse(data) : [];
    return ids.filter(id => PRODUCTS_DATA.some(p => p.id === id));
  },

  saveWishlist(wishlist) {
    localStorage.setItem("lumina_wishlist", JSON.stringify(wishlist));
    this.updateBadges();
  },

  toggleWishlist(productId) {
    let wishlist = this.getWishlist();
    const index = wishlist.indexOf(productId);
    if (index > -1) {
      wishlist.splice(index, 1);
      this.showToast("Removed from Wishlist", "info");
    } else {
      wishlist.push(productId);
      this.showToast("Added to Wishlist!", "success");
    }
    this.saveWishlist(wishlist);
    return wishlist.includes(productId);
  },

  updateBadges() {
    const cart = this.getCart();
    const wishlist = this.getWishlist();

    const cartCount = cart.reduce((total, item) => total + item.qty, 0);
    const cartBadges = document.querySelectorAll(".cart-badge-count");
    cartBadges.forEach(el => el.textContent = cartCount);

    const wishlistBadges = document.querySelectorAll(".wishlist-badge-count");
    wishlistBadges.forEach(el => el.textContent = wishlist.length);
  },

  showToast(message, type = "success") {
    let container = document.querySelector(".toast-container");
    if (!container) {
      container = document.createElement("div");
      container.className = "toast-container";
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <i class="${type === 'success' ? 'fas fa-check-circle' : 'fas fa-info-circle'}"></i>
      <span>${message}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 3000);
  }
};

function createProductCardHTML(product) {
  const wishlist = LuminaStore.getWishlist();
  const isWishlisted = wishlist.includes(product.id);

  return `
    <article class="product-card">
      ${product.badge ? `<span class="product-badge ${product.badgeClass}">${product.badge}</span>` : ''}
      <button class="product-wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="handleWishlistClick(event, '${product.id}')" title="Add to Wishlist">
        <i class="${isWishlisted ? 'fas' : 'far'} fa-heart"></i>
      </button>
      <div class="product-thumb">
        <a href="product-detail.html?id=${product.id}">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
        </a>
      </div>
      <div class="product-details">
        <span class="product-category">${product.category}</span>
        <h3 class="product-title">
          <a href="product-detail.html?id=${product.id}">${product.name}</a>
        </h3>
        <div class="product-rating">
          <i class="fas fa-star"></i>
          <span>${product.rating}</span>
          <span class="rating-count">(${product.reviews})</span>
        </div>
        <div class="product-price-row">
          <div>
            <span class="product-price">${formatPrice(product.price)}</span>
            ${product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : ''}
          </div>
          <button class="btn btn-primary btn-sm" onclick="LuminaStore.addToCart('${product.id}')">
            <i class="fas fa-shopping-cart"></i> Add
          </button>
        </div>
      </div>
    </article>
  `;
}

function handleWishlistClick(event, productId) {
  event.preventDefault();
  event.stopPropagation();
  const isActive = LuminaStore.toggleWishlist(productId);
  const btn = event.currentTarget;
  const icon = btn.querySelector("i");
  if (isActive) {
    btn.classList.add("active");
    icon.className = "fas fa-heart";
  } else {
    btn.classList.remove("active");
    icon.className = "far fa-heart";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  LuminaStore.updateBadges();

  const mobileToggleBtn = document.querySelector(".mobile-toggle");
  const navMenu = document.querySelector(".nav-menu");
  if (mobileToggleBtn && navMenu) {
    mobileToggleBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
  }

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });

  const featuredGrid = document.getElementById("featured-products-grid");
  if (featuredGrid) {
    featuredGrid.innerHTML = PRODUCTS_DATA.map(createProductCardHTML).join("");
  }

  const shopGrid = document.getElementById("shop-products-grid");
  if (shopGrid) {
    let currentProducts = [...PRODUCTS_DATA];

    const renderShop = (items) => {
      if (items.length === 0) {
        shopGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
          <i class="fas fa-box-open" style="font-size: 3rem; color: #94A3B8; margin-bottom: 1rem;"></i>
          <h3>No products found matching your filters.</h3>
        </div>`;
      } else {
        shopGrid.innerHTML = items.map(createProductCardHTML).join("");
      }
    };

    renderShop(currentProducts);

    const searchInput = document.getElementById("shop-search-input");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = PRODUCTS_DATA.filter(p => p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query));
        renderShop(filtered);
      });
    }

    const categoryCheckboxes = document.querySelectorAll(".category-filter-checkbox");
    if (categoryCheckboxes.length > 0) {
      categoryCheckboxes.forEach(box => {
        box.addEventListener("change", () => {
          const selected = Array.from(categoryCheckboxes).filter(cb => cb.checked).map(cb => cb.value);
          if (selected.length === 0) {
            renderShop(PRODUCTS_DATA);
          } else {
            renderShop(PRODUCTS_DATA.filter(p => selected.includes(p.category)));
          }
        });
      });
    }

    const sortSelect = document.getElementById("shop-sort-select");
    if (sortSelect) {
      sortSelect.addEventListener("change", (e) => {
        const val = e.target.value;
        let sorted = [...currentProducts];
        if (val === "price-low") sorted.sort((a, b) => a.price - b.price);
        if (val === "price-high") sorted.sort((a, b) => b.price - a.price);
        if (val === "rating") sorted.sort((a, b) => b.rating - a.rating);
        renderShop(sorted);
      });
    }
  }

  const categoryPageContainer = document.getElementById("category-page-container");
  if (categoryPageContainer) {
    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get("cat");
    const titleEl = document.getElementById("category-title");

    let filtered = PRODUCTS_DATA;
    if (catParam) {
      filtered = PRODUCTS_DATA.filter(p => p.category.toLowerCase() === catParam.toLowerCase());
      if (titleEl) titleEl.textContent = `Category: ${catParam}`;
    }
    categoryPageContainer.innerHTML = filtered.map(createProductCardHTML).join("");
  }

  const detailContainer = document.getElementById("product-detail-section");
  if (detailContainer) {
    const urlParams = new URLSearchParams(window.location.search);
    const prodId = urlParams.get("id") || (PRODUCTS_DATA[0] ? PRODUCTS_DATA[0].id : "lumina-book");
    const product = PRODUCTS_DATA.find(p => p.id === prodId) || PRODUCTS_DATA[0];

    document.getElementById("detail-title").textContent = product.name;
    document.getElementById("detail-category").textContent = product.category;
    document.getElementById("detail-price").textContent = formatPrice(product.price);
    if (product.oldPrice) {
      document.getElementById("detail-old-price").textContent = formatPrice(product.oldPrice);
    }
    document.getElementById("detail-description").textContent = product.description;
    document.getElementById("detail-rating").textContent = product.rating;
    document.getElementById("detail-reviews").textContent = `(${product.reviews} customer reviews)`;
    
    const mainImg = document.getElementById("detail-main-img");
    if (mainImg) mainImg.src = product.image;

    const thumbList = document.getElementById("detail-thumb-list");
    if (thumbList && product.gallery) {
      thumbList.innerHTML = product.gallery.map((imgUrl, index) => `
        <div class="thumb-item ${index === 0 ? 'active' : ''}" onclick="switchDetailImage('${imgUrl}', this)">
          <img src="${imgUrl}" alt="Thumbnail">
        </div>
      `).join("");
    }

    let currentQty = 1;
    const qtyInput = document.getElementById("detail-qty-input");
    const decBtn = document.getElementById("detail-qty-minus");
    const incBtn = document.getElementById("detail-qty-plus");

    if (decBtn && incBtn && qtyInput) {
      decBtn.addEventListener("click", () => {
        if (currentQty > 1) {
          currentQty--;
          qtyInput.value = currentQty;
        }
      });
      incBtn.addEventListener("click", () => {
        currentQty++;
        qtyInput.value = currentQty;
      });
    }

    const addCartBtn = document.getElementById("detail-add-cart-btn");
    if (addCartBtn) {
      addCartBtn.addEventListener("click", () => {
        LuminaStore.addToCart(product.id, qtyInput ? qtyInput.value : 1);
      });
    }

    const addWishlistBtn = document.getElementById("detail-wishlist-btn");
    if (addWishlistBtn) {
      addWishlistBtn.addEventListener("click", () => {
        LuminaStore.toggleWishlist(product.id);
      });
    }

    const specsDl = document.getElementById("detail-specs-dl");
    if (specsDl && product.specs) {
      specsDl.innerHTML = Object.entries(product.specs).map(([key, val]) => `
        <dt>${key}</dt>
        <dd>${val}</dd>
      `).join("");
    }
  }

  const cartTableBody = document.getElementById("cart-table-body");
  if (cartTableBody) {
    renderCartPage();
  }

  const wishlistGrid = document.getElementById("wishlist-products-grid");
  if (wishlistGrid) {
    renderWishlistPage();
  }

  const checkoutSummaryList = document.getElementById("checkout-summary-list");
  if (checkoutSummaryList) {
    renderCheckoutPage();
  }
});

function switchDetailImage(src, thumbElement) {
  const mainImg = document.getElementById("detail-main-img");
  if (mainImg) mainImg.src = src;

  const thumbs = document.querySelectorAll(".thumb-item");
  thumbs.forEach(t => t.classList.remove("active"));
  thumbElement.classList.add("active");
}

function switchTab(tabId, btnElement) {
  const tabs = document.querySelectorAll(".tab-content");
  tabs.forEach(t => t.classList.remove("active"));

  const btns = document.querySelectorAll(".tab-btn");
  btns.forEach(b => b.classList.remove("active"));

  document.getElementById(tabId).classList.add("active");
  btnElement.classList.add("active");
}

function renderCartPage() {
  const cartTableBody = document.getElementById("cart-table-body");
  const cart = LuminaStore.getCart();
  const subtotalEl = document.getElementById("cart-subtotal");
  const totalEl = document.getElementById("cart-total");

  if (cart.length === 0) {
    document.getElementById("cart-content-wrapper").innerHTML = `
      <div style="text-align: center; padding: 4rem 1rem; background: var(--surface); border-radius: var(--radius-md); border: 1px solid var(--border-color);">
        <i class="fas fa-shopping-bag" style="font-size: 3.5rem; color: #CBD5E1; margin-bottom: 1rem;"></i>
        <h2>Your Shopping Cart is Empty</h2>
        <p style="color: var(--text-muted); margin: 1rem 0 2rem;">Looks like you haven't added any premium products yet.</p>
        <a href="shop.html" class="btn btn-primary">Start Shopping Now</a>
      </div>
    `;
    return;
  }

  let subtotal = 0;
  cartTableBody.innerHTML = cart.map(item => {
    const itemSubtotal = item.price * item.qty;
    subtotal += itemSubtotal;
    return `
      <tr>
        <td>
          <div class="cart-product-item">
            <img src="${item.image}" alt="${item.name}" class="cart-product-img">
            <div>
              <h4 style="font-size: 1rem; font-weight: 700;">${item.name}</h4>
              <span style="font-size: 0.8rem; color: var(--text-muted);">${item.category}</span>
            </div>
          </div>
        </td>
        <td style="font-weight: 700;">${formatPrice(item.price)}</td>
        <td>
          <div class="quantity-picker" style="width: 100px; height: 36px;">
            <button class="quantity-btn" onclick="updateCartItemQty('${item.id}', ${item.qty - 1})">-</button>
            <input type="text" class="quantity-input" value="${item.qty}" readonly>
            <button class="quantity-btn" onclick="updateCartItemQty('${item.id}', ${item.qty + 1})">+</button>
          </div>
        </td>
        <td style="font-weight: 700; color: var(--primary);">${formatPrice(itemSubtotal)}</td>
        <td>
          <button class="remove-btn" onclick="LuminaStore.removeFromCart('${item.id}'); renderCartPage();" title="Remove item">
            <i class="fas fa-trash-alt"></i>
          </button>
        </td>
      </tr>
    `;
  }).join("");

  const shipping = subtotal > 5000 ? 0 : 250;
  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
  if (totalEl) totalEl.textContent = formatPrice(subtotal + shipping);
}

function updateCartItemQty(id, newQty) {
  if (newQty < 1) return;
  LuminaStore.updateCartQty(id, newQty);
  renderCartPage();
}

function renderWishlistPage() {
  const wishlistGrid = document.getElementById("wishlist-products-grid");
  const wishlistIds = LuminaStore.getWishlist();
  const wishlistedProducts = PRODUCTS_DATA.filter(p => wishlistIds.includes(p.id));

  if (wishlistedProducts.length === 0) {
    wishlistGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; background: var(--surface); border-radius: var(--radius-md); border: 1px solid var(--border-color);">
        <i class="far fa-heart" style="font-size: 3.5rem; color: #CBD5E1; margin-bottom: 1rem;"></i>
        <h2>Your Wishlist is Empty</h2>
        <p style="color: var(--text-muted); margin: 1rem 0 2rem;">Save items you love by clicking the heart icon on any product.</p>
        <a href="shop.html" class="btn btn-primary">Explore Products</a>
      </div>
    `;
    return;
  }

  wishlistGrid.innerHTML = wishlistedProducts.map(createProductCardHTML).join("");
}

function renderCheckoutPage() {
  const checkoutSummaryList = document.getElementById("checkout-summary-list");
  const cart = LuminaStore.getCart();

  if (cart.length === 0) {
    window.location.href = "cart.html";
    return;
  }

  let subtotal = 0;
  checkoutSummaryList.innerHTML = cart.map(item => {
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;
    return `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; font-size: 0.95rem;">
        <div>
          <span style="font-weight: 600;">${item.name}</span>
          <span style="color: var(--text-muted);"> x ${item.qty}</span>
        </div>
        <span style="font-weight: 700;">${formatPrice(itemTotal)}</span>
      </div>
    `;
  }).join("");

  const shipping = subtotal > 5000 ? 0 : 250;
  document.getElementById("checkout-subtotal").textContent = formatPrice(subtotal);
  document.getElementById("checkout-total").textContent = formatPrice(subtotal + shipping);

  const form = document.getElementById("checkout-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const orderId = "LUM-" + Math.floor(100000 + Math.random() * 900000);
      localStorage.setItem("lumina_last_order", JSON.stringify({
        orderId: orderId,
        items: cart,
        total: formatPrice(subtotal + shipping),
        date: new Date().toLocaleDateString()
      }));

      LuminaStore.saveCart([]);
      window.location.href = `thank-you.html?order=${orderId}`;
    });
  }
}
