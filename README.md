# Timeline Web - Advanced Gesture Control System

A comprehensive web-based gesture control system using MediaPipe Hands for natural, touchless interaction with image galleries and presentations.

## 🌟 Features

### Primary System: Return-to-Home with Palm Zoom
- **Natural Navigation**: Swipe left/right with automatic return-to-home requirement
- **Palm Zoom**: Show 5 fingers to zoom images to fullscreen
- **Fist Restore**: Close hand to return to normal size
- **Visual Feedback**: Color-coded states, progress indicators, and guide arrows
- **Fast Detection**: 200px home circles, 8% detection threshold

### Alternative Gesture Methods
- **Dynamic Zones**: Gesture areas that follow your hands
- **Two-Handed Buffer**: 3-action buffer system for deliberate control
- **State Machine**: Central neutral zone with four distinct states
- **Z-Depth Detection**: Different gestures based on hand orientation
- **Simple Cooldown**: Time-based gesture spacing

## 🚀 Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/timeline-web.git
   cd timeline-web
   ```

2. Open any HTML file in a modern browser:
   ```bash
   open return-to-home.html  # macOS
   # or
   start return-to-home.html  # Windows
   # or
   xdg-open return-to-home.html  # Linux
   ```

3. Allow camera access when prompted

4. Start gesturing!

## 📂 Project Structure

### Main Implementations
- `return-to-home.html` - Primary system with swipe navigation and palm zoom
- `dynamic-hand-zones.html` - Zones that follow your hands
- `two-handed-buffer.html` - Two-handed control with action buffer
- `gesture-state-machine.html` - State machine with neutral zone
- `comparison.html` - Visual comparison of all methods

### Test Files
- `palm-detection-test.html` - Test palm and fist detection
- `mirror-test.html` - Verify hand mirroring
- `home-detection-test.html` - Visualize detection zones
- `hand-detection-test.html` - Basic hand detection test

### Documentation
- `RETURN_TO_HOME.txt` - Detailed return-to-home documentation
- `DYNAMIC_HAND_ZONES.txt` - Dynamic zones documentation
- `TWO_HANDED_BUFFER.txt` - Two-handed buffer documentation
- And more...

## 🎮 How to Use Return-to-Home System

### Basic Navigation
1. **Setup**: Show your hand for 0.5 seconds to set home position
2. **Navigate**: Swipe left/right from home position
3. **Return**: Hand must return to home circle (turns green when ready)
4. **Repeat**: Make your next gesture

### Zoom Controls
- **🖐️ Zoom In**: Show open palm (5 fingers) for 0.5 seconds
- **✊ Zoom Out**: Close your hand (make a fist)

## ⚙️ Configuration

Key parameters in `return-to-home.html`:
```javascript
HOME_THRESHOLD = 0.08    // 8% of screen = "at home"
SWIPE_THRESHOLD = 0.15   // 15% movement triggers swipe
HOME_SET_DELAY = 500     // 0.5 seconds to set home
PALM_SCORE_THRESHOLD = 65  // 65% palm score required
PALM_HOLD_THRESHOLD = 15   // ~0.5 seconds hold time
```

## 🛠️ Technical Details

- **Framework**: Pure JavaScript with MediaPipe Hands
- **Hand Detection**: Real-time 21-point hand landmark detection
- **Mirror Correction**: Hands appear on their natural sides
- **Performance**: Optimized for smooth 30+ FPS operation
- **Compatibility**: Works in all modern browsers with WebRTC support

## 📋 Requirements

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Webcam/camera access
- JavaScript enabled
- Good lighting for optimal hand detection

## 🤝 Contributing

Feel free to submit issues, fork the repository, and create pull requests for any improvements.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- MediaPipe team for the excellent hand tracking library
- All contributors and testers

---

Built with ❤️ for natural human-computer interaction