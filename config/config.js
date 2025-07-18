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

	language: "zh_tw",
	locale: "zh-TW",   // this variable is provided as a consistent location
			   // it is currently only used by 3rd party modules. no MagicMirror code uses this value
			   // as we have no usage, we  have no constraints on what this field holds
			   // see https://en.wikipedia.org/wiki/Locale_(computer_software) for the possibilities

	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		/*{
			module: "clock",
			position: "top_left"
		},*/
		/*{
			module: "calendar",
			position: "top_left",
			config: {
				maximumEntries: 6, // 顯示幾筆
				maximumNumberOfDays: 90, // 顯示多遠的未來
				calendars: [
				{
					symbol: "🔔",
					url: "https://calendar.google.com/calendar/ical/abc1234567890%40group.calendar.google.com/public/basic.ics"
				}
				]
			}
		},*/
		/*{
			module: "compliments",
			position: "lower_third"
		},*/
		/*{
		module: "weather",
		position: "top_right",
		module: "weather",
		position: "top_right",
		config: {
			weatherProvider: "openmeteo",
			type: "current",
			lat: 25.0478,
			lon: 121.5319
			}
		},*/
		/*{
		module: "weather",
		position: "top_right",
		header: "Weather Forecast",
		module: "weather",
		position: "top_right",
		config: {
			weatherProvider: "openmeteo",
			type: "forecast",
			lat: 25.0478,
			lon: 121.5319
			}
		},*/
		/*{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "中央社即時新聞",
						url: "https://feeds.feedburner.com/rsscna/intworld"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},*/
		{
			module: "MMM-EmotionWeather",
			position: "top_left" // ← 你可以改成想顯示的位置
		},
		{
			module: "MMM-HorizontalLine",
			position: "bottom_center" // ✅ 就會顯示在畫面底部中央
		},
		{
			module: "MMM-Location",
			position: "bottom_left" // 位置其實沒用，因為你用 absolute 定位了
		},
		{
			module: "MMM-Date",
			position: "bottom_left", // 你可以改成想顯示的位置
		},
		{
			module: "MMM-Sunrise",
			position: "top_left"
		},
		{
			module: "MMM-Sunset",
			position: "top_left"
		},
		{
			module: "weather",
			position: "middle_center",  // ✅ 你可以改位置
			config: {
				weatherProvider: "openmeteo",
				type: "current",
				lat: 25.038,         // ✅ 你的緯度（例如台北）
				lon: 121.5645,       // ✅ 你的經度（例如台北）
				location: "Taipei",
				showLocation: false  // ❌ 不要顯示城市名稱
			}
		}


	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }