# Testing Guide

## Quick Test Setup

### 1. Enable All Days (Fastest)

Open `src/lib/dateUtils.ts` and set:

```typescript
const TESTING_MODE = true;
const MOCK_CURRENT_DAY = 7;  // Unlocks all 7 days
```

Save the file and refresh your browser. All days should now be unlocked.

### 2. Test Each Day Individually

**URL Method (Easiest):**
Just change the URL in your browser:

- `http://localhost:3000/?day=1` - Rose Day
- `http://localhost:3000/?day=2` - Propose Day
- `http://localhost:3000/?day=3` - Chocolate Day
- `http://localhost:3000/?day=4` - Teddy Day
- `http://localhost:3000/?day=5` - Promise Day
- `http://localhost:3000/?day=6` - Kiss Day
- `http://localhost:3000/?day=7` - Valentine's Day

**Timeline Click Method:**
Click on any unlocked day in the timeline to navigate to it.

## Test Scenarios

### Scenario 1: Before Valentine's Week

```typescript
const TESTING_MODE = true;
const MOCK_CURRENT_DAY = 0;
```

**Expected:** All days show locked (🔒)

### Scenario 2: First Day of Valentine's Week

```typescript
const TESTING_MODE = true;
const MOCK_CURRENT_DAY = 1;
```

**Expected:** Only Rose Day unlocked, others locked

### Scenario 3: Mid-Week

```typescript
const TESTING_MODE = true;
const MOCK_CURRENT_DAY = 4;
```

**Expected:** Days 1-4 unlocked, days 5-7 locked

### Scenario 4: All Days Unlocked

```typescript
const TESTING_MODE = true;
const MOCK_CURRENT_DAY = 7;
```

**Expected:** All days unlocked and accessible

## Features to Test

### ✅ Timeline Navigation

- [ ] Click on unlocked days navigates correctly
- [ ] Locked days show lock icon
- [ ] Active day has pink ring
- [ ] Progress bar shows correct percentage
- [ ] Hover effects work on unlocked days

### ✅ Day Cards

- [ ] Correct emoji displays for each day
- [ ] Animations work (float, bounce, etc.)
- [ ] Romantic copy displays correctly
- [ ] Action button shows correct text
- [ ] Locked days show countdown

### ✅ URL Parameters
- [ ] `?day=1` through `?day=7` work
- [ ] Invalid day numbers default to day 1
- [ ] URL updates when clicking timeline

### ✅ Responsive Design
- [ ] Works on mobile (375px width)
- [ ] Works on tablet (768px width)
- [ ] Works on desktop (1920px width)

### ✅ Animations
- Day 1: Float animation
- Day 2: Bounce animation
- Day 3: Pulse animation
- Day 4: Spin-slow animation
- Day 5: Wiggle animation
- Day 6: Heartbeat animation
- Day 7: Float animation

## Browser Testing

Test in multiple browsers:
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile browsers

## Performance Testing

```bash
npm run build
npm start
```

Check:
- [ ] Page loads quickly
- [ ] No console errors
- [ ] Animations run smoothly
- [ ] Images/emojis render correctly

## Production Simulation

To test like it's actually Valentine's week:

1. Set `TESTING_MODE = false` in `dateUtils.ts`
2. Change your computer's date to February 7-14, 2025
3. Refresh the app
4. Days should unlock based on your system date

**Don't forget to change your date back!**

## Troubleshooting

### Days not unlocking?
- Check `TESTING_MODE` is `true`
- Check `MOCK_CURRENT_DAY` value (0-7)
- Clear browser cache
- Hard refresh (Ctrl+F5)

### Animations not working?
- Check browser DevTools console for errors
- Verify Tailwind config loaded
- Try different browser

### Timeline not showing progress?
- Check `getProgressPercentage()` function
- Verify `MOCK_CURRENT_DAY` is set correctly
- Inspect element to see if style is applied

## Quick Test Commands

Open browser console and run:

```javascript
// Check current day
console.log('Current Day:', new URLSearchParams(window.location.search).get('day'));

// Navigate to specific day
window.location.href = '/?day=3';

// Check all days data (in React DevTools)
// Look for VALENTINE_DAYS array
```
