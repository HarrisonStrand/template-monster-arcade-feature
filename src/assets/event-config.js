var element = document.getElementById("eventInfo");
element.value = JSON.stringify({
    "event": {
        "name": "Name",
        "year": "Year",
        "logo": "metaweb-event_logo.svg",
        "theme": {
            "name": "dark",
            "client": "",
            "colors": {
                "primary": "#1BBFDD",
                "secondary": "#DDE123",
                "carousel-background": '',
            }
        },
        "arcade-page": {
          "theme": "dark",
          "backgroundImg": "arcade-background.jpeg"

        },
        "featuredSessionsCarousel": {
            "heading": "Carousel Title",
            "buttonText": "Button Text 1",
            "items": [{
                    "image": "metaweb-featuredsessions-1.jpg",
                    "title": "FIRST SESSION 1",
                    "heading": "Session Speaker 1",
                    "description": "Session description of approximately 10 words total",
                    "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile",
                    "expiration": "2021-06-26T23:59"
                },
                {
                    "image": "metaweb-featuredsessions-1.jpg",
                    "title": "SECOND SESSION",
                    "heading": "Session Speaker 2",
                    "description": "Session description of approximately 10 words total",
                    "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile",
                    "expiration": "2021-06-26T23:59"
                }
            ]
        },
        "sponsors": [{
                "image": "metaweb-sponsors-1.svg",
                "link": "https://cyberstrong.hubb.me/schedule-builder/profile",
                "newTabLink": true
            },
            {
                "image": "metaweb-sponsors-2.svg",
                "link": "https://cyberstrong.hubb.me/schedule-builder/profile",
                "newTabLink": true
            },
            {
                "image": "metaweb-sponsors-3.svg",
                "link": "https://cyberstrong.hubb.me/schedule-builder/profile"
            },
            {
                "image": "metaweb-sponsors-4.svg",
                "link": "https://cyberstrong.hubb.me/schedule-builder/profile",
                "newTabLink": true
            },
            {
                "image": "metaweb-sponsors-5.svg",
                "link": "https://cyberstrong.hubb.me/schedule-builder/profile"
            },
            {
                "image": "metaweb-sponsors-6.svg",
                "link": "https://cyberstrong.hubb.me/schedule-builder/profile",
                "newTabLink": true
            }
        ],
        "lobby": {
            "backgroundImage": "metaweb-main-bg.jpg",
            "backgroungSVG": "metaweb-main-shape.svg",
            "overline": "Welcome Message",
            "description": [
                "This is the paragraph 1 of the event description. Please use approximately 100 words. egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim",
                "This is the paragraph 2 of the event description. Please use approximately 100 words. egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim",
                "This is the paragraph number 3 of the event description. Please use approximately 100 words. egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim"
            ],
            "video": [{
                    "type": "vimeo",
                    "code": "216715885",
                    "date": '2021-03-26T19:20:00',
                    "timezone": 'America/Los_Angeles'
                },
                {
                    "type": "vimeo",
                    "code": "481011397",
                    "date": '2021-03-25T23:59',
                    "timezone": 'America/Los_Angeles'
                },
                {
                    "type": "vimeo",
                    "code": "351066245",
                    "date": '2021-03-20T23:59',
                    "timezone": 'America/Los_Angeles'
                },
            ],
            "verticalButtons": [
              {
                "buttonText": "DINAMIC RENDERED BUTTON.",
                "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/home",
                "startsAt": '2021-04-12T21:27',
                "endsAt": '2021-04-15T23:59',
              },
              {
                "buttonText": 'SIMPLE BUTTON NO DINAMIC CHANGE',
                "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/home",
                "startsAt": '2021-04-12T21:27:00',
                "endsAt": '2021-04-15T23:59',
              }
            ]
        },
        "sessions": {
            "backgroundImage": "SessionsMain.jpg",
            "overline": "Coming Up",
            "heading": "Digital Music & Mixdowns",
            "subheading": "Joel Zimmerman, Isaac Schutrups, & Eric Prydz",
            "description": [
                "Audio mixing is the process of taking recorded tracks and blending them together. Tracks are blended using various processes such as EQ, Compression and Reverb. The goal of mixing is to bring out the best in your multi-track recording by adjusting levels, panning, and time-based audio effects (chorus, reverb, delay). The aim is to sculpt your arrangement to make sense of all your tracks..."
            ],
            "sessionsButton": {
                "buttonLink": "/#/session/",
                "buttonText": 'BUTTON TEXT 1'
            },
            "customCarousel": true
        },
        "community": {
            "backgroundImage": "metaweb-community-bg.jpg",
            "overline": "Welcome Message",
            "heading": "Page Title",
            "description": [
                "This is the page description. Please use approximately 100 words. egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim"
            ],
            "optionalButton": {
                "buttonText": "View All Attendees",
                "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/community",
            },
            "buttonText": "Button Text 1",
            "groups": [{
                    "image": "metaweb-community-list-1.svg",
                    "title": "Title",
                    "description": "Description - Generally ten to fifteen words.",
                    "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile"
                },
                {
                    "image": "metaweb-community-list-2.svg",
                    "title": "Title",
                    "description": "Description - Generally ten to fifteen words.",
                    "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile"
                },
                {
                    "image": "metaweb-community-list-3.svg",
                    "title": "Title",
                    "description": "Description - Generally ten to fifteen words.",
                    "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile"
                },
                {
                    "image": "metaweb-community-list-4.svg",
                    "title": "Title",
                    "description": "Description - Generally ten to fifteen words.",
                    "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile"
                },
            ],
            "carousel": {
                "heading": "Carousel Heading - Approximately 25 characters",
                "items": [{
                        "image": "metaweb-community-carousel-1.jpg",
                        "title": "First Last 1",
                        "heading": "Title",
                        "subheading": "Company",
                        "description": "Quick BIO - approximately ten words.",
                        "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile",
                        "expiration": "05 November 2021 14:48 UTC"
                    },
                    {
                        "image": "metaweb-community-carousel-2.jpg",
                        "title": "First Last 2",
                        "heading": "Title",
                        "subheading": "Company",
                        "description": "Quick BIO - approximately ten words.",
                        "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile",
                        "expiration": "05 November 2020 14:48 UTC"
                    },
                    {
                        "image": "metaweb-community-carousel-3.jpg",
                        "title": "First Last 3",
                        "heading": "Title",
                        "subheading": "Company",
                        "description": "Quick BIO - approximately ten words.",
                        "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile",
                        "expiration": "06 November 2021 14:48 UTC"
                    },
                    {
                        "image": "metaweb-community-carousel-4.jpg",
                        "title": "First Last 4",
                        "heading": "Title",
                        "subheading": "Company",
                        "description": "Quick BIO - approximately ten words.",
                        "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile",
                        "expiration": "07 November 2021 14:48 UTC"
                    },
                    {
                        "image": "metaweb-community-carousel-5.jpg",
                        "title": "First Last 5",
                        "heading": "Title",
                        "subheading": "Company",
                        "description": "Quick BIO - approximately ten words.",
                        "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile",
                        "expiration": "08 November 2021 14:48 UTC"
                    },
                    {
                        "image": "metaweb-community-carousel-6.jpg",
                        "title": "First Last 6",
                        "heading": "Title",
                        "subheading": "Company",
                        "description": "Quick BIO - approximately ten words.",
                        "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile",
                        "expiration": "08 November 2021 14:48 UTC"
                    },
                    {
                        "image": "metaweb-community-carousel-7.jpg",
                        "title": "First Last 7",
                        "heading": "Title",
                        "subheading": "Company",
                        "description": "Quick BIO - approximately ten words.",
                        "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile",
                        "expiration": "08 November 2021 14:48 UTC"
                    },
                    {
                        "image": "metaweb-community-carousel-8.jpg",
                        "title": "First Last 8",
                        "heading": "Title",
                        "subheading": "Company",
                        "description": "Quick BIO - approximately ten words.",
                        "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile",
                        "expiration": "08 November 2021 14:48 UTC"
                    }
                ]
            }
        },
        "meetings": {
            "backgroundImage": "metaweb-meetings-bg.jpg",
            "overline": "Welcome message",
            "heading": "Page title",
            "subheading": "what does this do?",
            "description": "This is the page description. Please use approximately 100 words. egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim",
            "buttonText": "Button text 1",
            "meetings": [{
                    "image": "metaweb-meetings-list-1.svg",
                    "title": "Title 1",
                    "description": "Description - approximately ten words.",
                    "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile"
                },
                {
                    "image": "metaweb-meetings-list-2.svg",
                    "title": "Title 2",
                    "description": "Description - approximately ten words.",
                    "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile"
                },
                {
                    "image": "metaweb-meetings-list-3.svg",
                    "title": "Title 3",
                    "description": "Description - approximately ten words.",
                    "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile"
                },
                {
                    "image": "metaweb-meetings-list-4.svg",
                    "title": "Title 4",
                    "description": "Description - approximately ten words.",
                    "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile"
                }
            ],
            "carousel": {
                "heading": "Carousel Heading - Approximately 25 characters",
                "buttonText": "Button Text 2",
                "items": [{
                        "image": "metaweb-meetings-carousel-1.jpg",
                        "title": "Meeting Title 1",
                        "heading": "Time",
                        "subheading": "Date",
                        "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile",
                        "expiration": "05 November 2021 14:48 UTC"
                    },
                    {
                        "image": "metaweb-meetings-carousel-2.jpg",
                        "title": "Meeting Title 2",
                        "heading": "Time",
                        "subheading": "Date",
                        "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile",
                        "expiration": "06 November 2021 14:48 UTC"
                    },
                    {
                        "image": "metaweb-meetings-carousel-3.jpg",
                        "title": "Meeting Title 3",
                        "heading": "Time",
                        "subheading": "Date",
                        "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile",
                        "expiration": "05 November 2021 14:48 UTC"
                    },
                    {
                        "image": "metaweb-meetings-carousel-4.jpg",
                        "title": "Meeting Title 4",
                        "heading": "Time",
                        "subheading": "Date",
                        "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile",
                        "expiration": "08 November 2021 14:48 UTC"
                    },
                    {
                        "image": "metaweb-meetings-carousel-5.jpg",
                        "title": "Meeting Title 5",
                        "heading": "Time",
                        "subheading": "Date",
                        "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile",
                        "expiration": "04 November 2021 14:48 UTC"
                    },
                    {
                        "image": "metaweb-meetings-carousel-6.jpg",
                        "title": "Meeting Title 6",
                        "heading": "Time",
                        "subheading": "Date",
                        "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile",
                        "expiration": "04 November 2021 14:48 UTC"
                    },
                    {
                        "image": "metaweb-meetings-carousel-7.jpg",
                        "title": "Meeting Title 7",
                        "heading": "Time",
                        "subheading": "Date",
                        "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile",
                        "expiration": "04 November 2021 14:48 UTC"
                    },
                    {
                        "image": "metaweb-meetings-carousel-8.jpg",
                        "title": "Meeting Title 8",
                        "heading": "Time",
                        "subheading": "Date",
                        "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile",
                        "expiration": "04 November 2021 14:48 UTC"
                    },
                ]
            }
        },
        "exhibition": {
            "backgroundImage": "metaweb-expo-bg.jpg",
            "overline": "Welcome message",
            "heading": "Page title",
            "subheading": "what does this do?",
            "description": [
                "This is the page description. Please use approximately 100 words. egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim",
            ],
            "button": {
                "buttonText": "Button Text 1",
                "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile",
            },
            "carousel": {
                "heading": "Carousel heading - Approximately 25 characters",
                "buttonText": "Button Text 2",
                "items": [{
                        "image": "metaweb-expo-carousel-1.jpg",
                        "title": "Title 1",
                        "heading": "Heading",
                        "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile",
                        "expiration": "05 November 2021 14:48 UTC"
                    },
                    {
                        "image": "metaweb-expo-carousel-2.jpg",
                        "title": "Title 2",
                        "heading": "Heading",
                        "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile",
                        "expiration": "05 November 2021 14:48 UTC"
                    },
                    {
                        "image": "metaweb-expo-carousel-3.jpg",
                        "title": "Title 3",
                        "heading": "Heading",
                        "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile",
                        "expiration": "04 November 2021 14:48 UTC"
                    },
                    {
                        "image": "metaweb-expo-carousel-4.jpg",
                        "title": "Title 4",
                        "heading": "Heading",
                        "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile",
                        "expiration": "08 November 2021 14:48 UTC"
                    },
                    {
                        "image": "metaweb-expo-carousel-5.jpg",
                        "title": "Title 5",
                        "heading": "Heading",
                        "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile",
                        "expiration": "08 November 2021 14:48 UTC"
                    },
                    {
                        "image": "metaweb-expo-carousel-6.jpg",
                        "title": "Title 6",
                        "heading": "Heading",
                        "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile",
                        "expiration": "08 November 2021 14:48 UTC"
                    },
                    {
                        "image": "metaweb-expo-carousel-7.jpg",
                        "title": "Title 7",
                        "heading": "Heading",
                        "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile",
                        "expiration": "08 November 2021 14:48 UTC"
                    },
                    {
                        "image": "metaweb-expo-carousel-8.jpg",
                        "title": "Title 8",
                        "heading": "Heading",
                        "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile",
                        "expiration": "08 November 2021 14:48 UTC"
                    }
                ]
            }
        },
        "mdSponsor": {
            "backgroundImage": "sponsor3dlobby30.jpg",
            "mobileTextColor": "#FFFFFF",
            "mobileTileColor": "purple",
            "wallLinks": [
                { "title": "Platinum Wall", "href": "/../../fe/schedule-builder/sponsors/", "location": 1 },
                { "title": "Gold Wall", "href": "/../../fe/schedule-builder/sponsors/", "location": 2 },
                { "title": "Silver Wall", "href": "/../../fe/schedule-builder/sponsors/", "location": 3 },
                { "title": "Platinum Wall", "href": "/../../fe/schedule-builder/sponsors/", "location": 4 },
                { "title": "Gold Wall", "href": "/../../fe/schedule-builder/sponsors/", "location": 5 },
                { "title": "Silver Wall", "href": "/../../fe/schedule-builder/sponsors/", "location": 6 },
                { "title": "Platinum Wall", "href": "/../../fe/schedule-builder/pages/Index/PlatinumHall", "location": 7 },
                { "title": "Gold Wall", "href": "/../../fe/schedule-builder/sponsors/", "location": 8 },
                { "title": "Silver Wall", "href": "/../../fe/schedule-builder/sponsors/", "location": 9 },
                { "title": "Platinum Wall", "href": "/../../fe/schedule-builder/pages/Index/PlatinumHall", "location": 10 },
                { "title": "Gold Wall", "href": "/../../fe/schedule-builder/sponsors/", "location": 11 },
                { "title": "Silver Wall", "href": "/../../fe/schedule-builder/sponsors/", "location": 12 },
                { "title": "Platinum Wall", "href": "/../../fe/schedule-builder/pages/Index/PlatinumHall", "location": 13 },
                { "title": "Gold Wall", "href": "/../../fe/schedule-builder/sponsors/", "location": 14 },
                { "title": "Silver Wall", "href": "/../../fe/schedule-builder/sponsors/", "location": 15 },
                { "title": "Platinum Wall", "href": "/../../fe/schedule-builder/pages/Index/PlatinumHall", "location": 16 },
                { "title": "Gold Wall", "href": "/../../fe/schedule-builder/sponsors/", "location": 17 },
                { "title": "Silver Wall", "href": "/../../fe/schedule-builder/sponsors/", "location": 18 },
                { "title": "Platinum Wall", "href": "/../../fe/schedule-builder/pages/Index/PlatinumHall", "location": 19 },
                { "title": "Gold Wall", "href": "/../../fe/schedule-builder/sponsors/", "location": 20 },
                { "title": "Silver Wall", "href": "/../../fe/schedule-builder/sponsors/", "location": 21 },
                { "title": "Platinum Wall", "href": "/../../fe/schedule-builder/pages/Index/PlatinumHall", "location": 22 },
                { "title": "Gold Wall", "href": "/../../fe/schedule-builder/sponsors/", "location": 23 },
                { "title": "Silver Wall", "href": "/../../fe/schedule-builder/sponsors/", "location": 24 },
                { "title": "Platinum Wall", "href": "/../../fe/schedule-builder/pages/Index/PlatinumHall", "location": 25 },
                { "title": "Gold Wall", "href": "/../../fe/schedule-builder/sponsors/", "location": 26 },
                { "title": "Silver Wall", "href": "/../../fe/schedule-builder/sponsors/", "location": 27 },
                { "title": "Platinum Wall", "href": "/../../fe/schedule-builder/pages/Index/PlatinumHall", "location": 28 },
                { "title": "Gold Wall", "href": "/../../fe/schedule-builder/sponsors/", "location": 29 },
                { "title": "Silver Wall", "href": "/../../fe/schedule-builder/sponsors/", "location": 30 },
            ],
            "columnLinks": [
                { "title": "Main Lobby", "href": "/../../fe/schedule-builder/home" }
            ]
        },
        "mdExpo": {
            "backgroundImage": "expo3dlobby.png",
            "mobileTextColor": "#FFFFFF",
            "mobileTileColor": "purple",
            "wallLinks": [{
                    "title": "Platinum Wall",
                    "href": "/../../fe/schedule-builder/pages/Index/PlatinumHall",
                    "location": 1,
                },
                {
                    "title": "Gold Wall",
                    "href": "/../../fe/schedule-builder/sponsors/",
                    "location": 2
                },
                {
                    "title": "Silver Wall",
                    "href": "/../../fe/schedule-builder/sponsors/",
                    "location": 3
                },
            ],
            "columnLinks": [{
                    "title": "All Sessions",
                    "href": "/../../fe/schedule-builder/sponsors",
                    "location": 2
                },
                {
                    "title": "Main Lobby",
                    "href": "/../../fe/schedule-builder/home",
                    "location": 1
                },
            ]
        },
        "mdSessions": {
            "backgroundImage": "SessionLobby2DirectionButtons.jpg",
            "mobileTextColor": "#FFFFFF",
            "mobileTileColor": "purple",
            "wallLinks": [{
                    "location": "1",
                    "title": "Session 1",
                    "href": "/../../schedule-builder/sessions?session-date=all-days&session-type=23962"
                },
                {
                    "location": "2",
                    "title": "Session 2",
                    "href": "/../../schedule-builder/sessions?session-date=all-days&session-type=23960",
                    "backgroundImage": "square-logo.png"
                },
                {
                    "location": "3",
                    "title": "Session 3",
                    "href": "../../schedule-builder/sessions?session-date=all-days&session-type=23959",
                    "backgroundImage": "vons-logo.svg"
                },
                {
                    "location": "4",
                    "title": "Session 4",
                    "href": "/../../schedule-builder/sessions?session-date=all-days&session-type=23962",
                    "backgroundImage": "logo-newseasons.svg"
                },
                {
                    "location": "5",
                    "title": "Session 5",
                    "href": "/../../schedule-builder/speakers",
                    "backgroundImage": "frys-logo.png"
                },
                {
                    "location": "6",
                    "title": "Session 6",
                    "href": "/../../schedule-builder/speakers",
                    "backgroundImage": ""
                }
            ],
            "columnLinks": [{
                    "title": "All Sessions",
                    "href": "/../../schedule-builder/sessions",
                    "location": 1,
                    "backgroundImage": ""
                },
                {
                    "title": "Main Lobby",
                    "href": "/../../schedule-builder/home",
                    "location": 2,
                    "backgroundImage": ""
                }
            ]
        },
        "posters": {
            customStyleFile: "custom-posters",
            items: [{
                    "imgPath": "707126-opt.jpg",
                    "itemTitle": "An Augmented Reality C2 Sand Table Visualization Atop an Advanced User Interface Display",
                    "itemContributors": "Bryan Croft, NIWC Pacific",
                    "extraFields": [
                        { "title": "Extra Field 1", "content": "extra field 1 content." },
                        { "title": "Extra Field 2", "content": "extra field 2 content." }
                    ],
                    "itemCategory": "Augmented & Virtual Realities",
                    "itemLink": "707126"
                },
                {
                    "imgPath": "707126-opt.jpg",
                    "itemTitle": "An Augmented Reality C2 Sand Table Visualization Atop an Advanced User Interface Display",
                    "itemContributors": "Bryan Croft, NIWC Pacific",
                    "extraFields": [
                        { "title": "Extra Field 1", "content": "extra field 1 content." },
                        { "title": "Extra Field 2", "content": "extra field 2 content." }
                    ],
                    "itemCategory": "Augmented & Virtual Realities",
                    "itemLink": "707126"
                },
                {
                    "imgPath": "707127-opt.jpg",
                    "itemTitle": "CrowbarLimbs: A Fatigue-reducing VR Typing System",
                    "itemContributors": "Muhammad Abu Bakar, Yuan Ze University; Hao-Han Hsueh, Yuan Ze University; Yu-Ting Tsai, Yuan Ze University; Elena Carolina Li, University of Taipei",
                    "itemCategory": "Augmented & Virtual Realities",
                    "itemLink": "707127"
                },
                {
                    "imgPath": "707265-opt.jpg",
                    "itemTitle": "Wide Viewing Angle 3D Aerial Display Using Micro-mirror Array Plates and Aerially-coupled 3D Light Sources",
                    "itemContributors": "Naoki Hashimoto, The University of Electro-Communications; Kota Murofushi, The University of Electro-Communications",
                    "itemCategory": "Display & Rendering",
                    "itemLink": "707265"
                },
                {
                    "imgPath": "707279-opt.jpg",
                    "itemTitle": "Robotic Surgical Training Simulation for Dexterity Training of Hands and Fingers",
                    "itemContributors": "Sriranjan Rasakatla, Tokyo University of Agriculture and Technology; Ikuo Mizuuchi, Tokyo University of Agriculture and Technology; Bipin Indurkhya, Jagiellonian University",
                    "itemCategory": "Assistive & Adaptive Technology",
                    "itemLink": "707279"
                }, {
                    "imgPath": "707420-opt.jpg",
                    "itemTitle": "Non-photorealistic Radiance Remapping",
                    "itemContributors": "Kohei Doi, Kyushu University; Yuki Morimoto, Kyushu University",
                    "itemCategory": "Display & Rendering",
                    "itemLink": "707420"
                }, {
                    "imgPath": "707121.jpg",
                    "itemTitle": "A CAD Interface for Drawing With Signed Distance Functions",
                    "itemContributors": "Nicolas Schmidt, Input Experience",
                    "itemCategory": "Art & Design",
                    "itemLink": "707121"
                }, {
                    "imgPath": "707242.jpg",
                    "itemTitle": "A Feast for the Eyes: Representing Synesthesia Through 3D Printed Artefacts",
                    "itemContributors": "Meijia Wu, Bournemouth University, National Centre of Computer Animation; Oliver Mag Gingrich, Bournemouth University, National Centre of Computer Animation",
                    "itemCategory": "Art & Design",
                    "itemLink": "707242"
                }, {
                    "imgPath": "707414.jpg",
                    "itemTitle": "An Art-directed Workflow for Transferring Facial Action Coding Between Models With Different Mesh Topologies",
                    "itemContributors": "Qiao Wang, Texas A&M University; Ergun Akleman, Texas A&M University",
                    "itemCategory": "Art & Design",
                    "itemLink": "707414"
                }, {
                    "imgPath": "707122.jpg",
                    "itemTitle": "Automatic Vector Graphic Organization and Asset Extraction",
                    "itemContributors": "Praveen Kumar Dhanuka, Adobe Inc.; Vineet batra, Adobe Inc.; Ankit Phogat, Adobe Inc.; Sumit Dhingra, Adobe Inc.",
                    "itemCategory": "Art & Design",
                    "itemLink": "707122"
                }, {
                    "imgPath": "707420-opt.jpg",
                    "itemTitle": "Concurrent Editing of Vector Graphics Based on Similarity",
                    "itemContributors": "Ankit Phogat, Adobe Inc, India; Vineet Batra, Adobe Inc, India; Matthew Fisher, Adobe Inc.",
                    "itemCategory": "Art & Design",
                    "itemLink": "707123"
                }
            ]
        },
        "brandYourBackground": {
            "customStyleFile": "custom-backgrounds",
            "bannerImage": "byb-banner.jpg",
            "description": [
                { "text": "Need instructions?", "isTitle": true },
                { "text": "Select an image below and then right click and save as to save the file to your desktop.", "isTitle": false },
                { "text": "Need help figuring out how to use your backdrop? Here are some helpful tips on <a href='https://www.cnet.com/how-to/how-to-change-your-zoom-background-like-everyone-else-is-doing/' target='_blank' class='ui-link'>how to change your background in Zoom!</a>", "isTitle": false },
                { "text": "<strong>Click </strong><a href='https://drive.google.com/drive/folders/1cWaCLTm3QErWlUV3Jjy6FGBzZ0q4VrLR?usp=sharing' class='ui-link'><strong>here</strong></a><strong> to access other branded backgrounds to use during your community outreach after Community Leaders Summit.</strong>", "isTitle": false }
            ],
            "images": [
                { "href": "first-background-zoom-1.jpg", "src": "first-background-zoom-1-thumb.jpg", "alt": "first background iaage." },
                { "href": "first-background-zoom-2.jpg", "src": "first-background-zoom-2-thumb.jpg", "alt": "First background zoom 2" },
                { "href": "first-background-zoom-3.jpg", "src": "first-background-zoom-3-thumb.jpg", "alt": "First background zoom 3" },
                { "href": "first-background-zoom-1.jpg", "src": "first-background-zoom-1-thumb.jpg", "alt": "first background iaage." },
                { "href": "first-background-zoom-2.jpg", "src": "first-background-zoom-2-thumb.jpg", "alt": "First background zoom 2" },
            ]
        },
        "dashboard-sponsor": {
            title: "Welcome to your Sponsor Dashboard",
            description: "Welcome to the Women in Tech Conference Sponsor Portal! Thank you for sharing your expertise and enthusiasm with our community. This will be the main online hub of activity to manage and finalize your Sponsor Page, as well as the place for you to build out your resources and participate in community. The following are action items and deadlines as well as additional resources to help you prepare for your profile and Sponsor Page over the next several weeks.",
            actionItems: {
                description: "Below are Action Items that must be completed prior to the dates announced for the item. Please take some time to go through and complete any action items that you have as part of your preparation for the event. ",
                steps: [{
                        title: "1. Finalize Sponsor Details",
                        description: "Navigate to the upper right-hand corner of your screen, click on your name and make any changes to your sponsor profile that you see fit. Please finalize your sponsor profile by September 18th.",
                        required: true,
                    },
                    {
                        title: "2. Upload Resource Materials for Your Page",
                        description: "Navigate to the Sponsor Details page where you will find resources available to Attendees of the event. Click 'Upload' to upload a new resource for your page. Please contact Kaiti Jacobsen with any questions related to your Sponsor Page.",
                        required: true,
                    },
                    {
                        title: "3. Register Others for Your Sponsor Page",
                        description: "Navigate to the Sponsor Team page where you will register those community members that are a part of your Sponsor Pages Team. Click 'Register Team Member' to add a new member to your team. Please contact Kaiti Jacobsen with any questions related to your Sponsor Page.",
                        required: true,
                    },
                ],
            },
            deadlines: [{
                openToSponsors: "14 September 2021 14:48 UTC",
                completeSponsorDetailsBegin: "17 September 2021 14:48 UTC",
                completeSponsorDetailsEnd: "18 September 2021 14:48 UTC",
                uploadResources: "18 September 2021 14:48 UTC",
                registerTeam: "18 September 2021 14:48 UTC",
                eventBeginDate: "24 September 2021 14:48 UTC",
                eventEndDate: "25 September 2021 14:48 UTC",
            }, ],
            supportTeam: [{
                fullName: "Kaiti Jacobsen",
                email: "kaiti@hubb.me",
                phone: "360-300-0001",
                imgSrc: "https://i.imgur.com/YozMOtgm.png",
            }, ],
            resourceLinks: [{
                    linkText: "Social Media Kit",
                    href: "",
                    iconSrc: "",
                },
                {
                    linkText: "Platform Tips",
                    href: "",
                    iconSrc: "",
                },
                {
                    linkText: "How to Articles",
                    href: "",
                    iconSrc: "",
                },
            ],
        },
        "recommendations": {
            "backgroundImage": "personalized_recommendations_bg.png",
            "tabs": [{
                    "tabTitle": "PERSONALIZED RECOMMENDATIONS",
                    "icon": "https://hubb.blob.core.windows.net/a9a6d150-7b35-4df4-a83a-ba1872d598d7-public/resources/personalization.svg",
                    "title": "RECOMMENDATIONS",
                    "subTitle": "INSPIRED BY YOUR ENGAGEMENT",
                    "content": "test1 test1",
                    "carousels": [{
                            "type": "main",
                            "heading": "Carousel Title",
                            "buttonText": "ADD TO SCHEDULE",
                            "items": [{
                                    "image": "light-speed-networks.JPG",
                                    "title": "LIGHT SPEED NETWORKS",
                                    "heading": "Tina Fey",
                                    "description": "Lightning fast networking it's only good as your hardware",
                                    "buttonLink": "https://cyberlive.hubb.me/schedule-builder/profile",
                                    "expiration": "2021-05-26T23:59"
                                },
                                {
                                    "image": "glass-and-nanotech.JPG",
                                    "title": "SECOND SESSION",
                                    "heading": "Session Speaker 2",
                                    "description": "Session description of approximately 10 words total",
                                    "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile",
                                    "expiration": "2021-05-26T23:59"
                                },
                                {
                                    "image": "security-and-blockchain.JPG",
                                    "title": "SECOND SESSION",
                                    "heading": "Session Speaker 2",
                                    "description": "Session description of approximately 10 words total",
                                    "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile",
                                    "expiration": "2021-05-26T23:59"
                                },
                                {
                                    "image": "digital-music-and-mixdown.JPG",
                                    "title": "SECOND SESSION",
                                    "heading": "Session Speaker 2",
                                    "description": "Session description of approximately 10 words total",
                                    "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile",
                                    "expiration": "2021-05-26T23:59"
                                }
                            ]
                        },
                        {
                            "type": "sub",
                            "heading": "Carousel Title",
                            "buttonText": "ADD TO SCHEDULE",
                            "items": [{
                                    "image": "artificial-intelligence.JPG",
                                    "title": "FIRST SESSION 1",
                                    "heading": "Session Speaker 1",
                                    "description": "Session description of approximately 10 words total",
                                    "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile",
                                    "expiration": "2021-05-26T23:59"
                                },
                                {
                                    "image": "augmented-reality.JPG",
                                    "title": "SECOND SESSION",
                                    "heading": "Session Speaker 2",
                                    "description": "Session description of approximately 10 words total",
                                    "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile",
                                    "expiration": "2021-05-26T23:59"
                                },
                                {
                                    "image": "video-gaming.JPG",
                                    "title": "FIRST SESSION 1",
                                    "heading": "Session Speaker 1",
                                    "description": "Session description of approximately 10 words total",
                                    "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile",
                                    "expiration": "2021-05-26T23:59"
                                },
                                {
                                    "image": "automation.JPG",
                                    "title": "FIRST SESSION 1",
                                    "heading": "Session Speaker 1",
                                    "description": "Session description of approximately 10 words total",
                                    "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile",
                                    "expiration": "2021-05-26T23:59"
                                },
                                {
                                    "image": "artificial-intelligence.JPG",
                                    "title": "FIRST SESSION 1",
                                    "heading": "Session Speaker 1",
                                    "description": "Session description of approximately 10 words total",
                                    "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile",
                                    "expiration": "2021-05-26T23:59"
                                },
                                {
                                    "image": "augmented-reality.JPG",
                                    "title": "SECOND SESSION",
                                    "heading": "Session Speaker 2",
                                    "description": "Session description of approximately 10 words total",
                                    "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile",
                                    "expiration": "2021-05-26T23:59"
                                }
                            ]
                        },
                        {
                            "type": "sub",
                            "heading": "Carousel Title",
                            "buttonText": "ADD TO SCHEDULE",
                            "items": [{
                                    "image": "matt-lance-attendee.JPG",
                                    "title": "FIRST SESSION 1",
                                    "heading": "Session Speaker 1",
                                    "description": "Session description of approximately 10 words total",
                                    "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile",
                                    "expiration": "2021-05-26T23:59"
                                },
                                {
                                    "image": "tony-stark-attendee.JPG",
                                    "title": "SECOND SESSION",
                                    "heading": "Session Speaker 2",
                                    "description": "Session description of approximately 10 words total",
                                    "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile",
                                    "expiration": "2021-05-26T23:59"
                                },
                                {
                                    "image": "ellon-musk-attendee.JPG",
                                    "title": "FIRST SESSION 1",
                                    "heading": "Session Speaker 1",
                                    "description": "Session description of approximately 10 words total",
                                    "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile",
                                    "expiration": "2021-05-26T23:59"
                                }, {
                                    "image": "kristina-sky-attendee.JPG",
                                    "title": "FIRST SESSION 1",
                                    "heading": "Session Speaker 1",
                                    "description": "Session description of approximately 10 words total",
                                    "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile",
                                    "expiration": "2021-05-26T23:59"
                                }, {
                                    "image": "metaweb-featuredsessions-1.JPG",
                                    "title": "FIRST SESSION 1",
                                    "heading": "Session Speaker 1",
                                    "description": "Session description of approximately 10 words total",
                                    "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile",
                                    "expiration": "2021-05-26T23:59"
                                }, {
                                    "image": "matt-lance-attendee.JPG",
                                    "title": "FIRST SESSION 1",
                                    "heading": "Session Speaker 1",
                                    "description": "Session description of approximately 10 words total",
                                    "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile",
                                    "expiration": "2021-05-26T23:59"
                                },
                                
                            ]
                        }
                    ]
                },
                {
                    "tabTitle": "CYBERLIVE RECOMMENDATIONS",
                    "icon": "https://hubb.blob.core.windows.net/a9a6d150-7b35-4df4-a83a-ba1872d598d7-public/resources/recommendation.svg",
                    "title": "RECOMMENDATIONS",
                    "subTitle": "FOR YOU BY CYBERLIVE",
                    "content": "test2 test2",
                    "carousels": [{
                            "type": "main",
                            "heading": "Carousel Title",
                            "buttonText": "ADD TO SCHEDULE",
                            "items": [{
                                    "image": "metaweb-featuredsessions-1.JPG",
                                    "title": "FIRST SESSION 1",
                                    "heading": "Session Speaker 1",
                                    "description": "Session description of approximately 10 words total",
                                    "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile",
                                    "expiration": "2021-05-26T23:59"
                                },
                                {
                                    "image": "metaweb-featuredsessions-1.JPG",
                                    "title": "SECOND SESSION",
                                    "heading": "Session Speaker 2",
                                    "description": "Session description of approximately 10 words total",
                                    "buttonLink": "https://cyberstrong.hubb.me/schedule-builder/profile",
                                    "expiration": "2021-05-27T23:59"
                                }
                            ]
                        },

                    ]
                }
            ]
        }
    }
});