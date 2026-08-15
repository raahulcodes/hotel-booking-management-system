// creating a booking overview in the form of empty array (push method will fill the values inside it)
let bookings = [];

// creating a class for private fields(so that they must not be accessed outside the system)
class HotelSystem
{
    #bookingId;
    #customerName;
    #customerAge;
    #roomType;
    #nightsToStay;
    #priceOfRoom;
    #bookingStatus;
    #servicesBooked;
    constructor(bookingId, customerName, customerAge, roomType, nightsToStay, priceOfRoom, bookingStatus, servicesBooked)
    {
        this.#bookingId = bookingId;
        this.#customerName = customerName;
        this.#customerAge = customerAge;
        this.#roomType = roomType;
        this.#nightsToStay = nightsToStay;
        this.#priceOfRoom = priceOfRoom;
        this.#bookingStatus = bookingStatus;
        this.#servicesBooked = servicesBooked;
    }

    // returning the required private fields outside the system class to be accessed using getter
    get fields()
    {
        return ` Booking Id: ${this.#bookingId},
                 Customer Name: ${this.#customerName},
                 Customer Age: ${this.#customerAge},
                 Room Category: ${this.#roomType},
                 Nights to Stay: ${this.#nightsToStay}
                 Room Price: ${this.#priceOfRoom},
                 Booking Status: ${this.#bookingStatus},
                 Services Booked: ${this.#servicesBooked}`
    }

    // returning the required private field ID outside the system class to be accessed using getter
    get iD()
    {   
        return this.#bookingId;
    }

    // returning the required private field customerName outside the system class to be accessed using getter
    get custNam()
    {   
        return this.#customerName;
    }

    // returning the required private field roomType outside the system class to be accessed using getter
    get roomCat()
    {   
        return this.#roomType;
    }

    // returning the required private field bookingStatus outside the system class to be accessed using getter
    get bookConf()
    {   
        return this.#bookingStatus;
    }

    // returning the required private field roomPrice after adding 5% gst outside the system class to be accessed using getter
    get bookPrice()
    {   
        return (this.#priceOfRoom * 0.05) + this.#priceOfRoom;
    }

    // returning the required private field roomPrice outside the system class to be accessed using getter
    get rmPrice()
    {   
        return this.#priceOfRoom;
    }

    // creating a method for cancellation of bookings
    cancelBooking()
    {
        if(this.#bookingStatus==="Waitlist")
        {
            this.#bookingStatus="Cancelled";
        }
    }

    // returning the required private field customeAge outside the system class to be accessed using getter
    get custAge()
    {   
        return this.#customerAge;
    }
}

// 1. Creating multiple bookings
let booking1 = new HotelSystem(1110, "Hritik Roshan", 51, "Deluxe", 5, 6500, "Reserved", "Travel and Transport");
let booking2 = new HotelSystem(1111, "Akshay Kumar", 56, "Super Deluxe", 2, 9500, "Waitlist", "Business");
let booking3 = new HotelSystem(1112, "Abhijeet Sawant", 49, "Deluxe", 1, 6500, "Confirmed", "Travel and Transport");
let booking4 = new HotelSystem(1113, "Rakesh Sharma", 34, "Normal", 3, 2500, "Confirmed", "Wellness and Care");

bookings.push(booking1, booking2, booking3, booking4); //push method to produce objects in arrays for multiple bookings storage

// 2. displaying all the bookings using forEach() array method
bookings.forEach(booking=>
{
    console.log(booking.fields);
}
)

// -------Creating a booking overview in the form of new array using rest parameter
let bookingsNew = [...bookings];

// 3. Searching by Booking Id using filter() array method
let searchBookId = bookingsNew.filter(id=>id.iD===1110);
console.log(searchBookId);

// 4. Searching by Customer Name using filter() array method
let searchCustNam = bookingsNew.filter(id=>id.custNam==="Akshay Kumar");
console.log(searchCustNam);

// 5. Displaying the bookings of Deluxe Rooms using filter() array method
let roomsDeluxe = bookingsNew.filter(roomCat=>roomCat.roomCat==="Deluxe");
console.log(roomsDeluxe);

// 6. Displaying the Confirmed bookings using filter() array method
let confBookings = bookingsNew.filter(booking=>booking.bookConf==="Confirmed");
console.log(confBookings);

// 7. Cancelling a booking using forEach() array method in case booking status is waitlist
bookingsNew.forEach(booking=>
{
    booking.cancelBooking();
}
)

let cancelledBook = bookingsNew.filter(booking=>booking.bookConf==="Cancelled");
console.log(cancelledBook);

// 8. Total Amount for Each Booking
bookingsNew.forEach(booking=>
{
    // creating a totalAmtBooking inside the forEach() to display the totalAmount for each booking seperately 
    let totalAmtBooking = 0;
    totalAmtBooking += booking.bookPrice;
    console.log("Total Booking Amount for this Booking inclusive of 5% tax: र" + totalAmtBooking);
}
);

// 9. Hotel's total expected revenue
let hotelTotRev = bookingsNew.reduce((total, booking)=>
{
    return total + booking.bookPrice;
}, 0);

console.log("Total Expected Revenue: र" + hotelTotRev);

// 10. Finding the booking with highest bookAmount
let highestBookAmt = bookingsNew.reduce((highest, booking)=>
{
    if(highest>booking.rmPrice)
    {
        return highest;
    }
    else 
    {
        return booking.rmPrice;
    }
}, 0);
console.log("Highest Booking price: र" + highestBookAmt);

// 11. Finding the booking with lowest bookAmount
let lowestBookAmt = bookingsNew.reduce((lowest, booking)=>
{
    if(lowest<booking.rmPrice)
    {
        return lowest;
    }
    else 
    {
        return booking.rmPrice;
    }
}, booking1.rmPrice);
console.log("Lowest Booking price: र" + lowestBookAmt);

// 12. Finding the most expensive room type per night
let expensiveRoomType = bookingsNew.reduce((expensive, booking)=>
{
    if(expensive.rmPrice>booking.rmPrice)
    {
        return expensive;
    }

    else 
    {
        return booking  ;    
    }
}, booking1);

console.log("Expensive Room Category is: " + expensiveRoomType.roomCat);

// 13. Sorting bookings by customer name
let sortCustNames = bookingsNew.sort((sort, booking)=>
{
    return sort.custNam.localeCompare(booking.custNam)
});
console.log(sortCustNames);

// 14. Sorting by total booking amount
let sortBookAmt = bookingsNew.sort((sort,booking)=>
{
    return sort.bookPrice - booking.bookPrice;
});
console.log(sortBookAmt);

// 15. Checking if any booking is cancelled
let cancelledBooking = bookingsNew.some(booking=>booking.bookConf==="Cancelled");
if(cancelledBooking)
{
    console.log("There is atleast one cancelled booking");
}
else
{
    console.log("There is no cancelled booking");
}

// 16. checking if ages are greater than 18
let checkCustAge = bookingsNew.every(booking=>booking.custAge>18);
if(checkCustAge)
{
    console.log("All Bookings have valid Age.");
}
else 
{
    console.log("Some Bookings don't have valid Age.");
}

// 17. Displayimg only first bookings
let firstThreeBooking = bookingsNew.slice(0,3);
firstThreeBooking.forEach(booking=>
{
    console.log(booking.fields);
}
)

// 18. Displaying the last booking
let lastBooking = bookingsNew.slice(3,4);
lastBooking.forEach(booking=>
{
    console.log(booking.fields);
}
)
