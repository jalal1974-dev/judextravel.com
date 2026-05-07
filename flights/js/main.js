// Jude Travel - Main JavaScript File

// Flight data with 3 airlines per destination
const flightData = [
    {
        id: 'sharm',
        destination: 'شرم الشيخ',
        destinationEn: 'Sharm El-Sheikh',
        country: 'مصر',
        countryEn: 'Egypt',
        airlines: [
            {
                name: 'Fly Jordan',
                nameAr: 'فلاي جوردن',
                logo: '🛩️',
                packages: [
                    { duration: '4 أيام', durationEn: '4 Days', price: 189, days: 'ثلاثاء وجمعة', daysEn: 'Tuesday & Friday', oneWayAmmanSharm: 168, oneWaySharmAmman: 129 },
                    { duration: '5 أيام', durationEn: '5 Days', price: 199, days: 'ثلاثاء وجمعة', daysEn: 'Tuesday & Friday', oneWayAmmanSharm: 178, oneWaySharmAmman: 139 },
                    { duration: '8 أيام', durationEn: '8 Days', price: 219, days: 'ثلاثاء وجمعة', daysEn: 'Tuesday & Friday', oneWayAmmanSharm: 198, oneWaySharmAmman: 159 }
                ],
                features: ['رحلات منتظمة', 'خدمة اقتصادية', 'مواعيد مرنة'],
                featuresEn: ['Regular flights', 'Economic service', 'Flexible schedule']
            },
            {
                name: 'Royal Jordanian',
                nameAr: 'الملكية الأردنية',
                logo: '👑',
                packages: [
                    { duration: '3 أيام', durationEn: '3 Days', price: 210, days: 'ثلاثاء وجمعة', daysEn: 'Tuesday & Friday', oneWayAmmanSharm: 189, oneWaySharmAmman: 150 },
                    { duration: '4 أيام', durationEn: '4 Days', price: 220, days: 'ثلاثاء وجمعة', daysEn: 'Tuesday & Friday', oneWayAmmanSharm: 199, oneWaySharmAmman: 160 },
                    { duration: '6-8 أيام', durationEn: '6-8 Days', price: 260, days: 'ثلاثاء وجمعة', daysEn: 'Tuesday & Friday', oneWayAmmanSharm: 239, oneWaySharmAmman: 200 }
                ],
                features: ['خدمة ملكية متميزة', 'رحلات منتظمة', 'راحة وأناقة'],
                featuresEn: ['Premium royal service', 'Regular flights', 'Comfort and elegance']
            },
            {
                name: 'Jordan Aviation',
                nameAr: 'طيران الأردن',
                logo: '✈️',
                packages: [
                    { duration: '4 أيام', price: 189, days: 'احد وخميس', oneWayAmmanSharm: 168, oneWaySharmAmman: 129 },
                    { duration: '5 أيام', price: 199, days: 'احد وخميس', oneWayAmmanSharm: 178, oneWaySharmAmman: 139 },
                    { duration: '8 أيام', price: 219, days: 'احد وخميس', oneWayAmmanSharm: 198, oneWaySharmAmman: 159 }
                ],
                features: ['مقاعد مريحة', 'ترفيه على متن الطائرة', 'وجبات متنوعة'],
                featuresEn: ['Comfortable seats', 'In-flight entertainment', 'Variety of meals']
            }
        ],
        generalFeatures: ['إقامة فندقية مميزة', 'برنامج سياحي شامل', 'مرشد سياحي'],
        generalFeaturesEn: ['Premium hotel accommodation', 'Comprehensive tourist program', 'Tourist guide'],
        image: 'images/sharm-el-sheikh.jpg'
    },
    {
        id: 'istanbul',
        destination: 'اسطنبول',
        destinationEn: 'Istanbul',
        country: 'تركيا',
        countryEn: 'Turkey',
        airlines: [
            {
                name: 'Fly Jordan',
                nameAr: 'فلاي جوردن',
                logo: '🛩️',
                packages: [
                    { duration: '3 أيام', durationEn: '3 Days', price: 219, days: 'احد وثلاثاء وخميس', daysEn: 'Sunday, Tuesday & Thursday', oneWayAmmanIstanbul: 198, oneWayIstanbulAmman: 159 },
                    { duration: '4 أيام', durationEn: '4 Days', price: 239, days: 'احد وثلاثاء وخميس', daysEn: 'Sunday, Tuesday & Thursday', oneWayAmmanIstanbul: 218, oneWayIstanbulAmman: 179 },
                    { duration: '6-8 أيام', durationEn: '6-8 Days', price: 249, days: 'احد وثلاثاء وخميس', daysEn: 'Sunday, Tuesday & Thursday', oneWayAmmanIstanbul: 228, oneWayIstanbulAmman: 189 }
                ],
                features: ['رحلات منتظمة', 'أسعار تنافسية', 'حجوزات مرنة'],
                featuresEn: ['Regular flights', 'Competitive prices', 'Flexible bookings']
            },
            {
                name: 'Royal Jordanian',
                nameAr: 'الملكية الأردنية',
                logo: '👑',
                packages: [
                    { duration: '3 أيام', durationEn: '3 Days', price: 259, days: 'يومياً', daysEn: 'Daily', oneWayAmmanIstanbul: 238, oneWayIstanbulAmman: 199 },
                    { duration: '4 أيام', durationEn: '4 Days', price: 269, days: 'يومياً', daysEn: 'Daily', oneWayAmmanIstanbul: 248, oneWayIstanbulAmman: 209 },
                    { duration: '6-8 أيام', durationEn: '6-8 Days', price: 279, days: 'يومياً', daysEn: 'Daily', oneWayAmmanIstanbul: 258, oneWayIstanbulAmman: 219 }
                ],
                features: ['رحلات يومية', 'خدمة فاخرة', 'صالات VIP'],
                featuresEn: ['Daily flights', 'Luxury service', 'VIP lounges']
            },
            {
                name: 'Jordan Aviation',
                nameAr: 'طيران الأردن',
                logo: '✈️',
                packages: [
                    { duration: '3 أيام', durationEn: '3 Days', price: 239, days: 'سبت واثنين وأربعاء', daysEn: 'Saturday, Monday & Wednesday', oneWayAmmanIstanbul: 218, oneWayIstanbulAmman: 179 },
                    { duration: '4 أيام', durationEn: '4 Days', price: 259, days: 'سبت واثنين وأربعاء', daysEn: 'Saturday, Monday & Wednesday', oneWayAmmanIstanbul: 238, oneWayIstanbulAmman: 199 },
                    { duration: '6-8 أيام', durationEn: '6-8 Days', price: 269, days: 'سبت واثنين وأربعاء', daysEn: 'Saturday, Monday & Wednesday', oneWayAmmanIstanbul: 248, oneWayIstanbulAmman: 209 }
                ],
                features: ['مقاعد واسعة', 'ترفيه متطور', 'خدمة طعام متميزة'],
                featuresEn: ['Spacious seats', 'Advanced entertainment', 'Premium food service']
            }
        ],
        generalFeatures: ['مواقع تاريخية مميزة', 'تسوق في الأسواق التركية', 'جولات بحرية'],
        generalFeaturesEn: ['Historic landmarks', 'Turkish markets shopping', 'Boat tours'],
        image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=400&h=250&fit=crop'
    },
    {
        id: 'trabzon',
        destination: 'طرابزون',
        destinationEn: 'Trabzon',
        country: 'تركيا',
        countryEn: 'Turkey',
        airlines: [
            {
                name: 'Fly Jordan',
                nameAr: 'فلاي جوردن',
                logo: '🛩️',
                packages: [
                    { duration: '8 أيام', durationEn: '8 Days', price: 269, days: 'كل سبت', daysEn: 'Every Saturday' }
                ],
                features: ['رحلة أسبوعية', 'سعر اقتصادي', 'برنامج طبيعي'],
                featuresEn: ['Weekly flight', 'Economic price', 'Nature program']
            },
            {
                name: 'Royal Jordanian',
                nameAr: 'الملكية الأردنية',
                logo: '👑',
                packages: [
                    { duration: '8 أيام', durationEn: '8 Days', price: 0, days: 'غير متاح', daysEn: 'Not Available' }
                ],
                features: ['رحلات مستأجرة لاسطنبول فقط', 'غير متاح لهذه الوجهة', 'اتصل للاستفسار'],
                featuresEn: ['Charter flights to Istanbul only', 'Not available for this destination', 'Call for inquiry']
            },
            {
                name: 'Jordan Aviation',
                nameAr: 'طيران الأردن',
                logo: '✈️',
                packages: [
                    { duration: '8 أيام', durationEn: '8 Days', price: 309, days: 'كل أربعاء', daysEn: 'Every Wednesday' }
                ],
                features: ['رحلة مريحة', 'مناظر خلابة', 'فنادق منتجعية'],
                featuresEn: ['Comfortable flight', 'Stunning scenery', 'Resort hotels']
            }
        ],
        generalFeatures: ['طبيعة خلابة', 'مناظر جبلية', 'البحر الأسود', 'هضبة أوزنجول'],
        generalFeaturesEn: ['Stunning nature', 'Mountain views', 'Black Sea', 'Uzungol plateau'],
        image: 'images/trabzon-uzungol.jpg',
        gallery: [
            'images/trabzon-uzungol-2.jpg',
            'images/trabzon-sumela-monastery.jpg'
        ]
    },
    {
        id: 'batumi',
        destination: 'باتومي',
        destinationEn: 'Batumi',
        country: 'جورجيا',
        countryEn: 'Georgia',
        airlines: [
            {
                name: 'Fly Jordan',
                nameAr: 'فلاي جوردن',
                logo: '🛩️',
                packages: [
                    { duration: '8 أيام', durationEn: '8 Days', price: 259, days: 'كل خميس', daysEn: 'Every Thursday', oneWayAmmanBatumi: 244, oneWayBatumiAmman: 209 }
                ],
                features: ['رحلة أسبوعية', 'سعر مناسب', 'شواطئ جميلة'],
                featuresEn: ['Weekly flight', 'Affordable price', 'Beautiful beaches']
            },
            {
                name: 'Royal Jordanian',
                nameAr: 'الملكية الأردنية',
                logo: '👑',
                packages: [
                    { duration: '8 أيام', durationEn: '8 Days', price: 0, days: 'غير متاح', daysEn: 'Not Available' }
                ],
                features: ['رحلات مستأجرة لاسطنبول فقط', 'غير متاح لهذه الوجهة', 'اتصل للاستفسار'],
                featuresEn: ['Charter flights to Istanbul only', 'Not available for this destination', 'Call for inquiry']
            },
            {
                name: 'Jordan Aviation',
                nameAr: 'طيران الأردن',
                logo: '✈️',
                packages: [
                    { duration: '8 أيام', durationEn: '8 Days', price: 299, days: 'كل جمعة', daysEn: 'Every Friday', oneWayAmmanBatumi: 284, oneWayBatumiAmman: 249 }
                ],
                features: ['راحة تامة', 'منتجعات شاطئية', 'أنشطة ترفيهية'],
                featuresEn: ['Complete comfort', 'Beach resorts', 'Entertainment activities']
            }
        ],
        generalFeatures: ['شواطئ رملية', 'كازينوهات', 'حياة ليلية نشطة', 'تلفريك باتومي'],
        generalFeaturesEn: ['Sandy beaches', 'Casinos', 'Vibrant nightlife', 'Batumi cable car'],
        image: 'images/batumi-skyline.jpg',
        gallery: [
            'images/batumi-alphabetic-tower.jpg',
            'images/batumi-beach-boulevard.jpg'
        ]
    },
    {
        id: 'tbilisi',
        destination: 'تبليسي',
        destinationEn: 'Tbilisi',
        country: 'جورجيا',
        countryEn: 'Georgia',
        airlines: [
            {
                name: 'Fly Jordan',
                nameAr: 'فلاي جوردن',
                logo: '🛩️',
                packages: [
                    { duration: '8 أيام', durationEn: '8 Days', price: 289, days: 'كل ثلاثاء', daysEn: 'Every Tuesday', oneWayAmmanTbilisi: 274, oneWayTbilisiAmman: 239 }
                ],
                features: ['رحلة أسبوعية', 'تجربة ثقافية', 'تكلفة معقولة'],
                featuresEn: ['Weekly flight', 'Cultural experience', 'Reasonable cost']
            },
            {
                name: 'Royal Jordanian',
                nameAr: 'الملكية الأردنية',
                logo: '👑',
                packages: [
                    { duration: '8 أيام', durationEn: '8 Days', price: 0, days: 'غير متاح', daysEn: 'Not Available' }
                ],
                features: ['رحلات مستأجرة لاسطنبول فقط', 'غير متاح لهذه الوجهة', 'اتصل للاستفسار'],
                featuresEn: ['Charter flights to Istanbul only', 'Not available for this destination', 'Call for inquiry']
            },
            {
                name: 'Jordan Aviation',
                nameAr: 'طيران الأردن',
                logo: '✈️',
                packages: [
                    { duration: '8 أيام', durationEn: '8 Days', price: 329, days: 'كل ثلاثاء وجمعة', daysEn: 'Every Tuesday & Friday', oneWayAmmanTbilisi: 314, oneWayTbilisiAmman: 279 }
                ],
                features: ['راحة وأمان', 'مواقع أثرية', 'ضيافة جورجية'],
                featuresEn: ['Comfort and safety', 'Archaeological sites', 'Georgian hospitality']
            }
        ],
        generalFeatures: ['تاريخ عريق', 'ثقافة متنوعة', 'ضيافة جورجية أصيلة', 'البلدة القديمة'],
        generalFeaturesEn: ['Rich history', 'Diverse culture', 'Authentic Georgian hospitality', 'Old Town'],
        image: 'images/tbilisi-old-town.jpg',
        gallery: [
            'images/tbilisi-narikala-cable.jpg',
            'images/tbilisi-colorful-houses.jpg'
        ]
    },
    {
        id: 'cairo',
        destination: 'القاهرة',
        destinationEn: 'Cairo',
        country: 'مصر',
        countryEn: 'Egypt',
        airlines: [
            {
                name: 'Royal Jordanian',
                nameAr: 'الملكية الأردنية',
                logo: '👑',
                packages: [
                    { 
                        duration: 'رحلات يومية', 
                        durationEn: 'Daily Flights',
                        price: 280, // Round trip starting price
                        days: '4 رحلات يومية', 
                        daysEn: '4 Daily Flights',
                        flights: [
                            {
                                route: 'عمان → القاهرة',
                                routeEn: 'Amman → Cairo',
                                departure: '6:10 صباحاً',
                                departureEn: '6:10 AM',
                                price: 165
                            },
                            {
                                route: 'عمان → القاهرة',
                                routeEn: 'Amman → Cairo',
                                departure: '11:25 ظهراً',
                                departureEn: '11:25 AM',
                                price: 170
                            },
                            {
                                route: 'القاهرة → عمان',
                                routeEn: 'Cairo → Amman',
                                departure: '7:35 صباحاً',
                                departureEn: '7:35 AM',
                                price: 125
                            },
                            {
                                route: 'القاهرة → عمان',
                                routeEn: 'Cairo → Amman',
                                departure: '14:05 ظهراً',
                                departureEn: '14:05 PM',
                                price: 140
                            }
                        ]
                    },
                    { 
                        duration: 'رحلات عقبة', 
                        durationEn: 'Aqaba Flights',
                        price: 150, // Round trip price
                        days: 'أحد، ثلاثاء، أربعاء', 
                        daysEn: 'Sunday, Tuesday, Wednesday',
                        flights: [
                            {
                                route: 'عقبة → القاهرة',
                                routeEn: 'Aqaba → Cairo',
                                departure: 'حسب الجدولة',
                                departureEn: 'As Scheduled',
                                arrival: 'حسب الجدولة',
                                price: 90,
                                days: 'أحد، ثلاثاء، أربعاء'
                            },
                            {
                                route: 'القاهرة → عقبة',
                                routeEn: 'Cairo → Aqaba',
                                departure: 'حسب الجدولة',
                                departureEn: 'As Scheduled',
                                arrival: 'حسب الجدولة',
                                price: 70,
                                days: 'أحد، ثلاثاء، أربعاء'
                            }
                        ]
                    }
                ],
                features: ['رحلات يومية منتظمة', 'خدمة ملكية متميزة', '4 رحلات يومية', 'رحلات عقبة-القاهرة', 'مواعيد مرنة'],
                featuresEn: ['Regular daily flights', 'Premium royal service', '4 daily flights', 'Aqaba-Cairo flights', 'Flexible schedules']
            },
            {
                name: 'Fly Jordan',
                nameAr: 'فلاي جوردن',
                logo: '🛩️',
                packages: [
                    { duration: 'غير متاح', durationEn: 'Not Available', price: 0, days: 'غير متاح حالياً', daysEn: 'Currently Not Available' }
                ],
                features: ['غير متاح لهذه الوجهة', 'اتصل للاستفسار', 'خدمات أخرى متاحة'],
                featuresEn: ['Not available for this destination', 'Call for inquiry', 'Other services available']
            },
            {
                name: 'Jordan Aviation',
                nameAr: 'طيران الأردن',
                logo: '✈️',
                packages: [
                    { 
                        duration: 'رحلات أسبوعية', 
                        durationEn: 'Weekly Flights',
                        price: 275, // Round trip price
                        days: 'سبت، أحد، ثلاثاء، خميس', 
                        daysEn: 'Saturday, Sunday, Tuesday, Thursday',
                        flights: [
                            {
                                route: 'عمان → القاهرة',
                                routeEn: 'Amman → Cairo',
                                departure: '20:00 مساءً',
                                departureEn: '8:00 PM',
                                price: 155,
                                days: 'سبت، أحد، ثلاثاء، خميس'
                            },
                            {
                                route: 'القاهرة → عمان',
                                routeEn: 'Cairo → Amman',
                                departure: '23:30 ليلاً',
                                departureEn: '11:30 PM',
                                price: 130,
                                days: 'سبت، أحد، ثلاثاء، خميس'
                            }
                        ]
                    }
                ],
                features: ['رحلات أسبوعية منتظمة', 'أسعار تنافسية', 'رحلة ذهاب وإياب', 'مواعيد مسائية مريحة'],
                featuresEn: ['Regular weekly flights', 'Competitive prices', 'Round trip flights', 'Convenient evening schedules']
            }
        ],
        generalFeatures: ['عاصمة مصر التاريخية', 'الأهرامات وأبو الهول', 'المتحف المصري', 'النيل الخالد', 'الأزهر الشريف'],
        generalFeaturesEn: ['Historical capital of Egypt', 'Pyramids and Sphinx', 'Egyptian Museum', 'Eternal Nile', 'Al-Azhar Mosque'],
        image: 'images/cairo-pyramids.jpg'
    },
    {
        id: 'jeddah',
        destination: 'جدة',
        destinationEn: 'Jeddah',
        country: 'السعودية',
        countryEn: 'Saudi Arabia',
        airlines: [
            {
                name: 'flynas',
                nameAr: 'طيران ناس',
                logo: '✈️',
                packages: [
                    { 
                        duration: 'رحلات يومية', 
                        durationEn: 'Daily Flights',
                        price: 265, // Round trip starting price
                        days: 'رحلات يومية', 
                        daysEn: 'Daily Flights',
                        flights: [
                            {
                                route: 'عمان → جدة',
                                routeEn: 'Amman → Jeddah',
                                departure: '15:00 بعد الظهر',
                                departureEn: '3:00 PM',
                                arrival: 'حسب الجدولة',
                                price: 155,
                                luggage: '7 كيلو أمتعة',
                                luggageEn: '7kg luggage'
                            },
                            {
                                route: 'جدة → عمان',
                                routeEn: 'Jeddah → Amman',
                                departure: '12:00 ظهراً',
                                departureEn: '12:00 PM',
                                arrival: 'حسب الجدولة',
                                price: 120,
                                luggage: '7 كيلو أمتعة',
                                luggageEn: '7kg luggage'
                            }
                        ]
                    }
                ],
                features: ['رحلات يومية منتظمة', 'أسعار تنافسية', 'حقائب 7 كيلو مجاناً', 'مواعيد مناسبة'],
                featuresEn: ['Regular daily flights', 'Competitive prices', 'Free 7kg luggage', 'Convenient schedules']
            },
            {
                name: 'Royal Jordanian',
                nameAr: 'الملكية الأردنية',
                logo: '👑',
                packages: [
                    { 
                        duration: 'رحلات يومية', 
                        durationEn: 'Daily Flights',
                        price: 290, // Round trip price
                        days: 'رحلات يومية', 
                        daysEn: 'Daily Flights',
                        flights: [
                            {
                                route: 'عمان → جدة',
                                routeEn: 'Amman → Jeddah',
                                departure: 'حسب الجدولة',
                                departureEn: 'As Scheduled',
                                arrival: 'حسب الجدولة',
                                price: 170
                            },
                            {
                                route: 'جدة → عمان',
                                routeEn: 'Jeddah → Amman',
                                departure: 'حسب الجدولة',
                                departureEn: 'As Scheduled',
                                arrival: 'حسب الجدولة',
                                price: 140
                            }
                        ]
                    }
                ],
                features: ['رحلات يومية منتظمة', 'خدمة ملكية متميزة', 'صالات VIP', 'مقاعد مريحة', 'خدمة طعام فاخرة'],
                featuresEn: ['Regular daily flights', 'Premium royal service', 'VIP lounges', 'Comfortable seats', 'Luxury food service']
            },
            {
                name: 'Saudia',
                nameAr: 'الخطوط السعودية',
                logo: '🇸🇦',
                packages: [
                    { 
                        duration: 'رحلات أسبوعية', 
                        durationEn: 'Weekly Flights',
                        price: 290, // Round trip price
                        days: 'أحد، ثلاثاء، خميس', 
                        daysEn: 'Sunday, Tuesday, Thursday',
                        flights: [
                            {
                                route: 'عمان → جدة',
                                routeEn: 'Amman → Jeddah',
                                departure: 'حسب الجدولة',
                                departureEn: 'As Scheduled',
                                arrival: 'حسب الجدولة',
                                price: 170,
                                days: 'أحد، ثلاثاء، خميس'
                            },
                            {
                                route: 'جدة → عمان',
                                routeEn: 'Jeddah → Amman',
                                departure: 'حسب الجدولة',
                                departureEn: 'As Scheduled',
                                arrival: 'حسب الجدولة',
                                price: 140,
                                days: 'أحد، ثلاثاء، خميس'
                            }
                        ]
                    }
                ],
                features: ['الناقل الوطني السعودي', 'خدمة ضيافة سعودية', 'شبكة واسعة', 'تجربة سفر أصيلة', 'مقاعد مريحة'],
                featuresEn: ['Saudi national carrier', 'Saudi hospitality service', 'Wide network', 'Authentic travel experience', 'Comfortable seats']
            }
        ],
        generalFeatures: ['بوابة الحرمين الشريفين', 'البحر الأحمر', 'البلد التاريخية', 'كورنيش جدة', 'التسوق والترفيه'],
        generalFeaturesEn: ['Gateway to the Two Holy Mosques', 'Red Sea', 'Historical Old Town', 'Jeddah Corniche', 'Shopping and entertainment'],
        image: 'images/jeddah-corniche.jpg',
        gallery: [
            'images/jeddah-corniche.jpg',
            'images/jeddah-fountain.jpg'
        ]
    },
    {
        id: 'medina-jeddah',
        destination: 'المدينة المنورة وجدة',
        destinationEn: 'Medina and Jeddah',
        country: 'السعودية',
        countryEn: 'Saudi Arabia',
        airlines: [
            {
                name: 'flynas',
                nameAr: 'طيران ناس',
                logo: '✈️',
                packages: [
                    { 
                        duration: 'رحلات المدينة المنورة', 
                        durationEn: 'Medina Flights',
                        price: 220, // Round trip Amman-Medina
                        days: 'ثلاثاء وخميس', 
                        daysEn: 'Tuesday & Thursday',
                        flights: [
                            {
                                route: 'عمان → المدينة المنورة',
                                routeEn: 'Amman → Medina',
                                departure: '23:00 ليلاً',
                                departureEn: '11:00 PM',
                                arrival: '01:00 فجراً',
                                price: 110,
                                days: 'ثلاثاء، خميس'
                            },
                            {
                                route: 'المدينة المنورة → عمان',
                                routeEn: 'Medina → Amman',
                                departure: '21:00 مساءً',
                                departureEn: '9:00 PM',
                                arrival: '22:35 ليلاً',
                                price: 110,
                                days: 'ثلاثاء، خميس'
                            }
                        ]
                    },
                    {
                        duration: 'رحلات متعددة المدن',
                        durationEn: 'Multi-City Routes',
                        price: 260, // Multi-city round trip
                        days: 'حسب الجدولة',
                        daysEn: 'As Scheduled',
                        flights: [
                            {
                                route: 'عمان → المدينة → جدة → عمان',
                                routeEn: 'Amman → Medina → Jeddah → Amman',
                                departure: 'حسب الجدولة',
                                departureEn: 'As Scheduled',
                                arrival: 'حسب الجدولة',
                                price: 260,
                                multiCity: true
                            },
                            {
                                route: 'عمان → جدة → المدينة → عمان',
                                routeEn: 'Amman → Jeddah → Medina → Amman',
                                departure: 'حسب الجدولة',
                                departureEn: 'As Scheduled',
                                arrival: 'حسب الجدولة',
                                price: 260,
                                multiCity: true
                            }
                        ]
                    }
                ],
                features: ['رحلات المدينة المنورة', 'رحلات متعددة المدن', 'أسعار خاصة للعمرة', 'مرونة في التواريخ'],
                featuresEn: ['Medina flights', 'Multi-city routes', 'Special Umrah prices', 'Date flexibility']
            },
            {
                name: 'Royal Jordanian',
                nameAr: 'الملكية الأردنية',
                logo: '👑',
                packages: [
                    { 
                        duration: 'رحلات المدينة المنورة', 
                        durationEn: 'Medina Flights',
                        price: 340, // Round trip Amman-Medina (210 + 130)
                        days: 'سبت، اثنين، أربعاء', 
                        daysEn: 'Saturday, Monday, Wednesday',
                        flights: [
                            {
                                route: 'عمان → المدينة المنورة',
                                routeEn: 'Amman → Medina',
                                departure: 'حسب الجدولة',
                                departureEn: 'As Scheduled',
                                arrival: 'حسب الجدولة',
                                price: 210,
                                days: 'سبت، اثنين، أربعاء'
                            },
                            {
                                route: 'المدينة المنورة → عمان',
                                routeEn: 'Medina → Amman',
                                departure: 'حسب الجدولة',
                                departureEn: 'As Scheduled',
                                arrival: 'حسب الجدولة',
                                price: 130,
                                days: 'سبت، اثنين، أربعاء'
                            }
                        ]
                    },
                    {
                        duration: 'رحلات متعددة المدن الملكية',
                        durationEn: 'Royal Multi-City Routes',
                        price: 270, // Starting price for multi-city
                        days: 'حسب الجدولة',
                        daysEn: 'As Scheduled',
                        flights: [
                            {
                                route: 'عمان → المدينة → جدة → عمان',
                                routeEn: 'Amman → Medina → Jeddah → Amman',
                                departure: 'حسب الجدولة',
                                departureEn: 'As Scheduled',
                                arrival: 'حسب الجدولة',
                                price: 320,
                                multiCity: true
                            },
                            {
                                route: 'عمان → جدة → المدينة → عمان',
                                routeEn: 'Amman → Jeddah → Medina → Amman',
                                departure: 'حسب الجدولة',
                                departureEn: 'As Scheduled',
                                arrival: 'حسب الجدولة',
                                price: 270,
                                multiCity: true
                            }
                        ]
                    }
                ],
                features: ['خدمة ملكية متميزة', 'صالات VIP', 'رحلات المدينة المنورة', 'رحلات متعددة المدن الفاخرة', 'ضيافة ملكية'],
                featuresEn: ['Premium royal service', 'VIP lounges', 'Medina flights', 'Luxury multi-city routes', 'Royal hospitality']
            },
            {
                name: 'Saudia',
                nameAr: 'الخطوط السعودية',
                logo: '🇸🇦',
                packages: [
                    { duration: 'غير متاح', durationEn: 'Not Available', price: 0, days: 'غير متاح حالياً', daysEn: 'Currently Not Available' }
                ],
                features: ['غير متاح لهذا المسار', 'اتصل للاستفسار', 'خدمات أخرى متاحة'],
                featuresEn: ['Not available for this route', 'Call for inquiry', 'Other services available']
            }
        ],
        generalFeatures: ['المدينة المنورة المقدسة', 'المسجد النبوي الشريف', 'جدة التاريخية', 'رحلات العمرة والزيارة', 'الحرمين الشريفين'],
        generalFeaturesEn: ['Holy Medina', 'Prophet\'s Mosque', 'Historic Jeddah', 'Umrah and pilgrimage trips', 'The Two Holy Mosques'],
        image: 'images/medina-masjid-nabawi.jpg'
    },
    {
        id: 'dubai',
        destination: 'دبي',
        destinationEn: 'Dubai',
        country: 'الإمارات العربية المتحدة',
        countryEn: 'United Arab Emirates',
        airlines: [
            {
                name: 'FlyDubai',
                nameAr: 'فلاي دبي',
                logo: '🇦🇪',
                packages: [
                    { 
                        duration: 'رحلات يومية', 
                        durationEn: 'Daily Flights',
                        price: 240, // Round trip special price
                        days: 'رحلات يومية', 
                        daysEn: 'Daily Flights',
                        flights: [
                            {
                                route: 'عمان → دبي',
                                routeEn: 'Amman → Dubai',
                                departure: 'حسب الجدولة',
                                departureEn: 'As Scheduled',
                                price: 150
                            },
                            {
                                route: 'دبي → عمان',
                                routeEn: 'Dubai → Amman',
                                departure: 'حسب الجدولة',
                                departureEn: 'As Scheduled',
                                price: 140
                            }
                        ]
                    }
                ],
                features: ['رحلات يومية منتظمة', 'أسعار تنافسية', 'خدمة إماراتية', 'شبكة واسعة في الشرق الأوسط'],
                featuresEn: ['Regular daily flights', 'Competitive prices', 'UAE service', 'Extensive Middle East network']
            },
            {
                name: 'Royal Jordanian',
                nameAr: 'الملكية الأردنية',
                logo: '👑',
                packages: [
                    { 
                        duration: 'رحلات يومية', 
                        durationEn: 'Daily Flights',
                        price: 290, // Updated round trip pricing
                        days: 'رحلات يومية', 
                        daysEn: 'Daily Flights',
                        flights: [
                            {
                                route: 'عمان → دبي',
                                routeEn: 'Amman → Dubai',
                                departure: 'حسب الجدولة',
                                departureEn: 'As Scheduled',
                                price: 170
                            },
                            {
                                route: 'دبي → عمان',
                                routeEn: 'Dubai → Amman',
                                departure: 'حسب الجدولة',
                                departureEn: 'As Scheduled',
                                price: 150
                            }
                        ]
                    }
                ],
                features: ['خدمة ملكية متميزة', 'صالات VIP', 'رحلات يومية', 'مقاعد مريحة', 'خدمة طعام فاخرة'],
                featuresEn: ['Premium royal service', 'VIP lounges', 'Daily flights', 'Comfortable seats', 'Luxury food service']
            },
            {
                name: 'Emirates',
                nameAr: 'طيران الإمارات',
                logo: '✈️',
                packages: [
                    { 
                        duration: 'رحلات يومية', 
                        durationEn: 'Daily Flights',
                        price: 310, // Updated pricing for Emirates
                        days: 'رحلات يومية', 
                        daysEn: 'Daily Flights',
                        flights: [
                            {
                                route: 'عمان → دبي',
                                routeEn: 'Amman → Dubai',
                                departure: 'حسب الجدولة',
                                departureEn: 'As Scheduled',
                                price: 210
                            },
                            {
                                route: 'دبي → عمان',
                                routeEn: 'Dubai → Amman',
                                departure: 'حسب الجدولة',
                                departureEn: 'As Scheduled',
                                price: 150
                            }
                        ]
                    }
                ],
                features: ['خدمة عالمية مميزة', 'ترفيه على متن الطائرة', 'وجبات فاخرة', 'مقاعد واسعة', 'تجربة طيران استثنائية'],
                featuresEn: ['Premium global service', 'In-flight entertainment', 'Luxury meals', 'Spacious seats', 'Exceptional flying experience']
            }
        ],
        generalFeatures: ['مدينة الأعمال والتسوق', 'برج خليفة', 'دبي مول', 'شواطئ جميلة', 'الحياة العصرية'],
        generalFeaturesEn: ['Business and shopping city', 'Burj Khalifa', 'Dubai Mall', 'Beautiful beaches', 'Modern lifestyle'],
        image: 'images/dubai-skyline.jpg'
    }
];

