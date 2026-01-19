# Glass Thermostat UI

A sleek, interactive thermostat interface featuring modern glassmorphism design with a glowing mercury column and dual temperature scales.

![Glass Thermostat UI](screenshot.png)

## Features

- 🎨 **Glassmorphism Design** - Beautiful frosted glass effect with depth and shadows
- 🌡️ **Dual Temperature Scales** - Celsius (left) and Fahrenheit (right) displayed simultaneously
- 🖱️ **Interactive Controls** - Smooth drag interaction to adjust temperature
- 💚 **Glowing Mercury Effect** - Dynamic visual feedback with neon green glow
- 📱 **Responsive** - Works seamlessly on desktop and mobile devices
- ⚡ **No Dependencies** - Pure vanilla HTML, CSS, and JavaScript
- 🎯 **Real-time Updates** - Instant temperature display and status feedback

## Demo

Drag the glowing knob up or down to adjust the temperature. Watch the mercury column rise and fall, with real-time updates showing both Celsius and Fahrenheit values.

**Temperature Ranges:**
- Cold: < 15°C (59°F)
- Cool: 15-24°C (59-75°F)
- Comfortable: 25-29°C (77-84°F)
- Warm: 30-34°C (86-93°F)
- Hot: ≥ 35°C (95°F)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/glass-thermostat-ui.git
```

2. Navigate to the project directory:
```bash
cd glass-thermostat-ui
```

3. Open `index.html` in your browser:
```bash
open index.html
```

That's it! No build process or dependencies required.

## File Structure

```
glass-thermostat-ui/
│
├── index.html      # Main HTML structure
├── style.css       # Complete styling with glassmorphism effects
├── script.js       # Interactive functionality
└── README.md       # Project documentation
```

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Glassmorphism, gradients, animations, and responsive design
- **JavaScript (ES6+)** - Interactive drag controls and temperature calculations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Adjust Temperature Range
Edit `MIN_TEMP` and `MAX_TEMP` in `script.js`:
```javascript
const MIN_TEMP = 0;   // Minimum temperature in Celsius
const MAX_TEMP = 100; // Maximum temperature in Celsius
```

### Change Colors
Modify the CSS variables in `style.css`:
```css
/* Mercury color */
background: linear-gradient(180deg, #9aff9a, #32ff6a);

/* Glow effect */
box-shadow: 0 0 12px rgba(80, 255, 120, 0.8);
```

### Adjust Glass Effect
Fine-tune the glassmorphism in `style.css`:
```css
backdrop-filter: blur(20px);
background: linear-gradient(180deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.03));
```

## Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

Created with ❤️ by [Your Name]

## Acknowledgments

- Inspired by modern smart home interfaces
- Glassmorphism design trend
- Classic mercury thermometer aesthetics

---

⭐ Star this repo if you find it useful!