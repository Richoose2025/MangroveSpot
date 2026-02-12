'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

// const activities = [
//   {
//     id: 1,
//     name: 'Mangrove Kayaking',
//     description: 'Paddle through scenic mangrove channels on a thrilling kayaking adventure.',
//     duration: '2 hours',
//     price: '₹1,000',
//     priceNote: 'per person',
//     image: '/activities/kayaking.jpg',
//     popular: true,
//   },
//   {
//     id: 2,
//     name: 'Country Boat (Gudalur)',
//     description: 'Experience a serene journey on traditional country boats through quiet waters.',
//     duration: '1 hour 15 min',
//     price: '₹1,700',
//     priceNote: '1-2 persons (₹250 extra per person)',
//     image: '/activities/country-boat.jpg',
//     popular: false,
//   },
//   {
//     id: 3,
//     name: 'High-Speed Cruise',
//     description: 'Experience fast-paced adventure with our high-speed motorized cruise.',
//     duration: '2 hours',
//     price: '₹3,500',
//     priceNote: '1-5 persons',
//     image: '/activities/paddling.jpg',
//     popular: false,
//   },
//   {
//     id: 4,
//     name: 'Coracle Ride',
//     description: 'Discover the charm of ancient coracle boats on a unique traditional experience.',
//     duration: '15 minutes',
//     price: '₹300',
//     priceNote: 'per person (Min. 2 people)',
//     image: '/activities/coracle.jpg',
//     popular: false,
//   },
//   {
//     id: 5,
//     name: 'Semi Cruise',
//     description: 'Enjoy a comfortable semi-speed cruise perfect for families and groups.',
//     duration: '1-2 hours',
//     price: '₹2,000',
//     priceNote: '1-4 persons (₹350 extra per person)',
//     image: '/activities/paddling.jpg',
//     popular: false,
//   },
//   {
//     id: 6,
//     name: 'Student Paddle',
//     description: 'Special paddling experience exclusively designed for students.',
//     duration: '2 hours',
//     price: '₹1,000',
//     priceNote: 'per person',
//     image: '/activities/paddling.jpg',
//     popular: false,
//   },
//   {
//     id: 7,
//     name: 'Bumper / Sofa Ride',
//     description: 'Thrilling ride on specially designed bumper boats for water fun.',
//     duration: '30 minutes',
//     price: '₹500',
//     priceNote: 'per person (Min. 2 people)',
//     image: '/activities/kayaking.jpg',
//     popular: false,
//   },
//   {
//     id: 8,
//     name: 'ATV Ride',
//     description: 'Experience off-road adventure on all-terrain vehicles.',
//     duration: '15-30 min',
//     price: '₹300',
//     priceNote: 'per person (1 round)',
//     image: '/activities/country-boat.jpg',
//     popular: false,
//   },
//   {
//     id: 9,
//     name: 'Swim Pool & Archery',
//     description: 'Enjoy swimming and try your hand at target archery.',
//     duration: '1 hour',
//     price: '₹150',
//     priceNote: 'per person (5 chances)',
//     image: '/activities/paddling.jpg',
//     popular: false,
//   },
//   {
//     id: 10,
//     name: 'Dawn Dance',
//     description: 'Early morning experience with nature and cultural activities.',
//     duration: '1.5 hours',
//     price: '₹150',
//     priceNote: 'per person (Min. 10 people)',
//     image: '/activities/kayaking.jpg',
//     popular: false,
//   },
//   {
//     id: 11,
//     name: 'Combo Pack',
//     description: 'All-inclusive adventure package with multiple activities in one day.',
//     duration: 'Full day',
//     price: '₹1,500',
//     priceNote: 'per person (includes multiple activities)',
//     image: '/activities/country-boat.jpg',
//     popular: false,
//   },
// ]
const activities = [
  {
    id: 1,
    name: 'Mangrove Kayaking',
    description: 'Paddle through scenic mangrove channels on a thrilling kayaking adventure.',
    duration: '2 hours',
    price: '₹1,000',
    priceNote: 'per person',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07', // mangrove kayaking
    popular: true,
  },
  {
    id: 2,
    name: 'Country Boat (Gudalur)',
    description: 'Experience a serene journey on traditional country boats through quiet waters.',
    duration: '1 hour 15 min',
    price: '₹1,700',
    priceNote: '1-2 persons (₹250 extra per person)',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944', // kerala backwater boat
    popular: false,
  },
  {
    id: 3,
    name: 'High-Speed Cruise',
    description: 'Experience fast-paced adventure with our high-speed motorized cruise.',
    duration: '2 hours',
    price: '₹3,500',
    priceNote: '1-5 persons',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b', // speed boat
    popular: false,
  },
  {
    id: 4,
    name: 'Coracle Ride',
    description: 'Discover the charm of ancient coracle boats on a unique traditional experience.',
    duration: '15 minutes',
    price: '₹300',
    priceNote: 'per person (Min. 2 people)',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e', // coracle boat
    popular: false,
  },
  {
    id: 5,
    name: 'Semi Cruise',
    description: 'Enjoy a comfortable semi-speed cruise perfect for families and groups.',
    duration: '1-2 hours',
    price: '₹2,000',
    priceNote: '1-4 persons (₹350 extra per person)',
    image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1', // backwater cruise
    popular: false,
  },
  {
    id: 6,
    name: 'Student Paddle',
    description: 'Special paddling experience exclusively designed for students.',
    duration: '2 hours',
    price: '₹1,000',
    priceNote: 'per person',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    popular: false,
  },
  {
    id: 7,
    name: 'Bumper / Sofa Ride',
    description: 'Thrilling ride on specially designed bumper boats for water fun.',
    duration: '30 minutes',
    price: '₹500',
    priceNote: 'per person (Min. 2 people)',
    image: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e', // water ride
    popular: false,
  },
  {
    id: 8,
    name: 'ATV Ride',
    description: 'Experience off-road adventure on all-terrain vehicles.',
    duration: '15-30 min',
    price: '₹300',
    priceNote: 'per person (1 round)',
    image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6', // ATV ride
    popular: false,
  },
  {
    id: 9,
    name: 'Swim Pool & Archery',
    description: 'Enjoy swimming and try your hand at target archery.',
    duration: '1 hour',
    price: '₹150',
    priceNote: 'per person (5 chances)',
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904', // archery outdoor
    popular: false,
  },
  {
    id: 10,
    name: 'Dawn Dance',
    description: 'Early morning experience with nature and cultural activities.',
    duration: '1.5 hours',
    price: '₹150',
    priceNote: 'per person (Min. 10 people)',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
    popular: false,
  },
  {
    id: 11,
    name: 'Combo Pack',
    description: 'All-inclusive adventure package with multiple activities in one day.',
    duration: 'Full day',
    price: '₹1,500',
    priceNote: 'per person (includes multiple activities)',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944',
    popular: false,
  },
]


export function ActivitiesSection() {
  return (
    <section id="activities" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Adventures
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose from our premium eco-adventure experiences
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={activity.image}
                  alt={activity.name}
                  fill
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {activity.popular && (
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                    Most Popular
                  </Badge>
                )}
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-white">
                  {activity.name}
                </h3>
                <p className="text-muted-foreground">
                  {activity.description}
                </p>

                {/* Meta Info */}
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Duration: <span className="text-foreground">{activity.duration}</span>
                  </p>
                  <div>
                    <p className="text-lg font-semibold text-accent">
                      {activity.price}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {activity.priceNote}
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg">
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