// Language Management
let currentLanguage = 'ar'; // Default Arabic

// Currency Management
let currentCurrency = 'JOD'; // Default Jordanian Dinar

const currencies = {
    JOD: {
        name: 'دينار أردني',
        nameEn: 'Jordanian Dinar',
        symbol: 'دينار',
        symbolEn: 'JOD',
        rate: 1, // Base currency
        flag: '🇯🇴'
    },
    USD: {
        name: 'دولار أمريكي',
        nameEn: 'US Dollar',
        symbol: '$',
        symbolEn: 'USD',
        rate: 0.71, // 1 JOD = 0.71 USD (approximate)
        flag: '🇺🇸'
    },
    EUR: {
        name: 'يورو',
        nameEn: 'Euro',
        symbol: '€',
        symbolEn: 'EUR',
        rate: 0.65, // 1 JOD = 0.65 EUR (approximate)
        flag: '🇪🇺'
    },
    GBP: {
        name: 'جنيه إسترليني',
        nameEn: 'British Pound',
        symbol: '£',
        symbolEn: 'GBP',
        rate: 0.56, // 1 JOD = 0.56 GBP (approximate)
        flag: '🇬🇧'
    },
    SAR: {
        name: 'ريال سعودي',
        nameEn: 'Saudi Riyal',
        symbol: 'ريال',
        symbolEn: 'SAR',
        rate: 2.65, // 1 JOD = 2.65 SAR (approximate)
        flag: '🇸🇦'
    },
    AED: {
        name: 'درهم إماراتي',
        nameEn: 'UAE Dirham',
        symbol: 'درهم',
        symbolEn: 'AED',
        rate: 2.60, // 1 JOD = 2.60 AED (approximate)
        flag: '🇦🇪'
    },
    TRY: {
        name: 'ليرة تركية',
        nameEn: 'Turkish Lira',
        symbol: '₺',
        symbolEn: 'TRY',
        rate: 20.5, // 1 JOD = 20.5 TRY (approximate)
        flag: '🇹🇷'
    }
};

// Currency conversion functions
function convertPrice(priceJOD, targetCurrency) {
    if (targetCurrency === 'JOD' || !priceJOD || priceJOD === 0) {
        return priceJOD;
    }
    const rate = currencies[targetCurrency]?.rate || 1;
    return Math.round(priceJOD * rate);
}

function formatPrice(price, currency) {
    if (!price || price === 0) return '';
    
    const currencyInfo = currencies[currency] || currencies['JOD'];
    const symbol = currentLanguage === 'ar' ? currencyInfo.symbol : currencyInfo.symbolEn;
    
    return `${price} ${symbol}`;
}

function switchCurrency(newCurrency) {
    currentCurrency = newCurrency;
    localStorage.setItem('preferredCurrency', newCurrency);
    
    // Update currency selector display
    updateCurrencySelector();
    
    // Re-render flights with new currency
    renderFlights();
    
    // Update any open modals
    const openModal = document.querySelector('.flight-comparison-modal');
    if (openModal) {
        // Find which flight the modal is for and re-create it
        // For now, just close the modal and let user reopen with new currency
        openModal.remove();
    }
}

function updateCurrencySelector() {
    const currencyButtons = document.querySelectorAll('[data-currency]');
    const currentCurrencyDisplay = document.querySelectorAll('.current-currency');
    
    currencyButtons.forEach(button => {
        const currency = button.dataset.currency;
        if (currency === currentCurrency) {
            button.classList.add('active', 'bg-jude-blue', 'text-white');
            button.classList.remove('bg-gray-100', 'text-gray-700');
        } else {
            button.classList.remove('active', 'bg-jude-blue', 'text-white');
            button.classList.add('bg-gray-100', 'text-gray-700');
        }
    });
    
    currentCurrencyDisplay.forEach(element => {
        const currencyInfo = currencies[currentCurrency];
        element.textContent = currentLanguage === 'ar' ? 
            `${currencyInfo.flag} ${currencyInfo.name}` : 
            `${currencyInfo.flag} ${currencyInfo.nameEn}`;
    });
}

