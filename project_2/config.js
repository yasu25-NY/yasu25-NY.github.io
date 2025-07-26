var config = {
    style: 'mapbox://styles/nono2025/cmdget1j601nz01qn52y5cmte',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1Ijoibm9ubzIwMjUiLCJhIjoiY21jMnZnZzhmMGNqOTJtcTNmZWp0azMybyJ9.7O_etfGP5q7no1Ol3fwlMA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Japan’s Ports Are Falling Behind — Quietly Shut Out of Global Trade',
    subtitle: 's ports around the world race to modernize and consolidate their roles as global hubs, Japan’s harbors are showing signs of stagnation. While neighboring Asian nations have pushed forward with state-backed logistics strategies, Japan has responded more slowly—and increasingly risks being left out of the global trade network. Without decisive action, its ports may no longer be chosen at all.',
    byline: 'By Yasuka Nonomura',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
 
    chapters: [
        {
            id: '01-id',
            alignment: 'left',
            hidden: false,
            title: 'Ports Are the Arteries of the Global Economy',
            image: './assets/container.jpg',
            description: 'Ports are more than just stops for ships—they are arteries of the global economy. According to the U.S. National Geospatial-Intelligence Agency’s *World Port Index*, there are roughly 3,629 registered port facilities worldwide, of which around 939 support regular container shipping routes. For countries with low food self-sufficiency, ports are lifelines, critical not only for trade but for basic survival. The number of vessels calling and cargo handled is a telling measure of both competitiveness and national strength.*Data source: Shape files extracted from the World Port Index. Green indicates general-use ports; orange shows ports equipped to handle container vessels.*',
            location: {
                center: [-74.006, 40.7128],
                zoom: 2, 
                pitch: 0,
                bearing: 0
              },
              callback: 'startRotation',
              onChapterEnter: [],
              onChapterExit: [
                () => {
                    stopRotation();
                }
            ]
        },
       {

        id: '02-id',
        alignment: 'right',
        hidden: false,
        title: 'Once in the Top 20—Now Fading from View',
        description: 'One of the clearest metrics of port strength is TEU—twenty-foot equivalent units—a standard measure of container traffic. It reflects more than volume: it captures vessel frequency, operational density, and a port’s role in the broader supply chain.In 1990, three Japanese ports—Tokyo, Yokohama, and Kobe—ranked among the global top 20 in container throughput. By 2023, none remained on the list. As ports across Asia surged ahead, Japan’s faded quietly into the background.*Data source: Container throughput figures were extracted from annual PDFs published by the Japan Port and Harbor Association, then parsed and visualized using Python and Datawrapper.*',
        image: './assets/graph01.svg', 
        location: {
            center: [139.8500, 35.5800],
            zoom: 5.5,
            pitch: 40,
            bearing: 10
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        callback: 'stopRotation', 
        onChapterEnter: [],
        onChapterExit: []
    },
        {
            id: '03-id',
            alignment: 'fully',
            hidden: false,
            title: 'Post-COVID Port Recovery: Asia Surges, Japan Stalls',
            image: '',
            description: 'In recent years, the world’s major ports have largely recovered from the pandemic’s disruption and re-entered a phase of growth. Between 2019 and 2023, container throughput trends (measured in TEUs) reveal widening disparities in port performance.Using World Shipping Council data on the top 50 container ports, we visualized growth through bubble charts—each circle proportional to a port’s container volume. The results are telling.Japan’s ports barely changed. From 2019 to 2023, TEU volume grew only slightly, and bubble size remained nearly flat. In contrast, key ports across Asia—particularly in China, South Korea, and Southeast Asia—first contracted during COVID, then rebounded sharply after 2021.From a domestic lens, Japan’s performance might appear “stable.” But in global terms, it’s stagnation. The gap between Japan and its regional peers isn’t closing—it’s growing.*Data source: World Shipping Council rankings scraped and transformed, animated using Flourish.*',
            embedHtml:'<div class="flourish-embed flourish-map" data-src="visualisation/24379738"></div>',
            location: {
                center: [121.4737, 31.2304],
                zoom: 7.5,
                pitch: 8,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '04-id',
            alignment: 'right',
            hidden: false,
            title: 'South Korea’s Busan Port Is Building a Global Hub',
            image: '',
            description: 'So what’s driving such sharp divergence in port performance? The case of South Korea’s Busan port offers one answer.A key metric of port capability is the number of deepwater berths—those with depths exceeding 16 meters—that can accommodate large container ships simultaneously. By this measure, the disparity is striking: Tokyo has 14 berths (planned and existing), Shanghai has 23, and Busan has 46.But it’s not just quantity. Busan is also pushing ahead with full automation, 24-hour operations, and digitized customs systems. Its ambitions are clear: to become a true global logistics hub.Japan, by contrast, still relies on manual cargo handling in many areas. Operating hours are limited. And instead of focusing national resources on a unified strategy, regional ports pursue their own fragmented development plans. Calls for reform exist—but change has been slow.*Map imagery: Satellite view of Busan New Port terminal, visualized via Mapbox, highlights continuous deepwater berths and interconnected gantry systems*',
            location: {
                center: [129.0846676, 35.1041201],
                zoom: 15.2,
                pitch: 0,
                bearing: 40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
 
    ]
};