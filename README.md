# Valentine's Week App

A progressive Valentine's Week web application built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- 🗓️ **7 Days of Valentine's Week** (Feb 7-14)
- 🔒 **Progressive Unlock System** - Days unlock as dates arrive
- 🎨 **Unique Animations** - Different animation per day
- 💕 **Romantic Content** - Thoughtful messages and quotes for each day
- 📱 **Responsive Design** - Works on mobile and desktop
- 🎯 **URL Navigation** - Use `?day=1` through `?day=7`

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run development server:**

   ```bash
   npm run dev
   ```

3. **Open browser:**

   ```text
   http://localhost:3000
   ```

## Testing the App

### Method 1: Enable Testing Mode

Edit `src/lib/dateUtils.ts`:

```typescript
const TESTING_MODE = true;  // Set to true
const MOCK_CURRENT_DAY = 3; // Change to test different days (0-7)
```

**Test scenarios:**
- `MOCK_CURRENT_DAY = 0`: Before Valentine's week (all locked)
- `MOCK_CURRENT_DAY = 1`: Rose Day (only day 1 unlocked)
- `MOCK_CURRENT_DAY = 3`: Chocolate Day (days 1-3 unlocked)
- `MOCK_CURRENT_DAY = 7`: All days unlocked

### Method 2: URL Parameters

Navigate to specific days directly:

- Day 1: `http://localhost:3000/?day=1`
- Day 2: `http://localhost:3000/?day=2`
- Day 7: `http://localhost:3000/?day=7`

### Method 3: Change System Date (Production Testing)

Set `TESTING_MODE = false` and change your system date to:

- Feb 7, 2025 → Tests Rose Day
- Feb 10, 2025 → Tests up to Teddy Day
- Feb 14, 2025 → Tests Valentine's Day (all unlocked)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page with routing logic
│   └── globals.css         # Global styles
├── components/
│   ├── Timeline.tsx        # Timeline navigation
│   └── DayCard.tsx         # Individual day cards
└── lib/
    └── dateUtils.ts        # Date logic & unlock system
```

## Valentine's Week Days

1. **Rose Day** (Feb 7) - 🌹
2. **Propose Day** (Feb 8) - 💍
3. **Chocolate Day** (Feb 9) - 🍫
4. **Teddy Day** (Feb 10) - 🧸
5. **Promise Day** (Feb 11) - 🤝
6. **Kiss Day** (Feb 12) - 💋
7. **Valentine's Day** (Feb 14) - 💕

## Customization

### Change Testing Settings

In `src/lib/dateUtils.ts`:
```typescript
const TESTING_MODE = true;      // Enable/disable testing
const MOCK_CURRENT_DAY = 7;     // Set current day (0-7)
```

### Modify Day Content

Edit `getDayContent()` function in `src/components/DayCard.tsx`

### Change Colors

Edit day configurations in `src/lib/dateUtils.ts`:
```typescript
{
  day: 1,
  title: "Rose Day",
  bgGradient: "from-red-500 to-pink-500",  // Change gradients
  color: "text-red-600",                   // Change text color
}
```

### Add More Animations

Edit `tailwind.config.ts` and add new keyframes:
```typescript
keyframes: {
  yourAnimation: {
    '0%': { /* start state */ },
    '100%': { /* end state */ },
  }
}
```

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 16.1.6** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **App Router** - Next.js routing

## License

MIT
