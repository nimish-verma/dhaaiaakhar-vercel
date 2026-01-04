$colors = @("red", "blue", "green", "purple", "orange", "yellow", "cyan", "magenta", "pink", "teal")
$files = @("udaipur.mp4", "mussoorie.mp4", "goa.mp4", "kerala.mp4", "jaipur.mp4", "jodhpur.mp4", "rishikesh.mp4", "agra.mp4", "udaipur2.mp4", "goa2.mp4")

for ($i=0; $i -lt 10; $i++) {
    $color = $colors[$i]
    $file = $files[$i]
    $out = "client/src/assets/videos/$file"
    Write-Host "Generating $out ($color)..."
    # Use standard color source with proper quoting for PowerShell
    ffmpeg -y -f lavfi -i "color=c=${color}:s=540x960:d=5" -c:v libx264 -pix_fmt yuv420p -tune stillimage -preset ultrafast $out
}
