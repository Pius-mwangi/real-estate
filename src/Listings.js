import { useRef, useEffect, useState } from 'react';
import './Listings.css';

const Listings = ({ onSelectProperty }) => {
  const scrollContainer = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Enhanced scroll effect
  useEffect(() => {
    const container = scrollContainer.current;
    if (!container) return;

    const handleWheel = (e) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      container.scrollLeft += e.deltaY + e.deltaX;
      setScrollPosition(container.scrollLeft);
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  const properties = [
    {
      id: 1,
      title: "Oceanfront Glass Villa",
      price: 4850000,
      beds: 5,
      baths: 4.5,
      sqft: 5800,
      yearBuilt: 2021,
      location: "Malibu, CA",
      thumbnail: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZXJuJTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwdmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZXJuJTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZXJuJTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVybiUyMGhvbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=80"
      ],
      description: "This architectural masterpiece features floor-to-ceiling windows with panoramic ocean views, a cantilevered infinity pool, and smart home automation throughout. The open floor plan blends indoor and outdoor living with retractable glass walls.",
      features: [
        "Direct beach access",
        "Smart home system",
        "Infinity edge pool",
        "Rooftop deck",
        "Chef's kitchen",
        "Home theater",
        "Wine cellar",
        "EV charging"
      ]
    },
    {
      id: 2,
      title: "Skyline Penthouse",
      price: 12500000,
      beds: 4,
      baths: 4.5,
      sqft: 6800,
      yearBuilt: 2023,
      location: "New York, NY",
      thumbnail: "https://images.pexels.com/photos/7031607/pexels-photo-7031607.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
      images: [
        "https://images.pexels.com/photos/7031607/pexels-photo-7031607.jpeg?auto=compress&cs=tinysrgb&w=1200&dpr=1",
        "https://images.pexels.com/photos/7031593/pexels-photo-7031593.jpeg?auto=compress&cs=tinysrgb&w=1200&dpr=1",
        "https://images.pexels.com/photos/7031603/pexels-photo-7031603.jpeg?auto=compress&cs=tinysrgb&w=1200&dpr=1",
        "https://images.pexels.com/photos/7031601/pexels-photo-7031601.jpeg?auto=compress&cs=tinysrgb&w=1200&dpr=1",
        "https://images.pexels.com/photos/7031600/pexels-photo-7031600.jpeg?auto=compress&cs=tinysrgb&w=1200&dpr=1"
      ],
      description: "Perched atop Manhattan's tallest residential tower, this penthouse offers 360-degree views through floor-to-ceiling smart glass windows. The interior features imported marble, custom millwork, and smart home technology throughout.",
      features: [
        "Private elevator",
        "360° terrace",
        "Home spa with sauna",
        "Library",
        "Chef's kitchen",
        "24/7 concierge",
        "Wine vault",
        "Smart glass windows"
      ]
    },
    // 10 more unique properties with real images...
    {
      id: 3,
      title: "Alpine Modern Retreat",
      price: 3850000,
      beds: 6,
      baths: 5,
      sqft: 7200,
      yearBuilt: 2019,
      location: "Aspen, CO",
      thumbnail: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
      images: [
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200&dpr=1",
        "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=1200&dpr=1",
        "https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=1200&dpr=1",
        "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1200&dpr=1"
      ],
      description: "Nestled in the Rocky Mountains, this architectural gem features massive glass walls framing panoramic mountain views. The great room has a 30-foot ceiling with exposed beams and a floor-to-ceiling stone fireplace.",
      features: [
        "Ski-in/ski-out",
        "Outdoor hot tub",
        "Game room",
        "Home theater",
        "Wine cellar",
        "Heated driveway",
        "Solar panels",
        "Smart home system"
      ]
    },
    {
      id: 4,
      title: "Mediterranean Villa",
      price: 8750000,
      beds: 7,
      baths: 6.5,
      sqft: 9800,
      yearBuilt: 2018,
      location: "Miami Beach, FL",
      thumbnail: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVybiUyMGhvbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
      images: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVybiUyMGhvbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVybiUyMGhvbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVybiUyMGhvbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=80"
      ],
      description: "This waterfront estate combines modern architecture with Mediterranean influences. The property features a private dock, resort-style pool, and lush tropical landscaping with direct ocean access.",
      features: [
        "Private boat dock",
        "Infinity pool",
        "Home theater",
        "Wine cellar",
        "Smart home",
        "Gourmet kitchen",
        "Guest house",
        "Rooftop terrace"
      ]
    },
    {
      id: 5,
      title: "Urban Loft",
      price: 2850000,
      beds: 3,
      baths: 2.5,
      sqft: 3200,
      yearBuilt: 2020,
      location: "Chicago, IL",
      thumbnail: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9mdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      images: [
        "https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9mdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600566752421-50d9a5a7c4f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9mdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600566752371-51d5c0447b9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9mdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=80"
      ],
      description: "This converted warehouse features 18-foot ceilings, exposed brick walls, and massive industrial windows. The open floor plan includes a chef's kitchen and custom lighting throughout.",
      features: [
        "Exposed brick",
        "Concrete floors",
        "Chef's kitchen",
        "Smart home",
        "City views",
        "Walk-in closet",
        "Home office",
        "Rooftop access"
      ]
    },
    {
      id: 6,
      title: "Desert Modern",
      price: 3750000,
      beds: 4,
      baths: 3.5,
      sqft: 4200,
      yearBuilt: 2021,
      location: "Scottsdale, AZ",
      thumbnail: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRlc2VydCUyMGhvbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
      images: [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRlc2VydCUyMGhvbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600607687644-5d822f9320a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRlc2VydCUyMGhvbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZXJuJTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=80"
      ],
      description: "This desert contemporary home blends seamlessly with its environment using natural materials and clean lines. The property features a negative-edge pool, outdoor living spaces, and mountain views.",
      features: [
        "Mountain views",
        "Negative-edge pool",
        "Outdoor kitchen",
        "Solar panels",
        "Smart home",
        "Guest house",
        "Home theater",
        "EV charging"
      ]
    },
    {
      id: 7,
      title: "Historic Brownstone",
      price: 6850000,
      beds: 5,
      baths: 4.5,
      sqft: 5800,
      yearBuilt: 1895,
      location: "Boston, MA",
      thumbnail: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVybiUyMGhvbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
      images: [
        "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVybiUyMGhvbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVybiUyMGhvbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600566752421-50d9a5a7c4f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9mdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=80"
      ],
      description: "This meticulously restored brownstone combines historic charm with modern luxury. The property features original details like crown molding and fireplaces alongside a gourmet kitchen and smart home technology.",
      features: [
        "Original details",
        "Chef's kitchen",
        "Home office",
        "Wine cellar",
        "Smart home",
        "Private garden",
        "Finished basement",
        "Walk-in closets"
      ]
    },
    {
      id: 8,
      title: "Tropical Modern",
      price: 4250000,
      beds: 4,
      baths: 4,
      sqft: 4800,
      yearBuilt: 2020,
      location: "Honolulu, HI",
      thumbnail: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZXJuJTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      images: [
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZXJuJTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVybiUyMGhvbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVybiUyMGhvbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=80"
      ],
      description: "This tropical modern home features open-air living spaces, lush landscaping, and ocean views. The property includes a resort-style pool, outdoor shower, and seamless indoor-outdoor flow.",
      features: [
        "Ocean views",
        "Infinity pool",
        "Outdoor shower",
        "Chef's kitchen",
        "Smart home",
        "Guest house",
        "Solar panels",
        "EV charging"
      ]
    },
    {
      id: 9,
      title: "Mid-Century Modern",
      price: 3250000,
      beds: 3,
      baths: 2.5,
      sqft: 2800,
      yearBuilt: 1958,
      location: "Palm Springs, CA",
      thumbnail: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZXJuJTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      images: [
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZXJuJTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600566752421-50d9a5a7c4f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9mdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600566752371-51d5c0447b9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9mdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=80"
      ],
      description: "This meticulously restored mid-century modern home features floor-to-ceiling windows, clean lines, and an open floor plan. The property includes a saltwater pool, mountain views, and original details.",
      features: [
        "Mountain views",
        "Saltwater pool",
        "Original details",
        "Chef's kitchen",
        "Smart home",
        "Solar panels",
        "EV charging",
        "Guest house"
      ]
    },
    {
      id: 10,
      title: "Contemporary Farmhouse",
      price: 2750000,
      beds: 4,
      baths: 3.5,
      sqft: 3800,
      yearBuilt: 2020,
      location: "Austin, TX",
      thumbnail: "https://images.unsplash.com/photo-1600566752421-50d9a5a7c4f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9mdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      images: [
        "https://images.unsplash.com/photo-1600566752421-50d9a5a7c4f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9mdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600566752371-51d5c0447b9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9mdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZXJuJTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=80"
      ],
      description: "This contemporary farmhouse blends modern design with rustic charm. The property features a chef's kitchen, home office, and outdoor living spaces with a pool and fire pit.",
      features: [
        "Chef's kitchen",
        "Home office",
        "Pool",
        "Fire pit",
        "Smart home",
        "Solar panels",
        "EV charging",
        "Guest house"
      ]
    }
  ];

  return (
    <section id="listings" className="listings-section">
      <div className="section-header">
        <h2 className="section-title">Exclusive Properties</h2>
        <div className="scroll-hint">← Scroll →</div>
      </div>

      <div className="properties-scroll" ref={scrollContainer}>
        {properties.map(property => (
          <div
            key={property.id}
            className="property-card"
            onClick={() => onSelectProperty(property)}
          >
            <div className="card-image-container">
              <img
                src={property.thumbnail}
                alt={property.title}
                className="card-image"
                loading="lazy"
              />
              <div className="image-overlay"></div>
              <div className="property-badges">
                <span className="price-badge">${property.price.toLocaleString()}</span>
                <span className="location-badge">{property.location}</span>
              </div>
            </div>

            <div className="card-content">
              <h3 className="property-title">{property.title}</h3>

              <div className="property-meta">
                <div className="meta-item">
                  <span className="meta-icon">🛏️</span>
                  <span>{property.beds} beds</span>
                </div>
                <div className="meta-item">
                  <span className="meta-icon">🚿</span>
                  <span>{property.baths} baths</span>
                </div>
                <div className="meta-item">
                  <span className="meta-icon">📏</span>
                  <span>{property.sqft.toLocaleString()} sqft</span>
                </div>
              </div>

              <button
                className="view-details-button"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectProperty(property);
                }}
              >
                View Details
                <span className="button-icon">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="sidebar">
        <button
          className="sidebar-button"
          onClick={() => {
            if (scrollContainer.current) {
              scrollContainer.current.scrollLeft -= 300;
            }
          }}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          className="sidebar-button"
          onClick={() => {
            if (scrollContainer.current) {
              scrollContainer.current.scrollLeft += 300;
            }
          }}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </section>
  );
};

export default Listings;
