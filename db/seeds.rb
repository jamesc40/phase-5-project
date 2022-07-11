require 'faker'
# Restaurant seeds
Event.create(name: 'One if by Land Two if by Sea', 
             event_type: 'restaurant', 
             indoor: true, 
             description: 'Established in 1973, One if by Land, Two if by Sea soon became the go to spot in NYC for engagements, anniversaries and weddings. More people are said to have announced their engagement here than any other restaurant in Manhattan.',
             website: 'https://oneifbyland.com/',
             image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            )

Event.create(name: 'Casa Mono', 
             event_type: 'restaurant',
             indoor: true, 
             description: 'Small-plate fans gather at this intimate Gramercy nook for upscale Spanish fare & a deep wine list.',
             website: 'https://casamononyc.com/',
             image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            )

Event.create(name: 'Fradei', 
             event_type: 'restaurant', 
             indoor: true, 
             description: 'Small-scale, locally sourced cuisine of the highest-quality ingredients.',
             website: 'https://www.fradeibistro.com',
             image: "https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"       
            )

# class seeds
Event.create(name: 'BrickHouse Ceramic Art Center', 
             event_type: 'class',
             indoor: true, 
             description: 'Pottery classes for adults in wheel throwing, hand building, glaze application for all levels.',
             website: 'https://brickhouseny.com/',
             image: "https://images.unsplash.com/photo-1590605105526-5c08f63f89aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            )
            
Event.create(name: 'Cooking Class with Cozymeal', 
             event_type: 'class',
             indoor: true, 
             description: "If you're looking to try a new experience with loved ones, as either a gift or just because, we recommend Cozymeal to make it happen.", 
             website: 'https://www.cozymeal.com/',
             image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29va2luZyUyMGNsYXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            )

#entertainment seeds
Event.create(name: 'AMC Theaters', 
             event_type: 'entertainment',
             indoor: true, 
             description: '
With best-in-class amenities such as plush, power recliners, MacGuffins full bars, AMC Dine-In Theatres, premium presentation formats including Dolby Cinema at AMC and IMAX, AMC is recognized as the industry leader and an iconic destination for movie-goers.', 
             website: 'https://www.amctheatres.com/',
             image: "https://www.dpr.com/uploads/project-hero/sj-amc-vallco.jpg"
            )

Event.create(name: 'Concert', 
             event_type: 'entertainment', 
             indoor: true, 
             description: "There's no artist on the face of the Earth that doesn't dream of taking the stage of New York City's greatest and more venerable music venues, and with good reason: places like Radio City Music Hall and the Beacon Theatre attract the best of the best, the contemporary and the classical, the avant garde and the timeless!",
             website: 'https://www.nyc.com/nyc-guides/best_concert_venues_in_nyc.308/', 
             image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
            )

Event.create(name: 'Play', 
             event_type: 'entertainment', 
             indoor: true,
             description: "Broadway is a top NYC landmark to check off your list. It gets pretty hot in the city at summer's peak, so why not cool off inside a theatre or two?", 
             website: 'https://www.newyorktheatreguide.com/', 
             image: "https://gotourismguides.com/nyc/wp-content/uploads/2016/04/nyc-broadway-theatres-closeup.jpg"
            )

Event.create(name: 'Beach day', 
             event_type: 'leisure',
             indoor: false,
             description: "It's fun, relaxing and who doesn't love the feeling of sand in their toes? Beach dates are perfect for those couples that need a break from the norm, and are great for spending quality time with your partner. Beach days can be relaxing, romantic, or adventurous; it all depends on your mood and what you want to do!", 
             website: "https://www.nycgovparks.org/facilities/beaches", 
             image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'
            )

Event.create(name: 'Park day',
             event_type: 'leisure', 
             indoor: false,
             description: "At a park, you will have a lot of time to spend with your partner. If you have something you want to say to your partner about your daily life, express your love for him or her, and you've had no chance to do it until now, a date at a park is the perfect occasion for that.", 
             website: "https://www.nycgovparks.org/", 
             image: "https://untappedcities.com/wp-content/uploads/2018/09/central-park-aerial-untapped-cities1-1-1.jpg", 
            )

Event.create(name: 'Sight seeing', 
             event_type: 'leisure', 
             indoor: false, 
             description: "'When you look back on life, what do you remember? Is it the drunken nights and delicious bites? Yes, but what’s even more memorable are the things that break the usual routine. Those times you wandered the walls of an ancient castle, saw a herd of cattle cause a traffic jam, and enjoyed one of the most beautiful vistas in your life. So, go on a day-tour and ensure you and your date make some memories and easy topics for future conversations. And you never know, one of the photos from the trip may end up on your mantlepiece one day.' -rabbies.com", 
             website: 'https://www.nycgo.com/things-to-do/attractions/?collections=must-see-nyc-attractions', 
             image: 'https://assets3.thrillist.com/v1/image/2680204/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70'
            )

Event.create(name: 'Hiking', 
             event_type: 'sport', 
             indoor: false, 
             description: "Hiking can show your date that you enjoy nature, being active, and having fun. A hiking date can be romantic too! On top of it all, hiking opens communication so you can get to know each other. Some of the best conversations occur while hiking.", 
             website: 'https://www.nycgovparks.org/places-to-go/hiking', 
             image: 'https://images.unsplash.com/photo-1440186347098-386b7459ad6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' 
            )

Event.create(name: 'Rock Climbing at The Cliffs', 
             event_type: 'sport', 
             indoor: false,
             description: "Rock climbing is an excellent date, whether or not you yourself are a rock climber. It is an activity that keeps you busy all day long, so it can help to avoid any lulls in activity or conversation.", 
             website: 'https://thecliffsclimbing.com/',
             image: 'https://images.squarespace-cdn.com/content/v1/5c69a4c5aadd34031f30a1b5/1551997703921-IRLFC876QMJ4W3CZKJ31/TopImage.jpg?format=1000w'
            )

# couple seed 
@couples = []

10.times do
  #image = Faker::LoremFlickr.image
  couple = Couple.create!(name: Faker::Internet.username)
  @couples << couple
end

@couples.each do |couple|
  Event.all.each do |event|
    date_night = DateNight.create!(
      couple_id: couple.id, event_id: event.id, 
      has_been: true, is_interested: true
    )

    Review.create!(
      event_id: event.id, date_night_id: date_night.id, 
      rating: rand(1..5), content: Faker::Quote.yoda
    )
  end
end