const translations = {
    ar: {
        // Navigation
        home: 'الرئيسية',
        flights: 'الرحلات',
        about: 'من نحن',
        contact: 'اتصل بنا',
        
        // Hero Section
        heroTitle: 'اكتشف العالم مع الجود للسياحة',
        heroSubtitle: 'رحلات طيران مستأجرة إلى أجمل الوجهات السياحية بأفضل الأسعار',
        exploreFlights: 'اكتشف الرحلات',
        bookNow: 'احجز الآن',
        
        // Features
        whyChooseUs: 'لماذا تختار الجود للسياحة؟',
        whyDescription: 'نقدم لك أفضل خدمات السفر والسياحة مع خبرة تزيد عن سنوات في هذا المجال',
        
        // Flight Display
        destinations: 'وجهاتنا السياحية',
        destinationsDesc: 'اختر من بين مجموعة واسعة من الوجهات السياحية المميزة',
        searchPlaceholder: 'ابحث عن وجهة...',
        
        // Buttons
        bookNowBtn: 'احجز الآن',
        moreDetails: 'المزيد من التفاصيل',
        compareAll: 'قارن جميع شركات الطيران',
        backToFlights: 'العودة للرحلات',
        
        // Common
        notAvailable: 'غير متاح',
        dailyFlights: 'يومياً',
        jod: 'دينار',
        days: 'أيام'
    },
    en: {
        // Navigation  
        home: 'Home',
        flights: 'Flights',
        about: 'About Us',
        contact: 'Contact',
        
        // Hero Section
        heroTitle: 'Discover the World with Jude Travel',
        heroSubtitle: 'Charter flights to the most beautiful tourist destinations at the best prices',
        exploreFlights: 'Explore Flights',
        bookNow: 'Book Now',
        
        // Features
        whyChooseUs: 'Why Choose Jude Travel?',
        whyDescription: 'We provide the best travel and tourism services with years of experience in this field',
        
        // Flight Display
        destinations: 'Our Tourist Destinations',
        destinationsDesc: 'Choose from a wide range of premium tourist destinations',
        searchPlaceholder: 'Search for destination...',
        
        // Buttons
        bookNowBtn: 'Book Now',
        moreDetails: 'More Details',
        compareAll: 'Compare All Airlines',
        backToFlights: 'Back to Flights',
        
        // Common
        notAvailable: 'Not Available',
        dailyFlights: 'Daily',
        jod: 'JOD',
        days: 'Days'
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Booking Form Management
function showBookingForm(flightId, airlineIndex = null, packageIndex = null) {
    const flight = flightData.find(f => f.id === flightId);
    if (!flight) return;
    
    const modal = document.getElementById('booking-modal');
    const destinationDisplay = document.getElementById('booking-destination');
    const airlineSelect = document.getElementById('booking-airline');
    const packageSelect = document.getElementById('booking-package');
    
    // Set destination
    const destinationText = currentLanguage === 'ar' ? 
        `${flight.destination}، ${flight.country}` : 
        `${flight.destinationEn || flight.destination}, ${flight.countryEn || flight.country}`;
    destinationDisplay.textContent = destinationText;
    
    // Clear and populate airline options
    airlineSelect.innerHTML = `<option value="" data-ar="اختر شركة الطيران..." data-en="Select airline...">اختر شركة الطيران...</option>`;
    
    flight.airlines.forEach((airline, index) => {
        // Add ALL airlines for the destination
        const option = document.createElement('option');
        option.value = index;
        option.textContent = currentLanguage === 'ar' ? airline.nameAr : airline.name;
        option.dataset.airlineData = JSON.stringify(airline);
        airlineSelect.appendChild(option);
    });
    
    // Pre-select airline if specified
    if (airlineIndex !== null && flight.airlines[airlineIndex]) {
        airlineSelect.value = airlineIndex;
        populatePackageOptions(flight.airlines[airlineIndex], packageIndex);
    }
    
    // Set up airline change handler
    airlineSelect.onchange = function() {
        if (this.value) {
            const airline = flight.airlines[parseInt(this.value)];
            populatePackageOptions(airline);
        } else {
            packageSelect.innerHTML = `<option value="" data-ar="اختر الباقة..." data-en="Select package...">اختر الباقة...</option>`;
        }
        updateBookingPrice();
    };
    
    // Set up package change handler
    packageSelect.onchange = updateBookingPrice;
    
    // Set up trip type change handlers
    const tripTypeInputs = document.querySelectorAll('input[name="trip-type"]');
    tripTypeInputs.forEach(input => {
        input.onchange = function() {
            const returnContainer = document.getElementById('return-date-container');
            const returnInput = document.getElementById('booking-return');
            
            if (this.value === 'round-trip') {
                returnContainer.style.display = 'block';
                returnInput.required = true;
            } else {
                returnContainer.style.display = 'none';
                returnInput.required = false;
                returnInput.value = '';
            }
            updateBookingPrice();
        };
    });
    
    // Set up passenger count change handlers
    ['booking-adults', 'booking-children', 'booking-infants'].forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.onchange = updateBookingPrice;
        }
    });
    
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('booking-departure').min = today;
    document.getElementById('booking-return').min = today;
    
    // Store flight data for later use
    modal.dataset.flightId = flightId;
    
    // Show modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function populatePackageOptions(airline, preselectedIndex = null) {
    const packageSelect = document.getElementById('booking-package');
    packageSelect.innerHTML = `<option value="" data-ar="اختر الباقة..." data-en="Select package...">اختر الباقة...</option>`;
    
    airline.packages.forEach((pkg, index) => {
        const option = document.createElement('option');
        option.value = index;
        
        if (pkg.price > 0) {
            // Available package - show price
            const priceText = formatPrice(convertPrice(pkg.price, currentCurrency), currentCurrency);
            option.textContent = `${pkg.duration} - ${priceText}`;
        } else {
            // Not available package - show "غير متاح"
            const notAvailableText = currentLanguage === 'ar' ? 'غير متاح' : 'Not Available';
            option.textContent = `${pkg.duration} - ${notAvailableText}`;
            option.disabled = true; // Disable selection of unavailable packages
        }
        
        option.dataset.packageData = JSON.stringify(pkg);
        packageSelect.appendChild(option);
    });
    
    // Pre-select package if specified
    if (preselectedIndex !== null) {
        packageSelect.value = preselectedIndex;
    }
}

function updateBookingPrice() {
    const airlineSelect = document.getElementById('booking-airline');
    const packageSelect = document.getElementById('booking-package');
    const tripType = document.querySelector('input[name="trip-type"]:checked')?.value;
    const adults = parseInt(document.getElementById('booking-adults').value) || 1;
    const children = parseInt(document.getElementById('booking-children').value) || 0;
    const infants = parseInt(document.getElementById('booking-infants').value) || 0;
    
    const priceDisplay = document.getElementById('booking-price-display');
    const totalPriceElement = document.getElementById('booking-total-price');
    
    if (!airlineSelect.value || !packageSelect.value || !tripType) {
        priceDisplay.classList.add('hidden');
        return;
    }
    
    try {
        const flightId = document.getElementById('booking-modal').dataset.flightId;
        const flight = flightData.find(f => f.id === flightId);
        const airline = flight.airlines[parseInt(airlineSelect.value)];
        const pkg = airline.packages[parseInt(packageSelect.value)];
        
        // Check if package is available
        if (pkg.price === 0) {
            // Package not available - show "غير متاح" instead of price
            const notAvailableText = currentLanguage === 'ar' ? 'غير متاح' : 'Not Available';
            totalPriceElement.textContent = notAvailableText;
            totalPriceElement.className = 'text-xl font-bold text-gray-500';
            priceDisplay.classList.remove('hidden');
            return;
        }
        
        // Reset price element styling for available packages
        totalPriceElement.className = 'text-xl font-bold text-green-600';
        
        let basePrice = 0;
        
        // Calculate base price based on trip type
        if (tripType === 'round-trip') {
            basePrice = pkg.price;
        } else if (tripType === 'one-way-outbound') {
            // Use appropriate one-way price for outbound
            if (pkg.oneWayAmmanSharm) basePrice = pkg.oneWayAmmanSharm;
            else if (pkg.oneWayAmmanIstanbul) basePrice = pkg.oneWayAmmanIstanbul;
            else if (pkg.oneWayAmmanTrabzon) basePrice = pkg.oneWayAmmanTrabzon;
            else if (pkg.oneWayAmmanBatumi) basePrice = pkg.oneWayAmmanBatumi;
            else if (pkg.oneWayAmmanTbilisi) basePrice = pkg.oneWayAmmanTbilisi;
            else basePrice = pkg.price * 0.6; // Fallback calculation
        } else if (tripType === 'one-way-return') {
            // Use appropriate one-way price for return
            if (pkg.oneWaySharmAmman) basePrice = pkg.oneWaySharmAmman;
            else if (pkg.oneWayIstanbulAmman) basePrice = pkg.oneWayIstanbulAmman;
            else if (pkg.oneWayTrabzonAmman) basePrice = pkg.oneWayTrabzonAmman;
            else if (pkg.oneWayBatumiAmman) basePrice = pkg.oneWayBatumiAmman;
            else if (pkg.oneWayTbilisiAmman) basePrice = pkg.oneWayTbilisiAmman;
            else basePrice = pkg.price * 0.4; // Fallback calculation
        }
        
        // Calculate total for all passengers (adults + children, infants usually free)
        const totalPrice = (basePrice * (adults + children));
        const convertedPrice = convertPrice(totalPrice, currentCurrency);
        
        totalPriceElement.textContent = formatPrice(convertedPrice, currentCurrency);
        priceDisplay.classList.remove('hidden');
        
    } catch (error) {
        console.error('Error calculating price:', error);
        priceDisplay.classList.add('hidden');
    }
}

