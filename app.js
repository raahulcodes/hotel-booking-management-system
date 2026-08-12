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
                 Room Category: ${this.roomType},
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
}

// 1. Creating multiple bookings
let booking1 = new HotelSystem(1110, "Hritik Roshan", 51, "Deluxe", 5, 6500, "Reserved", "Travel and Transport");
let booking2 = new HotelSystem(1111, "Akshay Kumar", 56, "Super Deluxe", 2, 9500, "Waitlist", "Business");

bookings.push(booking1, booking2); //push method to produce objects in arrays for multiple bookings storage

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
