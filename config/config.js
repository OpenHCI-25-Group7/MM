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
			module: 'MMM-pages',
			config: {
				modules: [
					['page0'], //鏡子 -> 裂開
					['page1'], //晴天
					['page2'], //陰天
					['page3'], //小雨
					['page4'], //雷陣雨
				]
			}
		},
		{
			module: 'MMM-EmotionWeather',
			classes: 'page0',
			position: 'top_left',
		},
		{
			module: 'MMM-EmotionWeather',
			classes: 'page1',
			position: 'top_left',
		},
		{
			module: 'MMM-EmotionWeather',
			classes: 'page2',
			position: 'top_left',
		},
		{
			module: 'MMM-EmotionWeather',
			classes: 'page3',
			position: 'top_left',
		},
		{
			module: 'MMM-EmotionWeather',
			classes: 'page4',
			position: 'top_left',
		},
		{
			module: "MMM-HorizontalLine",
			classes: "page0", // 這個模組會在每個頁面顯示一條水平線
			position: "top_bar", // 你可以改成其他位置
		},
		{
			module: "MMM-HorizontalLine",
			classes: "page1", // 這個模組會在每個頁面顯示一條水平線
			position: "top_bar", // 你可以改成其他位置
		},
		{
			module: "MMM-HorizontalLine",
			classes: "page2", // 這個模組會在每個頁面顯示一條水平線
			position: "top_bar", // 你可以改成其他位置
		},
		{
			module: "MMM-HorizontalLine",
			classes: "page3", // 這個模組會在每個頁面顯示一條水平線
			position: "top_bar", // 你可以改成其他位置
		},
		{
			module: "MMM-HorizontalLine",
			classes: "page4", // 這個模組會在每個頁面顯示一條水平線
			position: "top_bar", // 你可以改成其他位置
		},
		{
			module: "MMM-Location",
			classes: "page0", // 這個模組會在每個頁面顯示位置資訊
			position: "top_left", // 你可以改成其他位置
		
		},
		{
			module: "MMM-Date",
			classes: "page0", // 這個模組會在每個頁面顯示日期
			position: "top_right", // 你可以改成其他位置
		},
		{
			module: "MMM-Date",
			classes: "page1", // 這個模組會在每個頁面顯示日期
			position: "top_right", // 你可以改成其他位置
		},
		{
			module: "MMM-Date",
			classes: "page2", // 這個模組會在每個頁面顯示日期
			position: "top_right", // 你可以改成其他位置
		},
		{
			module: "MMM-Date",
			classes: "page3", // 這個模組會在每個頁面顯示日期
			position: "top_right", // 你可以改成其他位置
		},
		{
			module: "MMM-Date",
			classes: "page4", // 這個模組會在每個頁面顯示日期
			position: "top_right", // 你可以改成其他位置
		},
		{
			module: "MMM-SimpleTemp",
			classes: "page0", // 這個模組會在每個頁面顯示簡單的溫度資訊
			position: "middle_center", // ← 你可以改成 bottom_center 等你想要的位置
		},
		{
			module: "MMM-SimpleTemp",
			classes: "page1", // 這個模組會在每個頁面顯示簡單的溫度資訊
			position: "middle_center", // ← 你可以改成 bottom_center 等你想要的位置
		},
		{
			module: "MMM-SimpleTemp",
			classes: "page2", // 這個模組會在每個頁面顯示簡單的溫度資訊
			position: "middle_center", // ← 你可以改成 bottom_center 等你想要的位置
		},
		{
			module: "MMM-SimpleTemp",
			classes: "page3", // 這個模組會在每個頁面顯示簡單的溫度資訊
			position: "middle_center", // ← 你可以改成 bottom_center 等你想要的位置
		},
		{
			module: "MMM-SimpleTemp",
			classes: "page4", // 這個模組會在每個頁面顯示簡單的溫度資訊
			position: "middle_center", // ← 你可以改成 bottom_center 等你想要的位置
		},
		{
			module: "MMM-TodayWeatherStatus",
			classes: "page0", // 這個模組會在每個頁面顯示今天的天氣狀態
			position: "bottom_center", // 你想顯示的位置
			config: {
				lat: 25.038,
				lon: 121.5645
			}
		},
		{
			module: "MMM-CustomClock",
			classes: "page0", // 這個模組會在第二頁顯示自訂時鐘
			position: "bottom_left"
		},
		{
			module: "MMM-CustomClock",
			classes: "page1", // 這個模組會在第二頁顯示自訂時鐘
			position: "bottom_left"
		},
		{
			module: "MMM-CustomClock",
			classes: "page2", // 這個模組會在第二頁顯示自訂時鐘
			position: "bottom_left"
		},
		{
			module: "MMM-CustomClock",
			classes: "page3", // 這個模組會在第二頁顯示自訂時鐘
			position: "bottom_left"
		},
		{
			module: "MMM-CustomClock",
			classes: "page4", // 這個模組會在第二頁顯示自訂時鐘
			position: "bottom_left"
		},
		{
			module: "MMM-FamilyWeatherStatus",
			classes: "page0", // 這個模組會在每個頁面顯示家庭成員的天氣狀態
			position: "top_right" // or "none"，你已經用 fixed 定位
		},
		{
			module: "MMM-FamilyWeatherStatus",
			classes: "page1", // 這個模組會在每個頁面顯示家庭成員的天氣狀態
			position: "top_right" // or "none"，你已經用 fixed 定位
		},
		{
			module: "MMM-FamilyWeatherStatus",
			classes: "page2", // 這個模組會在每個頁面顯示家庭成員的天氣狀態
			position: "top_right" // or "none"，你已經用 fixed 定位
		},
		{
			module: "MMM-FamilyWeatherStatus",
			classes: "page3", // 這個模組會在每個頁面顯示家庭成員的天氣狀態
			position: "top_right" // or "none"，你已經用 fixed 定位
		},
		{
			module: "MMM-FamilyWeatherStatus",
			classes: "page4", // 這個模組會在每個頁面顯示家庭成員的天氣狀態
			position: "top_right" // or "none"，你已經用 fixed 定位
		},


		{// 新加上的頁面
		module: "MMM-InfoPage",
		classes: "page5", // 第一頁資訊 // 或你想要的區域
		},
		{
			module: "MMM-BackgroundVideo",
			classes: "page0", // 第一頁背景
			position: "fullscreen_above" // 第一頁背景
		},
		{
			module: "MMM-BackgroundVideo2",
			classes: "page1", // 第二頁背景
			position: "fullscreen_above" // 第二頁背景
		},
		{
			module: "MMM-BackgroundVideo3",
			classes: "page2", // 第三頁背景
			position: "fullscreen_above" // 第三頁背景
		},
		{
			module: "MMM-BackgroundVideo4",
			classes: "page3", // 第四頁背景
			position: "fullscreen_above" // 第四頁背景
		},
		{
			module: "MMM-BackgroundVideo5",
			classes: "page4", // 第五頁背景
			position: "fullscreen_above" // 第五頁背景
		},
		{
			module: "MMM-KeyboardPageSwitcher",
			position: "top_bar" // 這個模組可以放在任何位置，因為它只監聽鍵盤事件
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }

		/*{
			module: "clock",
			position: "bottom_left"
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

			// {
		// 	module: 'MMM-Pages',
		// 	config: {
		// 		modules: [
		// 		// 頁面 1（主頁面）
		// 		[
		// 			"MMM-EmotionWeather",
		// 			"MMM-FamilyWeatherStatus",
		// 			"MMM-Date",
		// 			"MMM-CustomClock",
		// 			"MMM-TodayWeatherStatus",
		// 			"MMM-Location",
		// 			"MMM-SimpleTemp",
		// 			"MMM-BackgroundVideo" // ✅ 第一頁背景加在這
		// 		],
		// 		// 頁面 2（背景影片頁）
		// 		[
		// 			"MMM-BackgroundVideo2" // ✅ 第二頁背景加在這
		// 		]
		// 		],
		// 		fixed: [], // 永遠顯示的模組，這裡你已經設定為空沒問題
		// 		// rotationTime: 0 // 禁用自動輪播
		// 	}
		// },

		/*{
			module: "MMM-ProximityPageSwitcher",
			config: {
				endpoint: "http://localhost:3001/distance",
				threshold: 100
			}
		}*/
				/*{
			module: "MMM-Sunrise",
			position: "top_left"
		},
		{
			module: "MMM-Sunset",
			position: "top_left"
		},*/