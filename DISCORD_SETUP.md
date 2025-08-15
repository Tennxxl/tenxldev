# Discord Integration Setup Guide (Lanyard API)

## 🎯 What's Been Added

Your portfolio now includes a **real-time Discord profile** in the center that shows:
- Your Discord avatar and username
- Current online status (Online, Idle, Do Not Disturb, Offline)
- What you're currently doing (activities, games, etc.)
- Auto-refreshes every 30 seconds
- **Powered by Lanyard API** - No bot setup required!

## 🚀 How It Works

This integration uses [Lanyard](https://github.com/phineas/lanyard), a service that provides real-time Discord presence data through a simple API. It's much easier than setting up a Discord bot!

### What Lanyard Shows:
- **Real-time Discord status** (online, idle, dnd, offline)
- **Current activities** (playing games, listening to music, etc.)
- **Rich presence data** (Spotify, VS Code, Steam, etc.)
- **Custom status messages**

## 🔧 Setup Instructions

### 1. Enable Lanyard for Your Discord Account

1. Join the [Lanyard Discord Server](https://discord.gg/UrXF2cfJ6F)
2. Use the `/opt-in` command in any channel
3. That's it! Your Discord presence is now available via Lanyard API

### 2. Verify Your Discord User ID

Your current Discord ID is: `1081084405260496937`

To find your Discord ID:
1. Enable Developer Mode in Discord (User Settings → Advanced → Developer Mode)
2. Right-click your username and select "Copy ID"

### 3. Test the Integration

Your Discord profile should now show real data! The API automatically fetches:
- Your Discord username and avatar
- Current online status
- Any active activities (games, music, etc.)

## 🎨 Features

### Real-time Status
- Shows your current Discord status with colored indicators
- Updates automatically every 30 seconds
- Graceful fallback if you're offline

### Activity Detection
- **Spotify** - Shows what you're listening to
- **Visual Studio Code** - Shows when you're coding
- **Games** - Displays what you're playing
- **Streaming** - Shows if you're streaming
- **Custom Activities** - Any other Discord activities

### Smart Icons
- Different icons for different activity types
- Recognizes popular applications (Spotify, VS Code, Steam)
- Fallback icons for unknown activities

## 🔒 Privacy & Security

- **No bot required** - Lanyard uses Discord's public presence data
- **No tokens needed** - Everything works through the public API
- **Opt-in only** - You control whether your data is available
- **Real-time updates** - Data is always current

## 🐛 Troubleshooting

### Profile Not Showing Real Data
1. Make sure you've used `/opt-in` in the Lanyard Discord server
2. Verify your Discord ID is correct
3. Check that you have some Discord activity (status, games, etc.)

### API Errors
1. Check browser console for error messages
2. Verify your Discord ID format (should be numbers only)
3. Make sure you're opted into Lanyard

### No Activities Showing
1. Make sure you have Discord Rich Presence enabled
2. Try playing a game or listening to Spotify
3. Check your Discord status is not "Invisible"

## 📝 Customization

### Update Your Discord User ID
Edit `app/page.tsx` line with your Discord ID:
```tsx
<DiscordProfile userId="YOUR_DISCORD_ID_HERE" />
```

### Customize the Display
Edit `app/components/DiscordProfile.tsx` to:
- Change colors and styling
- Add more activity types
- Modify refresh intervals
- Add custom status messages

### Add More Applications
The component recognizes these application IDs:
- **Spotify**: `383226320970055681`
- **VS Code**: `438122941302046720`
- **Steam**: `356875660738560000`

## 🌟 Benefits of Lanyard

- **No setup complexity** - Just opt-in and it works
- **Real-time data** - Updates instantly
- **Rich presence support** - Shows detailed activity info
- **Reliable service** - Used by thousands of developers
- **Free to use** - No API limits or costs

## 📱 View Your Portfolio

Your portfolio is running at **http://localhost:3000** with real Discord integration!

The Discord profile will now show your actual Discord status and activities in real-time. No bot setup, no tokens, just pure Discord presence data! 🎉

## 🔗 Useful Links

- [Lanyard GitHub](https://github.com/phineas/lanyard)
- [Lanyard Discord Server](https://discord.gg/UrXF2cfJ6F)
- [Lanyard API Documentation](https://github.com/phineas/lanyard#api)
