import React from 'react'
import Explorebtn from '@/component/explorebtn';

const page = () => {
  return (
    <section>
      <h1 className='text-center'>The Hub for Every Dev <br /> Event you cannot miss</h1>
      <p className='text-center mt-5'>Hackathins, meetups, and conferences, All in One place</p>

      <Explorebtn />
      <div>
        <h3>Featured Events</h3>

        <ul className='events'>
          {[1, 2, 3, 4].map((event) => (
            <li key={event} className='event-card'>
              <h4>Event {event}</h4>
              <p>Details about event {event}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default page
