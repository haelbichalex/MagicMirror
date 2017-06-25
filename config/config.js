/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses.

	language: "de",
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
		{
			module: "clock",
			position: "top_left",
            classes: 'everyone default'
		},/*
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o ",
						url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
					}
				]
			}
		},*/
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Augsburg,Germany",
				locationID: "",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "88de1424b0ddf97887e0b63b68947125"
			},
            classes: 'everyone default'
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Augsburg,Germany",
				locationID: "",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "88de1424b0ddf97887e0b63b68947125"
			},
            classes: 'everyone default'
		},
		{
			module: "newsfeed",
			position: "bottom_left",
			config: {
				feeds: [
					{
						title: "Die Welt Nachrichten",
						url: "https://www.welt.de/feeds/topnews.rss"
					}
				],
				showSourceTitle: false,
				showPublishDate: true,
				showDescription: true,
				updateInterval: 20000,
			},
            classes: 'default'
		},
        {
            module: 'MMM-soccer',
            position: 'bottom_right',
            config: {
                focus_on: {"GERMANY": "FC Bayern München"},
				max_teams: 5
            },
            classes: 'default'
        },
		{
            module: 'MMM-Scrobbler',

            position: 'bottom_left',
            config: {

                username: 'haelbichalex',

                apikey: '7c2191ff00e4826685a3a82647db5628',

                updateInterval: 15 * 1000,
                delayCount: 5,
                delayInterval: 120*1000,
                animationSpeed: 1000,
                showAlbumArt: true,
                showMetaData: true,
            },
            classes: 'party'
        },
        {
            module: 'MMM-ProfileSwitcher',
            config: {
            	/*
                timers: {
                    "party": {
                        profile: 'default',
                        time: 15 * 1000
                    },

                    "default": {
                        profile: 'party',
                        time: 15 * 1000
                    }
                },*/

                enterMessages: {
                    "party": "Let's get this party started!",
                    "default": "Hallo Judith, Lorenz & Alex"
                },

                leaveMessages: false
            }
        },
        {
            module: "MMM-Cocktails",
            position: "bottom_right", // Editable footprint - Fits anywhere.
            config: {
                maxWidth: "300px",     // See provided .css file for full customization options
                header: ""
            },
            classes: 'party'
        },

        {
            module: 'MMM-Buttons',
            config: {
                buttons: [
                    {
                        pin: 4,
                        name: "monitor_control",
                        longPress: {
                            notification: "CURRENT_PROFILE",
                            payload: 'party',
                            title: 'TITEL',
                            message: 'message'
                        },
                        shortPress: {
                            notification: "CURRENT_PROFILE",
                            payload: 'default'
                        }
                    },
                ],
                minLongPressTime: 2000
            }
        },
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
