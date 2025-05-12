const apiKey = "AIzaSyCtsxqAhhAgzqQtT5XxyawbCt5gTFt1y9Y"; // Youtube api key 

async function getPlaylist() {
  const lang = document.getElementById("lang").value;
  const mood = document.getElementById("mood").value;
  const decade = document.getElementById("decade").value;

  const query = `${lang} ${mood} ${decade} playlist`;
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=playlist&maxResults=5&key=${apiKey}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    if (!data.items.length) {
      resultsDiv.innerHTML = "<p>No playlists found.</p>";
      return;
    }

    data.items.forEach(item => {
      const title = item.snippet.title;
      const playlistId = item.id.playlistId;
      const link = `https://www.youtube.com/playlist?list=${playlistId}`;
      resultsDiv.innerHTML += `<p><a href="${link}" target="_blank">${title}</a></p>`;
    });
  } catch (err) {
    console.error(err);
    document.getElementById("results").innerHTML = "<p>Error loading playlists. Try again.</p>";
}
}


// Change background based on mood
function changeBackground() {
    const mood = document.getElementById("mood").value;
    let bgUrl = "";
  
    switch (mood) {
      
      case "Happy":
        bgUrl ="url('https://images.unsplash.com/photo-1452697620382-f6543ead73b5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
        break;
      case "Romantic":
        bgUrl = "url('https://images.unsplash.com/photo-1673165460096-66d1ab4e11f2?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=matthew-michael-SleNjhxcjic-unsplash.jpg')";
        break;
      case "Party":
        bgUrl = "url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=aditya-chinchure-ZhQCZjr9fHo-unsplash.jpg')";
        break;
      case "Sad":
        bgUrl = "url('https://images.unsplash.com/photo-1735815613572-1ea5e2d7273b?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=tojo-basu-u_-pLQdJtHQ-unsplash.jpg')";
        break;
        case "Devotional":
        bgUrl = "url('https://plus.unsplash.com/premium_photo-1675778644413-53825034abd1?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
        break;
      default:
        bgUrl ="url('https://images.unsplash.com/photo-1452697620382-f6543ead73b5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
    }
  
    document.body.style.backgroundImage = bgUrl;
  }