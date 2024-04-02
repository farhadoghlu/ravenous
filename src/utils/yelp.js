const apiKey = 'L3O2ub-Zux4WD-0cd7n4w-4oXkKKrJEXVr23CcVbBIQg3e5Y-4JdWmk9ZECxF3jGfN0GpiHDFvNPOI8yM3WvYvsDNSSc5LXJBiVeH97jZT6WgkHUWpswpExPL0QEZnYx'; // replace your api key here
const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';


// function search(term, location, sortBy) {
//     return fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
//         headers: {
//             Authorization: `Bearer ${apiKey}`
//         }
//     }).then(response => {
//         return response.json();
//     }).then(jsonResponse => {
//         if (jsonResponse.businesses) {
//             return jsonResponse.businesses.map(business => ({
//                 id: business.id,
//                 imageSrc: business.image_url,
//                 name: business.name,
//                 address: business.location.address1,
//                 city: business.location.city,
//                 state: business.location.state,
//                 zipCode: business.location.zip_code,
//                 category: business.categories[0].title,
//                 rating: business.rating,
//                 reviewCount: business.review_count
//             }));
//         }
//     });
// }
//
// module.exports = {search};


async function search(term, location, sortBy) {
    try {
        const response = await fetch(`${corsAnywhereUrl}https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        });
        const jsonResponse = await response.json();
        if (jsonResponse.businesses) {
            return jsonResponse.businesses.map(business => ({
                id: business.id,
                imageSrc: business.image_url,
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipCode: business.location.zip_code,
                category: business.categories[0].title,
                rating: business.rating,
                reviewCount: business.review_count
            }));
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return []; // Return an empty array in case of an error
    }
}

module.exports = { search };