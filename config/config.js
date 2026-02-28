/* Config Sample
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
									// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
									// or add a specific IPv4 of 192.168.1.5 :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
									// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false,			// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "",	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "",	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",   // this variable is provided as a consistent location
			   // it is currently only used by 3rd party modules. no MagicMirror code uses this value
			   // as we have no usage, we  have no constraints on what this field holds
			   // see https://en.wikipedia.org/wiki/Locale_(computer_software) for the possibilities

	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 12,
	units: "imperial",

	modules: [
		{
			module: "MMM-pages",
			config: {
				timings: {
					default: 5000, //miliseconds 1000 = 1 second, 5000 = 5 seconds, 10000 = 10 seconds, ect...
					0: 60000,
					1: 60000,
					2: 30000,
					3: 45000,
					4: 60000
				},
			modules: [
				["calendar", "compliments", "weather", "MMM-BackgroundSlideshow", "weather_forcast"],
				["thisMonth"],
				["nextMonth"],
				["MMM-MyScoreboard", "admin"],
				["MMM-MealSuggestions"]
			],
			fixed: [
				"clock",
				"MMM-page-indicator",
				"MMM-OnScreenMenu",
				"weather_now",
				"MMM-BackgroundSlideshow"
			],
			hiddenPages: {
				"screenSaver": [
					"clock"
				],
			}
			}
		},
		{
			module: "alert",
		},
		{
			module: "MMM-MyScoreboard",
			position: "bottom_left",
			config: {
				viewSype: "stackedWithLogos",
				showPlayoffStatus: true,
				sports: [
				{
					league: "NBA",
					teams: ["OKC"]
				},
				{
					league: "MLB",
					teams: ["NYY", "BOS", "CWS", "MIA", "PHI", "CIN", "CLE", "COL"]
				},
				],
			},
		},
		{
			module: "MMM-MyScoreboard",
			position: "bottom_center",
			config: {
				viewSype: "stackedWithLogos",
				showPlayoffStatus: true,
				sports: [
				{
					league: "NFL",
					teams: ["NYG", "TB", "NE", "LV", "MIN", "KC"]
				},
				],
			},
		},
		{
			module: "MMM-MyScoreboard",
			position: "bottom_right",
			config: {
				viewSype: "stackedWithLogos",
				showPlayoffStatus: true,
				sports: [
				{
					league: "NCAAF",
					teams: ["OKLA", "TTU", "TLSA", "OKST"],
					groups: ["SEC", "Big 12"]
				},
				],
			},
		},
		//{
		//	module: 'MMM-Todoist2',
		//	position: 'top_right',	// This can be any of the regions. Best results in left or right regions.
		//	header: 'Todays Tasks', // This is optional
		//	classes: "admin",
		//	config: { // See 'Configuration options' for more information.
		//		hideWhenEmpty: false,
		//		accessToken: 'c2c49f2884400f11cd3ae84f145daf6e704670e6',
		//		maximumEntries: 60,
		//		updateInterval: 10*60*1000, // Update every 10 minutes
		//		fade: false,      
		//		groupByProject: false,
		//		// projects and/or labels is mandatory:
		//		projects: ["Home", "Shopping"],
		//		labels: [] // Tasks for any projects with these labels will be shown.
		//	}
		//},
		{
			module: "MMM-Pinfo",
			position: "top_center",
			classes: "admin",
			config: {
				NETWORK: {
				labelType: 'NET Type',
				displayType: true,
				orderType: 4,

				labelIPv4: 'IPv4',
				displayIPv4: true,
				orderIPv4: 5,

				labelIPv6: 'IPv6',
				displayIPv6: true,
				orderIPv6: 6,

				labelMac: 'MAC',
				displayMac: true,
				orderMac: 7
				}
			},
		},
		{
			module: "MMM-MealSuggestions",
 			position: "lower_third",
 			config: {
			localFile: "recipes.json",
			count: 6
			}
		},
		{
			module: "MMM-BackgroundSlideshow",
			position: "fullscreen_below",
			classes: "home",
			config: {
				imagePaths: ["modules/MMM-BackgroundSlideshow/photos"],
				transitionImages: false,
				randomizeImageOrder: true,
			}
		},
		{
			module: "compliments",
			position: "lower_third",
			config: {
				updateInterval: 15000,
			}
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		//    {
		//	module: 'MMM-Remote-Control',
			// uncomment the following line to show the URL of the remote control on the mirror
		//	position: 'bottom_left',
			// you can hide this module afterwards from the remote control itself
		//	classes: "admin",
		//	config: {
		//		customCommand: {},  // Optional, See "Using Custom Commands" below
		//		showModuleApiMenu: true, // Optional, Enable the Module Controls menu
		//		secureEndpoints: true, // Optional, See API/README.md
				// uncomment any of the lines below if you're gonna use it
				// customMenu: "custom_menu.json", // Optional, See "Custom Menu Items" below
				// apiKey: "", // Optional, See API/README.md for details
		//		},
		//	},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "MMM-CalendarExt3",
			position: "bottom_bar",
			classes: "thisMonth",
			config: {
					instanceId: "currentMonth",
					monthIndex: 0,
					mode: "month",
					locale: "en-US",
					useMarquee: true,
					calendars: [
						{
							url: "https://calendar.proton.me/api/calendar/v1/url/YA79ctgDUkdTbqQwbX84TQmfjYLiASJJMID6TdkLdU3jlLHnj1yC1LPiFpUKBj4LPCXXMr5wXLNeYufrEZbK7w==/calendar.ics?CacheKey=VVI5NJf6JRpXd4K07HPhcQ%3D%3D&PassphraseKey=KDhXosLbYCQNADl5li_ftHKN2xVXPX8726vGFSEYhkg%3D",
							name: "Dancey",
							color: "magenta"
						},
						{
							 url: "https://calendar.proton.me/api/calendar/v1/url/HumvnclH7vigXtwVOrlx6__gyFXvXgwB6PXTh0nbNg0e5JnKEjnQwVuEaJyjlUc810uPTYT3CH8VTnSjNNinCA==/calendar.ics?CacheKey=g7HkM-JLXtT1g8hxPg21SA%3D%3D&PassphraseKey=4itcGnN7EkfOqQynXwM_qYqeS7a1LJS_zltuB8Yj06U%3D",
							 name: "SB1671",
							 color: "brown"
						},
						{
							url: "https://calendar.proton.me/api/calendar/v1/url/928PFD4bVdvoIQcKp8jMAl8a3BwXpb3z8A0-1cYqgfTWntUiZDXcm2KsDVUGHoUHs_-i53Jjbr6vELS7zad6ZQ==/calendar.ics?CacheKey=m7tnKaCrcaFeRguTE_DJ0g%3D%3D&PassphraseKey=9VBkN_F5WjQ7UX_in0LvPZF2ATHRoggOhtMiJqo7VLI%3D",
							name: "Maya",
							color: "maroon"
						},
						{
							url: "https://calendar.proton.me/api/calendar/v1/url/7cn66oRIicwv4lQPVDQkpFVYNpYWAxOUSvG4MW_TBpPccy3-sk3pehgePApbgYApCC7xPYeX_DnV2CWFwrfxqA==/calendar.ics?CacheKey=aJPpI7UYG7yO9pzGaF3mFA%3D%3D&PassphraseKey=IVzTM19fvu3H9LiPo6-od323MZTs3H1kTT4dUCKICIQ%3D",
							name: "Work",
							color: "orange"
						},
						{
							url: "https://calendar.proton.me/api/calendar/v1/url/9QJ0vDBeaBMjyeDLhZIgjYDcQXbXvjJAvksUgBLPOYW_ARL3vwzHxEjp5h2VjwMCl0mfwVE-ZZZ_B6v0VqvFuA==/calendar.ics?CacheKey=5zkFZeWARM1FCRjWNkPbPw%3D%3D&PassphraseKey=Xs5HYrL1I-aKv0Ud_GAYdIhYENkjorphAv50i5FhWlU%3D",
							name: "Micha",
							color: "cyan"
						},
						{
							url: "https://calendar.proton.me/api/calendar/v1/url/q1pwR79GKD-uHhiqT9N6Sg8rMVb6qUTi2DQ8dm60O27lYvEXgXJotz0ErXlaQI_xuobCRyaq4r_mmBFNDDWw9g==/calendar.ics?CacheKey=jbZ_hjxmZ3oglHiJKn_q_w%3D%3D&PassphraseKey=Lf_inNbK67-LPhE7n2y20XumXSU4I32eurJsQL4MiHo%3D",
							name: "Family",
							color: "violet"
						},
						{
							url: "https://calendar.proton.me/api/calendar/v1/url/68G9fgvIqb3slvzFZnxVAEhCLDD9xOlIagAaP1-DfNSjtLNeg-qSisBpCp_VwAcIFNcl13tZij1YO4sAhea2-w==/calendar.ics?CacheKey=4umt8Tm9i0Cn2pzZOeuNXw%3D%3D&PassphraseKey=PtaGAS5sLOMsu7vXL4QpDhc_1anzgb45i7jdwnRJ0uE%3D",
							name: "Kai",
							color: "cyan"
						}
					]
				}
			
		},
		{
			module: "MMM-CalendarExt3",
			position: "bottom_bar",
			classes: "nextMonth",
			config: {
					instanceId: "nextMonth",
					monthIndex: 1,
					mode: "month",
					locale: "en-US",
					useMarquee: true,
					calendars: [
						{
							url: "https://calendar.proton.me/api/calendar/v1/url/YA79ctgDUkdTbqQwbX84TQmfjYLiASJJMID6TdkLdU3jlLHnj1yC1LPiFpUKBj4LPCXXMr5wXLNeYufrEZbK7w==/calendar.ics?CacheKey=VVI5NJf6JRpXd4K07HPhcQ%3D%3D&PassphraseKey=KDhXosLbYCQNADl5li_ftHKN2xVXPX8726vGFSEYhkg%3D",
							name: "Dancey",
							color: "magenta"
						},
						{
							 url: "https://calendar.proton.me/api/calendar/v1/url/HumvnclH7vigXtwVOrlx6__gyFXvXgwB6PXTh0nbNg0e5JnKEjnQwVuEaJyjlUc810uPTYT3CH8VTnSjNNinCA==/calendar.ics?CacheKey=g7HkM-JLXtT1g8hxPg21SA%3D%3D&PassphraseKey=4itcGnN7EkfOqQynXwM_qYqeS7a1LJS_zltuB8Yj06U%3D",
							 name: "SB1671",
							 color: "brown"
						},
						{
							url: "https://calendar.proton.me/api/calendar/v1/url/928PFD4bVdvoIQcKp8jMAl8a3BwXpb3z8A0-1cYqgfTWntUiZDXcm2KsDVUGHoUHs_-i53Jjbr6vELS7zad6ZQ==/calendar.ics?CacheKey=m7tnKaCrcaFeRguTE_DJ0g%3D%3D&PassphraseKey=9VBkN_F5WjQ7UX_in0LvPZF2ATHRoggOhtMiJqo7VLI%3D",
							name: "Maya",
							color: "yellow"
						},
						{
							url: "https://calendar.proton.me/api/calendar/v1/url/7cn66oRIicwv4lQPVDQkpFVYNpYWAxOUSvG4MW_TBpPccy3-sk3pehgePApbgYApCC7xPYeX_DnV2CWFwrfxqA==/calendar.ics?CacheKey=aJPpI7UYG7yO9pzGaF3mFA%3D%3D&PassphraseKey=IVzTM19fvu3H9LiPo6-od323MZTs3H1kTT4dUCKICIQ%3D",
							name: "Work",
							color: "orange"
						},
						{
							url: "https://calendar.proton.me/api/calendar/v1/url/9QJ0vDBeaBMjyeDLhZIgjYDcQXbXvjJAvksUgBLPOYW_ARL3vwzHxEjp5h2VjwMCl0mfwVE-ZZZ_B6v0VqvFuA==/calendar.ics?CacheKey=5zkFZeWARM1FCRjWNkPbPw%3D%3D&PassphraseKey=Xs5HYrL1I-aKv0Ud_GAYdIhYENkjorphAv50i5FhWlU%3D",
							name: "Micha",
							color: "lime"
						},
						{
							url: "https://calendar.proton.me/api/calendar/v1/url/q1pwR79GKD-uHhiqT9N6Sg8rMVb6qUTi2DQ8dm60O27lYvEXgXJotz0ErXlaQI_xuobCRyaq4r_mmBFNDDWw9g==/calendar.ics?CacheKey=jbZ_hjxmZ3oglHiJKn_q_w%3D%3D&PassphraseKey=Lf_inNbK67-LPhE7n2y20XumXSU4I32eurJsQL4MiHo%3D",
							name: "Family",
							color: "pink"
						},
						{
							url: "https://calendar.proton.me/api/calendar/v1/url/68G9fgvIqb3slvzFZnxVAEhCLDD9xOlIagAaP1-DfNSjtLNeg-qSisBpCp_VwAcIFNcl13tZij1YO4sAhea2-w==/calendar.ics?CacheKey=4umt8Tm9i0Cn2pzZOeuNXw%3D%3D&PassphraseKey=PtaGAS5sLOMsu7vXL4QpDhc_1anzgb45i7jdwnRJ0uE%3D",
							name: "Kai",
							color: "cyan"
						}
					]
				}
			
		},
		{
			module: "calendar",
			header: "Family Calendar",
			position: "top_left",
			config: {
				calendars: [
					{
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "jedi", //(Font Awesome Icons)
						url: "https://calendar.proton.me/api/calendar/v1/url/YA79ctgDUkdTbqQwbX84TQmfjYLiASJJMID6TdkLdU3jlLHnj1yC1LPiFpUKBj4LPCXXMr5wXLNeYufrEZbK7w==/calendar.ics?CacheKey=VVI5NJf6JRpXd4K07HPhcQ%3D%3D&PassphraseKey=KDhXosLbYCQNADl5li_ftHKN2xVXPX8726vGFSEYhkg%3D",
						name: "Dancey",
						color: "teal"
					},
					{
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "heart",
						url: "https://calendar.proton.me/api/calendar/v1/url/928PFD4bVdvoIQcKp8jMAl8a3BwXpb3z8A0-1cYqgfTWntUiZDXcm2KsDVUGHoUHs_-i53Jjbr6vELS7zad6ZQ==/calendar.ics?CacheKey=m7tnKaCrcaFeRguTE_DJ0g%3D%3D&PassphraseKey=9VBkN_F5WjQ7UX_in0LvPZF2ATHRoggOhtMiJqo7VLI%3D",
						name: "Maya",
						color: "red"
					},
					{
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "ghost",
						url: "https://calendar.proton.me/api/calendar/v1/url/7cn66oRIicwv4lQPVDQkpFVYNpYWAxOUSvG4MW_TBpPccy3-sk3pehgePApbgYApCC7xPYeX_DnV2CWFwrfxqA==/calendar.ics?CacheKey=aJPpI7UYG7yO9pzGaF3mFA%3D%3D&PassphraseKey=IVzTM19fvu3H9LiPo6-od323MZTs3H1kTT4dUCKICIQ%3D",
						name: "Work",
						color: "orange"
					},
					{
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "robot",
						url: "https://calendar.proton.me/api/calendar/v1/url/9QJ0vDBeaBMjyeDLhZIgjYDcQXbXvjJAvksUgBLPOYW_ARL3vwzHxEjp5h2VjwMCl0mfwVE-ZZZ_B6v0VqvFuA==/calendar.ics?CacheKey=5zkFZeWARM1FCRjWNkPbPw%3D%3D&PassphraseKey=Xs5HYrL1I-aKv0Ud_GAYdIhYENkjorphAv50i5FhWlU%3D",
						name: "Micha",
						color: "lime"
					},
					{
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "hamsa",
						url: "https://calendar.proton.me/api/calendar/v1/url/q1pwR79GKD-uHhiqT9N6Sg8rMVb6qUTi2DQ8dm60O27lYvEXgXJotz0ErXlaQI_xuobCRyaq4r_mmBFNDDWw9g==/calendar.ics?CacheKey=jbZ_hjxmZ3oglHiJKn_q_w%3D%3D&PassphraseKey=Lf_inNbK67-LPhE7n2y20XumXSU4I32eurJsQL4MiHo%3D",
						name: "Family",
						color: "purple"
					},
					{
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "truck-monster",
						url: "https://calendar.proton.me/api/calendar/v1/url/68G9fgvIqb3slvzFZnxVAEhCLDD9xOlIagAaP1-DfNSjtLNeg-qSisBpCp_VwAcIFNcl13tZij1YO4sAhea2-w==/calendar.ics?CacheKey=4umt8Tm9i0Cn2pzZOeuNXw%3D%3D&PassphraseKey=PtaGAS5sLOMsu7vXL4QpDhc_1anzgb45i7jdwnRJ0uE%3D",
						name: "Kai",
						color: "cyan"
					}
				]
			}
		},
		{
			module: "weather",
			position: "top_right",
			classes: "weather_now",
			config: {
				weatherProvider: "openmeteo",
				type: "current",
				lat: 36.153980,
				lon: -95.992775
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			classes: "weather_forcast",
			config: {
				weatherProvider: "openmeteo",
				type: "forecast",
				lat: 36.153980,
				lon: -95.992775
			}
		},
		{
			module: "MMM-Cursor",
			config: {
				timeout: 10000
			}
		},
		//{
		//	module: "newsfeed",
		//	position: "bottom_bar",
		//	config: {
		//		feeds: [
		//			{
		//				title: "New York Times",
		//				url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
		//			},
		//			{
		//				title: "NPR",
		//				url: "https://feeds.npr.org/1001/rss.xml"
		//			},
					//Error: Fetching Failed{
					//	title: "BBC Top Stories",
					//	url: "https://feedsbbci.co.uk/news/rss.xml"
					//},
					//{
					//	title: "CNN Top Stories",
					//	url: "https://rss.cnn.com/rss/edition.rss"
					//},
					//{
					//	title: "Washington Post",
					//	url: "https://feeds.washtingtonpost.com/rss/world"
					//},
		//			{
		//				title: "CBS Top Stories",
		//				url: "https://www.cbsnews.com/latest/rss/main"
		//			},
		//			{
		//				title: "ABC Breaking News",
		//				url: "https://abcnews.go.com/abcnews/topstories"
		//			},
		//			{
		//				title: "Fox News",
		//				url: "https://moxie.foxnews.com/google-publisher/latest.xml"
		//			},
		//			{
		//				title: "NBC News",
		//				url: "https://feeds.nbcnews.com/nbcnews/public/news"
		//			},
					//{
					//	title: "PBS",
					//	url: "https://www.pbs.org/newshour/feeds/rss/headlines"
					//}
		//		],
		//		showSourceTitle: true,
		//		showPublishDate: true,
		//		broadcastNewsFeeds: true,
		//		broadcastNewsUpdates: true
		//	}
		//},
		{
			module: "MMM-page-indicator",
			position: "bottom_bar",
			config: {
					activeBright: true,
				}
		},
		{
			module: "MMM-OnScreenMenu",
			position: "bottom_right",
			config: {
					touchmode: false,
					enableKeyboard: true,
				}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
