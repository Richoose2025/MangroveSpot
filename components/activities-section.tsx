'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const activities = [
  {
    id: 1,
    name: 'Mangrove Kayaking',
    description:
      'Explore the beautiful mangrove forest with a guided kayaking experience.',
    duration: '2 hours',
    price: '₹700',
    priceNote: 'per person',
    image: './Mangrove-Kayaking.jpg',
    popular: true,
  },
  {
    id: 2,
    name: 'Country Boat',
    description:
      'Relaxing country boat ride through calm backwaters (Pre-booking only).',
    duration: '1 hour 15 minutes',
    price: '₹1700',
    priceNote:
      '1–2 persons | Extra person ₹250 per head (Pre-book customers only)',
    image: '../Country-Boat.png',
  },
  {
    id: 3,
    name: 'High Speed Engine',
    description:
      'Exciting high-speed engine boat ride for thrill seekers.',
    duration: 'Varies',
    price: '₹3500',
    priceNote: '1–5 persons',
    image: './../hight.jpg',
  },
  {
    id: 4,
    name: 'Semi Engine Boat',
    description:
      'Comfortable semi-engine boat ride perfect for families.',
    duration: '1–4 hours',
    price: '₹2000',
    priceNote: '1–4 persons | Extra ₹350 per head (additional)',
    image: '../../semi.jpg',
  },
  {
    id: 5,
    name: 'Coracle Ride',
    description:
      'Traditional coracle boat ride experience.',
    duration: '15 minutes',
    price: '₹300',
    priceNote: 'per person (Minimum 2 persons required)',
    image: './../../Coracle-Ride.jpg',
  },
  {
    id: 6,
    name: 'Stand Up Paddle',
    description:
      'Enjoy balance and adventure with stand-up paddle boarding.',
    duration: '2 hours',
    price: '₹1000',
    priceNote: 'per person',
    image: '../../../stand.jpg',
  },
  {
    id: 7,
    name: 'Rain Dance',
    description:
      'Fun rain dance experience with music and water.',
    duration: 'Session based',
    price: '₹150',
    priceNote: 'per person (Minimum 10 persons required)',
    image: './../../../rain1.jpg',
  },
  {
    id: 8,
    name: 'Gun Shoot & Archery',
    description:
      'Test your aim with gun shooting and archery activity.',
    duration: '5 chances',
    price: '₹150',
    priceNote: 'per person (5 chances)',
    image: '../../../../arch.jpg',
  },
  {
    id: 9,
    name: 'ATV Ride',
    description: 'Off-road ATV adventure ride.',
    duration: '1 round',
    price: '₹300',
    priceNote: 'per person',
    image: '/ATV-Ride.jpg',
  },
  {
    id: 10,
    name: 'Bumper Ride / Soft Ride',
    description:
      'Exciting water bumper ride experience.',
    duration: 'Short session',
    price: '₹500',
    priceNote: 'per person (Minimum 2 persons required)',
    image: '/BumperSofaRide1.jpg',
  },
  {
    id: 11,
    name: 'Combo Pack',
    description:
      'Combo packages available for One Day and Half Day activities.',
    duration: 'Half Day / Full Day',
    price: 'Custom Pricing',
    priceNote:
      'Student group special discount applicable',
    image:
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944',
  },
]

export function ActivitiesSection() {

  const whatsappNumber = "917561001268"

  const handleWhatsAppBooking = (activityName) => {
    const message = `Hello Mangrove Sport Adventures 🌿

I would like to book the activity: ${activityName}

Please share more details.`

    const encodedMessage = encodeURIComponent(message)

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    )
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Adventures
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose from our premium eco-adventure experiences.
            Price offers available only for early bookings.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-card rounded-2xl shadow-lg flex flex-col h-full overflow-hidden"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={activity.image}
                  alt={activity.name}
                  fill
                  priority={activity.id === 1}
                  sizes="(max-width:768px) 100vw,
                         (max-width:1200px) 50vw,
                         33vw"
                  className="object-cover"
                />
                {activity.popular && (
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                    Most Popular
                  </Badge>
                )}
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">
                  {activity.name}
                </h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {activity.description}
                </p>

                <div className="text-sm text-muted-foreground mb-3">
                  Duration:{' '}
                  <span className="text-foreground font-medium">
                    {activity.duration}
                  </span>
                </div>

                <div className="mb-6">
                  <p className="text-lg font-semibold text-accent">
                    {activity.price}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {activity.priceNote}
                  </p>
                </div>

                <Button
                  onClick={() => handleWhatsAppBooking(activity.name)}
                  className="mt-auto w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                >
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