function closeBookingModal() {
    const modal = document.getElementById('booking-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    
    // Reset form
    document.getElementById('booking-form').reset();
    document.getElementById('booking-price-display').classList.add('hidden');
}

function handleBookingSubmit(event) {
    event.preventDefault();
    
    const flightId = document.getElementById('booking-modal').dataset.flightId;
    const flight = flightData.find(f => f.id === flightId);
    
    // Collect form data
    const formData = {
        destination: document.getElementById('booking-destination').textContent,
        airline: document.getElementById('booking-airline').selectedOptions[0]?.textContent,
        package: document.getElementById('booking-package').selectedOptions[0]?.textContent,
        tripType: document.querySelector('input[name="trip-type"]:checked')?.value,
        adults: document.getElementById('booking-adults').value,
        children: document.getElementById('booking-children').value,
        infants: document.getElementById('booking-infants').value,
        departure: document.getElementById('booking-departure').value,
        return: document.getElementById('booking-return').value,
        phone: document.getElementById('booking-phone').value,
        email: document.getElementById('booking-email').value,
        notes: document.getElementById('booking-notes').value,
        totalPrice: document.getElementById('booking-total-price').textContent
    };
    
    // Validate required fields
    if (!formData.airline || !formData.package || !formData.departure || !formData.phone) {
        alert(currentLanguage === 'ar' ? 'يرجى ملء جميع الحقول المطلوبة' : 'Please fill all required fields');
        return;
    }
    
    // Check if selected package is available
    const airlineIndex = document.getElementById('booking-airline').value;
    const packageIndex = document.getElementById('booking-package').value;
    const selectedAirline = flight.airlines[parseInt(airlineIndex)];
    const selectedPackage = selectedAirline.packages[parseInt(packageIndex)];
    
    if (selectedPackage.price === 0) {
        alert(currentLanguage === 'ar' ? 
            'الباقة المحددة غير متاحة. يرجى اختيار باقة أخرى أو شركة طيران مختلفة.' : 
            'Selected package is not available. Please choose another package or different airline.');
        return;
    }
    
    // Validate return date for round trip
    if (formData.tripType === 'round-trip' && !formData.return) {
        alert(currentLanguage === 'ar' ? 'يرجى تحديد تاريخ العودة' : 'Please select return date');
        return;
    }
    
    // Generate WhatsApp message
    const whatsappMessage = generateWhatsAppMessage(formData);
    
    // Send to WhatsApp
    const whatsappNumber = '+962777066005';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Close modal after a short delay
    setTimeout(() => {
        closeBookingModal();
        alert(currentLanguage === 'ar' ? 
            'تم إرسال طلب الحجز عبر واتساب. سيتواصل معك فريق الجود للسياحة قريباً!' : 
            'Booking request sent via WhatsApp. Jude Travel team will contact you soon!');
    }, 1000);
}

function generateWhatsAppMessage(data) {
    const tripTypeText = {
        'round-trip': currentLanguage === 'ar' ? 'ذهاب وإياب' : 'Round Trip',
        'one-way-outbound': currentLanguage === 'ar' ? 'ذهاب فقط' : 'One Way (Outbound)',
        'one-way-return': currentLanguage === 'ar' ? 'عودة فقط' : 'One Way (Return)'
    };
    
    let message = currentLanguage === 'ar' ? 
        `🌟 طلب حجز جديد - الجود للسياحة والسفر\n\n` :
        `🌟 New Booking Request - Jude Travel Agency\n\n`;
    
    message += currentLanguage === 'ar' ? 
        `📍 الوجهة: ${data.destination}\n` +
        `✈️ شركة الطيران: ${data.airline}\n` +
        `📦 الباقة: ${data.package}\n` +
        `🔄 نوع الرحلة: ${tripTypeText[data.tripType]}\n\n` +
        `👥 عدد المسافرين:\n` +
        `   • البالغون: ${data.adults}\n` +
        `   • الأطفال: ${data.children}\n` +
        `   • الرضع: ${data.infants}\n\n` +
        `📅 تاريخ المغادرة: ${data.departure}\n` :
        `📍 Destination: ${data.destination}\n` +
        `✈️ Airline: ${data.airline}\n` +
        `📦 Package: ${data.package}\n` +
        `🔄 Trip Type: ${tripTypeText[data.tripType]}\n\n` +
        `👥 Passengers:\n` +
        `   • Adults: ${data.adults}\n` +
        `   • Children: ${data.children}\n` +
        `   • Infants: ${data.infants}\n\n` +
        `📅 Departure Date: ${data.departure}\n`;
    
    if (data.return && data.tripType === 'round-trip') {
        message += currentLanguage === 'ar' ? 
            `📅 تاريخ العودة: ${data.return}\n` :
            `📅 Return Date: ${data.return}\n`;
    }
    
    message += currentLanguage === 'ar' ? 
        `\n📞 رقم الهاتف: ${data.phone}\n` :
        `\n📞 Phone: ${data.phone}\n`;
    
    if (data.email) {
        message += currentLanguage === 'ar' ? 
            `📧 البريد الإلكتروني: ${data.email}\n` :
            `📧 Email: ${data.email}\n`;
    }
    
    message += currentLanguage === 'ar' ? 
        `\n💰 السعر الإجمالي: ${data.totalPrice}\n` :
        `\n💰 Total Price: ${data.totalPrice}\n`;
    
    if (data.notes) {
        message += currentLanguage === 'ar' ? 
            `\n📝 ملاحظات خاصة:\n${data.notes}\n` :
            `\n📝 Special Notes:\n${data.notes}\n`;
    }
    
    message += currentLanguage === 'ar' ? 
        `\n✨ شكراً لاختياركم الجود للسياحة والسفر!` :
        `\n✨ Thank you for choosing Jude Travel Agency!`;
    
    return message;
}

function setupBookingModal() {
    const modal = document.getElementById('booking-modal');
    const closeBtn = document.getElementById('booking-modal-close');
    const cancelBtn = document.getElementById('booking-cancel');
    const form = document.getElementById('booking-form');
    
    // Close modal handlers
    if (closeBtn) {
        closeBtn.addEventListener('click', closeBookingModal);
    }
    
    if (cancelBtn) {
        cancelBtn.addEventListener('click', closeBookingModal);
    }
    
    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeBookingModal();
            }
        });
    }
    
    // Form submission
    if (form) {
        form.addEventListener('submit', handleBookingSubmit);
    }
    
    // ESC key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeBookingModal();
        }
    });
}

// Currency setup and event handlers
function setupCurrency() {
    // Get saved currency or default to JOD
    const savedCurrency = localStorage.getItem('judeTravel_currency') || 'JOD';
    currentCurrency = savedCurrency;
    
    // Setup currency toggle buttons
    const currencyToggle = document.getElementById('currency-toggle');
    const currencyDropdown = document.getElementById('currency-dropdown');
    
    if (currencyToggle && currencyDropdown) {
        // Toggle dropdown visibility
        currencyToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            currencyDropdown.classList.toggle('hidden');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!currencyToggle.contains(e.target) && !currencyDropdown.contains(e.target)) {
                currencyDropdown.classList.add('hidden');
            }
        });
    }
    
    // Setup currency option buttons
    const currencyOptions = document.querySelectorAll('.currency-option');
    currencyOptions.forEach(option => {
        option.addEventListener('click', function() {
            const currency = this.dataset.currency;
            switchCurrency(currency);
            
            // Close dropdown
            if (currencyDropdown) {
                currencyDropdown.classList.add('hidden');
            }
        });
    });
    
    // Apply initial currency
    updateCurrencySelector();
}

function initializeApp() {
    setupLanguage();
    setupCurrency();
    setupBookingModal();
    setupMobileMenu();
    renderFlights();
    setupSearchFunctionality();
    setupContactForm();
    setupSmoothScrolling();
    setupAnimations();
}

// Mobile menu functionality
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu when clicking on links
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
}

// Render flight cards
function renderFlights(flights = flightData) {
    const flightsGrid = document.getElementById('flights-grid');
    if (!flightsGrid) return;
    
    flightsGrid.innerHTML = '';
    
    flights.forEach((flight, index) => {
        const flightCard = createFlightCard(flight);
        flightCard.classList.add('fade-in');
        flightCard.style.animationDelay = `${index * 0.1}s`;
        flightsGrid.appendChild(flightCard);
    });
}

