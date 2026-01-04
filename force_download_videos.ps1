
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

$videos = @(
    @{ Url = "https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-at-their-wedding-standing-head-on-in-a-40627-large.mp4"; Out = "client/src/assets/videos/udaipur.mp4" },
    @{ Url = "https://assets.mixkit.co/videos/preview/mixkit-happy-bride-walking-with-her-bouquet-40591-large.mp4"; Out = "client/src/assets/videos/mussoorie.mp4" },
    @{ Url = "https://assets.mixkit.co/videos/preview/mixkit-newlyweds-smiling-40593-large.mp4"; Out = "client/src/assets/videos/goa.mp4" },
    @{ Url = "https://assets.mixkit.co/videos/preview/mixkit-lovely-spouses-in-their-wedding-garden-40590-large.mp4"; Out = "client/src/assets/videos/kerala.mp4" },
    @{ Url = "https://assets.mixkit.co/videos/preview/mixkit-just-married-couple-40599-large.mp4"; Out = "client/src/assets/videos/jaipur.mp4" },
    @{ Url = "https://assets.mixkit.co/videos/preview/mixkit-happy-newlywed-couple-walk-hand-in-hand-40596-large.mp4"; Out = "client/src/assets/videos/jodhpur.mp4" },
    @{ Url = "https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-bride-with-her-wedding-bouquet-40586-large.mp4"; Out = "client/src/assets/videos/rishikesh.mp4" },
    @{ Url = "https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-groom-before-his-wedding-40587-large.mp4"; Out = "client/src/assets/videos/agra.mp4" },
    @{ Url = "https://assets.mixkit.co/videos/preview/mixkit-newlyweds-walking-through-a-garden-40584-large.mp4"; Out = "client/src/assets/videos/udaipur2.mp4" },
    @{ Url = "https://assets.mixkit.co/videos/preview/mixkit-happy-newlyweds-posing-40601-large.mp4"; Out = "client/src/assets/videos/goa2.mp4" }
)

foreach ($v in $videos) {
    Write-Host "Downloading $($v.Out)..."
    try {
        Invoke-WebRequest -Uri $v.Url -OutFile $v.Out -UserAgent "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36" -UseBasicParsing
    } catch {
        Write-Host "Error downloading $($v.Out): $_"
    }
}
