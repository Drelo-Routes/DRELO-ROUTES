import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import waterfall from "../../assets/images/kente.jpg"; // ✅ Background image

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
      { id: "mole-park", name: "Mole National Park", descriptionShort: "Ghana’s largest wildlife reserve.", descriptionFull: "Mole National Park is Ghana’s largest and most prestigious protected area. Located in the Savannah Region, it is home to elephants, antelopes, baboons, and over 90 species of mammals, as well as abundant birdlife. Visitors can embark on guided walking safaris and vehicle safaris for up-close wildlife experiences.", location: "Damongo", image: "https://worldbank.scene7.com/is/image/worldbankprod/ghana-mole-national-park-v3?wid=780&hei=439&qlt=85,0&resMode=sharp" },
      { id: "larabanga-mosque", name: "Larabanga Mosque", descriptionShort: "Oldest mosque in Ghana.", descriptionFull: "The Larabanga Mosque is one of the oldest mosques in West Africa, built in the Sudanese architectural style. It holds historical and spiritual significance and is a key tourist attraction in the Northern Region.", location: "Larabanga", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFqwSlfpAZI6e49p3rFK-Q4oA1kZqMuKqmDw&s" },
      { id: "yendi-palace", name: "Yendi Palace", descriptionShort: "Seat of the Dagbon traditional council.", descriptionFull: "The Yendi Palace, home to the Yaa Naa (King of Dagbon), is an important traditional seat in Ghana. It serves as the cultural and political center for the Dagbon Kingdom.", location: "Yendi", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Gbewaa_palace_in_Yendi.jpg/1024px-Gbewaa_palace_in_Yendi.jpg" },
      { id: "nalerigu-wall", name: "Nalerigu Defense Wall", descriptionShort: "Ancient defensive structure.", descriptionFull: "Built in the 16th century, the Nalerigu Defense Wall served as a protective structure for the inhabitants against slave raiders. It remains a historical monument and an important cultural relic.", location: "Nalerigu", image: "https://wp-haunsinafrica.s3.amazonaws.com/wp-content/uploads/sites/10/2019/05/17162651/20160430-whaun-nalerigu-najeringa-defense-wall-north-east-region-ghana-0818-1920x1280.jpg" },
      { id: "tamale-cultural", name: "Tamale Cultural Centre", descriptionShort: "Showcase of Northern culture and art.", descriptionFull: "The Tamale Cultural Centre preserves and promotes the arts and culture of Northern Ghana. Visitors can explore exhibitions of crafts, traditional dance performances, and artisan workshops.", location: "Tamale", image: "https://ghanaremembers.com/storage/public/tamale-central-market.jpg" },
      { id: "salaga-slave-market", name: "Salaga Slave Market", descriptionShort: "Historic slave trade market site.", descriptionFull: "Salaga was a major slave market town during the trans-Saharan trade era. Visitors to the Salaga Slave Market learn about the town’s historical significance and its role in the slave trade.", location: "Salaga", image: "https://cdn.ghanaweb.com/imagelib/pics/400/40030498.jpg" },
      {
  id: "sakpuli-wells",
  name: "Sakpuli Slave Wells",
  descriptionShort: "Historical slave trade wells.",
  descriptionFull: "Located near Yendi, the Sakpuli Slave Wells are an important historical reminder of the trans-Saharan slave trade routes. These ancient wells provided water for caravans and slaves during their long journeys across West Africa. Today, the site stands as a silent testimony to Ghana's complex history, attracting visitors interested in cultural heritage and history.",
  location: "Near Yendi",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROtg4Hnkc1tlmR-bB0GEEYd7wuaLIzbN_xAQ&s"
}
,
      
      {
  id: "mognori-eco-village",
  name: "Mognori Eco Village",
  descriptionShort: "Community-based eco-tourism village.",
  descriptionFull: "Mognori Eco Village, located just outside Mole National Park, offers a true taste of rural Ghanaian life. Guests experience traditional drumming, dances, canoe safaris, and learn about local herbal medicine. It's a unique opportunity to engage with the community while supporting sustainable tourism initiatives.",
  location: "Near Mole Park",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGj5Nn81UJIGpsyAp1r3dy27u882moYobF6Q&s"
},
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
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD_tCpOANjOPQ8WlqxnL8uX3elfoaPeagR3w&s"
    },
    {
      id: "independence-arch",
      name: "Independence Arch",
      descriptionShort: "Symbol of Ghana's freedom at Black Star Square.",
      descriptionFull: "Independence Arch at Black Star Square is a powerful national symbol of Ghana’s emancipation from colonial rule. It is one of the largest public squares in the world and hosts national parades and events.",
      location: "Accra",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4BLDk-118zLRWa3KXgD9hbC8VmQCIvtruYg&s"
    },
    {
      id: "arts-centre",
      name: "Arts Centre",
      descriptionShort: "Best place to buy authentic Ghanaian art and crafts.",
      descriptionFull: "The Arts Centre in Accra is a bustling marketplace where local artisans sell crafts, paintings, fabrics, carvings, and jewelry. It’s the perfect place to experience authentic Ghanaian creativity.",
      location: "Accra",
      image: "https://media.timeout.com/images/100674197/image.jpg"
    },
    {
      id: "labadi-beach",
      name: "Labadi Beach",
      descriptionShort: "Vibrant city beach with live music and horseback rides.",
      descriptionFull: "Labadi Beach is one of Accra’s most popular beaches, known for its energetic vibe with drumming, dancing, acrobatics, and food vendors. It’s especially lively on weekends and holidays.",
      location: "Accra",
      image: "https://beta-planet.gvi.co.uk/wp-content/uploads/2023/04/1848482284-2023-apr-14-16-19-41-000000-ghana-beach-with-white-fluffy-clouds-blue-sky-and-2022-11-11-06-21-10-utc.jpg"
    },
    {
      id: "shai-hills",
      name: "Shai Hills Resource Reserve",
      descriptionShort: "Wildlife reserve and hiking trails near Accra.",
      descriptionFull: "Shai Hills is a combination of savannah plains and rocky hills where visitors can see baboons, antelopes, and ostriches. It’s perfect for nature walks, rock climbing, and learning about the Shai people's heritage.",
      location: "Shai Hills",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw96vT4yCDzEq9DbqEGpnFQpC1cblb4JQrCw&s"
    },
    {
      id: "w.e.b-dubois-centre",
      name: "W.E.B Du Bois Centre",
      descriptionShort: "Museum honoring African-American scholar W.E.B. Du Bois.",
      descriptionFull: "The W.E.B. Du Bois Centre preserves the memory of the Pan-Africanist scholar and civil rights leader who made Ghana his home. It houses his mausoleum, personal library, and historical exhibits.",
      location: "Accra",
      image: "https://www.museumnext.com/wp-content/uploads/2021/09/DU-BOIS-MUSEUM-copy.png"
    },
    {
      id: "legon-botanical-gardens",
      name: "Legon Botanical Gardens",
      descriptionShort: "Adventure park with canopy walk and boat rides.",
      descriptionFull: "Legon Botanical Gardens is a hidden gem offering nature trails, canopy walkways, playgrounds, kayaking, and rope obstacle courses. It’s perfect for families and adventure seekers in Accra.",
      location: "Legon",
      image: "https://i0.wp.com/circumspecte.com/wp-content/uploads/2017/04/IMG_3036-1.jpg?fit=900%2C600&ssl=1"
    },
    {
      id: "osu-castle",
      name: "Osu Castle (Christiansborg Castle)",
      descriptionShort: "Historic colonial-era castle.",
      descriptionFull: "Osu Castle, built by the Danes in the 1660s, served as the seat of government during the colonial era and after independence. It remains a site of significant political and historical importance.",
      location: "Accra",
      image: "https://madinghana.wordpress.com/wp-content/uploads/2013/04/osu-castle.jpg?w=640"
    },
    {
      id: "bojo-beach",
      name: "Bojo Beach",
      descriptionShort: "Beautiful private beach ideal for swimming and relaxation.",
      descriptionFull: "Bojo Beach offers a clean, scenic beachfront separated from the mainland by a lagoon. Visitors enjoy canoe rides across the water to the sandy beach and experience a quieter, more peaceful beach atmosphere compared to city beaches.",
      location: "Bortianor",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTWTGpXu8o7_D801ok9FUNLe0aVQKBcVLY3Q&s"
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
      image: "https://momaa.org/wp-content/uploads/2019/10/Cape-Coast-Castle-Museum.png"
    },
    {
      id: "elmina-castle",
      name: "Elmina Castle",
      descriptionShort: "Oldest European building in sub-Saharan Africa.",
      descriptionFull: "Built by the Portuguese in 1482, Elmina Castle is the oldest European structure in sub-Saharan Africa. Like Cape Coast Castle, it served as a hub for the slave trade. Visitors can explore its dungeons, chapels, and towers while learning about Ghana’s colonial past.",
      location: "Elmina",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmm5FxHW7kTWsdfhdEtDlNFhEfTmlluB9RRQ&s"
    },
    {
      id: "kakum-park",
      name: "Kakum National Park",
      descriptionShort: "Famous rainforest canopy walk adventure.",
      descriptionFull: "Kakum National Park is one of Ghana’s premier natural parks, featuring a unique canopy walkway suspended high above the forest floor. The park also hosts diverse wildlife including forest elephants and exotic bird species. Guided nature tours provide educational experiences about the rainforest ecosystem.",
      location: "Cape Coast",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/91/86/09/caption.jpg?w=1200&h=1200&s=1"
    },
    {
      id: "fort-amsterdam",
      name: "Fort Amsterdam",
      descriptionShort: "Dutch colonial fort overlooking the Gulf of Guinea.",
      descriptionFull: "Fort Amsterdam was built by the English and later captured by the Dutch in the 17th century. Located in Abandze, this fort played a major role in the gold and slave trades. Its ruins offer a haunting glimpse into Ghana’s colonial past and beautiful views of the coastline.",
      location: "Abandze",
      image: "https://i.ytimg.com/vi/IHYB5FaHlOU/maxresdefault.jpg"
    },
    {
      id: "mankessim-shrine",
      name: "Mankessim Shrine",
      descriptionShort: "Spiritual site revered by the Fante people.",
      descriptionFull: "The Mankessim Shrine, known locally as Nananom Mpow, is considered the ancestral shrine of the Fante people. It holds deep cultural and spiritual significance and is an important site for traditional rituals and celebrations.",
      location: "Mankessim",
      image: "https://static.wixstatic.com/media/101c1b_7d662e04a7b845aea0788da509529912~mv2.jpg/v1/fill/w_1000,h_667,al_c,q_85,usm_0.66_1.00_0.01/101c1b_7d662e04a7b845aea0788da509529912~mv2.jpg"
    },
    
    {
      id: "slave-river",
      name: "Slave River (Assin Manso)",
      descriptionShort: "Memorial site where slaves bathed before sale.",
      descriptionFull: "Slave River, or Nnonkonsuo, at Assin Manso, served as a final bathing point for captured Africans before being taken to coastal castles. Today, the site serves as a memorial where visitors can reflect on the journey and resilience of enslaved ancestors.",
      location: "Assin Manso",
      image: "https://cdn.getyourguide.com/img/tour/649ff14d00fd6.jpeg/99.jpg"
    },
    {
  id: "fort-william",
  name: "Fort William (Anomabo Fort)",
  descriptionShort: "Historic British fort involved in the slave trade.",
  descriptionFull: "Fort William, also known as Anomabo Fort, is one of the significant British forts along Ghana's coastline, heavily involved in the transatlantic slave trade. Today, it stands as a preserved monument where visitors can explore its dark dungeons, historical artifacts, and learn about its role during colonial times.",
  location: "Anomabo",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHuM-VBjCKknYQghny6CrYzbpqd6hWT2IP0jHaxn4CXhbVvFvitnLHpt9Pc7NNbSOPD54&usqp=CAU" 
    },
{
  id: "hans-cottage-botel",
  name: "Hans Cottage Botel",
  descriptionShort: "Eco-lodge with crocodile ponds and nature trails.",
  descriptionFull: "Hans Cottage Botel is a unique eco-lodge built around a natural crocodile pond, offering guests a one-of-a-kind experience to dine, relax, and observe crocodiles up close. It serves as a serene stop for visitors exploring Cape Coast and Kakum National Park.",
  location: "Cape Coast",
  image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/135742571.jpg?k=7e8449e29a4220068860f60f70a0939121c7336e8ddf342e1f808940f36c8f23&o=&hp=1"
},
{
  id: "brenu-beach",
  name: "Brenu Beach",
  descriptionShort: "Pristine, quiet beach ideal for relaxation.",
  descriptionFull: "Brenu Beach is regarded as one of Ghana’s cleanest and most beautiful beaches. Located near Elmina and Cape Coast, it offers soft golden sands, safe swimming areas, and a tranquil atmosphere, making it perfect for tourists looking to relax after exploring historical sites.",
  location: "Elmina/Cape Coast",
  image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/a1/55/8f/brenu-beach-lodge.jpg?w=500&h=-1&s=1"
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