// Create individual flight card with airline tabs
function createFlightCard(flight) {
    const card = document.createElement('div');
    card.className = 'flight-card';
    
    card.innerHTML = `
        <div class="flight-card-header" style="background-image: url('${flight.image}'); background-size: cover; background-position: center;">
            <div class="bg-black bg-opacity-50 rounded-lg p-4">
                <h3 class="destination-name">${currentLanguage === 'ar' ? flight.destination : flight.destinationEn}</h3>
                <p class="text-sm opacity-90">${currentLanguage === 'ar' ? flight.country : flight.countryEn || flight.country}</p>
            </div>
        </div>
        
        <div class="flight-card-body">
            <!-- Airline Tabs -->
            <div class="airline-tabs mb-4">
                <div class="flex border-b border-gray-200">
                    ${flight.airlines.map((airline, index) => `
                        <button 
                            onclick="switchAirline('${flight.id}', ${index})" 
                            class="airline-tab flex-1 py-2 px-3 text-sm font-medium text-center border-b-2 transition-colors ${index === 0 ? 'border-jude-blue text-jude-blue bg-blue-50' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}"
                            data-flight="${flight.id}" 
                            data-airline="${index}">
                            <span class="block text-lg mb-1">${airline.logo}</span>
                            <span class="block text-xs">${currentLanguage === 'ar' ? airline.nameAr : airline.name}</span>
                        </button>
                    `).join('')}
                </div>
            </div>
            
            <!-- Airline Content -->
            ${flight.airlines.map((airline, airlineIndex) => `
                <div class="airline-content ${airlineIndex === 0 ? '' : 'hidden'}" data-flight="${flight.id}" data-airline="${airlineIndex}">
                    <div class="mb-4">
                        <div class="flex items-center justify-between mb-3">
                            <h4 class="font-semibold text-gray-800 flex items-center">
                                <span class="text-2xl ml-2">${airline.logo}</span>
                                ${currentLanguage === 'ar' ? airline.nameAr : airline.name}
                            </h4>
                            <span class="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">${airline.name}</span>
                        </div>
                        
                        ${airline.packages.map((pkg, index) => `
                            <div class="mb-3 ${index > 0 ? 'border-t border-gray-100 pt-3' : ''}">
                                ${pkg.flights ? `
                                    <!-- Cairo Special Flights Display -->
                                    <div class="mb-3">
                                        <div class="flex justify-between items-center mb-2">
                                            ${pkg.price > 0 ? 
                                                `<span class="price-tag">${formatPrice(convertPrice(pkg.price, currentCurrency), currentCurrency)} ذهاب وإياب</span>` :
                                                '<span class="price-tag bg-blue-600">رحلات منتظمة</span>'
                                            }
                                            <span class="duration-badge">${currentLanguage === 'ar' ? pkg.duration : (pkg.durationEn || pkg.duration)}</span>
                                        </div>
                                        
                                        <div class="cairo-flights bg-blue-50 p-3 rounded-md">
                                            <h6 class="font-medium text-gray-800 mb-2 text-center">
                                                ${pkg.price > 0 ? 
                                                    (currentLanguage === 'ar' ? 'جدول الرحلات الأسبوعية' : 'Weekly Flight Schedule') : 
                                                    (currentLanguage === 'ar' ? 'جدول الرحلات اليومية' : 'Daily Flight Schedule')
                                                }
                                            </h6>
                                            <div class="grid grid-cols-1 gap-2">
                                                ${pkg.flights.map(flight => `
                                                    <div class="bg-white p-2 rounded border text-xs">
                                                        <div class="flex justify-between items-center">
                                                            <div>
                                                                <strong>${currentLanguage === 'ar' ? flight.route : (flight.routeEn || flight.route)}</strong>
                                                                ${flight.multiCity ? `<br><span class="text-blue-600 text-xs"><i class="fas fa-route ml-1"></i>${currentLanguage === 'ar' ? 'رحلة متعددة المدن' : 'Multi-city flight'}</span>` : ''}
                                                                ${!flight.multiCity ? `<br><span class="text-gray-600">${currentLanguage === 'ar' ? 'مغادرة: ' + flight.departure : 'Departure: ' + (flight.departureEn || flight.departure)}</span>${flight.arrival ? `<br><span class="text-gray-600">${currentLanguage === 'ar' ? 'وصول: ' + flight.arrival : 'Arrival: ' + (flight.arrivalEn || flight.arrival)}</span>` : ''}` : ''}
                                                                ${flight.luggage ? `<br><span class="text-green-600 text-xs"><i class="fas fa-suitcase ml-1"></i>${flight.luggage}</span>` : ''}
                                                                ${flight.days ? `<br><span class="text-gray-500 text-xs">${flight.days}</span>` : ''}
                                                            </div>
                                                            <div class="text-right">
                                                                <div class="font-bold text-jude-orange">
                                                                    ${formatPrice(convertPrice(flight.price, currentCurrency), currentCurrency)}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                `).join('')}
                                            </div>
                                            ${pkg.price > 0 ? `
                                                <div class="mt-3 p-2 bg-green-50 border border-green-200 rounded text-center">
                                                    <span class="text-xs text-green-700">
                                                        ${flight.id === 'cairo' && airline.name === 'Jordan Aviation' ? 
                                                            `💰 وفر ${formatPrice(convertPrice((155 + 130) - pkg.price, currentCurrency), currentCurrency)} عند الحجز ذهاب وإياب!` :
                                                            flight.id === 'cairo' && airline.name === 'Royal Jordanian' ?
                                                            `💰 ذهاب وإياب يبدأ من ${formatPrice(convertPrice(pkg.price, currentCurrency), currentCurrency)} - وفر حتى ${formatPrice(convertPrice((170 + 140) - pkg.price, currentCurrency), currentCurrency)}!` :
                                                            `💰 وفر ${formatPrice(convertPrice((155 + 130) - pkg.price, currentCurrency), currentCurrency)} عند الحجز ذهاب وإياب!`
                                                        }
                                                    </span>
                                                </div>
                                            ` : ''}
                                        </div>
                                    </div>
                                ` : `
                                    <!-- Regular Package Display -->
                                    <div class="flex justify-between items-center mb-2">
                                        ${pkg.price === 0 ? 
                                            `<span class="price-tag bg-gray-400">${currentLanguage === 'ar' ? 'غير متاح' : 'Not Available'}</span>` : 
                                            `<span class="price-tag">${formatPrice(convertPrice(pkg.price, currentCurrency), currentCurrency)}</span>`
                                        }
                                        <span class="duration-badge">${currentLanguage === 'ar' ? pkg.duration : (pkg.durationEn || pkg.duration)}</span>
                                    </div>
                                `}
                                
                                ${pkg.price > 0 && (pkg.oneWayAmmanSharm || pkg.oneWayAmmanIstanbul || pkg.oneWayAmmanTrabzon || pkg.oneWayAmmanTbilisi || pkg.oneWayAmmanBatumi) ? `
                                    <div class="one-way-prices bg-blue-50 p-2 rounded-md mb-2">
                                        <div class="text-xs text-gray-600 mb-1 font-medium">
                                            ${currentLanguage === 'ar' ? 'أسعار الذهاب فقط:' : 'One-Way Prices:'}
                                        </div>
                                        <div class="grid grid-cols-2 gap-2 text-xs">
                                            ${pkg.oneWayAmmanSharm ? 
                                                `<span class="text-center py-1 px-2 bg-white rounded border">
                                                    ${currentLanguage === 'ar' ? 'عمان → شرم الشيخ' : 'Amman → Sharm El-Sheikh'}<br>
                                                    <strong>${formatPrice(convertPrice(pkg.oneWayAmmanSharm, currentCurrency), currentCurrency)}</strong>
                                                </span>
                                                <span class="text-center py-1 px-2 bg-white rounded border">
                                                    ${currentLanguage === 'ar' ? 'شرم الشيخ → عمان' : 'Sharm El-Sheikh → Amman'}<br>
                                                    <strong>${formatPrice(convertPrice(pkg.oneWaySharmAmman, currentCurrency), currentCurrency)}</strong>
                                                </span>` :
                                            pkg.oneWayAmmanIstanbul ?
                                                `<span class="text-center py-1 px-2 bg-white rounded border">
                                                    ${currentLanguage === 'ar' ? 'عمان → اسطنبول' : 'Amman → Istanbul'}<br>
                                                    <strong>${formatPrice(convertPrice(pkg.oneWayAmmanIstanbul, currentCurrency), currentCurrency)}</strong>
                                                </span>
                                                <span class="text-center py-1 px-2 bg-white rounded border">
                                                    ${currentLanguage === 'ar' ? 'اسطنبول → عمان' : 'Istanbul → Amman'}<br>
                                                    <strong>${formatPrice(convertPrice(pkg.oneWayIstanbulAmman, currentCurrency), currentCurrency)}</strong>
                                                </span>` :
                                            pkg.oneWayAmmanTrabzon ?
                                                `<span class="text-center py-1 px-2 bg-white rounded border">
                                                    ${currentLanguage === 'ar' ? 'عمان → طرابزون' : 'Amman → Trabzon'}<br>
                                                    <strong>${formatPrice(convertPrice(pkg.oneWayAmmanTrabzon, currentCurrency), currentCurrency)}</strong>
                                                </span>
                                                <span class="text-center py-1 px-2 bg-white rounded border">
                                                    ${currentLanguage === 'ar' ? 'طرابزون → عمان' : 'Trabzon → Amman'}<br>
                                                    <strong>${formatPrice(convertPrice(pkg.oneWayTrabzonAmman, currentCurrency), currentCurrency)}</strong>
                                                </span>` :
                                            pkg.oneWayAmmanBatumi ?
                                                `<span class="text-center py-1 px-2 bg-white rounded border">
                                                    ${currentLanguage === 'ar' ? 'عمان → باتومي' : 'Amman → Batumi'}<br>
                                                    <strong>${formatPrice(convertPrice(pkg.oneWayAmmanBatumi, currentCurrency), currentCurrency)}</strong>
                                                </span>
                                                <span class="text-center py-1 px-2 bg-white rounded border">
                                                    ${currentLanguage === 'ar' ? 'باتومي → عمان' : 'Batumi → Amman'}<br>
                                                    <strong>${formatPrice(convertPrice(pkg.oneWayBatumiAmman, currentCurrency), currentCurrency)}</strong>
                                                </span>` :
                                                `<span class="text-center py-1 px-2 bg-white rounded border">
                                                    ${currentLanguage === 'ar' ? 'عمان → تبليسي' : 'Amman → Tbilisi'}<br>
                                                    <strong>${formatPrice(convertPrice(pkg.oneWayAmmanTbilisi, currentCurrency), currentCurrency)}</strong>
                                                </span>
                                                <span class="text-center py-1 px-2 bg-white rounded border">
                                                    ${currentLanguage === 'ar' ? 'تبليسي → عمان' : 'Tbilisi → Amman'}<br>
                                                    <strong>${formatPrice(convertPrice(pkg.oneWayTbilisiAmman, currentCurrency), currentCurrency)}</strong>
                                                </span>`
                                            }
                                        </div>
                                    </div>
                                ` : ''}
                                
                                <div class="departure-info bg-gray-50">
                                    <div class="flex items-center text-sm text-gray-600">
                                        <i class="fas fa-calendar-alt ml-2"></i>
                                        <span>${currentLanguage === 'ar' ? 'مواعيد الرحلة: ' + pkg.days : 'Flight Schedule: ' + (pkg.daysEn || pkg.days)}</span>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                        
                        <div class="airline-features-section">
                            <h5 class="font-medium text-gray-800 mb-2">${currentLanguage === 'ar' ? 'مميزات شركة الطيران:' : 'Airline Features:'}</h5>
                            <ul class="text-sm text-gray-600 space-y-1">
                                ${(currentLanguage === 'ar' ? airline.features : (airline.featuresEn || airline.features)).map(feature => `
                                    <li class="flex items-center">
                                        <i class="fas fa-check text-green-500 ml-2"></i>
                                        ${feature}
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            `).join('')}
            
            <!-- Gallery Section -->
            ${flight.gallery && flight.gallery.length > 0 ? `
                <div class="gallery-section mt-4 pt-4 border-t border-gray-200">
                    <h4 class="font-semibold text-gray-800 mb-3">صور من ${currentLanguage === 'ar' ? flight.destination : flight.destinationEn}</h4>
                    <div class="grid grid-cols-2 gap-2 mb-4">
                        ${flight.gallery.map((img, index) => `
                            <div class="gallery-item rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                                <img src="${img}" alt="${currentLanguage === 'ar' ? flight.destination : flight.destinationEn}" 
                                     class="w-full h-20 object-cover rounded-md border border-gray-200 hover:border-jude-blue transition-colors"
                                     onclick="showImageModal('${img}', '${currentLanguage === 'ar' ? flight.destination : flight.destinationEn}')">
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
            
            <!-- General Features Section -->
            <div class="mt-4 pt-4 border-t border-gray-200">
                <h4 class="font-semibold text-gray-800 mb-2">${currentLanguage === 'ar' ? 'مميزات الرحلة العامة:' : 'General Trip Features:'}</h4>
                <ul class="text-sm text-gray-600 space-y-1 mb-4">
                    ${(currentLanguage === 'ar' ? flight.generalFeatures : (flight.generalFeaturesEn || flight.generalFeatures)).map(feature => `
                        <li class="flex items-center">
                            <i class="fas fa-star text-jude-orange ml-2"></i>
                            ${feature}
                        </li>
                    `).join('')}
                </ul>
            </div>
            
            <div class="mt-auto pt-4 space-y-2">
                <button onclick="bookFlight('${flight.id}')" class="btn-primary">
                    <i class="fas fa-plane ml-2"></i>
                    ${currentLanguage === 'ar' ? 'احجز الآن' : 'Book Now'}
                </button>
                <button onclick="getMoreInfo('${flight.id}')" class="btn-secondary">
                    <i class="fas fa-info-circle ml-2"></i>
                    ${currentLanguage === 'ar' ? 'قارن جميع شركات الطيران' : 'Compare All Airlines'}
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Search functionality
function setupSearchFunctionality() {
    const searchInput = document.getElementById('destination-search');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            renderFlights();
            return;
        }
        
        const filteredFlights = flightData.filter(flight => 
            flight.destination.toLowerCase().includes(searchTerm) ||
            flight.destinationEn.toLowerCase().includes(searchTerm) ||
            flight.country.toLowerCase().includes(searchTerm)
        );
        
        renderFlights(filteredFlights);
        
        // Show no results message if needed
        if (filteredFlights.length === 0) {
            const flightsGrid = document.getElementById('flights-grid');
            flightsGrid.innerHTML = `
                <div class="col-span-full text-center py-12">
                    <i class="fas fa-search text-4xl text-gray-400 mb-4"></i>
                    <h3 class="text-xl font-semibold text-gray-600 mb-2">لا توجد نتائج</h3>
                    <p class="text-gray-500">جرب البحث بكلمات مختلفة</p>
                </div>
            `;
        }
    });
}

// Contact form functionality
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin ml-2"></i>جاري الإرسال...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            showMessage('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.', 'success');
            contactForm.reset();
            
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Scroll animations
function setupAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Flight booking functionality
function bookFlight(flightId) {
    // Show booking form for the selected destination
    showBookingForm(flightId);
}

// Get more information about a flight
function getMoreInfo(flightId) {
    const flight = flightData.find(f => f.id === flightId);
    if (!flight) return;
    
    // Create and show modal with detailed information
    showFlightDetailsModal(flight);
}

// Show flight details modal with airline comparison
function showFlightDetailsModal(flight) {
    // Remove any existing modals first
    const existingModals = document.querySelectorAll('.flight-comparison-modal');
    existingModals.forEach(modal => modal.remove());
    
    // Create modal backdrop
    const backdrop = document.createElement('div');
    backdrop.className = 'flight-comparison-modal fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
    
    // Create modal content
    const modal = document.createElement('div');
    modal.className = 'bg-white rounded-lg max-w-5xl w-full max-h-screen overflow-hidden flex flex-col';
    
    // Define close modal function
    const closeModal = () => {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        backdrop.remove();
    };
    
    // Handle backdrop click
    backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) {
            closeModal();
        }
    });
    
    // Handle keyboard events
    const handleKeyPress = (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    };
    
    document.addEventListener('keydown', handleKeyPress);
    
    // Clean up event listener when modal is removed
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.removedNodes.forEach((node) => {
                if (node === backdrop) {
                    document.removeEventListener('keydown', handleKeyPress);
                    observer.disconnect();
                }
            });
        });
    });
    
    observer.observe(document.body, { childList: true });
    
    modal.innerHTML = `
        <div class="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center flex-shrink-0">
            <div class="flex items-center space-x-3 space-x-reverse">
                <button class="modal-back-btn text-gray-500 p-2 rounded-full ml-4 hover:bg-gray-100 transition-colors" title="العودة للرحلات">
                    <i class="fas fa-arrow-right text-lg"></i>
                </button>
                <h3 class="text-xl font-bold text-gray-800">مقارنة شركات الطيران - ${flight.destination}</h3>
            </div>
            <button class="modal-close-btn text-gray-500 p-2 rounded-full hover:bg-gray-100 transition-colors" title="إغلاق النافذة">
                <i class="fas fa-times text-xl"></i>
            </button>
        </div>
        
        <div class="p-6 overflow-y-auto flex-1">
            <div class="mb-6">
                <img src="${flight.image}" alt="${flight.destination}" class="w-full h-48 object-cover rounded-lg mb-4">
                <h4 class="text-lg font-semibold mb-2">${flight.destination}, ${flight.country}</h4>
            </div>
            
            <!-- Airlines Comparison Table -->
            <div class="mb-6">
                <h5 class="font-semibold text-gray-800 mb-4">مقارنة شركات الطيران والأسعار:</h5>
                <div class="overflow-x-auto">
                    <table class="w-full border border-gray-200 rounded-lg overflow-hidden">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="px-4 py-3 text-right border-b border-gray-200 font-semibold text-gray-700">شركة الطيران</th>
                                <th class="px-4 py-3 text-center border-b border-gray-200 font-semibold text-gray-700">المدة والسعر</th>
                                <th class="px-4 py-3 text-center border-b border-gray-200 font-semibold text-gray-700">مواعيد الرحلة</th>
                                <th class="px-4 py-3 text-center border-b border-gray-200 font-semibold text-gray-700">العمل</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${flight.airlines.map((airline, airlineIndex) => `
                                ${airline.packages.map((pkg, pkgIndex) => `
                                    <tr class="hover:bg-gray-50 ${pkgIndex === 0 ? 'border-t-2 border-gray-300' : ''}">
                                        ${pkgIndex === 0 ? `
                                            <td class="px-4 py-3 border-b border-gray-200 ${airline.packages.length > 1 ? 'border-l border-gray-200' : ''}" rowspan="${airline.packages.length}">
                                                <div class="flex items-center">
                                                    <span class="text-2xl ml-3">${airline.logo}</span>
                                                    <div>
                                                        <div class="font-semibold text-gray-800">${airline.nameAr}</div>
                                                        <div class="text-sm text-gray-500">${airline.name}</div>
                                                    </div>
                                                </div>
                                            </td>
                                        ` : ''}
                                        <td class="px-4 py-3 text-center border-b border-gray-200">
                                            ${pkg.price === 0 ? 
                                                '<div class="font-bold text-gray-500 text-lg">غير متاح</div>' : 
                                                `<div class="font-bold text-jude-orange text-lg">${formatPrice(convertPrice(pkg.price, currentCurrency), currentCurrency)}</div>
                                                 ${(pkg.oneWayAmmanSharm || pkg.oneWayAmmanIstanbul || pkg.oneWayAmmanTrabzon || pkg.oneWayAmmanTbilisi || pkg.oneWayAmmanBatumi) ? 
                                                    `<div class="text-xs mt-2 bg-blue-50 p-1 rounded">
                                                        <div class="font-medium text-gray-600 mb-1">أسعار الذهاب فقط:</div>
                                                        ${pkg.oneWayAmmanSharm ? 
                                                            `<div>عمان→شرم: ${formatPrice(convertPrice(pkg.oneWayAmmanSharm, currentCurrency), currentCurrency)}</div>
                                                             <div>شرم→عمان: ${formatPrice(convertPrice(pkg.oneWaySharmAmman, currentCurrency), currentCurrency)}</div>` :
                                                        pkg.oneWayAmmanIstanbul ?
                                                            `<div>عمان→اسطنبول: ${formatPrice(convertPrice(pkg.oneWayAmmanIstanbul, currentCurrency), currentCurrency)}</div>
                                                             <div>اسطنبول→عمان: ${formatPrice(convertPrice(pkg.oneWayIstanbulAmman, currentCurrency), currentCurrency)}</div>` :
                                                        pkg.oneWayAmmanTrabzon ?
                                                            `<div>عمان→طرابزون: ${formatPrice(convertPrice(pkg.oneWayAmmanTrabzon, currentCurrency), currentCurrency)}</div>
                                                             <div>طرابزون→عمان: ${formatPrice(convertPrice(pkg.oneWayTrabzonAmman, currentCurrency), currentCurrency)}</div>` :
                                                        pkg.oneWayAmmanBatumi ?
                                                            `<div>عمان→باتومي: ${formatPrice(convertPrice(pkg.oneWayAmmanBatumi, currentCurrency), currentCurrency)}</div>
                                                             <div>باتومي→عمان: ${formatPrice(convertPrice(pkg.oneWayBatumiAmman, currentCurrency), currentCurrency)}</div>` :
                                                            `<div>عمان→تبليسي: ${formatPrice(convertPrice(pkg.oneWayAmmanTbilisi, currentCurrency), currentCurrency)}</div>
                                                             <div>تبليسي→عمان: ${formatPrice(convertPrice(pkg.oneWayTbilisiAmman, currentCurrency), currentCurrency)}</div>`
                                                        }
                                                    </div>` : ''
                                                 }`
                                            }
                                            <div class="text-sm text-gray-600">${pkg.duration}</div>
                                        </td>
                                        <td class="px-4 py-3 text-center border-b border-gray-200">
                                            <div class="text-sm text-gray-700">${pkg.days}</div>
                                        </td>
                                        <td class="px-4 py-3 text-center border-b border-gray-200">
                                            ${pkg.price === 0 ? 
                                                '<button class="bg-gray-400 text-white px-3 py-1 rounded text-sm cursor-not-allowed" disabled>غير متاح</button>' :
                                                `<button onclick="bookSpecificFlight('${flight.id}', ${airlineIndex}, ${pkgIndex}); this.closest('.flight-comparison-modal').remove();" 
                                                        class="bg-jude-blue hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors"
                                                        data-flight="${flight.id}" data-airline="${airlineIndex}" data-package="${pkgIndex}">
                                                    احجز
                                                </button>`
                                            }
                                        </td>
                                    </tr>
                                `).join('')}
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
            
            <!-- Airlines Features Comparison -->
            <div class="mb-6">
                <h5 class="font-semibold text-gray-800 mb-4">مقارنة خدمات شركات الطيران:</h5>
                <div class="grid md:grid-cols-3 gap-4">
                    ${flight.airlines.map(airline => `
                        <div class="border border-gray-200 rounded-lg p-4">
                            <div class="text-center mb-3">
                                <span class="text-3xl">${airline.logo}</span>
                                <h6 class="font-semibold text-gray-800 mt-2">${airline.nameAr}</h6>
                            </div>
                            <ul class="text-sm text-gray-600 space-y-2">
                                ${airline.features.map(feature => `
                                    <li class="flex items-center">
                                        <i class="fas fa-check text-green-500 ml-2"></i>
                                        ${feature}
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <!-- General Features -->
            <div class="mb-6">
                <h5 class="font-semibold text-gray-800 mb-3">مميزات الرحلة العامة:</h5>
                <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <ul class="grid md:grid-cols-2 gap-2 text-sm text-gray-700">
                        ${flight.generalFeatures.map(feature => `
                            <li class="flex items-center">
                                <i class="fas fa-star text-jude-orange ml-2"></i>
                                ${feature}
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
            
            <div class="bg-gray-50 border border-gray-200 rounded-lg p-3 mb-4">
                <p class="text-sm text-gray-600 text-center">
                    <i class="fas fa-keyboard ml-1"></i>
                    اضغط <kbd class="px-2 py-1 bg-white border border-gray-300 rounded text-xs">Esc</kbd> للإغلاق السريع
                </p>
            </div>
            
            <div class="flex space-x-3 space-x-reverse mt-6">
                <button class="btn-primary flex-1 close-modal-btn">
                    <i class="fas fa-arrow-right ml-2"></i>
                    العودة للرحلات
                </button>
                <button class="btn-secondary flex-1 book-flight-btn" data-flight-id="${flight.id}">
                    <i class="fas fa-plane ml-2"></i>
                    احجز رحلة
                </button>
            </div>
        </div>
    `;
    
    backdrop.appendChild(modal);
    document.body.appendChild(backdrop);
    
    // Prevent body scroll but allow modal scroll
    document.body.style.overflow = 'hidden';
    
    // Set up event handlers after DOM insertion
    const setupEventHandlers = () => {
        // Close button handlers
        const closeButtons = modal.querySelectorAll('.modal-close-btn, .modal-back-btn, .close-modal-btn');
        closeButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                closeModal();
            });
        });
        
        // Book flight button handler
        const bookBtn = modal.querySelector('.book-flight-btn');
        if (bookBtn) {
            bookBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const flightId = bookBtn.getAttribute('data-flight-id');
                bookFlight(flightId);
                closeModal();
            });
        }
        
        // Book specific flight buttons in table
        const specificBookButtons = modal.querySelectorAll('[data-flight][data-airline][data-package]');
        specificBookButtons.forEach(btn => {
            btn.removeAttribute('onclick'); // Remove any existing onclick
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const flightId = btn.getAttribute('data-flight');
                const airlineIndex = parseInt(btn.getAttribute('data-airline'));
                const packageIndex = parseInt(btn.getAttribute('data-package'));
                
                bookSpecificFlight(flightId, airlineIndex, packageIndex);
                closeModal();
            });
        });
    };
    
    // Setup event handlers
    setupEventHandlers();
    
    // Add some helpful attributes for debugging
    modal.setAttribute('data-modal-type', 'flight-comparison');
    backdrop.setAttribute('data-modal-backdrop', 'true');
    
    // Console log for debugging
    console.log('Flight comparison modal opened for:', flight.destination);
}

// Utility functions
function scrollToFlights() {
    document.getElementById('flights').scrollIntoView({ behavior: 'smooth' });
}

function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

function showMessage(text, type = 'success') {
    // Remove existing messages
    document.querySelectorAll('.message').forEach(msg => msg.remove());
    
    const message = document.createElement('div');
    message.className = `message ${type}`;
    message.textContent = text;
    
    // Insert after contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.insertAdjacentElement('afterend', message);
        message.classList.add('show');
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            if (message.parentNode) {
                message.remove();
            }
        }, 5000);
    }
}

// Format currency
function formatCurrency(amount) {
    return `${amount} دينار`;
}

// Get flight by ID
function getFlightById(flightId) {
    return flightData.find(flight => flight.id === flightId);
}

// Switch between airline tabs
function switchAirline(flightId, airlineIndex) {
    // Update tab active state
    const tabs = document.querySelectorAll(`[data-flight="${flightId}"][data-airline]`);
    tabs.forEach((tab, index) => {
        if (tab.classList.contains('airline-tab')) {
            if (index === airlineIndex) {
                tab.classList.remove('border-transparent', 'text-gray-500');
                tab.classList.add('border-jude-blue', 'text-jude-blue', 'bg-blue-50');
            } else {
                tab.classList.add('border-transparent', 'text-gray-500');
                tab.classList.remove('border-jude-blue', 'text-jude-blue', 'bg-blue-50');
            }
        }
    });
    
    // Update content visibility
    const contents = document.querySelectorAll(`[data-flight="${flightId}"].airline-content`);
    contents.forEach((content, index) => {
        if (index === airlineIndex) {
            content.classList.remove('hidden');
        } else {
            content.classList.add('hidden');
        }
    });
}

// Book specific flight with airline and package
function bookSpecificFlight(flightId, airlineIndex, packageIndex) {
    // Close any existing modal first
    const existingModal = document.querySelector('.flight-comparison-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Show booking form with pre-selected options
    showBookingForm(flightId, airlineIndex, packageIndex);
}

// Enhanced flight booking with current selected airline
function bookFlight(flightId) {
    const flight = flightData.find(f => f.id === flightId);
    if (!flight) return;
    
    // Find currently active airline tab
    const activeTab = document.querySelector(`[data-flight="${flightId}"].airline-tab.border-jude-blue`);
    let airlineIndex = 0;
    
    if (activeTab) {
        airlineIndex = parseInt(activeTab.getAttribute('data-airline'));
    }
    
    // Show booking form with pre-selected airline
    showBookingForm(flightId, airlineIndex);
}

// Global function to close any open modal (fallback)
window.closeFlightModal = function() {
    const modal = document.querySelector('.flight-comparison-modal');
    if (modal) {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        modal.remove();
        console.log('Modal closed via global function');
    }
};

// Language Setup and Management
function setupLanguage() {
    // Get saved language or default to Arabic
    const savedLang = localStorage.getItem('judeTravel_language') || 'ar';
    currentLanguage = savedLang;
    
    // Setup language toggle buttons
    const languageToggle = document.getElementById('language-toggle');
    const mobileLanguageToggle = document.getElementById('mobile-language-toggle');
    
    if (languageToggle) {
        languageToggle.addEventListener('click', toggleLanguage);
    }
    
    if (mobileLanguageToggle) {
        mobileLanguageToggle.addEventListener('click', toggleLanguage);
    }
    
    // Apply initial language
    applyLanguage(currentLanguage);
}

function toggleLanguage() {
    // Toggle between Arabic and English
    currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    localStorage.setItem('judeTravel_language', currentLanguage);
    applyLanguage(currentLanguage);
    
    // Re-render flights with new language
    renderFlights();
}

function applyLanguage(lang) {
    const htmlRoot = document.getElementById('html-root');
    const currentLangSpan = document.getElementById('current-lang');
    const mobileLangText = document.getElementById('mobile-lang-text');
    
    console.log('Applying language:', lang); // Debug log
    
    if (lang === 'ar') {
        htmlRoot.setAttribute('lang', 'ar');
        htmlRoot.setAttribute('dir', 'rtl');
        htmlRoot.classList.add('rtl');
        htmlRoot.classList.remove('ltr');
        
        // Button should show the OTHER language (what you can switch TO)
        if (currentLangSpan) {
            currentLangSpan.textContent = 'English'; // Show English because you can switch TO English
        }
        if (mobileLangText) {
            mobileLangText.textContent = 'Switch to English';
        }
        
        // Update page title
        document.title = 'الجود للسياحة والسفر - رحلات طيران مستأجرة من وإلى الأردن';
        
    } else {
        htmlRoot.setAttribute('lang', 'en');
        htmlRoot.setAttribute('dir', 'ltr');
        htmlRoot.classList.add('ltr');
        htmlRoot.classList.remove('rtl');
        
        // Button should show the OTHER language (what you can switch TO)
        if (currentLangSpan) {
            currentLangSpan.textContent = 'العربية'; // Show Arabic because you can switch TO Arabic
        }
        if (mobileLangText) {
            mobileLangText.textContent = 'Switch to العربية';
        }
        
        // Update page title
        document.title = 'Jude Travel Agency - Charter Flights from/to Jordan';
    }
    
    // Update all elements with translation attributes
    updateTranslatedElements();
}

function updateTranslatedElements() {
    const elements = document.querySelectorAll('[data-en], [data-ar]');
    
    elements.forEach(element => {
        const key = currentLanguage === 'ar' ? 'data-ar' : 'data-en';
        const translation = element.getAttribute(key);
        
        if (translation) {
            element.textContent = translation;
        }
    });
    
    // Update search placeholder
    const searchInput = document.getElementById('destination-search');
    if (searchInput) {
        searchInput.placeholder = currentLanguage === 'ar' ? 
            'ابحث عن وجهة...' : 'Search for destination...';
    }
}

function getTranslation(key) {
    return translations[currentLanguage][key] || key;
}

// Export functions for global access
window.bookFlight = bookFlight;
window.bookSpecificFlight = bookSpecificFlight;
window.getMoreInfo = getMoreInfo;
window.switchAirline = switchAirline;
window.scrollToFlights = scrollToFlights;
window.scrollToContact = scrollToContact;
window.toggleLanguage = toggleLanguage;

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log(`Page loaded in ${loadTime}ms`);
        }, 0);
    });
}

// Service Worker registration (for future PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Register service worker when ready
        // navigator.serviceWorker.register('/sw.js');
    });
}

// Hero Slider Functionality
let currentSlide = 0;
let slideInterval;

function initializeHeroSlider() {
    const slides = document.querySelectorAll('.hero-slider .slide');
    const indicators = document.querySelectorAll('.slide-indicator');
    
    if (slides.length === 0) return;
    
    // Start automatic slider
    startSlideShow();
    
    // Setup indicator click handlers
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            goToSlide(index);
        });
    });
    
    // Pause slider on hover
    const heroSection = document.getElementById('home');
    if (heroSection) {
        heroSection.addEventListener('mouseenter', pauseSlideShow);
        heroSection.addEventListener('mouseleave', startSlideShow);
    }
}

function goToSlide(slideIndex) {
    const slides = document.querySelectorAll('.hero-slider .slide');
    const indicators = document.querySelectorAll('.slide-indicator');
    
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    
    // Update current slide
    currentSlide = slideIndex;
    
    // Update slide visibility
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === slideIndex);
    });
    
    // Update indicators
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === slideIndex);
    });
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function startSlideShow() {
    // Clear any existing interval
    if (slideInterval) {
        clearInterval(slideInterval);
    }
    
    // Start new interval - change slide every 5 seconds
    slideInterval = setInterval(nextSlide, 5000);
}

function pauseSlideShow() {
    if (slideInterval) {
        clearInterval(slideInterval);
    }
}

// Update the initialize function to include hero slider
function initializeApp() {
    setupLanguage();
    setupCurrency();
    setupBookingModal();
    setupMobileMenu();
    renderFlights();
    setupSearchFunctionality();
    setupContactForm();
    setupSmoothScrolling();
    setupAnimations();
    initializeHeroSlider(); // Add hero slider initialization
}

// Image Gallery Modal Functions
function showImageModal(imageSrc, title) {
    // Remove existing modal if any
    const existingModal = document.querySelector('.image-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'image-modal fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4';
    
    modal.innerHTML = `
        <div class="relative max-w-4xl max-h-full">
            <button onclick="closeImageModal()" class="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 z-10">
                <i class="fas fa-times"></i>
            </button>
            <img src="${imageSrc}" alt="${title}" class="max-w-full max-h-full object-contain rounded-lg">
            <div class="text-center mt-4">
                <h3 class="text-white text-lg font-semibold">${title}</h3>
            </div>
        </div>
    `;
    
    // Close on backdrop click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeImageModal();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
            closeImageModal();
            document.removeEventListener('keydown', escHandler);
        }
    });
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    const modal = document.querySelector('.image-modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = '';
    }
}

// Export hero slider functions for global access
window.goToSlide = goToSlide;
window.showImageModal = showImageModal;
window.closeImageModal = closeImageModal;