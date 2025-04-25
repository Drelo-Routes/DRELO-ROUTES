import React, { useState } from 'react';
import { Link } from 'react-router';
import waterfall from "../../assets/images/waterfall.jpg"

export const regions = [
  {
    name: "Ashanti Region",
    attractions: [
      { id: "manhyia-palace", name: "Manhyia Palace", description: "Historic seat of the Ashanti kingdom.", location: "Kumasi", image: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Manhyia_Palace_Museum.jpg" },
      { id: "kumasi-zoo", name: "Kumasi Zoo", description: "Home to various wildlife species in the heart of Kumasi.", location: "Kumasi", image: "https://citinewsroom.com/wp-content/uploads/2021/02/Kumasi-Zoo.jpg" },
      { id: "prempeh-museum", name: "Prempeh Museum", description: "Museum showcasing Ashanti culture and heritage.", location: "Kumasi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQADFAKPruAuvUB8L_I7oV4-zDdJgEZT3EeQ&s" },
      { id: "lake-bosomtwe", name: "Lake Bosomtwe", description: "Sacred lake formed by a meteorite impact.", location: "Bosomtwe", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP9rd9W5Nj4S4QKK5zENfjN6UgX9JmGBJXZg&s" },
      { id: "rattray-park", name: "Rattray Park", description: "Urban park with modern amenities in Kumasi.", location: "Kumasi", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/11/32/7a/img-20200923-170112-largejpg.jpg?w=900&h=500&s=1" },
      { id: "owabi-wildlife", name: "Owabi Wildlife Sanctuary", description: "Sanctuary known for bird watching and biodiversity.", location: "Kumasi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR83EwQFQcYRRMCdTZTCIQkHqD7qxowMfJHdw&s" },
      { id: "okomfo-anokye-sword-site", name: "Okomfo Anokye Sword Site", description: "One of West Africa's largest open-air markets.", location: "Kumasi", image: "https://viewghana.com/wp-content/uploads/2025/02/Okomfo-Anokye-Sword-Site3.jpg" },
      { id: "asantehene-palace", name: "Asantehene Palace", description: "The ceremonial residence of the Ashanti king.", location: "Kumasi", image: "/images/asantehene.jpg" },
      { id: "cultural-center", name: "Kumasi Cultural Centre", description: "Center for traditional crafts and performances.", location: "Kumasi", image: "https://media-cdn.tripadvisor.com/media/daodao/photo-s/01/a8/e7/13/culture-centre-kumasi.jpg" },
      
    ]
  },
  {
    name: "Volta Region",
    attractions: [
      { id: "wli-falls", name: "Wli Waterfalls", description: "Tallest waterfall in Ghana.", location: "Hohoe", image: "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=450,height=450,dpr=2/tour_img/813b87962a8010d0aeffe3aeaac04d40a1ac2dd8ff8533d863b1df291cb1208f.jpg" },
      { id: "mount-afadjato", name: "Mount Afadjato", description: "Ghana's highest peak for hiking lovers.", location: "Hohoe", image: "https://visitghana.com/wp-content/uploads/2019/02/2703_Afadjato.jpg" },
      { id: "tagbo-falls", name: "Tagbo Falls", description: "Beautiful natural waterfall near Liati Wote.", location: "Liati Wote", image: "https://ghanaremembers.com/storage/public/tagbo-falls.jpg" },
      { id: "tsiame-pottery", name: "Tsiame Pottery Village", description: "Village known for traditional pottery making.", location: "Tsiame", image: "/images/tsiame.jpg" },
      { id: "kpetoe-kente", name: "Kpetoe Kente Weaving", description: "Center for traditional kente weaving.", location: "Kpetoe", image: "https://visitghana.com/wp-content/uploads/2019/02/4010_1452594059437.jpeg" },
      { id: "akyode-heritage", name: "Akyode Heritage Site", description: "Cultural site of the Akyode people.", location: "Nkwanta", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ruxKAIL5Z8PngUjZBkrdwaG79kSURhzuyA&s" },
    
      { id: "likpe-caves", name: "Likpe Caves", description: "Series of ancestral caves with guided hikes.", location: "Likpe", image: "https://ghanaremembers.com/images/http/aHR0cHM6Ly9naGFuYXJlbWVtYmVycy5jb20vc3RvcmFnZS9wdWJsaWMvbGlrcGUtY2F2ZXMtYW5kLXdhdGVyZmFsbHMucG5n/likpe-caves-and-waterfalls.png?p=page_featured&s=3a8665ce5b68a08d21c46e880ce02032" },
      { id: "amekpor-hill", name: "Amekpor Hill", description: "Hilltop view of Volta landscapes.", location: "Kpeve", image: "/images/amekpor.jpg" },
      { id: "volta-lake", name: "Volta Lake", description: "One of the world’s largest man-made lakes.", location: "Akosombo", image: "/images/volta-lake.jpg" },
    ]
  },
  {
    name: "Northern Region",
    attractions: [
      { id: "mole-park", name: "Mole National Park", description: "Ghana’s largest wildlife reserve.", location: "Damongo", image: "/images/mole.jpg" },
      { id: "larabanga-mosque", name: "Larabanga Mosque", description: "Oldest mosque in Ghana.", location: "Larabanga", image: "/images/larabanga.jpg" },
      { id: "yendi-palace", name: "Yendi Palace", description: "Seat of the Dagbon traditional council.", location: "Yendi", image: "/images/yendi.jpg" },
      { id: "nalerigu-wall", name: "Nalerigu Defense Wall", description: "Ancient defensive structure.", location: "Nalerigu", image: "/images/nalerigu.jpg" },
      { id: "tamale-cultural", name: "Tamale Cultural Centre", description: "Showcase of Northern culture and art.", location: "Tamale", image: "/images/tamale-cultural.jpg" },
      { id: "salaga-slave-market", name: "Salaga Slave Market", description: "Historic slave market site.", location: "Salaga", image: "/images/salaga.jpg" },
      { id: "damba-festival", name: "Damba Festival", description: "Traditional festival celebrated in Tamale.", location: "Tamale", image: "/images/damba.jpg" },
      { id: "bui-dam", name: "Bui Dam", description: "Major hydroelectric dam on the Black Volta.", location: "Bole", image: "/images/bui.jpg" },
      { id: "tamale-stadium", name: "Aliu Mahama Sports Stadium", description: "Main stadium in Northern Ghana.", location: "Tamale", image: "/images/stadium.jpg" },
      { id: "zongo-market", name: "Tamale Zongo Market", description: "Bustling market in the Zongo community.", location: "Tamale", image: "/images/zongo.jpg" },
    ]
  },
  {
    name: "Greater Accra",
    attractions: [
      {
        id: "kwame-nkrumah-memorial",
        name: "Kwame Nkrumah Memorial",
        description: "Final resting place of Ghana's first president.",
        location: "Accra",
        image: "/images/kwame.jpg",
      },
    ],
  },
  {
    name: "Central Region",
    attractions: [
      {
        id: "cape-coast-castle",
        name: "Cape Coast Castle",
        description: "UNESCO site tied to transatlantic slave trade.",
        location: "Cape Coast",
        image: "/images/cape-coast.jpg",
      },
    ],
  },
];

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeRegion, setActiveRegion] = useState(regions[0].name);

  const filteredRegions = regions.map((region) => {
    const filteredAttractions = region.attractions.filter((attraction) =>
      attraction.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return { ...region, attractions: filteredAttractions };
  }).filter(region => region.attractions.length > 0);

  const activeRegionData = filteredRegions.find(r => r.name === activeRegion) || filteredRegions[0];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Explore Ghana by Region</h2>

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search attractions..."
        className="w-full p-2 border rounded-md mb-4"
      />

      <div className="flex flex-wrap border-b">
        {filteredRegions.map((region) => (
          <button
            key={region.name}
            onClick={() => setActiveRegion(region.name)}
            className={`flex items-center px-4 py-2 text-sm font-medium transition-all ${
              activeRegion === region.name
                ? 'text-green-600 bg-green-50 border-b-2 border-green-600'
                : 'text-gray-600 hover:text-green-600'
            }`}
          >
            {region.name}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-blue-700">{activeRegionData.name}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {activeRegionData.attractions.map((attraction) => (
            <div key={attraction.id} className="bg-white rounded-lg shadow p-4">
              <img
                src={attraction.image}
                alt={attraction.name}
                className="h-40 w-full object-cover rounded mb-3"
              />
              <h4 className="text-md font-bold text-gray-800">{attraction.name}</h4>
              <p className="text-sm text-gray-600">{attraction.description}</p>
              <div className="flex justify-between text-sm text-blue-600 mt-2">
                <span>{attraction.location}</span>
                <Link to={`/explore/${attraction.id}`} className="hover:underline">
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
