var images = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

//-- usage --//
preload(
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 1.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 2.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 3.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 4.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 5.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 6.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 7.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 8.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 9.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 10.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 11.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 12.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 13.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 14.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 15.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 16.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 17.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 18.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 19.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 20.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 21.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 22.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 23.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 24.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 25.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 26.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 27.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 28.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 29.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 30.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 31.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 32.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 33.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 34.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 35.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 36.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 37.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 38.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 39.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 41.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 42.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 43.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 44.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 45.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 46.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 47.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 48.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 49.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 51.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 52.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 53.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 54.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 55.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 56.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 57.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 58.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 59.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 60.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 61.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 62.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 63.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 64.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 65.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 66.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 67.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 68.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 68.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 69.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 70.png",
    "Rotato Frames 0A884D24-2222-4A35-BBE4-8338BE412BC6/Untitled Frame 71.png"
)