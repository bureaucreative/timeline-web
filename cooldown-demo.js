// COOLDOWN IMPLEMENTATION SNIPPET

// After any successful gesture (swipe or fullscreen toggle):
function startGestureCooldown() {
  // Set cooldown flag
  gestureCooldown = true;
  cooldownEndTime = Date.now() + 1500; // 1.5 seconds
  
  // Visual feedback - dim the interface
  imageSlider.classList.add('cooldown-active');
  
  // Clear any existing timer
  if (cooldownTimer) {
    clearTimeout(cooldownTimer);
  }
  
  // Set new timer
  cooldownTimer = setTimeout(() => {
    gestureCooldown = false;
    imageSlider.classList.remove('cooldown-active');
    status.textContent = 'Ready for next gesture';
  }, 1500);
}

// In the main update loop:
if (gestureCooldown) {
  // Calculate remaining time
  const remainingTime = Math.max(0, cooldownEndTime - Date.now());
  const remainingSeconds = (remainingTime / 1000).toFixed(1);
  
  // Show countdown
  ctx.fillText(`Cooldown: ${remainingSeconds}s`, canvas.width / 2, canvas.height - 100);
  
  // Draw progress bar
  const fillWidth = progressWidth * (remainingTime / 1500);
  ctx.fillRect(progressX, progressY, fillWidth, progressHeight);
  
  // Update status
  status.textContent = `⏳ Wait ${remainingSeconds}s before next gesture`;
  
  // Skip all gesture detection
  return; // Early exit!
}

// CSS for visual dimming:
.cooldown-active {
  opacity: 0.6;
  filter: grayscale(30%);
  transition: all 0.3s ease;
}