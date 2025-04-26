import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import waterfall from "../../assets/images/waterfall.jpg"; // ✅ Background image

export const regions = [
  {
     name: "Ashanti Region",
    attractions: [
      { id: "manhyia-palace", name: "Manhyia Palace", descriptionShort: "Seat of the Asantehene, Monarch of Ashanti Kingdom.", descriptionFull: "This is the seat of the Asantehene, the Monarch of the Ashanti Kingdom, as well as his official residence. Located in Kumasi, the capital of Ashanti Region. The King receives thousands of visitors around the world each year through private appointments and traditional events. Millions of tourists also visit the Manhyia Palace Museum which served as the private residence of past Kings until it was rehabilitated into a museum in 1995.", location: "Kumasi", image: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Manhyia_Palace_Museum.jpg" },
      { id: "kumasi-zoo", name: "Kumasi Zoo", descriptionShort: "Wildlife species in Kumasi.", descriptionFull: "Home to various wildlife species in the heart of Kumasi. It serves as a center for education, recreation, and wildlife conservation, providing a safe haven for numerous species native to Ghana and Africa.", location: "Kumasi", image: "https://citinewsroom.com/wp-content/uploads/2021/02/Kumasi-Zoo.jpg" },
      { id: "prempeh-museum", name: "Prempeh Museum", descriptionShort: "Showcase of Ashanti culture.", descriptionFull: "The Prempeh Museum showcases the rich culture, history, and legacy of the Ashanti people. It holds historical artifacts, regalia, and exhibits about the Ashanti monarchy.", location: "Kumasi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQADFAKPruAuvUB8L_I7oV4-zDdJgEZT3EeQ&s" },
      { id: "lake-bosomtwe", name: "Lake Bosomtwe", descriptionShort: "Sacred meteorite lake.", descriptionFull: "Lake Bosomtwe is the only natural lake in Ghana, formed by a meteorite impact. It is considered sacred by the Ashanti and is a popular spot for canoeing, swimming, and picnicking.", location: "Bosomtwe", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP9rd9W5Nj4S4QKK5zENfjN6UgX9JmGBJXZg&s" },
      { id: "rattray-park", name: "Rattray Park", descriptionShort: "Modern urban park.", descriptionFull: "Rattray Park is an ultra-modern recreational facility in Kumasi, designed for leisure, fitness, and entertainment. It features fountains, playgrounds, and event spaces.", location: "Kumasi", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/11/32/7a/img-20200923-170112-largejpg.jpg?w=900&h=500&s=1" },
      { id: "owabi-wildlife", name: "Owabi Wildlife Sanctuary", descriptionShort: "Biodiversity hotspot.", descriptionFull: "Owabi Wildlife Sanctuary is a protected area known for its birdwatching opportunities and rich biodiversity. It hosts many species of birds, butterflies, and monkeys.", location: "Kumasi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR83EwQFQcYRRMCdTZTCIQkHqD7qxowMfJHdw&s" },
      { id: "okomfo-anokye-sword-site", name: "Okomfo Anokye Sword Site", descriptionShort: "Legendary immovable sword.", descriptionFull: "The site of the Okomfo Anokye Sword is significant in Ashanti history. Legend says the sword was planted by the priest Okomfo Anokye and cannot be removed, symbolizing the unity of the Ashanti Kingdom.", location: "Kumasi", image: "https://viewghana.com/wp-content/uploads/2025/02/Okomfo-Anokye-Sword-Site3.jpg" },
      {
  id: "bonwire-kente",
  name: "Bonwire Kente Weaving Centre",
  descriptionShort: "Famous village for traditional handwoven Kente cloth.",
  descriptionFull: "Bonwire, located near Kumasi in the Ashanti Region, is globally renowned as the birthplace of Ghana’s iconic Kente cloth. At the Bonwire Kente Weaving Centre, visitors can watch skilled artisans weave intricate, colorful patterns using traditional looms. The center offers rich insights into the history, cultural significance, and symbolism behind various Kente designs. Visitors can also purchase authentic, handwoven Kente fabrics directly from the weavers.",
  location: "Bonwire, Ashanti Region",
  image: "https://visitghana.com/wp-content/uploads/2018/06/1990_adanwomase-kente-village.jpg"
},

      { id: "cultural-center", name: "Kumasi Cultural Centre", descriptionShort: "Center for crafts and art.", descriptionFull: "The Kumasi Cultural Centre hosts artisan workshops, art exhibitions, and traditional performances, celebrating the diverse cultural expressions of the Ashanti people.", location: "Kumasi", image: "https://media-cdn.tripadvisor.com/media/daodao/photo-s/01/a8/e7/13/culture-centre-kumasi.jpg" },
    ]
  },
  {
     name: "Volta Region",
  attractions: [
    { id: "wli-falls", name: "Wli Waterfalls", descriptionShort: "Tallest waterfall in Ghana.", descriptionFull: "Wli Waterfalls, also known as Agumatsa Falls, is the highest waterfall in Ghana and West Africa. Located in the lush Agumatsa Wildlife Sanctuary near Hohoe, it is a breathtaking destination surrounded by rich flora and fauna. Tourists often hike through a scenic trail to reach the falls and enjoy the refreshing natural pools.", location: "Hohoe", image: "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=450,height=450,dpr=2/tour_img/813b87962a8010d0aeffe3aeaac04d40a1ac2dd8ff8533d863b1df291cb1208f.jpg" },
    { id: "mount-afadjato", name: "Mount Afadjato", descriptionShort: "Ghana's highest peak for hiking.", descriptionFull: "Mount Afadjato, standing at 885 meters, is the highest mountain in Ghana. Located near the border with Togo, it is a favorite destination for hikers and nature lovers seeking panoramic views of the Volta landscape. The trail is steep but rewarding with stunning vistas at the summit.", location: "Hohoe", image: "https://visitghana.com/wp-content/uploads/2019/02/2703_Afadjato.jpg" },
    { id: "tagbo-falls", name: "Tagbo Falls", descriptionShort: "Beautiful natural waterfall.", descriptionFull: "Tagbo Falls, nestled near the village of Liati Wote, offers a tranquil and scenic waterfall experience surrounded by rainforest. The falls cascade down several steps, making it a picturesque location for hiking, swimming, and nature photography.", location: "Liati Wote", image: "https://ghanaremembers.com/storage/public/tagbo-falls.jpg" },
    {
  id: "ote-falls",
  name: "Ote Falls",
  descriptionShort: "Hidden waterfall gem in Volta.",
  descriptionFull: "Ote Falls is one of Volta Region’s best-kept secrets, tucked away in Amedzofe near Mount Gemi. This serene and less crowded waterfall flows gracefully over rocky outcrops surrounded by lush greenery. Visitors often embark on a scenic hike through forests and farms to reach the falls, making it a peaceful retreat for nature lovers and adventure seekers. Ote Falls offers an untouched, refreshing experience away from the crowds, perfect for a tranquil afternoon dip or quiet picnic.",
  location: "Amedzofe",
  image: "https://www.graphic.com.gh/images/2023/jun/05/otewaterfallnew.jpg"
}
,
    {
  id: "tafi-atome-monkey-sanctuary",
  name: "Tafi Atome Monkey Sanctuary",
  descriptionShort: "Sacred sanctuary home to playful monkeys.",
  descriptionFull: "Tafi Atome Monkey Sanctuary is a protected forest reserve where sacred Mona monkeys live freely. Located near Hohoe in the Volta Region, the sanctuary was established to conserve the monkeys, which are believed to be spiritual messengers by the local Ewe people. Visitors can interact closely with the friendly monkeys, learn about traditional beliefs, and enjoy guided nature walks through the lush forest.",
  location: "Tafi Atome, Hohoe",
  image: "https://www.ghanabusinessnews.com/wp-content/uploads/2018/07/monkey.jpg"
},
    { id: "akyode-heritage", name: "Akyode Heritage Site", descriptionShort: "Cultural site of the Akyode people.", descriptionFull: "The Akyode Heritage Site in Nkwanta celebrates the history, traditions, and values of the Akyode ethnic group. Festivals, storytelling sessions, and cultural displays help preserve their unique heritage.", location: "Nkwanta", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ruxKAIL5Z8PngUjZBkrdwaG79kSURhzuyA&s" },
    { id: "likpe-caves", name: "Likpe Caves", descriptionShort: "Ancestral cave network.", descriptionFull: "The Likpe Caves comprise a network of six caves historically used by ancestors of the Likpe people for protection. Guided hikes through the caves reveal fascinating insights into the history and resilience of the community.", location: "Likpe", image: "https://ghanaremembers.com/images/http/aHR0cHM6Ly9naGFuYXJlbWVtYmVycy5jb20vc3RvcmFnZS9wdWJsaWMvbGlrcGUtY2F2ZXMtYW5kLXdhdGVyZmFsbHMucG5n/likpe-caves-and-waterfalls.png?p=page_featured&s=3a8665ce5b68a08d21c46e880ce02032" },
    {
  id: "mount-gemi",
  name: "Mount Gemi",
  descriptionShort: "Iconic peak with panoramic vistas.",
  descriptionFull: "Mount Gemi stands proudly near Amedzofe and is one of the highest peaks in Ghana. At the summit is a tall iron cross installed by German missionaries. The hike to the top is relatively easy and offers breathtaking 360-degree views of the surrounding valleys and villages. On clear days, visitors can see as far as Lake Volta, making it a perfect destination for hiking enthusiasts and nature lovers.",
  location: "Amedzofe",
  image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/41/f2/86/mont-gemi-vu-a-partir.jpg?w=900&h=500&s=1"
},
    { id: "volta-lake", name: "Volta Lake", descriptionShort: "World’s largest man-made lake.", descriptionFull: "Lake Volta is one of the largest artificial reservoirs globally, formed by the Akosombo Dam. It plays a vital role in hydroelectric power generation, transportation, fishing, and tourism, offering serene cruises and fishing opportunities.", location: "Akosombo", image: "https://cdn.ghanatrvl.com/images/gh/articles/place-to-see_volta-lake_adomi-bridge_2020-11-04_164_1455-xl.jpg" }
  ]
},
  {
   name: "Northern Region",
    attractions: [
      { id: "mole-park", name: "Mole National Park", descriptionShort: "Ghana’s largest wildlife reserve.", descriptionFull: "Mole National Park is Ghana’s largest and most prestigious protected area. Located in the Savannah Region, it is home to elephants, antelopes, baboons, and over 90 species of mammals, as well as abundant birdlife. Visitors can embark on guided walking safaris and vehicle safaris for up-close wildlife experiences.", location: "Damongo", image: "/images/mole.jpg" },
      { id: "larabanga-mosque", name: "Larabanga Mosque", descriptionShort: "Oldest mosque in Ghana.", descriptionFull: "The Larabanga Mosque is one of the oldest mosques in West Africa, built in the Sudanese architectural style. It holds historical and spiritual significance and is a key tourist attraction in the Northern Region.", location: "Larabanga", image: "/images/larabanga.jpg" },
      { id: "yendi-palace", name: "Yendi Palace", descriptionShort: "Seat of the Dagbon traditional council.", descriptionFull: "The Yendi Palace, home to the Yaa Naa (King of Dagbon), is an important traditional seat in Ghana. It serves as the cultural and political center for the Dagbon Kingdom.", location: "Yendi", image: "/images/yendi.jpg" },
      { id: "nalerigu-wall", name: "Nalerigu Defense Wall", descriptionShort: "Ancient defensive structure.", descriptionFull: "Built in the 16th century, the Nalerigu Defense Wall served as a protective structure for the inhabitants against slave raiders. It remains a historical monument and an important cultural relic.", location: "Nalerigu", image: "/images/nalerigu.jpg" },
      { id: "tamale-cultural", name: "Tamale Cultural Centre", descriptionShort: "Showcase of Northern culture and art.", descriptionFull: "The Tamale Cultural Centre preserves and promotes the arts and culture of Northern Ghana. Visitors can explore exhibitions of crafts, traditional dance performances, and artisan workshops.", location: "Tamale", image: "/images/tamale-cultural.jpg" },
      { id: "salaga-slave-market", name: "Salaga Slave Market", descriptionShort: "Historic slave trade market site.", descriptionFull: "Salaga was a major slave market town during the trans-Saharan trade era. Visitors to the Salaga Slave Market learn about the town’s historical significance and its role in the slave trade.", location: "Salaga", image: "/images/salaga.jpg" },
      { id: "damba-festival", name: "Damba Festival", descriptionShort: "Traditional festival celebrated in Tamale.", descriptionFull: "The Damba Festival is one of the most important traditional festivals in Northern Ghana. Celebrated by the Dagomba people, it features colorful drumming, dancing, horse riding, and storytelling events.", location: "Tamale", image: "/images/damba.jpg" },
      { id: "bui-dam", name: "Bui Dam", descriptionShort: "Major hydroelectric dam.", descriptionFull: "The Bui Dam, located on the Black Volta River, is Ghana's second-largest hydroelectric dam. Apart from its role in electricity generation, the dam area offers scenic views and supports wildlife conservation activities.", location: "Bole", image: "/images/bui.jpg" },
      { id: "tamale-stadium", name: "Aliu Mahama Sports Stadium", descriptionShort: "Main stadium in Northern Ghana.", descriptionFull: "The Aliu Mahama Sports Stadium is a multi-purpose facility primarily used for football matches. It hosted matches during the 2008 African Cup of Nations and serves as a sporting hub in the Northern Region.", location: "Tamale", image: "/images/stadium.jpg" },
      { id: "zongo-market", name: "Tamale Zongo Market", descriptionShort: "Bustling market in Tamale.", descriptionFull: "The Zongo Market in Tamale is one of the liveliest and busiest marketplaces in the region. It offers a glimpse into daily life, commerce, and vibrant community interactions in Northern Ghana.", location: "Tamale", image: "/images/zongo.jpg" }
    ]
  },
  
    {
  name: "Greater Accra",
  attractions: [
    {
      id: "kwame-nkrumah-memorial",
      name: "Kwame Nkrumah Memorial",
      descriptionShort: "Final resting place of Ghana's first president.",
      descriptionFull: "The Kwame Nkrumah Memorial Park is a national monument dedicated to Ghana’s first president. It contains his mausoleum, museum artifacts, and stands as a tribute to Ghana’s independence movement.",
      location: "Accra",
      image: "/images/kwame.jpg"
    },
    {
      id: "independence-arch",
      name: "Independence Arch",
      descriptionShort: "Symbol of Ghana's freedom at Black Star Square.",
      descriptionFull: "Independence Arch at Black Star Square is a powerful national symbol of Ghana’s emancipation from colonial rule. It is one of the largest public squares in the world and hosts national parades and events.",
      location: "Accra",
      image: "/images/independence-arch.jpg"
    },
    {
      id: "arts-centre",
      name: "Arts Centre",
      descriptionShort: "Best place to buy authentic Ghanaian art and crafts.",
      descriptionFull: "The Arts Centre in Accra is a bustling marketplace where local artisans sell crafts, paintings, fabrics, carvings, and jewelry. It’s the perfect place to experience authentic Ghanaian creativity.",
      location: "Accra",
      image: "/images/arts-centre.jpg"
    },
    {
      id: "labadi-beach",
      name: "Labadi Beach",
      descriptionShort: "Vibrant city beach with live music and horseback rides.",
      descriptionFull: "Labadi Beach is one of Accra’s most popular beaches, known for its energetic vibe with drumming, dancing, acrobatics, and food vendors. It’s especially lively on weekends and holidays.",
      location: "Accra",
      image: "/images/labadi.jpg"
    },
    {
      id: "shai-hills",
      name: "Shai Hills Resource Reserve",
      descriptionShort: "Wildlife reserve and hiking trails near Accra.",
      descriptionFull: "Shai Hills is a combination of savannah plains and rocky hills where visitors can see baboons, antelopes, and ostriches. It’s perfect for nature walks, rock climbing, and learning about the Shai people's heritage.",
      location: "Shai Hills",
      image: "/images/shai.jpg"
    },
    {
      id: "aburi-botanical-gardens",
      name: "Aburi Botanical Gardens",
      descriptionShort: "Lush gardens for relaxation and picnics.",
      descriptionFull: "Established in 1890, Aburi Botanical Gardens offer a serene escape from Accra’s bustle. The gardens feature exotic plants, palm-lined avenues, and beautiful landscapes ideal for family outings and photoshoots.",
      location: "Aburi",
      image: "/images/aburi.jpg"
    },
    {
      id: "w.e.b-dubois-centre",
      name: "W.E.B Du Bois Centre",
      descriptionShort: "Museum honoring African-American scholar W.E.B. Du Bois.",
      descriptionFull: "The W.E.B. Du Bois Centre preserves the memory of the Pan-Africanist scholar and civil rights leader who made Ghana his home. It houses his mausoleum, personal library, and historical exhibits.",
      location: "Accra",
      image: "/images/dubois.jpg"
    },
    {
      id: "legon-botanical-gardens",
      name: "Legon Botanical Gardens",
      descriptionShort: "Adventure park with canopy walk and boat rides.",
      descriptionFull: "Legon Botanical Gardens is a hidden gem offering nature trails, canopy walkways, playgrounds, kayaking, and rope obstacle courses. It’s perfect for families and adventure seekers in Accra.",
      location: "Legon",
      image: "/images/legon.jpg"
    },
    {
      id: "osu-castle",
      name: "Osu Castle (Christiansborg Castle)",
      descriptionShort: "Historic colonial-era castle.",
      descriptionFull: "Osu Castle, built by the Danes in the 1660s, served as the seat of government during the colonial era and after independence. It remains a site of significant political and historical importance.",
      location: "Accra",
      image: "/images/osu.jpg"
    },
    {
      id: "bojo-beach",
      name: "Bojo Beach",
      descriptionShort: "Beautiful private beach ideal for swimming and relaxation.",
      descriptionFull: "Bojo Beach offers a clean, scenic beachfront separated from the mainland by a lagoon. Visitors enjoy canoe rides across the water to the sandy beach and experience a quieter, more peaceful beach atmosphere compared to city beaches.",
      location: "Bortianor",
      image: "/images/bojo.jpg"
    }
  ]
}
,
  {
  name: "Central Region",
  attractions: [
    {
      id: "cape-coast-castle",
      name: "Cape Coast Castle",
      descriptionShort: "Historic castle central to the transatlantic slave trade.",
      descriptionFull: "Cape Coast Castle is one of the most significant historical sites related to the transatlantic slave trade. Built by European traders, the castle served as a major holding site for enslaved Africans before being shipped overseas. Tours of the dungeons and museum offer sobering insights into this dark chapter of human history.",
      location: "Cape Coast",
      image: "/images/cape-coast.jpg"
    },
    {
      id: "elmina-castle",
      name: "Elmina Castle",
      descriptionShort: "Oldest European building in sub-Saharan Africa.",
      descriptionFull: "Built by the Portuguese in 1482, Elmina Castle is the oldest European structure in sub-Saharan Africa. Like Cape Coast Castle, it served as a hub for the slave trade. Visitors can explore its dungeons, chapels, and towers while learning about Ghana’s colonial past.",
      location: "Elmina",
      image: "/images/elmina.jpg"
    },
    {
      id: "kakum-park",
      name: "Kakum National Park",
      descriptionShort: "Famous rainforest canopy walk adventure.",
      descriptionFull: "Kakum National Park is one of Ghana’s premier natural parks, featuring a unique canopy walkway suspended high above the forest floor. The park also hosts diverse wildlife including forest elephants and exotic bird species. Guided nature tours provide educational experiences about the rainforest ecosystem.",
      location: "Cape Coast",
      image: "/images/kakum.jpg"
    },
    {
      id: "fort-amsterdam",
      name: "Fort Amsterdam",
      descriptionShort: "Dutch colonial fort overlooking the Gulf of Guinea.",
      descriptionFull: "Fort Amsterdam was built by the English and later captured by the Dutch in the 17th century. Located in Abandze, this fort played a major role in the gold and slave trades. Its ruins offer a haunting glimpse into Ghana’s colonial past and beautiful views of the coastline.",
      location: "Abandze",
      image: "/images/fort.jpg"
    },
    {
      id: "botanicals",
      name: "Cape Coast Botanical Gardens",
      descriptionShort: "Peaceful gardens for nature lovers and families.",
      descriptionFull: "The Cape Coast Botanical Gardens provide a serene retreat filled with a variety of tropical plants and flowers. It’s a beautiful place for family picnics, leisurely strolls, and educational tours about Ghana's indigenous flora.",
      location: "Cape Coast",
      image: "/images/botanical.jpg"
    },
    {
      id: "mankessim-shrine",
      name: "Mankessim Shrine",
      descriptionShort: "Spiritual site revered by the Fante people.",
      descriptionFull: "The Mankessim Shrine, known locally as Nananom Mpow, is considered the ancestral shrine of the Fante people. It holds deep cultural and spiritual significance and is an important site for traditional rituals and celebrations.",
      location: "Mankessim",
      image: "/images/mankessim.jpg"
    },
    {
      id: "ansasamba-market",
      name: "Ansanba Market",
      descriptionShort: "Bustling local market near the coast.",
      descriptionFull: "Ansanba Market (near Cape Coast) is a lively trading hub where you can experience daily Ghanaian life. Fresh produce, textiles, seafood, and handicrafts fill the colorful stalls, giving visitors an authentic market experience.",
      location: "Cape Coast",
      image: "/images/anasanba.jpg"
    },
    {
      id: "chiefs-palace",
      name: "Chief’s Palace - Elmina",
      descriptionShort: "Historic residence of Elmina's traditional rulers.",
      descriptionFull: "The Chief’s Palace in Elmina is an important cultural landmark reflecting traditional governance systems. Visitors can learn about the roles of chiefs in Ghanaian society and the palace's architectural significance.",
      location: "Elmina",
      image: "/images/chief.jpg"
    },
    {
      id: "slave-river",
      name: "Slave River (Assin Manso)",
      descriptionShort: "Memorial site where slaves bathed before sale.",
      descriptionFull: "Slave River, or Nnonkonsuo, at Assin Manso, served as a final bathing point for captured Africans before being taken to coastal castles. Today, the site serves as a memorial where visitors can reflect on the journey and resilience of enslaved ancestors.",
      location: "Assin Manso",
      image: "/images/slave-river.jpg"
    },
    {
      id: "brimsu-dam",
      name: "Brimsu Dam",
      descriptionShort: "Reservoir supplying water to Cape Coast.",
      descriptionFull: "Brimsu Dam is a critical infrastructure facility providing potable water to Cape Coast and surrounding areas. The scenic area around the dam also offers quiet views and nature exploration opportunities.",
      location: "Cape Coast",
      image: "/images/brimsu.jpg"
    }
  ]
}

];

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeRegion, setActiveRegion] = useState(regions[0].name);
  const navigate = useNavigate();

  const filteredRegions = regions.map((region) => {
    const filteredAttractions = region.attractions.filter((attraction) =>
      attraction.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return { ...region, attractions: filteredAttractions };
  }).filter(region => region.attractions.length > 0);

  const activeRegionData = filteredRegions.find(r => r.name === activeRegion) || filteredRegions[0];

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-6"
      style={{ backgroundImage: `url(${waterfall})` }}
    >
      <div className="max-w-4xl w-full bg-gradient-to-br from-white to-green-50 rounded-xl shadow-lg overflow-hidden border border-green-100">

        <div className="bg-gradient-to-r from-green-600 to-lime-500 p-6 relative">
          <button
            onClick={() => navigate("/home")}
            className="absolute right-4 top-4 sm:right-6 sm:top-5 text-white font-bold hover:underline text-sm"
          >
            ← Back
          </button>
          <h2 className="text-3xl font-bold text-white">Explore Ghana by Region</h2>
          <p className="text-lime-100 mt-1 text-base">Discover beautiful places across Ghana</p>
        </div>

        <div className="p-6">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search attractions..."
            className="w-full p-2 border rounded-md mb-4"
          />

          <div className="flex flex-wrap border-b overflow-x-auto">
            {filteredRegions.map((region) => (
              <button
                key={region.name}
                onClick={() => setActiveRegion(region.name)}
                className={`flex items-center px-4 py-2 text-sm font-semibold transition whitespace-nowrap ${
                  activeRegion === region.name
                    ? 'text-green-600 bg-green-50 border-b-2 border-green-600'
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                {region.name}
              </button>
            ))}
          </div>

          <div className="space-y-2 mt-6">
            <h3 className="text-xl font-semibold text-blue-700">{activeRegionData.name}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              {activeRegionData.attractions.map((attraction) => (
                <div key={attraction.id} className="bg-white rounded-lg shadow p-4">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="h-40 w-full object-cover rounded mb-3"
                  />
                  <h4 className="text-md font-bold text-gray-800">{attraction.name}</h4>
                  <p className="text-sm text-gray-600">{attraction.descriptionShort}</p>

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

      </div>
    </div>
  );
};

export default Explore;
