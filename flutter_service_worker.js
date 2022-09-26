'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "d1dfc5c6d945d187ec9ee6a3f1ea9b38",
"index.html": "c15193b6b7dac2679f5ac20c1b29ee5c",
"/": "c15193b6b7dac2679f5ac20c1b29ee5c",
"main.dart.js": "dd40c8c11f4e8cfcba984898700caafe",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "d7bc0d184e93ce38c79d0b65cb83fd31",
"icons/Icon-192.png": "bb41ba8c50dc37f97454b71a677ff119",
"icons/Icon-maskable-192.png": "bb41ba8c50dc37f97454b71a677ff119",
"icons/Icon-maskable-512.png": "bae8e5b9a1e3073173db17aa6e95e8a0",
"icons/Icon-512.png": "bae8e5b9a1e3073173db17aa6e95e8a0",
"manifest.json": "36f069682e58529004761a269deb402e",
"assets/AssetManifest.json": "94bba537c1997f6fb13db5daea43fd91",
"assets/NOTICES": "1fb2044ba48ed70592b7b9e713a674fa",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "fd551a4a479c3940f56a30216bc81463",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/legal_requirements/imprint_en.md": "224b1fa49301954b88cf201ba2a38214",
"assets/assets/legal_requirements/imprint_de.md": "ffa21d1633d7b18b1c664956bcf3012a",
"assets/assets/legal_requirements/privacy_policy_en.md": "587202edabdab09f8e93379248e5736d",
"assets/assets/legal_requirements/privacy_policy_de.md": "93a26ede82def896968a02971265bcde",
"assets/assets/profileimages/sorosch.jpg": "0e2cfae291b1c74a62d28ddcea6cddac",
"assets/assets/profileimages/hogir.jpeg": "f45ad1cf6ced4b2a8a3b5651f3f5c83c",
"assets/assets/profileimages/team1.jpg": "e698907255c414840b4095d5c70bbb90",
"assets/assets/profileimages/team2.jpg": "74c593cc74ff1c9c6b51daa2bfecb193",
"assets/assets/profileimages/team3.jpg": "c4d30cc8cbda442e15e9ddb76acd2e8b",
"assets/assets/icons/linkedin.png": "d492efc706db983e74258dbd348f2208",
"assets/assets/icons/4.png": "3ee2a263734dda364c06c84b73d5c298",
"assets/assets/icons/hybrid_cloud/cloud_optimization.png": "b303f77021b9580cf895a5ae84385e4d",
"assets/assets/icons/hybrid_cloud/cloud_migration.png": "30d214df5d0a7a4c0c2b5ef9c706a255",
"assets/assets/icons/hybrid_cloud/risk_managment.png": "330d9cfa85a43174bf0c3a7080aa9d5b",
"assets/assets/icons/hybrid_cloud/cloud_security.png": "310fa737ece33cad6d16996aa34e26b5",
"assets/assets/icons/hybrid_cloud/cloud_financial.png": "43cce6de0e5d10937e64b11e73e920d0",
"assets/assets/icons/hybrid_cloud/infrastructure_as_code.png": "0217479aa4f49e365266405e9140ed6b",
"assets/assets/icons/hybrid_cloud/severless.png": "c4c23855722f987cf5a3404a181136fa",
"assets/assets/icons/5.png": "8936a73f25b5531f35fe94c17e5b0fd8",
"assets/assets/icons/short_logo.png": "d7bc0d184e93ce38c79d0b65cb83fd31",
"assets/assets/icons/2.png": "c70f5dbd47baf931f528c9c49767e627",
"assets/assets/icons/3.png": "c30bbbf9353fc8294caf2a2c7129a4ea",
"assets/assets/icons/app_development/mobile_apps.png": "b68789cf37913727c6948b66cf8ac4a3",
"assets/assets/icons/app_development/container.png": "a4d415c56653a7c3d1f623eb76c0b6bb",
"assets/assets/icons/app_development/microservices.png": "1331bb1e65b73fc43877bef2cfbe7b36",
"assets/assets/icons/app_development/strategy.png": "edd4fc35f07a89d835f99d0469a46ba5",
"assets/assets/icons/app_development/devops.png": "1a2096b00061302e7750731ba535c343",
"assets/assets/icons/1.png": "1ad937163b27c19931ce1df5b36eb603",
"assets/assets/google_fonts/OpenSans-SemiBold.ttf": "984b9097c910bf2f182889707e2e4cbe",
"assets/assets/google_fonts/OpenSans-Light.ttf": "0652ba43f7a92220fbc18a5519fbf2c1",
"assets/assets/google_fonts/OpenSans-Italic.ttf": "90f74e681980c2ef280a3d24006e5b35",
"assets/assets/google_fonts/OpenSans-MediumItalic.ttf": "7e93c9a251c09d9984721aeb3bd8f976",
"assets/assets/google_fonts/OpenSans-ExtraBold.ttf": "8fd58ae86936600201df265f1112a014",
"assets/assets/google_fonts/OpenSans-LightItalic.ttf": "c0d0b7abb91323f27be4a42269f31ef1",
"assets/assets/google_fonts/OpenSans-Bold.ttf": "ff615c954fc5485fb3757516721b41ff",
"assets/assets/google_fonts/OpenSans-SemiBoldItalic.ttf": "d94afe8b2ccf8210aac58024276bcc06",
"assets/assets/google_fonts/OpenSans-Medium.ttf": "7a56b1bba54be9caf32f096d8224a492",
"assets/assets/google_fonts/OpenSans-ExtraBoldItalic.ttf": "7f86cc2636f0adadc0dec52009c0545f",
"assets/assets/google_fonts/OpenSans-Regular.ttf": "58b1f440729d267697bddcddb994bce9",
"assets/assets/google_fonts/OpenSans-BoldItalic.ttf": "f288e82f90d27a27ba22a4c0561896f8",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
