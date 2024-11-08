'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c62d62663bd57d655ce2663a9ee4c240",
"version.json": "4826690ebee130d39634da2cd30dde49",
"index.html": "1c9d53e59137904842bb80e0a775846a",
"/": "1c9d53e59137904842bb80e0a775846a",
"main.dart.js": "3718385a94692a7ecb661361e5c044a7",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5478c4666b87f8267a67b1a9095e9b1d",
"assets/AssetManifest.json": "b112211839e0462998f1e6fd0f4a9e40",
"assets/NOTICES": "dc6774fabe65d6c64e1528509172b193",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "f20feedb54ac976a66d3ed2d511dd42c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6bff862c47bbf7c2745acb801c8921f6",
"assets/fonts/MaterialIcons-Regular.otf": "16bcfe90f51e9e485e74291485a69fa9",
"assets/assets/addition.mp4": "c41f39825659df0492732a34441e2595",
"assets/assets/images/tutorial/addNoCarry/4.png": "1a4b49b9d8a789012ba0f3d4a07899c3",
"assets/assets/images/tutorial/addNoCarry/5.png": "ba22f3657211549eb40fdeea20c6fd78",
"assets/assets/images/tutorial/addNoCarry/2.png": "995008641d1b9f0439c44014b20edd75",
"assets/assets/images/tutorial/addNoCarry/3.png": "a0dfe46467a6158b58b632c579d8bbd4",
"assets/assets/images/tutorial/addNoCarry/1.png": "d6f0df543535584ed38df836484ddb24",
"assets/assets/images/background_main_menu.png": "5bbf4834a48e37df46e172b337bd79d2",
"assets/assets/images/map/add_intro.tmj": "e1138488702de0ba1a0644553d4ba56e",
"assets/assets/images/map/add_1.tmj": "7389fc77bec485f2f3699645a8c61541",
"assets/assets/images/map/divide_boss_fight_map.tmj": "c71bf0c761085445907cc6fe148b24d1",
"assets/assets/images/map/multiply_boss_fight_map.tmj": "4eff70de729059d6eef253ae4263ec90",
"assets/assets/images/map/add_four_digit.tmj": "a81b4ccddf487a903cab54885d8ec97d",
"assets/assets/images/map/divide_tutorial.tmj": "d703020bf9895c3b7adc51f19bbb2e27",
"assets/assets/images/map/sub_boss_fight_map.tmj": "ebfdc2a3615586abe1c06d50fa60e5df",
"assets/assets/images/map/add_two_digit.tmj": "a81b4ccddf487a903cab54885d8ec97d",
"assets/assets/images/map/divide_map.tmj": "e7ca34c3bacf203d2f9164da59723e9d",
"assets/assets/images/map/add_tutorial.tmj": "583d4702e8a3a750b37352564858c0d7",
"assets/assets/images/map/add_three_digit.tmj": "b11784297a1156c8b6e0a798600d6e35",
"assets/assets/images/map/boss_fight.tmj": "cf77428dda2bc7875c9704af8bbe05b7",
"assets/assets/images/map/add_map.tmj": "32a4f21cf7eeba266ba37a12f9f3ca8e",
"assets/assets/images/map/add_intro.png": "464cb1582587c7f5a4cf2bd965a8b92f",
"assets/assets/images/map/add_boss_fight_map.tmj": "d41aeb5eae70acc349dc56abcebe8016",
"assets/assets/images/map/add_boss_map.tmj": "b21939a4ea3ccb6993ebd3902d2b28d2",
"assets/assets/images/map/sub_map.tmj": "a7e33a00ca4aed62f2f9b4facb11772d",
"assets/assets/images/map/multiply_tutorial.tmj": "77af584b2dafef2cbd2fed4e28332830",
"assets/assets/images/map/boss_fight_intro.tmj": "d0e5532891e4cbf7672171b5bb566e15",
"assets/assets/images/map/sub_tutorial.tmj": "cef1269d3369bee87bc41c8aaf743d9d",
"assets/assets/images/map/tileset/Oak_Tree.tsj": "c719a0a3a83e9f434b38c3c806884601",
"assets/assets/images/map/tileset/Oak_Tree.png": "e34e8bc2f22a5fb485b2131ead1f49c6",
"assets/assets/images/map/tileset/Path_Tile.tsj": "2298ed20c98df5bd61cb93be5417f2b5",
"assets/assets/images/map/tileset/Water_Tile.png": "d4dd9429f001b45d19a03d250866d045",
"assets/assets/images/map/tileset/Path_Tile.png": "5f21b89008caf5556bfd6f0296f614cb",
"assets/assets/images/map/tileset/Water_Tile.tsj": "5182ecba342d15743673786326ec9ff5",
"assets/assets/images/map/tileset/FarmLand_Tile.tsj": "3f59cfb06820ef05ea988fd391c888f0",
"assets/assets/images/map/tileset/Cliff_Tile.png": "167211e13b22a5a4246fde26ed6c0007",
"assets/assets/images/map/tileset/spr_tileset.png": "43b163d0c9d41cb2da295f97f690165f",
"assets/assets/images/map/tileset/FarmLand_Tile.png": "9dc52689edb30a6505f5294c20d48d1f",
"assets/assets/images/map/tileset/Cliff_Tile.tsj": "31d4f8b763fa544c7abe82640649184a",
"assets/assets/images/map/tileset/spr_tileset.tsj": "62611ff42c5ff6b2116b698528481bcd",
"assets/assets/images/map/tileset/dungeon.tsj": "46ce51514935320bbce20cd96391f6a1",
"assets/assets/images/map/tileset/dungeon.png": "ef05b7352dc3f7001ed2cd711ab3dd13",
"assets/assets/images/map/multiply_map.tmj": "c138840e9a1bdf38be8fadcd03b533e1",
"assets/assets/images/items/sword.png": "285b24143396ec3fc33eff58a510cb68",
"assets/assets/images/items/shuriken_single.png": "ddb8b0fc05046946bb2f9c7ee4afe9c6",
"assets/assets/images/items/shuriken.png": "4738d8e83d70448d3efd5ee31d73b762",
"assets/assets/images/items/coin.png": "a8aeec13b4b52bd658b54a30aa9ea86a",
"assets/assets/images/effects/cut.png": "71ae514db32c258bb46cbbf9dcb22de3",
"assets/assets/images/effects/smoke.png": "88fb92e93a7f5e83e5d183289b22e1f3",
"assets/assets/images/player/old_man.tsj": "0f4d429ba1bd1f50a616d754c3b81d85",
"assets/assets/images/player/old_man.png": "664fd37ff89e4c4d8904b89c864a766f",
"assets/assets/images/player/blue_ninja.tsj": "b5fe1b234c8fab72518279b43753637c",
"assets/assets/images/player/dark_ninja.tsj": "8ec7ba42b4cd9e221f05f6667d5c1db7",
"assets/assets/images/player/chibi.png": "995485358ee909d441f961255225f4f9",
"assets/assets/images/player/blue_ninja.png": "ad699c038419e64e0370c2cde2e0bb5c",
"assets/assets/images/player/boy.png": "c4899bac9cd9df6b81dc703cdf42a285",
"assets/assets/images/player/dark_ninja.png": "f19ba8bb27823dac96816bb91e83fe56",
"assets/assets/audio/fire.wav": "eaadf661e415773e4d62bd605f55598f",
"assets/assets/audio/power_up.wav": "ff3889e3b80d9455a2ebf1415d3e7f5c",
"assets/assets/audio/game_over.wav": "6d9286c6a240a5708d8cf2c68c9faac8",
"assets/assets/audio/explosion.wav": "a3b86e0383b599c6a40e2404261e2bba",
"assets/assets/audio/click.wav": "cda24e9048eebf14cf00c2923c192a67",
"assets/assets/audio/retro1.mp3": "c902e2323a1f41f06378d5a096e1bb0c",
"assets/assets/audio/success.wav": "b43572fd6bc900a5e9826918ae5c1a17",
"assets/assets/audio/retro.mp3": "f2f48d2ff30d90a0e2cf1732e30467af",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
