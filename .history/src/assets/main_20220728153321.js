const API =
  "https://youtube-v31.p.rapidapi.com/search?channelId=UC9CoOnJkIBMdeijd9qYoT_g&part=snippet%2Cid&order=date&maxResults=12";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c1b3d51d20msh28261218312955dp1dc285jsnf02a5f860452",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

async function fetchData(urlAPI) {
  const response = await fetch(API, options);
  const data = await response.json();
  return data;
}
const content = null;

(async () => {
  try {
    const videos = await fetchData(API);
    let view = `
    ${videos.items.map(
      (video) => `
    <div class="group relative">
    <div
      class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
      <img src=${video.snippet.thumbnail.high.url} alt=${video.snippet.description} class="w-full">
    </div>
    <div class="mt-4 flex justify-between">
      <h3 class="text-sm text-gray-700">
        <span aria-hidden="true" class="absolute inset-0"></span>
        ${video.snippet.title}
      </h3>
    </div>
  </div>
    
    `
    )}
      
        
        `;
  } catch {}
})();
